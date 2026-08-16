import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Download, Eye, Share2, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Sparkles, FileText, ArrowRight, User } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/SchemaMarkup';
import { BOOKS } from '../data/books';

export default function BookDetailsPage({ book, onBack, onSelectBook, onOpenSample, onBuyBook, onShowToast, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!book) return null;

  const isFree = book.isFree || book.prices?.pdf === 0;
  const relatedBooks = BOOKS.filter(b => b.id !== book.id && (b.category === book.category || b.subcategory === book.subcategory)).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Ebook page link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn font-sans">
      
      {/* Inject Structured Data */}
      <SchemaMarkup book={book} />

      {/* Top Bar: Breadcrumb Navigation & Action Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#D8CBB8] pb-4">
        <Breadcrumbs
          items={[
            { label: 'Ebooks', page: 'ebooks' },
            { label: book.category, page: 'ebooks', data: book.category },
            { label: book.title }
          ]}
          onNavigate={onNavigate}
        />

        <div className="flex items-center space-x-2">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-[#D8CBB8] text-xs font-semibold text-[#171717] hover:bg-[#D8CBB8]/30 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Library</span>
          </button>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-[#D8CBB8] text-xs font-semibold text-[#171717] hover:bg-[#D8CBB8]/30 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Ebook Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Ebook Cover Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-[#171717] p-4 shadow-md border border-[#D8CBB8]">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-full object-contain rounded shadow-sm"
            />
            
            {/* Free vs Premium Badge */}
            <div className="absolute top-4 left-4 z-10">
              {isFree ? (
                <span className="px-3 py-1 bg-[#355E3B] text-white font-sans text-xs font-bold uppercase rounded shadow-xs">
                  FREE EBOOK
                </span>
              ) : (
                <span className="px-3 py-1 bg-[#243B53] text-[#F8F5EE] font-sans text-xs font-bold uppercase rounded shadow-xs border border-[#F8F5EE]/20">
                  DIGITAL EDITION
                </span>
              )}
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="w-full max-w-sm mt-6 p-4 bg-[#FAF7F2] rounded-2xl border border-[#D8CBB8] space-y-2 text-xs text-[#171717]/70">
            <div className="flex justify-between py-1 border-b border-[#D8CBB8]/60">
              <span className="font-semibold text-[#171717]/60">Formats:</span>
              <span className="font-mono text-[#171717] font-bold">{book.fileFormats ? book.fileFormats.join(' • ') : 'PDF • EPUB'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#D8CBB8]/60">
              <span className="font-semibold text-[#171717]/60">File Size:</span>
              <span className="font-mono text-[#171717] font-bold">{book.fileSize || '5.2 MB'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#D8CBB8]/60">
              <span className="font-semibold text-[#171717]/60">Pages:</span>
              <span className="font-mono text-[#171717] font-bold">{book.pages} pages</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#D8CBB8]/60">
              <span className="font-semibold text-[#171717]/60">Language:</span>
              <span className="font-bold text-[#171717]">{book.language}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold text-[#171717]/60">Last Updated:</span>
              <span className="font-mono text-[#171717]">{book.updatedDate || '2026-08-01'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Author, CTAs, and Pricing */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 bg-[#243B53]/10 text-[#243B53] rounded-md font-sans uppercase tracking-wider">
                {book.category}
              </span>
              {book.subcategory && (
                <span className="px-2.5 py-1 bg-[#E8E2D5] text-[#171717] rounded-md">
                  {book.subcategory}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] leading-tight">
              {book.title}
            </h1>

            {book.subtitle && (
              <p className="font-serif text-lg text-[#243B53] italic">
                {book.subtitle}
              </p>
            )}

            <p className="text-sm text-[#171717]/80 leading-relaxed font-sans">
              {book.oneLiner}
            </p>
          </div>

          {/* Author Card */}
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#D8CBB8] flex items-center space-x-4">
            <img src={book.author?.avatar || '/go-pustak-logo.png'} alt={book.author?.name} className="w-12 h-12 rounded-full object-cover border border-[#D8CBB8]" />
            <div>
              <h4 className="font-serif font-bold text-sm text-[#171717]">{book.author?.name || 'Go Pustak Editorial'}</h4>
              <p className="text-xs text-[#171717]/60">{book.author?.role} • Published by {book.publisher || 'Go Pustak Publishing'}</p>
            </div>
          </div>

          {/* Pricing Box & Buy/Download CTAs */}
          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#D8CBB8] space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                {isFree ? (
                  <div>
                    <span className="text-2xl font-serif font-bold text-[#355E3B]">100% FREE EBOOK</span>
                    <p className="text-xs text-[#355E3B]">Direct download with zero hidden fees</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-serif font-bold text-[#171717]">₹{book.prices?.pdf}</span>
                      <span className="text-sm font-sans text-[#171717]/60">/ ${book.prices?.usd} USD</span>
                    </div>
                    <p className="text-xs text-[#243B53] font-medium pt-0.5">Includes instant signed PDF & EPUB downloads</p>
                  </div>
                )}
              </div>

              <span className="px-3 py-1 bg-[#F8F5EE] border border-[#D8CBB8] text-xs font-semibold text-[#171717] rounded-lg self-start">
                DRM-Free Personal License
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {isFree ? (
                <button
                  onClick={() => onBuyBook(book)}
                  className="flex-1 py-4 bg-[#355E3B] hover:bg-[#2B4B2F] text-white font-bold text-base rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Instant Download Free Ebook</span>
                </button>
              ) : (
                <button
                  onClick={() => onBuyBook(book)}
                  className="flex-1 py-4 bg-[#243B53] hover:bg-[#1E293B] text-white font-bold text-base rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Buy Ebook Now (PDF + EPUB)</span>
                </button>
              )}

              <button
                onClick={() => onOpenSample(book)}
                className="px-6 py-4 bg-[#F8F5EE] border border-[#D8CBB8] hover:bg-[#E8E2D5] text-[#171717] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4 text-[#243B53]" />
                <span>Read Free Sample</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#171717]/60 pt-2 border-t border-[#D8CBB8]/60">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#355E3B]" />
                <span>Razorpay & PayPal Secure Payment</span>
              </span>
              <span>Instant Download Guarantee</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs Section: Description, Table of Contents, Author Info */}
      <div className="pt-6 border-t border-[#D8CBB8] space-y-6">
        <div className="flex border-b border-[#D8CBB8]">
          {[
            { id: 'overview', label: 'Overview & Learning' },
            { id: 'contents', label: 'Table of Contents' },
            { id: 'author', label: 'Author Biography' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-4 font-serif text-base font-bold transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#243B53] text-[#243B53]'
                  : 'border-transparent text-[#171717]/60 hover:text-[#171717]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6 max-w-4xl text-sm leading-relaxed text-[#171717]/80">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-[#171717]">About This Ebook</h3>
              <p className="whitespace-pre-line">{book.description}</p>
            </div>

            {book.whatYoullLearn && (
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#D8CBB8] space-y-3">
                <h4 className="font-serif font-bold text-base text-[#171717] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#C9822B]" />
                  <span>Key Concepts & What You'll Learn</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171717]">
                  {book.whatYoullLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#355E3B] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'contents' && (
          <div className="max-w-3xl space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#171717]">Table of Contents</h3>
            {book.tableOfContents && book.tableOfContents.length > 0 ? (
              <div className="divide-y divide-[#D8CBB8] border border-[#D8CBB8] rounded-2xl overflow-hidden bg-[#FAF7F2]">
                {book.tableOfContents.map((ch, idx) => (
                  <div key={idx} className="p-4 flex justify-between items-center text-xs">
                    <span className="font-mono font-bold text-[#243B53]">{ch.chapter}</span>
                    <span className="font-serif font-semibold text-[#171717]">{ch.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#171717]/60">Full detailed chapter outline included inside the PDF sample.</p>
            )}
          </div>
        )}

        {activeTab === 'author' && (
          <div className="max-w-3xl p-6 bg-[#FAF7F2] rounded-2xl border border-[#D8CBB8] space-y-4">
            <div className="flex items-center space-x-4">
              <img src={book.author?.avatar || '/go-pustak-logo.png'} alt={book.author?.name} className="w-16 h-16 rounded-full object-cover border border-[#D8CBB8]" />
              <div>
                <h3 className="font-serif font-bold text-lg text-[#171717]">{book.author?.name}</h3>
                <p className="text-xs font-mono text-[#243B53]">{book.author?.role}</p>
              </div>
            </div>
            <p className="text-xs text-[#171717]/80 leading-relaxed">{book.author?.bio}</p>
          </div>
        )}
      </div>

      {/* Related Ebooks */}
      {relatedBooks.length > 0 && (
        <div className="pt-8 border-t border-[#D8CBB8] space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#171717]">Related Ebooks You Might Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBooks.map((b) => (
              <EbookCard
                key={b.id}
                book={b}
                onSelectBook={onSelectBook}
                onOpenSample={onOpenSample}
                onBuyBook={onBuyBook}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
