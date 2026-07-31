import React from 'react';
import { ArrowRight, Award, BookOpen, Cpu, Brain, Globe, Feather, Mail } from 'lucide-react';
import { AUTHOR_BIO } from '../data/authorBio';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 animate-fadeIn">
      
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Author Portrait & Emblem */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-2 bg-gradient-to-tr from-authorAccent to-amber-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative bg-paper-100 dark:bg-ink-900 rounded-2xl p-6 border border-paper-300 dark:border-ink-800 shadow-elevated text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-ink-900 text-paper-100 dark:bg-paper-100 dark:text-ink-900 flex items-center justify-center font-serif text-5xl font-bold shadow-md">
                PK
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
                  Pankaj Kumar
                </h3>
                <p className="text-sm text-authorAccent font-semibold italic mt-0.5">
                  {AUTHOR_BIO.title}
                </p>
              </div>
              <p className="text-xs text-ink-500 border-t border-paper-200 dark:border-ink-800 pt-3">
                Master's Degree in Engineering & Technology • Author of 16+ Books
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Lead */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
            About the Author
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100 leading-tight">
            {AUTHOR_BIO.aboutHero}
          </h1>

          <div className="space-y-4 text-base text-ink-700 dark:text-ink-300 font-sans leading-relaxed">
            {AUTHOR_BIO.fullBiography.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Core Stats counter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-paper-200 dark:border-ink-800">
            {AUTHOR_BIO.stats.map((stat, idx) => (
              <div key={idx} className="bg-paper-200/50 dark:bg-ink-950/50 p-4 rounded-xl text-center border border-paper-300 dark:border-ink-800">
                <span className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100 block">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-ink-500 block mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Pillars of Thought */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block mb-1">
            Core Intellectual Pillars
          </span>
          <h2 className="font-serif text-3xl font-bold text-ink-900 dark:text-paper-100">
            Combining Analytical Engineering with Human Psychology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTHOR_BIO.pillars.map((pillar, idx) => (
            <div key={idx} className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-authorAccent/10 text-authorAccent flex items-center justify-center">
                {idx === 0 && <Cpu className="w-5 h-5" />}
                {idx === 1 && <Brain className="w-5 h-5" />}
                {idx === 2 && <Globe className="w-5 h-5" />}
                {idx === 3 && <Feather className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-900 dark:text-paper-100">
                {pillar.title}
              </h3>
              <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Speaking & Keynotes Box */}
      <div className="bg-paper-200 dark:bg-ink-950 rounded-2xl p-8 sm:p-12 border border-paper-300 dark:border-ink-800 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
            Keynote Speaking & Corporate Workshops
          </h3>
          <p className="text-sm text-ink-600 dark:text-ink-400">
            Pankaj conducts select workshops for tech leadership teams on "Think on Paper Systems", "Cognitive Architecture for Focus", and "Pragmatic AI Integration".
          </p>
        </div>

        <button
          onClick={() => setActivePage('contact')}
          className="px-6 py-3.5 bg-ink-900 dark:bg-paper-100 text-paper-100 dark:text-ink-900 font-semibold text-sm rounded-xl hover:bg-authorAccent dark:hover:bg-authorAccent-dark dark:hover:text-white transition-all flex items-center space-x-2 whitespace-nowrap shadow-sm"
        >
          <Mail className="w-4 h-4" />
          <span>Inquire for Speaking</span>
        </button>
      </div>

    </div>
  );
}
