import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ArrowUpDown, 
  AlertCircle, 
  FileText, 
  ChevronRight, 
  X,
  Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NOTICES_DATA, NoticeItem } from '../data/mockData';

export const NoticesPage: React.FC = () => {
  const { setSelectedNotice } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [urgentOnly, setUrgentOnly] = useState(false);

  const categories = ['All', 'Examination', 'Academic', 'Results', 'Administration', 'General'];

  const filteredNotices = useMemo(() => {
    let result = [...NOTICES_DATA];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(n => n.category === selectedCategory);
    }

    // Filter by Urgent toggle
    if (urgentOnly) {
      result = result.filter(n => n.urgent);
    }

    // Filter by Search Term
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(n => 
        n.title.toLowerCase().includes(q) ||
        n.description.toLowerCase().includes(q) ||
        n.refNo.toLowerCase().includes(q)
      );
    }

    // Sort order
    if (sortOrder === 'oldest') {
      result.reverse();
    }

    return result;
  }, [searchTerm, selectedCategory, sortOrder, urgentOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* 1. Header Zone */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            Official Circulars
          </span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Demo Content Only
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          KTU Notices
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Find examination, academic and administrative updates.
        </p>
      </div>

      {/* 2. Search & Filter Bar Controls */}
      <div className="space-y-4">
        
        {/* Search Input Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search notices by title, keyword, or reference number..."
              className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Order Selector */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 text-xs">
              <span className="text-slate-400 px-2 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sort:</span>
              </span>
              <button
                onClick={() => setSortOrder('newest')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  sortOrder === 'newest'
                    ? 'bg-blue-900 text-white dark:bg-blue-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortOrder('oldest')}
                className={`px-2.5 py-1 rounded font-medium transition-colors ${
                  sortOrder === 'oldest'
                    ? 'bg-blue-900 text-white dark:bg-blue-600'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Oldest
              </button>
            </div>

            {/* Urgent Filter Toggle */}
            <button
              onClick={() => setUrgentOnly(!urgentOnly)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                urgentOnly
                  ? 'bg-amber-100 dark:bg-amber-950/70 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Urgent Only</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 mr-1 shrink-0 font-medium">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white dark:bg-blue-600 shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-slate-400 text-xs ml-auto shrink-0 hidden sm:inline">
            Showing {filteredNotices.length} notices
          </span>
        </div>

      </div>

      {/* 3. Notice Cards List */}
      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <article
              key={notice.id}
              className={`p-6 rounded-xl bg-white dark:bg-slate-900 border transition-all duration-150 flex flex-col justify-between group hover:shadow-xs ${
                notice.urgent
                  ? 'border-amber-200 dark:border-amber-900/60 ring-1 ring-amber-200/50 dark:ring-amber-900/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-2.5">
                {/* Top metadata line with unboxed discipline */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">
                      {notice.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{notice.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {notice.refNo}
                    </span>
                  </div>

                  {notice.urgent && (
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Urgent Action Required</span>
                    </span>
                  )}
                </div>

                {/* Notice Title */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  {notice.title}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {notice.description}
                </p>
              </div>

              {/* Card Footer: Attachments hint & Action */}
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  {notice.attachments && notice.attachments.length > 0 ? (
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <FileText className="w-3.5 h-3.5 text-blue-600" />
                      <span>{notice.attachments.length} official attachment(s)</span>
                    </span>
                  ) : (
                    <span>General Circular</span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedNotice(notice)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 border border-blue-200 dark:border-blue-900 transition-colors inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">
              No notices match your current filters.
            </p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search keywords or resetting your active category filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setUrgentOnly(false);
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
