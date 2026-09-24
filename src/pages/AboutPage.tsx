import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Search, 
  FileText, 
  Award, 
  ExternalLink,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* 1. Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            About KTU & Project Rationale
          </span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Student UX Case Study
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          About the University & Redesign Concept
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Institutional background and the user-experience principles behind this student concept.
        </p>
      </div>

      {/* 2. Mandatory Independent Redesign Disclaimer Box */}
      <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-900 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-base">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Independent Redesign Concept</span>
        </div>
        <p className="text-sm text-amber-950 dark:text-amber-200/90 leading-relaxed font-medium">
          “This interface is a student-created redesign concept and is not affiliated with or endorsed by KTU.”
        </p>
        <p className="text-xs text-amber-800 dark:text-amber-300/80 leading-relaxed">
          Developed as a submission for the <strong>“Website Redesign”</strong> student design challenge (<span className="font-mono font-semibold">#ge-website-redesign</span>). All sample notices, exam records, grades, and student dashboards contain mock demonstration content created exclusively to illustrate the proposed user interface architecture.
        </p>
      </div>

      {/* 3. Safe Institutional Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
            APJ Abdul Kalam Technological University
          </h2>
          <p>
            APJ Abdul Kalam Technological University (KTU), established by the Government of Kerala through the APJ Abdul Kalam Technological University Act, is the state technological university headquartered in Thiruvananthapuram, Kerala.
          </p>
          <p>
            The university was established in 2014 to coordinate and regulate engineering and technological education across colleges in Kerala, formulate contemporary curricula, foster research programs, and administer centralized degree examinations.
          </p>
          
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <strong className="block text-slate-900 dark:text-white text-sm">Headquarters</strong>
              <span className="text-slate-500">CET Campus, Thiruvananthapuram, Kerala – 695016</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <strong className="block text-slate-900 dark:text-white text-sm">Statutory Role</strong>
              <span className="text-slate-500">State Technological University for Engineering & Applied Sciences</span>
            </div>
          </div>
        </div>

        {/* Vision & Academic Principles */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Academic Focus
          </h3>

          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span>Standardization of engineering syllabi and outcome-based education (OBE) in Kerala.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span>Interdisciplinary Minor & Honors programs for undergraduate students.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              <span>Student Activity Points (SAP) to promote sports, NSS, community service, and technical innovation.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 4. UX Problems & Redesign Solutions */}
      <section className="space-y-6 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            UX Audit & Solution Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
            How This Concept Solves Real Student Problems
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            A direct mapping between common complaints with traditional university web portals and the specific UI patterns implemented here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Problem 1 */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">Problem 1</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Important student actions are difficult to discover
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Students usually open the university site for quick tasks (results, timetables, revaluation). Traditional sites bury these links in deep submenus.
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <strong>Redesign Solution:</strong> Prominent Quick Action cards and sticky global header.
            </div>
          </div>

          {/* Problem 2 */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">Problem 2</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Information feels scattered across many sections
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Curriculum regulations, timetables, and exam ordinances often exist on disjointed sub-domains or fragmented PDF directories.
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <strong>Redesign Solution:</strong> Segmented Academics & Examinations hub pages with tabbed navigation.
            </div>
          </div>

          {/* Problem 3 */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">Problem 3</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Notices compete for attention
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Hundreds of PDF circulars are listed chronologically without categorization, forcing students to read every title to spot relevant exams.
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <strong>Redesign Solution:</strong> Category filtering (Exam, Academic, Results, Admin) and instant search.
            </div>
          </div>

          {/* Problem 4 */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">Problem 4</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Frequently used resources should be accessible quickly
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Forms for transcripts, name corrections, and revaluations require extensive hunting through circular archives.
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <strong>Redesign Solution:</strong> Dedicated Downloads repository with file sizes and 1-click download affordances.
            </div>
          </div>

          {/* Problem 5 */}
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">Problem 5</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Mobile users need a simpler navigation experience
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Most students check university alerts on smartphones, where bloated institutional layouts result in excessive pinching and zooming.
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <strong>Redesign Solution:</strong> Mobile-first drawer navigation, touch targets ≥ 44px, and clean card stacks.
            </div>
          </div>

          {/* Solution 6 */}
          <div className="p-6 rounded-xl bg-blue-900 text-white shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300">UX Result</span>
              <h3 className="text-base font-bold text-white">
                Student-Centric University Design
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                A modern digital front door that reduces stress, respects student attention, and elevates institutional credibility.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('student')}
              className="mt-2 py-2 px-3 bg-white text-blue-950 font-bold rounded-lg text-xs hover:bg-slate-100 transition-colors"
            >
              Explore Student Portal Demo →
            </button>
          </div>

        </div>
      </section>

      {/* 5. Challenge Hashtag Footer note */}
      <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
        <p className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
          #ge-website-redesign · Portfolio Submission
        </p>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Built with React, Vite, Tailwind CSS, and Lucide icons. Designed with zero-pill metadata discipline, WCAG AA compliance, and responsive layout integrity.
        </p>
      </div>

    </div>
  );
};
