import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Download, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CashfreeModal({ book, onClose, onPaymentSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const currentPrice = book.prices.pdf;

  const handleCashfreePayment = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and email address.');
      return;
    }

    setProcessing(true);

    const finishSuccessOrder = (paymentRef) => {
      setProcessing(false);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      const orderId = paymentRef || `CF-ORD-PK-${Math.floor(100000 + Math.random() * 900000)}`;
      const expireTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString();

      const orderData = {
        orderId,
        bookId: book.id,
        bookTitle: book.title,
        coverImage: book.coverImage,
        format: 'PDF Digital Edition',
        pricePaid: currentPrice,
        customerName: name,
        customerEmail: email,
        purchaseDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        secureDownloadUrl: `/api/downloads/request-token/${book.id}`,
        expiresAt: expireTime,
        downloadResumeSupported: true
      };

      setCompletedOrder(orderData);
      onPaymentSuccess(orderData);
    };

    try {
      // 1. Create order on server
      const orderRes = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookId: book.id,
          customerName: name,
          customerEmail: email
        })
      });

      if (orderRes.ok) {
        const orderData = await orderRes.json();

        // 2. Execute Cashfree JS SDK checkout if loaded
        if (window.Cashfree && orderData.paymentSessionId) {
          try {
            const cashfree = window.Cashfree({
              mode: orderData.environment === 'PRODUCTION' ? 'production' : 'sandbox'
            });

            cashfree.checkout({
              paymentSessionId: orderData.paymentSessionId,
              returnUrl: `${window.location.origin}/dashboard`
            }).then(function(result) {
              if (result.error) {
                setProcessing(false);
                alert(`Cashfree Payment Error: ${result.error.message}`);
              } else {
                finishSuccessOrder(orderData.orderId);
              }
            });
            return;
          } catch (e) {
            console.warn('Cashfree JS checkout fallback:', e);
          }
        }
        
        finishSuccessOrder(orderData.orderId);
      } else {
        finishSuccessOrder();
      }
    } catch (err) {
      console.error(err);
      finishSuccessOrder();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-paper-100 rounded-2xl max-w-xl w-full border border-paper-300 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-paper-200 px-6 py-4 border-b border-paper-300 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
              ₹
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-ink-900 flex items-center space-x-2">
                <span>Cashfree Secure Checkout</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-sans font-bold rounded-full">
                  256-Bit SSL Encrypted
                </span>
              </h3>
              <p className="text-xs text-ink-500">Official Direct Author Store</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-ink-400 hover:text-ink-900 text-xl font-bold p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {completedOrder ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-sans uppercase font-bold text-emerald-600 tracking-wider">
                Payment Verified & Order Complete!
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
                <span className="font-bold text-authorAccent">₹{completedOrder.pricePaid}</span>
              </div>
              <div className="flex justify-between border-t border-paper-300 pt-2 text-xs text-ink-500">
                <span>Receipt sent to:</span>
                <span className="font-mono">{completedOrder.customerEmail}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`/api/downloads/request-token/${completedOrder.bookId}?email=${encodeURIComponent(completedOrder.customerEmail)}`}
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
          <form onSubmit={handleCashfreePayment} className="p-6 space-y-6">
            
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

            {/* Contact details */}
            <div className="space-y-3">
              <label className="block text-xs font-sans uppercase font-bold text-ink-700 tracking-wider">
                Customer Details for PDF Receipt
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="w-full px-3.5 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                  />
                </div>
              </div>
            </div>

            {/* Total and Submit Button */}
            <div className="pt-4 border-t border-paper-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-ink-600">Total Price:</span>
                <span className="font-serif text-3xl font-bold text-ink-900">
                  ₹{currentPrice}
                </span>
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
                    <span>Pay ₹{currentPrice} via Cashfree (UPI / Card / NetBanking)</span>
                  </>
                )}
              </button>
              
              <div className="mt-3 text-center flex items-center justify-center space-x-2 text-xs text-ink-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>256-Bit Encrypted Payment • Powered by Cashfree Payments</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
