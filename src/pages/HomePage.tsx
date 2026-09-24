import React from 'react';
import { 
  Award, 
  Calendar, 
  FileText, 
  Clock, 
  Download, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  AlertCircle, 
  ChevronRight, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Smartphone,
  Search,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NOTICES_DATA, SEMESTER_RESULTS, ACADEMIC_CALENDAR_EVENTS } from '../data/mockData';

export const HomePage: React.FC = () => {
  const { setCurrentPage, setSelectedNotice, setIsSearchOpen, setIsResultModalOpen, setActiveResultSemester } = useApp();

  const quickActions = [
    {
      title: 'Results',
      description: 'Check semester results and academic updates.',
      icon: Award,
      action: () => setCurrentPage('results'),
      highlight: 'S4 Results Published',
    },
    {
      title: 'Examinations',
      description: 'Timetables, notifications and exam-related information.',
      icon: FileText,
      action: () => setCurrentPage('examinations'),
      highlight: 'Revised Timetables',
    },
    {
      title: 'Timetable',
      description: 'Find examination and academic schedules.',
      icon: Clock,
      action: () => setCurrentPage('examinations'),
      highlight: 'Odd Sem 2026',
    },
    {
      title: 'Academic Calendar',
      description: 'Important academic dates and events.',
      icon: Calendar,
      action: () => setCurrentPage('academics'),
      highlight: '2026-27 Approved',
    },
    {
      title: 'Regulations',
      description: 'Access regulations, syllabus and academic documents.',
      icon: BookOpen,
      action: () => setCurrentPage('academics'),
      highlight: '2019 & 2024 Scheme',
    },
    {
      title: 'Downloads',
      description: 'Find frequently requested documents.',
      icon: Download,
      action: () => setCurrentPage('academics'),
      highlight: 'Forms & Templates',
    },
  ];

  // Latest 4 notices for the homepage
  const recentNotices = NOTICES_DATA.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* 1. Compact Hero Section */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-transparent dark:from-slate-900/60 dark:via-slate-950/20 dark:to-transparent border-b border-slate-200/70 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Student Redesign Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/80 text-blue-900 dark:text-blue-300 text-xs font-semibold tracking-wide border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              <span>Independent Student UX Redesign Concept</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] text-balance">
              Everything you need from KTU, in one place.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Find academic updates, examination information, results, notices and important resources without digging through multiple pages.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center gap-3.5 flex-wrap">
              <button
                onClick={() => setCurrentPage('academics')}
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg shadow-sm transition-all hover:shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Explore Student Resources</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('notices')}
                className="px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shadow-2xs"
              >
                <span>View Latest Notices</span>
              </button>
            </div>

            {/* Quick Live Search Trigger Strip */}
            <div className="pt-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full sm:max-w-md flex items-center justify-between px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-600 transition-colors text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Looking for S4 results, timetable, syllabus?</span>
                </div>
                <kbd className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  Ctrl + K
                </kbd>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Quick Actions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Quick Actions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Direct access to frequent daily university student tasks.
            </p>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Zero multi-tab searches
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <button
                key={idx}
                onClick={action.action}
                className="group relative text-left p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-2xs hover:shadow-md hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 border border-blue-100 dark:border-blue-900/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {action.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                    {action.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {action.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 flex items-center text-xs font-semibold text-blue-900 dark:text-blue-400 group-hover:gap-1.5 transition-all">
                  <span>Open {action.title}</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Important Updates Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Important Updates
              </h2>
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/60">
                Demo Content
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Real-time circulars, revaluations, and academic alerts for enrolled students.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('notices')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 dark:text-blue-400 hover:text-blue-800 hover:underline transition-all"
          >
            <span>View all notices</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentNotices.map((notice) => (
            <div
              key={notice.id}
              className={`p-6 rounded-xl bg-white dark:bg-slate-900 border transition-all duration-200 flex flex-col justify-between ${
                notice.urgent 
                  ? 'border-amber-300 dark:border-amber-900/70 shadow-xs ring-1 ring-amber-300/30 dark:ring-amber-900/20' 
                  : 'border-slate-200 dark:border-slate-800/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">
                      {notice.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{notice.date}</span>
                  </div>
                  {notice.urgent && (
                    <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Urgent</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {notice.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {notice.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {notice.refNo}
                </span>
                <button
                  onClick={() => setSelectedNotice(notice)}
                  className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>View details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "Designed around student tasks" (Why this design? Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white dark:bg-slate-900/90 border border-slate-800 shadow-md">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Redesign Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Designed around student tasks
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              University portals often prioritize administrative organization over daily student workflows. This redesign reorganizes information architecture by what students need to accomplish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-100">Find faster</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Important resources like results, exam notifications, and timetables are surfaced immediately on the front page rather than nested behind administrative trees.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-100">Understand sooner</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Information is grouped by clear user objectives (Examinations, Academics, Results) with structured filters and clean typography rather than unstructured notice walls.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-100">Work on any screen</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Over 70% of students check notices and exam updates from mobile phones. The layout provides dedicated touch affordances, readable cards, and zero horizontal scrolling.
              </p>
            </div>
          </div>

          {/* Problem vs Solution breakdown */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
            <div>
              <strong className="block text-slate-200">5 Distinct Pages</strong>
              Reorganized architecture
            </div>
            <div>
              <strong className="block text-slate-200">Instant Search</strong>
              Across all categories
            </div>
            <div>
              <strong className="block text-slate-200">Student Portal</strong>
              Dedicated personal view
            </div>
            <div>
              <strong className="block text-slate-200">Zero Dead Clicks</strong>
              Functional interactions
            </div>
          </div>
        </div>
      </section>

      {/* 5. Fast Academic Calendar Milestone Peek */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                Upcoming Academic Dates & Milestones
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Key dates from the approved 2026-27 Odd Semester Calendar
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('academics')}
              className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Full Academic Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ACADEMIC_CALENDAR_EVENTS.slice(2, 5).map((evt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-900 dark:text-blue-400 font-mono">
                    {evt.date}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {evt.type}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {evt.event}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
