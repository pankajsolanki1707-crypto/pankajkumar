import React from 'react';
import { Download, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS } from '../data/books';

export default function FreeEbooksPage({ onSelectBook, onOpenSample, onBuyBook }) {
  const freeBooks = BOOKS.filter(b => b.isFree || b.prices?.pdf === 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-emerald-50 p-8 sm:p-12 rounded-3xl border border-emerald-200 text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase rounded-md tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>100% Free Reading Resources</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-emerald-950">
          Free Ebooks & Study Resources
        </h1>

        <p className="text-sm text-emerald-900 leading-relaxed font-sans max-w-2xl mx-auto">
          Welcome to Go Pustak's Free Library. Download monthly current affairs digests, study skill handbooks, and reading guides with 100% free direct access.
        </p>

        <div className="flex items-center justify-center space-x-6 text-xs text-emerald-800 font-semibold pt-2">
          <span>✓ Instant PDF Download</span>
          <span>✓ No Credit Card Needed</span>
          <span>✓ Saved to My Library</span>
        </div>
      </div>

      {/* Free Ebooks Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">
            Available Free Ebooks ({freeBooks.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeBooks.map((book) => (
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
