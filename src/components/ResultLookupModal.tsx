import React, { useState } from 'react';
import { X, Award, Download, CheckCircle2, AlertCircle, FileCheck, ArrowRight, Printer } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DEMO_STUDENT, SAMPLE_GRADES_S4, CourseGrade } from '../data/mockData';

export const ResultLookupModal: React.FC = () => {
  const { isResultModalOpen, setIsResultModalOpen, activeResultSemester, setActiveResultSemester, showToast } = useApp();
  const [selectedSem, setSelectedSem] = useState<string>(activeResultSemester || 'S4');
  const [registerNo, setRegisterNo] = useState<string>('TVE22CS045');

  if (!isResultModalOpen) return null;

  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];

  // Mock semester grades
  const grades: CourseGrade[] = SAMPLE_GRADES_S4;

  const totalCredits = grades.reduce((acc, curr) => acc + curr.credits, 0);
  const totalPoints = grades.reduce((acc, curr) => acc + (curr.credits * curr.gradePoints), 0);
  const sgpa = (totalPoints / totalCredits).toFixed(2);

  const handleDownloadProvisional = () => {
    showToast(`Downloading provisional grade card for ${selectedSem} (${registerNo})`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="result-modal-title"
      >
        {/* Top Disclaimer Header */}
        <div className="bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Demo interface — not connected to the official KTU results system. Sample student data only.</span>
          </div>
          <button 
            onClick={() => setIsResultModalOpen(false)}
            className="text-slate-900 hover:text-black font-bold p-0.5"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
              Provisional Statement of Grades
            </span>
            <h3 id="result-modal-title" className="text-xl font-bold text-slate-900 dark:text-white">
              B.Tech Degree Examination · {selectedSem}
            </h3>
          </div>

          {/* Semester Selector Pill bar */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs overflow-x-auto max-w-full">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSem(sem)}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                  selectedSem === sem
                    ? 'bg-blue-900 text-white dark:bg-blue-600 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[72vh] overflow-y-auto">
          
          {/* Student Profile Card */}
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <span className="text-slate-400 block text-[11px]">Candidate Name</span>
              <strong className="text-slate-900 dark:text-white font-semibold">{DEMO_STUDENT.name}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Register Number</span>
              <strong className="text-slate-900 dark:text-white font-mono font-semibold">{registerNo}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Institution</span>
              <strong className="text-slate-900 dark:text-white font-semibold truncate block" title={DEMO_STUDENT.college}>
                {DEMO_STUDENT.college}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Programme / Branch</span>
              <strong className="text-slate-900 dark:text-white font-semibold truncate block">
                B.Tech (CSE) · 2019 Scheme
              </strong>
            </div>
          </div>

          {/* Grades Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Course Wise Performance
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                Examination: May/June 2026 (Regular)
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Course Code</th>
                    <th className="py-2.5 px-3">Course Name</th>
                    <th className="py-2.5 px-3 text-center">Credits</th>
                    <th className="py-2.5 px-3 text-center">Grade</th>
                    <th className="py-2.5 px-3 text-center">Grade Point</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {grades.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {item.code}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 dark:text-slate-300 font-medium">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                        {item.credits}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold font-mono text-blue-900 dark:text-blue-400">
                        {item.grade}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-slate-600 dark:text-slate-400">
                        {item.gradePoints.toFixed(1)}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SGPA & CGPA Summary Card */}
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-xs text-blue-800 dark:text-blue-300 block font-medium">Semester Credits</span>
                <span className="text-xl font-bold font-mono text-blue-950 dark:text-white">{totalCredits}</span>
              </div>
              <div className="h-8 w-px bg-blue-200 dark:bg-blue-800" />
              <div>
                <span className="text-xs text-blue-800 dark:text-blue-300 block font-medium">Semester GPA (SGPA)</span>
                <span className="text-2xl font-black font-mono text-blue-950 dark:text-blue-300">{sgpa}</span>
              </div>
              <div className="h-8 w-px bg-blue-200 dark:bg-blue-800" />
              <div>
                <span className="text-xs text-blue-800 dark:text-blue-300 block font-medium">Cumulative GPA (CGPA)</span>
                <span className="text-xl font-bold font-mono text-blue-950 dark:text-white">{DEMO_STUDENT.cgpa}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-md border border-emerald-300 dark:border-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Semester Cleared (No Backlogs)</span>
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Revaluation window for {selectedSem} open till <strong>Oct 05, 2026</strong>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadProvisional}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Grade Card</span>
            </button>
            <button
              onClick={() => setIsResultModalOpen(false)}
              className="px-3.5 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
