import React, { useState } from 'react';
import { Clock, Download, BookOpen, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS } from '../data/books';

export default function CurrentAffairsPage({ onSelectBook, onOpenSample, onBuyBook }) {
  const currentAffairsBooks = BOOKS.filter(b => b.category === 'Current Affairs' || b.subcategory === 'National');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-amber-800 text-amber-50 p-8 sm:p-12 rounded-3xl text-center space-y-4 max-w-4xl mx-auto shadow-elevated">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-700/80 border border-amber-500/40 text-amber-100 text-xs font-bold uppercase rounded-md tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          <span>Monthly & Topical Current Affairs</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
          Current Affairs Digests
        </h1>

        <p className="text-sm text-amber-100 leading-relaxed font-sans max-w-2xl mx-auto">
          Categorized, exam-oriented news analysis covering National Affairs, International Summits, Economy, Science & Tech, Defence, Environment, and Government Schemes.
        </p>
      </div>

      {/* Digests List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">
            Available Monthly Editions ({currentAffairsBooks.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentAffairsBooks.map((book) => (
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
