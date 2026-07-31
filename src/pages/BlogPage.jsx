import React, { useState } from 'react';
import { Clock, ArrowRight, BookOpen, Share2, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../data/supplementary';

export default function BlogPage({ onShowToast }) {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-paper-100"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Essays & Articles</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-semibold text-authorAccent">
            <span>{selectedPost.category}</span>
            <span>•</span>
            <span>{selectedPost.date}</span>
            <span>•</span>
            <span>{selectedPost.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100 leading-tight">
            {selectedPost.title}
          </h1>
          <p className="text-lg font-serif italic text-ink-600 dark:text-ink-300">
            {selectedPost.excerpt}
          </p>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden shadow-subtle border border-paper-300 dark:border-ink-800">
          <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
        </div>

        <div 
          className="prose dark:prose-invert max-w-none text-base leading-relaxed font-sans space-y-6 border-t border-paper-200 dark:border-ink-800 pt-8"
          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
        />

        <div className="pt-8 border-t border-paper-300 dark:border-ink-800 flex items-center justify-between">
          <span className="text-xs text-ink-500 font-semibold">Written by Pankaj Kumar</span>
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                onShowToast('Article link copied!');
              }
            }}
            className="px-4 py-2 bg-paper-200 dark:bg-ink-800 rounded-lg text-xs font-semibold flex items-center space-x-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Essays & Long-form Thoughts
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100">
          Pankaj Kumar's Journal
        </h1>
        <p className="text-base text-ink-600 dark:text-ink-400">
          Deep dives on systems thinking, handwriting neuroscience, defense tech, and attention economy architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div 
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group cursor-pointer bg-paper-100 dark:bg-ink-900 rounded-2xl border border-paper-300 dark:border-ink-800 overflow-hidden hover:border-authorAccent transition-all shadow-subtle flex flex-col justify-between"
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
                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100 group-hover:text-authorAccent transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-ink-600 dark:text-ink-400 line-clamp-3 mt-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-paper-200 dark:border-ink-800 flex items-center justify-between text-xs font-semibold text-ink-900 dark:text-paper-100">
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
