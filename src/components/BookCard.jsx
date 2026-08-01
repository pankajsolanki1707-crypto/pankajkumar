import React from 'react';
import { BookOpen, ShoppingBag, Eye, Sparkles, Clock, FileText, Quote, ArrowRight } from 'lucide-react';

export default function BookCard({ book, onSelectBook, onOpenSample, onBuyBook }) {
  // Compute estimated reading time based on page count (approx 1.5 mins per page)
  const estReadingMins = Math.round((book.pages || 100) * 1.5);
  const readHours = Math.floor(estReadingMins / 60);
  const readMins = estReadingMins % 60;
  const readTimeStr = readHours > 0 ? `${readHours}h ${readMins}m` : `${readMins} mins`;

  return (
    <div className="group bg-paper-100 rounded-2xl border border-paper-300 hover:border-authorAccent/40 transition-all duration-300 hover:shadow-book-hover flex flex-col justify-between overflow-hidden relative animate-fadeIn">
      
      {/* Top Cover Image Area */}
      <div className="relative p-7 bg-paper-200/50 flex items-center justify-center min-h-[300px] overflow-hidden border-b border-paper-200">
        
        {/* Badges for Featured or Bestseller */}
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-1.5">
          {book.bestseller && (
            <span className="px-2.5 py-1 bg-amber-500/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm flex items-center space-x-1 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              <span>Bestseller</span>
            </span>
          )}
          {book.latestRelease && (
            <span className="px-2.5 py-1 bg-authorAccent text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-sm">
              New Release
            </span>
          )}
        </div>

        {/* Book Cover Graphic with 3D Spine & Hover Elevation */}
        <div 
          onClick={() => onSelectBook(book)}
          className="cursor-pointer transform group-hover:-translate-y-2 group-hover:scale-102 transition-all duration-500 w-48 h-72 rounded-r-lg rounded-l-xs overflow-hidden book-shadow relative book-spine-effect bg-ink-900"
        >
          <img 
            src={book.coverImage} 
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Middle Information Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Reading Specs Line */}
          <div className="flex items-center justify-between text-[11px] font-sans font-semibold uppercase tracking-wider text-authorAccent mb-2">
            <span>{book.category}</span>
            <span className="text-ink-400 font-mono lowercase flex items-center space-x-1">
              <Clock className="w-3 h-3 text-ink-400 inline" />
              <span>{readTimeStr} • {book.pages}p</span>
            </span>
          </div>

          {/* Book Title */}
          <h3 
            onClick={() => onSelectBook(book)}
            className="font-serif text-xl font-bold text-ink-900 hover:text-authorAccent cursor-pointer transition-colors line-clamp-1 mb-1.5"
          >
            {book.title}
          </h3>

          {/* Subtitle / Value Proposition */}
          <p className="text-xs font-serif italic text-ink-600 line-clamp-1 mb-2">
            {book.subtitle}
          </p>

          {/* One-Line Key Learning Quote */}
          <div className="bg-paper-200/60 p-2.5 rounded-lg border-l-2 border-authorAccent mb-4 text-xs text-ink-700 italic font-serif leading-relaxed line-clamp-2">
            "{book.oneLiner || book.tagline}"
          </div>
        </div>

        {/* Pricing & Quick Action Buttons Footer */}
        <div className="pt-4 border-t border-paper-200 space-y-3">
          
          {/* Dual Currency Price Display */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] text-ink-500 block font-medium">Digital PDF Edition</span>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-xl font-bold text-ink-900">
                  ₹{book.prices.pdf}
                </span>
                <span className="text-xs text-ink-500 font-semibold font-mono">
                  / ${book.prices.usd || '1.99'} USD
                </span>
              </div>
            </div>

            <button
              onClick={() => onSelectBook(book)}
              className="text-xs font-semibold text-authorAccent hover:text-authorAccent-hover flex items-center space-x-1"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Buttons: Read Sample, Details, Buy PDF */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onOpenSample(book)}
              className="px-2 py-2 text-xs font-semibold rounded-xl border border-paper-300 hover:border-ink-900 text-ink-800 hover:bg-paper-200 transition-colors flex items-center justify-center space-x-1"
              title="Read Free Sample Chapter"
            >
              <Eye className="w-3.5 h-3.5 text-authorAccent" />
              <span className="hidden sm:inline">Sample</span>
            </button>
            
            <button
              onClick={() => onSelectBook(book)}
              className="px-2 py-2 text-xs font-semibold rounded-xl border border-paper-300 hover:border-ink-900 text-ink-800 hover:bg-paper-200 transition-colors flex items-center justify-center space-x-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={() => onBuyBook(book)}
              className="px-2 py-2 text-xs font-semibold rounded-xl bg-authorAccent hover:bg-authorAccent-hover text-white transition-all flex items-center justify-center space-x-1 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buy PDF</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
