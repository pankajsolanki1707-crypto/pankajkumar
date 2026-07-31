import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Menu, X, Library, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenSearch, libraryCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'books', label: 'Books' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'reading-list', label: 'Reading List' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-paper-100/95 backdrop-blur-md border-b border-paper-300 py-3 shadow-sm' 
        : 'bg-paper-100 border-b border-paper-200 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => setActivePage('home')}
            className="group text-left flex items-center space-x-3 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-ink-900 text-paper-100 flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink-900 group-hover:text-authorAccent transition-colors">
                Pankaj Kumar
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-sans font-medium text-ink-500 uppercase tracking-widest border-l border-paper-300 pl-2">
                Author Platform
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activePage === link.id
                    ? 'text-authorAccent font-semibold bg-authorAccent/10'
                    : 'text-ink-700 hover:text-ink-900 hover:bg-paper-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons: Search, My Library */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full text-ink-600 hover:text-ink-900 hover:bg-paper-200 transition-colors relative"
              title="Search (Cmd+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* My Library Dashboard Link */}
            <button
              onClick={() => setActivePage('dashboard')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 text-sm font-semibold rounded-full border transition-all ${
                activePage === 'dashboard'
                  ? 'bg-authorAccent text-white border-authorAccent shadow-sm'
                  : 'border-ink-900/20 text-ink-900 hover:border-authorAccent hover:text-authorAccent'
              }`}
            >
              <Library className="w-4 h-4" />
              <span className="hidden sm:inline">My Library</span>
              {libraryCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-authorAccent text-white text-xs font-bold rounded-full">
                  {libraryCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-ink-700 hover:bg-paper-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-paper-300 space-y-2 pb-3 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-base font-medium rounded-lg flex items-center justify-between ${
                  activePage === link.id
                    ? 'bg-authorAccent/10 text-authorAccent font-semibold'
                    : 'text-ink-800 hover:bg-paper-200'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-ink-400" />
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
