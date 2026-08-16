import React, { useState } from 'react';
import { Headphones, Play, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { YOUTUBE_VIDEOS } from '../data/videos';
import { BOOKS } from '../data/books';

export default function PodcastsPage({ onSelectBook, onSelectVideo }) {
  const podcasts = YOUTUBE_VIDEOS.filter(v => v.type === 'podcast' || v.id.includes('podcast') || v.id.includes('reading'));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-amber-50/80 p-8 sm:p-12 rounded-3xl border border-amber-200 text-center space-y-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-700 text-white text-xs font-bold uppercase rounded-md tracking-wider">
          <Headphones className="w-3.5 h-3.5" />
          <span>Calm Conversations & Audio Book Stories</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-amber-950">
          The Go Pustak Podcast
        </h1>

        <p className="text-sm text-amber-900 leading-relaxed font-sans max-w-2xl mx-auto">
          Where books speak slowly, and ideas stay longer. Listen to calm discussions on cognitive psychology, reading habits, systems engineering, and clear thinking.
        </p>
      </div>

      {/* Podcast Episodes Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-ink-900">
            Podcast Episodes ({podcasts.length > 0 ? podcasts.length : YOUTUBE_VIDEOS.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(podcasts.length > 0 ? podcasts : YOUTUBE_VIDEOS).map((episode) => (
            <VideoCard
              key={episode.id}
              video={episode}
              onSelectVideo={onSelectVideo}
              onSelectBook={onSelectBook}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
