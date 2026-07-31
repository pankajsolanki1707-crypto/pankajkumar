import jwt from 'jsonwebtoken';
import { db } from '../database/db.js';
import { hashPassword, comparePassword, sanitizeInput } from '../utils/crypto.js';

const JWT_SECRET = process.env.JWT_SECRET || 'pk_sec_jwt_auth_98741029384710293847102938471029';
const MAX_FAILED_ATTEMPTS = parseInt(process.env.MAX_AUTH_ATTEMPTS || '5', 10);

/**
 * 1. Secure User Registration
 */
export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);

    if (!cleanEmail || !password || password.length < 8) {
      return res.status(400).json({ error: 'Valid email and password (minimum 8 characters) are required.' });
    }

    const existing = db.findUserByEmail(cleanEmail);
    if (existing) {
      return res.status(400).json({ error: 'An account with this email address already exists.' });
    }

    const passwordHash = await hashPassword(password);
    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: cleanName || 'Reader',
      email: cleanEmail,
      passwordHash,
      role: 'Customer', // Roles: Visitor, Customer, Author, Editor, Administrator
      verified: true,
      twoFactorEnabled: false,
      failedLoginAttempts: 0,
      lockoutUntil: null,
      createdAt: new Date().toISOString()
    };

    db.createUser(newUser);
    db.logSecurityEvent('USER_REGISTRATION_SUCCESS', { email: cleanEmail, role: newUser.role });

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });

    res.cookie('pk_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
      token
    });

  } catch (error) {
    db.logSecurityEvent('REGISTRATION_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal server error creating account.' });
  }
}

/**
 * 2. Secure User Login with Account Lockout & Audit Logging
 */
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const cleanEmail = sanitizeInput(email);

    if (!cleanEmail || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = db.findUserByEmail(cleanEmail);
    if (!user) {
      db.logSecurityEvent('LOGIN_FAILED_UNKNOWN_USER', { email: cleanEmail, ip: req.ip }, 'WARNING');
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Check for Account Lockout
    if (user.lockoutUntil && new Date(user.lockoutUntil) > new Date()) {
      db.logSecurityEvent('LOCKED_ACCOUNT_LOGIN_ATTEMPT', { email: cleanEmail, ip: req.ip }, 'WARNING');
      return res.status(423).json({ error: `Account locked due to multiple failed login attempts. Try again after ${new Date(user.lockoutUntil).toLocaleTimeString()}` });
    }

    // Compare Password Hash
    const isMatch = await comparePassword(password, user.passwordHash);

    if (!isMatch) {
      const failedAttempts = (user.failedLoginAttempts || 0) + 1;
      let lockoutUntil = null;

      if (failedAttempts >= MAX_FAILED_ATTEMPTS) {
        lockoutUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString(); // Lock for 15 mins
        db.logSecurityEvent('ACCOUNT_LOCKED_OUT', { email: cleanEmail, ip: req.ip }, 'CRITICAL');
      } else {
        db.logSecurityEvent('LOGIN_FAILED_BAD_PASSWORD', { email: cleanEmail, attempt: failedAttempts, ip: req.ip }, 'WARNING');
      }

      db.updateUser(user.id, { failedLoginAttempts: failedAttempts, lockoutUntil });
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Successful Login: Reset Failed Attempts
    db.updateUser(user.id, { failedLoginAttempts: 0, lockoutUntil: null });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    res.cookie('pk_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    db.logSecurityEvent('USER_LOGIN_SUCCESS', { email: user.email, role: user.role, ip: req.ip });

    res.json({
      success: true,
      message: 'Logged in successfully.',
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token
    });

  } catch (error) {
    db.logSecurityEvent('LOGIN_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal server error during login.' });
  }
}

/**
 * 3. Logout (Clear HTTP-only Cookie)
 */
export function logoutUser(req, res) {
  res.clearCookie('pk_auth_token');
  res.json({ success: true, message: 'Logged out successfully.' });
}

/**
 * 4. Get Current Auth Status
 */
export function getCurrentUser(req, res) {
  if (!req.user || req.user.role === 'Visitor') {
    return res.json({ authenticated: false, user: null });
  }

  const user = db.findUserById(req.user.id);
  if (!user) {
    return res.json({ authenticated: false, user: null });
  }

  res.json({
    authenticated: true,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  });
}
