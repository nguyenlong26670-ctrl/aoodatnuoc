import React from 'react';
import { useLearning } from '../../context/LearningContext';
import { ALL_QUIZ_QUESTIONS } from '../../data/quizData';
import { FLASHCARD_ITEMS } from '../../data/flashcardData';
import { CHAPTERS_DATA } from '../../data/courseData';
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

export const ReviewCenter: React.FC = () => {
  const {
    wrongQuestionHistory,
    flashcardStatus,
    completedLessonIds,
    navigateToLesson,
    setActiveTab,
    resetProgress,
    overallProgressPercentage
  } = useLearning();

  const wrongQIds = Object.keys(wrongQuestionHistory);
  const missedQuestions = ALL_QUIZ_QUESTIONS.filter(q => wrongQIds.includes(q.id));
  const reviewCards = FLASHCARD_ITEMS.filter(c => flashcardStatus[c.id] === 'review');

  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const incompleteLessons = allReadings.filter(r => !completedLessonIds.includes(r.id));

  return (
    <div className="py-2 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Review Center
          </h1>
          <p className="text-base text-slate-600 mt-1">
            Review quiz mistakes, flashcards flagged for review, and unfinished lessons.
          </p>
        </div>

        <button
          onClick={resetProgress}
          className="px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors self-start sm:self-auto"
        >
          Reset Progress
        </button>
      </div>

      {/* Progress Metric Summary */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Course Mastery</div>
          <div className="text-4xl font-extrabold text-blue-800 mt-1">{overallProgressPercentage}%</div>
          <p className="text-sm text-slate-600 mt-1">Calculated from reading, quizzes, and flashcards.</p>
        </div>

        <div className="flex gap-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center min-w-[100px]">
            <div className="text-2xl font-bold text-slate-900">{missedQuestions.length}</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Quiz Errors</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center min-w-[100px]">
            <div className="text-2xl font-bold text-slate-900">{reviewCards.length}</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Cards to Revise</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center min-w-[100px]">
            <div className="text-2xl font-bold text-slate-900">{completedLessonIds.length}/{allReadings.length}</div>
            <div className="text-xs text-slate-500 font-medium mt-0.5">Lessons Done</div>
          </div>
        </div>
      </div>

      {/* Quiz Mistakes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Quiz Mistake History ({missedQuestions.length})
          </h2>
          {missedQuestions.length > 0 && (
            <button
              onClick={() => setActiveTab('quizzes')}
              className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
            >
              Practice Quizzes <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {missedQuestions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-600">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="font-bold text-base text-slate-900">No Incorrect Questions</div>
            <p className="text-sm text-slate-500 mt-1">You currently have no uncorrected quiz mistakes.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {missedQuestions.map(q => (
              <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 text-base">
                <div className="font-bold text-slate-900">{q.prompt}</div>
                <div className="text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <strong className="text-blue-900">Explanation: </strong> {q.explanation}
                </div>
                <div className="text-xs text-slate-500">
                  Source: {q.sourceReference}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Flashcards to Revise */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Flashcards Needing Review ({reviewCards.length})
          </h2>
          <button
            onClick={() => setActiveTab('flashcards')}
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
          >
            Go to Flashcards <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {reviewCards.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-600">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="font-bold text-base text-slate-900">All Cards Mastered</div>
            <p className="text-sm text-slate-500 mt-1">No cards are currently marked as "Need Review".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviewCards.map(fc => (
              <div key={fc.id} className="bg-white border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="text-xs font-bold text-blue-700 uppercase">{fc.category}</div>
                <div className="text-lg font-bold text-slate-900">{fc.front}</div>
                <p className="text-sm text-slate-700 leading-relaxed">{fc.back}</p>
                {fc.vietnamese && (
                  <div className="text-xs text-slate-500 font-medium">VN: {fc.vietnamese}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Incomplete Lessons */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Remaining Lessons ({incompleteLessons.length})
        </h2>
        <div className="space-y-2.5">
          {incompleteLessons.map(lesson => (
            <div
              key={lesson.id}
              className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <div className="text-base font-bold text-slate-900">{lesson.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">~{lesson.estimatedMinutes} min</div>
              </div>
              <button
                onClick={() => navigateToLesson(lesson.id, undefined, 'visual')}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Study
              </button>
            </div>
          ))}
          {incompleteLessons.length === 0 && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-900 font-semibold text-base">
              All 5 reading lessons have been completed!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
