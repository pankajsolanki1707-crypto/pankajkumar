import React from 'react';

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
      <div className="space-y-2 border-b border-paper-300 pb-6">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Legal & Compliance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
          {titles[type] || 'Legal Policy'}
        </h1>
        <p className="text-xs text-ink-500 font-mono">Last updated: July 2026 • Official Platform Document</p>
      </div>

      <div className="max-w-none text-sm text-ink-700 font-sans leading-relaxed space-y-6">
        {type === 'privacy' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Information Collection & Privacy by Design</h3>
              <p>Pankaj Kumar's author platform collects minimal necessary information (full name, email address) solely to deliver digital purchases, issue tax receipts, and process newsletter subscriptions. We follow privacy-by-design principles and never sell, rent, or share customer data with third-party advertisers or data brokers.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Secure Payment Processing</h3>
              <p>All financial transactions are processed directly through Razorpay using 256-bit SSL encryption and server-side HMAC SHA256 signature verification. RAW credit card numbers and UPI PINs are never handled or stored on our servers.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">3. Data Retention & Erasure Requests</h3>
              <p>Customers have full right to request profile data export or complete account erasure in accordance with GDPR principles. To request account deletion, contact pankajsolanky@outlook.com.</p>
            </section>
          </>
        )}

        {type === 'terms' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Intellectual Property & Personal License</h3>
              <p>All books, PDF downloads, chapter excerpts, essays, and software code published on pankajkumar.com are the copyrighted intellectual property of Pankaj Kumar. Digital purchases grant a personal, non-exclusive license to read the material. Redistribution, re-selling, or uploading to public file-sharing networks is strictly prohibited.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Token Protection & Download Rights</h3>
              <p>Generated PDF and EPUB download links are token-protected and time-bounded to prevent unauthorized hotlinking. Purchased books can be re-downloaded at any time through your permanent "My Library" dashboard.</p>
            </section>
          </>
        )}

        {type === 'refund' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Instant Digital Delivery & Refund Eligibility</h3>
              <p>Because digital PDF and EPUB files are delivered instantly upon Razorpay payment confirmation, digital sales are generally final. If you experience technical download issues or file corruption, our automated system will re-issue your download link immediately or process a 100% refund within 48 hours.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">2. Re-Download & Access Guarantee</h3>
              <p>All purchased digital titles remain permanently accessible in your account library without additional maintenance fees.</p>
            </section>
          </>
        )}

        {type === 'cookie' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Essential Security & Authentication Cookies</h3>
              <p>This website uses strict essential HTTP-only cookies (`pk_auth_token`, `pk_csrf_token`) exclusively for user session security, CSRF protection, and keeping you logged into your digital library. We do not track users across external third-party websites.</p>
            </section>
          </>
        )}

        {type === 'accessibility' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Commitment to Inclusive Digital Design</h3>
              <p>We are dedicated to ensuring digital accessibility for readers of all abilities. The platform is designed following WCAG 2.1 AA guidelines, incorporating high-contrast typography, screen-reader friendly semantic HTML5 markup, keyboard navigation support, and resizable fonts in our built-in ebook reader.</p>
            </section>
          </>
        )}

        {type === 'copyright' && (
          <>
            <section className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-ink-900">1. Copyright & Fair Use Notice</h3>
              <p>© {new Date().getFullYear()} Pankaj Kumar. All rights reserved. No part of these publications, including book cover art, chapter texts, and systems engineering frameworks, may be reproduced, distributed, or transmitted in any form without prior written permission from the author.</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
