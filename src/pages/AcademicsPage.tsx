import React, { useState } from 'react';
import { 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Download, 
  FileText, 
  ExternalLink, 
  ChevronRight, 
  Search, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  ACADEMIC_CALENDAR_EVENTS, 
  REGULATIONS_LIST, 
  SYLLABUS_BRANCHES, 
  AFFILIATED_COLLEGES, 
  FREQUENT_DOWNLOADS 
} from '../data/mockData';

export const AcademicsPage: React.FC = () => {
  const { showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'calendar' | 'regulations' | 'syllabus' | 'colleges' | 'downloads'>('calendar');
  const [selectedBranch, setSelectedBranch] = useState(SYLLABUS_BRANCHES[0].id);
  const [collegeDistrict, setCollegeDistrict] = useState<string>('All');
  const [collegeSearch, setCollegeSearch] = useState('');

  const currentBranch = SYLLABUS_BRANCHES.find(b => b.id === selectedBranch) || SYLLABUS_BRANCHES[0];

  const filteredColleges = AFFILIATED_COLLEGES.filter(c => {
    const matchesDistrict = collegeDistrict === 'All' || c.district === collegeDistrict;
    const matchesQuery = c.name.toLowerCase().includes(collegeSearch.toLowerCase()) || 
                         c.code.toLowerCase().includes(collegeSearch.toLowerCase());
    return matchesDistrict && matchesQuery;
  });

  const districts = ['All', 'Thiruvananthapuram', 'Ernakulam', 'Thrissur', 'Kollam', 'Kottayam', 'Kozhikode', 'Palakkad'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* 1. Header */}
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
            Curriculum & Institutions
          </span>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
            Demo Portal
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Academics
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Academic calendar, curriculum regulations, syllabus repository, and affiliated institutions.
        </p>
      </div>

      {/* 2. Top Navigation Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm overflow-x-auto">
        {[
          { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
          { id: 'regulations', label: 'Regulations', icon: BookOpen },
          { id: 'syllabus', label: 'Syllabus Repository', icon: GraduationCap },
          { id: 'colleges', label: 'Affiliated Colleges', icon: Building2 },
          { id: 'downloads', label: 'Downloads & Forms', icon: Download }
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

      {/* Tab 1: Academic Calendar */}
      {activeTab === 'calendar' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Academic Calendar · Academic Year 2026–27
              </h3>
              <p className="text-xs text-slate-500">
                Official instructional timeline approved by the University Academic Council.
              </p>
            </div>
            <button
              onClick={() => showToast('Downloading Official Academic Calendar PDF')}
              className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold flex items-center gap-1.5 self-start sm:self-auto transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Calendar (PDF)</span>
            </button>
          </div>

          {/* Timeline List */}
          <div className="space-y-3">
            {ACADEMIC_CALENDAR_EVENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-28 shrink-0 font-mono font-bold text-xs sm:text-sm text-blue-900 dark:text-blue-400">
                    {item.date}
                  </div>
                  <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.event}
                  </span>
                </div>

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 self-start sm:self-center">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Regulations */}
      {activeTab === 'regulations' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Academic Ordinances & Degree Regulations
            </h3>
            <p className="text-xs text-slate-500">
              Credit requirements, degree progression rules, Honors & Minor pathways, and course evaluation frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {REGULATIONS_LIST.map((reg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-900 dark:text-blue-400">
                      {reg.code}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {reg.pages} · {reg.size}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {reg.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {reg.subtitle}
                  </p>

                  <div className="space-y-1 pt-2">
                    <strong className="text-xs text-slate-700 dark:text-slate-300 block">
                      Regulation Provisions:
                    </strong>
                    {reg.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-slate-500 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => showToast(`Downloading ${reg.title} PDF`)}
                  className="w-full mt-2 py-2 px-3 rounded-lg text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 border border-blue-200 dark:border-blue-900 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Regulation PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Syllabus Repository */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              B.Tech Syllabus & Course Outcomes
            </h3>
            <p className="text-xs text-slate-500">
              Browse detailed subject syllabi, module breakdowns, lecture hours, and reference books across all disciplines.
            </p>
          </div>

          {/* Branch Selector buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {SYLLABUS_BRANCHES.map(branch => (
              <button
                key={branch.id}
                onClick={() => setSelectedBranch(branch.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedBranch === branch.id
                    ? 'bg-blue-900 text-white dark:bg-blue-600 shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {branch.name} ({branch.code})
              </button>
            ))}
          </div>

          {/* Current Branch Details & Semesters */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-blue-900 dark:text-blue-400">
                Department of {currentBranch.name}
              </span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Curriculum Framework (2019 & 2024 Scheme)
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                {currentBranch.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentBranch.semesters.map((sem, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {sem}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Theory, Practical Labs & Electives
                    </p>
                  </div>

                  <button
                    onClick={() => showToast(`Downloading syllabus for ${currentBranch.code} - ${sem}`)}
                    className="w-full py-1.5 px-2.5 rounded text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors flex items-center justify-between"
                  >
                    <span>Download PDF</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Affiliated Colleges Directory */}
      {activeTab === 'colleges' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Affiliated Engineering Colleges Directory
              </h3>
              <p className="text-xs text-slate-500">
                Search government, aided, and self-financing engineering institutes under KTU.
              </p>
            </div>

            {/* District & Search filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <input
                type="text"
                value={collegeSearch}
                onChange={(e) => setCollegeSearch(e.target.value)}
                placeholder="Search college or code (e.g. CET)..."
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />

              <select
                value={collegeDistrict}
                onChange={(e) => setCollegeDistrict(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                {districts.map(d => (
                  <option key={d} value={d}>{d === 'All' ? 'All Districts' : d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredColleges.map((col) => (
              <div
                key={col.code}
                className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-900 dark:text-blue-400">
                      College Code: {col.code}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {col.type}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {col.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    District: {col.district}, Kerala
                  </p>
                </div>

                <a
                  href={col.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-900 dark:text-blue-400 hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Visit College Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Downloads & Forms */}
      {activeTab === 'downloads' && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Official Student Application Forms & Templates
            </h3>
            <p className="text-xs text-slate-500">
              Download frequently required printable forms for grade corrections, transcripts, provisional certificates, and transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FREQUENT_DOWNLOADS.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {doc.title}
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {doc.category} · {doc.format} ({doc.size})
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => showToast(`Downloading ${doc.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 text-xs font-semibold text-blue-900 dark:text-blue-400 shrink-0 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
