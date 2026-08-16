import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Download, Calendar, Tag, ArrowUpRight, Layers } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS } from '../data/books';
import { EXAM_HUBS } from '../data/exams';

export default function HomePage({ setActivePage, onSelectBook, onOpenSample, onBuyBook, onOpenSearch, onSelectExam }) {
  // Curation arrays
  const newThisWeek = BOOKS.filter(b => b.latestRelease).slice(0, 3);
  const editorsPicks = BOOKS.filter(b => b.featured && !b.latestRelease).slice(0, 3);
  const essentialGuides = BOOKS.filter(b => b.prices?.pdf === 99).slice(0, 3);
  const booksForThinking = BOOKS.filter(b => b.category === 'Personal Growth' || b.category === 'Technology').slice(0, 3);
  const currentAffairsBooks = BOOKS.filter(b => b.category === 'Current Affairs').slice(0, 3);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) onOpenSearch();
  };

  return (
    <div className="space-y-16 pb-20 animate-fadeIn font-sans bg-[#F8F5EE]">
      
      {/* 1. Human Publishing Editorial Hero Section */}
      <section className="relative bg-[#F8F5EE] pt-12 pb-16 border-b border-[#D8CBB8]/60 paper-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#243B53]/10 border border-[#243B53]/20 text-xs font-semibold text-[#243B53]">
            <span className="font-serif italic font-bold">गो</span>
            <span>Indian Digital Publishing House</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#171717] leading-[1.1]">
              Find something worth reading.
            </h1>
            <p className="text-base sm:text-lg text-[#171717]/80 font-sans leading-relaxed max-w-2xl mx-auto">
              Books, study material, ideas and thoughtful listening — all in one place.
            </p>
          </div>

          {/* Prominent Large Central Search Bar */}
          <div className="pt-2 max-w-2xl mx-auto">
            <form onSubmit={handleHeroSearchSubmit} className="flex items-center space-x-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#D8CBB8] shadow-sm focus-within:border-[#243B53] transition-all">
              <Search className="w-5 h-5 text-[#243B53] flex-shrink-0 ml-2" />
              <input
                type="text"
                readOnly
                onClick={onOpenSearch}
                placeholder="Search books, exams, subjects, authors and ideas..."
                className="flex-1 bg-transparent text-sm sm:text-base text-[#171717] placeholder-[#171717]/50 focus:outline-none cursor-pointer"
              />
              <button
                type="button"
                onClick={onOpenSearch}
                className="px-6 py-2.5 bg-[#243B53] hover:bg-[#1E293B] text-[#F8F5EE] text-xs font-bold rounded-xl transition-colors flex items-center space-x-1"
              >
                <span>Search</span>
              </button>
            </form>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#171717]/70 pt-3">
              <span className="font-semibold text-[#171717]/50">Popular:</span>
              {['UPSC', 'EPFO', 'Current Affairs', 'Self Help', 'Productivity', 'Psychology', 'AI'].map((term) => (
                <button
                  key={term}
                  onClick={onOpenSearch}
                  className="px-2.5 py-1 bg-[#E8E2D5]/60 hover:bg-[#243B53]/10 hover:text-[#243B53] rounded-lg text-[#171717] transition-colors font-medium text-[11px]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. New This Week Section (Open Editorial Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#D8CBB8] pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#243B53] block">
              Curated Releases
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
              New This Week
            </h2>
          </div>
          <button
            onClick={() => setActivePage('ebooks')}
            className="text-xs font-bold text-[#243B53] hover:underline flex items-center space-x-1"
          >
            <span>View All Ebooks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newThisWeek.map((book) => (
            <div
              key={book.id}
              onClick={() => onSelectBook(book)}
              className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8CBB8] hover:border-[#243B53] transition-all cursor-pointer space-y-4 group"
            >
              <div className="aspect-[3/4] max-h-56 bg-[#171717] rounded-lg overflow-hidden flex items-center justify-center p-2">
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#243B53] bg-[#243B53]/10 px-2 py-0.5 rounded">
                  {book.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#171717] group-hover:text-[#243B53] transition-colors leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-[#171717]/70 line-clamp-2">{book.subtitle || book.oneLiner}</p>
                <div className="text-[11px] font-medium text-[#171717]/60 pt-1 flex items-center justify-between">
                  <span>By {book.author?.name}</span>
                  <span className="font-serif font-bold text-[#171717]">₹{book.prices?.pdf}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Editor's Picks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#D8CBB8] pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#243B53] block">
              Handpicked Essentials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
              Editor's Picks
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorsPicks.map((book) => (
            <EbookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </section>

      {/* 4. For Aspirants Section (Structured Academic Environment) */}
      <section className="bg-[#243B53] text-[#F8F5EE] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#F8F5EE]/20 pb-4">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 bg-[#F8F5EE]/10 text-[#F8F5EE] border border-[#F8F5EE]/20 text-[10px] font-mono font-bold uppercase rounded inline-block">
                Academic Publishing Environment
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                For Aspirants
              </h2>
              <p className="text-xs sm:text-sm text-[#F8F5EE]/80 max-w-xl">
                Point-wise, high-yield revision notes, Labour Laws, General Accounting, and Static GK for serious competitive candidates.
              </p>
            </div>

            <button
              onClick={() => setActivePage('exams')}
              className="px-5 py-2.5 bg-[#F8F5EE] hover:bg-[#E8E2D5] text-[#243B53] font-bold rounded-xl text-xs transition-colors flex items-center space-x-1.5 flex-shrink-0"
            >
              <span>Explore Exam Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {EXAM_HUBS.map((ex) => (
              <div
                key={ex.id}
                onClick={() => setActivePage('exams', ex.id)}
                className="bg-[#1E293B] p-5 rounded-xl border border-[#F8F5EE]/20 hover:border-[#C9822B] cursor-pointer transition-all space-y-2 group"
              >
                <span className="px-2 py-0.5 bg-[#F8F5EE]/10 text-[#F8F5EE] font-mono text-[9px] font-bold rounded uppercase">
                  {ex.badge}
                </span>
                <h3 className="font-serif font-bold text-base text-white group-hover:text-[#D8CBB8] transition-colors">
                  {ex.name}
                </h3>
                <p className="text-[11px] text-[#F8F5EE]/70 line-clamp-2 leading-relaxed">
                  {ex.tagline}
                </p>
                <span className="text-[11px] font-bold text-[#C9822B] inline-flex items-center space-x-1 pt-1">
                  <span>View Syllabus Material</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Essential Study Guides (₹99 Edition) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#D8CBB8] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8CBB8] pb-4">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 bg-[#243B53] text-white text-[10px] font-mono font-bold uppercase rounded inline-block">
                ₹99 Special Handbooks
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
                Essential Study Guides
              </h2>
              <p className="text-xs text-[#171717]/70 font-sans">
                High-yield revision guides and study habit handbooks priced at ₹99.00 ($1.29 USD).
              </p>
            </div>

            <button
              onClick={() => setActivePage('ebooks')}
              className="px-5 py-2.5 bg-[#243B53] hover:bg-[#1E293B] text-white font-bold rounded-xl text-xs transition-colors flex items-center space-x-1.5 flex-shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse All Guides</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {essentialGuides.map((book) => (
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
      </section>

      {/* 6. Books for Better Thinking Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#D8CBB8] pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#243B53] block">
              Cognitive Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
              Books for Better Thinking
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {booksForThinking.map((book) => (
            <EbookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </section>

      {/* 7. Current Affairs Section (Monthly Digital Journal Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between border-b border-[#D8CBB8] pb-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#243B53] block">
              Monthly Digital Journal
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
              Current Affairs Library
            </h2>
          </div>
          <button
            onClick={() => setActivePage('current-affairs')}
            className="text-xs font-bold text-[#243B53] hover:underline flex items-center space-x-1"
          >
            <span>View Current Affairs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
      </section>

      {/* 8. Why Go Pustak? Human Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D8CBB8] space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#243B53] block">
              Editorial Commitment
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
              Why Go Pustak?
            </h2>
            <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              We publish practical reading material for Indian aspirants and readers who value clarity, rigor, and thoughtful ideas over hype.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { title: "Razorpay Verified Security", desc: "Instant payments via UPI, NetBanking, Credit Cards, PayPal." },
              { title: "Instant PDF & EPUB Access", desc: "Download directly to your phone, tablet, or Kindle." },
              { title: "Point-Wise Syllabus Accuracy", desc: "Designed for UPSC CSE, UPSC EPFO & State PSC exams." },
              { title: "Transparent Refund Guarantee", desc: "Clear support & hassle-free reader refund policy." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-[#F8F5EE] rounded-xl border border-[#D8CBB8] space-y-1">
                <CheckCircle2 className="w-4 h-4 text-[#355E3B]" />
                <h4 className="font-serif font-bold text-xs text-[#171717]">{item.title}</h4>
                <p className="text-[11px] text-[#171717]/70 leading-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
