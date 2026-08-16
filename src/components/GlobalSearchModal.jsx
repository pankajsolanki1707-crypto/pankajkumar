import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, GraduationCap, Youtube, Headphones, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { BOOKS } from '../data/books';
import { YOUTUBE_VIDEOS } from '../data/videos';
import { ARTICLES } from '../data/articles';
import { EXAM_HUBS } from '../data/exams';

export default function GlobalSearchModal({ isOpen, onClose, onSelectBook, onSelectVideo, onSelectArticle, onSelectExam }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search triggered by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search filter matching
  const matchingBooks = cleanQuery ? BOOKS.filter(b => 
    b.title.toLowerCase().includes(cleanQuery) ||
    b.subtitle?.toLowerCase().includes(cleanQuery) ||
    b.category.toLowerCase().includes(cleanQuery) ||
    b.subcategory?.toLowerCase().includes(cleanQuery) ||
    b.author?.name.toLowerCase().includes(cleanQuery) ||
    b.oneLiner.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingExams = cleanQuery ? EXAM_HUBS.filter(e => 
    e.name.toLowerCase().includes(cleanQuery) ||
    e.keySubjects.some(s => s.toLowerCase().includes(cleanQuery)) ||
    e.tagline.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingVideos = cleanQuery ? YOUTUBE_VIDEOS.filter(v =>
    v.title.toLowerCase().includes(cleanQuery) ||
    v.category.toLowerCase().includes(cleanQuery) ||
    v.summary.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingArticles = cleanQuery ? ARTICLES.filter(a =>
    a.title.toLowerCase().includes(cleanQuery) ||
    a.category.toLowerCase().includes(cleanQuery) ||
    a.excerpt.toLowerCase().includes(cleanQuery)
  ) : [];

  const hasResults = matchingBooks.length > 0 || matchingExams.length > 0 || matchingVideos.length > 0 || matchingArticles.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      {/* Search Container */}
      <div className="bg-[#FDFDFB] rounded-2xl border border-paper-300 shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Header */}
        <div className="p-4 border-b border-paper-300 flex items-center space-x-3 bg-paper-100">
          <Search className="w-5 h-5 text-emerald-800 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ebooks, exams (UPSC, EPFO, SSC), subjects, authors..."
            className="flex-1 bg-transparent text-base text-ink-900 placeholder-ink-400 focus:outline-none font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-ink-400 hover:text-ink-900">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="px-2.5 py-1 bg-paper-200 hover:bg-paper-300 rounded-lg text-xs font-mono text-ink-600">
            ESC
          </button>
        </div>

        {/* Predictive Suggestions / Results */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          
          {!cleanQuery && (
            <div className="space-y-4 py-4 text-center sm:text-left">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-ink-500 block">
                Popular Search Topics
              </span>
              <div className="flex flex-wrap gap-2">
                {['Think on Paper', 'UPSC EPFO', 'SSC CGL', 'Productivity', 'Current Affairs', 'Pragmatic AI', 'Psychology', 'Dr. Ananya Sharma'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-paper-200 hover:bg-emerald-100 hover:text-emerald-900 rounded-xl text-xs font-medium text-ink-800 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cleanQuery && !hasResults && (
            <div className="py-12 text-center space-y-2">
              <p className="font-serif text-lg font-bold text-ink-900">No matching results found for "{query}"</p>
              <p className="text-xs text-ink-500">Try searching for keywords like "UPSC", "Paper", "EPFO", or "AI"</p>
            </div>
          )}

          {/* Ebook Results */}
          {matchingBooks.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <BookOpen className="w-4 h-4" />
                <span>Ebooks ({matchingBooks.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingBooks.map((book) => (
                  <div
                    key={book.id}
                    onClick={() => {
                      onSelectBook(book);
                      onClose();
                    }}
                    className="p-3 bg-paper-100 hover:bg-emerald-50/80 rounded-xl border border-paper-200 hover:border-emerald-300 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <img src={book.coverImage} alt={book.title} className="w-9 h-12 object-contain rounded bg-slate-900 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-serif font-bold text-sm text-ink-900 group-hover:text-emerald-900 truncate">{book.title}</h4>
                        <p className="text-xs text-ink-500 truncate">{book.category} • By {book.author?.name}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 flex-shrink-0 ml-2">
                      {book.isFree ? 'FREE' : `₹${book.prices?.pdf}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exam Hub Results */}
          {matchingExams.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-800">
                <GraduationCap className="w-4 h-4" />
                <span>Competitive Exam Hubs ({matchingExams.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingExams.map((exam) => (
                  <div
                    key={exam.id}
                    onClick={() => {
                      if (onSelectExam) onSelectExam(exam.id);
                      onClose();
                    }}
                    className="p-3 bg-paper-100 hover:bg-blue-50/80 rounded-xl border border-paper-200 hover:border-blue-300 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ink-900 group-hover:text-blue-900">{exam.name}</h4>
                      <p className="text-xs text-ink-500">{exam.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-700 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Results */}
          {matchingVideos.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-800">
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Videos & Podcasts ({matchingVideos.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      if (onSelectVideo) onSelectVideo(video);
                      onClose();
                    }}
                    className="p-3 bg-paper-100 hover:bg-purple-50/80 rounded-xl border border-paper-200 hover:border-purple-300 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-sm text-ink-900 group-hover:text-purple-900">{video.title}</h4>
                      <p className="text-xs text-ink-500">{video.type === 'podcast' ? 'Podcast Episode' : 'YouTube Video'} • {video.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-700 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
