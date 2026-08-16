import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Menu, X, Library, Sparkles, Youtube, Headphones, BookMarked, GraduationCap, Globe2, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/books';

export default function Navbar({ activePage, setActivePage, onOpenSearch, libraryCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'ebooks', label: 'Ebooks' },
    { id: 'free-ebooks', label: 'Free Ebooks', badge: 'FREE' },
    { id: 'exams', label: 'Exams' },
    { id: 'current-affairs', label: 'Current Affairs' },
    { id: 'articles', label: 'Articles' },
    { id: 'listen', label: 'Listen' },
    { id: 'watch', label: 'Watch' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FDFDFB]/95 backdrop-blur-md border-b border-paper-300 py-3 shadow-sm' 
        : 'bg-[#FDFDFB] border-b border-paper-200 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name: Go Pustak */}
          <button 
            onClick={() => setActivePage('home')}
            className="group text-left flex items-center space-x-3 focus:outline-none flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-paper-100 flex items-center justify-center font-serif font-bold text-xl shadow-sm group-hover:bg-emerald-900 transition-colors">
              <BookOpen className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-ink-900 group-hover:text-emerald-800 transition-colors">
                  Go Pustak
                </span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-sans font-bold uppercase rounded-md tracking-wider">
                  Reading Platform
                </span>
              </div>
              <p className="text-[11px] font-sans font-medium text-ink-500 hidden sm:block">
                Where books speak slowly, and ideas stay longer.
              </p>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activePage === link.id
                    ? 'text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200'
                    : 'text-ink-700 hover:text-ink-900 hover:bg-paper-200'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 bg-emerald-600 text-white text-[9px] font-bold rounded">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Icons: Search & My Library */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl text-ink-700 hover:text-ink-900 hover:bg-paper-200 border border-paper-300 transition-all flex items-center space-x-2 text-xs font-medium"
              title="Search books, exams, authors (Cmd+K)"
            >
              <Search className="w-4 h-4 text-emerald-800" />
              <span className="hidden md:inline font-sans text-ink-500">Search...</span>
            </button>

            {/* My Library Dashboard Link */}
            <button
              onClick={() => setActivePage('library')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                activePage === 'library'
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'border-paper-300 bg-paper-100 text-ink-900 hover:border-emerald-800 hover:text-emerald-800'
              }`}
            >
              <Library className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline">My Library</span>
              {libraryCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-emerald-600 text-white text-[10px] font-bold rounded-full">
                  {libraryCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-paper-200 border border-paper-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-paper-300 space-y-2 pb-4 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl flex items-center justify-between ${
                  activePage === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200'
                    : 'text-ink-800 hover:bg-paper-200'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}

            <div className="pt-2 border-t border-paper-200 flex items-center justify-between px-4">
              <button
                onClick={() => {
                  setActivePage('bundles');
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-semibold text-emerald-800 hover:underline"
              >
                View Ebook Bundles %
              </button>
              <button
                onClick={() => {
                  setActivePage('about');
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-semibold text-ink-600 hover:underline"
              >
                About Go Pustak
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
