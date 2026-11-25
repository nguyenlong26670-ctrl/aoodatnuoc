export type LearningMode = 'visual' | 'full';

export interface Subsection {
  id: string;
  title: string;
  letter?: string;
  badge?: string;
  bullets?: string[];
  subsections?: {
    letter?: string;
    title: string;
    bullets: string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  note?: string;
  keyIdea?: string;
  componentType?: 'british-isles-diagram' | 'four-nations-diagram' | 'union-jack-timeline' | 'attitudes-diagram' | 'comparison-cards' | 'vocabulary-table';
}

export interface SectionContent {
  id: string;
  title: string;
  number?: string;
  subsections: Subsection[];
  summaryTable?: {
    title?: string;
    headers: string[];
    rows: string[][];
  };
  keyDistinction?: {
    title: string;
    items: { label: string; text: string }[];
  };
  vocabularyItems?: {
    term: string;
    vietnamese?: string;
    definition: string;
  }[];
  keyConcept?: string;
  mainConclusion?: string;
  overallConclusion?: string[];
}

export interface ReadingLesson {
  id: string;
  chapterId: string;
  title: string;
  subtitle?: string;
  estimatedMinutes: number;
  sections: SectionContent[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  readings: ReadingLesson[];
}

export type QuestionType = 'multiple-choice' | 'true-false' | 'fill-blank' | 'matching' | 'ordering';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  lessonId?: string;
  chapterId: string;
  prompt: string;
  explanation: string;
  sourceReference: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: number; // index of option
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill-blank';
  acceptedAnswers: string[];
  hint?: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: { left: string; right: string }[];
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering';
  items: { id: string; text: string; correctOrder: number }[];
}

export type QuizQuestion = 
  | MultipleChoiceQuestion 
  | TrueFalseQuestion 
  | FillBlankQuestion 
  | MatchingQuestion 
  | OrderingQuestion;

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  date: string;
  incorrectQuestionIds: string[];
}

export interface Flashcard {
  id: string;
  category: 'geography' | 'history' | 'vocabulary' | 'attitudes' | 'institutions';
  chapterId: string;
  lessonId: string;
  front: string;
  back: string;
  vietnamese?: string;
  details?: string[];
  status: 'new' | 'learning' | 'mastered' | 'review';
}

export interface VocabularyTerm {
  id: string;
  term: string;
  vietnamese: string;
  englishDefinition: string;
  context: string;
  chapter: string;
  lesson: string;
}

/* --- EXERCISES SYSTEM TYPES --- */

export type ExerciseMode = 'practice' | 'test' | 'random';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type ExerciseCategoryType = 'all' | 'chapter-1' | 'chapter-2' | 'reading-1' | 'reading-2' | 'reading-3' | 'reading-4' | 'reading-5';

export interface ExerciseMCQ {
  id: string;
  type: 'mcq';
  chapterId: 'chapter-1' | 'chapter-2';
  lessonId: string;
  sectionId: string;
  sectionTitle: string;
  difficulty: DifficultyLevel;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  sourceSection: string;
}

export interface ExerciseTF {
  id: string;
  type: 'tf';
  chapterId: 'chapter-1' | 'chapter-2';
  lessonId: string;
  sectionId: string;
  sectionTitle: string;
  difficulty: DifficultyLevel;
  statement: string;
  correctAnswer: boolean;
  explanation: string;
  correctedStatement?: string;
  sourceSection: string;
}

export type ExerciseItem = ExerciseMCQ | ExerciseTF;

export interface ExerciseSessionResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  timeSpentSeconds: number;
  mode: ExerciseMode;
  missedQuestionIds: string[];
  date: string;
  performanceGrade: 'Excellent' | 'Very Good' | 'Good' | 'Needs More Practice' | 'Review the Lessons';
}

export interface UserProgress {
  completedLessonIds: string[];
  completedSectionIds: string[];
  currentLessonId: string;
  flashcardStatus: Record<string, 'new' | 'learning' | 'mastered' | 'review'>;
  quizScores: Record<string, QuizResult>;
  wrongQuestionHistory: Record<string, { attempts: number; lastFailedDate: string }>;
  bookmarks: string[];
  notes: Record<string, string>;
  lastStudiedDate: string;
}
