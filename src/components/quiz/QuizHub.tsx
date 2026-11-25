import React, { useState } from 'react';
import { QUIZ_SETS, ALL_QUIZ_QUESTIONS } from '../../data/quizData';
import { QuizRunner } from './QuizRunner';
import { useLearning } from '../../context/LearningContext';
import { Play, ArrowLeft } from 'lucide-react';

export const QuizHub: React.FC = () => {
  const { quizScores } = useLearning();
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);

  if (activeQuizId) {
    const selectedSet = QUIZ_SETS.find(s => s.id === activeQuizId);
    if (selectedSet) {
      const questions = ALL_QUIZ_QUESTIONS.filter(q => selectedSet.questionIds.includes(q.id));
      return (
        <div className="py-2 space-y-4">
          <button
            onClick={() => setActiveQuizId(null)}
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Quizzes
          </button>
          <QuizRunner
            quizId={selectedSet.id}
            title={selectedSet.title}
            description={selectedSet.description}
            questions={questions}
            onFinish={() => setActiveQuizId(null)}
          />
        </div>
      );
    }
  }

  const quickChecks = QUIZ_SETS.filter(q => q.id.startsWith('quick-'));
  const comprehensiveQuizzes = QUIZ_SETS.filter(q => !q.id.startsWith('quick-'));

  return (
    <div className="py-2 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Quizzes & Practice
        </h1>
        <p className="text-base text-slate-600 mt-1">
          Select a quick section check, chapter quiz, or take the full course examination.
        </p>
      </div>

      {/* Quick Section Checks */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Section Quick Checks (5–10 min)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickChecks.map(set => {
            const scoreRecord = quizScores[set.id];
            return (
              <div
                key={set.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                      {set.questionIds.length} Questions
                    </span>
                    {scoreRecord && (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        Score: {scoreRecord.score}/{scoreRecord.totalQuestions}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{set.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{set.description}</p>
                </div>

                <button
                  onClick={() => setActiveQuizId(set.id)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-800 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5" /> {scoreRecord ? 'Retake Quiz' : 'Start Quiz'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehensive Quizzes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          Chapter Quizzes & Comprehensive Exam
        </h2>
        <div className="space-y-4">
          {comprehensiveQuizzes.map(set => {
            const scoreRecord = quizScores[set.id];
            const isExam = set.id === 'quiz-part-1-exam';
            return (
              <div
                key={set.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {isExam ? 'Final Exam' : 'Chapter Quiz'}
                    </span>
                    <span className="text-xs text-slate-500">
                      {set.questionIds.length} Total Questions
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{set.title}</h3>
                  <p className="text-sm text-slate-600">{set.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {scoreRecord && (
                    <div className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded">
                      Best: {scoreRecord.score}/{scoreRecord.totalQuestions}
                    </div>
                  )}
                  <button
                    onClick={() => setActiveQuizId(set.id)}
                    className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    {scoreRecord ? 'Retake' : 'Start'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
