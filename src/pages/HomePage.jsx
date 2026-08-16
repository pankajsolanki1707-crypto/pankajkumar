import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Sparkles, CheckCircle2, Star, ShieldCheck, Download, Globe, Cpu, Lightbulb, Compass, Award, HelpCircle, ChevronDown, ChevronUp, Layers, GraduationCap, Youtube, Headphones, FileText, Check, Shield, FileCheck, Building2, Landmark, Clock } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import VideoCard from '../components/VideoCard';
import { BOOKS, CATEGORIES, SUB_CATEGORIES } from '../data/books';
import { YOUTUBE_VIDEOS } from '../data/videos';
import { EXAM_HUBS } from '../data/exams';
import { EBOOK_BUNDLES } from '../data/bundles';

export default function HomePage({ setActivePage, onSelectBook, onOpenSample, onBuyBook, onOpenSearch, onSelectVideo, onSelectExam }) {
  const [searchInput, setSearchInput] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const featuredBooks = BOOKS.filter(b => b.featured).slice(0, 6);
  const freeBooks = BOOKS.filter(b => b.isFree || b.prices.pdf === 0).slice(0, 4);
  const examBooks = BOOKS.filter(b => b.category === 'Competitive Exams').slice(0, 4);
  const personalGrowthBooks = BOOKS.filter(b => b.category === 'Personal Growth').slice(0, 4);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) onOpenSearch();
  };

  const homepageFaqs = [
    {
      q: "What is Go Pustak?",
      a: "Go Pustak is a digital ebook and reading platform where books speak slowly and ideas stay longer. We share ebooks, study resources, current affairs digests, book notes, podcasts, and video explainers across personal growth, competitive exams, technology, and practical education."
    },
    {
      q: "How are digital ebooks delivered after purchase or download?",
      a: "Directly into your 'My Library' dashboard! Every free or premium ebook is delivered as a secure, high-resolution PDF and EPUB file with instant download access sent to your email."
    },
    {
      q: "Which competitive exams does Go Pustak cover?",
      a: "We provide specialized study guides, labour law summaries, and general awareness handbooks for UPSC CSE, UPSC EPFO (EO/AO & APFC), SSC CGL/CHSL, Banking (SBI/IBPS PO), and State PSC exams."
    },
    {
      q: "What payment methods are supported for paid ebooks?",
      a: "We support Razorpay, Cashfree Payments (UPI, GPay, PhonePe, Paytm, NetBanking, Debit/Credit Cards in INR ₹), and PayPal Business (USD $ for international readers)."
    },
    {
      q: "Can I read ebooks on Kindle, iPad, or mobile phones?",
      a: "Yes! All Go Pustak ebooks are delivered in universal PDF and EPUB formats optimized for tablets, smartphones, e-ink readers, desktop PDF applications, and Kindle devices."
    }
  ];

  return (
    <div className="space-y-20 pb-16 animate-fadeIn">
      
      {/* 1. Clear Editorial Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F9F9F6] to-[#FDFDFB] pt-12 pb-16 border-b border-paper-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-semibold text-emerald-900 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Digital Ebook & Reading Platform</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink-900 leading-[1.12]">
              Go Pustak
            </h1>
            <p className="font-serif text-2xl sm:text-3xl text-emerald-900 font-medium">
              Books, ideas and useful reading — all in one place.
            </p>
            <p className="text-base sm:text-lg text-ink-700 font-sans leading-relaxed max-w-2xl mx-auto">
              Explore ebooks, study resources, book stories, podcasts and practical ideas across personal development, competitive exams, education, technology and more.
            </p>
          </div>

          {/* Primary & Secondary Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setActivePage('ebooks')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 text-base group"
            >
              <span>Explore Ebooks</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActivePage('watch')}
              className="w-full sm:w-auto px-8 py-4 bg-paper-100 border border-paper-300 text-ink-900 font-semibold rounded-xl hover:bg-paper-200 transition-all flex items-center justify-center space-x-2 text-base"
            >
              <Youtube className="w-5 h-5 text-red-600" />
              <span>Watch & Listen</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Large Prominent Search Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-paper-100 p-4 sm:p-6 rounded-2xl border border-paper-300 shadow-elevated space-y-3">
          <form onSubmit={handleHeroSearchSubmit} className="flex items-center space-x-3 bg-paper-50 p-3 sm:p-4 rounded-xl border border-paper-300 focus-within:ring-2 focus-within:ring-emerald-700 transition-all">
            <Search className="w-6 h-6 text-emerald-800 flex-shrink-0" />
            <input
              type="text"
              readOnly
              onClick={onOpenSearch}
              placeholder="Search books, subjects, authors, exams, topics..."
              className="flex-1 bg-transparent text-base sm:text-lg text-ink-900 placeholder-ink-400 focus:outline-none cursor-pointer"
            />
            <button
              type="button"
              onClick={onOpenSearch}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold rounded-lg transition-colors flex items-center space-x-1"
            >
              <span>Search</span>
            </button>
          </form>

          {/* Quick Search Suggestions */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-600 pt-1">
            <span className="font-semibold text-ink-500">Popular:</span>
            {['Think on Paper', 'UPSC EPFO', 'SSC CGL', 'Productivity', 'Psychology', 'Pragmatic AI', 'Current Affairs'].map((term) => (
              <button
                key={term}
                onClick={onOpenSearch}
                className="px-2.5 py-1 bg-paper-200 hover:bg-emerald-100 hover:text-emerald-900 rounded-lg text-ink-800 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Category Hubs System */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-sans uppercase font-bold text-emerald-800 tracking-wider block">
            Organized Library
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
            Explore Main Categories
          </h2>
          <p className="text-sm text-ink-600 font-sans">
            Clean, scannable collections curated for readers, aspirants, and lifelong learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Personal Growth",
              desc: "Self Help, Productivity, Habits, Psychology, Mindset, Decision Making.",
              icon: Lightbulb,
              cat: "Personal Growth",
              count: "6 Ebooks"
            },
            {
              title: "Competitive Exams",
              desc: "UPSC CSE, UPSC EPFO, SSC CGL/CHSL, Banking PO, State PSC.",
              icon: GraduationCap,
              cat: "Competitive Exams",
              count: "4 Handbooks"
            },
            {
              title: "Current Affairs",
              desc: "National, International, Economy, Defence, Environment, Govt Schemes.",
              icon: Clock,
              cat: "Current Affairs",
              count: "Monthly Edition"
            },
            {
              title: "Education & Learning",
              desc: "General Knowledge, Study Skills, Active Recall, Research Methods.",
              icon: BookOpen,
              cat: "Education & Learning",
              count: "Free Guides"
            },
            {
              title: "Technology",
              desc: "Artificial Intelligence, Programming, Tech Explained, Digital Trends.",
              icon: Cpu,
              cat: "Technology",
              count: "Engineering Guides"
            },
            {
              title: "Books & Ideas",
              desc: "Book Summaries, Reading Guides, Practical Philosophy, Biography.",
              icon: Sparkles,
              cat: "Books & Ideas",
              count: "Summary Vault"
            }
          ].map((c, idx) => (
            <div
              key={idx}
              onClick={() => setActivePage('ebooks', c.cat)}
              className="bg-paper-100 p-6 rounded-2xl border border-paper-300 hover:border-emerald-700 cursor-pointer transition-all shadow-subtle space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-semibold text-ink-500 bg-paper-200 px-2 py-0.5 rounded">
                  {c.count}
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-ink-900 group-hover:text-emerald-800 transition-colors">
                {c.title}
              </h3>
              <p className="text-xs text-ink-600 font-sans leading-relaxed">
                {c.desc}
              </p>
              <span className="text-xs font-semibold text-emerald-800 inline-flex items-center space-x-1 pt-1">
                <span>Browse Category</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Ebooks Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-sans uppercase font-bold text-emerald-800 tracking-wider block mb-1">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              Featured Ebooks
            </h2>
          </div>

          <button
            onClick={() => setActivePage('ebooks')}
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-900 flex items-center space-x-1"
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

      {/* 5. Competitive Exam Prep Hub Spotlight */}
      <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-paper-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-700 pb-6">
            <div className="space-y-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase rounded-md tracking-wider inline-block">
                Serious Exam Preparation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Competitive Exams Section
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Point-wise, high-yield study guides for UPSC CSE, UPSC EPFO, SSC CGL, Banking PO, and State PSC.
              </p>
            </div>

            <button
              onClick={() => setActivePage('exams')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors flex items-center space-x-2"
            >
              <span>Explore All Exam Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXAM_HUBS.slice(0, 4).map((ex) => (
              <div
                key={ex.id}
                onClick={() => setActivePage('exams', ex.id)}
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-blue-400 cursor-pointer transition-all space-y-3 group"
              >
                <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold rounded uppercase">
                  {ex.badge}
                </span>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                  {ex.name}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {ex.tagline}
                </p>
                <span className="text-xs font-semibold text-blue-400 inline-flex items-center space-x-1 pt-1">
                  <span>View Material</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Free Ebooks Hub Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-emerald-50 rounded-3xl p-8 sm:p-12 border border-emerald-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase rounded-md tracking-wider inline-block">
              Free Reading Resources
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950">
              Download Free Ebooks & Study Guides
            </h2>
            <p className="text-sm text-emerald-900 leading-relaxed font-sans">
              We believe essential knowledge should be accessible. Explore free monthly current affairs digests, effective study skill handbooks, and book previews with 100% free direct downloads.
            </p>
            <button
              onClick={() => setActivePage('free-ebooks')}
              className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-xs transition-colors flex items-center space-x-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Browse All Free Downloads</span>
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

      {/* 7. YouTube Integration Section ("From the Go Pustak Channel") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase text-red-600 tracking-wider">
              <Youtube className="w-4 h-4" />
              <span>Primary Traffic Channel</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              From the Go Pustak Channel
            </h2>
            <p className="text-sm text-ink-600 max-w-xl">
              Watch video explainers, book stories, and podcast conversations connected directly to our ebook library.
            </p>
          </div>

          <button
            onClick={() => setActivePage('watch')}
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-900 flex items-center space-x-1"
          >
            <span>View All Videos & Podcasts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {YOUTUBE_VIDEOS.slice(0, 3).map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelectVideo={(v) => {
                if (onSelectVideo) onSelectVideo(v);
                else setActivePage('watch');
              }}
              onSelectBook={onSelectBook}
            />
          ))}
        </div>
      </section>

      {/* 8. Why Go Pustak? (Trust & Brand Mission) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paper-100 rounded-3xl p-8 sm:p-14 border border-paper-300 shadow-subtle space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-sans uppercase font-bold text-emerald-800 tracking-wider block">
              Our Core Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              Why Go Pustak?
            </h2>
            <p className="text-sm text-ink-600">
              A reliable digital publishing platform built for serious readers and aspirants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calm & Simple Experience",
                desc: "No flashy popups, zero aggressive timer gimmicks, and no hidden download links. Just clean, reliable reading materials.",
                icon: BookOpen
              },
              {
                title: "Exam & Practical Focus",
                desc: "Every study guide and ebook is crafted with point-wise precision, verified syllabus coverage, and real analytical depth.",
                icon: ShieldCheck
              },
              {
                title: "Multi-Format Instant Delivery",
                desc: "Read on any device. Download high-resolution DRM-free PDF and EPUB files saved permanently in your personal library.",
                icon: Globe
              }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto sm:mx-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-ink-900">{item.title}</h3>
                <p className="text-xs text-ink-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Reader Guidance FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-sans uppercase font-bold text-emerald-800 tracking-wider block">
            Reader Guidance
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {homepageFaqs.map((faq, idx) => (
            <div key={idx} className="bg-paper-100 rounded-2xl border border-paper-300 overflow-hidden shadow-subtle">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left font-serif font-bold text-base text-ink-900 flex items-center justify-between"
              >
                <span className="flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                  <span>{faq.q}</span>
                </span>
                {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-emerald-800" /> : <ChevronDown className="w-5 h-5 text-ink-400" />}
              </button>
              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-sm text-ink-700 font-sans border-t border-paper-200 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
