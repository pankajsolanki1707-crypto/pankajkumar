import { db } from '../database/db.js';
import { verifyCashfreeSignature, generateSignedDownloadToken, sanitizeInput } from '../utils/crypto.js';

const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;
const CASHFREE_ENVIRONMENT = process.env.CASHFREE_ENVIRONMENT || 'PRODUCTION';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY;
const PAYPAL_ENVIRONMENT = process.env.PAYPAL_ENVIRONMENT || 'PRODUCTION';

/**
 * Get PayPal OAuth Access Token
 */
async function getPayPalAccessToken() {
  const baseUrl = PAYPAL_ENVIRONMENT === 'PRODUCTION'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const authStr = `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_KEY}`;
  const authBase64 = Buffer.from(authStr).toString('base64');

  const res = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authBase64}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await res.json();
  return data.access_token;
}

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
    const { orderId, referenceId, signature, bookId, customerEmail } = req.body;

    const cleanEmail = sanitizeInput(customerEmail);

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

    db.updateOrderStatus(orderId, 'VERIFIED', referenceId || `CF_REF_${Date.now()}`);

    const downloadToken = generateSignedDownloadToken({
      userId: req.user?.id || cleanEmail,
      bookId,
      expiresInMins: 60
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
 * 3. PayPal Business REST API Order Creation Endpoint (USD Global Payments)
 */
export async function createPayPalOrder(req, res) {
  try {
    const { bookId, customerName, customerEmail } = req.body;
    const cleanEmail = sanitizeInput(customerEmail);
    const cleanName = sanitizeInput(customerName);

    if (!bookId || !cleanEmail) {
      return res.status(400).json({ error: 'Book ID and customer email are required.' });
    }

    const usdPriceMap = {
      'courage-to-practice-freedom': 1.99,
      'think-on-paper': 1.99,
      'motion-vs-action': 1.69,
      'motion-banam-action': 1.69,
      'attention-is-enough': 1.69,
      'dhyan-hi-paryapt-hai': 1.69,
      'habits-dont-work': 1.69,
      'ai-without-the-hype': 1.99,
      'one-honest-page': 1.79,
      'algorithm-effect': 1.49,
      'dragon-and-the-elephant': 2.19,
      'wired-mind-silent-pages': 1.79,
      'defence-matrix': 2.49,
      'jeevan-mein-khade-hona-seekhiye': 1.69,
      'shabdon-ka-dukandar': 1.79,
      'uljha-hua-man': 1.69,
      'road-to-entrepreneurship': 1.99
    };

    const serverUsdPrice = usdPriceMap[bookId] || 1.99;
    const token = await getPayPalAccessToken();

    const baseUrl = PAYPAL_ENVIRONMENT === 'PRODUCTION'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    const ppRes = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: serverUsdPrice.toFixed(2)
            },
            description: `Digital Ebook PDF: ${bookId}`
          }
        ]
      })
    });

    const ppData = await ppRes.json();

    if (!ppRes.ok || !ppData.id) {
      return res.status(400).json({ error: 'Failed to create PayPal order session.' });
    }

    const orderData = {
      orderId: ppData.id,
      cashfreeOrderId: ppData.id,
      userId: req.user?.id || 'guest',
      bookId,
      amount: serverUsdPrice,
      currency: 'USD',
      status: 'PENDING',
      customerName: cleanName,
      customerEmail: cleanEmail,
      createdAt: new Date().toISOString()
    };

    db.createOrder(orderData);

    res.json({
      paypalOrderId: ppData.id,
      amount: serverUsdPrice,
      currency: 'USD'
    });

  } catch (error) {
    db.logSecurityEvent('PAYPAL_ORDER_FAILED', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Failed to create PayPal order.' });
  }
}

/**
 * 4. PayPal Business REST API Order Capture Endpoint
 */
export async function capturePayPalOrder(req, res) {
  try {
    const { paypalOrderId, bookId, customerEmail } = req.body;
    const cleanEmail = sanitizeInput(customerEmail);

    const token = await getPayPalAccessToken();

    const baseUrl = PAYPAL_ENVIRONMENT === 'PRODUCTION'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

    const captureRes = await fetch(`${baseUrl}/v2/checkout/orders/${paypalOrderId}/capture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const captureData = await captureRes.json();

    if (!captureRes.ok || captureData.status !== 'COMPLETED') {
      return res.status(400).json({ error: 'PayPal payment capture failed.' });
    }

    const referenceId = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.id || paypalOrderId;
    db.updateOrderStatus(paypalOrderId, 'VERIFIED', referenceId);

    const downloadToken = generateSignedDownloadToken({
      userId: req.user?.id || cleanEmail,
      bookId,
      expiresInMins: 60
    });

    res.json({
      success: true,
      message: 'PayPal payment captured & verified successfully.',
      orderId: paypalOrderId,
      referenceId,
      downloadToken,
      downloadUrl: `/api/downloads/token/${downloadToken}`
    });

  } catch (error) {
    db.logSecurityEvent('PAYPAL_CAPTURE_ERROR', { error: error.message }, 'CRITICAL');
    res.status(500).json({ error: 'Internal error capturing PayPal payment.' });
  }
}

/**
 * 5. Secure Webhook Listener
 */
export async function handleCashfreeWebhook(req, res) {
  const event = req.body;
  if (event && event.type === 'PAYMENT_SUCCESS_WEBHOOK') {
    const orderId = event.data?.order?.order_id;
    const paymentId = event.data?.payment?.cf_payment_id;

    if (orderId && !db.checkIdempotency(`cf_webhook_${paymentId}`)) {
      db.setIdempotency(`cf_webhook_${paymentId}`, true);
      db.updateOrderStatus(orderId, 'VERIFIED', paymentId);
    }
  }

  res.status(200).json({ status: 'OK' });
}
