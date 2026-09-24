import React from 'react';
import { X, Calendar, FileText, Download, AlertCircle, Share2, Printer, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NoticeModal: React.FC = () => {
  const { selectedNotice, setSelectedNotice, showToast } = useApp();

  if (!selectedNotice) return null;

  const handleDownload = (fileName: string) => {
    showToast(`Downloading demo document: ${fileName}`);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Notice reference link copied to clipboard');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notice-modal-title"
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-400">
              {selectedNotice.category} Notice
            </span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-xs text-slate-500 font-mono">
              {selectedNotice.refNo}
            </span>
          </div>
          <button
            onClick={() => setSelectedNotice(null)}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close notice details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Urgent Alert Banner if urgent */}
          {selectedNotice.urgent && (
            <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-lg flex items-start gap-3 text-amber-900 dark:text-amber-200 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Urgent Notice:</strong> Time-sensitive action or deadline specified in this circular.
              </div>
            </div>
          )}

          {/* Title & Metadata */}
          <div>
            <h3 id="notice-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
              {selectedNotice.title}
            </h3>
            
            <div className="mt-3 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Published on {selectedNotice.date}</span>
              </div>
              <span>·</span>
              <span>Issued by University Directorate</span>
              <span>·</span>
              <span className="text-amber-600 dark:text-amber-400">Demo Content</span>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {selectedNotice.description}
            </p>
            {selectedNotice.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Attachments Section if available */}
          {selectedNotice.attachments && selectedNotice.attachments.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                Official Attachments ({selectedNotice.attachments.length})
              </h4>
              <div className="space-y-2">
                {selectedNotice.attachments.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 hover:border-blue-400 dark:hover:border-blue-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                          {att.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          PDF Document · {att.size}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(att.name)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-900 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950 rounded-md transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
            <strong>Notice Redesign Note:</strong> This is sample simulated content for the #ge-website-redesign student competition.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </button>
            <button
              onClick={() => showToast('Printing formatted circular (Demo)')}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
          <button
            onClick={() => setSelectedNotice(null)}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
