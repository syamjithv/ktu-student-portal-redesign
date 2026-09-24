import React from 'react';
import { GraduationCap, ArrowUp, Mail, MapPin, Phone, ShieldCheck, Heart } from 'lucide-react';
import { useApp, PageRoute } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentPage, showToast } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 dark:text-slate-400 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-lg border border-blue-600">
                KTU
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">KTU</h3>
                <p className="text-xs text-slate-400">APJ Abdul Kalam Technological University</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A state government technological university established in 2014 to coordinate and regulate engineering and technology education across Kerala.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>CET Campus, MBA Block, Thiruvananthapuram, Kerala – 695016</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@ktu.edu.in · registrar@ktu.edu.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>0471-2598122, 2598422 (University Reception)</span>
              </div>
            </div>
          </div>

          {/* Core Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} className="hover:text-white transition-colors">
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('examinations')} className="hover:text-white transition-colors">
                  Examinations
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('notices')} className="hover:text-white transition-colors">
                  Notices
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('results')} className="hover:text-white transition-colors">
                  Results
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('academics')} className="hover:text-white transition-colors">
                  Academic Calendar
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} className="hover:text-white transition-colors">
                  Regulations & Syllabus
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} className="hover:text-white transition-colors">
                  Affiliated Colleges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLinkClick('academics');
                    showToast('Navigated to Academic Downloads');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  Downloads & Forms
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('student')} className="hover:text-white transition-colors">
                  Student Portal (Demo)
                </button>
              </li>
            </ul>
          </div>

          {/* Challenge & Disclaimer Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Redesign Concept
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                Created for the <strong>“Website Redesign”</strong> student design challenge.
              </p>
              <div className="inline-block px-2.5 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-amber-300 text-xs">
                #ge-website-redesign
              </div>
              <p className="leading-normal">
                Focuses on reducing cognitive friction for 150,000+ engineering students in Kerala.
              </p>
              <button
                onClick={scrollToTop}
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with mandatory disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p className="text-slate-400 font-medium">
              Independent student redesign concept. Not affiliated with or endorsed by KTU.
            </p>
            <p className="mt-0.5">
              All marks, notices, and schedules shown are sample demo data for conceptual presentation.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Portfolio Concept</span>
            <span>·</span>
            <span>#ge-website-redesign</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
