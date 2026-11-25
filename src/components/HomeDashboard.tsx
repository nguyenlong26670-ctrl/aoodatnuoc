import React from 'react';
import { useLearning } from '../context/LearningContext';
import { CHAPTERS_DATA, COURSE_TITLE } from '../data/courseData';
import { ArrowRight, BookOpen, Award, Sparkles, Key, CheckCircle2 } from 'lucide-react';

interface HomeDashboardProps {
  onOpenChecklist: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({ onOpenChecklist }) => {
  const {
    completedLessonIds,
    currentLessonId,
    navigateToLesson,
    setActiveTab,
    overallProgressPercentage,
    totalLessonsCount
  } = useLearning();

  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const currentLesson = allReadings.find(r => r.id === currentLessonId) || allReadings[0];

  return (
    <div className="space-y-10 py-2">
      {/* Clean Welcome Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-blue-700 uppercase">
            Interactive Learning Course
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3 tracking-tight">
            Study Britain
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-700 mb-4">
            {COURSE_TITLE}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            An educational guide to the geography, nations, political structure, and traditional social values of the United Kingdom, presented with complete content fidelity and interactive visual aids.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigateToLesson(currentLesson.id, undefined, 'visual')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-base font-semibold transition-colors"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('exercises')}
              className="px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-base font-semibold transition-colors"
            >
              Exercises (MCQ & T/F)
            </button>

            <button
              onClick={() => setActiveTab('quizzes')}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-base font-semibold transition-colors"
            >
              Practice Quizzes
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-base font-semibold transition-colors"
            >
              Flashcards
            </button>
          </div>
        </div>
      </div>

      {/* Progress Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Overall Progress</div>
          <div className="text-3xl font-extrabold text-blue-800 mt-2">{overallProgressPercentage}%</div>
          <div className="text-sm text-slate-600 mt-1">Weighted completion across course</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Lessons Completed</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">
            {completedLessonIds.length} <span className="text-xl font-normal text-slate-400">/ {totalLessonsCount}</span>
          </div>
          <div className="text-sm text-slate-600 mt-1">5 core reading sections</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Learning Modes</div>
          <div className="text-xl font-bold text-slate-900 mt-2">Visual & Full Content</div>
          <div className="text-sm text-slate-600 mt-1">Switch anytime from top bar</div>
        </div>
      </div>

      {/* Course Chapters */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Course Chapters</h2>
          <p className="text-base text-slate-600 mt-1">Select a chapter or lesson to begin studying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHAPTERS_DATA.map(chapter => (
            <div
              key={chapter.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Chapter {chapter.number}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 mb-2">
                  {chapter.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  {chapter.description}
                </p>

                {/* Lesson List */}
                <div className="space-y-2 mb-6">
                  {chapter.readings.map(reading => {
                    const isDone = completedLessonIds.includes(reading.id);
                    return (
                      <button
                        key={reading.id}
                        onClick={() => navigateToLesson(reading.id, undefined, 'visual')}
                        className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 shrink-0 ${isDone ? 'text-emerald-600' : 'text-slate-300'}`}
                          />
                          <span className="text-base font-semibold text-slate-800">
                            {reading.title}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 shrink-0 font-medium">
                          ~{reading.estimatedMinutes} min
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => navigateToLesson(chapter.readings[0].id, undefined, 'visual')}
                  className="text-base font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1.5"
                >
                  Start Chapter <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('quizzes')}
                  className="text-sm font-medium text-slate-500 hover:text-slate-800"
                >
                  Quiz →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
