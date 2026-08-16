import React from 'react';
import { BookOpen, ShieldCheck, Heart, Users, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { AUTHORS } from '../data/books';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn font-sans">
      
      {/* Brand Hero */}
      <div className="text-center space-y-4 border-b border-paper-200 pb-8">
        <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-paper-100 flex items-center justify-center font-serif font-bold text-2xl mx-auto shadow-sm">
          <BookOpen className="w-6 h-6 text-emerald-200" />
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          About Go Pustak
        </h1>
        
        <p className="font-serif italic text-xl text-emerald-900 font-medium">
          "Where books speak slowly, and ideas stay longer."
        </p>
      </div>

      {/* Main Philosophy & Mission */}
      <div className="bg-paper-100 p-8 sm:p-10 rounded-3xl border border-paper-300 shadow-subtle space-y-6 text-ink-800 text-base leading-relaxed">
        <p className="text-lg font-serif italic text-ink-900 border-l-4 border-emerald-800 pl-4">
          Go Pustak is a space for book lovers, exam aspirants, and thoughtful listeners.
        </p>

        <p>
          We share book stories and ideas in simple language through calm podcasts, video explainers, reading resources, and useful ebooks. From personal development and self-help to competitive exams, current affairs, education, technology, and practical learning, Go Pustak brings useful reading material into one simple and reliable platform.
        </p>

        <p>
          We believe that in an era of constant hyper-stimulation and instant notifications, deep reading and structured learning remain the ultimate superpowers. We do not design for flashy trends or aggressive marketing; we design for clarity, trust, and lasting cognitive value.
        </p>
      </div>

      {/* Authors & Content Contributors */}
      <div className="space-y-6">
        <h2 className="font-serif text-3xl font-bold text-ink-900 text-center">
          Authors & Contributors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUTHORS.map((author) => (
            <div key={author.id} className="bg-paper-100 p-6 rounded-2xl border border-paper-300 space-y-3 text-center">
              <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-full object-cover mx-auto border border-paper-300 shadow-sm" />
              <h3 className="font-serif font-bold text-lg text-ink-900">{author.name}</h3>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">{author.role}</span>
              <p className="text-xs text-ink-600 leading-relaxed">{author.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Principles */}
      <div className="bg-emerald-50/60 p-8 rounded-3xl border border-emerald-200 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-emerald-950 text-center">
          Our Brand Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Simple & Intuitive — Zero hidden download buttons or confusing pricing.",
            "Trustworthy & Reliable — Verified syllabus coverage and robust source material.",
            "Calm & Content-First — No neon timers, flashy popups, or aggressive tricks.",
            "Multi-Format Accessibility — Universal PDF & EPUB digital editions for all devices."
          ].map((principle, idx) => (
            <div key={idx} className="p-4 bg-paper-100 rounded-xl border border-paper-300 text-xs font-semibold text-ink-800 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
