import React, { useState } from 'react';
import { VOCABULARY_LIST } from '../../data/vocabularyData';
import { Search, Volume2, Star } from 'lucide-react';

export const VocabularyCenter: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterChapter, setFilterChapter] = useState('all');
  const [starredTerms, setStarredTerms] = useState<string[]>([]);

  const toggleStar = (id: string) => {
    setStarredTerms(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      window.speechSynthesis.speak(utterance);
    }
  };

  const filtered = VOCABULARY_LIST.filter(v => {
    const matchesSearch = v.term.toLowerCase().includes(search.toLowerCase()) ||
      v.vietnamese.toLowerCase().includes(search.toLowerCase()) ||
      v.englishDefinition.toLowerCase().includes(search.toLowerCase());

    const matchesChapter = filterChapter === 'all' || v.chapter.toLowerCase().includes(filterChapter.toLowerCase());
    return matchesSearch && matchesChapter;
  });

  return (
    <div className="py-2 space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Vocabulary Glossary
        </h1>
        <p className="text-base text-slate-600 mt-1">
          British terminology and social concepts with verbatim definitions and Vietnamese translations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search term, definition, or meaning..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-base focus:outline-none focus:border-blue-600"
          />
        </div>

        <select
          value={filterChapter}
          onChange={(e) => setFilterChapter(e.target.value)}
          className="p-3 bg-white border border-slate-300 rounded-xl text-base text-slate-700"
        >
          <option value="all">All Chapters</option>
          <option value="chapter 1">Chapter 1</option>
          <option value="chapter 2">Chapter 2</option>
        </select>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => {
          const isStarred = starredTerms.includes(item.id);
          return (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">{item.term}</h3>
                    <button
                      onClick={() => handleSpeak(item.term)}
                      className="p-1 rounded text-slate-400 hover:text-blue-700 hover:bg-slate-100"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleStar(item.id)}
                    className={`p-1 rounded ${
                      isStarred ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                </div>

                <div className="text-sm font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  {item.vietnamese}
                </div>

                <p className="text-base text-slate-800 leading-relaxed mb-3">
                  {item.englishDefinition}
                </p>

                <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-700">Course Context:</span> "{item.context}"
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                <span>{item.lesson}</span>
                <span className="font-mono">{item.chapter.split(':')[0]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
