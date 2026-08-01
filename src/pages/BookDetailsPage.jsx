import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ShoppingBag, Eye, Download, CheckCircle2, ChevronDown, ChevronUp, Share2, ShieldCheck, Sparkles, FileText, ShoppingCart } from 'lucide-react';
import BookCard from '../components/BookCard';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/SchemaMarkup';
import { BOOKS } from '../data/books';
import { TOPIC_CLUSTERS } from '../data/seoClusters';
import { BLOG_POSTS } from '../data/supplementary';

export default function BookDetailsPage({ book, onBack, onSelectBook, onOpenSample, onBuyBook, onShowToast, onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const topicCluster = TOPIC_CLUSTERS[book.id];
  const clusterArticles = BLOG_POSTS.filter(p => p.category === book.category || (topicCluster && topicCluster.clusterArticles.some(ca => ca.id === p.id)));
  const relatedBooks = BOOKS.filter(b => b.id !== book.id && (b.category === book.category || b.secondaryCategories?.includes(book.category))).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast('Book landing page URL copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn">
      
      {/* Inject SEO JSON-LD Schema (Book, Author, FAQ) */}
      <SchemaMarkup book={book} />

      {/* Top Bar: Breadcrumb Navigation & Share Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-200 pb-4">
        <Breadcrumbs
          items={[
            { label: 'Books', page: 'books' },
            { label: book.category, page: 'category-archive', data: book.category },
            { label: book.title }
          ]}
          onNavigate={onNavigate}
        />

        <div className="flex items-center space-x-2">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-paper-300 text-xs font-semibold text-ink-700 hover:bg-paper-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalog</span>
          </button>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-paper-300 text-xs font-semibold text-ink-700 hover:bg-paper-200 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Book Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Large Book Cover */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-72 sm:w-80 h-[460px] rounded-r-2xl rounded-l-xs shadow-elevated book-spine-effect overflow-hidden bg-ink-900 mb-6">
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Specs summary */}
          <div className="w-full max-w-sm bg-paper-100 p-4 rounded-xl border border-paper-300 space-y-2.5 text-xs text-ink-600">
            <div className="flex justify-between items-center">
              <span>Author:</span>
              <span className="font-semibold text-ink-900">Pankaj Kumar</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Format:</span>
              <span className="font-semibold text-authorAccent">PDF Digital Edition</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Length:</span>
              <span className="font-bold text-ink-900">{book.pages} Pages</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Primary Category:</span>
              <span className="font-semibold text-ink-900">{book.category}</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-paper-200">
              <span>Store Availability:</span>
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-sans flex items-center space-x-1">
                <ShoppingCart className="w-3 h-3 text-emerald-600" />
                <span>Also available on Amazon</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Description, Formats, CTAs */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-3 py-1 bg-authorAccent/10 text-authorAccent text-xs font-bold uppercase rounded-md">
                {book.category}
              </span>
              {topicCluster && (
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold uppercase rounded-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Subject Pillar Book</span>
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 leading-tight">
              {book.title}
            </h1>
            <p className="font-serif text-lg text-ink-600 italic mt-2">
              {book.subtitle}
            </p>
          </div>

          {/* Description Excerpt */}
          <div className="text-base text-ink-700 font-sans leading-relaxed whitespace-pre-line border-t border-paper-200 pt-4">
            {book.description}
          </div>

          {/* Available Format Selector Card */}
          <div className="bg-paper-200/70 p-6 rounded-2xl border border-paper-300 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-ink-900">
                  PDF Digital Edition
                </h3>
                <p className="text-xs text-ink-600">Instant Download • Permanent Library Access ({book.pages} Pages)</p>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-bold text-ink-900">₹{book.prices.pdf}</span>
                <span className="text-xs font-sans font-semibold text-ink-500 block">/ ${book.prices.usd || '1.99'} USD</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onBuyBook(book)}
                className="w-full sm:w-1/2 py-4 bg-authorAccent hover:bg-authorAccent-hover text-white font-bold text-base rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Buy PDF (₹{book.prices.pdf} / ${book.prices.usd || '1.99'})</span>
              </button>

              <button
                onClick={() => onOpenSample(book)}
                className="w-full sm:w-1/2 py-4 bg-paper-100 border border-paper-300 text-ink-900 font-semibold text-base rounded-xl hover:bg-paper-300 transition-all flex items-center justify-center space-x-2"
              >
                <Eye className="w-5 h-5 text-authorAccent" />
                <span>Read Free Sample</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xs text-ink-500 pt-2">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cashfree (INR) & PayPal (USD) Secured</span>
              </span>
              <span>•</span>
              <span>Instant Download Link</span>
            </div>

          </div>

        </div>

      </div>

      {/* Tabs Navigation for Deep Content */}
      <div className="border-b border-paper-300">
        <nav className="flex space-x-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Who & What You\'ll Learn' },
            { id: 'toc', label: 'Inside the Book (TOC)' },
            { id: 'cluster', label: `Supporting Cluster Articles (${clusterArticles.length})` },
            { id: 'faq', label: 'FAQs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-base font-serif font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-authorAccent text-authorAccent'
                  : 'border-transparent text-ink-500 hover:text-ink-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Who should read */}
          <div className="bg-paper-100 p-8 rounded-2xl border border-paper-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-authorAccent" />
              <span>Who Should Read This Book</span>
            </h3>
            <ul className="space-y-3 text-sm text-ink-700">
              {book.whoShouldRead?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What you'll learn */}
          <div className="bg-paper-100 p-8 rounded-2xl border border-paper-300 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-authorAccent" />
              <span>What You'll Learn Inside</span>
            </h3>
            <ul className="space-y-3 text-sm text-ink-700">
              {book.whatYoullLearn?.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-authorAccent flex-shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}

      {/* Tab Content 2: Table of Contents */}
      {activeTab === 'toc' && (
        <div className="bg-paper-100 p-8 rounded-2xl border border-paper-300 max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-bold text-ink-900 mb-6">
            Table of Contents Preview
          </h3>
          <div className="divide-y divide-paper-200">
            {book.tableOfContents?.map((ch, idx) => (
              <div key={idx} className="py-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-authorAccent uppercase tracking-wider block">
                    {ch.chapter}
                  </span>
                  <span className="font-serif text-base font-bold text-ink-900">
                    {ch.title}
                  </span>
                </div>
                <button
                  onClick={() => onOpenSample(book)}
                  className="text-xs font-semibold text-ink-500 hover:text-authorAccent"
                >
                  Read Preview →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 3: Topic Cluster Articles */}
      {activeTab === 'cluster' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-paper-200/60 p-6 rounded-2xl border border-paper-300 space-y-2">
            <span className="text-xs font-mono text-authorAccent font-bold uppercase">Topic Cluster Strategy</span>
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Supporting Essays & Deep-Dive Knowledge
            </h3>
            <p className="text-xs text-ink-600">
              These articles expand on concepts introduced in <strong>{book.title}</strong>, offering free deep dives and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clusterArticles.map((art) => (
              <div 
                key={art.id}
                onClick={() => onNavigate('blog')}
                className="bg-paper-100 p-6 rounded-2xl border border-paper-300 hover:border-authorAccent cursor-pointer space-y-3 transition-colors"
              >
                <div className="flex items-center space-x-2 text-xs text-authorAccent font-semibold">
                  <FileText className="w-4 h-4" />
                  <span>{art.category} • {art.readTime}</span>
                </div>
                <h4 className="font-serif font-bold text-lg text-ink-900">
                  {art.title}
                </h4>
                <p className="text-xs text-ink-600 line-clamp-2">
                  {art.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content 4: FAQs */}
      {activeTab === 'faq' && (
        <div className="max-w-3xl mx-auto space-y-4">
          {book.faqs?.map((faq, idx) => (
            <div key={idx} className="bg-paper-100 rounded-xl border border-paper-300 overflow-hidden">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left font-serif font-bold text-base text-ink-900 flex items-center justify-between"
              >
                <span>{faq.q}</span>
                {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-authorAccent" /> : <ChevronDown className="w-5 h-5 text-ink-400" />}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-sm text-ink-600 font-sans border-t border-paper-200 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <div className="pt-12 border-t border-paper-300 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-ink-900">
              Related Books in {book.category}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBooks.map((relBook) => (
              <BookCard
                key={relBook.id}
                book={relBook}
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
