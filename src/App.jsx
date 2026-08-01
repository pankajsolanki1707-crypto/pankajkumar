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

  const handleNavigate = (page, data) => {
    if (page === 'book-details' && data) {
      setSelectedBook(data);
    }
    if (page === 'category-archive' && data) {
      setSelectedCategory(data);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setActivePage('book-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            onBack={() => setActivePage('books')}
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
            onBack={() => setActivePage('books')}
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
        onSelectBlog={() => setActivePage('blog')}
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
