import React, { useState } from 'react';
import { Tag, Copy, Check, X, Sparkles } from 'lucide-react';

export default function AnnouncementBar({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('READER10');
      setCopied(true);
      if (onShowToast) {
        onShowToast('Discount code "READER10" copied to clipboard! (10% OFF)');
      }
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-ink-900 to-emerald-950 text-paper-100 text-xs py-2.5 px-4 shadow-sm border-b border-emerald-800/40 relative animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Banner Content */}
        <div className="flex items-center space-x-2 font-sans font-medium mx-auto sm:mx-0">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
            <Sparkles className="w-3 h-3 animate-pulse" />
          </span>
          <span className="text-paper-100">
            <strong className="text-emerald-300 font-bold">NEW LAUNCH OFFER:</strong> Get 10% OFF on all digital PDF ebooks using discount code <span className="font-mono bg-paper-100/10 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-400/30">READER10</span>
          </span>
        </div>

        {/* Copy Button & Dismiss */}
        <div className="flex items-center space-x-2 mx-auto sm:mx-0">
          <button
            onClick={handleCopyCode}
            className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-ink-900 font-bold text-[11px] rounded-lg transition-all shadow-sm flex items-center space-x-1.5 active:scale-95"
            title="Copy Coupon Code"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-ink-900" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY "READER10"</span>
              </>
            )}
          </button>

          <button
            onClick={() => setDismissed(true)}
            className="text-paper-100/60 hover:text-paper-100 p-1 rounded-md transition-colors"
            title="Close Banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
