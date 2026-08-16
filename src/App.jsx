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
import ExamsPage from './pages/ExamsPage';
import FreeEbooksPage from './pages/FreeEbooksPage';
import WatchMediaPage from './pages/WatchMediaPage';
import PodcastsPage from './pages/PodcastsPage';
import BlogPage from './pages/BlogPage';
import BundlesPage from './pages/BundlesPage';
import DashboardPage from './pages/DashboardPage';
import CurrentAffairsPage from './pages/CurrentAffairsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import SitemapPage from './pages/SitemapPage';
import ImageSitemapPage from './pages/ImageSitemapPage';
import RobotsTxtPage from './pages/RobotsTxtPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

import { BOOKS } from './data/books';
import { YOUTUBE_VIDEOS } from './data/videos';
import { ARTICLES } from './data/articles';

const getPathForPage = (page, data) => {
  switch (page) {
    case 'home': return '/';
    case 'ebooks': return data ? `/ebooks?category=${encodeURIComponent(data)}` : '/ebooks';
    case 'ebook-details': return data ? `/ebooks/${data.slug || data.id || data}` : '/ebooks';
    case 'free-ebooks': return '/free-ebooks';
    case 'exams': return data ? `/exams/${data}` : '/exams';
    case 'current-affairs': return '/current-affairs';
    case 'articles': return data ? `/articles/${data.slug || data.id || data}` : '/articles';
    case 'watch': return data ? `/watch/${data.slug || data.id || data}` : '/watch';
    case 'listen': return '/listen';
    case 'bundles': return '/bundles';
    case 'library': return '/library';
    case 'about': return '/about';
    case 'contact': return '/contact';
    case 'admin-console': return '/admin';
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
  if (pathname === '/ebooks') return { page: 'ebooks' };
  if (pathname.startsWith('/ebooks/')) {
    const slug = pathname.replace('/ebooks/', '');
    const book = BOOKS.find(b => b.slug === slug || b.id === slug);
    if (book) return { page: 'ebook-details', data: book };
    return { page: 'ebooks' };
  }
  if (pathname === '/free-ebooks') return { page: 'free-ebooks' };
  if (pathname.startsWith('/exams')) {
    const examId = pathname.replace('/exams/', '').replace('/exams', '');
    return { page: 'exams', data: examId || 'upsc' };
  }
  if (pathname === '/current-affairs') return { page: 'current-affairs' };
  if (pathname.startsWith('/articles')) {
    const articleSlug = pathname.replace('/articles/', '').replace('/articles', '');
    return { page: 'articles', data: articleSlug };
  }
  if (pathname.startsWith('/watch')) {
    const videoSlug = pathname.replace('/watch/', '').replace('/watch', '');
    return { page: 'watch', data: videoSlug };
  }
  if (pathname === '/listen' || pathname === '/podcasts') return { page: 'listen' };
  if (pathname === '/bundles') return { page: 'bundles' };
  if (pathname === '/library') return { page: 'library' };
  if (pathname === '/about') return { page: 'about' };
  if (pathname === '/contact') return { page: 'contact' };
  if (pathname === '/admin') return { page: 'admin-console' };
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
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedExamId, setSelectedExamId] = useState('upsc');
  const [selectedVideoSlug, setSelectedVideoSlug] = useState(null);
  const [sampleModalBook, setSampleModalBook] = useState(null);
  const [cashfreeModalBook, setCashfreeModalBook] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Ensure clean theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('pk_theme');
  }, []);

  // Purchased library state
  const [purchasedBooks, setPurchasedBooks] = useState(() => {
    const saved = localStorage.getItem('gopustak_purchased_library');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('gopustak_purchased_library', JSON.stringify(purchasedBooks));
  }, [purchasedBooks]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleNavigate = (page, data, skipHistoryPush = false) => {
    if (page === 'ebook-details' && data) {
      setSelectedBook(data);
    }
    if (page === 'ebooks' && data) {
      setSelectedCategory(data);
    }
    if (page === 'exams' && data) {
      setSelectedExamId(data);
    }
    if (page === 'watch' && data) {
      setSelectedVideoSlug(data);
    }
    setActivePage(page);

    if (!skipHistoryPush) {
      const path = getPathForPage(page, data);
      window.history.pushState({ page, data }, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize browser URL & Back/Forward button history
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
    handleNavigate('ebook-details', book);
  };

  const handleOpenSample = (book) => {
    setSampleModalBook(book);
  };

  const handleBuyBook = (book) => {
    setCashfreeModalBook(book);
  };

  const handlePaymentSuccess = (orderData) => {
    setPurchasedBooks((prev) => [orderData, ...prev]);
    showToast(`Order ${orderData.orderId} verified! Added to My Library.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFB] text-ink-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Announcement Bar */}
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
            onOpenSearch={() => setIsSearchOpen(true)}
            onSelectVideo={(v) => handleNavigate('watch', v)}
            onSelectExam={(exId) => handleNavigate('exams', exId)}
          />
        )}

        {activePage === 'ebooks' && (
          <BooksPage
            initialCategory={selectedCategory}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'free-ebooks' && (
          <FreeEbooksPage
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'ebook-details' && selectedBook && (
          <BookDetailsPage
            book={selectedBook}
            onBack={() => handleNavigate('ebooks')}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
            onShowToast={showToast}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'exams' && (
          <ExamsPage
            selectedExamId={selectedExamId}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'current-affairs' && (
          <CurrentAffairsPage
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'watch' && (
          <WatchMediaPage
            selectedVideoSlug={selectedVideoSlug}
            onSelectBook={handleSelectBook}
            onOpenSample={handleOpenSample}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'listen' && (
          <PodcastsPage
            onSelectBook={handleSelectBook}
            onSelectVideo={(v) => handleNavigate('watch', v)}
          />
        )}

        {activePage === 'articles' && (
          <BlogPage
            onSelectBook={handleSelectBook}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'bundles' && (
          <BundlesPage
            onSelectBook={handleSelectBook}
            onBuyBook={handleBuyBook}
          />
        )}

        {activePage === 'library' && (
          <DashboardPage
            purchasedBooks={purchasedBooks}
            onShowToast={showToast}
            setActivePage={(page, data) => handleNavigate(page, data)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={(page, data) => handleNavigate(page, data)} />
        )}

        {activePage === 'contact' && (
          <ContactPage onShowToast={showToast} />
        )}

        {activePage === 'admin-console' && (
          <AdminDashboardPage onShowToast={showToast} />
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
        onSelectVideo={(v) => handleNavigate('watch', v)}
        onSelectExam={(exId) => handleNavigate('exams', exId)}
      />

      {/* Cashfree & PayPal Payments Modal */}
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
