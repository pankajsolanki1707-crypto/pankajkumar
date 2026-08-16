import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Download, Globe, Cpu, Lightbulb, GraduationCap, FileText, Check, Shield, Clock } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS, CATEGORIES } from '../data/books';
import { EXAM_HUBS } from '../data/exams';

export default function HomePage({ setActivePage, onSelectBook, onOpenSample, onBuyBook, onOpenSearch, onSelectExam }) {
  const featuredBooks = BOOKS.filter(b => b.featured).slice(0, 6);
  const freeBooks = BOOKS.filter(b => b.isFree || b.prices?.pdf === 0).slice(0, 4);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) onOpenSearch();
  };

  return (
    <div className="space-y-20 pb-16 animate-fadeIn font-sans bg-[#F8F5EE]">
      
      {/* 1. Distinctly Editorial Indian Hero Section */}
      <section className="relative bg-[#F8F5EE] pt-14 pb-20 border-b border-[#D8CBB8]/60 paper-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#243B53]/10 border border-[#243B53]/20 text-xs font-semibold text-[#243B53]">
                <span className="font-serif italic font-bold">गो</span>
                <span>Indian Digital Publishing & Reading Platform</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12]">
                  Books, ideas and useful reading — all in one place.
                </h1>
                <p className="text-base sm:text-xl text-[#171717]/80 font-sans leading-relaxed max-w-2xl">
                  Discover ebooks, study material, book stories, podcasts and practical ideas for learning, thinking and growing.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  onClick={() => setActivePage('ebooks')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#243B53] hover:bg-[#1E293B] text-[#F8F5EE] font-bold rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2 text-sm group"
                >
                  <span>Explore Ebooks</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActivePage('free-ebooks')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#F8F5EE] border border-[#D8CBB8] text-[#171717] font-semibold rounded-xl hover:bg-[#D8CBB8]/30 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#C9822B]" />
                  <span>Free Ebooks</span>
                </button>
              </div>

              {/* Subtle Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-[#171717]/70 border-t border-[#D8CBB8]/60">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#355E3B]" />
                  <span>Instant PDF & EPUB Downloads</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#243B53]" />
                  <span>Razorpay Verified Payment Security</span>
                </span>
              </div>

            </div>

            {/* Right Quiet Visual Composition: Real Book Photography & Paper Texture */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md aspect-[4/5] rounded-2xl bg-[#E8E2D5]/80 p-6 border border-[#D8CBB8] shadow-sm flex flex-col justify-between overflow-hidden">
                
                {/* Devanagari background watermark motif */}
                <div className="absolute top-0 right-0 font-serif text-9xl font-bold text-[#243B53]/5 select-none pointer-events-none leading-none -mr-8 -mt-8">
                  पुस्तक
                </div>

                <div className="space-y-4 relative z-10">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#243B53]">
                    Go Pustak Featured Selection
                  </span>
                  
                  {/* Stacked Book Cover Showcase */}
                  <div className="relative aspect-[3/4] max-h-64 rounded-xl bg-[#171717] overflow-hidden shadow-md border border-[#D8CBB8]/50 group cursor-pointer" onClick={() => onSelectBook(BOOKS[0])}>
                    <img
                      src={BOOKS[0].coverImage}
                      alt={BOOKS[0].title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#171717]/90 backdrop-blur-xs p-3 rounded-lg text-white space-y-0.5">
                      <h4 className="font-serif text-xs font-bold truncate">{BOOKS[0].title}</h4>
                      <p className="text-[10px] text-[#D8CBB8]">By {BOOKS[0].author?.name}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8CBB8]/60 flex items-center justify-between text-xs text-[#171717]/80 font-serif italic">
                  <span>"Where books speak slowly..."</span>
                  <span className="font-sans text-[10px] font-mono not-italic text-[#243B53] font-bold">2000+ Aspirants Trust</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Prominent Search Element */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-[#F8F5EE] p-5 sm:p-6 rounded-2xl border border-[#D8CBB8] shadow-md space-y-3">
          <form onSubmit={handleHeroSearchSubmit} className="flex items-center space-x-3 bg-[#FAF7F2] p-3 sm:p-4 rounded-xl border border-[#D8CBB8] focus-within:ring-2 focus-within:ring-[#243B53] transition-all">
            <Search className="w-5 h-5 text-[#243B53] flex-shrink-0" />
            <input
              type="text"
              readOnly
              onClick={onOpenSearch}
              placeholder="Search ebooks, exams, subjects, authors & ideas..."
              className="flex-1 bg-transparent text-sm sm:text-base text-[#171717] placeholder-[#171717]/50 focus:outline-none cursor-pointer"
            />
            <button
              type="button"
              onClick={onOpenSearch}
              className="px-5 py-2.5 bg-[#243B53] hover:bg-[#1E293B] text-[#F8F5EE] text-xs font-bold rounded-lg transition-colors flex items-center space-x-1"
            >
              <span>Search</span>
            </button>
          </form>

          {/* Quick Search Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#171717]/70 pt-1">
            <span className="font-semibold text-[#171717]/50">Try searching:</span>
            {['EPFO', 'Productivity', 'UPSC CSE', 'Current Affairs', 'Science & Tech', 'Pankaj Kumar'].map((term) => (
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
      </section>

      {/* 3. Featured Ebooks Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D8CBB8] pb-4">
          <div>
            <span className="text-xs font-sans uppercase font-bold text-[#243B53] tracking-widest block mb-1">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717]">
              Featured Ebooks
            </h2>
          </div>

          <button
            onClick={() => setActivePage('ebooks')}
            className="text-xs font-bold text-[#243B53] hover:underline flex items-center space-x-1"
          >
            <span>View All Ebooks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
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

      {/* 4. Competitive Exams Library (Serious Academic Publishing Feel) */}
      <section className="bg-[#243B53] text-[#F8F5EE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#F8F5EE]/20 pb-6">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-[#F8F5EE]/10 text-[#F8F5EE] border border-[#F8F5EE]/20 text-xs font-bold uppercase rounded tracking-wider inline-block">
                Competitive Exams Library
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Focused reading material for serious aspirants.
              </h2>
              <p className="text-xs sm:text-sm text-[#F8F5EE]/80 max-w-xl font-sans">
                Point-wise, high-yield study guides for UPSC CSE, UPSC EPFO (EO/AO & APFC), SSC CGL, Banking PO, and State PSC.
              </p>
            </div>

            <button
              onClick={() => setActivePage('exams')}
              className="px-6 py-3 bg-[#F8F5EE] hover:bg-[#E8E2D5] text-[#243B53] font-bold rounded-xl text-xs transition-colors flex items-center space-x-2 flex-shrink-0"
            >
              <span>Explore Exam Library</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXAM_HUBS.slice(0, 4).map((ex) => (
              <div
                key={ex.id}
                onClick={() => setActivePage('exams', ex.id)}
                className="bg-[#1E293B]/80 p-6 rounded-2xl border border-[#F8F5EE]/20 hover:border-[#C9822B] cursor-pointer transition-all space-y-3 group"
              >
                <span className="px-2 py-0.5 bg-[#F8F5EE]/10 text-[#F8F5EE] font-mono text-[10px] font-bold rounded uppercase">
                  {ex.badge}
                </span>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#D8CBB8] transition-colors">
                  {ex.name}
                </h3>
                <p className="text-xs text-[#F8F5EE]/70 line-clamp-2 leading-relaxed font-sans">
                  {ex.tagline}
                </p>
                <span className="text-xs font-bold text-[#C9822B] inline-flex items-center space-x-1 pt-1">
                  <span>View Material</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Start Reading for Free (Conversion Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#D8CBB8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 bg-[#355E3B] text-white text-xs font-bold uppercase rounded tracking-wider inline-block">
              Free Reading Section
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717]">
              Start Reading for Free
            </h2>
            <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed font-sans">
              No subscription required for selected free titles. Download monthly current affairs digests, study habit handbooks, and book summaries with 100% free direct access.
            </p>
            <button
              onClick={() => setActivePage('free-ebooks')}
              className="px-6 py-3.5 bg-[#355E3B] hover:bg-[#2B4B2F] text-white font-bold rounded-xl text-xs transition-colors flex items-center space-x-2 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Free Ebooks</span>
            </button>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {freeBooks.slice(0, 2).map((book) => (
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

      {/* 6. Made for Indian Readers Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F5EE] rounded-3xl p-8 sm:p-14 border border-[#D8CBB8] space-y-8 text-center sm:text-left">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-sans uppercase font-bold text-[#243B53] tracking-widest block">
              Reader Trust Guarantee
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717]">
              Made for Indian Readers
            </h2>
            <p className="text-xs sm:text-sm text-[#171717]/80 leading-relaxed">
              From competitive exam preparation and current affairs to personal development, books and ideas—Go Pustak brings practical reading into one reliable digital library.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {[
              "Razorpay Secure Payments",
              "Instant PDF & EPUB Access",
              "100% Verified Content",
              "Clear Refund Policy"
            ].map((t, idx) => (
              <div key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D8CBB8] text-xs font-semibold text-[#171717] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#355E3B] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
