import React, { useState } from 'react';
import { 
  UserCircle2, 
  Award, 
  Calendar, 
  FileText, 
  Clock, 
  Download, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  Ticket
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DEMO_STUDENT, NOTICES_DATA, SEMESTER_RESULTS } from '../data/mockData';

export const StudentDashboard: React.FC = () => {
  const { setCurrentPage, setIsResultModalOpen, setActiveResultSemester, setSelectedNotice, showToast } = useApp();
  const [examRegistered, setExamRegistered] = useState(false);

  const handleOpenResults = () => {
    setActiveResultSemester('S4');
    setIsResultModalOpen(true);
  };

  const handleRegisterExam = () => {
    if (!examRegistered) {
      setExamRegistered(true);
      showToast('Exam Registration confirmed for S5 Regular (Demo)');
    } else {
      showToast('Registration already submitted. Downloading confirmation slip...');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* 1. Portal Demo Disclaimer Banner */}
      <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 dark:text-amber-200 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="px-2 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-950 dark:text-amber-200 font-bold uppercase tracking-wider text-[10px]">
            DEMO STUDENT PORTAL
          </div>
          <span>
            This is a conceptual preview for students. Not connected to the actual university authentication servers.
          </span>
        </div>
        <span className="font-mono text-[11px] text-amber-700 dark:text-amber-400">
          Profile ID: {DEMO_STUDENT.registerNumber}
        </span>
      </div>

      {/* 2. Welcome & Profile Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-900 dark:bg-blue-800 text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-sm shrink-0">
            {DEMO_STUDENT.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {DEMO_STUDENT.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                Active Student
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {DEMO_STUDENT.programme} · {DEMO_STUDENT.currentSemester}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {DEMO_STUDENT.college} ({DEMO_STUDENT.collegeCode}) · {DEMO_STUDENT.scheme}
            </p>
          </div>
        </div>

        {/* Quick Academic Health Stats */}
        <div className="flex items-center gap-4 sm:gap-6 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-4 lg:pt-0 lg:pl-6">
          <div>
            <span className="text-xs text-slate-400 block">Cumulative GPA</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-blue-900 dark:text-blue-400">
              {DEMO_STUDENT.cgpa}
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
          <div>
            <span className="text-xs text-slate-400 block">Earned Credits</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white">
              {DEMO_STUDENT.creditsEarned} <span className="text-xs font-normal text-slate-400">/ 160</span>
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
          <div>
            <span className="text-xs text-slate-400 block">Attendance</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-700 dark:text-emerald-400">
              {DEMO_STUDENT.attendancePercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* 3. Core 4 Dashboard Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Latest Result Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-900 dark:text-blue-400">Latest Result</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                Published
              </span>
            </div>
            <h3 className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-2">
              Semester: S4
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              SGPA: <strong>{DEMO_STUDENT.latestSgpa}</strong> · May/June 2026 Examination
            </p>
          </div>
          <button
            onClick={handleOpenResults}
            className="w-full mt-2 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-between"
          >
            <span>View Grade Sheet</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Upcoming Examination Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-900 dark:text-blue-400">Upcoming Exams</span>
              <span className="text-[10px] text-slate-400 font-mono">6 Papers</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">
              S5 Regular Exams
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Commencing <strong>Nov 24, 2026</strong>. Timetable revised and published.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('examinations')}
            className="w-full mt-2 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-between"
          >
            <span>Check Timetable</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Important Notices Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-900 dark:text-blue-400">Department Notices</span>
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
              3 New Updates
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Revaluation deadline for S4 results closes October 05, 2026.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('notices')}
            className="w-full mt-2 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-between"
          >
            <span>Browse All Notices</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Academic Calendar Milestone Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-blue-900 dark:text-blue-400">Next Milestone</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold font-mono">
                {DEMO_STUDENT.nextMilestone.daysLeft} days left
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 leading-tight">
              {DEMO_STUDENT.nextMilestone.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Scheduled: <strong>{DEMO_STUDENT.nextMilestone.date}</strong>
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('academics')}
            className="w-full mt-2 py-2 px-3 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-between"
          >
            <span>View Calendar</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 4. Quick Access Actions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight">
          Quick Access
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <button
            onClick={() => setCurrentPage('results')}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Results</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">View semester grade cards</p>
          </button>

          <button
            onClick={handleRegisterExam}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Exam Registration</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">{examRegistered ? 'Registered ✓' : 'Register for S5'}</p>
          </button>

          <button
            onClick={() => setCurrentPage('examinations')}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Timetable</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">Exam slots & dates</p>
          </button>

          <button
            onClick={() => showToast('Downloading demo Hall Ticket for S5 Regular Exams...')}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Ticket className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Hall Ticket</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">Download admit card</p>
          </button>

          <button
            onClick={() => setCurrentPage('academics')}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Download className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Downloads</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">Applications & forms</p>
          </button>

          <button
            onClick={() => setCurrentPage('academics')}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors text-left space-y-2 group shadow-2xs"
          >
            <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Regulations</h3>
            <p className="text-[11px] text-slate-500 line-clamp-1">2019 / 2024 scheme</p>
          </button>

        </div>
      </section>

      {/* 5. Additional Student Context: Activity Points & Enrolled S5 Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        
        {/* Activity Points Progress Card */}
        <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Student Activity Points (SAP)
            </h3>
            <span className="text-xs font-mono font-semibold text-blue-900 dark:text-blue-400">
              {DEMO_STUDENT.activityPoints} / {DEMO_STUDENT.activityPointsRequired} pts
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500" 
              style={{ width: `${(DEMO_STUDENT.activityPoints / DEMO_STUDENT.activityPointsRequired) * 100}%` }}
            />
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            35 points remaining to meet the B.Tech graduation threshold. Points can be earned via NSS/NCC, inter-collegiate hackathons, and technical paper presentations.
          </p>

          <button
            onClick={() => showToast('Opening Activity Points submission portal (Demo)')}
            className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            <span>Submit new activity certificate</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Enrolled Courses for S5 */}
        <div className="lg:col-span-2 p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Enrolled Courses · Semester 5
              </h3>
              <p className="text-xs text-slate-400">Computer Science and Engineering (2019 Scheme)</p>
            </div>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded">
              Attendance Satisfied
            </span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
            {[
              { code: 'CST 301', name: 'Formal Languages and Automata Theory', credits: 4, attendance: '92%' },
              { code: 'CST 303', name: 'Computer Networks', credits: 4, attendance: '88%' },
              { code: 'CST 305', name: 'System Software', credits: 4, attendance: '85%' },
              { code: 'CST 307', name: 'Microprocessors and Microcontrollers', credits: 4, attendance: '90%' },
              { code: 'CSL 331', name: 'System Software & Microprocessors Lab', credits: 2, attendance: '96%' }
            ].map((course, idx) => (
              <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">{course.code}</span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium truncate max-w-xs sm:max-w-md">{course.name}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0 font-mono">
                  <span className="text-slate-400">{course.credits} cr</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{course.attendance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
