import React, { useState } from 'react';
import { ReadingLesson } from '../../types';
import { useLearning } from '../../context/LearningContext';
import { CHAPTERS_DATA } from '../../data/courseData';
import { BritishIslesDiagram } from './BritishIslesDiagram';
import { FourNationsDiagram } from './FourNationsDiagram';
import { UnionJackTimeline } from './UnionJackTimeline';
import { AttitudesConceptMap } from './AttitudesConceptMap';
import { ComparisonCards } from './ComparisonCards';
import {
  ChevronDown, ChevronUp, CheckCircle2, Clock, Eye,
  ArrowLeft, ArrowRight, BookOpen, Award
} from 'lucide-react';

interface LessonViewProps {
  lesson: ReadingLesson;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  const {
    completedLessonIds,
    toggleLessonCompleted,
    setActiveTab,
    setLearningMode,
    navigateToLesson
  } = useLearning();

  // Accordion state
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => setCollapsedSections({});
  const collapseAll = () => {
    const allIds: Record<string, boolean> = {};
    lesson.sections.forEach(s => {
      allIds[s.id] = true;
    });
    setCollapsedSections(allIds);
  };

  const isCompleted = completedLessonIds.includes(lesson.id);

  // Find previous and next readings
  const allReadings = CHAPTERS_DATA.flatMap(ch => ch.readings);
  const currentIndex = allReadings.findIndex(r => r.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allReadings[currentIndex - 1] : null;
  const nextLesson = currentIndex < allReadings.length - 1 ? allReadings[currentIndex + 1] : null;

  // Helper to render special interactive visual components
  const renderInteractiveComponent = (type?: string) => {
    switch (type) {
      case 'british-isles-diagram':
        return <BritishIslesDiagram />;
      case 'four-nations-diagram':
        return <FourNationsDiagram />;
      case 'union-jack-timeline':
        return <UnionJackTimeline />;
      case 'attitudes-diagram':
        return <AttitudesConceptMap />;
      case 'comparison-cards':
        return <ComparisonCards />;
      default:
        return null;
    }
  };

  return (
    <div className="py-2 space-y-8">
      {/* Lesson Header Area */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
            <span>{lesson.chapterId === 'chapter-1' ? 'Chapter 1' : 'Chapter 2'}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-slate-400" /> ~{lesson.estimatedMinutes} min
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setLearningMode('full');
                setActiveTab('full-content');
              }}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-4 h-4" /> Full Text Mode
            </button>
            <button
              onClick={() => toggleLessonCompleted(lesson.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Completed' : 'Mark as Done'}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p className="text-lg text-slate-600 mt-2 leading-relaxed">
            {lesson.subtitle}
          </p>
        )}

        {/* Global Expand / Collapse Controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-sm">
          <span className="text-slate-500">
            {lesson.sections.length} Learning Sections
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="text-blue-700 hover:text-blue-900 font-semibold"
            >
              Expand All
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={collapseAll}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Main Lesson Content Sections (Natural Digital Textbook Layout) */}
      <div className="space-y-8">
        {lesson.sections.map(section => {
          const isCollapsed = collapsedSections[section.id];
          return (
            <section
              key={section.id}
              id={section.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-20"
            >
              {/* Section Header Bar */}
              <div
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between cursor-pointer select-none pb-4 border-b border-slate-100 group"
              >
                <div className="flex items-baseline gap-3">
                  {section.number && (
                    <span className="text-xl font-bold text-blue-700 font-mono">
                      {section.number}.
                    </span>
                  )}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-400 group-hover:text-slate-700 p-1">
                  {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </div>
              </div>

              {/* Section Body */}
              {!isCollapsed && (
                <div className="pt-6 space-y-6">
                  {/* Key Distinction if present */}
                  {section.keyDistinction && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <div className="text-base font-bold text-slate-900 mb-3">
                        {section.keyDistinction.title}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.keyDistinction.items.map((it, idx) => (
                          <div key={idx} className="bg-white border border-slate-200 p-3.5 rounded-lg">
                            <div className="font-bold text-slate-900 text-base">{it.label}</div>
                            <div className="text-slate-700 text-sm mt-0.5">{it.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Subsections */}
                  {section.subsections.map(sub => (
                    <div key={sub.id} className="space-y-3">
                      {sub.title && (
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 pt-2">
                          {sub.badge && (
                            <span className="text-sm px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold">
                              {sub.badge}
                            </span>
                          )}
                          {sub.title}
                        </h3>
                      )}

                      {/* Main Bullets - Natural Reading Flow with 18px body text */}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="space-y-3 pl-1 text-[18px] text-slate-800 leading-relaxed">
                          {sub.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Lettered Subsections (e.g. a. Driving, b. Buses, etc.) */}
                      {sub.subsections && sub.subsections.length > 0 && (
                        <div className="space-y-4 pt-2 pl-2 sm:pl-4">
                          {sub.subsections.map((nest, nIdx) => (
                            <div key={nIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                              <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                                {nest.letter && (
                                  <span className="text-sm font-bold text-blue-700 font-mono">
                                    {nest.letter}.
                                  </span>
                                )}
                                {nest.title}
                              </h4>
                              <ul className="space-y-2 pl-1 text-[17px] text-slate-800 leading-relaxed">
                                {nest.bullets.map((nb, nbIdx) => (
                                  <li key={nbIdx} className="flex items-start gap-2.5">
                                    <span className="text-slate-400 font-bold">•</span>
                                    <span>{nb}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Idea Callout */}
                      {sub.keyIdea && (
                        <div className="bg-blue-50/60 border-l-4 border-blue-600 p-4 rounded-r-xl text-[17px] text-slate-900 my-4">
                          <strong>Key idea:</strong> {sub.keyIdea}
                        </div>
                      )}

                      {/* Footnote / Source Note */}
                      {sub.note && (
                        <div className="text-sm text-slate-500 italic bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                          <strong>Note:</strong> {sub.note}
                        </div>
                      )}

                      {/* Interactive Visual Supplement */}
                      {sub.componentType && (
                        <div className="pt-4">
                          {renderInteractiveComponent(sub.componentType)}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Summary Table if present */}
                  {section.summaryTable && (
                    <div className="mt-6 border border-slate-200 rounded-xl overflow-hidden">
                      {section.summaryTable.title && (
                        <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                          {section.summaryTable.title}
                        </div>
                      )}
                      <div className="overflow-x-auto">
                        <table className="w-full text-base text-left">
                          <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                              {section.summaryTable.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-4 font-bold text-slate-900">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-800">
                            {section.summaryTable.rows.map((r, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50/60">
                                {r.map((cell, cIdx) => (
                                  <td key={cIdx} className={`p-4 ${cIdx === 0 ? 'font-bold text-slate-900' : ''}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Vocabulary Section if present */}
                  {section.vocabularyItems && (
                    <div className="pt-6 border-t border-slate-200">
                      <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Important Vocabulary
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.vocabularyItems.map((vocab, vIdx) => (
                          <div key={vIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-base text-slate-900">{vocab.term}</span>
                              {vocab.vietnamese && (
                                <span className="text-xs font-semibold text-blue-800 bg-blue-100/70 px-2 py-0.5 rounded">
                                  {vocab.vietnamese}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-slate-600 mt-1 leading-normal">{vocab.definition}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Concept / Main Conclusion */}
                  {section.keyConcept && (
                    <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded-r-xl text-base text-slate-900 font-medium">
                      <strong>Key concept:</strong> {section.keyConcept}
                    </div>
                  )}

                  {section.mainConclusion && (
                    <div className="bg-slate-900 text-white rounded-xl p-5 text-base leading-relaxed">
                      <strong className="text-cyan-300 block mb-1">Main conclusion:</strong>
                      {section.mainConclusion}
                    </div>
                  )}

                  {/* Overall Conclusion List */}
                  {section.overallConclusion && (
                    <div className="bg-slate-900 text-white rounded-xl p-6 text-base space-y-2">
                      <div className="text-cyan-300 font-bold uppercase tracking-wider text-xs mb-2">
                        Overall Conclusion
                      </div>
                      {section.overallConclusion.map((cLine, cIdx) => (
                        <div key={cIdx} className="text-slate-100">
                          {cLine}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Lesson Navigation: Previous & Next Lesson Controls */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevLesson ? (
          <button
            onClick={() => navigateToLesson(prevLesson.id, undefined, 'visual')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: {prevLesson.title.replace('Reading: ', '').replace('Reading 1: ', '').replace('Reading 2: ', '')}</span>
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('exercises')}
            className="px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-base font-semibold transition-colors"
          >
            Exercises
          </button>

          <button
            onClick={() => setActiveTab('quizzes')}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-semibold transition-colors"
          >
            Take Quiz
          </button>

          {nextLesson && (
            <button
              onClick={() => navigateToLesson(nextLesson.id, undefined, 'visual')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold transition-colors"
            >
              <span>Next Lesson</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
