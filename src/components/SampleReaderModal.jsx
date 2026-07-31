import React, { useState } from 'react';
import { X, Type, Sun, Moon, Coffee, BookOpen, ShoppingBag } from 'lucide-react';

export default function SampleReaderModal({ book, onClose, onBuyBook }) {
  const [fontSize, setFontSize] = useState(16); // px
  const [themeMode, setThemeMode] = useState('sepia'); // 'light', 'sepia', 'dark'

  const themeStyles = {
    light: {
      modalBg: 'bg-[#FAFAF8]',
      headerBg: 'bg-paper-200 border-paper-300',
      textMain: 'text-ink-900',
      textMuted: 'text-ink-700',
      textAccent: 'text-authorAccent',
      cardBg: 'bg-paper-100 border-paper-300',
      fontControlBg: 'bg-paper-200 border-paper-300 text-ink-900'
    },
    sepia: {
      modalBg: 'bg-[#F6F1E9]',
      headerBg: 'bg-[#EFE6D8] border-[#E2D4BF]',
      textMain: 'text-[#2C221E]',
      textMuted: 'text-[#54433A]',
      textAccent: 'text-[#8B4513]',
      cardBg: 'bg-[#EFE7DC] border-[#DFD4C3]',
      fontControlBg: 'bg-[#EAE0D1] border-[#DCD0BE] text-[#2C221E]'
    },
    dark: {
      modalBg: 'bg-[#141416]',
      headerBg: 'bg-[#1F1F23] border-[#2C2C32]',
      textMain: 'text-[#F4F4F5]',
      textMuted: 'text-[#A1A1AA]',
      textAccent: 'text-[#34D399]',
      cardBg: 'bg-[#1C1C20] border-[#2E2E36]',
      fontControlBg: 'bg-[#27272A] border-[#3F3F46] text-[#F4F4F5]'
    }
  };

  const currentTheme = themeStyles[themeMode];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-2 sm:p-4 overflow-hidden animate-fadeIn">
      <div className={`w-full max-w-4xl h-[92vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-colors duration-200 ${currentTheme.modalBg} ${currentTheme.headerBg}`}>
        
        {/* Top Control Bar */}
        <div className={`px-4 sm:px-6 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${currentTheme.headerBg}`}>
          
          <div className="flex items-center space-x-3">
            <BookOpen className={`w-5 h-5 ${currentTheme.textAccent}`} />
            <div>
              <h3 className={`font-serif font-bold text-sm sm:text-base ${currentTheme.textMain} truncate max-w-[220px] sm:max-w-md`}>
                {book.title} — Free Sample
              </h3>
              <span className={`text-[11px] font-sans font-medium ${currentTheme.textMuted}`}>
                {book.category} • Official Excerpt Preview
              </span>
            </div>
          </div>

          {/* Controls: Theme Toggles, Font Sizes, CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Reading Theme Toggles */}
            <div className={`flex items-center p-1 rounded-lg border ${currentTheme.fontControlBg}`}>
              <button
                onClick={() => setThemeMode('light')}
                className={`p-1.5 rounded ${themeMode === 'light' ? 'bg-white text-black shadow-sm font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Light Theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setThemeMode('sepia')}
                className={`p-1.5 rounded ${themeMode === 'sepia' ? 'bg-[#E4D7C5] text-[#2C221E] shadow-sm font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Sepia Reader Theme"
              >
                <Coffee className="w-4 h-4" />
              </button>
              <button
                onClick={() => setThemeMode('dark')}
                className={`p-1.5 rounded ${themeMode === 'dark' ? 'bg-zinc-800 text-white shadow-sm font-bold' : 'opacity-70 hover:opacity-100'}`}
                title="Dark Theme"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>

            {/* Font Size Adjusters */}
            <div className={`hidden sm:flex items-center space-x-1.5 px-2 py-1 rounded-lg border text-xs ${currentTheme.fontControlBg}`}>
              <button
                onClick={() => setFontSize(Math.max(13, fontSize - 1))}
                className="px-1.5 py-0.5 hover:bg-black/10 rounded font-bold"
              >
                A-
              </button>
              <span className="font-mono">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(22, fontSize + 1))}
                className="px-1.5 py-0.5 hover:bg-black/10 rounded font-bold"
              >
                A+
              </button>
            </div>

            {/* Buy Full Book CTA */}
            <button
              onClick={() => {
                onClose();
                onBuyBook(book);
              }}
              className="px-3.5 py-2 bg-authorAccent hover:bg-authorAccent-hover text-white text-xs font-bold rounded-xl shadow-sm flex items-center space-x-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Get Full Book (₹{book.prices.pdf})</span>
            </button>

            {/* Close Modal Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-lg hover:bg-black/10 transition-colors ${currentTheme.textMain}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reader Content Area */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-10 max-w-3xl mx-auto w-full space-y-8">
          
          {/* Title Header */}
          <div className="text-center border-b pb-8 space-y-3 border-black/10">
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${currentTheme.textAccent}`}>
              PANKAJ KUMAR • {book.category}
            </span>
            <h1 className={`font-serif text-3xl sm:text-4xl font-bold leading-tight ${currentTheme.textMain}`}>
              {book.title}
            </h1>
            <p className={`font-serif text-base italic font-semibold ${currentTheme.textMuted}`}>
              {book.subtitle}
            </p>
          </div>

          {/* Sample Text Body */}
          <div 
            className={`font-serif leading-relaxed whitespace-pre-line space-y-6 ${currentTheme.textMain}`}
            style={{ fontSize: `${fontSize}px` }}
          >
            {book.sampleExcerpt}
          </div>

          {/* End of Sample Notice Card */}
          <div className={`mt-12 p-8 rounded-2xl border text-center space-y-4 ${currentTheme.cardBg}`}>
            <BookOpen className={`w-10 h-10 mx-auto ${currentTheme.textAccent}`} />
            <h3 className={`font-serif text-2xl font-bold ${currentTheme.textMain}`}>
              End of Free Sample
            </h3>
            <p className={`text-sm font-sans font-medium max-w-md mx-auto ${currentTheme.textMuted}`}>
              Enjoyed this preview? Continue reading the complete book in <strong>PDF Digital Edition</strong> with instant download access.
            </p>
            <button
              onClick={() => {
                onClose();
                onBuyBook(book);
              }}
              className="px-8 py-3.5 bg-authorAccent hover:bg-authorAccent-hover text-white font-sans font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy Full PDF Edition (₹{book.prices.pdf})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
