import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Library, Sparkles, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../data/books';

export default function Navbar({ activePage, setActivePage, onOpenSearch, libraryCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'ebooks', label: 'Ebooks' },
    { id: 'categories', label: 'Categories', isDropdown: true },
    { id: 'exams', label: 'Exams' },
    { id: 'current-affairs', label: 'Current Affairs' },
    { id: 'articles', label: 'Articles' },
    { id: 'listen', label: 'Listen' },
    { id: 'watch', label: 'Watch' },
  ];

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 font-sans">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#243B53] text-[#F8F5EE] text-[11px] py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center space-x-2 border-b border-[#243B53]/20">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9822B]"></span>
        <span>Free ebooks & study resources updated weekly for Indian readers & aspirants</span>
      </div>

      {/* Main Publishing Header */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#D8CBB8]/60 py-3 shadow-xs' 
          : 'bg-[#F8F5EE] border-b border-[#E8E2D5] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Distinctive Indian Publishing Logo & Wordmark */}
            <button 
              onClick={() => setActivePage('home')}
              className="group text-left flex items-center space-x-3 focus:outline-none flex-shrink-0"
            >
              {/* Devanagari-inspired open page symbol */}
              <div className="w-9 h-9 rounded-lg bg-[#243B53] text-[#F8F5EE] flex items-center justify-center font-serif font-bold text-lg shadow-xs group-hover:bg-[#1E293B] transition-colors border border-[#243B53]/30">
                <span className="font-serif italic text-base tracking-tighter">गो</span>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#171717] group-hover:text-[#243B53] transition-colors">
                    Go Pustak
                  </span>
                  <span className="px-1.5 py-0.2 bg-[#243B53]/10 text-[#243B53] text-[9px] font-sans font-bold uppercase rounded tracking-wider border border-[#243B53]/20">
                    Publisher
                  </span>
                </div>
                <p className="text-[10px] font-sans text-[#171717]/60 hidden sm:block tracking-wide">
                  Where books speak slowly, and ideas stay longer.
                </p>
              </div>
            </button>

            {/* Center Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.id} className="relative">
                  {link.isDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setCategoriesOpen(!categoriesOpen)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1 ${
                          activePage === 'categories'
                            ? 'text-[#243B53] bg-[#243B53]/10 border border-[#243B53]/20'
                            : 'text-[#171717]/80 hover:text-[#171717] hover:bg-[#D8CBB8]/30'
                        }`}
                      >
                        <span>Categories</span>
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </button>

                      {categoriesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-[#F8F5EE] rounded-xl border border-[#D8CBB8] shadow-lg p-2 space-y-1 z-50 animate-fadeIn">
                          {CATEGORIES.filter(c => c !== 'All Categories').map((cat) => (
                            <button
                              key={cat}
                              onClick={() => {
                                setActivePage('ebooks', cat);
                                setCategoriesOpen(false);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs font-medium text-[#171717] hover:bg-[#243B53]/10 hover:text-[#243B53] rounded-lg transition-colors"
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setActivePage(link.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                        activePage === link.id
                          ? 'text-[#243B53] font-bold bg-[#243B53]/10 border border-[#243B53]/20'
                          : 'text-[#171717]/80 hover:text-[#171717] hover:bg-[#D8CBB8]/30'
                      }`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Action Icons: Search & My Library */}
            <div className="flex items-center space-x-2">
              
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-xl text-[#171717] hover:bg-[#D8CBB8]/40 border border-[#D8CBB8] transition-all flex items-center space-x-1.5 text-xs font-medium"
                title="Search books, exams, topics (Cmd+K)"
              >
                <Search className="w-4 h-4 text-[#243B53]" />
                <span className="hidden md:inline text-[#171717]/70">Search...</span>
              </button>

              {/* My Library Button */}
              <button
                onClick={() => setActivePage('library')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border transition-all ${
                  activePage === 'library'
                    ? 'bg-[#243B53] text-[#F8F5EE] border-[#243B53] shadow-xs'
                    : 'border-[#D8CBB8] bg-[#F8F5EE] text-[#171717] hover:border-[#243B53] hover:text-[#243B53]'
                }`}
              >
                <Library className="w-4 h-4 text-[#243B53]" />
                <span className="hidden sm:inline">My Library</span>
                {libraryCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-[#C9822B] text-white text-[9px] font-bold rounded-full">
                    {libraryCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#171717] hover:bg-[#D8CBB8]/40 border border-[#D8CBB8]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-[#D8CBB8] space-y-1 pb-3 animate-fadeIn">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-semibold rounded-xl flex items-center justify-between ${
                    activePage === link.id
                      ? 'bg-[#243B53]/10 text-[#243B53] font-bold border border-[#243B53]/20'
                      : 'text-[#171717] hover:bg-[#D8CBB8]/30'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              ))}

              <div className="pt-2 border-t border-[#D8CBB8]/60 flex items-center justify-between px-4">
                <button
                  onClick={() => {
                    setActivePage('free-ebooks');
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-bold text-[#243B53] hover:underline"
                >
                  Free Reading Resources
                </button>
                <button
                  onClick={() => {
                    setActivePage('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-semibold text-[#171717]/60 hover:underline"
                >
                  About Imprint
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
