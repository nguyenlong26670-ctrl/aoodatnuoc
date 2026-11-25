import React, { createContext, useContext, useState, useEffect } from 'react';
import { LearningMode, QuizResult } from '../types';
import { CHAPTERS_DATA } from '../data/courseData';

interface LearningContextType {
  learningMode: LearningMode;
  setLearningMode: (mode: LearningMode) => void;
  activeTab: 'dashboard' | 'lesson' | 'quizzes' | 'flashcards' | 'vocabulary' | 'review' | 'full-content' | 'checklist' | 'exercises';
  setActiveTab: (tab: 'dashboard' | 'lesson' | 'quizzes' | 'flashcards' | 'vocabulary' | 'review' | 'full-content' | 'checklist' | 'exercises') => void;
  currentLessonId: string;
  currentSectionId: string | null;
  setCurrentSectionId: (id: string | null) => void;
  completedLessonIds: string[];
  completedSectionIds: string[];
  toggleLessonCompleted: (lessonId: string) => void;
  markSectionCompleted: (sectionId: string) => void;
  flashcardStatus: Record<string, 'new' | 'learning' | 'mastered' | 'review'>;
  setFlashcardStatus: (cardId: string, status: 'new' | 'learning' | 'mastered' | 'review') => void;
  quizScores: Record<string, QuizResult>;
  recordQuizResult: (result: QuizResult) => void;
  wrongQuestionHistory: Record<string, { attempts: number; lastFailedDate: string }>;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  navigateToLesson: (lessonId: string, sectionId?: string, mode?: LearningMode) => void;
  resetProgress: () => void;
  overallProgressPercentage: number;
  totalLessonsCount: number;
}

const STORAGE_KEY = 'study_britain_progress_v1';

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const totalLessonsCount = allReadings.length;

  const [learningMode, setLearningMode] = useState<LearningMode>('visual');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'lesson' | 'quizzes' | 'flashcards' | 'vocabulary' | 'review' | 'full-content' | 'checklist' | 'exercises'>('dashboard');
  const [currentLessonId, setCurrentLessonId] = useState<string>('reading-1');
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [completedSectionIds, setCompletedSectionIds] = useState<string[]>([]);
  const [flashcardStatus, setFlashcardStatusState] = useState<Record<string, 'new' | 'learning' | 'mastered' | 'review'>>({});
  const [quizScores, setQuizScores] = useState<Record<string, QuizResult>>({});
  const [wrongQuestionHistory, setWrongQuestionHistory] = useState<Record<string, { attempts: number; lastFailedDate: string }>>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.completedLessonIds) setCompletedLessonIds(data.completedLessonIds);
        if (data.completedSectionIds) setCompletedSectionIds(data.completedSectionIds);
        if (data.flashcardStatus) setFlashcardStatusState(data.flashcardStatus);
        if (data.quizScores) setQuizScores(data.quizScores);
        if (data.wrongQuestionHistory) setWrongQuestionHistory(data.wrongQuestionHistory);
        if (data.currentLessonId) setCurrentLessonId(data.currentLessonId);
        if (data.learningMode) setLearningMode(data.learningMode);
      }
    } catch (e) {
      console.error('Failed to load local storage progress', e);
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    try {
      const data = {
        completedLessonIds,
        completedSectionIds,
        flashcardStatus,
        quizScores,
        wrongQuestionHistory,
        currentLessonId,
        learningMode,
        lastSaved: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to local storage', e);
    }
  }, [completedLessonIds, completedSectionIds, flashcardStatus, quizScores, wrongQuestionHistory, currentLessonId, learningMode]);

  const toggleLessonCompleted = (lessonId: string) => {
    setCompletedLessonIds(prev => 
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  const markSectionCompleted = (sectionId: string) => {
    setCompletedSectionIds(prev => 
      prev.includes(sectionId) ? prev : [...prev, sectionId]
    );
  };

  const setFlashcardStatus = (cardId: string, status: 'new' | 'learning' | 'mastered' | 'review') => {
    setFlashcardStatusState(prev => ({
      ...prev,
      [cardId]: status
    }));
  };

  const recordQuizResult = (result: QuizResult) => {
    setQuizScores(prev => ({
      ...prev,
      [result.quizId]: result
    }));

    if (result.incorrectQuestionIds.length > 0) {
      setWrongQuestionHistory(prev => {
        const updated = { ...prev };
        const now = new Date().toISOString();
        result.incorrectQuestionIds.forEach(qId => {
          updated[qId] = {
            attempts: (updated[qId]?.attempts || 0) + 1,
            lastFailedDate: now
          };
        });
        return updated;
      });
    }
  };

  const navigateToLesson = (lessonId: string, sectionId?: string, mode?: LearningMode) => {
    setCurrentLessonId(lessonId);
    if (sectionId) {
      setCurrentSectionId(sectionId);
    }
    if (mode) {
      setLearningMode(mode);
    }
    setActiveTab(mode === 'full' ? 'full-content' : 'lesson');
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset your learning progress and quiz scores?")) {
      setCompletedLessonIds([]);
      setCompletedSectionIds([]);
      setFlashcardStatusState({});
      setQuizScores({});
      setWrongQuestionHistory({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Overall progress percentage calculation (weighted: 50% lessons completed, 30% quizzes, 20% flashcards mastered)
  const lessonsProgress = (completedLessonIds.length / totalLessonsCount) * 50;
  const passedQuizzesCount = Object.values(quizScores).filter(q => (q.score / q.totalQuestions) >= 0.7).length;
  const quizProgress = Math.min(30, (passedQuizzesCount / 5) * 30);
  const masteredFlashcards = Object.values(flashcardStatus).filter(s => s === 'mastered').length;
  const flashcardProgress = Math.min(20, (masteredFlashcards / 15) * 20);
  const overallProgressPercentage = Math.round(lessonsProgress + quizProgress + flashcardProgress);

  return (
    <LearningContext.Provider
      value={{
        learningMode,
        setLearningMode,
        activeTab,
        setActiveTab,
        currentLessonId,
        currentSectionId,
        setCurrentSectionId,
        completedLessonIds,
        completedSectionIds,
        toggleLessonCompleted,
        markSectionCompleted,
        flashcardStatus,
        setFlashcardStatus,
        quizScores,
        recordQuizResult,
        wrongQuestionHistory,
        isSearchOpen,
        setIsSearchOpen,
        navigateToLesson,
        resetProgress,
        overallProgressPercentage,
        totalLessonsCount
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
