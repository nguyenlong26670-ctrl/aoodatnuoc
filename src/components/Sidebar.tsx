import React, { useState } from 'react';
import { useLearning } from '../context/LearningContext';
import { CHAPTERS_DATA } from '../data/courseData';
import {
  Home, BookOpen, Award, Sparkles, Key, RotateCcw,
  ChevronDown, ChevronRight, CheckCircle2, ShieldCheck, CheckSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChecklist: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onOpenChecklist }) => {
  const {
    activeTab,
    setActiveTab,
    currentLessonId,
    navigateToLesson,
    completedLessonIds
  } = useLearning();

  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'chapter-1': true,
    'chapter-2': true
  });

  const toggleChapter = (id: string) => {
    setExpandedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-80 bg-white border-r border-slate-200 transition-transform duration-200 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Essential Navigation Links */}
        <div className="p-3 border-b border-slate-200 space-y-1">
          <button
            onClick={() => {
              setActiveTab('dashboard');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className="w-5 h-5 text-slate-500" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('exercises');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'exercises'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <CheckSquare className="w-5 h-5 text-slate-500" />
              <span>Exercises (MCQ & T/F)</span>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
              60 Qs
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('quizzes');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'quizzes'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Award className="w-5 h-5 text-slate-500" />
            <span>Quizzes & Exam</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('flashcards');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'flashcards'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-5 h-5 text-slate-500" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('vocabulary');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'vocabulary'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Key className="w-5 h-5 text-slate-500" />
            <span>Vocabulary</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('review');
              if (window.innerWidth < 1024) onClose();
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
              activeTab === 'review'
                ? 'bg-blue-50 text-blue-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <RotateCcw className="w-5 h-5 text-slate-500" />
            <span>Review Center</span>
          </button>
        </div>

        {/* Course Syllabus Tree (Clean, Large, Readable) */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          <div className="text-xs font-bold tracking-wider text-slate-400 uppercase px-3 pt-2">
            Course Content
          </div>

          {CHAPTERS_DATA.map(ch => {
            const isChExpanded = expandedChapters[ch.id];
            return (
              <div key={ch.id} className="space-y-1">
                {/* Chapter Title Bar */}
                <button
                  onClick={() => toggleChapter(ch.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">
                    Chapter {ch.number}: {ch.title}
                  </span>
                  {isChExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Chapter Readings */}
                {isChExpanded && (
                  <div className="space-y-1 pl-2">
                    {ch.readings.map(reading => {
                      const isSelected = activeTab === 'lesson' && currentLessonId === reading.id;
                      const isDone = completedLessonIds.includes(reading.id);

                      return (
                        <button
                          key={reading.id}
                          onClick={() => {
                            navigateToLesson(reading.id, undefined, 'visual');
                            if (window.innerWidth < 1024) onClose();
                          }}
                          className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isSelected
                              ? 'bg-blue-50 text-blue-900 font-semibold border-l-3 border-blue-700'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                              isDone ? 'bg-emerald-500' : 'bg-slate-300'
                            }`}
                          />
                          <span className="leading-snug">
                            {reading.title.replace('Reading: ', '').replace('Reading 1: ', '1. ').replace('Reading 2: ', '2. ')}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer: Simple Audit Trigger */}
        <div className="p-3 border-t border-slate-200">
          <button
            onClick={() => {
              onOpenChecklist();
              if (window.innerWidth < 1024) onClose();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-700 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Content Audit</span>
            </span>
            <span className="text-xs text-slate-500 font-semibold">100% Complete</span>
          </button>
        </div>
      </aside>
    </>
  );
};
