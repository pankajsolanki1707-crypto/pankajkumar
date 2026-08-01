import React, { useState } from 'react';
import { Send, ShieldCheck, Mail, ArrowUpRight, Github, Twitter, Linkedin, CheckCircle2, Lock, FileText, Check, Globe } from 'lucide-react';
import { CATEGORIES } from '../data/books';

export default function Footer({ setActivePage, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      onShowToast('Thank you for subscribing to Pankaj Kumar\'s weekly essay!');
    }
  };

  return (
    <footer className="bg-paper-200 border-t border-paper-300 text-ink-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Card */}
        <div className="bg-paper-100 rounded-3xl p-8 sm:p-12 border border-paper-300 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="px-3 py-1 bg-authorAccent/10 text-authorAccent text-xs font-bold uppercase rounded-md tracking-wider">
              Weekly Thinking Letter
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-ink-900 leading-tight">
              Deep Thinking in a Distracted World
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed max-w-xl">
              Join 28,500+ readers. Every Sunday, Pankaj shares 1 actionable essay on systems engineering, cognitive focus, habits, and deliberate living. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center space-x-3 text-emerald-800 text-sm font-semibold animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>You're subscribed! Check your inbox for the welcome essay.</span>
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
                    className="flex-1 px-4 py-3 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-authorAccent hover:bg-authorAccent-hover text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center space-x-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-ink-500 text-center sm:text-left">
                  Includes free sample chapters + weekly essays. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Middle Navigation Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-ink-900 text-paper-100 flex items-center justify-center font-serif font-bold text-base">
                P
              </div>
              <span className="font-serif text-2xl font-bold text-ink-900">
                Pankaj Kumar
              </span>
            </div>
            <p className="text-xs text-ink-600 leading-relaxed max-w-sm">
              Author platform & knowledge hub dedicated to clear thinking, systems engineering, cognitive focus, technology, and intentional living.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-ink-600">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-paper-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-paper-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-paper-300 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              Explore Site
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              <li><button onClick={() => setActivePage('home')} className="hover:text-authorAccent">Home</button></li>
              <li><button onClick={() => setActivePage('books')} className="hover:text-authorAccent">All Books</button></li>
              <li><button onClick={() => setActivePage('about')} className="hover:text-authorAccent">Biography & Philosophy</button></li>
              <li><button onClick={() => setActivePage('blog')} className="hover:text-authorAccent">Articles & Essays</button></li>
              <li><button onClick={() => setActivePage('reading-list')} className="hover:text-authorAccent">Reading Recommendations</button></li>
              <li><button onClick={() => setActivePage('dashboard')} className="hover:text-authorAccent">My Library Dashboard</button></li>
            </ul>
          </div>

          {/* Subject Clusters */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              Book Clusters
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              {CATEGORIES.slice(1, 6).map((cat) => (
                <li key={cat}>
                  <button 
                    onClick={() => setActivePage('category-archive', cat)}
                    className="hover:text-authorAccent text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO & Trust Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
              SEO & Trust
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-600">
              <li><button onClick={() => setActivePage('sitemap')} className="hover:text-authorAccent">XML Sitemap</button></li>
              <li><button onClick={() => setActivePage('image-sitemap')} className="hover:text-authorAccent">Image Sitemap</button></li>
              <li><button onClick={() => setActivePage('robots')} className="hover:text-authorAccent">Robots.txt</button></li>
              <li><button onClick={() => setActivePage('legal-privacy')} className="hover:text-authorAccent">Privacy Policy</button></li>
              <li><button onClick={() => setActivePage('legal-terms')} className="hover:text-authorAccent">Terms of Service</button></li>
              <li><button onClick={() => setActivePage('legal-refund')} className="hover:text-authorAccent">Refund & Delivery Policy</button></li>
              <li><button onClick={() => setActivePage('legal-cookie')} className="hover:text-authorAccent">Cookie Policy</button></li>
              <li><button onClick={() => setActivePage('legal-accessibility')} className="hover:text-authorAccent">Accessibility Statement</button></li>
              <li><button onClick={() => setActivePage('legal-copyright')} className="hover:text-authorAccent">Copyright Notice</button></li>
            </ul>
          </div>

        </div>

        {/* High-Level Trust Bar */}
        <div className="pt-8 border-t border-paper-300 space-y-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-medium text-ink-700 bg-paper-100 p-4 rounded-2xl border border-paper-300 shadow-sm">
            <span className="flex items-center space-x-1.5 text-blue-900 font-bold">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Accepts PayPal (Global USD)</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Cashfree Payments (INR ₹)</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Visa / Mastercard / Apple Pay</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Instant PDF Delivery</span>
            </span>
            <span className="flex items-center space-x-1.5 text-emerald-800 font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-2 pt-2">
            <p>© {new Date().getFullYear()} Pankaj Kumar. All rights reserved.</p>
            <p className="font-sans text-xs text-ink-400">Official Author Platform & Digital Book Store</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
