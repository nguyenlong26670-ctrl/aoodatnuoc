import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface ContrastPair {
  id: string;
  category: string;
  leftTitle: string;
  leftSubtitle: string;
  leftPoints: string[];
  rightTitle: string;
  rightSubtitle: string;
  rightPoints: string[];
  keyInsight: string;
}

export const ComparisonCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('stereotypes');

  const contrastPairs: Record<string, ContrastPair> = {
    stereotypes: {
      id: "stereotypes",
      category: "Attitudes & Modern Life",
      leftTitle: "Traditional Stereotypes",
      leftSubtitle: "The Outdated Image",
      leftPoints: [
        "Bowler hats and umbrellas worn by gentlemen.",
        "Full traditional cooked English breakfast eaten daily.",
        "Solely tea-drinking nation; daily afternoon tea for all.",
        "Endlessly patient people who genuinely enjoy waiting in queues."
      ],
      rightTitle: "Modern British Reality",
      rightSubtitle: "Everyday 21st-Century Truth",
      rightPoints: [
        "Bowler hats are rarely if ever worn today.",
        "Only about 10% of British people eat the full traditional breakfast.",
        "Coffee is now bought more than tea in British shops; afternoon tea is primarily enjoyed by retirees and the upper-middle class.",
        "Surveys show waiting times are considered a problem; queuing is orderly convention, not love of waiting (some banks promise 2-minute service)."
      ],
      keyInsight: "British society changes, but reputations and stereotypes often remain unchanged."
    },
    formality: {
      id: "formality",
      category: "Social Conduct",
      leftTitle: "Public Situations (Formal)",
      leftSubtitle: "Strict Rules & Ceremonies",
      leftPoints: [
        "Strict rules of appearance and behaviour.",
        "Bank employees and politicians wear formal clothes at work.",
        "Formal public ceremonies (State Opening of Parliament, Trooping the Colour)."
      ],
      rightTitle: "Private Situations (Informal)",
      rightSubtitle: "Relaxed Freedom & Friendship",
      rightPoints: [
        "Casual clothes preferred during free time, especially on Sundays.",
        "Friendliness shown by avoiding formalities: first names, casual hosting, saying 'help yourself'.",
        "Rarely shaking hands with friends; informal greeting kisses and casual meals becoming common.",
        "Being informal means accepting someone as a friend, not showing disrespect."
      ],
      keyInsight: "British people distinguish between public formality and private informality."
    },
    community: {
      id: "community",
      category: "Individual vs Collective",
      leftTitle: "High Individualism",
      leftSubtitle: "Personal Independence",
      leftPoints: [
        "Few ancient customs are followed regularly by most families.",
        "British people are enthusiastic video watchers.",
        "High tolerance for personal eccentricities and unusual clothing.",
        "Fierce protection of personal boundaries."
      ],
      rightTitle: "Public Spiritedness & Amateurism",
      rightSubtitle: "The 'Talented Amateur' Tradition",
      rightPoints: [
        "Historically admired the 'talented amateur' contributing free time to help society.",
        "Vibrant voluntary schemes: Neighbourhood Watch, blood donation without pay, jumble sales, fêtes, and flag days.",
        "Strong voluntary support for charities: Oxfam, Amnesty International, Save the Children, and The National Trust."
      ],
      keyInsight: "British people are individualistic, yet value community participation and voluntary work."
    },
    privacy: {
      id: "privacy",
      category: "Morals & Private Life",
      leftTitle: "Open Attitudes towards Sex",
      leftSubtitle: "Tolerance & Humour",
      leftPoints: [
        "Modern attitudes towards sex have become noticeably more open and tolerant.",
        "Sex education considered important in schools (e.g. concerns about AIDS).",
        "Public entertainment discusses sex through jokes, innuendo, and double meanings.",
        "Prostitution itself is not illegal in Britain."
      ],
      rightTitle: "Fierce Protection of Privacy",
      rightSubtitle: "Personal Taboos",
      rightPoints: [
        "Privacy is a fundamental value; asking personal questions about income, family, or sex life is rude.",
        "Teachers frequently avoid teaching sex education due to embarrassment.",
        "Public figure scandals arise when private behaviour conflicts with public duty, security, or the law.",
        "Publicly approaching people to find customers (soliciting) is illegal."
      ],
      keyInsight: "Open-minded about sex, but protective of personal privacy."
    }
  };

  const active = contrastPairs[activeTab];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-4">
        <div>
          <div className="text-sm font-bold text-blue-700 uppercase tracking-wide">
            Comparison Cards
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Contrasting Values in British Society
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(contrastPairs).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                activeTab === key
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {key === 'stereotypes' && 'Stereotypes vs Reality'}
              {key === 'formality' && 'Public vs Private'}
              {key === 'community' && 'Individual vs Community'}
              {key === 'privacy' && 'Sex vs Privacy'}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {active.leftSubtitle}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mt-1">{active.leftTitle}</h4>
          </div>

          <ul className="space-y-2.5 text-[17px] text-slate-800 leading-relaxed pl-1">
            {active.leftPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
              {active.rightSubtitle}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mt-1">{active.rightTitle}</h4>
          </div>

          <ul className="space-y-2.5 text-[17px] text-slate-800 leading-relaxed pl-1">
            {active.rightPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 text-base text-slate-800">
        <strong className="text-blue-800">Key Insight: </strong>
        <span>{active.keyInsight}</span>
      </div>
    </div>
  );
};
