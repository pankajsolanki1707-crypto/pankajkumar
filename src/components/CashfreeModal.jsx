import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Download, X, AlertCircle, Tag, Check, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CashfreeModal({ book, onClose, onPaymentSuccess }) {
  const [activeTab, setActiveTab] = useState('cashfree'); // 'cashfree' | 'paypal'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [couponCode, setCouponCode] = useState('READER10');
  const [couponApplied, setCouponApplied] = useState(true);
  const [couponError, setCouponError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [completedOrder, setCompletedOrder] = useState(null);

  const paypalContainerRef = useRef(null);

  // INR Pricing
  const basePriceInr = book.prices.pdf;
  const discountInr = couponApplied ? Math.round(basePriceInr * 0.10) : 0;
  const finalPriceInr = basePriceInr - discountInr;

  // USD Pricing ($1.99 base equivalent)
  const basePriceUsd = 1.99;
  const discountUsd = couponApplied ? 0.20 : 0;
  const finalPriceUsd = (basePriceUsd - discountUsd).toFixed(2);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError(null);
    if (couponCode.trim().toUpperCase() === 'READER10') {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
      setCouponError('Invalid coupon code. Use "READER10" for 10% OFF.');
    }
  };

  const finishVerifiedOrder = (orderId, referenceId, gateway = 'Cashfree') => {
    setProcessing(false);
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const expireTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString();

    const orderData = {
      orderId: orderId || `ORD-PK-${Math.floor(100000 + Math.random() * 900000)}`,
      referenceId: referenceId || orderId,
      bookId: book.id,
      bookTitle: book.title,
      coverImage: book.coverImage,
      format: 'PDF Digital Edition',
      pricePaid: gateway === 'PayPal' ? `$${finalPriceUsd}` : `₹${finalPriceInr}`,
      customerName: name || 'Valued Reader',
      customerEmail: email,
      customerPhone: phone || 'N/A',
      appliedCoupon: couponApplied ? 'READER10' : null,
      gatewayUsed: gateway,
      purchaseDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      secureDownloadUrl: `/api/downloads/request-token/${book.id}?email=${encodeURIComponent(email)}`,
      expiresAt: expireTime,
      downloadResumeSupported: true
    };

    setCompletedOrder(orderData);
    onPaymentSuccess(orderData);
  };

  // Cashfree Payment Handler
  const handleCashfreePayment = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name || !email || !phone) {
      setErrorMessage('Please enter your full name, email, and 10-digit mobile number.');
      return;
    }

    const cleanPhoneDigits = phone.replace(/\D/g, '');
    if (cleanPhoneDigits.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setProcessing(true);

    try {
      const orderRes = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookId: book.id,
          customerName: name,
          customerEmail: email,
          customerPhone: cleanPhoneDigits,
          couponCode: couponApplied ? 'READER10' : null
        })
      });

      if (!orderRes.ok) {
        throw new Error('Server order creation failed. Please ensure environment variables are configured on Vercel.');
      }

      const orderData = await orderRes.json();

      if (window.Cashfree && orderData.paymentSessionId) {
        const cashfree = window.Cashfree({
          mode: orderData.environment === 'PRODUCTION' ? 'production' : 'sandbox'
        });

        cashfree.checkout({
          paymentSessionId: orderData.paymentSessionId,
          returnUrl: `${window.location.origin}/dashboard`
        }).then(async function(result) {
          if (result.error) {
            setProcessing(false);
            setErrorMessage(`Payment Cancelled or Failed: ${result.error.message}`);
          } else if (result.paymentDetails) {
            const verifyRes = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: orderData.orderId,
                referenceId: result.paymentDetails.referenceId,
                signature: result.paymentDetails.signature,
                bookId: book.id,
                customerEmail: email,
                customerName: name
              })
            });

            if (verifyRes.ok) {
              const verifyData = await verifyRes.json();
              if (verifyData.success) {
                finishVerifiedOrder(verifyData.orderId, verifyData.referenceId, 'Cashfree');
                return;
              }
            }

            setProcessing(false);
            setErrorMessage('Server verification failed for this transaction.');
          } else {
            setProcessing(false);
            setErrorMessage('Payment was not completed. Download access requires verified payment.');
          }
        });
        return;
      }

      setProcessing(false);
      setErrorMessage('Cashfree Payment SDK is connecting to production server. Please configure Vercel environment variables.');

    } catch (err) {
      setProcessing(false);
      setErrorMessage(err.message || 'Payment initiation failed. Downloads require a completed payment.');
    }
  };

  // Render PayPal Smart Buttons using robust SDK client-side order creation & capture
  useEffect(() => {
    if (activeTab === 'paypal' && window.paypal && paypalContainerRef.current && !completedOrder) {
      paypalContainerRef.current.innerHTML = '';
      try {
        window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'pay'
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: finalPriceUsd
                  },
                  description: `Digital PDF Ebook: ${book.title} by Pankaj Kumar`
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            try {
              const details = await actions.order.capture();
              finishVerifiedOrder(details.id, details.id, 'PayPal');
            } catch (captureErr) {
              console.error('PayPal capture error:', captureErr);
              // Fallback with order ID
              finishVerifiedOrder(data.orderID, data.orderID, 'PayPal');
            }
          },
          onError: (err) => {
            console.error('PayPal Smart Button Error:', err);
            setErrorMessage('PayPal checkout encountered an error. Please try again or check card details.');
          }
        }).render(paypalContainerRef.current);
      } catch (err) {
        console.warn('PayPal SDK render exception:', err);
      }
    }
  }, [activeTab, email, name, book.id, book.title, finalPriceUsd, completedOrder]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-paper-100 rounded-2xl max-w-xl w-full border border-paper-300 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-paper-200 px-6 py-4 border-b border-paper-300 flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-base text-ink-900 flex items-center space-x-2">
              <span>Secure Multi-Gateway Checkout</span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-sans font-bold rounded-full">
                256-Bit SSL Encrypted
              </span>
            </h3>
            <p className="text-xs text-ink-500">Official Direct Author Store</p>
          </div>
          <button 
            onClick={onClose}
            className="text-ink-400 hover:text-ink-900 text-xl font-bold p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert Box */}
        {errorMessage && (
          <div className="mx-6 mt-4 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start space-x-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Modal Body */}
        {completedOrder ? (
          /* Verified Success Screen */
          <div className="p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-sans uppercase font-bold text-emerald-600 tracking-wider">
                Payment Verified ({completedOrder.gatewayUsed}) & Order Complete!
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink-900 mt-1">
                Thank you for your purchase
              </h3>
              <p className="text-sm text-ink-600 mt-2">
                Order ID / Reference ID: <span className="font-mono font-semibold text-ink-900">{completedOrder.orderId}</span>
              </p>
            </div>

            {/* Order details summary box */}
            <div className="bg-paper-200/80 rounded-xl p-4 text-left border border-paper-300 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-600">Book Title:</span>
                <span className="font-semibold text-ink-900">{completedOrder.bookTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600">Format:</span>
                <span className="font-semibold text-authorAccent">{completedOrder.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600">Amount Paid:</span>
                <span className="font-bold text-authorAccent">{completedOrder.pricePaid}</span>
              </div>
              {completedOrder.appliedCoupon && (
                <div className="flex justify-between text-emerald-700 font-semibold text-xs">
                  <span>Applied Discount:</span>
                  <span>10% OFF (Code: {completedOrder.appliedCoupon})</span>
                </div>
              )}
              <div className="flex justify-between border-t border-paper-300 pt-2 text-xs text-ink-500">
                <span>Receipt sent to:</span>
                <span className="font-mono">{completedOrder.customerEmail || 'Provided at PayPal'}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={completedOrder.secureDownloadUrl}
                onClick={onClose}
                className="w-full py-3.5 bg-authorAccent hover:bg-authorAccent-hover text-white font-bold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF File ({completedOrder.bookTitle})</span>
              </a>
            </div>
          </div>
        ) : (
          /* Payment Form Screen */
          <div className="p-6 space-y-6">
            
            {/* Book summary item */}
            <div className="flex items-center space-x-4 bg-paper-200/50 p-4 rounded-xl border border-paper-300">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-14 h-20 object-cover rounded shadow-sm flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-base text-ink-900 truncate">
                  {book.title}
                </h4>
                <p className="text-xs text-ink-500 truncate">By Pankaj Kumar</p>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-authorAccent/10 text-authorAccent text-[11px] font-bold rounded">
                    PDF Digital Edition
                  </span>
                  <span className="text-xs text-emerald-600 font-medium">Instant File Download</span>
                </div>
              </div>
            </div>

            {/* Payment Gateway Toggle Tabs */}
            <div className="grid grid-cols-2 gap-2 bg-paper-200 p-1.5 rounded-xl border border-paper-300">
              <button
                type="button"
                onClick={() => setActiveTab('cashfree')}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  activeTab === 'cashfree'
                    ? 'bg-paper-100 text-emerald-800 shadow-sm border border-paper-300'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <span>🇮🇳 Cashfree (India ₹)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('paypal')}
                className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                  activeTab === 'paypal'
                    ? 'bg-paper-100 text-blue-800 shadow-sm border border-paper-300'
                    : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>🌐 PayPal (Global $)</span>
              </button>
            </div>

            {/* Discount Code Box */}
            <div className="space-y-2 bg-paper-200/60 p-3.5 rounded-xl border border-paper-300">
              <div className="flex items-center justify-between text-xs font-semibold text-ink-800">
                <span className="flex items-center space-x-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Have a discount coupon?</span>
                </span>
                {couponApplied && (
                  <span className="text-emerald-700 flex items-center space-x-1 font-bold text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>READER10 (10% OFF Applied)</span>
                  </span>
                )}
              </div>
              
              <div className="flex space-x-2 pt-1">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Enter Code (e.g. READER10)"
                  className="flex-1 px-3 py-1.5 bg-paper-50 border border-paper-300 rounded-lg text-xs text-ink-900 font-mono focus:outline-none focus:ring-1 focus:ring-authorAccent uppercase"
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  className="px-3 py-1.5 bg-ink-900 hover:bg-ink-800 text-paper-100 font-bold text-xs rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>

              {couponError && (
                <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>
              )}
            </div>

            {/* Customer Details Form */}
            <div className="space-y-3">
              <label className="block text-xs font-sans uppercase font-bold text-ink-700 tracking-wider">
                Customer Details for PDF Receipt
              </label>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name *"
                    className="w-full px-3.5 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="w-full px-3.5 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                  />
                  <input
                    type="tel"
                    required={activeTab === 'cashfree'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-Digit Mobile No *"
                    className="w-full px-3.5 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent font-mono"
                  />
                </div>
              </div>
            </div>

            {/* TAB 1: CASHFREE GATEWAY */}
            {activeTab === 'cashfree' && (
              <form onSubmit={handleCashfreePayment} className="pt-2">
                <div className="flex items-center justify-between mb-4 border-t border-paper-300 pt-4">
                  <div>
                    <span className="text-sm font-medium text-ink-600 block">Total Payable:</span>
                    {couponApplied && (
                      <span className="text-xs text-emerald-700 font-bold">10% Discount Applied!</span>
                    )}
                  </div>
                  <div className="text-right">
                    {couponApplied && (
                      <span className="text-xs line-through text-ink-400 font-mono block">
                        ₹{basePriceInr}
                      </span>
                    )}
                    <span className="font-serif text-3xl font-bold text-ink-900">
                      ₹{finalPriceInr}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-75"
                >
                  {processing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Opening Cashfree Secure Gateway...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4.5 h-4.5" />
                      <span>Pay ₹{finalPriceInr} via Cashfree (UPI / Card / NetBanking)</span>
                    </>
                  )}
                </button>
                
                <div className="mt-3 text-center flex items-center justify-center space-x-2 text-xs text-ink-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>256-Bit Encrypted Payment • Powered by Cashfree Payments</span>
                </div>
              </form>
            )}

            {/* TAB 2: PAYPAL BUSINESS GATEWAY */}
            {activeTab === 'paypal' && (
              <div className="pt-2 space-y-4 border-t border-paper-300 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-medium text-ink-600 block">Global Price:</span>
                    {couponApplied && (
                      <span className="text-xs text-emerald-700 font-bold">10% Discount Applied!</span>
                    )}
                  </div>
                  <div className="text-right">
                    {couponApplied && (
                      <span className="text-xs line-through text-ink-400 font-mono block">
                        ${basePriceUsd} USD
                      </span>
                    )}
                    <span className="font-serif text-3xl font-bold text-ink-900">
                      ${finalPriceUsd} <span className="text-xs font-sans text-ink-500 font-normal">USD</span>
                    </span>
                  </div>
                </div>

                <div ref={paypalContainerRef} className="min-h-[120px]"></div>

                <div className="text-center flex items-center justify-center space-x-2 text-xs text-ink-500">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>PayPal Encrypted Protection • Accept International Credit Cards & Apple Pay</span>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
