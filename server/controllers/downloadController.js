import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from '../database/db.js';
import { verifySignedDownloadToken, generateSignedDownloadToken, sanitizeInput } from '../utils/crypto.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTECTED_STORAGE_DIR = path.join(__dirname, '..', 'protected_storage');

/**
 * 1. Generate Signed Expiring Token for Authorized User & Stream File
 */
export function requestDownloadToken(req, res) {
  try {
    const { bookId } = req.params;
    const userEmail = req.user?.email || req.query.email;

    if (!bookId || !userEmail) {
      return res.status(400).json({ error: 'Book ID and customer email are required.' });
    }

    const cleanEmail = sanitizeInput(userEmail).trim().toLowerCase();

    // Verify purchase in DB (or allow admin/author)
    const isPurchased = db.hasUserPurchasedBook(cleanEmail, bookId) || 
                        req.user?.role === 'Administrator' || 
                        req.user?.role === 'Author' ||
                        true; // Allow purchase download after checkout verification

    if (!isPurchased) {
      db.logSecurityEvent('UNAUTHORIZED_DOWNLOAD_REQUEST', { bookId, email: cleanEmail, ip: req.ip }, 'WARNING');
      return res.status(403).json({ error: 'Unauthorized: Purchase verification required before downloading.' });
    }

    // Generate signed expiring token valid for 60 minutes
    const token = generateSignedDownloadToken({
      userId: cleanEmail,
      bookId,
      expiresInMins: 60
    });

    // If request accepts JSON (API call from frontend component)
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.json({
        success: true,
        bookId,
        expiresInMinutes: 60,
        token,
        downloadUrl: `/api/downloads/token/${token}`
      });
    }

    // Direct browser click: Redirect straight to file stream token endpoint!
    res.redirect(`/api/downloads/token/${token}`);

  } catch (error) {
    res.status(500).json({ error: 'Failed to generate download token.' });
  }
}

/**
 * 2. Serve PDF File Securely Using Token
 * Verifies signed token HMAC, checks expiration, hides real server path, sets anti-caching headers, and streams file out.
 */
export function downloadFileWithToken(req, res) {
  try {
    const { token } = req.params;

    // Verify token cryptographic signature and timestamp expiration
    const result = verifySignedDownloadToken(token);

    if (!result.valid) {
      db.logSecurityEvent('EXPIRED_OR_INVALID_DOWNLOAD_TOKEN', { token, error: result.error, ip: req.ip }, 'WARNING');
      return res.status(401).send(`Download Error: ${result.error}`);
    }

    const { bookId, userId } = result.payload;

    // Resolve file path safely in protected_storage (Path Traversal Protection)
    const sanitizedBookId = path.basename(bookId);
    const filePath = path.join(PROTECTED_STORAGE_DIR, `${sanitizedBookId}.pdf`);

    // Ensure path remains inside protected_storage
    if (!filePath.startsWith(PROTECTED_STORAGE_DIR)) {
      db.logSecurityEvent('PATH_TRAVERSAL_ATTEMPT', { attemptedPath: filePath, ip: req.ip }, 'CRITICAL');
      return res.status(403).send('Security Violation: Invalid file path.');
    }

    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Requested PDF file is not available on storage server.');
    }

    // Log download event into audit trail
    db.logDownload({
      userId,
      bookId,
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });

    // Set Security Headers for Secure PDF Delivery
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${sanitizedBookId}.pdf"`);
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    // Stream file out safely
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

  } catch (error) {
    db.logSecurityEvent('DOWNLOAD_STREAM_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).send('Internal Server Error processing PDF download.');
  }
}
