import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { configureSecurityHeaders, authRateLimiter, checkoutRateLimiter, downloadRateLimiter, generalApiLimiter, authenticateToken, requireRole } from './middleware/security.js';
import { registerUser, loginUser, logoutUser, getCurrentUser } from './controllers/authController.js';
import { createPaymentOrder, verifyPaymentSignature, handleRazorpayWebhook } from './controllers/paymentController.js';
import { requestDownloadToken, downloadFileWithToken } from './controllers/downloadController.js';
import { getSecurityOverview, updateUserRole } from './controllers/adminController.js';
import { db } from './database/db.js';
import { sanitizeInput } from './utils/crypto.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// 1. Production Security Headers (Helmet, CSP, HSTS, Anti-Clickjacking)
app.use(configureSecurityHeaders);

// 2. CORS Configuration (Restricted to trusted client origin)
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// 3. Cookie Parser & Body Parsers
app.use(cookieParser());

// Special Raw Body Saver for Razorpay Webhooks Signature Verification
app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  }
}));
app.use(express.urlencoded({ extended: true }));

// 4. Global JWT Authentication Middleware
app.use(authenticateToken);

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

// Payment Routes (Razorpay Server-Side Verification)
app.post('/api/payments/create-order', checkoutRateLimiter, createPaymentOrder);
app.post('/api/payments/verify', checkoutRateLimiter, verifyPaymentSignature);
app.post('/api/payments/webhook', handleRazorpayWebhook);

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
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));

  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
}

// Global Custom Error Handler (OWASP Exception Masking)
app.use((err, req, res, next) => {
  db.logSecurityEvent('UNHANDLED_SERVER_ERROR', { error: err.message, stack: err.stack }, 'CRITICAL');
  res.status(500).json({
    error: 'Internal Server Error: Secure transaction handling enforced.'
  });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` PANKAJ KUMAR AUTHOR PLATFORM — SECURITY HARDENED SERVER`);
  console.log(` Status: Server active on http://localhost:${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(` Protected PDF Storage: server/protected_storage/`);
  console.log(`====================================================`);
});
