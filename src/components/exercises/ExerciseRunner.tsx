import React, { useState, useEffect } from 'react';
import { ExerciseItem, ExerciseMCQ, ExerciseTF, ExerciseMode, ExerciseSessionResult } from '../../types';
import { useLearning } from '../../context/LearningContext';
import {
  CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw,
  Clock, Award, HelpCircle, BookOpen, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExerciseRunnerProps {
  title: string;
  subtitle?: string;
  mode: ExerciseMode;
  questions: ExerciseItem[];
  onFinish?: () => void;
  onJumpToLesson?: (lessonId: string) => void;
}

export const ExerciseRunner: React.FC<ExerciseRunnerProps> = ({
  title,
  subtitle,
  mode,
  questions,
  onFinish,
  onJumpToLesson
}) => {
  const { navigateToLesson } = useLearning();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, any>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [activeQuestionList, setActiveQuestionList] = useState<ExerciseItem[]>(questions);

  // Timer
  useEffect(() => {
    if (isTestSubmitted) return;
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTestSubmitted]);

  // Update question list if questions prop changes
  useEffect(() => {
    setActiveQuestionList(questions);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setIsTestSubmitted(false);
    setSecondsElapsed(0);
  }, [questions, mode]);

  const total = activeQuestionList.length;
  const currentQ = activeQuestionList[currentIndex];

  if (!currentQ || total === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500">
        <p className="text-lg font-bold text-slate-800">No questions found for this selection.</p>
        <button
          onClick={onFinish}
          className="mt-4 px-6 py-2.5 bg-blue-700 text-white font-semibold rounded-lg text-sm"
        >
          Return to Exercise Hub
        </button>
      </div>
    );
  }

  // Handle Answer Selection
  const handleSelectOption = (idx: number) => {
    if (mode === 'practice' && submittedQuestions[currentQ.id]) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleSelectTF = (val: boolean) => {
    if (mode === 'practice' && submittedQuestions[currentQ.id]) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: val }));
  };

  // Check Answer in Practice Mode
  const handleCheckAnswer = () => {
    if (selectedAnswers[currentQ.id] === undefined) return;
    setSubmittedQuestions(prev => ({ ...prev, [currentQ.id]: true }));
  };

  // Try Again in Practice Mode
  const handleTryAgain = () => {
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    setSubmittedQuestions(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const isAnswerCorrect = (q: ExerciseItem, ans: any): boolean => {
    if (ans === undefined) return false;
    return ans === q.correctAnswer;
  };

  const currentAnswer = selectedAnswers[currentQ.id];
  const isCurrentSubmitted = mode === 'practice' ? !!submittedQuestions[currentQ.id] : isTestSubmitted;
  const isCurrentCorrect = isAnswerCorrect(currentQ, currentAnswer);

  // Submit Test Mode
  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
    let correctCount = 0;
    activeQuestionList.forEach(q => {
      if (isAnswerCorrect(q, selectedAnswers[q.id])) {
        correctCount++;
      }
    });
    if (correctCount / total >= 0.8) {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
    }
  };

  // Performance Grading
  const getPerformanceGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'Excellent' as const, style: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (percentage >= 80) return { grade: 'Very Good' as const, style: 'text-blue-700 bg-blue-50 border-blue-300' };
    if (percentage >= 70) return { grade: 'Good' as const, style: 'text-cyan-700 bg-cyan-50 border-cyan-300' };
    if (percentage >= 60) return { grade: 'Needs More Practice' as const, style: 'text-amber-800 bg-amber-50 border-amber-300' };
    return { grade: 'Review the Lessons' as const, style: 'text-rose-700 bg-rose-50 border-rose-300' };
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  // --- RESULTS SCREEN (For Test Mode & Finished Practice) ---
  if (isTestSubmitted || (mode === 'practice' && currentIndex === total - 1 && submittedQuestions[currentQ.id] && isTestSubmitted)) {
    let correctCount = 0;
    const missedList: ExerciseItem[] = [];

    activeQuestionList.forEach(q => {
      if (isAnswerCorrect(q, selectedAnswers[q.id])) {
        correctCount++;
      } else {
        missedList.push(q);
      }
    });

    const incorrectCount = total - correctCount;
    const percentage = Math.round((correctCount / total) * 100);
    const { grade, style } = getPerformanceGrade(percentage);

    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="text-sm font-bold uppercase tracking-wider text-blue-700">
            {mode === 'test' ? 'Test Completed' : 'Exercise Results'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{title}</h2>
          <p className="text-base text-slate-600">Review your final performance breakdown.</p>
        </div>

        {/* Score Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-blue-800">
              {percentage}%
            </div>
            <div className="text-base font-semibold text-slate-700 mt-1">
              {correctCount} Correct / {incorrectCount} Incorrect
            </div>
            <div className="text-sm text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 mt-2">
              <Clock className="w-4 h-4" /> Time Taken: {formatTime(secondsElapsed)}
            </div>
          </div>

          <div className={`px-5 py-3 rounded-xl border text-center font-bold text-lg sm:text-xl ${style}`}>
            <span className="text-xs block font-semibold uppercase tracking-wider mb-0.5">Rating</span>
            {grade}
          </div>
        </div>

        {/* Incorrect Questions Review */}
        {missedList.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Review Missed Questions ({missedList.length})
            </h3>

            <div className="space-y-4">
              {missedList.map((mq, idx) => {
                const userAns = selectedAnswers[mq.id];
                return (
                  <div key={mq.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      {mq.type === 'mcq' ? 'Multiple Choice' : 'True / False'} • {mq.sourceSection}
                    </div>

                    <div className="text-base font-bold text-slate-900">
                      {mq.type === 'mcq' ? (mq as ExerciseMCQ).question : (mq as ExerciseTF).statement}
                    </div>

                    {mq.type === 'mcq' && (
                      <div className="text-sm space-y-1">
                        <div className="text-rose-700 font-medium">
                          Your answer: Option {userAns !== undefined ? ['A', 'B', 'C', 'D'][userAns] : 'None'} ({(mq as ExerciseMCQ).options[userAns] || 'Unanswered'})
                        </div>
                        <div className="text-emerald-800 font-bold">
                          Correct answer: Option {['A', 'B', 'C', 'D'][(mq as ExerciseMCQ).correctAnswer]} ({(mq as ExerciseMCQ).options[(mq as ExerciseMCQ).correctAnswer]})
                        </div>
                      </div>
                    )}

                    {mq.type === 'tf' && (
                      <div className="text-sm space-y-1">
                        <div className="text-rose-700 font-medium">
                          Your answer: {userAns !== undefined ? (userAns ? 'TRUE' : 'FALSE') : 'Unanswered'}
                        </div>
                        <div className="text-emerald-800 font-bold">
                          Correct answer: {(mq as ExerciseTF).correctAnswer ? 'TRUE' : 'FALSE'}
                        </div>
                        {!(mq as ExerciseTF).correctAnswer && (mq as ExerciseTF).correctedStatement && (
                          <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 mt-1">
                            <strong className="text-blue-800">Corrected statement:</strong> {(mq as ExerciseTF).correctedStatement}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="text-sm text-slate-700 pt-1 border-t border-slate-200">
                      <strong>Explanation:</strong> {mq.explanation}
                    </div>

                    <div className="pt-1 flex justify-end">
                      <button
                        onClick={() => navigateToLesson(mq.lessonId, mq.sectionId, 'visual')}
                        className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" /> Read Lesson Section →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-200">
          {missedList.length > 0 && (
            <button
              onClick={() => {
                setActiveQuestionList(missedList);
                setCurrentIndex(0);
                setSelectedAnswers({});
                setSubmittedQuestions({});
                setIsTestSubmitted(false);
                setSecondsElapsed(0);
              }}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-base font-semibold transition-colors"
            >
              Practice Only Mistakes ({missedList.length})
            </button>
          )}

          <button
            onClick={() => {
              setActiveQuestionList(questions);
              setCurrentIndex(0);
              setSelectedAnswers({});
              setSubmittedQuestions({});
              setIsTestSubmitted(false);
              setSecondsElapsed(0);
            }}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-semibold transition-colors"
          >
            Retake Entire Exercise
          </button>

          {onFinish && (
            <button
              onClick={onFinish}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-base font-semibold transition-colors"
            >
              Back to Exercise Hub
            </button>
          )}
        </div>
      </div>
    );
  }

  // --- ACTIVE EXERCISE RUNNER SCREEN ---
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
      {/* Top Header & Progress */}
      <div className="space-y-3 pb-4 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
          <div>
            <span className="font-bold text-slate-900">{title}</span>
            <span className="mx-2">•</span>
            <span className="uppercase text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
              {mode.toUpperCase()} MODE
            </span>
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-1 font-mono text-slate-600">
              <Clock className="w-4 h-4 text-slate-400" /> {formatTime(secondsElapsed)}
            </span>
            <span>
              Question <strong>{currentIndex + 1}</strong> of <strong>{total}</strong>
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-blue-700 h-1.5 rounded-full transition-all duration-200"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Meta Tag: Difficulty & Section Reference */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-slate-700 truncate max-w-sm">
          {currentQ.sectionTitle}
        </span>
        <span className={`font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
          currentQ.difficulty === 'easy' ? 'text-emerald-700 bg-emerald-50' :
          currentQ.difficulty === 'medium' ? 'text-blue-700 bg-blue-50' :
          'text-purple-700 bg-purple-50'
        }`}>
          {currentQ.difficulty}
        </span>
      </div>

      {/* QUESTION PROMPT (21-24px Large Readable) */}
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {currentQ.type === 'mcq'
            ? (currentQ as ExerciseMCQ).question
            : `True or False: "${(currentQ as ExerciseTF).statement}"`
          }
        </h3>
      </div>

      {/* QUESTION INTERFACE: MCQ */}
      {currentQ.type === 'mcq' && (
        <div className="space-y-3 pt-2">
          {(currentQ as ExerciseMCQ).options.map((opt, idx) => {
            const isSelected = currentAnswer === idx;
            const isCorrect = (currentQ as ExerciseMCQ).correctAnswer === idx;

            let btnStyle = "bg-white border-slate-300 hover:border-slate-400 text-slate-800";

            if (isCurrentSubmitted) {
              if (isCorrect) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
              } else if (isSelected) {
                btnStyle = "bg-red-50 border-red-400 text-red-950";
              }
            } else if (isSelected) {
              btnStyle = "bg-blue-50 border-blue-600 text-blue-950 font-semibold";
            }

            const letter = ['A', 'B', 'C', 'D'][idx];

            return (
              <button
                key={idx}
                disabled={isCurrentSubmitted && mode === 'practice'}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left text-base sm:text-lg transition-colors flex items-center justify-between ${btnStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {letter}
                  </span>
                  <span className="mt-0.5">{opt}</span>
                </div>
                {isCurrentSubmitted && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-3" />
                )}
                {isCurrentSubmitted && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-600 shrink-0 ml-3" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* QUESTION INTERFACE: TRUE / FALSE */}
      {currentQ.type === 'tf' && (
        <div className="grid grid-cols-2 gap-4 pt-2">
          {[true, false].map((val) => {
            const isSelected = currentAnswer === val;
            const isCorrect = (currentQ as ExerciseTF).correctAnswer === val;

            let btnStyle = "bg-white border-slate-300 hover:border-slate-400 text-slate-800";

            if (isCurrentSubmitted) {
              if (isCorrect) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
              } else if (isSelected) {
                btnStyle = "bg-red-50 border-red-400 text-red-950";
              }
            } else if (isSelected) {
              btnStyle = "bg-blue-50 border-blue-600 text-blue-950 font-bold";
            }

            return (
              <button
                key={val ? 'true' : 'false'}
                disabled={isCurrentSubmitted && mode === 'practice'}
                onClick={() => handleSelectTF(val)}
                className={`p-6 rounded-xl border text-center text-lg sm:text-xl font-bold transition-colors ${btnStyle}`}
              >
                {val ? 'TRUE' : 'FALSE'}
              </button>
            );
          })}
        </div>
      )}

      {/* PRACTICE MODE FEEDBACK BOX (Appears after Check Answer) */}
      {mode === 'practice' && isCurrentSubmitted && (
        <div className={`p-5 rounded-xl border text-base space-y-2 ${
          isCurrentCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-red-50 border-red-300 text-red-950'
        }`}>
          <div className="font-bold flex items-center gap-2 text-lg">
            {isCurrentCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-700" /> Correct!
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-700" /> Incorrect
              </>
            )}
          </div>

          <p className="leading-relaxed">{currentQ.explanation}</p>

          {/* Corrected statement for False T/F questions */}
          {currentQ.type === 'tf' && !(currentQ as ExerciseTF).correctAnswer && (currentQ as ExerciseTF).correctedStatement && (
            <div className="p-3 bg-white border border-slate-200 rounded-lg text-slate-800 text-sm mt-2">
              <strong className="text-blue-800">Correct statement:</strong> {(currentQ as ExerciseTF).correctedStatement}
            </div>
          )}

          <div className="text-xs text-slate-600 pt-1">
            Source: {currentQ.sourceSection}
          </div>
        </div>
      )}

      {/* FOOTER CONTROLS & NAVIGATION */}
      <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Previous Button */}
        <button
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>

        {/* Middle action buttons */}
        <div className="flex items-center gap-2">
          {mode === 'practice' && !isCurrentSubmitted && (
            <button
              disabled={currentAnswer === undefined}
              onClick={handleCheckAnswer}
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-40 disabled:pointer-events-none text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Check Answer
            </button>
          )}

          {mode === 'practice' && isCurrentSubmitted && !isCurrentCorrect && (
            <button
              onClick={handleTryAgain}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-sm font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          )}
        </div>

        {/* Next / Submit Button */}
        {currentIndex < total - 1 ? (
          <button
            onClick={() => setCurrentIndex(prev => prev + 1)}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={mode === 'test' ? handleSubmitTest : () => setIsTestSubmitted(true)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-colors shadow-xs"
          >
            Finish & View Results <Award className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
