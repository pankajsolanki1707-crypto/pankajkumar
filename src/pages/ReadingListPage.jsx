import React, { useState } from 'react';
import { BookOpen, Star, Bookmark, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { READING_LIST } from '../data/supplementary';

export default function ReadingListPage() {
  const [selectedTheme, setSelectedTheme] = useState('All Themes');

  const themes = ['All Themes', 'Psychology', 'Productivity', 'Decision Making', 'Philosophy', 'Technology'];

  const filteredList = selectedTheme === 'All Themes'
    ? READING_LIST
    : READING_LIST.filter(item => item.category === selectedTheme);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Curated Personal Library
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          Pankaj Kumar's Personal Reading List
        </h1>
        <p className="text-base text-ink-600 font-sans leading-relaxed">
          The foundational books that have deeply shaped Pankaj's worldview across cognitive psychology, systems engineering, strategic decision making, and philosophy—with personal explanations on why each matters.
        </p>
      </div>

      {/* Theme Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-paper-300 pb-4">
        <span className="text-xs font-bold text-ink-500 uppercase tracking-wider mr-2 flex items-center space-x-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter Theme:</span>
        </span>
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedTheme(t)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTheme === t
                ? 'bg-ink-900 text-paper-100 shadow-sm'
                : 'bg-paper-100 text-ink-700 hover:bg-paper-200 border border-paper-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Recommended Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredList.map((item) => (
          <div key={item.id} className="bg-paper-100 p-8 rounded-2xl border border-paper-300 shadow-subtle space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-authorAccent tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-500 font-semibold mt-0.5">By {item.author}</p>
                </div>
                <Bookmark className="w-5 h-5 text-authorAccent flex-shrink-0" />
              </div>

              <div className="bg-paper-200/60 p-3.5 rounded-xl border-l-2 border-authorAccent">
                <span className="text-[10px] font-mono uppercase font-bold text-ink-500 block mb-1">Pankaj's Personal Note:</span>
                <p className="text-xs text-ink-700 italic font-serif leading-relaxed">
                  "{item.recommendationNote}"
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-paper-200 bg-paper-200/40 p-3.5 rounded-xl space-y-1">
              <span className="text-xs font-bold text-ink-900 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-authorAccent" />
                <span>Core Takeaway & Principle:</span>
              </span>
              <p className="text-xs text-ink-600 font-sans">{item.keyTakeaway}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
