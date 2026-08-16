import React from 'react';
import { Library, Download, BookOpen, Clock, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { BOOKS } from '../data/books';

export default function LibraryPage({ purchasedBooks = [], onShowToast, setActivePage }) {
  const freeSavedBooks = BOOKS.filter(b => b.isFree || b.prices?.pdf === 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-paper-100 p-8 sm:p-12 rounded-3xl border border-paper-300 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase text-emerald-800 tracking-wider">
            <Library className="w-4 h-4" />
            <span>Personal Digital Shelf</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
            My Library & Downloads
          </h1>
          <p className="text-xs sm:text-sm text-ink-600 font-sans">
            Access your purchased ebooks, free saved reading resources, and secure PDF/EPUB download links.
          </p>
        </div>

        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center flex-shrink-0">
          <span className="font-mono text-2xl font-bold text-emerald-900 block">{purchasedBooks.length}</span>
          <span className="text-[11px] font-sans text-emerald-800 font-semibold">Purchased Ebooks</span>
        </div>
      </div>

      {/* Purchased Ebooks Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">
            Purchased Ebooks ({purchasedBooks.length})
          </h2>
        </div>

        {purchasedBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {purchasedBooks.map((order, idx) => (
              <div key={idx} className="bg-paper-100 p-6 rounded-2xl border border-paper-300 shadow-subtle flex flex-col justify-between space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-18 bg-slate-900 rounded-lg overflow-hidden flex-shrink-0 p-1">
                    <img src={order.coverImage} alt={order.bookTitle} className="w-full h-full object-contain rounded" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded">
                      VERIFIED ORDER
                    </span>
                    <h3 className="font-serif font-bold text-base text-ink-900 truncate">{order.bookTitle}</h3>
                    <p className="text-xs text-ink-500 font-mono">Order ID: {order.orderId}</p>
                    <p className="text-xs text-ink-600">Paid: {order.pricePaid} • {order.format}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-paper-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-emerald-800 font-medium flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Download Access Active</span>
                  </span>

                  <a
                    href={`/api/downloads/signed-link?orderId=${order.orderId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF / EPUB</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center space-y-3 bg-paper-100 rounded-2xl border border-paper-300 max-w-xl mx-auto">
            <BookOpen className="w-8 h-8 text-ink-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-ink-900">No premium ebooks purchased yet</h3>
            <p className="text-xs text-ink-600">Explore Go Pustak's ebook catalog or download free study guides to get started.</p>
            <button
              onClick={() => setActivePage('ebooks')}
              className="px-5 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center space-x-1"
            >
              <span>Explore Ebook Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Free Ebooks Saved Section */}
      <div className="space-y-6 pt-4 border-t border-paper-300">
        <h2 className="font-serif text-2xl font-bold text-ink-900">
          Free Saved Ebooks & Guides ({freeSavedBooks.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {freeSavedBooks.map((book) => (
            <div key={book.id} className="p-4 bg-paper-100 rounded-xl border border-paper-300 flex items-center justify-between space-x-3">
              <div className="flex items-center space-x-3 min-w-0">
                <img src={book.coverImage} alt={book.title} className="w-9 h-12 object-contain bg-slate-900 rounded flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-serif font-bold text-xs text-ink-900 truncate">{book.title}</h4>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold">100% FREE</span>
                </div>
              </div>

              <a
                href={book.coverImage}
                download={`${book.id}-gopustak.pdf`}
                className="p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-lg text-xs flex-shrink-0"
                title="Direct PDF Download"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
