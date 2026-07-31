import React from 'react';
import { Download, FileText, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { FREE_RESOURCES } from '../data/supplementary';

export default function FreeResourcesPage({ onShowToast, onOpenSample }) {
  const handleDownloadResource = (resource) => {
    onShowToast(`Downloading "${resource.title}"... (${resource.fileSize})`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="max-w-2xl space-y-3">
        <span className="text-xs font-sans uppercase font-bold text-authorAccent tracking-wider block">
          Open Access Knowledge
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-900 dark:text-paper-100">
          Free Resources & Worksheets
        </h1>
        <p className="text-base text-ink-600 dark:text-ink-400">
          Download free book chapter previews, problem deconstruction matrices, habit trackers, and AI integration checklists. No credit card required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FREE_RESOURCES.map((res) => (
          <div key={res.id} className="bg-paper-100 dark:bg-ink-900 p-8 rounded-2xl border border-paper-300 dark:border-ink-800 shadow-subtle flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-authorAccent/10 text-authorAccent font-semibold text-xs rounded-md">
                  {res.category}
                </span>
                <span className="text-xs text-ink-400 font-mono">
                  {res.format} • {res.fileSize}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-paper-100">
                {res.title}
              </h3>
              <p className="text-sm text-ink-600 dark:text-ink-400">
                {res.description}
              </p>
            </div>

            <div className="pt-4 border-t border-paper-200 dark:border-ink-800 flex items-center justify-between">
              <span className="text-xs text-ink-500 font-medium">{res.downloads} downloads</span>
              <button
                onClick={() => handleDownloadResource(res)}
                className="px-5 py-2.5 bg-ink-900 dark:bg-paper-100 text-paper-100 dark:text-ink-900 text-xs font-semibold rounded-xl hover:bg-authorAccent dark:hover:bg-authorAccent-dark dark:hover:text-white transition-all flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Free</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
