import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Download, Eye, Share2, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Sparkles, FileText, Youtube, ArrowRight, User } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/SchemaMarkup';
import { BOOKS } from '../data/books';
import { YOUTUBE_VIDEOS } from '../data/videos';
import { ARTICLES } from '../data/articles';

export default function BookDetailsPage({ book, onBack, onSelectBook, onOpenSample, onBuyBook, onShowToast, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!book) return null;

  const isFree = book.isFree || book.prices?.pdf === 0;

  // Related media & ebooks
  const relatedVideo = YOUTUBE_VIDEOS.find(v => v.relatedEbookId === book.id) || YOUTUBE_VIDEOS[0];
  const relatedArticle = ARTICLES.find(a => a.relatedEbookId === book.id) || ARTICLES[0];
  const relatedBooks = BOOKS.filter(b => b.id !== book.id && (b.category === book.category || b.subcategory === book.subcategory)).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (onShowToast) onShowToast('Ebook page link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Inject Structured Data */}
      <SchemaMarkup book={book} />

      {/* Top Bar: Breadcrumb Navigation & Action Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-200 pb-4">
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
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl border border-paper-300 text-xs font-semibold text-ink-700 hover:bg-paper-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Library</span>
          </button>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-paper-300 text-xs font-semibold text-ink-700 hover:bg-paper-200 transition-colors"
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
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 p-4 shadow-elevated border border-paper-300">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-full object-contain rounded shadow-md"
            />
            
            {/* Free vs Premium Badge */}
            <div className="absolute top-4 left-4 z-10">
              {isFree ? (
                <span className="px-3 py-1 bg-emerald-600 text-white font-sans text-xs font-bold uppercase rounded-md shadow-sm">
                  FREE EBOOK
                </span>
              ) : (
                <span className="px-3 py-1 bg-ink-900/90 text-paper-100 font-sans text-xs font-bold uppercase rounded-md shadow-sm">
                  PREMIUM EBOOK
                </span>
              )}
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="w-full max-w-sm mt-6 p-4 bg-paper-100 rounded-2xl border border-paper-300 space-y-2 text-xs text-ink-600">
            <div className="flex justify-between py-1 border-b border-paper-200">
              <span className="font-semibold text-ink-500">Formats:</span>
              <span className="font-mono text-ink-900 font-bold">{book.fileFormats ? book.fileFormats.join(' • ') : 'PDF • EPUB'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-paper-200">
              <span className="font-semibold text-ink-500">File Size:</span>
              <span className="font-mono text-ink-900 font-bold">{book.fileSize || '5.2 MB'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-paper-200">
              <span className="font-semibold text-ink-500">Pages:</span>
              <span className="font-mono text-ink-900 font-bold">{book.pages} pages</span>
            </div>
            <div className="flex justify-between py-1 border-b border-paper-200">
              <span className="font-semibold text-ink-500">Language:</span>
              <span className="font-bold text-ink-900">{book.language}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-semibold text-ink-500">Last Updated:</span>
              <span className="font-mono text-ink-900">{book.updatedDate || '2026-08-01'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Author, CTAs, and Pricing */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md font-sans uppercase tracking-wider">
                {book.category}
              </span>
              {book.subcategory && (
                <span className="px-2.5 py-1 bg-paper-200 text-ink-700 rounded-md">
                  {book.subcategory}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 leading-tight">
              {book.title}
            </h1>

            {book.subtitle && (
              <p className="font-serif text-lg text-emerald-900 italic">
                {book.subtitle}
              </p>
            )}

            <p className="text-sm text-ink-700 leading-relaxed font-sans">
              {book.oneLiner}
            </p>
          </div>

          {/* Author Card */}
          <div className="p-4 bg-paper-100 rounded-2xl border border-paper-300 flex items-center space-x-4">
            <img src={book.author?.avatar} alt={book.author?.name} className="w-12 h-12 rounded-full object-cover border border-paper-300" />
            <div>
              <h4 className="font-serif font-bold text-sm text-ink-900">{book.author?.name || 'Go Pustak Editorial'}</h4>
              <p className="text-xs text-ink-500">{book.author?.role} • Published by {book.publisher || 'Go Pustak Publishing'}</p>
            </div>
          </div>

          {/* Pricing Box & Buy/Download CTAs */}
          <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                {isFree ? (
                  <div>
                    <span className="text-2xl font-serif font-bold text-emerald-800">100% FREE EBOOK</span>
                    <p className="text-xs text-emerald-900">Direct download with zero hidden fees</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-serif font-bold text-ink-900">₹{book.prices?.pdf}</span>
                      <span className="text-sm font-sans text-ink-600">/ ${book.prices?.usd} USD</span>
                    </div>
                    <p className="text-xs text-emerald-800 font-medium pt-0.5">Includes instant signed PDF & EPUB downloads</p>
                  </div>
                )}
              </div>

              <span className="px-3 py-1 bg-paper-100 border border-paper-300 text-xs font-semibold text-ink-800 rounded-lg self-start">
                DRM-Free Personal License
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {isFree ? (
                <button
                  onClick={() => onBuyBook(book)}
                  className="flex-1 py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Instant Download Free Ebook</span>
                </button>
              ) : (
                <button
                  onClick={() => onBuyBook(book)}
                  className="flex-1 py-4 bg-ink-900 hover:bg-emerald-800 text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Buy Ebook Now (PDF + EPUB)</span>
                </button>
              )}

              <button
                onClick={() => onOpenSample(book)}
                className="px-6 py-4 bg-paper-100 border border-paper-300 hover:bg-paper-200 text-ink-900 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <Eye className="w-4 h-4 text-emerald-800" />
                <span>Read Free Sample</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-600 pt-1">
              <span className="flex items-center space-x-1 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Delivery to My Library</span>
              </span>
              <span className="flex items-center space-x-1 text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Secure Gateway</span>
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Tabs Section: Overview, Who It's For, TOC */}
      <div className="space-y-6 pt-6">
        <div className="flex border-b border-paper-300 space-x-6 text-sm font-serif font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'overview' ? 'border-emerald-800 text-emerald-800' : 'border-transparent text-ink-600 hover:text-ink-900'
            }`}
          >
            Detailed Overview
          </button>
          <button
            onClick={() => setActiveTab('toc')}
            className={`pb-3 border-b-2 transition-colors ${
              activeTab === 'toc' ? 'border-emerald-800 text-emerald-800' : 'border-transparent text-ink-600 hover:text-ink-900'
            }`}
          >
            Table of Contents
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8 font-sans">
            
            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-ink-900">About This Ebook</h3>
              <div className="text-sm text-ink-800 leading-relaxed whitespace-pre-line bg-paper-100 p-6 rounded-2xl border border-paper-300">
                {book.description}
              </div>
            </div>

            {/* Who Is This Book For? */}
            {book.whoShouldRead && (
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-ink-900">Who Is This Book For?</h3>
                <ul className="space-y-2">
                  {book.whoShouldRead.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-sm text-ink-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What You Will Learn */}
            {book.whatYoullLearn && (
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-ink-900">What You Will Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {book.whatYoullLearn.map((item, idx) => (
                    <div key={idx} className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs font-semibold text-emerald-950 flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {activeTab === 'toc' && book.tableOfContents && (
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-ink-900">Table of Contents</h3>
            <div className="bg-paper-100 rounded-2xl border border-paper-300 divide-y divide-paper-200 overflow-hidden">
              {book.tableOfContents.map((ch, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between text-sm">
                  <span className="font-mono font-bold text-emerald-800">{ch.chapter}</span>
                  <span className="font-serif font-bold text-ink-900 text-right">{ch.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Linked Media: YouTube Explainer & Articles */}
      {(relatedVideo || relatedArticle) && (
        <div className="pt-8 border-t border-paper-300 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase text-red-600 tracking-wider">Multimedia & Study Notes</span>
            <h3 className="font-serif text-2xl font-bold text-ink-900">Watch Video & Read Guide</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedVideo && (
              <div className="bg-paper-100 p-5 rounded-2xl border border-paper-300 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-red-600">
                  <Youtube className="w-4 h-4" />
                  <span>YouTube Explainer</span>
                </div>
                <h4 className="font-serif font-bold text-base text-ink-900">{relatedVideo.title}</h4>
                <p className="text-xs text-ink-600 line-clamp-2">{relatedVideo.summary}</p>
                <button
                  onClick={() => onNavigate('watch')}
                  className="text-xs font-bold text-emerald-800 hover:underline flex items-center space-x-1"
                >
                  <span>Watch Video Explainer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {relatedArticle && (
              <div className="bg-paper-100 p-5 rounded-2xl border border-paper-300 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800">
                  <FileText className="w-4 h-4" />
                  <span>Related Article</span>
                </div>
                <h4 className="font-serif font-bold text-base text-ink-900">{relatedArticle.title}</h4>
                <p className="text-xs text-ink-600 line-clamp-2">{relatedArticle.excerpt}</p>
                <button
                  onClick={() => onNavigate('articles')}
                  className="text-xs font-bold text-emerald-800 hover:underline flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Related Ebooks */}
      {relatedBooks.length > 0 && (
        <div className="pt-8 border-t border-paper-300 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-ink-900">Related Ebooks You Might Like</h3>
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
