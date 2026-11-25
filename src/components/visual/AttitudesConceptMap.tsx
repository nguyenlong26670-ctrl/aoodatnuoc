import React, { useState } from 'react';

export const AttitudesConceptMap: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<'multi' | 'indiv' | 'conserv'>('conserv');

  const concepts = {
    multi: {
      name: "Multiculturalism",
      role: "Immigration & Cultural Contributions",
      description: "Large-scale 20th-century immigration has made Britain a multicultural society, especially in big cities. Immigrant communities contribute new festivals (e.g. Notting Hill Carnival), make society more informal, and reshape British identity.",
      connectionText: "Introduces diverse cultural dynamics, continuously evolving what it means to be British."
    },
    indiv: {
      name: "Individualism",
      role: "Personal Freedom & Independence",
      description: "In their private lives, British people are highly individualistic, less traditional, and value personal freedom and eccentricity. They do not rigidly follow ancient customs.",
      connectionText: "Because they prize their own personal uniqueness, they value distinctiveness in their national symbols."
    },
    conserv: {
      name: "Conservatism & Being Different",
      role: "Continuity, Stability & Pride in Symbols",
      description: "British people prefer continuity and stability, disliking unnecessary change. They resist European standardization (left-side driving, double-decker buses, traditional pints, imperial measurements, April tax year).",
      connectionText: "A sentimental attachment to the past ensures national institutions, ceremonies, and distinct traditions endure."
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-6 space-y-6">
      <div className="pb-4 border-b border-slate-200">
        <div className="text-sm font-bold text-blue-700 uppercase tracking-wide">
          Conceptual Relationship
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Relationship Between the Three Ideas
        </h3>
      </div>

      {/* 3 Interactive Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(['multi', 'indiv', 'conserv'] as const).map(key => {
          const item = concepts[key];
          const isSelected = activeConcept === key;
          return (
            <div
              key={key}
              onClick={() => setActiveConcept(key)}
              className={`p-5 rounded-xl border cursor-pointer transition-colors ${
                isSelected
                  ? 'border-blue-700 bg-white shadow-xs'
                  : 'border-slate-200 bg-white/70 hover:bg-white'
              }`}
            >
              <div className="text-xs font-bold text-blue-700 uppercase">{item.role}</div>
              <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">{item.name}</h4>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">{item.description}</p>
              <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200">
                <strong>Interaction:</strong> {item.connectionText}
              </div>
            </div>
          );
        })}
      </div>

      {/* Source Note & Conclusion */}
      <div className="space-y-3 pt-2">
        <div className="text-sm text-slate-600 italic bg-white p-4 rounded-xl border border-slate-200">
          *<strong>Note:</strong> This is a conceptual relationship, not a proven cause-and-effect sequence. Individualism and conservatism are presented as related characteristics in the passage.
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-5 text-base leading-relaxed">
          <strong className="text-cyan-300 block mb-1">Overall conclusion:</strong>
          British attitudes are shaped by multicultural influences, individualism and conservatism. Although British society continues to change, many British people remain attached to tradition, stability and their distinctive national identity.
        </div>
      </div>
    </div>
  );
};
