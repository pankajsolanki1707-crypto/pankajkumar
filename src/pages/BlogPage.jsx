import React, { useState } from 'react';
import { FileText, ArrowRight, BookOpen, Youtube, Clock, User } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { BOOKS } from '../data/books';

export default function ArticlesPage({ onSelectBook, onNavigate }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    const relatedEbook = BOOKS.find(b => b.id === selectedArticle.relatedEbookId);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
        <button
          onClick={() => setSelectedArticle(null)}
          className="text-xs font-semibold text-emerald-800 hover:underline inline-flex items-center space-x-1"
        >
          <span>← Back to All Articles</span>
        </button>

        <div className="space-y-4 border-b border-paper-200 pb-6">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase rounded-md tracking-wider">
            {selectedArticle.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 leading-tight">
            {selectedArticle.title}
          </h1>

          <p className="font-serif text-lg text-ink-700 italic">
            {selectedArticle.subtitle}
          </p>

          <div className="flex items-center space-x-3 text-xs text-ink-500 font-sans pt-2">
            <span>By <strong className="text-ink-900">{selectedArticle.author}</strong></span>
            <span>•</span>
            <span>{selectedArticle.publishedDate}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{selectedArticle.readTime}</span>
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-emerald max-w-none text-ink-800 font-sans text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line bg-paper-100 p-6 sm:p-8 rounded-2xl border border-paper-300">
          {selectedArticle.content}
        </div>

        {/* Related Ebook Callout Box */}
        {relatedEbook && (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
            <span className="text-xs font-sans uppercase font-bold text-emerald-900 tracking-wider block">
              Official Recommended Ebook
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-ink-900">{relatedEbook.title}</h4>
                <p className="text-xs text-ink-600 font-sans max-w-lg">{relatedEbook.oneLiner}</p>
              </div>
              <button
                onClick={() => onSelectBook(relatedEbook)}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-1.5 flex-shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Ebook</span>
              </button>
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-paper-200 pb-6 max-w-3xl">
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase rounded-md tracking-wider inline-block">
          Go Pustak Insights
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          Articles & Study Insights
        </h1>
        <p className="text-sm text-ink-600 font-sans">
          Thoughtful essays on reading habits, cognitive focus, exam strategy, and systems engineering.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="bg-paper-100 rounded-2xl border border-paper-300 shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div className="aspect-video bg-slate-900 overflow-hidden">
              <img src={art.thumbnail} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-emerald-800">
                  {art.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-ink-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-ink-600 line-clamp-2 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-paper-200 flex items-center justify-between text-xs text-ink-500">
                <span>{art.readTime}</span>
                <span className="font-semibold text-emerald-800 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
