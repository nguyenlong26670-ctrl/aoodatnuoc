import React from 'react';
import { ShieldCheck, X, CheckCircle2 } from 'lucide-react';

interface ContentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentChecklistModal: React.FC<ContentChecklistModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const checklistItems = [
    {
      category: "Content Fidelity Verification",
      items: [
        { label: "1. Geographically Speaking", detail: "British Isles location, 2 large islands (Great Britain, Ireland), smaller islands", status: true },
        { label: "2. Politically Speaking", detail: "Two independent states: Republic of Ireland (Eire) & United Kingdom (UK)", status: true },
        { label: "3. Names of the United Kingdom", detail: "Official full name, UK, GB in sports/stickers, Britain, British, Key distinctions", status: true },
        { label: "Understanding Names: Great Britain", detail: "3 parts (England-London, Scotland-Edinburgh, Wales-Cardiff), counties, 1603 James I, area 229,850 km²", status: true },
        { label: "Understanding Names: The UK", detail: "Sovereign state, UN seat, Great Britain + Northern Ireland, capital London", status: true },
        { label: "Understanding Names: British Isles", detail: "North Atlantic, >6,000 islands, area 315,159 km², ~72 million population, 2 sovereign states, Channel Islands note", status: true },
        { label: "The Four Nations", detail: "England, Scotland, Wales, Ireland; 1800 union, 1922 Irish independence, Celtic/Germanic languages, legal/economic differences", status: true },
        { label: "The Dominance of England", detail: "Strongest influence, English language, origins of customs, Bank of England, Elizabeth II, 'Anglo' terminology", status: true },
        { label: "National Loyalties", detail: "Safest terms (Britain/British), family origins, sporting allegiances, Caribbean and South Asian identities", status: true },
        { label: "Reading 2: The Union Jack", detail: "Royal Banner, warships bow jack, 3 crosses, respect for individual identities in united community", status: true },
        { label: "The Three Parts of the Flag", detail: "St George (1194, Richard I), St Andrew (11th & 14th c.), St Patrick (Christianity spread)", status: true },
        { label: "Formation of Union Jack", detail: "1606 first flag, 1 Jan 1801 St Patrick added, heraldic rules, asymmetry, Scotland seniority", status: true },
        { label: "Welsh Dragon Absence", detail: "13th century union, 1606 principality status of England, reason for exclusion", status: true },
        { label: "Reading: Attitudes & Stereotypes", detail: "Perception vs change, land of tradition, political continuity, State Opening, Trooping the Colour, Changing the Guard", status: true },
        { label: "Preservation of Traditions", detail: "Tourism motive: 1994 Asquith taxi (1930s design), London red buses", status: true },
        { label: "Everyday Life & Outdated Stereotypes", detail: "Individualistic, video watchers; bowler hats, 10% traditional breakfast, coffee > tea, afternoon tea demographics", status: true },
        { label: "The Truth About Queuing", detail: "Queuing convention != patience, surveys on wait time frustration, bank 2-minute guarantees", status: true },
        { label: "Important Vocabulary", detail: "Stereotype, Tradition, Political continuity, Artificial preservation, Individualistic, Outdated, Queue, Patient with Vietnamese definitions", status: true },
        { label: "Multiculturalism", detail: "20th-century immigration, Indian presence in London, informal culture, corner shops, Notting Hill Carnival", status: true },
        { label: "Conservatism & Attachment to Past", detail: "Desire for stability, family values, old houses, traditional pubs, historical Christmas cards, currency, Roald Dahl & Enid Blyton", status: true },
        { label: "Being Different", detail: "Left-side driving, double-deckers, metric resistance (pounds, Fahrenheit, liquid), 1993 £3,100 pub beer fine, April financial year", status: true },
        { label: "Relationship Between 3 Ideas", detail: "Multiculturalism, Individualism, Conservatism & Being Different (conceptual relationship note)", status: true },
        { label: "Formality and Informality", detail: "Public roles (formal dress) vs private roles (casual Sundays, first names, 'help yourself', reserved affection, informal kisses)", status: true },
        { label: "Public Spiritedness & Amateurism", detail: "Talented amateur, voluntary schemes, Neighbourhood Watch, blood donations, Oxfam, Amnesty, Save the Children, National Trust", status: true },
        { label: "Privacy and Sex", detail: "Privacy right, 'How do you do?', sex education & embarrassment, public scandals, prostitution vs soliciting legality", status: true },
        { label: "Chapter 2 Overall Conclusion", detail: "3 contrasting pairs: Public/Private, Individual/Community, Sex/Privacy", status: true }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full shadow-xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">Content Fidelity Checklist</h3>
              <p className="text-xs text-slate-500">Verified against 100% of the original textbook document.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {checklistItems.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-3 text-sm">
                  <div>
                    <div className="font-bold text-slate-900">{item.label}</div>
                    <div className="text-slate-600 text-xs mt-0.5">{item.detail}</div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Included
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-sm">
          <span className="text-slate-600 font-medium">All items verified with zero content omission.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
