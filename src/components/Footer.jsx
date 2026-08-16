import React, { useState } from 'react';
import { Send, ShieldCheck, Mail, ArrowUpRight, Github, Twitter, Linkedin, CheckCircle2, Lock, FileText, Check, Globe, BookOpen, Shield } from 'lucide-react';
import { CATEGORIES } from '../data/books';
import { EXAM_TYPES } from '../data/books';

export default function Footer({ setActivePage, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      if (onShowToast) onShowToast('Thank you for subscribing to Go Pustak! Check your inbox for recommendations.');
    }
  };

  return (
    <footer className="bg-paper-200 border-t border-paper-300 text-ink-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Card */}
        <div className="bg-paper-100 rounded-3xl p-8 sm:p-12 border border-paper-300 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase rounded-md tracking-wider inline-block">
              Go Pustak Newsletter
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ink-900 leading-tight">
              One thoughtful idea at a time.
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed max-w-xl">
              Get new ebooks, book stories, study resources, current affairs digests, and thoughtful recommendations from Go Pustak. No spam.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center space-x-3 text-emerald-800 text-sm font-semibold animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>You're subscribed! Check your inbox for new reading materials.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center space-x-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-ink-500 text-center sm:text-left">
                  Includes free sample chapters + study resources. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-paper-100 flex items-center justify-center font-serif font-bold text-lg">
                <BookOpen className="w-5 h-5 text-emerald-200" />
              </div>
              <span className="font-serif text-2xl font-bold text-ink-900">
                Go Pustak
              </span>
            </div>
            <p className="font-serif italic text-sm text-emerald-800">
              "Where books speak slowly, and ideas stay longer."
            </p>
            <p className="text-xs text-ink-600 leading-relaxed max-w-sm">
              Go Pustak is a space for book lovers, exam aspirants, and thoughtful listeners. We share ebooks, study resources, book stories, podcasts, and practical learning across personal development, competitive exams, current affairs, education, technology, and books & ideas.
            </p>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              <li><button onClick={() => setActivePage('ebooks')} className="hover:text-emerald-800">All Ebooks</button></li>
              <li><button onClick={() => setActivePage('free-ebooks')} className="hover:text-emerald-800 font-semibold text-emerald-800">Free Ebooks</button></li>
              <li><button onClick={() => setActivePage('bundles')} className="hover:text-emerald-800">Discounted Bundles</button></li>
              <li><button onClick={() => setActivePage('library')} className="hover:text-emerald-800">My Library</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-emerald-800">About Go Pustak</button></li>
            </ul>
          </div>

          {/* Learn & Media */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              Learn & Media
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              <li><button onClick={() => setActivePage('articles')} className="hover:text-emerald-800">Articles & Insights</button></li>
              <li><button onClick={() => setActivePage('watch')} className="hover:text-emerald-800">Watch YouTube Videos</button></li>
              <li><button onClick={() => setActivePage('listen')} className="hover:text-emerald-800">Listen to Podcasts</button></li>
              <li><button onClick={() => setActivePage('current-affairs')} className="hover:text-emerald-800">Current Affairs Digests</button></li>
            </ul>
          </div>

          {/* Exams & Legal Support */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              Exams & Support
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              {EXAM_TYPES.map((ex) => (
                <li key={ex.id}>
                  <button onClick={() => setActivePage('exams', ex.id)} className="hover:text-emerald-800 text-left">
                    {ex.name}
                  </button>
                </li>
              ))}
              <li className="pt-2"><button onClick={() => setActivePage('contact')} className="hover:text-emerald-800">Contact & Support</button></li>
              <li><button onClick={() => setActivePage('legal-privacy')} className="hover:text-emerald-800">Privacy Policy</button></li>
              <li><button onClick={() => setActivePage('legal-terms')} className="hover:text-emerald-800">Terms of Service</button></li>
              <li><button onClick={() => setActivePage('legal-refund')} className="hover:text-emerald-800">Refund & Delivery Policy</button></li>
            </ul>
          </div>

        </div>

        {/* High-Level Trust Bar */}
        <div className="pt-8 border-t border-paper-300 space-y-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-medium text-ink-700 bg-paper-100 p-4 rounded-2xl border border-paper-300 shadow-sm">
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Razorpay Verified Gateway</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Cashfree Payments (INR ₹ & UPI)</span>
            </span>
            <span className="flex items-center space-x-1.5 text-blue-900 font-bold">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>PayPal Global USD ($)</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Instant Signed PDF & EPUB Access</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-2 pt-2">
            <p>© {new Date().getFullYear()} Go Pustak. All rights reserved.</p>
            <p className="font-sans text-xs text-ink-400">Go Pustak — Books • Ideas • Stories</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
