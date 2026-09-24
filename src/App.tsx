import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { NoticeModal } from './components/NoticeModal';
import { ResultLookupModal } from './components/ResultLookupModal';
import { HomePage } from './pages/HomePage';
import { StudentDashboard } from './pages/StudentDashboard';
import { NoticesPage } from './pages/NoticesPage';
import { ResultsPage } from './pages/ResultsPage';
import { ExaminationsPage } from './pages/ExaminationsPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AboutPage } from './pages/AboutPage';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentPage, toastMessage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'student':
        return <StudentDashboard />;
      case 'notices':
        return <NoticesPage />;
      case 'results':
        return <ResultsPage />;
      case 'examinations':
        return <ExaminationsPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'about':
        return <AboutPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Header />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      {/* Global Modals */}
      <SearchModal />
      <NoticeModal />
      <ResultLookupModal />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs sm:text-sm font-medium shadow-2xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
