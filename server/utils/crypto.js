import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'pk_sec_jwt_auth_98741029384710293847102938471029';
const DOWNLOAD_TOKEN_SECRET = process.env.DOWNLOAD_TOKEN_SECRET || 'pk_sec_download_sig_102938471029384710293847';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'frnjslzbHncuoQRjrPFIuY7R';

/**
 * Password Hashing (Bcrypt with salt rounds = 12)
 */
export async function hashPassword(password) {
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters long.');
  }
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

/**
 * Server-Side Razorpay Signature Verification (HMAC SHA256)
 * Prevents client-side payment spoofing.
 */
export function verifyRazorpaySignature({ orderId, paymentId, signature }) {
  if (!orderId || !paymentId || !signature) {
    return false;
  }
  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  // Use timingSafeEqual to protect against timing attacks
  try {
    const a = Buffer.from(expectedSignature, 'utf-8');
    const b = Buffer.from(signature, 'utf-8');
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch (e) {
    return false;
  }
}

/**
 * Server-Side Razorpay Webhook Verification
 */
export function verifyRazorpayWebhookSignature(rawBody, webhookSignature, webhookSecret) {
  if (!rawBody || !webhookSignature || !webhookSecret) return false;
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(rawBody)
    .digest('hex');

  try {
    const a = Buffer.from(expectedSignature, 'utf-8');
    const b = Buffer.from(webhookSignature, 'utf-8');
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch (e) {
    return false;
  }
}

/**
 * Signed Expiring Download Token Generation
 * Format: payload.signature (HMAC SHA256)
 */
export function generateSignedDownloadToken({ userId, bookId, expiresInMins = 60 }) {
  const expiresAt = Date.now() + expiresInMins * 60 * 1000;
  const payloadStr = JSON.stringify({ userId, bookId, expiresAt });
  const payloadBase64 = Buffer.from(payloadStr).toString('base64url');

  const signature = crypto
    .createHmac('sha256', DOWNLOAD_TOKEN_SECRET)
    .update(payloadBase64)
    .digest('base64url');

  return `${payloadBase64}.${signature}`;
}

export function verifySignedDownloadToken(token) {
  if (!token || !token.includes('.')) {
    return { valid: false, error: 'Invalid token format.' };
  }

  const [payloadBase64, signature] = token.split('.');

  // Verify HMAC Signature
  const expectedSignature = crypto
    .createHmac('sha256', DOWNLOAD_TOKEN_SECRET)
    .update(payloadBase64)
    .digest('base64url');

  try {
    const a = Buffer.from(signature, 'utf-8');
    const b = Buffer.from(expectedSignature, 'utf-8');
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return { valid: false, error: 'Token signature tampered or invalid.' };
    }

    const payloadStr = Buffer.from(payloadBase64, 'base64url').toString('utf-8');
    const payload = JSON.parse(payloadStr);

    if (Date.now() > payload.expiresAt) {
      return { valid: false, error: 'Signed download link has expired.' };
    }

    return { valid: true, payload };
  } catch (e) {
    return { valid: false, error: 'Malformed token payload.' };
  }
}

/**
 * XSS Input Sanitization
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
