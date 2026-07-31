import React from 'react';
import { Copy, ShieldCheck } from 'lucide-react';

export default function RobotsTxtPage({ onShowToast }) {
  const robotsTxtContent = `# www.robotstxt.org/

User-agent: *
Allow: /
Allow: /books/
Allow: /category/
Allow: /blog/
Allow: /resources/
Allow: /about/

# Disallow private user library checkout parameters
Disallow: /dashboard?token=*
Disallow: /checkout/secure-download/*

# Sitemaps
Sitemap: https://pankajkumar.com/sitemap.xml
`;

  const copyRobots = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(robotsTxtContent);
      onShowToast('robots.txt copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
      <div className="space-y-2 border-b border-paper-300 dark:border-ink-800 pb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
            Crawler Control Directives
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-paper-100">
            robots.txt Architecture
          </h1>
        </div>

        <button
          onClick={copyRobots}
          className="px-4 py-2 bg-authorAccent text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy robots.txt</span>
        </button>
      </div>

      <div className="bg-paper-100 dark:bg-ink-900 p-6 rounded-2xl border border-paper-300 dark:border-ink-800 space-y-4">
        <p className="text-xs text-ink-600 dark:text-ink-400">
          This file instructs search engine crawlers (Googlebot, Bingbot, Applebot) to index all public book landing pages, blog articles, and category archives while protecting user checkout tokens.
        </p>

        <pre className="bg-ink-950 text-emerald-400 p-6 rounded-xl text-xs font-mono border border-ink-800 leading-relaxed">
          {robotsTxtContent}
        </pre>
      </div>
    </div>
  );
}
