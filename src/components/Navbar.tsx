import React from 'react';
import { useLearning } from '../context/LearningContext';
import { Search, Eye, Sparkles, Menu, ShieldCheck, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onOpenChecklist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onToggleSidebar, onOpenChecklist }) => {
  const {
    learningMode,
    setLearningMode,
    setIsSearchOpen,
    activeTab,
    setActiveTab,
    overallProgressPercentage
  } = useLearning();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="w-full px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            aria-label="Toggle Navigation"
          >
            {isSidebarOpen ? (
              <PanelLeftClose className="w-5 h-5 hidden lg:block" />
            ) : (
              <PanelLeftOpen className="w-5 h-5 hidden lg:block" />
            )}
            <Menu className="w-5 h-5 lg:hidden" />
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 text-left group"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-700 text-white font-bold text-sm flex items-center justify-center">
              SB
            </span>
            <div className="leading-tight">
              <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                STUDY BRITAIN
              </div>
              <div className="text-xs text-slate-500 font-medium hidden sm:block">
                Part I: The Country of Britain
              </div>
            </div>
          </button>
        </div>

        {/* Center: Clean Search Bar */}
        <div className="hidden md:flex flex-1 max-w-sm mx-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-lg border border-slate-200 text-sm transition-colors"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" /> Search lessons, terms, dates...
            </span>
            <kbd className="px-1.5 py-0.5 text-xs bg-white text-slate-400 rounded border border-slate-200 font-mono">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Right: Mode Switcher & Progress */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile search button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Simple Segmented Mode Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-sm font-medium">
            <button
              onClick={() => {
                setLearningMode('visual');
                if (activeTab === 'full-content') setActiveTab('lesson');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                learningMode === 'visual' && activeTab !== 'full-content'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Visual Mode</span>
            </button>
            <button
              onClick={() => {
                setLearningMode('full');
                setActiveTab('full-content');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'full-content'
                  ? 'bg-white text-blue-700 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Full Content</span>
            </button>
          </div>

          {/* Simple Compact Progress Indicator */}
          <button
            onClick={() => setActiveTab('review')}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium transition-colors"
            title="View Review & Progress Center"
          >
            <span>Progress:</span>
            <strong className="text-blue-700">{overallProgressPercentage}%</strong>
          </button>

          {/* Content Audit Checklist Button */}
          <button
            onClick={onOpenChecklist}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            title="Content Fidelity Audit"
            aria-label="Content Audit Checklist"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
