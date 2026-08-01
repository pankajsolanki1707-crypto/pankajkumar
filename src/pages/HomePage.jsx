import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Star, ShieldCheck, Download, Globe, Cpu, Lightbulb, Compass, Award } from 'lucide-react';
import BookCard from '../components/BookCard';
import { BOOKS, CATEGORIES, TESTIMONIALS } from '../data/books';

export default function HomePage({ setActivePage, onSelectBook, onOpenSample, onBuyBook }) {
  const featuredBooks = BOOKS.filter(b => b.featured).slice(0, 6);
  const bestsellers = BOOKS.filter(b => b.bestseller);
  const flagshipBook = BOOKS.find(b => b.id === 'think-on-paper') || BOOKS[0];

  return (
    <div className="space-y-24 pb-16 animate-fadeIn">
      
      {/* 1. Reader-Centered Editorial Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-paper-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Column: Reader Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Product Hunt Featured Badge & Platform Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://www.producthunt.com/products/pankaj-kumar?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-pankaj-kumar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity shadow-sm rounded-xl overflow-hidden"
                >
                  <img 
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1212040&theme=dark&t=1785568690122" 
                    alt="Pankaj Kumar - Practical Books on Productivity, AI & Clear Thinking | Product Hunt" 
                    width="250" 
                    height="54" 
                    className="h-11 w-auto"
                  />
                </a>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-paper-200 border border-paper-300 text-xs font-semibold text-ink-800">
                  <Sparkles className="w-3.5 h-3.5 text-authorAccent" />
                  <span>Official Author Platform</span>
                </div>
              </div>

              {/* Transformation Reader-Centered Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 leading-[1.15]">
                Think Clearly. <br className="hidden sm:inline" />
                Execute With Precision. <br className="hidden sm:inline" />
                <span className="italic font-normal text-authorAccent">Live Intentionally.</span>
              </h1>

              {/* Subheadline: Value Proposition */}
              <p className="text-lg sm:text-xl text-ink-700 font-sans leading-relaxed max-w-2xl">
                Engineering frameworks, cognitive psychology, and practical philosophy designed to eliminate mental noise, clear brain clutter, and turn abstract ideas into executable reality.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActivePage('books')}
                  className="px-8 py-4 bg-ink-900 text-paper-100 font-semibold rounded-xl hover:bg-authorAccent hover:text-white transition-all shadow-md flex items-center justify-center space-x-3 text-base group"
                >
                  <span>Browse All Books</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenSample(flagshipBook)}
                  className="px-8 py-4 bg-paper-100 border border-paper-300 text-ink-900 font-semibold rounded-xl hover:bg-paper-200 transition-all flex items-center justify-center space-x-3 text-base"
                >
                  <BookOpen className="w-5 h-5 text-authorAccent" />
                  <span>Start Reading Free Chapter</span>
                </button>
              </div>

              {/* Global Checkout Trust Bar */}
              <div className="pt-6 border-t border-paper-200 space-y-3">
                <div className="flex flex-wrap items-center gap-6 text-xs text-ink-500 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>16+ Published Books</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>50,000+ Readers Worldwide</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Paperback • Kindle • PDF • EPUB</span>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold text-blue-800">
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
                <div className="relative bg-paper-100 p-6 rounded-2xl border border-paper-300 shadow-elevated max-w-sm">
                  
                  <div className="w-full h-80 rounded-xl overflow-hidden book-shadow mb-4 relative book-spine-effect bg-ink-900 cursor-pointer" onClick={() => onSelectBook(flagshipBook)}>
                    <img 
                      src={flagshipBook.coverImage} 
                      alt={flagshipBook.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded shadow">
                      Flagship Book
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-sans uppercase font-bold text-authorAccent tracking-wider">
                        {flagshipBook.category}
                      </span>
                      <span className="text-xs font-mono text-ink-500 font-semibold">
                        64 Pages • 1.5h Read
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-ink-900 cursor-pointer hover:text-authorAccent transition-colors" onClick={() => onSelectBook(flagshipBook)}>
                      {flagshipBook.title}
                    </h3>
                    <p className="text-xs text-ink-600 line-clamp-2">
                      {flagshipBook.subtitle}
                    </p>
                    
                    <div className="pt-3 flex items-center justify-between border-t border-paper-200">
                      <span className="text-sm font-bold text-ink-900">
                        ₹{flagshipBook.prices.pdf} <span className="text-xs text-ink-500 font-normal">/ ${flagshipBook.prices.usd} USD</span>
                      </span>
                      <button
                        onClick={() => onSelectBook(flagshipBook)}
                        className="text-xs font-semibold text-authorAccent hover:text-authorAccent-hover flex items-center space-x-1"
                      >
                        <span>Read Synopsis</span>
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

      {/* 2. "Why I Write: Engineering Better Thinking" — Customized Author Personal Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-paper-100 rounded-3xl p-8 sm:p-14 border border-paper-300 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Author Portrait / Image Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-elevated border border-paper-300 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop" 
                  alt="Pankaj Kumar Writing Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-paper-100">
                  <p className="font-serif text-lg font-bold">Pankaj Kumar</p>
                  <p className="text-xs text-paper-300 font-sans">Mechanical Engineer & Author</p>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Storytelling Copy */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
              Author Philosophy
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
              Why I Write: Engineering Better Thinking
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ink-700 font-sans leading-relaxed">
              <p>
                Before becoming an author, I spent years studying and working in mechanical engineering, where every machine, system, and process is designed to solve problems efficiently. One lesson stayed with me throughout my career: <em>every system has limits</em>. When a machine fails, engineers don't blame the machine—they identify the bottleneck, redesign the process, and improve the system.
              </p>
              <p className="font-serif text-base italic text-ink-900">
                Over time, I realized that the human mind works in much the same way.
              </p>
              <p>
                Most people don't struggle because they lack intelligence, discipline, or ambition. They struggle because they ask their minds to carry too many decisions, worries, and ideas at the same time. Just as no machine is designed to operate under constant overload, neither is the human brain.
              </p>
              <p>
                I write books to apply engineering thinking to everyday life. By breaking complex problems into simple frameworks, practical exercises, and clear action steps, my goal is to help readers organize their thoughts, make better decisions, and reduce mental clutter.
              </p>
              <p>
                To me, a book isn't just a collection of ideas—it's a carefully designed tool. Like a well-engineered system, it should simplify complexity, improve performance, and make life easier for the people who use it.
              </p>
            </div>

            {/* Core Belief Callout Box */}
            <div className="pt-2">
              <div className="bg-paper-200/80 p-5 rounded-2xl border-l-4 border-authorAccent space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-authorAccent tracking-wider block">
                  Core Guiding Principle
                </span>
                <p className="font-serif text-lg font-bold text-ink-900 italic">
                  "Clear thinking isn't a talent. It's a system—and anyone can build it."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Curated Disciplines Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-ink-900">
            Explore Books by Discipline
          </h2>
          <p className="text-sm text-ink-600 mt-1">
            Organized systematically across Pankaj's core fields of inquiry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => setActivePage('category-archive', cat)}
              className="px-5 py-2.5 bg-paper-100 border border-paper-300 hover:border-authorAccent hover:bg-authorAccent/5 text-ink-800 text-sm font-semibold rounded-full transition-all shadow-subtle"
            >
              ✓ {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Featured Editorial Books Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
              Curated Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
              Featured Editorial Titles
            </h2>
          </div>

          <button
            onClick={() => setActivePage('books')}
            className="text-sm font-semibold text-ink-900 hover:text-authorAccent flex items-center space-x-1"
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

      {/* 5. Spotlight: Latest Release ("Think on Paper") */}
      <section className="bg-paper-200 py-16 border-y border-paper-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Book Cover */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 h-96 rounded-r-xl rounded-l-xs book-shadow book-spine-effect overflow-hidden bg-ink-900">
                <img 
                  src={flagshipBook.coverImage} 
                  alt={flagshipBook.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold uppercase rounded-md">
                Flagship Book Spotlight
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
                {flagshipBook.title}
              </h2>

              <p className="font-serif text-lg text-ink-700 italic">
                {flagshipBook.subtitle}
              </p>

              <p className="text-ink-600 leading-relaxed font-sans">
                {flagshipBook.oneLiner}
              </p>

              {/* Formats Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-bold text-ink-500 uppercase tracking-wider">Available Formats:</span>
                {['Paperback ₹399', 'Kindle ₹199', 'PDF ₹149 / $1.99', 'EPUB ₹149 / $1.99'].map((f) => (
                  <span key={f} className="px-3 py-1 bg-paper-100 border border-paper-300 text-xs font-semibold rounded-lg text-ink-800">
                    {f}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => onBuyBook(flagshipBook)}
                  className="px-6 py-3.5 bg-authorAccent hover:bg-authorAccent-hover text-white font-semibold rounded-xl transition-all shadow-md text-sm"
                >
                  Buy Now (Instant PDF Download)
                </button>
                <button
                  onClick={() => onOpenSample(flagshipBook)}
                  className="px-6 py-3.5 bg-paper-100 border border-paper-300 text-ink-900 font-semibold rounded-xl hover:bg-paper-300 transition-all text-sm"
                >
                  Download Sample Chapter
                </button>
                <button
                  onClick={() => onSelectBook(flagshipBook)}
                  className="px-6 py-3.5 text-ink-700 hover:text-ink-900 text-sm font-semibold"
                >
                  Read Synopsis →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
            Top Recommended
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
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

      {/* 7. Reader Reviews & Wall of Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
            Wall of Trust
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink-900">
            What Readers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-paper-100 p-6 rounded-2xl border border-paper-300 shadow-subtle flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-ink-800 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-paper-200 flex items-center space-x-3 mt-6">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-serif text-sm font-bold text-ink-900">
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
