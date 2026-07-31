import React, { useState } from 'react';
import { BOOKS } from '../data/books';
import { BLOG_POSTS, FREE_RESOURCES } from '../data/supplementary';
import { CATEGORIES } from '../data/books';
import { FileCode, Globe, Check, Copy } from 'lucide-react';

export default function SitemapPage({ onNavigate, onShowToast }) {
  const [viewMode, setViewMode] = useState('visual'); // 'visual' | 'xml'

  // Generate dynamic XML sitemap content
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Core Static Pages -->
  <url>
    <loc>https://pankajkumar.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pankajkumar.com/books</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://pankajkumar.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pankajkumar.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pankajkumar.com/resources</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Category Archives -->
  ${CATEGORIES.slice(1).map(cat => `
  <url>
    <loc>https://pankajkumar.com/category/${cat.toLowerCase().replace(/\s+/g, '-')}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

  <!-- Book Landing Pages (Pillars) -->
  ${BOOKS.map(b => `
  <url>
    <loc>https://pankajkumar.com/books/${b.id}</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${b.coverImage}</image:loc>
      <image:title>${b.title}</image:title>
    </image:image>
  </url>`).join('')}

  <!-- Supporting Articles -->
  ${BLOG_POSTS.map(p => `
  <url>
    <loc>https://pankajkumar.com/blog/${p.id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

</urlset>`;

  const copyXml = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(xmlString);
      onShowToast('Sitemap XML copied to clipboard!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-fadeIn">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-paper-300 dark:border-ink-800 pb-6">
        <div>
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
            Search Engine Optimization
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-100">
            XML & Visual Site Architecture Map
          </h1>
        </div>

        <div className="flex items-center space-x-2 bg-paper-200 dark:bg-ink-800 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('visual')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'visual' ? 'bg-paper-100 dark:bg-ink-900 text-ink-900 dark:text-paper-100 shadow-xs' : 'text-ink-500'
            }`}
          >
            Visual Tree
          </button>
          <button
            onClick={() => setViewMode('xml')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'xml' ? 'bg-paper-100 dark:bg-ink-900 text-ink-900 dark:text-paper-100 shadow-xs' : 'text-ink-500'
            }`}
          >
            XML Source Code
          </button>
        </div>
      </div>

      {viewMode === 'visual' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Books Hierarchy */}
          <div className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-authorAccent" />
              <span>Book Landing Pages ({BOOKS.length})</span>
            </h3>
            <ul className="space-y-2 text-xs text-ink-700 dark:text-ink-300 font-mono">
              {BOOKS.map(b => (
                <li key={b.id} className="hover:text-authorAccent cursor-pointer" onClick={() => onNavigate('book-details', b)}>
                  /books/{b.id}
                </li>
              ))}
            </ul>
          </div>

          {/* Category Archives Hierarchy */}
          <div className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100 flex items-center space-x-2">
              <FileCode className="w-5 h-5 text-authorAccent" />
              <span>Category Hubs ({CATEGORIES.length - 1})</span>
            </h3>
            <ul className="space-y-2 text-xs text-ink-700 dark:text-ink-300 font-mono">
              {CATEGORIES.slice(1).map(cat => (
                <li key={cat} className="hover:text-authorAccent cursor-pointer" onClick={() => onNavigate('category-archive', cat)}>
                  /category/{cat.toLowerCase().replace(/\s+/g, '-')}
                </li>
              ))}
            </ul>
          </div>

          {/* Blog & Resources */}
          <div className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-4">
            <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-100 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-authorAccent" />
              <span>Blog & Free Downloads</span>
            </h3>
            <ul className="space-y-2 text-xs text-ink-700 dark:text-ink-300 font-mono">
              {BLOG_POSTS.map(p => (
                <li key={p.id}>/blog/{p.id}</li>
              ))}
              {FREE_RESOURCES.map(r => (
                <li key={r.id}>/resources#{r.id}</li>
              ))}
            </ul>
          </div>

        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-ink-500">sitemap.xml (Google Search Console Ready)</span>
            <button
              onClick={copyXml}
              className="px-4 py-2 bg-authorAccent text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy XML Source</span>
            </button>
          </div>
          <pre className="bg-ink-950 text-emerald-400 p-6 rounded-2xl text-xs font-mono overflow-x-auto border border-ink-800 leading-relaxed">
            {xmlString}
          </pre>
        </div>
      )}

    </div>
  );
}
