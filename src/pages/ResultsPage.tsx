import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  Calendar, 
  AlertCircle, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ArrowRight,
  HelpCircle,
  Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SEMESTER_RESULTS, SemesterResult } from '../data/mockData';

export const ResultsPage: React.FC = () => {
  const { setIsResultModalOpen, setActiveResultSemester, showToast } = useApp();
  const [selectedProgramme, setSelectedProgramme] = useState<'All' | 'B.Tech' | 'M.Tech'>('All');
  const [studentRegisterNo, setStudentRegisterNo] = useState('');

  const filteredResults = SEMESTER_RESULTS.filter(res => {
    if (selectedProgramme === 'All') return true;
    return res.programme === selectedProgramme;
  });

  const handleViewResult = (semester: string) => {
    setActiveResultSemester(semester);
    setIsResultModalOpen(true);
  };

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentRegisterNo.trim()) {
      showToast('Enter a sample register number like TVE22CS045');
      return;
    }
    setActiveResultSemester('S4');
    setIsResultModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* 1. Header & Mandatory Demo Disclaimer */}
      <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            Examination Portal
          </span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Demo Portal
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Results
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Find semester results and examination outcomes.
        </p>

        {/* Small mandatory disclaimer note */}
        <div className="pt-2">
          <p className="text-xs text-amber-700 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/60 inline-flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Demo interface — not connected to the KTU results system.</span>
          </p>
        </div>
      </div>

      {/* 2. Interactive Register Number Result Lookup Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white shadow-md space-y-4">
        <div className="max-w-xl space-y-1">
          <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">
            Instant Grade Sheet Lookup
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Check Individual Semester Grade Card
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Enter your university register number to test the responsive marksheet layout with SGPA and credit tallies.
          </p>
        </div>

        <form onSubmit={handleLookupSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-xl">
          <div className="relative flex-1">
            <input
              type="text"
              value={studentRegisterNo}
              onChange={(e) => setStudentRegisterNo(e.target.value)}
              placeholder="e.g. TVE22CS045"
              className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-slate-400 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 uppercase font-mono"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 rounded-lg bg-white text-blue-950 hover:bg-slate-100 font-bold text-sm shadow-sm transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Fetch Result (Demo)
          </button>

          <button
            type="button"
            onClick={() => {
              setStudentRegisterNo('TVE22CS045');
              setActiveResultSemester('S4');
              setIsResultModalOpen(true);
            }}
            className="text-xs text-blue-300 hover:text-white underline self-center sm:self-auto py-2"
          >
            Auto-fill Sample
          </button>
        </form>
      </div>

      {/* 3. Semester Cards Grid (S1 through S8) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
              B.Tech Semester Results Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Browse outcomes by semester cycle for 2019 & 2024 regulations.
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs self-start sm:self-auto">
            {(['All', 'B.Tech', 'M.Tech'] as const).map(prog => (
              <button
                key={prog}
                onClick={() => setSelectedProgramme(prog)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  selectedProgramme === prog
                    ? 'bg-white dark:bg-slate-900 text-blue-950 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {prog}
              </button>
            ))}
          </div>
        </div>

        {/* The 8 Semester Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredResults.map((item) => (
            <div
              key={item.semester}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-blue-400 dark:hover:border-blue-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-900 dark:text-blue-400 flex items-center justify-center font-extrabold text-base border border-blue-100 dark:border-blue-900">
                    {item.semester}
                  </div>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    item.status === 'Revaluation Open'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                      : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Exam: <strong>{item.examMonth}</strong>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Published: {item.publishDate}
                  </p>
                </div>

                {item.revaluationLastDate && (
                  <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-[11px] text-amber-800 dark:text-amber-300">
                    Revaluation till <strong>{item.revaluationLastDate}</strong>
                  </div>
                )}

                {item.sampleSummary && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>Pass Rate (Sample):</span>
                    <strong className="text-slate-800 dark:text-slate-200 font-mono">
                      {item.sampleSummary.passPercentage}
                    </strong>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleViewResult(item.semester)}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>View Result</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Revaluation, Scrutiny & Grievance Information Guide */}
      <div className="p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-900 dark:text-blue-400" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Revaluation & Answer Script Scrutiny Procedure
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">1. Online Application</h4>
            <p>
              Students must apply through their college institutional login within 15 calendar days from result declaration. Fee is ₹600 per paper for revaluation.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">2. Evaluation Process</h4>
            <p>
              Answer books are evaluated independently by external subject experts. If the mark variance is ≥ 15%, a third independent evaluation is invoked.
            </p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 dark:text-white">3. Updated Grade Card</h4>
            <p>
              Revalued grades are updated in the provisional grade ledger within 30 working days. Revised mark sheets are issued without extra charge if cleared.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
