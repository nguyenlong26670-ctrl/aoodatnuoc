import React, { useState, useEffect, useRef } from 'react';
import { useLearning } from '../context/LearningContext';
import { CHAPTERS_DATA } from '../data/courseData';
import { VOCABULARY_LIST } from '../data/vocabularyData';
import { Search, X, BookOpen, Calendar, Key, ChevronRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToLesson } = useLearning();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.trim().toLowerCase();

  interface SearchResultItem {
    id: string;
    type: 'section' | 'vocabulary' | 'date';
    title: string;
    snippet: string;
    lessonId: string;
    sectionId?: string;
  }

  const results: SearchResultItem[] = [];

  if (q.length >= 2) {
    CHAPTERS_DATA.forEach(ch => {
      ch.readings.forEach(reading => {
        reading.sections.forEach(sec => {
          if (sec.title.toLowerCase().includes(q)) {
            results.push({
              id: sec.id,
              type: 'section',
              title: `${reading.title}: ${sec.title}`,
              snippet: `Section in ${reading.title}`,
              lessonId: reading.id,
              sectionId: sec.id
            });
          }

          sec.subsections.forEach(sub => {
            const matchedBullet = sub.bullets?.find(b => b.toLowerCase().includes(q));
            if (matchedBullet) {
              results.push({
                id: `${sec.id}-${sub.id}`,
                type: 'section',
                title: `${sec.title} › ${sub.title}`,
                snippet: matchedBullet,
                lessonId: reading.id,
                sectionId: sec.id
              });
            }
          });
        });
      });
    });

    VOCABULARY_LIST.forEach(v => {
      if (v.term.toLowerCase().includes(q) || v.vietnamese.toLowerCase().includes(q) || v.englishDefinition.toLowerCase().includes(q)) {
        results.push({
          id: v.id,
          type: 'vocabulary',
          title: `Vocabulary: ${v.term} (${v.vietnamese})`,
          snippet: v.englishDefinition,
          lessonId: v.lesson.includes('Attitudes') ? 'reading-3' : v.lesson.includes('Multiculturalism') ? 'reading-4' : 'reading-5'
        });
      }
    });

    const dates = [
      { date: '1194', desc: "Richard I introduces St George's Cross for England", lessonId: 'reading-2', secId: 'three-parts-flag' },
      { date: '1603', desc: "King James I: Name Great Britain first used", lessonId: 'reading-1', secId: 'understanding-names' },
      { date: '1606', desc: "First Union Flag combines St George & St Andrew", lessonId: 'reading-2', secId: 'formation-union-jack' },
      { date: '1800', desc: "Ireland joined Westminster Parliament (UK formed)", lessonId: 'reading-1', secId: 'four-nations' },
      { date: '1801', desc: "1 January 1801: St Patrick's Cross added to Union Flag", lessonId: 'reading-2', secId: 'formation-union-jack' },
      { date: '1922', desc: "Most of Ireland becomes independent Republic of Ireland", lessonId: 'reading-1', secId: 'four-nations' },
      { date: '1993', desc: "Pub fined £3,100 for European beer measurements", lessonId: 'reading-4', secId: 'being-different' },
      { date: '1994', desc: "Asquith taxi introduced in London copying 1930s design", lessonId: 'reading-3', secId: 'preservation-traditions' }
    ];

    dates.forEach(d => {
      if (d.date.includes(q) || d.desc.toLowerCase().includes(q)) {
        results.push({
          id: `date-${d.date}`,
          type: 'date',
          title: `Historical Date: ${d.date}`,
          snippet: d.desc,
          lessonId: d.lessonId,
          sectionId: d.secId
        });
      }
    });
  }

  const handleSelectResult = (item: SearchResultItem) => {
    navigateToLesson(item.lessonId, item.sectionId, 'visual');
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full shadow-lg overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dates, vocabulary, Four Nations, Union Jack..."
            className="w-full text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <span className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-2 py-1 rounded font-mono">
            ESC
          </span>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-3">
          {q.length < 2 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              Type at least 2 characters to search across all lessons.
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching content found for "<strong className="text-slate-800">{query}</strong>".
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-400 uppercase px-3 py-1.5">
                Found {results.length} result{results.length > 1 ? 's' : ''}
              </div>
              {results.slice(0, 15).map(res => (
                <div
                  key={res.id}
                  onClick={() => handleSelectResult(res)}
                  className="p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    {res.type === 'date' && <Calendar className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />}
                    {res.type === 'vocabulary' && <Key className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />}
                    {res.type === 'section' && <BookOpen className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />}
                    <div>
                      <div className="text-base font-semibold text-slate-900">{res.title}</div>
                      <div className="text-sm text-slate-500 line-clamp-2 mt-0.5">{res.snippet}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 self-center" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
