import React, { useState } from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Breadcrumb } from './components/Breadcrumb';
import { HomeDashboard } from './components/HomeDashboard';
import { LessonView } from './components/visual/LessonView';
import { FullContentMode } from './components/full/FullContentMode';
import { QuizHub } from './components/quiz/QuizHub';
import { ExercisesHub } from './components/exercises/ExercisesHub';
import { FlashcardCenter } from './components/flashcards/FlashcardCenter';
import { VocabularyCenter } from './components/vocabulary/VocabularyCenter';
import { ReviewCenter } from './components/review/ReviewCenter';
import { SearchModal } from './components/SearchModal';
import { ContentChecklistModal } from './components/checklist/ContentChecklistModal';
import { CHAPTERS_DATA } from './data/courseData';

const MainContent: React.FC = () => {
  const { activeTab, currentLessonId } = useLearning();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [checklistOpen, setChecklistOpen] = useState(false);

  // Find active reading
  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const activeReading = allReadings.find(r => r.id === currentLessonId) || allReadings[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Top Navigation */}
      <Navbar
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onOpenChecklist={() => setChecklistOpen(true)}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex w-full">
        {/* Course Navigation Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpenChecklist={() => setChecklistOpen(true)}
        />

        {/* Main Content Area */}
        <main
          className={`flex-1 transition-all duration-200 px-4 sm:px-8 py-8 overflow-x-hidden ${
            sidebarOpen ? 'lg:pl-84' : 'lg:pl-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumb />

            {activeTab === 'dashboard' && (
              <HomeDashboard onOpenChecklist={() => setChecklistOpen(true)} />
            )}

            {activeTab === 'lesson' && (
              <LessonView lesson={activeReading} />
            )}

            {activeTab === 'full-content' && (
              <FullContentMode />
            )}

            {activeTab === 'quizzes' && (
              <QuizHub />
            )}

            {activeTab === 'exercises' && (
              <ExercisesHub />
            )}

            {activeTab === 'flashcards' && (
              <FlashcardCenter />
            )}

            {activeTab === 'vocabulary' && (
              <VocabularyCenter />
            )}

            {activeTab === 'review' && (
              <ReviewCenter />
            )}
          </div>
        </main>
      </div>

      {/* Modals */}
      <SearchModal />
      <ContentChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <LearningProvider>
      <MainContent />
    </LearningProvider>
  );
}

export default App;
