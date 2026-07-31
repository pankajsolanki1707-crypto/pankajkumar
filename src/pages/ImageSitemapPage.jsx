import React from 'react';
import { ArrowLeft, Image as ImageIcon, Copy, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BOOKS } from '../data/books';

export default function ImageSitemapPage({ onShowToast, onNavigate }) {
  const domain = "https://pankajkumar.com";

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${BOOKS.map(b => `  <url>
    <loc>${domain}/books/${b.id}</loc>
    <image:image>
      <image:loc>${domain}${b.coverImage}</image:loc>
      <image:title>${b.title} - Official Book Cover</image:title>
      <image:caption>${b.subtitle}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  const copyXml = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(xmlContent);
      onShowToast('Image Sitemap XML copied to clipboard!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-300 pb-6">
        <div>
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
            SEO Indexing & Metadata
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 flex items-center space-x-2">
            <ImageIcon className="w-8 h-8 text-authorAccent" />
            <span>Image Sitemap Index (XML)</span>
          </h1>
          <p className="text-xs text-ink-500 font-mono mt-1">
            Google Image Search Indexing for Book Covers & Media Assets
          </p>
        </div>

        <button
          onClick={copyXml}
          className="px-4 py-2 bg-authorAccent hover:bg-authorAccent-hover text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center space-x-1.5"
        >
          <Copy className="w-4 h-4" />
          <span>Copy Image Sitemap XML</span>
        </button>
      </div>

      {/* Grid Preview of Indexed Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {BOOKS.map((b) => (
          <div key={b.id} className="bg-paper-100 p-3 rounded-xl border border-paper-300 space-y-2 text-center">
            <img src={b.coverImage} alt={b.title} className="w-full h-32 object-cover rounded shadow-sm" />
            <p className="font-serif font-bold text-xs text-ink-900 truncate">{b.title}</p>
            <span className="text-[10px] text-emerald-700 font-mono block">Indexed</span>
          </div>
        ))}
      </div>

      {/* XML Source Viewer */}
      <div className="bg-paper-200/80 p-6 rounded-2xl border border-paper-300 space-y-3">
        <h3 className="font-serif font-bold text-base text-ink-900">Raw XML Output (`image-sitemap.xml`)</h3>
        <pre className="bg-paper-50 p-4 rounded-xl text-xs font-mono text-ink-800 overflow-x-auto border border-paper-300 max-h-80">
          {xmlContent}
        </pre>
      </div>

    </div>
  );
}
