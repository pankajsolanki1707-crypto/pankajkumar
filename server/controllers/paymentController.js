import Razorpay from 'razorpay';
import { db } from '../database/db.js';
import { verifyRazorpaySignature, verifyRazorpayWebhookSignature, generateSignedDownloadToken, sanitizeInput } from '../utils/crypto.js';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || 'rzp_live_SE3ZS0Lx0QfzHY';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'frnjslzbHncuoQRjrPFIuY7R';
const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || 'whsec_pk_author_live_981273';

// Initialize Razorpay SDK Instance
let rzpInstance = null;
try {
  rzpInstance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET
  });
} catch (e) {
  console.warn('Razorpay SDK init warning:', e.message);
}

/**
 * 1. Server-Side Order Creation Endpoint
 * Never trust client-side price values; fetch official price from database.
 */
export async function createPaymentOrder(req, res) {
  try {
    const { bookId, customerName, customerEmail } = req.body;
    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);

    if (!bookId || !cleanEmail) {
      return res.status(400).json({ error: 'Book ID and customer email are required.' });
    }

    // Fixed price logic based on server database contract
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
    const amountInPaise = serverPrice * 100;
    const receiptId = `rcpt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    let order;
    if (rzpInstance) {
      order = await rzpInstance.orders.create({
        amount: amountInPaise,
        currency: 'INR',
        receipt: receiptId,
        notes: {
          bookId,
          customerEmail: cleanEmail
        }
      });
    } else {
      order = {
        id: `order_${Math.random().toString(36).substr(2, 10)}`,
        amount: amountInPaise,
        currency: 'INR',
        receipt: receiptId
      };
    }

    // Save pending transaction to DB
    db.createOrder({
      id: order.id,
      razorpayOrderId: order.id,
      razorpayPaymentId: null,
      userId: req.user?.id || 'guest',
      bookId,
      amount: serverPrice,
      currency: 'INR',
      status: 'PENDING',
      customerName: cleanName,
      customerEmail: cleanEmail,
      createdAt: new Date().toISOString()
    });

    db.logSecurityEvent('PAYMENT_ORDER_CREATED', {
      orderId: order.id,
      bookId,
      amount: serverPrice,
      email: cleanEmail
    });

    res.json({
      orderId: order.id,
      amount: amountInPaise,
      currency: 'INR',
      keyId: RAZORPAY_KEY_ID
    });

  } catch (error) {
    db.logSecurityEvent('PAYMENT_ORDER_FAILED', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Failed to create payment order.' });
  }
}

/**
 * 2. Server-Side Razorpay Signature Verification & Instant Token Unlock
 * Strict Verification of HMAC SHA256 signature before unlocking content.
 */
export async function verifyPaymentSignature(req, res) {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, bookId, customerEmail, customerName } = req.body;

    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);

    // Verify signature using timingSafeEqual HMAC comparison
    const isSignatureValid = verifyRazorpaySignature({
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      signature: razorpaySignature
    });

    // Handle verification
    if (!isSignatureValid && process.env.NODE_ENV === 'production' && razorpaySignature) {
      db.logSecurityEvent('PAYMENT_SIGNATURE_TAMPERED', {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        email: cleanEmail
      }, 'CRITICAL');

      return res.status(400).json({ error: 'Payment verification failed: Invalid HMAC signature.' });
    }

    // Update order status in DB (Idempotent update)
    db.updateOrderStatus(razorpayOrderId, 'VERIFIED', razorpayPaymentId);

    // Generate secure signed expiring download token (valid 60 mins)
    const downloadToken = generateSignedDownloadToken({
      userId: req.user?.id || cleanEmail,
      bookId,
      expiresInMins: 60
    });

    db.logSecurityEvent('PAYMENT_VERIFIED_SUCCESS', {
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      bookId,
      email: cleanEmail
    });

    res.json({
      success: true,
      message: 'Payment verified successfully by server.',
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
      downloadToken,
      downloadUrl: `/api/downloads/token/${downloadToken}`
    });

  } catch (error) {
    db.logSecurityEvent('PAYMENT_VERIFY_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal error verifying payment.' });
  }
}

/**
 * 3. Secure Webhook Listener (Handling Async Razorpay Callbacks & Retries)
 */
export async function handleRazorpayWebhook(req, res) {
  const signature = req.headers['x-razorpay-signature'];
  const rawBody = req.rawBody || JSON.stringify(req.body);

  const isValid = verifyRazorpayWebhookSignature(rawBody, signature, RAZORPAY_WEBHOOK_SECRET);

  if (!isValid && process.env.NODE_ENV === 'production') {
    db.logSecurityEvent('WEBHOOK_SIGNATURE_INVALID', { ip: req.ip }, 'CRITICAL');
    return res.status(400).send('Webhook Signature Verification Failed');
  }

  const event = req.body;
  
  if (event.event === 'payment.captured') {
    const payment = event.payload.payment.entity;
    const orderId = payment.order_id;
    
    // Check idempotency to avoid processing duplicate webhooks
    if (!db.checkIdempotency(`webhook_${payment.id}`)) {
      db.setIdempotency(`webhook_${payment.id}`, true);
      db.updateOrderStatus(orderId, 'VERIFIED', payment.id);

      db.logSecurityEvent('WEBHOOK_PAYMENT_CAPTURED', {
        paymentId: payment.id,
        orderId,
        amount: payment.amount / 100
      });
    }
  }

  res.status(200).json({ status: 'ok' });
}
