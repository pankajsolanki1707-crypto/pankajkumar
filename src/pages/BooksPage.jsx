import React, { useState } from 'react';
import { Search, Filter, BookOpen, Sparkles, X, Check, ArrowRight } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { BOOKS, CATEGORIES, SUB_CATEGORIES, EXAM_TYPES } from '../data/books';

export default function EbooksPage({ initialCategory, initialFreeOnly, onSelectBook, onOpenSample, onBuyBook }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All Categories');
  const [selectedExam, setSelectedExam] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [filterType, setFilterType] = useState(initialFreeOnly ? 'free' : 'all'); // 'all' | 'free' | 'premium'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  const filteredBooks = BOOKS.filter((book) => {
    // Category filter
    if (selectedCategory !== 'All Categories' && book.category !== selectedCategory) {
      return false;
    }
    // Exam filter
    if (selectedExam !== 'all' && book.examCategory !== selectedExam) {
      return false;
    }
    // Language filter
    if (selectedLanguage !== 'all' && book.language !== selectedLanguage) {
      return false;
    }
    // Free / Premium filter
    if (filterType === 'free' && (!book.isFree && book.prices?.pdf !== 0)) {
      return false;
    }
    if (filterType === 'premium' && (book.isFree || book.prices?.pdf === 0)) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = book.title.toLowerCase().includes(q);
      const matchSub = book.subtitle?.toLowerCase().includes(q);
      const matchAuthor = book.author?.name.toLowerCase().includes(q);
      const matchCat = book.category.toLowerCase().includes(q);
      return matchTitle || matchSub || matchAuthor || matchCat;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'newest') return b.publishedYear - a.publishedYear;
    if (sortBy === 'price-low') return (a.prices?.pdf || 0) - (b.prices?.pdf || 0);
    if (sortBy === 'price-high') return (b.prices?.pdf || 0) - (a.prices?.pdf || 0);
    return 0; // recommended
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-paper-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase rounded-md tracking-wider">
            Go Pustak Library
          </span>
          <span className="text-xs font-mono text-ink-500">
            {filteredBooks.length} {filteredBooks.length === 1 ? 'Ebook' : 'Ebooks'} Available
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900">
          Digital Ebook Library
        </h1>
        <p className="text-sm text-ink-600 font-sans max-w-2xl">
          Explore ebooks, study resources, current affairs digests, and practical guides. Read free sample chapters or download high-resolution PDF and EPUB editions.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-paper-100 p-4 sm:p-6 rounded-2xl border border-paper-300 shadow-subtle space-y-4">
        
        {/* Top Row: Search & Free/Premium Toggles */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-emerald-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, subject, exam, author..."
              className="w-full pl-10 pr-4 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-900">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Free / Premium Segmented Control */}
          <div className="flex items-center space-x-1 bg-paper-200 p-1 rounded-xl border border-paper-300 text-xs font-semibold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterType === 'all' ? 'bg-emerald-800 text-white shadow-xs' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              All Ebooks
            </button>
            <button
              onClick={() => setFilterType('free')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1 ${
                filterType === 'free' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-emerald-800 hover:text-emerald-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Only</span>
            </button>
            <button
              onClick={() => setFilterType('premium')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                filterType === 'premium' ? 'bg-ink-900 text-white shadow-xs' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              Premium
            </button>
          </div>

        </div>

        {/* Bottom Row: Category, Exam, Language & Sorting Selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-paper-200">
          
          {/* Category Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-ink-500 uppercase">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-paper-50 border border-paper-300 rounded-xl text-xs font-medium text-ink-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Exam Filter Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-ink-500 uppercase">Exam Filter</label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full px-3 py-2 bg-paper-50 border border-paper-300 rounded-xl text-xs font-medium text-ink-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <option value="all">All Exams</option>
              {EXAM_TYPES.map((ex) => (
                <option key={ex.id} value={ex.id}>{ex.name}</option>
              ))}
            </select>
          </div>

          {/* Language Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-ink-500 uppercase">Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-3 py-2 bg-paper-50 border border-paper-300 rounded-xl text-xs font-medium text-ink-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <option value="all">All Languages</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-ink-500 uppercase">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 bg-paper-50 border border-paper-300 rounded-xl text-xs font-medium text-ink-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <option value="recommended">Recommended</option>
              <option value="newest">Newest Releases</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

      </div>

      {/* Ebooks Cards Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <EbookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-3 bg-paper-100 rounded-2xl border border-paper-300">
          <BookOpen className="w-10 h-10 text-emerald-800 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-ink-900">No ebooks found matching your criteria</h3>
          <p className="text-xs text-ink-600">Try resetting filters or searching for terms like "Paper", "UPSC", or "EPFO"</p>
          <button
            onClick={() => {
              setSelectedCategory('All Categories');
              setSelectedExam('all');
              setSelectedLanguage('all');
              setFilterType('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
}
