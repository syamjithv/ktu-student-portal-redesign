import React, { useState } from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  UserCircle2, 
  GraduationCap, 
  ChevronRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useApp, PageRoute } from '../context/AppContext';

export const Header: React.FC = () => {
  const { currentPage, setCurrentPage, isDarkMode, toggleDarkMode, setIsSearchOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Academics', route: 'academics' },
    { label: 'Examinations', route: 'examinations' },
    { label: 'Notices', route: 'notices' },
    { label: 'Results', route: 'results' },
    { label: 'About', route: 'about' },
  ];

  const handleNavClick = (route: PageRoute) => {
    setCurrentPage(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Disclaimer Ribbon */}
      <aside aria-label="Redesign Disclaimer" className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 text-center border-b border-slate-800 tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="font-semibold text-amber-400">Independent Concept:</span>
          <span>Student redesign proposal for #ge-website-redesign. Not affiliated with or endorsed by KTU.</span>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Brand Identity */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 -ml-1 transition-opacity hover:opacity-90"
              aria-label="KTU Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-blue-900 dark:bg-blue-800 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm border border-blue-800/40">
                <span className="text-white">KTU</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-950 dark:text-slate-50 leading-none">
                  KTU
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-tight mt-0.5 max-w-[210px] sm:max-w-none truncate">
                  APJ Abdul Kalam Technological University
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isActive
                        ? 'text-blue-900 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-blue-950/50'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Side: Search, Theme Toggle, Student Portal CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-2.5 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg text-xs sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 border border-slate-200/80 dark:border-slate-800"
                aria-label="Search KTU Resources (Press / or Ctrl+K)"
                title="Search notices, results, exams (Press /)"
              >
                <Search className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                  /
                </kbd>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Student Portal Primary Button */}
              <button
                onClick={() => handleNavClick('student')}
                className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap ${
                  currentPage === 'student'
                    ? 'bg-blue-950 text-white dark:bg-blue-600 dark:text-white'
                    : 'bg-blue-900 hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600 text-white hover:shadow-sm'
                }`}
              >
                <UserCircle2 className="w-4 h-4" />
                <span>Student Portal</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => handleNavClick('student')}
                className="w-full flex items-center justify-between px-4 py-3 bg-blue-900 dark:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <UserCircle2 className="w-4 h-4" />
                  <span>Student Portal (Demo)</span>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>

            <div className="pt-2 space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
              <span>Theme: {isDarkMode ? 'Dark' : 'Light'}</span>
              <button 
                onClick={toggleDarkMode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
                <span>Toggle mode</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
