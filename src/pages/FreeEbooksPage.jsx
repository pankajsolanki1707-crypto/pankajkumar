import React from 'react';
import { Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS } from '../data/books';

export default function FreeEbooksPage({ onSelectBook, onOpenSample, onBuyBook }) {
  const affordableBooks = BOOKS.filter(b => b.prices?.pdf === 99);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#D8CBB8] text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#243B53] text-[#F8F5EE] text-xs font-bold uppercase rounded-md tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>₹99 Essential Handbooks</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#171717]">
          Essential Study Handbooks
        </h1>

        <p className="text-sm text-[#171717]/80 leading-relaxed font-sans max-w-2xl mx-auto">
          High-yield revision guides, effective study skill manuals, and exam preparation handbooks priced at ₹99.00 ($1.29 USD).
        </p>

        <div className="flex items-center justify-center space-x-6 text-xs text-[#243B53] font-semibold pt-2">
          <span>✓ Instant PDF & EPUB Delivery</span>
          <span>✓ 100% DRM-Free Personal License</span>
          <span>✓ Saved to My Library</span>
        </div>
      </div>

      {/* Handbooks Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#D8CBB8] pb-3">
          <h2 className="font-serif text-2xl font-bold text-[#171717]">
            Available ₹99 Handbooks ({affordableBooks.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {affordableBooks.map((book) => (
            <EbookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
