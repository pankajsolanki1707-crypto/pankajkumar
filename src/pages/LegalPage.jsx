import React from 'react';
import { Mail, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function LegalPage({ type = 'privacy' }) {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refund: 'Refund & Delivery Policy',
    cookie: 'Cookie Policy',
    accessibility: 'Accessibility Statement',
    copyright: 'Copyright & Intellectual Property Notice'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2 border-b border-paper-300 pb-6">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Legal & Razorpay Compliance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          {titles[type] || 'Legal Policy'}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-500 font-mono pt-1">
          <span>Official Document • Pankaj Kumar Author Platform</span>
          <span>•</span>
          <span>Contact: pankajsolanky@outlook.com</span>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="max-w-none text-sm text-ink-700 font-sans leading-relaxed space-y-6">
        
        {/* Privacy Policy */}
        {type === 'privacy' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Information Collection & Use</h3>
              <p>Pankaj Kumar's platform collects minimal necessary information (full name, email address) solely to deliver digital purchases, issue tax receipts, and process newsletter subscriptions. We follow strict privacy-by-design principles and never sell, rent, or share customer data with third-party advertisers.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Payment Security (Razorpay)</h3>
              <p>All financial transactions are processed securely through Razorpay using 256-bit SSL encryption and server-side HMAC SHA256 signature verification. RAW credit card numbers, netbanking credentials, and UPI PINs are never handled or stored on our servers.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Data Protection & Erasure Requests</h3>
              <p>Customers have the right to request access, export, or complete deletion of their personal information. To request account deletion, please email <strong>pankajsolanky@outlook.com</strong>.</p>
            </section>
          </>
        )}

        {/* Terms of Service */}
        {type === 'terms' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Intellectual Property & Personal License</h3>
              <p>All books, PDF downloads, chapter excerpts, essays, and software code published on pankajkumar.com are the copyrighted intellectual property of Pankaj Kumar. Digital purchases grant a personal, non-exclusive, non-transferable license to read the material. Commercial redistribution, re-selling, or uploading to public file-sharing networks is strictly prohibited.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Pricing & Currency</h3>
              <p>All digital book prices are clearly displayed on the website in <strong>Indian Rupees (INR / ₹)</strong>, ranging from ₹119 to ₹199 per digital PDF edition. Prices include all applicable taxes.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Digital Download Rights</h3>
              <p>Purchased digital titles remain permanently accessible in your account's "My Library" dashboard for re-download without maintenance fees.</p>
            </section>
          </>
        )}

        {/* Refund & Delivery Policy */}
        {type === 'refund' && (
          <>
            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-authorAccent" />
                <span>1. Instant Digital Delivery Timeline</span>
              </h3>
              <p>Upon successful payment completion via Razorpay, digital PDF books are delivered <strong>instantly</strong>. The customer is immediately presented with an automated download button and the file is permanently unlocked in their <strong>"My Library"</strong> dashboard.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Refund & Cancellation Terms</h3>
              <p>Because digital PDF files are delivered instantly upon purchase, sales are generally non-cancellable once downloaded. However, if you encounter technical download errors, unreadable PDF files, or accidental duplicate transactions, we issue a <strong>100% full refund</strong>.</p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Refund Processing Window</h3>
              <p>Approved refunds are processed through Razorpay back to the customer's original payment method (Bank Account / UPI / Credit Card) within <strong>5 to 7 business days</strong>.</p>
              <p className="text-xs text-ink-600">To request a refund or report a payment issue, email support at <strong>pankajsolanky@outlook.com</strong> with your Order ID.</p>
            </section>
          </>
        )}

        {/* Cookie Policy */}
        {type === 'cookie' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Essential Cookies</h3>
              <p>This website uses strict essential HTTP-only cookies (`pk_auth_token`, `pk_csrf_token`) solely for user session security and keeping you logged into your digital library. We do not use third-party tracking cookies for behavioral advertising.</p>
            </section>
          </>
        )}

        {/* Accessibility Statement */}
        {type === 'accessibility' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Inclusive Web Standards</h3>
              <p>We design following WCAG 2.1 AA guidelines, incorporating high-contrast typography, screen-reader semantic HTML5 markup, keyboard navigation support, and resizable font options.</p>
            </section>
          </>
        )}

        {/* Copyright Notice */}
        {type === 'copyright' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Copyright Ownership</h3>
              <p>© {new Date().getFullYear()} Pankaj Kumar. All rights reserved. Book covers, original texts, and systems engineering frameworks are protected under Indian and international copyright law.</p>
            </section>
          </>
        )}

      </div>

      {/* Footer Compliance Box */}
      <div className="bg-paper-200/80 p-6 rounded-2xl border border-paper-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-authorAccent flex-shrink-0" />
          <div>
            <span className="font-bold text-ink-900 block">Need Legal or Billing Assistance?</span>
            <span className="text-ink-600">Email: <strong>pankajsolanky@outlook.com</strong></span>
          </div>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-full flex items-center space-x-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Razorpay Merchant Verified</span>
        </span>
      </div>

    </div>
  );
}
