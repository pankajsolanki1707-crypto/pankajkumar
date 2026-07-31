import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items, onNavigate }) {
  // Construct JSON-LD BreadcrumbList Schema
  const schemaItems = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pankajkumar.com/" },
    ...items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 2,
      "name": item.label,
      "item": item.url ? `https://pankajkumar.com${item.url}` : undefined
    }))
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };

  return (
    <>
      {/* Schema.org Breadcrumb Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-ink-500 dark:text-ink-400 font-sans py-2">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-authorAccent flex items-center space-x-1"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-ink-400" />
            {item.page ? (
              <button
                onClick={() => onNavigate(item.page, item.data)}
                className={`hover:text-authorAccent ${
                  idx === items.length - 1 ? 'font-semibold text-ink-900 dark:text-paper-100' : ''
                }`}
              >
                {item.label}
              </button>
            ) : (
              <span className="font-semibold text-ink-900 dark:text-paper-100 truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
