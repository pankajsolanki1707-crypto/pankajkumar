import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalSearchModal from './components/GlobalSearchModal';
import CashfreeModal from './components/CashfreeModal';
import SampleReaderModal from './components/SampleReaderModal';

import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ReadingListPage from './pages/ReadingListPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import CategoryArchivePage from './pages/CategoryArchivePage';
import SitemapPage from './pages/SitemapPage';
import ImageSitemapPage from './pages/ImageSitemapPage';
import RobotsTxtPage from './pages/RobotsTxtPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

import { BOOKS } from './data/books';

const getPathForPage = (page, data) => {
  switch (page) {
    case 'home': return '/';
    case 'books': return '/books';
    case 'book-details': return data ? `/books/${data.id || data}` : '/books';
    case 'category-archive': return data ? `/category/${encodeURIComponent(data)}` : '/books';
    case 'about': return '/about';
    case 'blog': return '/blog';
    case 'reading-list': return '/reading-list';
    case 'dashboard': return '/dashboard';
    case 'admin-console': return '/admin';
    case 'contact': return '/contact';
    case 'sitemap': return '/sitemap';
    case 'image-sitemap': return '/image-sitemap';
    case 'robots': return '/robots';
    case 'legal-privacy': return '/legal/privacy';
    case 'legal-terms': return '/legal/terms';
    case 'legal-refund': return '/legal/refund';
    case 'legal-cookie': return '/legal/cookie';
    case 'legal-accessibility': return '/legal/accessibility';
    case 'legal-copyright': return '/legal/copyright';
    default: return '/';
  }
};

