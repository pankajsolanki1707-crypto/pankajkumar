import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';
import { db } from '../database/db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'pk_sec_jwt_auth_98741029384710293847102938471029';

/**
 * Production Helmet Security Headers (Cashfree + PayPal + GA Support)
 */
export const configureSecurityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://sdk.cashfree.com",
        "https://www.paypal.com",
        "https://www.sandbox.paypal.com",
        "https://www.googletagmanager.com"
      ],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: [
        "'self'",
        "data:",
        "https://images.unsplash.com",
        "https://sdk.cashfree.com",
        "https://www.paypalobjects.com",
        "https://www.google-analytics.com"
      ],
      connectSrc: [
        "'self'",
        "https://api.cashfree.com",
        "https://sandbox.cashfree.com",
        "https://api-m.paypal.com",
        "https://api-m.sandbox.paypal.com",
        "https://www.google-analytics.com",
        "https://region1.google-analytics.com"
      ],
      frameSrc: [
        "'self'",
        "https://api.cashfree.com",
        "https://sandbox.cashfree.com",
        "https://www.paypal.com",
        "https://www.sandbox.paypal.com"
      ],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  noSniff: true, // X-Content-Type-Options
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
});

/**
 * Rate Limiters to prevent Brute-Force and Denial-of-Service Attacks
 */
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 failed attempts per IP
  message: { error: 'Too many authentication attempts. Please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    db.logSecurityEvent('BRUTE_FORCE_PREVENTION', { ip: req.ip, path: req.path }, 'WARNING');
    res.status(429).json(options.message);
  }
});

export const checkoutRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { error: 'Too many checkout requests. Please slow down.' }
});

export const downloadRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 15,
  message: { error: 'Download limit exceeded. Please wait a minute before requesting another file.' }
});

export const generalApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'API rate limit exceeded. Please try again later.' }
});

/**
 * JWT Authentication & RBAC Middleware
 */
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = (authHeader && authHeader.split(' ')[1]) || req.cookies?.pk_auth_token;

  if (!token) {
    req.user = { role: 'Visitor' };
    return next();
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      db.logSecurityEvent('INVALID_JWT_ATTEMPT', { ip: req.ip, error: err.message }, 'WARNING');
      req.user = { role: 'Visitor' };
      return next();
    }
    req.user = decoded;
    next();
  });
}

/**
 * Enforce Minimum Role Permission (RBAC)
 */
export function requireRole(allowedRoles) {
  return (req, res, next) => {
    const rolesArray = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (!req.user || !rolesArray.includes(req.user.role)) {
      db.logSecurityEvent('UNAUTHORIZED_ACCESS_ATTEMPT', {
        user: req.user?.email || 'Anonymous',
        role: req.user?.role || 'None',
        requiredRoles: rolesArray,
        path: req.path
      }, 'WARNING');

      return res.status(403).json({ error: 'Forbidden: Insufficient privileges to access this resource.' });
    }
    next();
  };
}
