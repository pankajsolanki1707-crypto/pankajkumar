import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Star, ShieldCheck, Download, Globe } from 'lucide-react';
import BookCard from '../components/BookCard';
import { BOOKS, CATEGORIES, TESTIMONIALS } from '../data/books';

export default function HomePage({ setActivePage, onSelectBook, onOpenSample, onBuyBook }) {
  const featuredBooks = BOOKS.filter(b => b.featured).slice(0, 6);
  const bestsellers = BOOKS.filter(b => b.bestseller);
  const latestRelease = BOOKS.find(b => b.id === 'think-on-paper') || BOOKS[0];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. Large Hero Section (Apple + Penguin Books Inspired) */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-paper-200 dark:border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge Pill */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-paper-200 dark:bg-ink-800 border border-paper-300 dark:border-ink-700 text-xs font-semibold text-ink-800 dark:text-paper-100">
                <Sparkles className="w-3.5 h-3.5 text-authorAccent" />
                <span>The Official Author Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-paper-100 leading-[1.15]">
                Pankaj Kumar
              </h1>

              {/* Author Sub-role */}
              <p className="font-serif text-xl sm:text-2xl text-authorAccent dark:text-authorAccent-dark font-medium italic">
                Engineer • Author • Thinker
              </p>

              {/* Bio Statement */}
              <p className="text-lg text-ink-700 dark:text-ink-300 font-sans leading-relaxed max-w-2xl">
                Helping people think clearly, learn deeply, and live intentionally through practical books on productivity, psychology, technology, and personal growth.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActivePage('books')}
                  className="px-8 py-4 bg-ink-900 dark:bg-paper-100 text-paper-100 dark:text-ink-900 font-semibold rounded-xl hover:bg-authorAccent dark:hover:bg-authorAccent-dark dark:hover:text-white transition-all shadow-md flex items-center justify-center space-x-3 text-base group"
                >
                  <span>Browse Books</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenSample(latestRelease)}
                  className="px-8 py-4 bg-paper-100 dark:bg-ink-900 border border-paper-300 dark:border-ink-700 text-ink-900 dark:text-paper-100 font-semibold rounded-xl hover:bg-paper-200 dark:hover:bg-ink-800 transition-all flex items-center justify-center space-x-3 text-base"
                >
                  <BookOpen className="w-5 h-5 text-authorAccent" />
                  <span>Read Free Chapter</span>
                </button>
              </div>

              {/* Trust Indicators with PayPal Acceptance */}
              <div className="pt-6 border-t border-paper-200 dark:border-ink-800 space-y-3">
                <div className="flex flex-wrap items-center gap-6 text-xs text-ink-500 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>16+ Published Books</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>50,000+ Readers</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Paperback • Kindle • PDF • EPUB</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg text-xs font-semibold text-blue-800 dark:text-blue-200">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Global Checkout: We Accept PayPal ($ USD) & Cashfree (₹ INR / UPI / Cards)</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card Spotlight */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                
                {/* Background aura gradient */}
                <div className="absolute -inset-4 bg-gradient-to-r from-authorAccent/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-70"></div>

                {/* Hero Showcase Card */}
                <div className="relative bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-700 shadow-elevated max-w-sm">
                  
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-book mb-4 relative book-spine-effect">
                    <img 
                      src={latestRelease.coverImage} 
                      alt={latestRelease.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
                      Latest Flagship Title
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100">
                      {latestRelease.title}
                    </h3>
                    <p className="text-xs text-ink-600 dark:text-ink-400 line-clamp-2">
                      {latestRelease.subtitle}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-authorAccent">
                        ₹{latestRelease.prices.pdf} / ${latestRelease.prices.usd} USD
                      </span>
                      <button
                        onClick={() => onSelectBook(latestRelease)}
                        className="text-xs font-semibold text-ink-900 dark:text-paper-100 hover:text-authorAccent flex items-center space-x-1"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Curated Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
            Explore Books by Discipline
          </h2>
          <p className="text-sm text-ink-600 dark:text-ink-400 mt-1">
            Organized systematically across Pankaj's core fields of inquiry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => setActivePage('books')}
              className="px-5 py-2.5 bg-paper-100 dark:bg-ink-900 border border-paper-300 dark:border-ink-700 hover:border-authorAccent dark:hover:border-authorAccent-dark hover:bg-authorAccent/5 text-ink-800 dark:text-ink-200 text-sm font-semibold rounded-full transition-all shadow-subtle"
            >
              ✓ {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Books Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
              Curated Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-100">
              Featured Titles
            </h2>
          </div>

          <button
            onClick={() => setActivePage('books')}
            className="text-sm font-semibold text-ink-900 dark:text-paper-100 hover:text-authorAccent flex items-center space-x-1"
          >
            <span>View All {BOOKS.length} Books</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard 
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </section>

      {/* 4. Full-Width Spotlight: Latest Release ("Think on Paper") */}
      <section className="bg-paper-200 dark:bg-ink-950 py-16 border-y border-paper-300 dark:border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Book Cover */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 h-96 rounded-r-xl rounded-l-xs shadow-elevated book-spine-effect overflow-hidden bg-ink-900">
                <img 
                  src={latestRelease.coverImage} 
                  alt={latestRelease.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase rounded-md">
                Latest Flagship Book
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-100">
                {latestRelease.title}
              </h2>

              <p className="font-serif text-lg text-ink-700 dark:text-ink-300 italic">
                {latestRelease.subtitle}
              </p>

              <p className="text-ink-600 dark:text-ink-400 leading-relaxed font-sans">
                {latestRelease.oneLiner}
              </p>

              {/* Formats Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-bold text-ink-500 uppercase tracking-wider">Available in:</span>
                {['Paperback ₹399', 'Kindle ₹199', 'PDF ₹149 / $1.99', 'EPUB ₹149 / $1.99'].map((f) => (
                  <span key={f} className="px-3 py-1 bg-paper-100 dark:bg-ink-900 border border-paper-300 dark:border-ink-700 text-xs font-semibold rounded-lg text-ink-800 dark:text-ink-200">
                    {f}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => onBuyBook(latestRelease)}
                  className="px-6 py-3.5 bg-authorAccent hover:bg-authorAccent-hover text-white font-semibold rounded-xl transition-all shadow-md text-sm"
                >
                  Buy Now (Instant Download)
                </button>
                <button
                  onClick={() => onOpenSample(latestRelease)}
                  className="px-6 py-3.5 bg-paper-100 dark:bg-ink-900 border border-paper-300 dark:border-ink-700 text-ink-900 dark:text-paper-100 font-semibold rounded-xl hover:bg-paper-300 dark:hover:bg-ink-800 transition-all text-sm"
                >
                  Download Sample
                </button>
                <button
                  onClick={() => onSelectBook(latestRelease)}
                  className="px-6 py-3.5 text-ink-700 dark:text-ink-300 hover:text-ink-900 text-sm font-semibold"
                >
                  Read Full Synopsis →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
            Top Recommended
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-100">
            Reader Favorites & Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.slice(0, 3).map((book) => (
            <BookCard 
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </section>

      {/* 6. Reader Reviews & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
            Wall of Trust
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink-900 dark:text-paper-100">
            What Readers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 shadow-subtle flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-ink-800 dark:text-ink-200 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-paper-200 dark:border-ink-800 flex items-center space-x-3 mt-6">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-ink-900 dark:text-paper-100">
                    {t.author}
                  </h4>
                  <p className="text-xs text-ink-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
