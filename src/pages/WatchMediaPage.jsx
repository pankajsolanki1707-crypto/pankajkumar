import React, { useState } from 'react';
import { Youtube, Play, Headphones, BookOpen, Download, ArrowRight, CheckCircle2, Share2, Sparkles } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import EbookCard from '../components/EbookCard';
import { YOUTUBE_VIDEOS } from '../data/videos';
import { BOOKS } from '../data/books';

export default function WatchMediaPage({ selectedVideoSlug, onSelectBook, onOpenSample, onBuyBook }) {
  const [selectedVideo, setSelectedVideo] = useState(
    YOUTUBE_VIDEOS.find(v => v.slug === selectedVideoSlug) || YOUTUBE_VIDEOS[0]
  );

  const relatedEbook = BOOKS.find(b => b.id === selectedVideo?.relatedEbookId) || BOOKS[0];
  const otherVideos = YOUTUBE_VIDEOS.filter(v => v.id !== selectedVideo?.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-paper-200 pb-6">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-md tracking-wider flex items-center space-x-1">
            <Youtube className="w-3.5 h-3.5" />
            <span>Go Pustak Channel</span>
          </span>
          <span className="text-xs font-mono text-ink-500">Video-to-Ebook Learning Hub</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900">
          Watch, Listen & Download
        </h1>
        <p className="text-sm text-ink-600 font-sans max-w-2xl">
          Watch video explainers and podcast episodes, extract core key takeaways, and download full supporting ebooks directly into your library.
        </p>
      </div>

      {/* Main Video & Related Ebook Split Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Player & Video Summary */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Embedded YouTube Player Container */}
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-elevated border border-paper-300">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=0&rel=0`}
              title={selectedVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-ink-500">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold uppercase rounded-md">
                {selectedVideo.category}
              </span>
              <span className="font-mono">{selectedVideo.duration} • Published {selectedVideo.publishedDate}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 leading-tight">
              {selectedVideo.title}
            </h2>

            <p className="text-sm text-ink-700 font-sans leading-relaxed">
              {selectedVideo.summary}
            </p>
          </div>

          {/* Key Lessons Breakdown */}
          {selectedVideo.keyIdeas && (
            <div className="p-6 bg-paper-100 rounded-2xl border border-paper-300 space-y-3">
              <h3 className="font-serif text-lg font-bold text-ink-900 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Key Lessons & Ideas</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-ink-800 font-sans">
                {selectedVideo.keyIdeas.map((idea, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Right Column: Featured Connected Ebook Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="text-xs font-sans uppercase font-bold text-emerald-900 tracking-wider block mb-1">
              Official Supporting Ebook
            </span>
            <p className="text-xs text-emerald-800">
              Read the complete unabridged book referenced in this video lesson:
            </p>
          </div>

          {relatedEbook && (
            <EbookCard
              book={relatedEbook}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          )}
        </div>

      </div>

      {/* More Videos Gallery */}
      <div className="pt-8 border-t border-paper-300 space-y-6">
        <h3 className="font-serif text-2xl font-bold text-ink-900">More Video Lessons & Episodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherVideos.map((vid) => (
            <VideoCard
              key={vid.id}
              video={vid}
              onSelectVideo={(v) => setSelectedVideo(v)}
              onSelectBook={onSelectBook}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
