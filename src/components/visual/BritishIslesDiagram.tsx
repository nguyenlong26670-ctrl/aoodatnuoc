import React, { useState } from 'react';
import { Globe, CheckCircle2 } from 'lucide-react';

export const BritishIslesDiagram: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState<'bi' | 'gb' | 'uk' | 'ireland' | 'ci'>('uk');

  const entityData = {
    bi: {
      title: "The British Isles",
      type: "Geographical Term",
      area: "315,159 km²",
      population: "Nearly 72 million",
      highlights: [
        "A group of islands in the North Atlantic, off the north-west coast of Europe.",
        "Consists of two large islands (Great Britain & Ireland) and over 6,000 smaller islands (Isle of Man, Hebrides, etc.).",
        "Includes two sovereign states: The United Kingdom and The Republic of Ireland.",
        "The Channel Islands (Alderney, Jersey, Guernsey and Sark) are sometimes included."
      ]
    },
    gb: {
      title: "Great Britain",
      type: "Physical Island / Entity",
      area: "229,850 km²",
      population: "Largest island in the British Isles",
      highlights: [
        "Consists of three parts: England (London), Scotland (Edinburgh), and Wales (Cardiff).",
        "Divided into smaller administrative regions called counties.",
        "The name Great Britain was first used in 1603 during the reign of King James I.",
        "At that time, England and Scotland shared the same monarch but kept separate parliaments."
      ]
    },
    uk: {
      title: "The United Kingdom (UK)",
      type: "Political Sovereign State",
      area: "Sovereign country with UN seat",
      population: "Capital: London",
      highlights: [
        "Full official name: The United Kingdom of Great Britain and Northern Ireland.",
        "Consists of Great Britain (England, Scotland, Wales) and Northern Ireland.",
        "Independent sovereign country with its own government and parliament in London.",
        "Short name: the UK."
      ]
    },
    ireland: {
      title: "The Republic of Ireland (Eire)",
      type: "Independent Sovereign State",
      area: "Covers about 5/6 of the island of Ireland",
      population: "Second largest island in British Isles",
      highlights: [
        "Governs most of the island of Ireland (approx. five-sixths).",
        "An independent sovereign state completely separate from the UK.",
        "Became an independent state in 1922.",
        "Northern Ireland (approx. one-sixth) remained part of the UK."
      ]
    },
    ci: {
      title: "Smaller Islands & Channel Islands",
      type: "Islands & Dependencies",
      area: "More than 6,000 islands",
      population: "Isle of Man, Hebrides, Channel Islands",
      highlights: [
        "More than 6,000 smaller islands surround the main landmasses.",
        "Includes the Isle of Man and the Hebrides.",
        "Channel Islands (Alderney, Jersey, Guernsey, Sark) are sometimes included in the British Isles."
      ]
    }
  };

  const active = entityData[selectedEntity];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-4 mb-6">
        <div>
          <div className="text-sm font-bold text-blue-700 uppercase tracking-wide">
            Interactive Diagram
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            British Isles, Great Britain & The UK
          </h3>
        </div>

        {/* Entity Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {(['uk', 'gb', 'bi', 'ireland', 'ci'] as const).map(key => (
            <button
              key={key}
              onClick={() => setSelectedEntity(key)}
              className={`px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                selectedEntity === key
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {key === 'uk' && 'The UK'}
              {key === 'gb' && 'Great Britain'}
              {key === 'bi' && 'British Isles'}
              {key === 'ireland' && 'Rep. of Ireland'}
              {key === 'ci' && 'Islands'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Clean Structural Diagram */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
          {/* Outer: British Isles */}
          <div
            onClick={() => setSelectedEntity('bi')}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
              selectedEntity === 'bi'
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-slate-300 hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between text-sm font-bold text-slate-900 mb-3">
              <span>THE BRITISH ISLES (Geographical Term: ~315,159 km²)</span>
              <span className="text-xs text-slate-500 font-normal">~72 Million</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Island of Ireland */}
              <div
                onClick={(e) => { e.stopPropagation(); setSelectedEntity('ireland'); }}
                className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                  selectedEntity === 'ireland'
                    ? 'border-emerald-600 bg-emerald-50/50'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className="text-sm font-bold text-slate-800 mb-2">Island of Ireland</div>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 bg-emerald-100/70 text-emerald-950 rounded font-semibold">
                    Republic of Ireland (~5/6 area)
                    <div className="font-normal text-emerald-800 text-[11px]">Independent state</div>
                  </div>
                  <div
                    onClick={(e) => { e.stopPropagation(); setSelectedEntity('uk'); }}
                    className="p-2 bg-blue-100/70 text-blue-950 rounded font-semibold cursor-pointer"
                  >
                    Northern Ireland
                    <div className="font-normal text-blue-800 text-[11px]">Part of the UK</div>
                  </div>
                </div>
              </div>

              {/* Island of Great Britain */}
              <div
                onClick={(e) => { e.stopPropagation(); setSelectedEntity('gb'); }}
                className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                  selectedEntity === 'gb'
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className="text-sm font-bold text-slate-800 mb-2">Great Britain (229,850 km²)</div>
                <div className="space-y-1 text-xs">
                  <div className="p-1.5 bg-slate-100 rounded flex justify-between">
                    <span className="font-semibold text-slate-800">Scotland</span>
                    <span className="text-slate-500">Edinburgh</span>
                  </div>
                  <div className="p-1.5 bg-slate-100 rounded flex justify-between">
                    <span className="font-semibold text-slate-800">Wales</span>
                    <span className="text-slate-500">Cardiff</span>
                  </div>
                  <div className="p-1.5 bg-slate-100 rounded flex justify-between">
                    <span className="font-semibold text-slate-800">England</span>
                    <span className="text-slate-500">London</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Islands footnote */}
            <div
              onClick={(e) => { e.stopPropagation(); setSelectedEntity('ci'); }}
              className="mt-3 pt-2 border-t border-slate-200 text-xs text-slate-600 flex justify-between cursor-pointer hover:text-blue-700"
            >
              <span>6,000+ smaller islands (Isle of Man, Hebrides)</span>
              <span className="font-semibold">Channel Islands</span>
            </div>
          </div>

          {/* UK highlight box */}
          <div
            onClick={() => setSelectedEntity('uk')}
            className={`mt-4 border-2 rounded-xl p-3.5 cursor-pointer transition-colors flex items-center justify-between ${
              selectedEntity === 'uk'
                ? 'border-blue-700 bg-blue-50 text-blue-950 font-bold'
                : 'border-slate-300 hover:border-slate-400 text-slate-800 font-semibold'
            }`}
          >
            <span className="text-sm">
              THE UNITED KINGDOM = Great Britain (England + Scotland + Wales) + Northern Ireland
            </span>
            <span className="text-xs bg-white px-2 py-0.5 rounded border border-slate-200 font-mono">
              London
            </span>
          </div>
        </div>

        {/* Fact Sheet for Selected Entity */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                {active.type}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">{active.area}</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{active.title}</h4>

            <ul className="space-y-2.5 text-base text-slate-800 leading-relaxed">
              {active.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
