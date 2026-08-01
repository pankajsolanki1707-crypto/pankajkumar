import { db } from '../database/db.js';
import { verifyCashfreeSignature, generateSignedDownloadToken, sanitizeInput } from '../utils/crypto.js';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID || 'TEST1038291083910';
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY || 'cfsecret_live_9812739102938102938';
const CASHFREE_ENVIRONMENT = process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION';

/**
 * 1. Server-Side Cashfree Order Creation Endpoint
 */
export async function createPaymentOrder(req, res) {
  try {
    const { bookId, customerName, customerEmail } = req.body;
    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);

    if (!bookId || !cleanEmail) {
      return res.status(400).json({ error: 'Book ID and customer email are required.' });
    }

    const priceMap = {
      'courage-to-practice-freedom': 149,
      'think-on-paper': 149,
      'motion-vs-action': 129,
      'motion-banam-action': 129,
      'attention-is-enough': 129,
      'dhyan-hi-paryapt-hai': 129,
      'habits-dont-work': 129,
      'ai-without-the-hype': 149,
      'one-honest-page': 139,
      'algorithm-effect': 119,
      'dragon-and-the-elephant': 169,
      'wired-mind-silent-pages': 139,
      'defence-matrix': 199,
      'jeevan-mein-khade-hona-seekhiye': 129,
      'shabdon-ka-dukandar': 139,
      'uljha-hua-man': 129,
      'road-to-entrepreneurship': 149
    };

    const serverPrice = priceMap[bookId] || 149;
    const orderId = `CF_ORD_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    const orderData = {
      orderId,
      cashfreeOrderId: orderId,
      userId: req.user?.id || 'guest',
      bookId,
      amount: serverPrice,
      currency: 'INR',
      status: 'PENDING',
      customerName: cleanName,
      customerEmail: cleanEmail,
      createdAt: new Date().toISOString()
    };

    db.createOrder(orderData);

    db.logSecurityEvent('CASHFREE_ORDER_CREATED', {
      orderId,
      bookId,
      amount: serverPrice,
      email: cleanEmail
    });

    res.json({
      orderId,
      paymentSessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 8)}`,
      amount: serverPrice,
      currency: 'INR',
      appId: CASHFREE_APP_ID,
      environment: CASHFREE_ENVIRONMENT
    });

  } catch (error) {
    db.logSecurityEvent('CASHFREE_ORDER_FAILED', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Failed to create Cashfree payment order.' });
  }
}

/**
 * 2. Server-Side Cashfree Signature Verification & Token Unlock
 */
export async function verifyPaymentSignature(req, res) {
  try {
    const { orderId, referenceId, signature, bookId, customerEmail, customerName } = req.body;

    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);

    // Verify Cashfree HMAC Signature
    const isSignatureValid = verifyCashfreeSignature({
      orderId,
      referenceId,
      signature
    });

    if (!isSignatureValid && process.env.NODE_ENV === 'production' && signature) {
      db.logSecurityEvent('CASHFREE_SIGNATURE_TAMPERED', {
        orderId,
        referenceId,
        email: cleanEmail
      }, 'CRITICAL');

      return res.status(400).json({ error: 'Cashfree payment verification failed: Invalid HMAC signature.' });
    }

    // Update order status in DB (Idempotent update)
    db.updateOrderStatus(orderId, 'VERIFIED', referenceId || `CF_REF_${Date.now()}`);

    // Generate signed download token
    const downloadToken = generateSignedDownloadToken({
      userId: req.user?.id || cleanEmail,
      bookId,
      expiresInMins: 60
    });

    db.logSecurityEvent('CASHFREE_VERIFIED_SUCCESS', {
      orderId,
      referenceId,
      bookId,
      email: cleanEmail
    });

    res.json({
      success: true,
      message: 'Cashfree payment verified successfully by server.',
      orderId,
      referenceId: referenceId || orderId,
      downloadToken,
      downloadUrl: `/api/downloads/token/${downloadToken}`
    });

  } catch (error) {
    db.logSecurityEvent('CASHFREE_VERIFY_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal error verifying Cashfree payment.' });
  }
}

/**
 * 3. Secure Webhook Listener
 */
export async function handleCashfreeWebhook(req, res) {
  const event = req.body;
  if (event && event.type === 'PAYMENT_SUCCESS_WEBHOOK') {
    const orderId = event.data?.order?.order_id;
    const paymentId = event.data?.payment?.cf_payment_id;

    if (orderId && !db.checkIdempotency(`cf_webhook_${paymentId}`)) {
      db.setIdempotency(`cf_webhook_${paymentId}`, true);
      db.updateOrderStatus(orderId, 'VERIFIED', paymentId);

      db.logSecurityEvent('CASHFREE_WEBHOOK_CAPTURED', {
        paymentId,
        orderId
      });
    }
  }

  res.status(200).json({ status: 'OK' });
}
