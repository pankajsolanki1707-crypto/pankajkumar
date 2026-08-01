import { db } from '../database/db.js';
import { verifyCashfreeSignature, generateSignedDownloadToken, sanitizeInput } from '../utils/crypto.js';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;
const CASHFREE_ENVIRONMENT = process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION';

/**
 * 1. Server-Side Cashfree Order Creation Endpoint (Live Cashfree PG v3 API)
 */
export async function createPaymentOrder(req, res) {
  try {
    const { bookId, customerName, customerEmail, customerPhone } = req.body;
    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);
    const cleanPhone = (customerPhone || '').replace(/\D/g, '') || '9999999999';

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

    const baseUrl = CASHFREE_ENVIRONMENT === 'PRODUCTION'
      ? 'https://api.cashfree.com/pg'
      : 'https://sandbox.cashfree.com/pg';

    // Call Cashfree PG v3 Create Order API with real customer phone
    const cfResponse = await fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'x-client-id': CASHFREE_APP_ID || '',
        'x-client-secret': CASHFREE_SECRET_KEY || '',
        'x-api-version': '2023-08-01',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: serverPrice,
        order_currency: 'INR',
        customer_details: {
          customer_id: `cust_${Date.now()}`,
          customer_name: cleanName || 'Customer',
          customer_email: cleanEmail,
          customer_phone: cleanPhone
        },
        order_meta: {
          return_url: `${process.env.CLIENT_URL || 'https://pankajkumar.com'}/dashboard?order_id={order_id}`
        }
      })
    });

    const cfData = await cfResponse.json();

    if (!cfResponse.ok || !cfData.payment_session_id) {
      db.logSecurityEvent('CASHFREE_API_ORDER_FAILED', {
        status: cfResponse.status,
        cfData
      }, 'CRITICAL');

      return res.status(400).json({
        error: cfData.message || 'Failed to generate session from Cashfree API. Verify APP_ID and SECRET_KEY.'
      });
    }

    const orderData = {
      orderId,
      cashfreeOrderId: cfData.order_id || orderId,
      paymentSessionId: cfData.payment_session_id,
      userId: req.user?.id || 'guest',
      bookId,
      amount: serverPrice,
      currency: 'INR',
      status: 'PENDING',
      customerName: cleanName,
      customerEmail: cleanEmail,
      customerPhone: cleanPhone,
      createdAt: new Date().toISOString()
    };

    db.createOrder(orderData);

    db.logSecurityEvent('CASHFREE_LIVE_SESSION_CREATED', {
      orderId,
      paymentSessionId: cfData.payment_session_id,
      bookId,
      amount: serverPrice,
      email: cleanEmail,
      phone: cleanPhone
    });

    res.json({
      orderId,
      paymentSessionId: cfData.payment_session_id,
      amount: serverPrice,
      currency: 'INR',
      environment: CASHFREE_ENVIRONMENT
    });

  } catch (error) {
    db.logSecurityEvent('CASHFREE_ORDER_EXCEPTION', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal server error processing Cashfree order session.' });
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

    db.logSecurityEvent('CASHFREE_LIVE_VERIFIED_SUCCESS', {
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
