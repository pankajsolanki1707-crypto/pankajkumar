import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Globe, Clock, Copy } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const targetEmail = "pankajsolanky@outlook.com";

  const handleDirectEmailSubmit = (e) => {
    e.preventDefault();
    
    // Save to local storage
    const newMessage = {
      id: `MSG-${Date.now()}`,
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toLocaleString()
    };

    const saved = localStorage.getItem('pk_contact_messages');
    const existingMessages = saved ? JSON.parse(saved) : [];
    localStorage.setItem('pk_contact_messages', JSON.stringify([newMessage, ...existingMessages]));

    onShowToast('Opening email client with pre-filled message...');

    // Build mailto URL
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
  };

  const copyEmailToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(targetEmail);
      onShowToast(`Copied ${targetEmail} to clipboard!`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Direct Communication
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
          Contact Pankaj Kumar
        </h1>
        <p className="text-base text-ink-600 leading-relaxed">
          For reader letters, keynote speaking inquiries, media interviews, or bulk book purchases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Mail Form */}
        <div className="lg:col-span-7 bg-paper-100 p-8 rounded-2xl border border-paper-300 shadow-subtle space-y-6">
          
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-ink-900">
              Send Direct Message
            </h3>
            <p className="text-xs text-ink-600">
              Fills your email client automatically with zero third-party tracking.
            </p>
          </div>

          <form onSubmit={handleDirectEmailSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-ink-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-ink-700 mb-1">Your Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-ink-700 mb-1">Subject *</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What is your note regarding?"
                className="w-full px-4 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-ink-700 mb-1">Your Message *</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 bg-paper-50 border border-paper-300 rounded-xl text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-authorAccent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-authorAccent hover:bg-authorAccent-hover text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message via Email Client</span>
            </button>

          </form>
        </div>

        {/* Right Column: Direct Info Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-paper-100 p-6 rounded-2xl border border-paper-300 space-y-4">
            <h3 className="font-serif font-bold text-xl text-ink-900">
              Direct Contact Channel
            </h3>
            
            <div className="p-4 bg-paper-200/70 rounded-xl border border-paper-300 flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0">
                <Mail className="w-5 h-5 text-authorAccent flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm font-semibold text-ink-900 truncate">{targetEmail}</span>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="p-2 hover:bg-paper-300 rounded-lg text-ink-600 transition-colors flex-shrink-0"
                title="Copy Email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-ink-500 flex items-center space-x-2 pt-2 border-t border-paper-200">
              <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Pankaj reads reader notes daily. Media inquiries replied within 48h.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
