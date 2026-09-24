import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, FileText, Award, Calendar, BookOpen, Download, ChevronRight, CornerDownLeft } from 'lucide-react';
import { useApp, PageRoute } from '../context/AppContext';
import { NOTICES_DATA, SEMESTER_RESULTS, REGULATIONS_LIST, FREQUENT_DOWNLOADS, SYLLABUS_BRANCHES } from '../data/mockData';

interface SearchResultItem {
  id: string;
  type: 'Notice' | 'Result' | 'Regulation' | 'Download' | 'Syllabus' | 'Page';
  title: string;
  subtitle: string;
  route: PageRoute;
  badge: string;
  action?: () => void;
}

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setCurrentPage, setSelectedNotice, setIsResultModalOpen, setActiveResultSemester } = useApp();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'notices' | 'results' | 'academics'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isSearchOpen]);

  // Aggregate searchable items
  const allItems: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // Core Pages
    items.push({ id: 'p-results', type: 'Page', title: 'Semester Results Portal', subtitle: 'View S1-S8 results and revaluation links', route: 'results', badge: 'Page' });
    items.push({ id: 'p-exams', type: 'Page', title: 'Examinations & Timetables', subtitle: 'Timetables, notifications and exam guidelines', route: 'examinations', badge: 'Page' });
    items.push({ id: 'p-notices', type: 'Page', title: 'University Notices & Circulars', subtitle: 'Search and filter all official updates', route: 'notices', badge: 'Page' });
    items.push({ id: 'p-academics', type: 'Page', title: 'Academic Calendar & Regulations', subtitle: 'Curriculum, ordinances, affiliated colleges', route: 'academics', badge: 'Page' });
    items.push({ id: 'p-student', type: 'Page', title: 'Student Portal Dashboard (Demo)', subtitle: 'Personal academic overview and quick actions', route: 'student', badge: 'Portal' });
    items.push({ id: 'p-about', type: 'Page', title: 'About KTU & Redesign Concept', subtitle: 'University background and redesign rationale', route: 'about', badge: 'About' });

    // Notices
    NOTICES_DATA.forEach(n => {
      items.push({
        id: `not-${n.id}`,
        type: 'Notice',
        title: n.title,
        subtitle: `${n.category} · ${n.date} · Ref: ${n.refNo}`,
        route: 'notices',
        badge: n.category,
        action: () => {
          setSelectedNotice(n);
        }
      });
    });

    // Results
    SEMESTER_RESULTS.forEach(r => {
      items.push({
        id: `res-${r.semester}`,
        type: 'Result',
        title: `${r.semester} Results - ${r.programme}`,
        subtitle: `Exam: ${r.examMonth} · Status: ${r.status} (${r.publishDate})`,
        route: 'results',
        badge: 'Result',
        action: () => {
          setActiveResultSemester(r.semester);
          setIsResultModalOpen(true);
        }
      });
    });

    // Regulations
    REGULATIONS_LIST.forEach((reg, idx) => {
      items.push({
        id: `reg-${idx}`,
        type: 'Regulation',
        title: reg.title,
        subtitle: `${reg.subtitle} · ${reg.pages}`,
        route: 'academics',
        badge: 'Regulations'
      });
    });

    // Syllabus
    SYLLABUS_BRANCHES.forEach(b => {
      items.push({
        id: `syl-${b.id}`,
        type: 'Syllabus',
        title: `${b.name} (${b.code}) Syllabus`,
        subtitle: b.description,
        route: 'academics',
        badge: 'Syllabus'
      });
    });

    // Downloads
    FREQUENT_DOWNLOADS.forEach((d, idx) => {
      items.push({
        id: `dl-${idx}`,
        type: 'Download',
        title: d.title,
        subtitle: `${d.category} · ${d.format} (${d.size})`,
        route: 'academics',
        badge: 'Form'
      });
    });

    return items;
  }, [setSelectedNotice, setActiveResultSemester, setIsResultModalOpen]);

  // Filter items based on query and filter tab
  const filteredResults = useMemo(() => {
    let list = allItems;
    if (activeFilter === 'notices') {
      list = list.filter(i => i.type === 'Notice');
    } else if (activeFilter === 'results') {
      list = list.filter(i => i.type === 'Result');
    } else if (activeFilter === 'academics') {
      list = list.filter(i => i.type === 'Regulation' || i.type === 'Syllabus' || i.type === 'Download');
    }

    if (!query.trim()) {
      return list.slice(0, 7); // Default suggestions
    }

    const q = query.toLowerCase();
    return list.filter(i => 
      i.title.toLowerCase().includes(q) || 
      i.subtitle.toLowerCase().includes(q) ||
      i.badge.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [allItems, query, activeFilter]);

  const handleSelect = (item: SearchResultItem) => {
    setIsSearchOpen(false);
    if (item.action) {
      item.action();
    }
    setCurrentPage(item.route);
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 sm:pt-20">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-label="Global Search"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notices, semester results, timetables, syllabus..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2 py-1 text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs overflow-x-auto">
          <span className="text-slate-400 mr-1 shrink-0">Filter:</span>
          {(['all', 'notices', 'results', 'academics'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-2.5 py-1 rounded-md capitalize transition-colors shrink-0 ${
                activeFilter === tab
                  ? 'bg-blue-900 text-white dark:bg-blue-600 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'all' ? 'All Resources' : tab}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 rounded-lg hover:bg-blue-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 group focus:outline-none focus:bg-blue-50 dark:focus:bg-slate-800"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-900 dark:text-blue-400">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-950 dark:group-hover:text-white truncate">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <div className="shrink-0 flex items-center text-slate-400 group-hover:text-blue-700 dark:group-hover:text-blue-400 mt-1">
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ))
          ) : (
            <div className="p-8 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                No results found for “{query}”
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Try searching for common terms like “S4 results”, “timetable”, “revaluation”, “calendar”, or “syllabus”.
              </p>
              <div className="pt-3 flex justify-center gap-2 flex-wrap">
                {['S4', 'Timetable', 'Regulations', 'Academic Calendar'].map(keyword => (
                  <button
                    key={keyword}
                    onClick={() => setQuery(keyword)}
                    className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded font-mono text-[10px]">Enter</kbd> to select</span>
            <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded font-mono text-[10px]">Esc</kbd> to close</span>
          </div>
          <span className="font-medium text-slate-400">Demo KTU Search Index</span>
        </div>
      </div>
    </div>
  );
};
