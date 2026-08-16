import React from 'react';
import { Play, Headphones, Youtube, ArrowRight, BookOpen } from 'lucide-react';
import { BOOKS } from '../data/books';

export default function VideoCard({ video, onSelectVideo, onSelectBook }) {
  const isPodcast = video.type === 'podcast';
  const relatedEbook = BOOKS.find(b => b.id === video.relatedEbookId);

  return (
    <div className="bg-paper-100 rounded-2xl border border-paper-300 shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Thumbnail */}
      <div 
        onClick={() => onSelectVideo(video)}
        className="relative w-full aspect-video bg-slate-900 cursor-pointer overflow-hidden group"
      >
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-emerald-700/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            {isPodcast ? <Headphones className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
          {video.duration}
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          {isPodcast ? (
            <span className="px-2.5 py-1 bg-amber-600 text-white text-[10px] font-sans font-bold uppercase rounded-md flex items-center space-x-1">
              <Headphones className="w-3 h-3" />
              <span>PODCAST</span>
            </span>
          ) : (
            <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-sans font-bold uppercase rounded-md flex items-center space-x-1">
              <Youtube className="w-3 h-3" />
              <span>YOUTUBE VIDEO</span>
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-emerald-800">
            {video.category}
          </span>

          <h3 
            onClick={() => onSelectVideo(video)}
            className="font-serif text-base font-bold text-ink-900 hover:text-emerald-800 cursor-pointer transition-colors line-clamp-2 leading-snug"
          >
            {video.title}
          </h3>

          <p className="text-xs text-ink-600 line-clamp-2 leading-relaxed">
            {video.subtitle || video.summary}
          </p>
        </div>

        {/* Related Ebook Footer Callout */}
        <div className="pt-3 border-t border-paper-200 space-y-2">
          {relatedEbook && (
            <div 
              onClick={() => onSelectBook(relatedEbook)}
              className="p-2.5 bg-paper-200/80 rounded-xl hover:bg-emerald-50 border border-paper-300 hover:border-emerald-300 cursor-pointer transition-all flex items-center justify-between text-xs"
            >
              <div className="flex items-center space-x-2 min-w-0">
                <BookOpen className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span className="truncate text-ink-800 font-medium">Read Ebook: <strong className="font-semibold">{relatedEbook.title}</strong></span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 ml-1" />
            </div>
          )}

          <button
            onClick={() => onSelectVideo(video)}
            className="w-full py-2 bg-paper-200 hover:bg-emerald-800 hover:text-white text-ink-900 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5"
          >
            <span>{isPodcast ? 'Listen Episode' : 'Watch Video'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
