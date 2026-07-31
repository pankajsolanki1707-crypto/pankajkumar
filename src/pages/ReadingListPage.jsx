import React from 'react';
import { BookOpen, Star, Bookmark, ExternalLink } from 'lucide-react';
import { READING_LIST } from '../data/supplementary';

export default function ReadingListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Curated Literature
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100">
          Pankaj Kumar's Personal Reading List
        </h1>
        <p className="text-base text-ink-600 dark:text-ink-400">
          Books that have deeply shaped Pankaj's worldview across psychology, engineering, decision making, and philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {READING_LIST.map((item) => (
          <div key={item.id} className="bg-paper-100 dark:bg-ink-900 p-8 rounded-2xl border border-paper-300 dark:border-ink-800 shadow-subtle space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold text-authorAccent uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
                  {item.title}
                </h3>
                <p className="text-xs text-ink-500 font-semibold mt-0.5">By {item.author}</p>
              </div>
              <Bookmark className="w-5 h-5 text-authorAccent" />
            </div>

            <p className="text-sm text-ink-700 dark:text-ink-300 italic border-l-2 border-authorAccent pl-3">
              "{item.recommendationNote}"
            </p>

            <div className="pt-4 border-t border-paper-200 dark:border-ink-800 bg-paper-200/50 dark:bg-ink-950/50 p-3 rounded-xl">
              <span className="text-xs font-bold text-ink-900 dark:text-paper-100 block mb-0.5">Key Lesson:</span>
              <p className="text-xs text-ink-600 dark:text-ink-400">{item.keyTakeaway}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
