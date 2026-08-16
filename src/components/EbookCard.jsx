import React from 'react';
import { BookOpen, Download, Eye, ArrowRight, FileText } from 'lucide-react';

export default function EbookCard({ book, onSelectBook, onOpenSample, onBuyBook }) {
  const isFree = book.isFree || book.prices?.pdf === 0;

  return (
    <div className="bg-[#F8F5EE] rounded-2xl border border-[#D8CBB8]/80 shadow-xs hover:shadow-md hover:border-[#243B53]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Cover Thumbnail with Whitespace */}
      <div className="p-6 pb-2 flex justify-center bg-[#FAF7F2]">
        <div 
          onClick={() => onSelectBook(book)}
          className="relative w-full aspect-[3/4] max-h-72 rounded-lg overflow-hidden bg-[#171717] cursor-pointer flex items-center justify-center p-2 group-hover:scale-[1.01] transition-transform duration-300 shadow-sm"
        >
          <img 
            src={book.coverImage} 
            alt={`${book.title} cover`} 
            className="w-full h-full object-contain rounded"
            loading="lazy"
          />

          {/* Editorial Free vs Premium Badges */}
          <div className="absolute top-3 left-3 z-10">
            {isFree ? (
              <span className="px-2.5 py-1 bg-[#355E3B] text-white font-sans text-[10px] font-bold uppercase rounded tracking-wider shadow-xs">
                FREE READING
              </span>
            ) : (
              <span className="px-2.5 py-1 bg-[#243B53] text-[#F8F5EE] font-sans text-[9px] font-bold uppercase rounded tracking-wider shadow-xs border border-[#F8F5EE]/20">
                DIGITAL EDITION
              </span>
            )}
          </div>

          {/* Formats Indicator */}
          <div className="absolute bottom-3 right-3 z-10 bg-[#171717]/85 backdrop-blur-xs text-[#F8F5EE] text-[9px] font-mono px-2 py-0.5 rounded flex items-center space-x-1">
            <FileText className="w-3 h-3 text-[#D8CBB8]" />
            <span>{book.fileFormats ? book.fileFormats.join(' • ') : 'PDF • EPUB'}</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          <div className="flex items-center justify-between text-xs text-[#171717]/60 font-sans">
            <span className="font-bold text-[#243B53] uppercase tracking-wider text-[10px]">
              {book.category} {book.subcategory ? `• ${book.subcategory}` : ''}
            </span>
            <span className="font-mono text-[11px]">{book.pages} pages</span>
          </div>

          <h3 
            onClick={() => onSelectBook(book)}
            className="font-serif text-lg font-bold text-[#171717] cursor-pointer hover:text-[#243B53] transition-colors line-clamp-2 leading-snug"
          >
            {book.title}
          </h3>

          <p className="text-xs text-[#171717]/70 line-clamp-2 font-sans leading-relaxed">
            {book.subtitle || book.oneLiner}
          </p>

          <div className="text-[11px] text-[#171717]/60 font-medium">
            By <span className="text-[#171717] font-semibold">{book.author?.name || 'Go Pustak Editorial'}</span> • <span className="text-[#171717]/80">{book.language}</span>
          </div>
        </div>

        {/* Pricing & CTA Buttons */}
        <div className="pt-3 border-t border-[#E8E2D5] space-y-3">
          
          <div className="flex items-center justify-between">
            <div>
              {isFree ? (
                <span className="text-sm font-bold text-[#355E3B] font-serif">
                  FREE <span className="text-[11px] font-normal text-[#171717]/60 font-sans">(Direct Access)</span>
                </span>
              ) : (
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-base font-bold text-[#171717] font-serif">₹{book.prices?.pdf}</span>
                  <span className="text-xs text-[#171717]/60 font-sans">/ ${book.prices?.usd} USD</span>
                </div>
              )}
            </div>

            <button
              onClick={() => onSelectBook(book)}
              className="text-xs font-bold text-[#243B53] hover:underline flex items-center space-x-1"
            >
              <span>View Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Action Buttons: Sample + Buy/Download */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenSample(book)}
              className="px-3 py-2 bg-[#E8E2D5]/60 hover:bg-[#D8CBB8]/50 text-[#171717] text-xs font-semibold rounded-xl transition-colors flex items-center justify-center space-x-1 border border-[#D8CBB8]/40"
            >
              <Eye className="w-3.5 h-3.5 text-[#243B53]" />
              <span>Read Sample</span>
            </button>

            {isFree ? (
              <button
                onClick={() => onBuyBook(book)}
                className="px-3 py-2 bg-[#355E3B] hover:bg-[#2B4B2F] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Free</span>
              </button>
            ) : (
              <button
                onClick={() => onBuyBook(book)}
                className="px-3 py-2 bg-[#243B53] hover:bg-[#1E293B] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1 shadow-xs"
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