const parsePathToState = (pathname) => {
  if (pathname === '/' || pathname === '') return { page: 'home' };
  if (pathname === '/books') return { page: 'books' };
  if (pathname.startsWith('/books/')) {
    const bookId = pathname.replace('/books/', '');
    const book = BOOKS.find(b => b.id === bookId);
    if (book) return { page: 'book-details', data: book };
    return { page: 'books' };
  }
  if (pathname.startsWith('/category/')) {
    const cat = decodeURIComponent(pathname.replace('/category/', ''));
    return { page: 'category-archive', data: cat };
  }
  if (pathname === '/about') return { page: 'about' };
  if (pathname === '/blog') return { page: 'blog' };
  if (pathname === '/reading-list') return { page: 'reading-list' };
  if (pathname === '/dashboard') return { page: 'dashboard' };
  if (pathname === '/admin') return { page: 'admin-console' };
  if (pathname === '/contact') return { page: 'contact' };
  if (pathname === '/sitemap') return { page: 'sitemap' };
  if (pathname === '/image-sitemap') return { page: 'image-sitemap' };
  if (pathname === '/robots') return { page: 'robots' };
  if (pathname === '/legal/privacy') return { page: 'legal-privacy' };
  if (pathname === '/legal/terms') return { page: 'legal-terms' };
  if (pathname === '/legal/refund') return { page: 'legal-refund' };
  if (pathname === '/legal/cookie') return { page: 'legal-cookie' };
  if (pathname === '/legal/accessibility') return { page: 'legal-accessibility' };
  if (pathname === '/legal/copyright') return { page: 'legal-copyright' };
  return { page: 'home' };
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Productivity');
  const [sampleModalBook, setSampleModalBook] = useState(null);
  const [cashfreeModalBook, setCashfreeModalBook] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Ensure clean light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('pk_theme');
  }, []);

  // Purchased books state (Strictly empty by default - requires verified payment)
  const [purchasedBooks, setPurchasedBooks] = useState(() => {
    const saved = localStorage.getItem('pk_purchased_library');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('pk_purchased_library', JSON.stringify(purchasedBooks));
  }, [purchasedBooks]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleNavigate = (page, data, skipHistoryPush = false) => {
    if (page === 'book-details' && data) {
      setSelectedBook(data);
    }
    if (page === 'category-archive' && data) {
      setSelectedCategory(data);
    }
    setActivePage(page);

    if (!skipHistoryPush) {
      const path = getPathForPage(page, data);
      window.history.pushState({ page, data }, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize browser URL & Back/Forward button history (popstate)
  useEffect(() => {
    const initial = parsePathToState(window.location.pathname);
    handleNavigate(initial.page, initial.data, true);
    
    const initialPath = getPathForPage(initial.page, initial.data);
    window.history.replaceState({ page: initial.page, data: initial.data }, '', initialPath);

    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        handleNavigate(event.state.page, event.state.data, true);
      } else {
        const stateFromPath = parsePathToState(window.location.pathname);
        handleNavigate(stateFromPath.page, stateFromPath.data, true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectBook = (book) => {
    handleNavigate('book-details', book);
  };

  const handleOpenSample = (book) => {
    setSampleModalBook(book);
  };

  const handleBuyBook = (book) => {
    setCashfreeModalBook(book);
  };

  const handlePaymentSuccess = (orderData) => {
    setPurchasedBooks((prev) => [orderData, ...prev]);
    showToast(`Order ${orderData.orderId} verified via Cashfree! Added to My Library.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper-100 text-ink-900 font-sans">
      
      {/* Top Announcement Bar for Launch Offer "READER10" */}
      <AnnouncementBar onShowToast={showToast} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink-900 text-paper-100 px-5 py-3 rounded-xl shadow-2xl border border-paper-300 text-xs font-semibold flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={(page, data) => handleNavigate(page, data)}
        onOpenSearch={() => setIsSearchOpen(true)}
        libraryCount={purchasedBooks.length}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={(page, data) => handleNavigate(page, data)}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'books' && (
          <BooksPage
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'book-details' && selectedBook && (
          <BookDetailsPage
            book={selectedBook}
            onBack={() => handleNavigate('books')}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
            onShowToast={showToast}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'category-archive' && (
          <CategoryArchivePage
            categoryName={selectedCategory}
            onBack={() => handleNavigate('books')}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={(page, data) => handleNavigate(page, data)} />
        )}

        {activePage === 'blog' && (
          <BlogPage onShowToast={showToast} />
        )}

        {activePage === 'reading-list' && (
          <ReadingListPage />
        )}

        {activePage === 'dashboard' && (
          <DashboardPage
            purchasedBooks={purchasedBooks}
            onShowToast={showToast}
            setActivePage={(page, data) => handleNavigate(page, data)}
          />
        )}

        {activePage === 'admin-console' && (
          <AdminDashboardPage onShowToast={showToast} />
        )}

        {activePage === 'contact' && (
          <ContactPage onShowToast={showToast} />
        )}

        {activePage === 'sitemap' && (
          <SitemapPage onNavigate={handleNavigate} onShowToast={showToast} />
        )}

        {activePage === 'image-sitemap' && (
          <ImageSitemapPage onNavigate={handleNavigate} onShowToast={showToast} />
        )}

        {activePage === 'robots' && (
          <RobotsTxtPage onShowToast={showToast} />
        )}

        {activePage === 'legal-privacy' && <LegalPage type="privacy" />}
        {activePage === 'legal-terms' && <LegalPage type="terms" />}
        {activePage === 'legal-refund' && <LegalPage type="refund" />}
        {activePage === 'legal-cookie' && <LegalPage type="cookie" />}
        {activePage === 'legal-accessibility' && <LegalPage type="accessibility" />}
        {activePage === 'legal-copyright' && <LegalPage type="copyright" />}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={(page, data) => handleNavigate(page, data)}
        onShowToast={showToast}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBook={handleSelectBook}
        onSelectBlog={() => handleNavigate('blog')}
      />

      {/* Cashfree Payments Modal */}
      {cashfreeModalBook && (
        <CashfreeModal
          book={cashfreeModalBook}
          onClose={() => setCashfreeModalBook(null)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {/* Free Sample Chapter Reader Modal */}
      {sampleModalBook && (
        <SampleReaderModal
          book={sampleModalBook}
          onClose={() => setSampleModalBook(null)}
          onBuyBook={handleBuyBook}
        />
      )}

    </div>
  );
}
