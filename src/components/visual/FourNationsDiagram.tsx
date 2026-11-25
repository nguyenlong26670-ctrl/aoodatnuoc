import React, { useState } from 'react';
import { MapPin, Compass, HeartHandshake } from 'lucide-react';

interface NationInfo {
  name: string;
  capital: string;
  languageFamily: string;
  unificationMilestone: string;
  identityDetails: string[];
  sportingLoyaltyNote: string;
}

export const FourNationsDiagram: React.FC = () => {
  const [selectedNation, setSelectedNation] = useState<string>('England');

  const nations: Record<string, NationInfo> = {
    England: {
      name: "England",
      capital: "London",
      languageFamily: "Germanic (English)",
      unificationMilestone: "Central kingdom; unification occurred mainly through England's military & economic power.",
      identityDetails: [
        "Has the strongest political and cultural influence in Britain.",
        "English is the main language of all four nations.",
        "The political system and many everyday customs originated in England.",
        "Public symbols reflect English origin: Bank of England, Elizabeth II, 'Anglo' terminology (e.g. Anglo-American relations)."
      ],
      sportingLoyaltyNote: "English people may also support Scottish, Welsh or Irish teams when competing against countries outside the British Isles."
    },
    Scotland: {
      name: "Scotland",
      capital: "Edinburgh",
      languageFamily: "Celtic (Gaelic) & Germanic (Scots/English)",
      unificationMilestone: "1603 shared monarch (King James I); 1707 Act of Union.",
      identityDetails: [
        "Historical distinct legal, religious, and education systems preserved.",
        "Strong patriotic national identity distinct from England.",
        "Scotland's cross holds the more honourable position on the Union Jack because it joined the Union earlier than Ireland."
      ],
      sportingLoyaltyNote: "Scottish people living in England often passionately support Scotland in football and rugby."
    },
    Wales: {
      name: "Wales",
      capital: "Cardiff",
      languageFamily: "Celtic (Welsh) & English",
      unificationMilestone: "United with England in the 13th century.",
      identityDetails: [
        "Was considered a principality of the Kingdom of England when the Union Flag was created in 1606.",
        "Reason why the Welsh Red Dragon does not appear on the Union Jack: Wales was already integrated as part of England.",
        "Preserves distinct Welsh language and strong cultural traditions."
      ],
      sportingLoyaltyNote: "Fierce sporting rivalry with England, especially in international rugby."
    },
    Ireland: {
      name: "Ireland (Northern Ireland)",
      capital: "Belfast (Northern Ireland)",
      languageFamily: "Celtic (Irish Gaelic) & English",
      unificationMilestone: "1800 joined Westminster Parliament; 1922 most became independent.",
      identityDetails: [
        "1800: Ireland joined the Parliament at Westminster, creating the UK of Great Britain and Ireland.",
        "1922: Most of Ireland broke away to form the independent Republic of Ireland (Eire).",
        "Northern Ireland remained part of the UK.",
        "St Patrick's Cross (red diagonal on white) added to the Union Flag on 1 January 1801."
      ],
      sportingLoyaltyNote: "People may support different countries in different sports; family background and cultural identity strongly influence sporting loyalties."
    }
  };

  const active = nations[selectedNation];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-6">
      <div className="pb-4 border-b border-slate-200 mb-6">
        <div className="text-sm font-bold text-blue-700 uppercase tracking-wide">
          Four Nations Comparison
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          The Four Nations of Britain
        </h3>
        <p className="text-base text-slate-600 mt-1">
          Calling Britain "England" is incorrect and may offend people from other nations.
        </p>
      </div>

      {/* Nation Select Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {Object.keys(nations).map(name => {
          const nat = nations[name];
          const isSelected = selectedNation === name;
          return (
            <button
              key={name}
              onClick={() => setSelectedNation(name)}
              className={`p-4 rounded-xl border text-left transition-colors ${
                isSelected
                  ? 'border-blue-700 bg-white shadow-xs'
                  : 'border-slate-200 bg-white/70 hover:bg-white text-slate-700'
              }`}
            >
              <div className="text-base font-bold text-slate-900">{nat.name}</div>
              <div className="text-sm text-slate-500 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {nat.capital}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Nation Information */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
          <h4 className="text-2xl font-bold text-slate-900">{active.name}</h4>
          <div className="text-sm text-slate-500">
            Language Roots: <strong className="text-slate-800">{active.languageFamily}</strong>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-base font-bold text-slate-900 mb-2">Key Historical & Cultural Points</div>
            <ul className="space-y-2 text-[17px] text-slate-800 leading-relaxed pl-1">
              {active.identityDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-blue-700" /> Historical Unification
              </div>
              <p className="text-sm text-slate-700">{active.unificationMilestone}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-blue-700" /> Sporting & National Loyalties
              </div>
              <p className="text-sm text-slate-700">{active.sportingLoyaltyNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
