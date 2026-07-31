import React from 'react';
import BookCard from '../components/BookCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { BOOKS } from '../data/books';
import { BLOG_POSTS } from '../data/supplementary';
import { TOPIC_CLUSTERS } from '../data/seoClusters';
import { ArrowLeft, BookOpen, Sparkles, FileText, Download } from 'lucide-react';

export default function CategoryArchivePage({ categoryName, onBack, onSelectBook, onOpenSample, onBuyBook, onNavigate }) {
  // Filter books matching category
  const categoryBooks = BOOKS.filter(b => b.category === categoryName || b.secondaryCategories?.includes(categoryName));
  
  // Filter blog posts matching category
  const categoryBlogs = BLOG_POSTS.filter(p => p.category === categoryName);

  // Identify pillar books in this category
  const pillarBookIds = Object.keys(TOPIC_CLUSTERS).filter(key => TOPIC_CLUSTERS[key].categorySlug.toLowerCase() === categoryName.toLowerCase());
  const pillarBooks = BOOKS.filter(b => pillarBookIds.includes(b.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Books', page: 'books' },
          { label: `Category: ${categoryName}` }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Topical Category Hub
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100">
          {categoryName} Architecture & Literature
        </h1>
        <p className="text-base text-ink-600 dark:text-ink-400 max-w-3xl">
          Comprehensive books, cluster essays, and actionable frameworks engineered by Pankaj Kumar in the field of {categoryName}.
        </p>
      </div>

      {/* Pillar Book Spotlight */}
      {pillarBooks.length > 0 && (
        <div className="bg-paper-200/80 dark:bg-ink-950/80 p-8 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-authorAccent" />
            <h2 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
              Subject Pillar Titles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillarBooks.map(pb => (
              <div key={pb.id} className="bg-paper-100 dark:bg-ink-900 p-6 rounded-xl border border-paper-300 dark:border-ink-800 flex space-x-4 items-center">
                <img src={pb.coverImage} alt={pb.title} className="w-20 h-28 object-cover rounded shadow-md flex-shrink-0" />
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-authorAccent">Core Pillar Book</span>
                  <h3 className="font-serif font-bold text-lg text-ink-900 dark:text-paper-100">{pb.title}</h3>
                  <p className="text-xs text-ink-600 dark:text-ink-400 line-clamp-2">{pb.subtitle}</p>
                  <button
                    onClick={() => onSelectBook(pb)}
                    className="text-xs font-semibold text-authorAccent hover:underline pt-1 block"
                  >
                    Read Pillar Book Landing Page →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Category Books */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
          Books in {categoryName} ({categoryBooks.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </div>

      {/* Supporting Cluster Articles */}
      {categoryBlogs.length > 0 && (
        <div className="pt-8 border-t border-paper-300 dark:border-ink-800 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-authorAccent" />
            <span>Educational Articles & Cluster Essays</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryBlogs.map(blog => (
              <div key={blog.id} className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-2">
                <span className="text-xs text-authorAccent font-semibold">{blog.date} • {blog.readTime}</span>
                <h3 className="font-serif font-bold text-lg text-ink-900 dark:text-paper-100">{blog.title}</h3>
                <p className="text-xs text-ink-600 dark:text-ink-400">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
