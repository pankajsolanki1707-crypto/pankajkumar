import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, BookOpen, Share2, ArrowLeft, Send, Sparkles, Bookmark, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/supplementary';
import { BOOKS } from '../data/books';

export default function BlogPage({ onShowToast }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!selectedPost) return;
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPost]);

  if (selectedPost) {
    const relatedBook = BOOKS.find(b => b.category === selectedPost.category) || BOOKS[0];

    return (
      <div className="min-h-screen pb-16 animate-fadeIn relative">
        
        {/* Sticky Reading Progress Indicator Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-paper-300 z-50">
          <div 
            className="h-full bg-authorAccent transition-all duration-150" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <button
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-ink-600 hover:text-authorAccent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal Essays</span>
          </button>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-semibold text-authorAccent uppercase tracking-wider">
              <span className="px-2.5 py-1 bg-authorAccent/10 rounded-md">{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 inline" />
                <span>{selectedPost.readTime}</span>
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 leading-tight">
              {selectedPost.title}
            </h1>
            
            <p className="text-xl font-serif italic text-ink-600 leading-relaxed border-l-2 border-authorAccent pl-4 py-1">
              {selectedPost.excerpt}
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden book-shadow border border-paper-300">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
          </div>

          {/* Long-form Editorial Article Content */}
          <article 
            className="editorial-reading-width mx-auto text-base text-ink-800 leading-relaxed font-sans space-y-6 border-t border-paper-200 pt-8"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          {/* Contextual Book Recommendation Callout Box */}
          <div className="bg-paper-200/80 rounded-2xl p-6 border border-paper-300 flex flex-col sm:flex-row items-center justify-between gap-6 my-10 shadow-subtle">
            <div className="flex items-center space-x-4">
              <img src={relatedBook.coverImage} alt={relatedBook.title} className="w-16 h-24 object-cover rounded shadow-md" />
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-authorAccent">Related Book Framework</span>
                <h4 className="font-serif font-bold text-base text-ink-900">{relatedBook.title}</h4>
                <p className="text-xs text-ink-600 line-clamp-1">{relatedBook.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => onShowToast(`Redirecting to ${relatedBook.title}`)}
              className="px-5 py-2.5 bg-authorAccent hover:bg-authorAccent-hover text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              Explore Book (₹{relatedBook.prices.pdf})
            </button>
          </div>

          {/* Article Footer & Share */}
          <div className="pt-8 border-t border-paper-300 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-ink-900 text-paper-100 flex items-center justify-center font-serif font-bold">P</div>
              <div>
                <p className="text-xs font-bold text-ink-900">Pankaj Kumar</p>
                <p className="text-[11px] text-ink-500">Engineer, Author & Systems Thinker</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  onShowToast('Article link copied to clipboard!');
                }
              }}
              className="px-4 py-2 bg-paper-100 border border-paper-300 rounded-xl text-xs font-semibold flex items-center space-x-1.5 hover:bg-paper-200 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Journal Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Editorial Journal
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          Essays & Long-form Thoughts
        </h1>
        <p className="text-base text-ink-600 font-sans leading-relaxed">
          Deep dives on systems thinking, handwriting neuroscience, defense technology, and attention economy architecture.
        </p>
      </div>

      {/* Grid of Journal Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div 
            key={post.id}
            onClick={() => {
              setSelectedPost(post);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer bg-paper-100 rounded-2xl border border-paper-300 overflow-hidden hover:border-authorAccent transition-all shadow-subtle flex flex-col justify-between"
          >
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-authorAccent mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-authorAccent transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-ink-600 line-clamp-3 mt-2 font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-paper-200 flex items-center justify-between text-xs font-semibold text-ink-900">
                <span>Read Essay</span>
                <ArrowRight className="w-4 h-4 text-authorAccent group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
