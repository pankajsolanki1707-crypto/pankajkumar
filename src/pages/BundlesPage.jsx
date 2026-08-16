import React from 'react';
import { Tag, BookOpen, Download, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { EBOOK_BUNDLES } from '../data/bundles';
import { BOOKS } from '../data/books';

export default function BundlesPage({ onSelectBook, onBuyBook }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-amber-50 p-8 sm:p-12 rounded-3xl border border-amber-200 text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-700 text-white text-xs font-bold uppercase rounded-md tracking-wider">
          <Tag className="w-3.5 h-3.5" />
          <span>Discounted Ebook Packs</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-amber-950">
          Offers & Ebook Bundles
        </h1>

        <p className="text-sm text-amber-900 leading-relaxed font-sans max-w-2xl mx-auto">
          Save more with curated ebook bundles. Get complete exam preparation series or clear-thinking titles in single discounted packs with instant delivery to your library.
        </p>
      </div>

      {/* Bundles List */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {EBOOK_BUNDLES.map((bundle) => {
          const includedBooks = BOOKS.filter(b => bundle.includedEbookIds.includes(b.id));

          return (
            <div key={bundle.id} className="bg-paper-100 rounded-3xl border border-paper-300 shadow-subtle p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-paper-200 pb-4">
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 text-xs font-bold font-mono rounded">
                    {bundle.savingsText}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">{bundle.title}</h2>
                  <p className="text-xs sm:text-sm text-ink-600 font-sans">{bundle.subtitle}</p>
                </div>

                <div className="text-left md:text-right space-y-1 flex-shrink-0">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-serif font-bold text-ink-900">₹{bundle.bundlePriceInr}</span>
                    <span className="text-sm text-ink-500 line-through">₹{bundle.originalPriceInr}</span>
                  </div>
                  <p className="text-xs text-emerald-800 font-medium">(${bundle.bundlePriceUsd} USD) • PDF & EPUB</p>
                </div>
              </div>

              <p className="text-sm text-ink-700 leading-relaxed font-sans">{bundle.description}</p>

              {/* Included Books List */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-sm text-ink-900 uppercase tracking-wider">
                  Ebooks Included in This Bundle ({includedBooks.length}):
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {includedBooks.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => onSelectBook(b)}
                      className="p-3 bg-paper-50 rounded-xl border border-paper-200 hover:border-emerald-300 cursor-pointer transition-all flex items-center space-x-3"
                    >
                      <img src={b.coverImage} alt={b.title} className="w-8 h-11 object-contain rounded bg-slate-900 flex-shrink-0" />
                      <div className="min-w-0">
                        <h5 className="font-serif font-bold text-xs text-ink-900 truncate">{b.title}</h5>
                        <p className="text-[10px] text-ink-500 font-mono">₹{b.prices?.pdf || 'FREE'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy Bundle CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-paper-200">
                <span className="text-xs font-semibold text-emerald-800 flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instant delivery of all ebooks to My Library</span>
                </span>

                <button
                  onClick={() => onBuyBook(includedBooks[0])}
                  className="w-full sm:w-auto px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold rounded-xl transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Get Complete Bundle (₹{bundle.bundlePriceInr})</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
