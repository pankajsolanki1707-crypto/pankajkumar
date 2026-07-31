import React, { useState, useEffect } from 'react';
import { Library, Download, FileText, Lock, CheckCircle2, Inbox, Mail, Trash2, ExternalLink, Sparkles, Clock } from 'lucide-react';

export default function DashboardPage({ purchasedBooks, onShowToast, setActivePage }) {
  const [activeTab, setActiveTab] = useState('library');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('pk_contact_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {}
    }
  }, [activeTab]);

  const handleTriggerDownload = (item) => {
    onShowToast(`Downloading PDF for "${item.bookTitle}"...`);
    const fileUrl = item.secureDownloadUrl || `/downloads/${item.bookId}.pdf`;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${item.bookId}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeleteMessage = (msgId) => {
    const updated = messages.filter(m => m.id !== msgId);
    setMessages(updated);
    localStorage.setItem('pk_contact_messages', JSON.stringify(updated));
    onShowToast('Message removed from local inbox.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 animate-fadeIn">
      
      {/* User Header Profile */}
      <div className="bg-paper-100 rounded-2xl p-6 sm:p-8 border border-paper-300 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-authorAccent text-white font-serif font-bold text-2xl flex items-center justify-center shadow-md">
            P
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-serif text-2xl font-bold text-ink-900">
                Pankaj Kumar Dashboard
              </h1>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Author & Reader Hub
              </span>
            </div>
            <p className="text-xs text-ink-500 font-mono mt-0.5">
              Manage Digital Library & Incoming Reader Messages
            </p>
          </div>
        </div>

        <button
          onClick={() => setActivePage('books')}
          className="px-5 py-2.5 bg-ink-900 text-paper-100 font-semibold text-xs rounded-xl hover:bg-authorAccent transition-all shadow-sm flex items-center space-x-1.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Browse Books Catalog</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-paper-300">
        <nav className="flex space-x-8 overflow-x-auto">
          {[
            { id: 'library', label: `My Purchased Books (${purchasedBooks.length})`, icon: Library },
            { id: 'inbox', label: `Incoming Messages (${messages.length})`, icon: Inbox },
            { id: 'invoices', label: 'Invoices & Receipts', icon: FileText },
            { id: 'downloads', label: 'PDF Download Security', icon: Download }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-semibold border-b-2 flex items-center space-x-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-authorAccent text-authorAccent font-bold'
                    : 'border-transparent text-ink-500 hover:text-ink-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content 1: My Purchased Books */}
      {activeTab === 'library' && (
        <div>
          {purchasedBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {purchasedBooks.map((item, idx) => (
                <div key={idx} className="bg-paper-100 rounded-2xl border border-paper-300 p-6 shadow-subtle space-y-4 flex flex-col justify-between">
                  <div className="flex items-start space-x-4">
                    <img src={item.coverImage} alt={item.bookTitle} className="w-16 h-24 object-cover rounded shadow-md flex-shrink-0" />
                    <div className="space-y-1 min-w-0">
                      <span className="px-2 py-0.5 bg-authorAccent/10 text-authorAccent text-[10px] uppercase font-bold rounded">
                        PDF Edition
                      </span>
                      <h3 className="font-serif font-bold text-base text-ink-900 truncate">
                        {item.bookTitle}
                      </h3>
                      <p className="text-xs text-ink-500">Purchased on {item.purchaseDate}</p>
                      <p className="text-xs text-emerald-600 font-medium flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>PDF Ready</span>
                      </p>
                    </div>
                  </div>

                  {/* Secure Temporary Link Info */}
                  <div className="bg-paper-200/60 p-3 rounded-xl border border-paper-300 text-xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-ink-700 flex items-center space-x-1">
                        <Lock className="w-3 h-3 text-authorAccent" />
                        <span>PDF Location</span>
                      </span>
                      <span className="text-[10px] text-amber-600 font-mono">/downloads/{item.bookId}.pdf</span>
                    </div>
                  </div>

                  {/* Download Action Button */}
                  <button
                    onClick={() => handleTriggerDownload(item)}
                    className="w-full py-3 bg-authorAccent hover:bg-authorAccent-hover text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF File</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-paper-100 rounded-2xl border border-paper-300 space-y-4 max-w-lg mx-auto">
              <Library className="w-12 h-12 text-ink-400 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-ink-900">
                Your Library is Empty
              </h3>
              <p className="text-sm text-ink-600">
                When you purchase PDF books from Pankaj Kumar's platform, your orders and instant download files appear here automatically.
              </p>
              <button
                onClick={() => setActivePage('books')}
                className="px-6 py-3 bg-authorAccent text-white font-semibold text-xs rounded-xl shadow-sm"
              >
                Browse Books Catalog
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tab Content 2: Admin / Reader Inbox */}
      {activeTab === 'inbox' && (
        <div className="bg-paper-100 rounded-2xl border border-paper-300 overflow-hidden shadow-subtle space-y-6 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-200 pb-4">
            <div>
              <h3 className="font-serif font-bold text-xl text-ink-900">
                Author Inbox & Reader Messages
              </h3>
              <p className="text-xs text-ink-600">
                All notes and inquiries submitted via the Contact form are recorded here.
              </p>
            </div>
            <span className="px-3 py-1 bg-authorAccent/10 text-authorAccent text-xs font-mono font-bold rounded-full">
              {messages.length} Messages Stored
            </span>
          </div>

          {messages.length > 0 ? (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-paper-200/60 p-6 rounded-2xl border border-paper-300 space-y-3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-paper-300 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 bg-ink-900 text-paper-100 text-[10px] uppercase font-mono font-bold rounded">
                        {msg.formType || 'GENERAL'}
                      </span>
                      <h4 className="font-serif font-bold text-base text-ink-900">
                        {msg.subject}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-ink-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{msg.submittedAt}</span>
                    </div>
                  </div>

                  <div className="text-xs text-ink-700 space-y-1">
                    <p><strong>From:</strong> {msg.name} (<a href={`mailto:${msg.email}`} className="text-authorAccent underline">{msg.email}</a>)</p>
                  </div>

                  <div className="bg-paper-100 p-4 rounded-xl border border-paper-300 text-xs text-ink-900 whitespace-pre-line leading-relaxed font-sans">
                    {msg.message}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={`mailto:${msg.email}?subject=${encodeURIComponent(`Re: ${msg.subject}`)}`}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-authorAccent text-white text-xs font-bold rounded-lg shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Reply to {msg.name}</span>
                    </a>

                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-medium flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-ink-500 text-sm space-y-3">
              <Inbox className="w-10 h-10 text-ink-400 mx-auto" />
              <p className="font-serif text-lg font-bold text-ink-900">No Messages Yet</p>
              <p className="text-xs text-ink-600 max-w-sm mx-auto">
                When visitors submit the form on the Contact page, their message will appear here for you to read and reply!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab Content 3: Invoices */}
      {activeTab === 'invoices' && (
        <div className="bg-paper-100 rounded-2xl border border-paper-300 overflow-hidden shadow-subtle">
          <div className="p-6 border-b border-paper-300 font-serif font-bold text-lg text-ink-900">
            Order Invoices & Tax Receipts
          </div>
          {purchasedBooks.length > 0 ? (
            <div className="divide-y divide-paper-200">
              {purchasedBooks.map((inv, idx) => (
                <div key={idx} className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                  <div>
                    <span className="font-mono text-xs text-ink-500 font-bold">{inv.orderId}</span>
                    <h4 className="font-serif font-bold text-ink-900">{inv.bookTitle} (PDF Edition)</h4>
                    <span className="text-xs text-ink-500">Purchased by {inv.customerName} on {inv.purchaseDate}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-authorAccent text-base">₹{inv.pricePaid}</span>
                    <button
                      onClick={() => onShowToast(`Printing Invoice for ${inv.orderId}...`)}
                      className="px-3 py-1.5 border border-paper-300 rounded-lg text-xs font-semibold hover:bg-paper-200"
                    >
                      Print Tax Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-ink-500 text-sm">
              No invoice records yet. Purchase a title to generate tax receipts.
            </div>
          )}
        </div>
      )}

      {/* Tab Content 4: PDF Security */}
      {activeTab === 'downloads' && (
        <div className="bg-paper-100 rounded-2xl border border-paper-300 p-6 space-y-4 shadow-subtle">
          <h3 className="font-serif font-bold text-lg text-ink-900">
            PDF File Storage Location
          </h3>
          <p className="text-xs text-ink-600">
            All PDF files are served directly from your local project directory:
          </p>
          <div className="bg-paper-200 p-4 rounded-xl text-xs font-mono text-ink-700 space-y-2">
            <div className="font-bold text-authorAccent">
              Local Directory Path:
            </div>
            <div>
              d:\ptc_creo\AG_Pk_W\public\downloads\
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
