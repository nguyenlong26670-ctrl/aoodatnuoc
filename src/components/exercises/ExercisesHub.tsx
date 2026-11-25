import React, { useState } from 'react';
import { EXERCISE_MCQS, EXERCISE_TFS, ALL_EXERCISE_ITEMS } from '../../data/exercisesData';
import { ExerciseItem, ExerciseMode, DifficultyLevel } from '../../types';
import { ExerciseRunner } from './ExerciseRunner';
import { CHAPTERS_DATA } from '../../data/courseData';
import {
  HelpCircle, CheckSquare, Shuffle, ArrowRight, Play, BookOpen,
  Filter, Layers, Award, Clock, ArrowLeft
} from 'lucide-react';

export const ExercisesHub: React.FC = () => {
  // Navigation & session state
  const [activeTab, setActiveTab] = useState<'mcq' | 'tf' | 'mixed'>('mcq');
  const [selectedMode, setSelectedMode] = useState<ExerciseMode>('practice');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | DifficultyLevel>('all');
  const [selectedChapter, setSelectedChapter] = useState<'all' | 'chapter-1' | 'chapter-2'>('all');
  const [selectedReading, setSelectedReading] = useState<string>('all');

  // Active running session
  const [activeSession, setActiveSession] = useState<{
    title: string;
    mode: ExerciseMode;
    questions: ExerciseItem[];
  } | null>(null);

  // Filter questions based on controls
  const filterQuestions = (type: 'mcq' | 'tf' | 'mixed') => {
    let pool: ExerciseItem[] = [];
    if (type === 'mcq') pool = [...EXERCISE_MCQS];
    else if (type === 'tf') pool = [...EXERCISE_TFS];
    else pool = [...ALL_EXERCISE_ITEMS];

    return pool.filter(q => {
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const matchChapter = selectedChapter === 'all' || q.chapterId === selectedChapter;
      const matchReading = selectedReading === 'all' || q.lessonId === selectedReading;
      return matchDiff && matchChapter && matchReading;
    });
  };

  const handleStartSession = (customQuestions?: ExerciseItem[], customTitle?: string, customMode?: ExerciseMode) => {
    let qList = customQuestions || filterQuestions(activeTab);
    const modeToUse = customMode || selectedMode;

    if (modeToUse === 'random') {
      qList = [...qList].sort(() => Math.random() - 0.5);
    }

    const titleToUse = customTitle || (
      activeTab === 'mcq'
        ? `Multiple-Choice Exercises (${qList.length} Questions)`
        : activeTab === 'tf'
        ? `True/False Exercises (${qList.length} Questions)`
        : `Mixed Practice Exam (${qList.length} Questions)`
    );

    setActiveSession({
      title: titleToUse,
      mode: modeToUse,
      questions: qList
    });
  };

  // If a session is active, render the ExerciseRunner
  if (activeSession) {
    return (
      <div className="py-2 space-y-4">
        <button
          onClick={() => setActiveSession(null)}
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Exercise Center
        </button>

        <ExerciseRunner
          title={activeSession.title}
          mode={activeSession.mode}
          questions={activeSession.questions}
          onFinish={() => setActiveSession(null)}
        />
      </div>
    );
  }

  const currentPool = filterQuestions(activeTab);

  return (
    <div className="py-2 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Interactive Exercises Center
        </h1>
        <p className="text-base text-slate-600 mt-1">
          Master the content of Part I with comprehensive Multiple-Choice and True/False questions.
        </p>
      </div>

      {/* Main Mode / Type Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Question Type Tabs */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('mcq')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'mcq'
                ? 'bg-white text-blue-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Multiple Choice ({EXERCISE_MCQS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('tf')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'tf'
                ? 'bg-white text-blue-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>True / False ({EXERCISE_TFS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('mixed')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'mixed'
                ? 'bg-white text-blue-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Shuffle className="w-4 h-4" />
            <span>Mixed Practice ({ALL_EXERCISE_ITEMS.length})</span>
          </button>
        </div>

        {/* Practice Mode vs Test Mode Segment */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-sm font-semibold">
          <button
            onClick={() => setSelectedMode('practice')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              selectedMode === 'practice'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Immediate feedback and explanations after each question"
          >
            Practice Mode
          </button>
          <button
            onClick={() => setSelectedMode('test')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              selectedMode === 'test'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Simulate a real test: answers revealed only upon final submission"
          >
            Test Mode
          </button>
          <button
            onClick={() => setSelectedMode('random')}
            className={`px-3.5 py-1.5 rounded-lg transition-colors ${
              selectedMode === 'random'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Randomized questions with no repeats"
          >
            Random Mode
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-slate-700 font-semibold">
          <Filter className="w-4 h-4 text-slate-400" /> Filter:
        </div>

        {/* Chapter Filter */}
        <select
          value={selectedChapter}
          onChange={(e) => {
            setSelectedChapter(e.target.value as any);
            setSelectedReading('all');
          }}
          className="p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
        >
          <option value="all">All Chapters</option>
          <option value="chapter-1">Chapter 1: A First Look at the UK</option>
          <option value="chapter-2">Chapter 2: Traditional Beliefs & Values</option>
        </select>

        {/* Reading Lesson Filter */}
        <select
          value={selectedReading}
          onChange={(e) => setSelectedReading(e.target.value)}
          className="p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
        >
          <option value="all">All Reading Sections</option>
          <option value="reading-1">Reading 1: Country and People</option>
          <option value="reading-2">Reading 2: The Union Jack</option>
          <option value="reading-3">Reading: Attitudes & Stereotypes</option>
          <option value="reading-4">Reading: Multiculturalism & Conservatism</option>
          <option value="reading-5">Reading: Formality, Amateurism & Privacy</option>
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as any)}
          className="p-2 border border-slate-300 rounded-lg bg-white text-slate-800"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy (Facts & Definitions)</option>
          <option value="medium">Medium (Concepts & Differences)</option>
          <option value="hard">Hard (Relationships & Analysis)</option>
        </select>

        {/* Start Filtered Exercise Button */}
        <div className="ml-auto">
          <button
            disabled={currentPool.length === 0}
            onClick={() => handleStartSession()}
            className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-40 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Start Practice ({currentPool.length} questions)</span>
          </button>
        </div>
      </div>

      {/* Structured Category Exercise Packs */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Curated Section Exercise Sets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chapter 1 Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Chapter 1
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {ALL_EXERCISE_ITEMS.filter(q => q.chapterId === 'chapter-1').length} Questions Available
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-1">
                A First Look at the United Kingdom
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Geography, political states, Great Britain vs UK, The Four Nations, dominance of England, and the historical formation of the Union Jack.
              </p>

              {/* Sub-reading quick launcher */}
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    const qs = ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-1');
                    handleStartSession(qs, 'Reading 1: Country & People Exercises');
                  }}
                  className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>Reading 1: Country and People</span>
                  <span className="text-xs text-slate-500">
                    {ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-1').length} Qs →
                  </span>
                </button>

                <button
                  onClick={() => {
                    const qs = ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-2');
                    handleStartSession(qs, 'Reading 2: The Union Jack Exercises');
                  }}
                  className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>Reading 2: History & Meaning of the Union Jack</span>
                  <span className="text-xs text-slate-500">
                    {ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-2').length} Qs →
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  const qs = ALL_EXERCISE_ITEMS.filter(q => q.chapterId === 'chapter-1');
                  handleStartSession(qs, 'Chapter 1 Full Exercise Exam');
                }}
                className="text-base font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
              >
                Practice Entire Chapter 1 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chapter 2 Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Chapter 2
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {ALL_EXERCISE_ITEMS.filter(q => q.chapterId === 'chapter-2').length} Questions Available
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Traditional Beliefs and Values
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                Stereotypes vs modern reality, queuing, multiculturalism, conservatism, being different, formality vs informality, amateurism, and privacy.
              </p>

              {/* Sub-reading quick launcher */}
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    const qs = ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-3');
                    handleStartSession(qs, 'Reading: Attitudes & Stereotypes Exercises');
                  }}
                  className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>Attitudes & Stereotypes</span>
                  <span className="text-xs text-slate-500">
                    {ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-3').length} Qs →
                  </span>
                </button>

                <button
                  onClick={() => {
                    const qs = ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-4');
                    handleStartSession(qs, 'Reading: Multiculturalism & Conservatism Exercises');
                  }}
                  className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>Multiculturalism, Conservatism & Being Different</span>
                  <span className="text-xs text-slate-500">
                    {ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-4').length} Qs →
                  </span>
                </button>

                <button
                  onClick={() => {
                    const qs = ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-5');
                    handleStartSession(qs, 'Reading: Formality, Amateurism & Privacy Exercises');
                  }}
                  className="w-full text-left p-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>Formality, Amateurism, Privacy & Contrasts</span>
                  <span className="text-xs text-slate-500">
                    {ALL_EXERCISE_ITEMS.filter(q => q.lessonId === 'reading-5').length} Qs →
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  const qs = ALL_EXERCISE_ITEMS.filter(q => q.chapterId === 'chapter-2');
                  handleStartSession(qs, 'Chapter 2 Full Exercise Exam');
                }}
                className="text-base font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
              >
                Practice Entire Chapter 2 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Course Comprehensive Examination Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Comprehensive Assessment</div>
          <h3 className="text-2xl font-bold">Complete Part I Exercise Examination</h3>
          <p className="text-sm text-slate-300 max-w-xl">
            Simulate a full course exam with 60 comprehensive Multiple-Choice and True/False questions testing every topic across Part I: The Country of Britain.
          </p>
        </div>

        <button
          onClick={() => handleStartSession(ALL_EXERCISE_ITEMS, 'Part I Full Course Examination', 'test')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-colors shrink-0 shadow-xs"
        >
          Start Full Exam (Test Mode)
        </button>
      </div>
    </div>
  );
};
