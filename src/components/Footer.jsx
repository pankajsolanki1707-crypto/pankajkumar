import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
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
    <footer className="bg-[#F8F5EE] border-t border-[#D8CBB8] text-[#171717] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Newsletter Card */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D8CBB8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="px-3 py-1 bg-[#243B53]/10 text-[#243B53] text-xs font-bold uppercase rounded tracking-wider inline-block">
              Go Pustak Newsletter
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#171717]">
              One thoughtful idea at a time.
            </h3>
            <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed max-w-xl">
              Get new ebooks, study resources, current affairs digests, and book stories delivered to your inbox. Zero spam.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="p-4 bg-[#355E3B]/10 border border-[#355E3B]/20 rounded-2xl flex items-center space-x-3 text-[#355E3B] text-xs font-semibold animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>You are subscribed! Check your inbox for new reading updates.</span>
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
                    className="flex-1 px-4 py-3 bg-[#F8F5EE] border border-[#D8CBB8] rounded-xl text-xs text-[#171717] placeholder-[#171717]/50 focus:outline-none focus:ring-2 focus:ring-[#243B53]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#243B53] hover:bg-[#1E293B] text-white font-bold text-xs rounded-xl transition-all shadow-xs flex items-center justify-center space-x-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-[#171717]/50 text-center sm:text-left">
                  Includes free sample chapters + study resources. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pt-4">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D8CBB8] bg-white flex items-center justify-center p-0.5 shadow-xs">
                <img src="/go-pustak-logo.png" alt="Go Pustak Official Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#171717]">
                <span className="text-[#C9822B]">Go</span> <span className="text-[#243B53]">Pustak</span>
              </span>
            </div>
            <p className="text-xs font-mono text-[#243B53] font-bold">
              Books • Ideas • Stories
            </p>
            <p className="text-xs text-[#171717]/70 leading-relaxed max-w-sm">
              Go Pustak is a space for book lovers, exam aspirants, and thoughtful listeners. We share ebooks, study resources, book stories, podcasts, and practical learning.
            </p>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-xs text-[#171717] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#171717]/70">
              <li><button onClick={() => setActivePage('ebooks')} className="hover:text-[#243B53]">Ebooks</button></li>
              <li><button onClick={() => setActivePage('free-ebooks')} className="hover:text-[#243B53] font-bold text-[#355E3B]">Free Ebooks</button></li>
              <li><button onClick={() => setActivePage('ebooks')} className="hover:text-[#243B53]">New Releases</button></li>
              <li><button onClick={() => setActivePage('bundles')} className="hover:text-[#243B53]">Bundles</button></li>
              <li><button onClick={() => setActivePage('library')} className="hover:text-[#243B53]">My Library</button></li>
            </ul>
          </div>

          {/* Exams Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-xs text-[#171717] uppercase tracking-wider">
              Exams
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#171717]/70">
              {EXAM_TYPES.map((ex) => (
                <li key={ex.id}>
                  <button onClick={() => setActivePage('exams', ex.id)} className="hover:text-[#243B53] text-left">
                    {ex.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-xs text-[#171717] uppercase tracking-wider">
              Learn
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#171717]/70">
              <li><button onClick={() => setActivePage('articles')} className="hover:text-[#243B53]">Articles</button></li>
              <li><button onClick={() => setActivePage('current-affairs')} className="hover:text-[#243B53]">Current Affairs</button></li>
              <li><button onClick={() => setActivePage('free-ebooks')} className="hover:text-[#243B53]">Reading Guides</button></li>
            </ul>
          </div>

          {/* Support & Publisher Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-xs text-[#171717] uppercase tracking-wider">
              Support & Publisher
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#171717]/70">
              <li><button onClick={() => setActivePage('about')} className="hover:text-[#243B53]">About Go Pustak</button></li>
              <li><button onClick={() => setActivePage('contact')} className="hover:text-[#243B53]">Contact Support</button></li>
              <li><button onClick={() => setActivePage('legal-refund')} className="hover:text-[#243B53]">Refund Policy</button></li>
              <li><button onClick={() => setActivePage('legal-privacy')} className="hover:text-[#243B53]">Privacy Policy</button></li>
              <li><button onClick={() => setActivePage('legal-terms')} className="hover:text-[#243B53]">Terms of Service</button></li>
              <li><button onClick={() => setActivePage('legal-copyright')} className="hover:text-[#243B53]">Copyright & DMCA</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Slogan Bar */}
        <div className="pt-8 border-t border-[#D8CBB8] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#171717]/60 gap-3 text-center sm:text-left">
            <p className="font-serif italic font-bold text-sm text-[#243B53]">
              Go Pustak — where books speak slowly, and ideas stay longer.
            </p>
            <p>© {new Date().getFullYear()} Go Pustak Publishing. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
