import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface TimelineEvent {
  year: string;
  exactDate?: string;
  title: string;
  subtitle: string;
  description: string[];
  flagComponent: 'st-george' | 'st-andrew' | 'st-patrick' | 'union-1606' | 'union-1801' | 'wales';
}

export const UnionJackTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1194",
      title: "St George's Cross (England)",
      subtitle: "Introduced by King Richard I",
      description: [
        "A red cross on a white background.",
        "Introduced by Richard I in 1194.",
        "Became England's national flag."
      ],
      flagComponent: "st-george"
    },
    {
      year: "1606",
      title: "The First Union Flag",
      subtitle: "Union of England and Scotland",
      description: [
        "Created after the union of England and Scotland under King James I.",
        "Combined St George's Cross and St Andrew's Cross (white diagonal cross on blue).",
        "A white border was added around the red cross according to heraldic rules.",
        "Flown at the bows of warships, giving rise to the name 'Union Jack'."
      ],
      flagComponent: "union-1606"
    },
    {
      year: "1801",
      exactDate: "1 January 1801",
      title: "Present Union Flag Created",
      subtitle: "Ireland Joined Great Britain",
      description: [
        "On 1 January 1801, Ireland united with Great Britain, and St Patrick's Cross was added.",
        "The resulting design is the Union Flag used today.",
        "The flag is not symmetrical because the Scottish and Irish crosses are arranged in different positions according to heraldic rules.",
        "Scotland's cross has the more honourable position because Scotland joined the Union earlier."
      ],
      flagComponent: "union-1801"
    },
    {
      year: "13th Century",
      title: "Why No Welsh Dragon?",
      subtitle: "Wales Status in the Kingdom",
      description: [
        "Wales was already united with England in the 13th century.",
        "When the first Union Flag was created in 1606, Wales was not considered a separate nation but a principality of the Kingdom of England.",
        "Therefore, the Welsh dragon was not included in the Union Flag."
      ],
      flagComponent: "wales"
    }
  ];

  const current = timelineEvents[selectedMilestone];

  const renderFlag = (type: string) => {
    switch (type) {
      case 'st-george':
        return (
          <div className="w-56 h-36 bg-white border border-slate-300 relative rounded overflow-hidden shadow-xs">
            <div className="absolute top-0 bottom-0 left-[42%] w-[16%] bg-red-600" />
            <div className="absolute left-0 right-0 top-[38%] h-[24%] bg-red-600" />
          </div>
        );
      case 'union-1606':
        return (
          <div className="w-56 h-36 bg-[#00247d] border border-slate-300 relative rounded overflow-hidden shadow-xs">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 200 120" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="200" y2="120" stroke="white" strokeWidth="22" />
              <line x1="200" y1="0" x2="0" y2="120" stroke="white" strokeWidth="22" />
            </svg>
            <div className="absolute top-0 bottom-0 left-[39%] w-[22%] bg-white" />
            <div className="absolute left-0 right-0 top-[35%] h-[30%] bg-white" />
            <div className="absolute top-0 bottom-0 left-[43%] w-[14%] bg-[#cf142b]" />
            <div className="absolute left-0 right-0 top-[39%] h-[22%] bg-[#cf142b]" />
          </div>
        );
      case 'union-1801':
        return (
          <div className="w-56 h-36 bg-[#00247d] border border-slate-300 relative rounded overflow-hidden shadow-xs">
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 60 30" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="60" y2="30" stroke="white" strokeWidth="6" />
              <line x1="60" y1="0" x2="0" y2="30" stroke="white" strokeWidth="6" />
              <line x1="0" y1="0" x2="30" y2="15" stroke="#cf142b" strokeWidth="2" />
              <line x1="30" y1="15" x2="60" y2="30" stroke="#cf142b" strokeWidth="2" />
              <line x1="60" y1="0" x2="30" y2="15" stroke="#cf142b" strokeWidth="2" />
              <line x1="30" y1="15" x2="0" y2="30" stroke="#cf142b" strokeWidth="2" />
            </svg>
            <div className="absolute top-0 bottom-0 left-[41.5%] w-[17%] bg-white" />
            <div className="absolute left-0 right-0 top-[38%] h-[24%] bg-white" />
            <div className="absolute top-0 bottom-0 left-[45%] w-[10%] bg-[#cf142b]" />
            <div className="absolute left-0 right-0 top-[42%] h-[16%] bg-[#cf142b]" />
          </div>
        );
      case 'wales':
        return (
          <div className="w-56 h-36 border border-slate-300 relative rounded overflow-hidden shadow-xs flex flex-col">
            <div className="h-1/2 bg-white flex items-center justify-center">
              <span className="text-3xl select-none">🐉</span>
            </div>
            <div className="h-1/2 bg-[#00ab39]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-6">
      <div className="pb-4 border-b border-slate-200 mb-6">
        <div className="text-sm font-bold text-blue-700 uppercase tracking-wide">
          Historical Timeline
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Formation of the Union Jack (1194 – 1606 – 1801)
        </h3>
      </div>

      {/* Timeline Milestone Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {timelineEvents.map((ev, index) => {
          const isSelected = selectedMilestone === index;
          return (
            <button
              key={ev.year}
              onClick={() => setSelectedMilestone(index)}
              className={`p-3.5 rounded-xl border text-left transition-colors ${
                isSelected
                  ? 'border-blue-700 bg-white shadow-xs'
                  : 'border-slate-200 bg-white/70 hover:bg-white text-slate-700'
              }`}
            >
              <div className="text-base font-bold text-blue-800">{ev.year}</div>
              <div className="text-sm text-slate-700 font-semibold truncate mt-0.5">{ev.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Milestone Detail */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="shrink-0 flex flex-col items-center">
          {renderFlag(current.flagComponent)}
          <span className="text-sm font-bold text-slate-600 mt-2 font-mono">
            {current.exactDate || current.year}
          </span>
        </div>

        <div className="space-y-3 flex-1">
          <div>
            <h4 className="text-xl font-bold text-slate-900">{current.title}</h4>
            <div className="text-sm text-slate-500 font-medium">{current.subtitle}</div>
          </div>

          <ul className="space-y-2 text-[17px] text-slate-800 leading-relaxed">
            {current.description.map((line, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
