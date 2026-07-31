import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';
import BookCard from '../components/BookCard';
import { BOOKS, CATEGORIES } from '../data/books';

export default function BooksPage({ onSelectBook, onOpenSample, onBuyBook }) {
  const [selectedCategory, setSelectedCategory] = useState('All Books');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'newest', 'alphabetical'

  // Filter books
  let filtered = BOOKS.filter(book => {
    const matchesCategory = selectedCategory === 'All Books' || book.category === selectedCategory || book.secondaryCategories?.includes(selectedCategory);
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort books
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'popular') return b.reviewsCount - a.reviewsCount;
    if (sortBy === 'newest') return b.publishedYear - a.publishedYear;
    if (sortBy === 'alphabetical') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Digital Library & Store
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100">
          The Complete Works of Pankaj Kumar
        </h1>
        <p className="text-base text-ink-600 dark:text-ink-400 font-sans leading-relaxed">
          Every title is engineered to compound in value over time. Available directly in Paperback, Kindle, instant PDF, and EPUB formats.
        </p>
      </div>

      {/* Control Bar: Search & Sorting */}
      <div className="bg-paper-100 dark:bg-ink-900 p-4 rounded-2xl border border-paper-300 dark:border-ink-800 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search titles or keywords..."
            className="w-full pl-10 pr-4 py-2 bg-paper-50 dark:bg-ink-800 border border-paper-300 dark:border-ink-700 rounded-xl text-sm text-ink-900 dark:text-paper-100 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
          />
        </div>

        {/* Sort Selector */}
        <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
          <ArrowUpDown className="w-4 h-4 text-ink-400" />
          <span className="text-xs font-medium text-ink-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-paper-50 dark:bg-ink-800 border border-paper-300 dark:border-ink-700 rounded-xl px-3 py-2 text-xs font-semibold text-ink-900 dark:text-paper-100 focus:outline-none focus:ring-2 focus:ring-authorAccent"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest Releases</option>
            <option value="alphabetical">Alphabetical (A-Z)</option>
          </select>
        </div>

      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-authorAccent text-white shadow-sm'
                : 'bg-paper-100 dark:bg-ink-900 border border-paper-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:border-authorAccent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-paper-100 dark:bg-ink-900 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-3">
          <p className="text-lg font-serif text-ink-900 dark:text-paper-100">No books found matching your filter.</p>
          <p className="text-sm text-ink-500">Try clearing your search query or selecting "All Books".</p>
          <button
            onClick={() => { setSelectedCategory('All Books'); setSearchQuery(''); }}
            className="px-4 py-2 bg-authorAccent text-white text-xs font-semibold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
