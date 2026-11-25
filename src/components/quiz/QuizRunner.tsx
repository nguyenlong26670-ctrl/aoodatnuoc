import React, { useState, useEffect } from 'react';
import { QuizQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, MatchingQuestion, OrderingQuestion, QuizResult } from '../../types';
import { useLearning } from '../../context/LearningContext';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, ArrowUp, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizRunnerProps {
  quizId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  onFinish?: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  quizId,
  title,
  description,
  questions,
  onFinish
}) => {
  const { recordQuizResult } = useLearning();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [submittedCurrent, setSubmittedCurrent] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [matchingState, setMatchingState] = useState<Record<string, string>>({});
  const [orderingState, setOrderingState] = useState<{ id: string; text: string; correctOrder: number }[]>([]);
  const [fillBlankInput, setFillBlankInput] = useState('');
  const [incorrectList, setIncorrectList] = useState<QuizQuestion[]>([]);

  const currentQ = questions[currentIndex];
  const total = questions.length;

  useEffect(() => {
    setSubmittedCurrent(false);
    setFillBlankInput('');
    setMatchingState({});
    if (currentQ?.type === 'ordering') {
      const shuffled = [...currentQ.items].sort(() => Math.random() - 0.5);
      setOrderingState(shuffled);
    }
  }, [currentIndex, currentQ]);

  if (!currentQ || total === 0) {
    return <div className="p-8 text-center text-slate-500">No questions available.</div>;
  }

  const handleSelectOption = (idx: number) => {
    if (submittedCurrent) return;
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleSelectTF = (val: boolean) => {
    if (submittedCurrent) return;
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: val }));
  };

  const handleMoveOrderItem = (index: number, direction: 'up' | 'down') => {
    if (submittedCurrent) return;
    const newItems = [...orderingState];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIdx];
    newItems[targetIdx] = temp;
    setOrderingState(newItems);
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: newItems.map(i => i.id) }));
  };

  const handleSelectMatching = (left: string, right: string) => {
    if (submittedCurrent) return;
    const updated = { ...matchingState, [left]: right };
    setMatchingState(updated);
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: updated }));
  };

  const isCurrentCorrect = (): boolean => {
    const ans = userAnswers[currentQ.id];
    if (currentQ.type === 'multiple-choice') {
      return ans === currentQ.correctAnswer;
    }
    if (currentQ.type === 'true-false') {
      return ans === currentQ.correctAnswer;
    }
    if (currentQ.type === 'fill-blank') {
      const cleanInput = fillBlankInput.trim().toLowerCase();
      return currentQ.acceptedAnswers.some(a => a.toLowerCase().trim() === cleanInput);
    }
    if (currentQ.type === 'matching') {
      return currentQ.pairs.every(p => matchingState[p.left] === p.right);
    }
    if (currentQ.type === 'ordering') {
      return orderingState.every((item, i) => item.correctOrder === i + 1);
    }
    return false;
  };

  const handleSubmitQuestion = () => {
    if (currentQ.type === 'fill-blank') {
      setUserAnswers(prev => ({ ...prev, [currentQ.id]: fillBlankInput }));
    }
    setSubmittedCurrent(true);
  };

  const handleNextOrFinish = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex(prev => prev + 1);
    } else {
      let score = 0;
      const missed: QuizQuestion[] = [];
      const missedIds: string[] = [];

      questions.forEach(q => {
        let correct = false;
        const ans = userAnswers[q.id];
        if (q.type === 'multiple-choice' && ans === q.correctAnswer) correct = true;
        if (q.type === 'true-false' && ans === q.correctAnswer) correct = true;
        if (q.type === 'fill-blank') {
          const val = (ans || '').toString().trim().toLowerCase();
          if (q.acceptedAnswers.some(a => a.toLowerCase().trim() === val)) correct = true;
        }
        if (q.type === 'matching') {
          if (ans && q.pairs.every(p => ans[p.left] === p.right)) correct = true;
        }
        if (q.type === 'ordering') {
          if (ans && q.items.every((item, i) => item.correctOrder === (q.items.findIndex(x => x.id === ans[i]) + 1))) {
            correct = true;
          }
        }

        if (correct) {
          score++;
        } else {
          missed.push(q);
          missedIds.push(q.id);
        }
      });

      setIncorrectList(missed);
      setIsCompleted(true);

      const result: QuizResult = {
        quizId,
        score,
        totalQuestions: total,
        date: new Date().toISOString(),
        incorrectQuestionIds: missedIds
      };
      recordQuizResult(result);

      if (score / total >= 0.8) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRetryMissed = () => {
    if (incorrectList.length > 0) {
      setCurrentIndex(0);
      setUserAnswers({});
      setSubmittedCurrent(false);
      setIsCompleted(false);
    }
  };

  const handleRestartAll = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmittedCurrent(false);
    setIsCompleted(false);
    setIncorrectList([]);
  };

  // Completed Screen
  if (isCompleted) {
    const finalScore = total - incorrectList.length;
    const percentage = Math.round((finalScore / total) * 100);

    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Quiz Completed</h3>
        <p className="text-base text-slate-600">{title}</p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <div className="text-4xl sm:text-5xl font-extrabold text-blue-700">
            {finalScore} <span className="text-2xl text-slate-400 font-normal">/ {total}</span>
          </div>
          <div className="text-lg font-bold text-slate-800 mt-2">
            Score: {percentage}%
          </div>
        </div>

        {/* Missed questions review */}
        {incorrectList.length > 0 && (
          <div className="text-left space-y-3 pt-4 border-t border-slate-200">
            <h4 className="text-base font-bold text-slate-900">
              Review Missed Questions ({incorrectList.length})
            </h4>
            <div className="space-y-3">
              {incorrectList.map((mq, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-sm">
                  <div className="font-semibold text-slate-900">{mq.prompt}</div>
                  <div className="text-slate-700">
                    <strong className="text-blue-800">Explanation: </strong> {mq.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {incorrectList.length > 0 && (
            <button
              onClick={handleRetryMissed}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-base font-semibold transition-colors"
            >
              Retry Missed
            </button>
          )}
          <button
            onClick={handleRestartAll}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-semibold transition-colors"
          >
            Retake Quiz
          </button>
          {onFinish && (
            <button
              onClick={onFinish}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-base font-semibold transition-colors"
            >
              Finish
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-sm text-slate-500">
        <span className="font-semibold text-slate-800">{title}</span>
        <span>
          Question <strong>{currentIndex + 1}</strong> of <strong>{total}</strong>
        </span>
      </div>

      {/* Question Prompt (21-24px Large Readable) */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
        {currentQ.prompt}
      </h3>

      {/* Multiple Choice Options (18px readable text) */}
      {currentQ.type === 'multiple-choice' && (
        <div className="space-y-3">
          {(currentQ as MultipleChoiceQuestion).options.map((opt, idx) => {
            const isSelected = userAnswers[currentQ.id] === idx;
            const isCorrect = (currentQ as MultipleChoiceQuestion).correctAnswer === idx;

            let btnStyle = "bg-white border-slate-300 hover:border-slate-400 text-slate-800";
            if (submittedCurrent) {
              if (isCorrect) {
                btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
              } else if (isSelected) {
                btnStyle = "bg-red-50 border-red-400 text-red-950";
              }
            } else if (isSelected) {
              btnStyle = "bg-blue-50 border-blue-600 text-blue-950 font-semibold";
            }

            return (
              <button
                key={idx}
                disabled={submittedCurrent}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left text-base sm:text-lg transition-colors flex items-center justify-between ${btnStyle}`}
              >
                <span>{opt}</span>
                {submittedCurrent && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-3" />}
                {submittedCurrent && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0 ml-3" />}
              </button>
            );
          })}
        </div>
      )}

      {/* True / False */}
      {currentQ.type === 'true-false' && (
        <div className="grid grid-cols-2 gap-4">
          {[true, false].map((val) => {
            const isSelected = userAnswers[currentQ.id] === val;
            const isCorrect = (currentQ as TrueFalseQuestion).correctAnswer === val;

            let btnStyle = "bg-white border-slate-300 hover:border-slate-400 text-slate-800";
            if (submittedCurrent) {
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
                disabled={submittedCurrent}
                onClick={() => handleSelectTF(val)}
                className={`p-6 rounded-xl border text-center text-lg sm:text-xl font-bold transition-colors ${btnStyle}`}
              >
                {val ? 'TRUE' : 'FALSE'}
              </button>
            );
          })}
        </div>
      )}

      {/* Fill in the Blank */}
      {currentQ.type === 'fill-blank' && (
        <div className="space-y-3">
          <input
            type="text"
            disabled={submittedCurrent}
            value={fillBlankInput}
            onChange={(e) => setFillBlankInput(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-4 border border-slate-300 rounded-xl text-lg focus:outline-none focus:border-blue-600"
          />
          {(currentQ as FillBlankQuestion).hint && !submittedCurrent && (
            <div className="text-sm text-slate-500">
              Hint: {(currentQ as FillBlankQuestion).hint}
            </div>
          )}
        </div>
      )}

      {/* Matching */}
      {currentQ.type === 'matching' && (
        <div className="space-y-3">
          {(currentQ as MatchingQuestion).pairs.map((p, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-base">
              <span className="font-semibold text-slate-900">{p.left}</span>
              <select
                disabled={submittedCurrent}
                value={matchingState[p.left] || ''}
                onChange={(e) => handleSelectMatching(p.left, e.target.value)}
                className="p-2.5 border border-slate-300 rounded-lg text-sm bg-white"
              >
                <option value="">-- Select match --</option>
                {(currentQ as MatchingQuestion).pairs.map((opt, oIdx) => (
                  <option key={oIdx} value={opt.right}>{opt.right}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Ordering */}
      {currentQ.type === 'ordering' && (
        <div className="space-y-2.5">
          <div className="text-sm text-slate-600">Arrange chronologically from earliest (top) to latest (bottom):</div>
          {orderingState.map((item, idx) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl text-base">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                  {idx + 1}
                </span>
                <span className="text-slate-800 font-medium">{item.text}</span>
              </div>
              {!submittedCurrent && (
                <div className="flex items-center gap-2">
                  <button
                    disabled={idx === 0}
                    onClick={() => handleMoveOrderItem(idx, 'up')}
                    className="p-1.5 rounded hover:bg-slate-200 disabled:opacity-30"
                  >
                    <ArrowUp className="w-4 h-4 text-slate-700" />
                  </button>
                  <button
                    disabled={idx === orderingState.length - 1}
                    onClick={() => handleMoveOrderItem(idx, 'down')}
                    className="p-1.5 rounded hover:bg-slate-200 disabled:opacity-30"
                  >
                    <ArrowDown className="w-4 h-4 text-slate-700" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Immediate Feedback */}
      {submittedCurrent && (
        <div className={`p-5 rounded-xl border text-base ${
          isCurrentCorrect() ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-red-50 border-red-300 text-red-950'
        }`}>
          <div className="font-bold flex items-center gap-2 mb-2 text-lg">
            {isCurrentCorrect() ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-700" /> Correct
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-700" /> Incorrect
              </>
            )}
          </div>
          <p className="leading-relaxed mb-2">{currentQ.explanation}</p>
          <div className="text-sm text-slate-600">
            Source: {currentQ.sourceReference}
          </div>
        </div>
      )}

      {/* Bottom Button */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        {!submittedCurrent ? (
          <button
            onClick={handleSubmitQuestion}
            className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-base font-semibold transition-colors"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNextOrFinish}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-base font-semibold transition-colors"
          >
            <span>{currentIndex + 1 < total ? 'Next Question' : 'View Results'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
