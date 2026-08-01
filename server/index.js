import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { configureSecurityHeaders, authRateLimiter, checkoutRateLimiter, downloadRateLimiter, generalApiLimiter, authenticateToken, requireRole } from './middleware/security.js';
import { registerUser, loginUser, logoutUser, getCurrentUser } from './controllers/authController.js';
import { createPaymentOrder, verifyPaymentSignature, handleCashfreeWebhook, createPayPalOrder, capturePayPalOrder } from './controllers/paymentController.js';
import { requestDownloadToken, downloadFileWithToken } from './controllers/downloadController.js';
import { getSecurityOverview, updateUserRole } from './controllers/adminController.js';
import { db } from './database/db.js';
import { sanitizeInput } from './utils/crypto.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Production Security Headers (Cashfree + PayPal + GA Support)
app.use(configureSecurityHeaders);

// 2. CORS Configuration (Allow Vercel and local origins)
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// 3. Cookie Parser & Body Parsers
app.use(cookieParser());

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  }
}));
app.use(express.urlencoded({ extended: true }));

// 4. Global JWT Authentication Middleware
app.use(authenticateToken);

// ==========================================
// STATIC XML SITEMAP & ROBOTS.TXT ROUTES
// ==========================================
app.get(['/sitemap.xml', '/api/sitemap.xml'], (req, res) => {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  if (fs.existsSync(sitemapPath)) {
    return res.sendFile(sitemapPath);
  }
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://pankajkumar.com/</loc><lastmod>2026-08-01</lastmod><priority>1.0</priority></url>
  <url><loc>https://pankajkumar.com/books</loc><lastmod>2026-08-01</lastmod><priority>0.9</priority></url>
  <url><loc>https://pankajkumar.com/about</loc><lastmod>2026-08-01</lastmod><priority>0.8</priority></url>
  <url><loc>https://pankajkumar.com/blog</loc><lastmod>2026-08-01</lastmod><priority>0.8</priority></url>
</urlset>`);
});

app.get(['/robots.txt', '/api/robots.txt'], (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send(`User-agent: *
Allow: /
Disallow: /api/downloads/
Disallow: /admin

Sitemap: https://pankajkumar.com/sitemap.xml
`);
});

// 5. Global Rate Limiter for general API endpoints
app.use('/api/', generalApiLimiter);

// ==========================================
// API ROUTES
// ==========================================

// Authentication Routes
app.post('/api/auth/register', authRateLimiter, registerUser);
app.post('/api/auth/login', authRateLimiter, loginUser);
app.post('/api/auth/logout', logoutUser);
app.get('/api/auth/me', getCurrentUser);

// Payment Routes (Cashfree + PayPal Dual Gateway)
app.post('/api/payments/create-order', checkoutRateLimiter, createPaymentOrder);
app.post('/api/payments/verify', checkoutRateLimiter, verifyPaymentSignature);
app.post('/api/payments/webhook', handleCashfreeWebhook);

app.post('/api/payments/paypal-create-order', checkoutRateLimiter, createPayPalOrder);
app.post('/api/payments/paypal-capture-order', checkoutRateLimiter, capturePayPalOrder);

// Protected Digital Downloads (Signed Expiring Tokens)
app.get('/api/downloads/request-token/:bookId', downloadRateLimiter, requestDownloadToken);
app.get('/api/downloads/token/:token', downloadRateLimiter, downloadFileWithToken);

// Customer Library Endpoint
app.get('/api/library', (req, res) => {
  const userEmail = req.user?.email || req.query.email;
  if (!userEmail) return res.json({ library: [] });
  const orders = db.findOrdersByEmail(userEmail);
  res.json({ library: orders });
});

// Contact Form Endpoint (Sanitized & Stored)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const cleanMsg = {
    id: `MSG-${Date.now()}`,
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    subject: sanitizeInput(subject || 'General Inquiry'),
    message: sanitizeInput(message),
    submittedAt: new Date().toISOString()
  };

  db.saveContactMessage(cleanMsg);
  db.logSecurityEvent('CONTACT_FORM_SUBMITTED', { email: cleanMsg.email });

  res.json({ success: true, message: 'Message sent successfully.' });
});

// Admin Security Dashboard Routes (Protected by RBAC: Administrator)
app.get('/api/admin/security-overview', requireRole(['Administrator', 'Author']), getSecurityOverview);
app.post('/api/admin/update-role', requireRole(['Administrator']), updateUserRole);

// ==========================================
// PRODUCTION STATIC SERVING & FALLBACK
// ==========================================
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));

  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
}

// Global Custom Error Handler
app.use((err, req, res, next) => {
  db.logSecurityEvent('UNHANDLED_SERVER_ERROR', { error: err.message, stack: err.stack }, 'CRITICAL');
  res.status(500).json({
    error: 'Internal Server Error: Secure transaction handling enforced.'
  });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(` PANKAJ KUMAR AUTHOR PLATFORM — HARDENED SERVER`);
    console.log(` Status: Server active on http://localhost:${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || 'production'}`);
    console.log(` XML Sitemap: http://localhost:${PORT}/sitemap.xml`);
    console.log(`====================================================`);
  });
}

export default app;
