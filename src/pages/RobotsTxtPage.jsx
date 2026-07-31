import React from 'react';
import { Copy, ShieldCheck } from 'lucide-react';

export default function RobotsTxtPage({ onShowToast }) {
  const robotsTxtContent = `# www.robotstxt.org/

User-agent: *
Allow: /
Allow: /books/
Allow: /category/
Allow: /blog/
Allow: /about/

# Disallow private admin routes and backend endpoints
Disallow: /admin/
Disallow: /admin/*
Disallow: /api/
Disallow: /dashboard?token=*
Disallow: /checkout/secure-download/*

# Sitemaps
Sitemap: https://pankajkumar.com/sitemap.xml
Sitemap: https://pankajkumar.com/image-sitemap.xml
`;

  const copyRobots = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(robotsTxtContent);
      onShowToast('robots.txt copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
      <div className="space-y-2 border-b border-paper-300 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
            Crawler Control Directives
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
            robots.txt Architecture
          </h1>
        </div>

        <button
          onClick={copyRobots}
          className="px-4 py-2 bg-authorAccent hover:bg-authorAccent-hover text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 shadow-sm"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy robots.txt</span>
        </button>
      </div>

      <div className="bg-paper-100 p-6 rounded-2xl border border-paper-300 space-y-4">
        <p className="text-xs text-ink-600">
          This file instructs search engine crawlers (Googlebot, Bingbot, Applebot) to index all public book landing pages, blog articles, and category archives while blocking access to administrative interfaces and backend endpoints.
        </p>

        <pre className="bg-paper-200 text-ink-900 p-6 rounded-xl text-xs font-mono border border-paper-300 leading-relaxed">
          {robotsTxtContent}
        </pre>
      </div>
    </div>
  );
}
