import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  Calendar, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  BookOpen, 
  ArrowRight,
  ShieldAlert,
  Search,
  Printer
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NOTICES_DATA, SAMPLE_TIMETABLE, REGULATIONS_LIST, TimetableEntry } from '../data/mockData';

export const ExaminationsPage: React.FC = () => {
  const { setCurrentPage, setSelectedNotice, showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'timetable' | 'notifications' | 'registration' | 'regulations'>('timetable');
  const [selectedSemester, setSelectedSemester] = useState<string>('S5');
  const [selectedBranch, setSelectedBranch] = useState<string>('Computer Science');
  const [scheme, setScheme] = useState<string>('2019');

  const examNotices = NOTICES_DATA.filter(n => n.category === 'Examination' || n.category === 'Results');

  const handleDownloadTimetable = () => {
    showToast(`Downloading B.Tech ${selectedSemester} (${selectedBranch}) Timetable PDF`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* 1. Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            University Examinations
          </span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Demo Portal
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Examinations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Timetables, notifications, registration portal guidelines and examination ordinances.
        </p>
      </div>

      {/* 2. Top Segmented Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm overflow-x-auto">
        {[
          { id: 'timetable', label: 'Examination Timetable', icon: Clock },
          { id: 'notifications', label: 'Exam Notifications', icon: FileText },
          { id: 'registration', label: 'Exam Registration Flow', icon: CheckCircle2 },
          { id: 'regulations', label: 'Examination Rules', icon: BookOpen }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-blue-900 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Tab Contents */}

      {/* A. Timetable Tab */}
      {activeTab === 'timetable' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Upcoming Examination Schedule
              </h3>
              <p className="text-xs text-slate-500">
                November / December 2026 Regular & Supplementary Examinations
              </p>
            </div>

            {/* Timetable Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                {['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'].map(s => (
                  <option key={s} value={s}>{s} Semester</option>
                ))}
              </select>

              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <option value="Computer Science">Computer Science (CSE)</option>
                <option value="Electronics">Electronics & Comm (ECE)</option>
                <option value="Mechanical">Mechanical Engg (ME)</option>
                <option value="Civil">Civil Engg (CE)</option>
              </select>

              <select
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <option value="2019">2019 Scheme</option>
                <option value="2024">2024 Scheme</option>
              </select>

              <button
                onClick={handleDownloadTimetable}
                className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Timetable Schedule Grid / Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Date & Day</th>
                  <th className="py-3 px-4">Exam Timing</th>
                  <th className="py-3 px-4 text-center">Slot</th>
                  <th className="py-3 px-4">Course Code</th>
                  <th className="py-3 px-4">Course Title</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {SAMPLE_TIMETABLE.map((entry, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      <div>{entry.date}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{entry.day}</div>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-400">
                      {entry.time}
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-blue-900 dark:text-blue-400">
                      {entry.slot}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">
                      {entry.courseCode}
                    </td>
                    <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-medium">
                      {entry.courseName}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => showToast(`Sample syllabus outline for ${entry.courseCode}`)}
                        className="text-xs text-blue-900 dark:text-blue-400 hover:underline font-semibold"
                      >
                        Syllabus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Timetable note & Hall ticket release timeline */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Hall tickets will be accessible via the Student Portal starting <strong>November 17, 2026</strong>.</span>
            </div>
            <button
              onClick={() => setCurrentPage('student')}
              className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Go to Student Portal</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* B. Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Recent Examination Notifications & Circulars
            </h3>
            <button
              onClick={() => setCurrentPage('notices')}
              className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline"
            >
              View all notices archive →
            </button>
          </div>

          <div className="space-y-3">
            {examNotices.map((n) => (
              <div
                key={n.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-400 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-blue-900 dark:text-blue-400">{n.category}</span>
                    <span>·</span>
                    <span className="font-mono">{n.date}</span>
                    <span>·</span>
                    <span className="font-mono text-slate-400">{n.refNo}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {n.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {n.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedNotice(n)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 hover:bg-blue-100 shrink-0 self-start sm:self-center transition-colors"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* C. Registration Flow Tab */}
      {activeTab === 'registration' && (
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
              Examination Registration Process
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              How Student Registration Works
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Step-by-step guideline for regular and supplementary examination registration through the student portal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            {[
              {
                step: 'Step 1',
                title: 'Check Eligibility',
                desc: 'Verify minimum 75% attendance in all courses and clearance of internal assessments.'
              },
              {
                step: 'Step 2',
                title: 'Select Courses',
                desc: 'Select regular core papers and any supplementary backlogs appearing in the session.'
              },
              {
                step: 'Step 3',
                title: 'Fee Payment',
                desc: 'Pay required theory (₹200/paper) and practical examination fees via netbanking or UPI.'
              },
              {
                step: 'Step 4',
                title: 'College Endorsement',
                desc: 'Institutional principal approves candidate register. Hall ticket generated 7 days prior.'
              }
            ].map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold font-mono text-blue-900 dark:text-blue-400">
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Exam Registration Window for Odd Sem closes: <strong>September 30, 2026</strong>
            </div>
            <button
              onClick={() => setCurrentPage('student')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 rounded-lg shadow-xs transition-colors flex items-center gap-2"
            >
              <span>Test Registration in Student Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* D. Examination Regulations Tab */}
      {activeTab === 'regulations' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Rules, Ordinances & Anti-Malpractice Guidelines
            </h3>
            <p className="text-xs text-slate-500">
              Essential conduct requirements governing all university written and practical assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REGULATIONS_LIST.filter(r => r.category === 'Examinations' || r.category === 'General').map((reg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold text-blue-900 dark:text-blue-400">
                    {reg.code}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {reg.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {reg.subtitle} · {reg.pages} ({reg.size})
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="block text-slate-800 dark:text-slate-200">Key Sections:</strong>
                  {reg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => showToast(`Downloading ${reg.title} (PDF)`)}
                  className="w-full py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Ordinance Document</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick link to Results */}
      <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-blue-950 dark:text-white">
            Looking for published examination results?
          </h4>
          <p className="text-xs text-blue-800 dark:text-blue-300">
            Check S1 to S8 outcome statistics, revaluation forms and individual grade cards.
          </p>
        </div>
        <button
          onClick={() => setCurrentPage('results')}
          className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span>Open Results Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
