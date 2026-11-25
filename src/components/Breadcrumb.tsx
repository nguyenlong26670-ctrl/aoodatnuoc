import React from 'react';
import { useLearning } from '../context/LearningContext';
import { CHAPTERS_DATA } from '../data/courseData';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb: React.FC = () => {
  const { activeTab, currentLessonId, setActiveTab } = useLearning();

  if (activeTab === 'dashboard') {
    return null;
  }

  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const currentReading = allReadings.find(r => r.id === currentLessonId);
  const currentChapter = CHAPTERS_DATA.find(ch => ch.id === currentReading?.chapterId);

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap">
      <button
        onClick={() => setActiveTab('dashboard')}
        className="hover:text-blue-700 transition-colors font-medium"
      >
        Dashboard
      </button>

      {activeTab === 'full-content' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Full Content Mode</span>
        </>
      ) : activeTab === 'exercises' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Exercises (MCQ & True/False)</span>
        </>
      ) : activeTab === 'quizzes' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Quizzes & Examination</span>
        </>
      ) : activeTab === 'flashcards' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Flashcards</span>
        </>
      ) : activeTab === 'vocabulary' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Vocabulary Glossary</span>
        </>
      ) : activeTab === 'review' ? (
        <>
          <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">Review Center</span>
        </>
      ) : (
        <>
          {currentChapter && (
            <>
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
              <span className="text-slate-600 font-medium">{currentChapter.title}</span>
            </>
          )}
          {currentReading && (
            <>
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
              <span className="font-semibold text-slate-900 truncate max-w-sm">{currentReading.title}</span>
            </>
          )}
        </>
      )}
    </nav>
  );
};
