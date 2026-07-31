import React, { useState, useEffect } from 'react';
import { Search, Book, FileText, Download, X, ArrowRight } from 'lucide-react';
import { BOOKS } from '../data/books';
import { BLOG_POSTS, FREE_RESOURCES } from '../data/supplementary';

export default function GlobalSearchModal({ isOpen, onClose, onSelectBook, onSelectBlog }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBooks = BOOKS.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) || 
    b.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = BLOG_POSTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  const filteredResources = FREE_RESOURCES.filter(r => 
    r.title.toLowerCase().includes(query.toLowerCase()) || 
    r.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-paper-100 dark:bg-ink-900 rounded-2xl max-w-2xl w-full border border-paper-300 dark:border-ink-700 shadow-2xl overflow-hidden">
        
        {/* Search Input Header */}
        <div className="p-4 border-b border-paper-300 dark:border-ink-800 flex items-center space-x-3">
          <Search className="w-5 h-5 text-ink-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books, topics, essays, or worksheets..."
            className="w-full bg-transparent text-lg text-ink-900 dark:text-paper-100 placeholder-ink-400 focus:outline-none font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-ink-400 hover:text-ink-900 dark:hover:text-paper-100 text-xs font-mono border border-paper-300 dark:border-ink-700"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          
          {/* Books Results */}
          {filteredBooks.length > 0 && (
            <div>
              <div className="text-xs font-sans uppercase tracking-wider font-bold text-ink-400 mb-2 px-2 flex items-center space-x-1">
                <Book className="w-3.5 h-3.5" />
                <span>Books ({filteredBooks.length})</span>
              </div>
              <div className="space-y-1">
                {filteredBooks.map(b => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onClose();
                      onSelectBook(b);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-paper-200 dark:hover:bg-ink-800 transition-colors flex items-center space-x-3 group"
                  >
                    <img src={b.coverImage} alt={b.title} className="w-8 h-11 object-cover rounded shadow-xs" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-ink-900 dark:text-paper-100 group-hover:text-authorAccent truncate">
                        {b.title}
                      </h4>
                      <p className="text-xs text-ink-500 truncate">{b.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blog Results */}
          {filteredBlogs.length > 0 && (
            <div>
              <div className="text-xs font-sans uppercase tracking-wider font-bold text-ink-400 mb-2 px-2 flex items-center space-x-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Essays & Articles ({filteredBlogs.length})</span>
              </div>
              <div className="space-y-1">
                {filteredBlogs.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectBlog(p);
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-paper-200 dark:hover:bg-ink-800 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ink-900 dark:text-paper-100 group-hover:text-authorAccent">
                        {p.title}
                      </h4>
                      <span className="text-xs text-ink-400">{p.category} • {p.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-ink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resources Results */}
          {filteredResources.length > 0 && (
            <div>
              <div className="text-xs font-sans uppercase tracking-wider font-bold text-ink-400 mb-2 px-2 flex items-center space-x-1">
                <Download className="w-3.5 h-3.5" />
                <span>Free Resources ({filteredResources.length})</span>
              </div>
              <div className="space-y-1">
                {filteredResources.map(r => (
                  <div key={r.id} className="p-2.5 rounded-xl hover:bg-paper-200 dark:hover:bg-ink-800 transition-colors flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ink-900 dark:text-paper-100">
                        {r.title}
                      </h4>
                      <p className="text-xs text-ink-500">{r.format}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredBooks.length === 0 && filteredBlogs.length === 0 && filteredResources.length === 0 && (
            <div className="py-12 text-center text-ink-500 text-sm">
              No results found for "{query}". Try searching for "Paper", "Habits", "AI", or "Attention".
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
