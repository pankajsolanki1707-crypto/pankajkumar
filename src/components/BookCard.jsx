import React from 'react';
import { BookOpen, ShoppingBag, Eye, Sparkles } from 'lucide-react';

export default function BookCard({ book, onSelectBook, onOpenSample, onBuyBook }) {
  return (
    <div className="group bg-paper-100 rounded-2xl border border-paper-300 hover:border-authorAccent/50 transition-all duration-300 hover:shadow-book-hover flex flex-col justify-between overflow-hidden">
      
      {/* Top Cover Image Area */}
      <div className="relative p-6 bg-paper-200/60 flex items-center justify-center min-h-[280px] overflow-hidden border-b border-paper-200">
        
        {/* Badges for Featured or Bestseller */}
        <div className="absolute top-4 left-4 z-10 flex flex-col space-y-1">
          {book.bestseller && (
            <span className="px-2.5 py-1 bg-amber-500/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow-sm flex items-center space-x-1 backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              <span>Bestseller</span>
            </span>
          )}
          {book.latestRelease && (
            <span className="px-2.5 py-1 bg-authorAccent text-white text-[11px] font-bold uppercase tracking-wider rounded-md shadow-sm">
              New Release
            </span>
          )}
        </div>

        {/* Book Cover Graphic with 3D Spine Shadow */}
        <div 
          onClick={() => onSelectBook(book)}
          className="cursor-pointer transform group-hover:-translate-y-2 transition-transform duration-300 w-44 h-64 rounded-r-lg rounded-l-xs overflow-hidden shadow-book relative book-spine-effect bg-ink-900"
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
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill */}
          <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-authorAccent mb-2">
            {book.category}
          </div>

          {/* Book Title */}
          <h3 
            onClick={() => onSelectBook(book)}
            className="font-serif text-xl font-bold text-ink-900 hover:text-authorAccent cursor-pointer transition-colors line-clamp-1 mb-2"
          >
            {book.title}
          </h3>

          {/* One-Line Summary */}
          <p className="text-sm text-ink-600 line-clamp-2 leading-relaxed mb-4">
            {book.oneLiner || book.tagline}
          </p>

          {/* Available Formats Badge */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            <span className="px-2.5 py-0.5 bg-authorAccent/10 text-authorAccent text-xs font-semibold rounded-md border border-authorAccent/20">
              PDF Digital Edition
            </span>
          </div>
        </div>

        {/* Pricing & Actions Footer */}
        <div className="pt-4 border-t border-paper-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs text-ink-500 block font-medium">Instant Digital PDF</span>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-ink-900">
                  ₹{book.prices.pdf}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Read Sample, Details, Buy Now */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onOpenSample(book)}
              className="px-2 py-2 text-xs font-semibold rounded-lg border border-paper-300 hover:border-ink-900 text-ink-800 hover:bg-paper-200 transition-colors flex items-center justify-center space-x-1"
              title="Read Free Sample Chapter"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sample</span>
            </button>
            
            <button
              onClick={() => onSelectBook(book)}
              className="px-2 py-2 text-xs font-semibold rounded-lg border border-paper-300 hover:border-ink-900 text-ink-800 hover:bg-paper-200 transition-colors flex items-center justify-center space-x-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={() => onBuyBook(book)}
              className="px-2 py-2 text-xs font-semibold rounded-lg bg-authorAccent hover:bg-authorAccent-hover text-white transition-colors flex items-center justify-center space-x-1 shadow-sm"
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
