import { db } from '../database/db.js';
import { sanitizeInput } from '../utils/crypto.js';

/**
 * Get Security Dashboard & Audit Trail
 */
export function getSecurityOverview(req, res) {
  try {
    const auditLogs = db.getAuditLogs();
    const downloadLogs = db.getDownloadLogs();
    const contactMessages = db.getContactMessages();

    res.json({
      success: true,
      securityStatus: {
        owaspHardening: 'Active',
        helmetCSP: 'Enforced',
        razorpayVerification: 'Server-Side Strict HMAC',
        downloadProtection: 'Signed Expiring Tokens',
        rateLimiting: 'Active (5 attempts/15m Auth, 15/m Downloads)'
      },
      auditLogs,
      downloadLogs,
      contactMessagesCount: contactMessages.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch admin security overview.' });
  }
}

/**
 * Manage Users (RBAC Audit)
 */
export function updateUserRole(req, res) {
  try {
    const { userId, newRole } = req.body;

    const allowedRoles = ['Customer', 'Author', 'Editor', 'Administrator'];
    if (!userId || !allowedRoles.includes(newRole)) {
      return res.status(400).json({ error: 'Invalid user ID or target role.' });
    }

    const updated = db.updateUser(userId, { role: newRole });
    if (!updated) {
      return res.status(404).json({ error: 'Target user account not found.' });
    }

    db.logSecurityEvent('USER_ROLE_UPDATED', {
      targetUser: updated.email,
      newRole,
      updatedBy: req.user?.email
    }, 'WARNING');

    res.json({ success: true, message: `User role updated to ${newRole}.`, user: updated });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user role.' });
  }
}
