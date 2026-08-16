import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Download, ArrowRight, CheckCircle2, FileCheck, Building2, Landmark } from 'lucide-react';
import EbookCard from '../components/EbookCard';
import { EXAM_HUBS } from '../data/exams';
import { BOOKS } from '../data/books';

export default function ExamsPage({ selectedExamId, onSelectBook, onOpenSample, onBuyBook, onNavigate }) {
  const [activeExamId, setActiveExamId] = useState(selectedExamId || 'upsc');

  const currentExam = EXAM_HUBS.find(e => e.id === activeExamId) || EXAM_HUBS[0];
  const examBooks = BOOKS.filter(b => b.category === 'Competitive Exams' || b.examCategory === currentExam.id || currentExam.primaryEbookIds.includes(b.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-3 border-b border-paper-200 pb-6 text-center max-w-3xl mx-auto">
        <span className="px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold uppercase rounded-md tracking-wider inline-block">
          Go Pustak Exam Prep Cell
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          Competitive Exams Hub
        </h1>
        <p className="text-sm text-ink-600 font-sans">
          Point-wise study guides, General Accounting notes, Labour Laws, and Static GK handbooks for serious competitive exam aspirants.
        </p>
      </div>

      {/* Exam Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {EXAM_HUBS.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setActiveExamId(ex.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeExamId === ex.id
                ? 'bg-blue-900 text-white shadow-sm'
                : 'bg-paper-100 text-ink-800 border border-paper-300 hover:bg-paper-200'
            }`}
          >
            <span>{ex.name}</span>
          </button>
        ))}
      </div>

      {/* Active Exam Showcase Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-paper-100 p-8 sm:p-12 rounded-3xl space-y-6 shadow-elevated">
        <div className="space-y-2">
          <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 font-mono text-xs font-bold rounded uppercase">
            {currentExam.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {currentExam.name}
          </h2>
          <p className="text-base text-blue-100 max-w-2xl font-serif italic">
            "{currentExam.tagline}"
          </p>
          <p className="text-xs text-slate-300 max-w-3xl font-sans leading-relaxed pt-2">
            {currentExam.description}
          </p>
        </div>

        {/* Key Subjects Badges */}
        <div className="space-y-2 pt-2 border-t border-slate-700">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Syllabus Modules Covered:</span>
          <div className="flex flex-wrap gap-2">
            {currentExam.keySubjects.map((sub, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-800 text-blue-200 text-xs font-semibold rounded-lg border border-slate-700">
                ✓ {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Ebooks Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-bold text-ink-900">
            Recommended Ebooks for {currentExam.name}
          </h3>
          <span className="text-xs font-mono text-ink-500">{examBooks.length} Ebooks</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examBooks.map((book) => (
            <EbookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
              onOpenSample={onOpenSample}
              onBuyBook={onBuyBook}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
