import React from 'react';
import { ShieldCheck, Mail, FileText, CheckCircle2, RefreshCcw, Truck, DollarSign } from 'lucide-react';

export default function LegalPage({ type = 'privacy' }) {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    refund: 'Refund, Cancellation & Delivery Policy',
    cookie: 'Cookie Policy',
    accessibility: 'Accessibility Statement',
    copyright: 'Copyright & Intellectual Property Notice'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2 border-b border-paper-300 pb-6">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Payment Gateway & Merchant Compliance Document
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          {titles[type] || 'Legal Policy'}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-500 font-mono pt-1">
          <span>Merchant: Pankaj Kumar Author Platform</span>
          <span>•</span>
          <span>Contact: pankajsolanky@outlook.com</span>
          <span>•</span>
          <span>Currency: INR (₹)</span>
        </div>
      </div>

      <div className="max-w-none text-sm text-ink-700 font-sans leading-relaxed space-y-6">
        
        {/* PRIVACY POLICY */}
        {type === 'privacy' && (
          <>
            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>1. Data Collection & Privacy Practices</span>
              </h3>
              <p>Pankaj Kumar's author platform collects minimal necessary personal information (full name, email address) solely for processing digital book orders, issuing tax invoices, and delivering newsletter subscriptions. We adhere to strict privacy principles and never sell, rent, or share customer data with third-party advertising networks.</p>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Payment Gateway Security</h3>
              <p>All financial transactions are processed securely through authorized payment gateway channels (Cashfree / Razorpay) using 256-bit SSL encryption. We do not store raw card numbers, net banking passwords, or UPI PINs on our servers.</p>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Contact for Privacy Inquiries</h3>
              <p>For data deletion, account export, or privacy questions, email our support team at <a href="mailto:pankajsolanky@outlook.com" className="text-authorAccent underline font-mono">pankajsolanky@outlook.com</a>. Inquiries are answered within 24 to 48 business hours.</p>
            </section>
          </>
        )}

        {/* TERMS OF SERVICE */}
        {type === 'terms' && (
          <>
            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-authorAccent" />
                <span>1. Store Business Model & Clear INR Pricing</span>
              </h3>
              <p>This platform sells original digital PDF ebooks authored by Pankaj Kumar. All product prices are clearly specified on the website in <strong>Indian Rupees (INR / ₹)</strong> (ranging between ₹119 and ₹199 per title) and are inclusive of all applicable taxes. Payment is accepted via UPI, Credit/Debit Cards, Net Banking, and Wallets.</p>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Intellectual Property & Digital Usage Rights</h3>
              <p>All ebooks, PDF downloads, chapter previews, and website copy are the copyrighted property of Pankaj Kumar. A digital purchase grants a personal, non-transferable license to read the file. Re-selling, public distribution, or unauthorized sharing is strictly prohibited.</p>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Governing Law & Jurisdiction</h3>
              <p>These terms and conditions are governed by the laws of India. Any disputes arising in connection with orders or payments shall be subject to the exclusive jurisdiction of the competent courts in India.</p>
            </section>
          </>
        )}

        {/* REFUND, CANCELLATION & SHIPPING POLICY */}
        {type === 'refund' && (
          <>
            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <Truck className="w-5 h-5 text-authorAccent" />
                <span>1. Digital Shipping & Instant Delivery Policy</span>
              </h3>
              <p>All products sold on this platform are digital PDF ebooks. <strong>No physical shipping is required.</strong> Upon successful payment confirmation through Cashfree/Razorpay, digital access is delivered <strong>instantly (within 0 to 5 minutes)</strong> on the checkout order completion screen and backed up in your "My Library" dashboard. A confirmation receipt with secure download access is also dispatched to your email address.</p>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <RefreshCcw className="w-5 h-5 text-emerald-600" />
                <span>2. Refund & Cancellation Policy</span>
              </h3>
              <p>Due to the instant nature of digital goods, orders cannot be cancelled once the PDF file has been downloaded. However, we offer a <strong>100% Money-Back Guarantee / Replacement</strong> under the following conditions:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-ink-700 pt-1">
                <li>Payment was debited from your account, but the PDF download link failed or file was corrupted.</li>
                <li>Duplicate transaction occurred due to network drop during payment processing.</li>
              </ul>
            </section>

            <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span>3. Refund Processing Timeline (5 to 7 Business Days)</span>
              </h3>
              <p>Approved refunds will be processed and credited back to the customer's <strong>original payment source</strong> (UPI, Credit/Debit Card, NetBanking) within <strong>5 to 7 business days</strong>. To request a refund or report a payment issue, email <a href="mailto:pankajsolanky@outlook.com" className="text-authorAccent underline font-mono font-bold">pankajsolanky@outlook.com</a> with your Order ID and payment transaction reference.</p>
            </section>
          </>
        )}

        {/* COOKIE POLICY */}
        {type === 'cookie' && (
          <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
            <h3 className="font-serif text-lg font-bold text-ink-900">Essential Session Cookies</h3>
            <p>We use essential cookies strictly for security authentication, order verification, and preserving your purchased books in "My Library". Third-party advertising cookies are not used.</p>
          </section>
        )}

        {/* ACCESSIBILITY STATEMENT */}
        {type === 'accessibility' && (
          <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
            <h3 className="font-serif text-lg font-bold text-ink-900">WCAG 2.1 AA Standards</h3>
            <p>Our platform is designed to be accessible to all readers, featuring high-contrast text typography, resizable reading fonts, and keyboard navigation support.</p>
          </section>
        )}

        {/* COPYRIGHT NOTICE */}
        {type === 'copyright' && (
          <section className="space-y-2 bg-paper-100 p-6 rounded-2xl border border-paper-300">
            <h3 className="font-serif text-lg font-bold text-ink-900">Copyright Notice</h3>
            <p>© {new Date().getFullYear()} Pankaj Kumar. All rights reserved. Registered author publications and digital works.</p>
          </section>
        )}

      </div>
    </div>
  );
}
