import React from 'react';
import { BookOpen, Download, Eye, ArrowRight, Check, Star, Sparkles, FileText } from 'lucide-react';

export default function EbookCard({ book, onSelectBook, onOpenSample, onBuyBook }) {
  const isFree = book.isFree || book.prices?.pdf === 0;

  return (
    <div className="bg-paper-100 rounded-2xl border border-paper-300 shadow-subtle hover:shadow-elevated hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Cover Thumbnail & Badge */}
      <div className="p-5 pb-0">
        <div 
          onClick={() => onSelectBook(book)}
          className="relative w-full aspect-[3/4] max-h-72 rounded-xl overflow-hidden bg-slate-900 cursor-pointer flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform duration-300"
        >
          <img 
            src={book.coverImage} 
            alt={`${book.title} cover`} 
            className="w-full h-full object-contain rounded shadow-sm"
            loading="lazy"
          />

          {/* Free vs Premium Badge */}
          <div className="absolute top-3 left-3 z-10">
            {isFree ? (
              <span className="px-2.5 py-1 bg-emerald-600 text-white font-sans text-[11px] font-bold uppercase rounded-md shadow-sm flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>FREE EBOOK</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-ink-900/90 backdrop-blur-sm text-paper-100 font-sans text-[10px] font-bold uppercase rounded-md shadow-sm border border-paper-300/30">
                PREMIUM EBOOK
              </span>
            )}
          </div>

          {/* Formats Pill */}
          <div className="absolute bottom-3 right-3 z-10 bg-black/75 backdrop-blur-sm text-paper-100 text-[10px] font-mono px-2 py-0.5 rounded flex items-center space-x-1">
            <FileText className="w-3 h-3 text-emerald-400" />
            <span>{book.fileFormats ? book.fileFormats.join(' • ') : 'PDF • EPUB'}</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          <div className="flex items-center justify-between text-xs text-ink-500 font-sans">
            <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px]">
              {book.category} {book.subcategory ? `• ${book.subcategory}` : ''}
            </span>
            <span className="font-mono">{book.pages} pages</span>
          </div>

          <h3 
            onClick={() => onSelectBook(book)}
            className="font-serif text-lg font-bold text-ink-900 cursor-pointer hover:text-emerald-800 transition-colors line-clamp-2 leading-snug"
          >
            {book.title}
          </h3>

          <p className="text-xs text-ink-600 line-clamp-2 font-sans leading-relaxed">
            {book.subtitle || book.oneLiner}
          </p>

          <div className="text-[11px] text-ink-500 font-medium">
            By <span className="text-ink-900 font-semibold">{book.author?.name || 'Go Pustak Editorial'}</span> • <span className="text-ink-600">{book.language}</span>
          </div>
        </div>

        {/* Pricing & CTA Buttons */}
        <div className="pt-3 border-t border-paper-200 space-y-3">
          
          <div className="flex items-center justify-between">
            <div>
              {isFree ? (
                <span className="text-base font-bold text-emerald-700 font-serif">
                  FREE <span className="text-xs font-normal text-ink-500 font-sans">(Instant Download)</span>
                </span>
              ) : (
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-base font-bold text-ink-900 font-serif">₹{book.prices?.pdf}</span>
                  <span className="text-xs text-ink-500 font-sans">/ ${book.prices?.usd} USD</span>
                </div>
              )}
            </div>

            <button
              onClick={() => onSelectBook(book)}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-900 flex items-center space-x-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Buttons: Sample + Buy/Download */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenSample(book)}
              className="px-3 py-2 bg-paper-200 hover:bg-paper-300 text-ink-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center space-x-1"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-700" />
              <span>Read Sample</span>
            </button>

            {isFree ? (
              <button
                onClick={() => onBuyBook(book)}
                className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            ) : (
              <button
                onClick={() => onBuyBook(book)}
                className="px-3 py-2 bg-ink-900 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Buy Ebook</span>
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
