import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { FLASHCARD_ITEMS } from '../../data/flashcardData';
import { RotateCw, ChevronLeft, ChevronRight, Shuffle, CheckCircle2, HelpCircle } from 'lucide-react';

export const FlashcardCenter: React.FC = () => {
  const { flashcardStatus, setFlashcardStatus } = useLearning();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [deck, setDeck] = useState(FLASHCARD_ITEMS);

  // Filter deck
  const filteredCards = deck.filter(c => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'review') return flashcardStatus[c.id] === 'review';
    return c.category === activeCategory;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const totalCount = filteredCards.length;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCount);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
    }, 150);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const markStatus = (status: 'mastered' | 'review') => {
    if (!currentCard) return;
    setFlashcardStatus(currentCard.id, status);
    handleNext();
  };

  const currentStatus = currentCard ? flashcardStatus[currentCard.id] || 'new' : 'new';

  return (
    <div className="py-2 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Flashcards
          </h1>
          <p className="text-base text-slate-600 mt-1">
            Test and strengthen recall of vocabulary, dates, and core concepts.
          </p>
        </div>

        <button
          onClick={handleShuffle}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors self-start sm:self-auto"
        >
          <Shuffle className="w-4 h-4" /> Shuffle
        </button>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: 'All Cards' },
          { id: 'vocabulary', label: 'Vocabulary' },
          { id: 'geography', label: 'Geography' },
          { id: 'history', label: 'History & Flag' },
          { id: 'attitudes', label: 'Attitudes' },
          { id: 'review', label: 'Needs Review' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
              activeCategory === cat.id
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {totalCount === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <p className="text-lg font-bold text-slate-800">No cards in this category</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="mt-4 px-5 py-2.5 bg-blue-700 text-white rounded-lg text-sm font-semibold"
          >
            Show All Cards
          </button>
        </div>
      ) : (
        <>
          {/* Card Status & Index */}
          <div className="flex items-center justify-between text-sm text-slate-600 px-1">
            <span>
              Card <strong>{currentIndex + 1}</strong> of <strong>{totalCount}</strong>
            </span>
            <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {currentStatus === 'mastered' ? 'Known' : currentStatus === 'review' ? 'Needs Review' : 'New'}
            </span>
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="perspective-1000 w-full min-h-[320px] cursor-pointer select-none"
          >
            <div
              className={`w-full min-h-[320px] rounded-2xl transition-transform duration-500 transform-style-3d relative shadow-sm border border-slate-200 ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-8 sm:p-12 flex flex-col justify-between items-center text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  {currentCard.category}
                </div>

                <div className="my-auto py-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {currentCard.front}
                  </h3>
                  {currentCard.vietnamese && (
                    <div className="mt-3 text-base font-semibold text-slate-600">
                      Meaning: {currentCard.vietnamese}
                    </div>
                  )}
                </div>

                <div className="text-sm text-slate-400 flex items-center gap-1.5">
                  <RotateCw className="w-4 h-4" /> Click to flip
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col justify-between items-center text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Answer & Explanation
                </div>

                <div className="my-auto py-4 max-w-xl text-center space-y-4">
                  <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-100">
                    {currentCard.back}
                  </p>

                  {currentCard.details && currentCard.details.length > 0 && (
                    <div className="bg-slate-800/80 rounded-xl p-4 text-left space-y-1.5 text-sm text-slate-300">
                      {currentCard.details.map((d, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-sm text-slate-400 flex items-center gap-1.5">
                  <RotateCw className="w-4 h-4" /> Click to flip back
                </div>
              </div>
            </div>
          </div>

          {/* Action & Evaluation Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-base font-semibold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" /> Previous
              </button>
              <button
                onClick={handleNext}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-base font-semibold transition-colors"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => markStatus('review')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-base font-semibold transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-amber-700" /> Need Review
              </button>
              <button
                onClick={() => markStatus('mastered')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-base font-semibold transition-colors"
              >
                <CheckCircle2 className="w-5 h-5" /> Known
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
