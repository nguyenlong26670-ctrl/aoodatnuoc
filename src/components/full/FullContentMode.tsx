import React, { useState, useEffect } from 'react';
import { RAW_MARKDOWN_CONTENT } from '../../data/rawMarkdown';
import { useLearning } from '../../context/LearningContext';
import { BookOpen, Sparkles, AlignLeft, Check } from 'lucide-react';

export const FullContentMode: React.FC = () => {
  const { setLearningMode, setActiveTab } = useLearning();

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('large');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>('c1-r1');

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const totalHeight = el.scrollHeight - el.clientHeight;
      if (totalHeight > 0) {
        const current = (el.scrollTop / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, current)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocItems = [
    { id: 'part-1-title', label: 'PART I: THE COUNTRY OF BRITAIN', level: 1 },
    { id: 'ch1', label: 'CHAPTER 1: A FIRST LOOK AT THE UK', level: 1 },
    { id: 'r1', label: 'Reading 1: Country and People', level: 2 },
    { id: 'sec-geo', label: '1. Geographically Speaking', level: 3 },
    { id: 'sec-pol', label: '2. Politically Speaking', level: 3 },
    { id: 'sec-names', label: '3. Names of the United Kingdom', level: 3 },
    { id: 'sec-und-names', label: 'Understanding Names', level: 3 },
    { id: 'sec-four-nations', label: 'The Four Nations', level: 3 },
    { id: 'sec-dominance', label: 'The Dominance of England', level: 3 },
    { id: 'sec-loyalties', label: 'National Loyalties', level: 3 },
    { id: 'r2', label: 'Reading 2: The Union Jack', level: 2 },
    { id: 'sec-uj-intro', label: '1. The Union Jack', level: 3 },
    { id: 'sec-uj-three-parts', label: '2. The Three Parts of the Flag', level: 3 },
    { id: 'sec-uj-formation', label: '3. The Formation of the Union Jack', level: 3 },
    { id: 'sec-uj-wales', label: '4. Why No Welsh Dragon?', level: 3 },
    { id: 'ch2', label: 'CHAPTER 2: TRADITIONAL BELIEFS & VALUES', level: 1 },
    { id: 'sec-attitudes', label: 'Reading: Attitudes – Main Ideas', level: 2 },
    { id: 'sec-stereotypes', label: '1. British Stereotypes and Attitudes', level: 3 },
    { id: 'sec-change', label: '2. Stereotypes and Change', level: 3 },
    { id: 'sec-preservation', label: '3. The Preservation of Traditions', level: 3 },
    { id: 'sec-everyday', label: '4. Traditions in Everyday Life', level: 3 },
    { id: 'sec-outdated', label: '5. Outdated British Stereotypes', level: 3 },
    { id: 'sec-queuing', label: '6. The Truth About Queuing', level: 3 },
    { id: 'sec-vocab', label: 'Important Vocabulary', level: 3 },
    { id: 'sec-multi', label: '1. Multiculturalism', level: 2 },
    { id: 'sec-conserv', label: '2. Conservatism', level: 2 },
    { id: 'sec-diff', label: '3. Being Different', level: 2 },
    { id: 'sec-rel', label: 'Relationship Between the Three Ideas', level: 2 },
    { id: 'sec-formality', label: '1. Formality and Informality', level: 2 },
    { id: 'sec-amateur', label: '2. Public Spiritedness & Amateurism', level: 2 },
    { id: 'sec-privacy', label: '3. Privacy and Sex', level: 2 },
    { id: 'sec-conclusion', label: 'Overall Conclusion', level: 2 }
  ];

  const scrollToSection = (id: string) => {
    setActiveHeading(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-[17px] leading-[1.7]';
      case 'xlarge': return 'text-[21px] leading-[1.8]';
      default: return 'text-[19px] leading-[1.75]'; // large (recommended)
    }
  };

  return (
    <div className="py-2 space-y-6">
      {/* Sticky Reading Progress Top Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-blue-700 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Full Content Mode
          </h1>
          <p className="text-base text-slate-600 mt-1">
            Complete verbatim text from the original textbook, formatted for deep reading.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Font Resizing */}
          <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 text-sm">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-3 py-1 rounded font-semibold ${fontSize === 'normal' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'}`}
              title="Standard font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-3 py-1 rounded font-semibold ${fontSize === 'large' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'}`}
              title="Large font size (Recommended)"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-3 py-1 rounded font-semibold ${fontSize === 'xlarge' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'}`}
              title="Extra large font size"
            >
              A++
            </button>
          </div>

          <button
            onClick={() => {
              setLearningMode('visual');
              setActiveTab('lesson');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Switch to Visual Mode</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table of Contents Sticky Sidebar */}
        <div className="hidden lg:block lg:col-span-4 sticky top-20 bg-white rounded-2xl border border-slate-200 p-5 max-h-[calc(100vh-100px)] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlignLeft className="w-4 h-4 text-blue-700" /> Table of Contents
            </span>
            <span className="text-xs font-mono text-slate-400">
              {Math.round(scrollProgress)}% read
            </span>
          </div>

          <nav className="space-y-1 text-sm">
            {tocItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-1.5 px-2 rounded-md transition-colors truncate block ${
                  item.level === 1 ? 'font-bold text-slate-900 mt-2 bg-slate-50' :
                  item.level === 2 ? 'font-semibold text-slate-700 pl-4' :
                  'text-slate-500 hover:text-blue-700 pl-7'
                } ${activeHeading === item.id ? 'bg-blue-50 text-blue-800 font-bold' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Verbatim Document Reader (Book Layout) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-12">
          <article className={`space-y-8 text-slate-800 ${getFontSizeClass()}`}>
            
            {/* PART I */}
            <div id="part-1-title" className="border-b-2 border-slate-900 pb-4 scroll-mt-24">
              <span className="text-sm font-bold uppercase text-blue-700 tracking-wider">Curriculum Textbook</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                PART I: THE COUNTRY OF BRITAIN
              </h1>
            </div>

            {/* CHAPTER 1 */}
            <div id="ch1" className="bg-slate-900 text-white rounded-xl p-6 scroll-mt-24">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Chapter 1</div>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                A FIRST LOOK AT THE UNITED KINGDOM
              </h2>
            </div>

            {/* READING 1 */}
            <div id="r1" className="space-y-6 scroll-mt-24">
              <h2 className="text-2xl font-bold text-blue-900 border-b border-blue-100 pb-2">
                READING 1: COUNTRY AND PEOPLE
              </h2>

              <div id="sec-geo" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">1. Geographically Speaking</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>The British Isles are located off the north-west coast of Europe.</li>
                  <li>They consist of two large islands and several smaller islands.</li>
                  <li>The two largest islands are:
                    <ul className="list-circle pl-6 mt-2 space-y-1.5">
                      <li><strong>Great Britain</strong> – the largest island.</li>
                      <li><strong>Ireland</strong> – the second largest island.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="sec-pol" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">2. Politically Speaking</h3>
                <p>- There are two independent states in the British Isles:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li><strong>The Republic of Ireland (Eire):</strong> Governs most of the island of Ireland.</li>
                  <li><strong>The United Kingdom (UK):</strong> Governs Great Britain, Northern Ireland and most smaller islands.</li>
                </ul>
              </div>

              <div id="sec-names" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">3. Names of the United Kingdom</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li><strong>The United Kingdom of Great Britain and Northern Ireland:</strong> Official full name.</li>
                  <li><strong>The United Kingdom / The UK:</strong> Commonly used names.</li>
                  <li><strong>Great Britain (GB):</strong> Used in international sporting events and car stickers.</li>
                  <li><strong>Britain:</strong> Used in both formal and informal contexts.</li>
                  <li><strong>British:</strong> The adjective referring to the UK and its people or culture.</li>
                </ul>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4">
                  <div className="font-bold text-slate-900 text-lg mb-2">Key distinction to remember:</div>
                  <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                    <li><strong>British Isles:</strong> A geographical term.</li>
                    <li><strong>Great Britain:</strong> The largest island.</li>
                    <li><strong>The UK:</strong> A political state consisting of Great Britain and Northern Ireland.</li>
                    <li><strong>The Republic of Ireland:</strong> An independent state separate from the UK.</li>
                  </ul>
                </div>
              </div>

              <div id="sec-und-names" className="space-y-4 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-2">
                  UNDERSTANDING NAMES
                </h3>

                <h4 className="text-lg font-bold text-slate-900 mt-2">1. Great Britain</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>Great Britain consists of three parts:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li><strong>England</strong> – Capital: London.</li>
                      <li><strong>Scotland</strong> – Capital: Edinburgh.</li>
                      <li><strong>Wales</strong> – Capital: Cardiff.</li>
                    </ul>
                  </li>
                  <li>It is divided into smaller regions called <strong>counties</strong>.</li>
                  <li>The name <em>Great Britain</em> was first used in 1603 during the reign of King James I.</li>
                  <li>England and Scotland shared the same monarch but kept separate parliaments.</li>
                  <li>Great Britain is the largest island of the British Isles, with an area of <strong>229,850 km²</strong>.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-4">2. The United Kingdom (UK)</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>The UK is an independent sovereign country with its own government and a seat at the United Nations.</li>
                  <li>Its full official name is <strong>The United Kingdom of Great Britain and Northern Ireland</strong>.</li>
                  <li>It consists of:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>Great Britain (England, Scotland and Wales).</li>
                      <li>Northern Ireland.</li>
                    </ul>
                  </li>
                  <li>The capital city is <strong>London</strong>, where the UK government and parliament are located.</li>
                  <li>Its short name is <strong>the UK</strong>.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-4">3. The British Isles</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>The British Isles are a group of islands in the North Atlantic, off the north-west coast of Europe.</li>
                  <li>They include:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>Great Britain and Ireland.</li>
                      <li>The Isle of Man and the Hebrides.</li>
                      <li>More than 6,000 smaller islands.</li>
                    </ul>
                  </li>
                  <li>Their total area is approximately <strong>315,159 km²</strong>.</li>
                  <li>Their combined population is nearly <strong>72 million</strong>.</li>
                  <li>They include two sovereign states:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li><strong>The Republic of Ireland</strong> – covers about five-sixths of Ireland.</li>
                      <li><strong>The United Kingdom</strong> – consists of Great Britain and Northern Ireland.</li>
                    </ul>
                  </li>
                  <li>The Channel Islands (Alderney, Jersey, Guernsey and Sark) are sometimes included in the British Isles.</li>
                </ul>

                {/* Comparison Table */}
                <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                    Quick Comparison to Remember
                  </div>
                  <table className="w-full text-base text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-bold">Term</th>
                        <th className="p-4 font-bold">Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Great Britain</td>
                        <td className="p-4">England + Scotland + Wales</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">The UK</td>
                        <td className="p-4">Great Britain + Northern Ireland</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">The British Isles</td>
                        <td className="p-4">Geographical group of islands, including Great Britain and Ireland</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="sec-four-nations" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">The Four Nations</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>Britain consists of four nations: <strong>England, Scotland, Wales and Ireland</strong>.</li>
                  <li>Calling Britain “England” is incorrect and may offend people from other nations.</li>
                  <li>The political unification of the four nations was a gradual process:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li><strong>1800:</strong> Ireland joined the Parliament at Westminster, forming the United Kingdom of Great Britain and Ireland.</li>
                      <li><strong>1922:</strong> Most of Ireland became an independent state.</li>
                    </ul>
                  </li>
                  <li>Historically, the four nations had different:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>Racial and cultural backgrounds.</li>
                      <li>Languages (Celtic and Germanic languages).</li>
                      <li>Economic, social and legal systems.</li>
                    </ul>
                  </li>
                  <li>Today, many differences have disappeared, but national identities remain strong.</li>
                  <li>Although there is one UK government, some government activities are organized separately in each nation.</li>
                </ul>
              </div>

              <div id="sec-dominance" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">The Dominance of England</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>England has the strongest cultural and political influence in Britain.</li>
                  <li>English is the main language of all four nations.</li>
                  <li>The political system and many everyday customs originated in England.</li>
                  <li>Britain's unification happened mainly because of England's economic and military power, not mutual agreement.</li>
                  <li>English influence can be seen in British public life:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>The country's central bank is called the <strong>Bank of England</strong>.</li>
                      <li>The monarch is known as Elizabeth II.</li>
                      <li>The term <strong>“Anglo”</strong> is often used to describe relations involving Britain, such as Anglo-American relations.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="sec-loyalties" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">National Loyalties</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>It is safer to use <strong>“Britain”</strong> for the country and <strong>“British”</strong> for nationality instead of calling everyone English.</li>
                  <li>England is only one part of the UK.</li>
                  <li>Many people living in England identify as Scottish, Welsh or Irish because of their family origins.</li>
                  <li>People often support their ancestral country in international sports, even if they were born or raised in England.</li>
                  <li>People of Caribbean and South Asian descent may proudly identify as British but not necessarily English.</li>
                  <li>National loyalties can be complicated:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>People may support different countries in different sports.</li>
                      <li>Family background and cultural identity influence sporting loyalties.</li>
                      <li>English people may also support Scottish, Welsh or Irish teams when they compete against countries outside the British Isles.</li>
                    </ul>
                  </li>
                </ul>

                {/* Summary Table */}
                <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                    Quick Summary to Remember
                  </div>
                  <table className="w-full text-base text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-bold">Topic</th>
                        <th className="p-4 font-bold">Key idea</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold text-slate-900">The Four Nations</td>
                        <td className="p-4">Britain has four historical national identities: England, Scotland, Wales and Ireland.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">The Dominance of England</td>
                        <td className="p-4">England has the greatest political and cultural influence in Britain.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">National Loyalties</td>
                        <td className="p-4">British people may identify with their ancestral nations rather than simply as English.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* READING 2 */}
            <div id="r2" className="pt-6 border-t border-slate-200 space-y-6 scroll-mt-24">
              <h2 className="text-2xl font-bold text-blue-900 border-b border-blue-100 pb-2">
                READING 2: THE HISTORY AND MEANING OF THE UNION JACK
              </h2>

              <div id="sec-uj-intro" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">1. The Union Jack</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>The UK flag is called the <strong>Union Jack</strong>, <strong>Union Flag</strong> or <strong>Royal Banner</strong>.</li>
                  <li>It combines three national flags: England, Scotland and Ireland.</li>
                  <li>The name “Union Jack” is traditionally associated with the flag flown at the bows of warships.</li>
                  <li>The flag symbolizes the political union of the British Isles and <strong>respect for individual identities within a united community</strong>.</li>
                </ul>
              </div>

              <div id="sec-uj-three-parts" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">2. The Three Parts of the Flag</h3>

                <h4 className="text-lg font-bold text-slate-900 mt-2">a. St George's Cross (England)</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>A red cross on a white background.</li>
                  <li>Introduced by Richard I in <strong>1194</strong>.</li>
                  <li>Became England's national flag.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-4">b. St Andrew's Cross (Scotland)</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>A white diagonal cross on a blue background.</li>
                  <li>St Andrew became Scotland's patron saint in the 11th century.</li>
                  <li>Scottish troops had used the white cross since the 14th century.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-4">c. St Patrick's Cross (Ireland)</h4>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>A red diagonal cross on a white background.</li>
                  <li>Represents Ireland and its patron saint, St Patrick.</li>
                  <li>St Patrick helped spread Christianity in Ireland by building churches, monasteries and schools.</li>
                </ul>
              </div>

              <div id="sec-uj-formation" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">3. The Formation of the Union Jack</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li><strong>1606:</strong> The first Union Flag was created after the union of England and Scotland.</li>
                  <li>It combined St George's Cross and St Andrew's Cross.</li>
                  <li>A white border was added around the red cross according to heraldic rules.</li>
                  <li><strong>1 January 1801:</strong> Ireland united with Great Britain, and St Patrick's Cross was added.</li>
                  <li>The resulting design is the Union Flag used today.</li>
                  <li>The flag is not symmetrical because the Scottish and Irish crosses are arranged in different positions according to heraldic rules.</li>
                  <li>Scotland's cross has the more honourable position because Scotland joined the Union earlier.</li>
                </ul>
              </div>

              <div id="sec-uj-wales" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">4. Why Doesn't the Welsh Dragon Appear on the Union Flag?</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>Wales was already united with England in the 13th century.</li>
                  <li>When the first Union Flag was created in 1606, Wales was not considered a separate nation but a principality of the Kingdom of England.</li>
                  <li>Therefore, the Welsh dragon was not included in the Union Flag.</li>
                </ul>

                {/* Union Jack Summary Table */}
                <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                    Quick Summary to Remember
                  </div>
                  <table className="w-full text-base text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-bold">Topic</th>
                        <th className="p-4 font-bold">Key information</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Union Jack</td>
                        <td className="p-4">Combination of three national flags.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">England</td>
                        <td className="p-4">St George's Cross – red cross on white.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Scotland</td>
                        <td className="p-4">St Andrew's Cross – white diagonal cross on blue.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Ireland</td>
                        <td className="p-4">St Patrick's Cross – red diagonal cross on white.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">1606</td>
                        <td className="p-4">First Union Flag (England + Scotland).</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">1801</td>
                        <td className="p-4">Present Union Flag created (England + Scotland + Ireland).</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Wales</td>
                        <td className="p-4">Welsh dragon is absent because Wales was already united with England.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-800"><strong>Important dates:</strong> 1194 – 1606 – 1801.</p>
                <p className="text-slate-800 mt-1"><strong>Key concept:</strong> The Union Jack represents the union of England, Scotland and Ireland through the combination of their national crosses.</p>
              </div>
            </div>

            {/* CHAPTER 2 */}
            <div id="ch2" className="bg-slate-900 text-white rounded-xl p-6 scroll-mt-24">
              <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Chapter 2</div>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                TRADITIONAL BELIEFS AND VALUES
              </h2>
            </div>

            {/* READING: ATTITUDES */}
            <div id="sec-attitudes" className="space-y-6 scroll-mt-24">
              <h2 className="text-2xl font-bold text-blue-900 border-b border-blue-100 pb-2">
                READING: ATTITUDES – Main Ideas
              </h2>

              <div id="sec-stereotypes" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">1. British Stereotypes and Attitudes</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>British people are often associated with certain typical characteristics.</li>
                  <li>However, stereotypes should not always be accepted as true because society changes over time.</li>
                  <li>Traditional images of British people may no longer reflect modern British life.</li>
                </ul>
              </div>

              <div id="sec-change" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">2. Stereotypes and Change</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>Society changes, but its reputation and stereotypes often remain unchanged.</li>
                  <li>Many British stereotypes come from old books, songs and plays.</li>
                  <li>Britain is widely known as a <strong>“land of tradition”</strong> because of its long history and political continuity.</li>
                  <li>Some public ceremonies still preserve centuries-old traditions, such as:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li>The State Opening of Parliament.</li>
                      <li>Trooping the Colour.</li>
                      <li>Changing the Guard at Buckingham Palace.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="sec-preservation" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">3. The Preservation of Traditions</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>Some traditions are artificially preserved or reintroduced to attract tourists.</li>
                  <li>Examples:
                    <ul className="list-circle pl-6 mt-1.5 space-y-1">
                      <li><strong>Asquith taxi:</strong> Introduced in London in 1994, copying the design of 1930s taxis.</li>
                      <li><strong>Red buses:</strong> The government kept London buses red to preserve their traditional image and support tourism.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div id="sec-everyday" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">4. Traditions in Everyday Life</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>In private life, British people are generally less traditional than people in many other countries.</li>
                  <li>Few ancient customs are regularly followed by most families.</li>
                  <li>British people are highly individualistic.</li>
                  <li>They are also enthusiastic video watchers, which contrasts with the image of a traditional society.</li>
                </ul>
              </div>

              <div id="sec-outdated" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">5. Outdated British Stereotypes</h3>
                <p>Many supposedly typical British habits are no longer common:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li><strong>Bowler hats:</strong> The stereotypical London gentleman's hat is rarely worn today.</li>
                  <li><strong>Traditional English breakfast:</strong> Only about 10% of British people eat the full traditional breakfast.</li>
                  <li><strong>Tea drinking:</strong> Coffee is now bought more than tea in British shops.</li>
                  <li><strong>Afternoon tea:</strong> It is mainly enjoyed by retired people and the upper-middle class, rather than the majority.</li>
                </ul>
              </div>

              <div id="sec-queuing" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">6. The Truth About Queuing</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li>British people are famous for forming queues when waiting for services.</li>
                  <li>However, this does not mean they enjoy waiting or are particularly patient.</li>
                  <li>Surveys and newspaper reports show that British people consider waiting times a problem.</li>
                  <li>Some banks even promise to serve customers within two minutes.</li>
                  <li>Therefore, the stereotype of British people as patient because they queue is misleading.</li>
                </ul>

                {/* Chapter 2 Attitudes Summary Table */}
                <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                    Quick Summary to Remember
                  </div>
                  <table className="w-full text-base text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-bold">Topic</th>
                        <th className="p-4 font-bold">Key idea</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Stereotypes and Change</td>
                        <td className="p-4">British stereotypes often come from the past and may not reflect modern life.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Land of Tradition</td>
                        <td className="p-4">Britain preserves traditional public ceremonies and customs.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Artificial Traditions</td>
                        <td className="p-4">Some traditions are maintained mainly for tourism.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Everyday Life</td>
                        <td className="p-4">British people are individualistic and less traditional than commonly believed.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Outdated Stereotypes</td>
                        <td className="p-4">Traditional breakfast, tea drinking and bowler hats are no longer typical.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-900">Queuing</td>
                        <td className="p-4">British people queue but do not necessarily enjoy waiting.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="sec-vocab" className="space-y-3 scroll-mt-24">
                <h3 className="text-xl font-bold text-slate-900">Important Vocabulary</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-800">
                  <li><strong>Stereotype:</strong> Định kiến / khuôn mẫu.</li>
                  <li><strong>Tradition:</strong> Truyền thống.</li>
                  <li><strong>Political continuity:</strong> Sự liên tục về chính trị.</li>
                  <li><strong>Artificial preservation:</strong> Sự bảo tồn mang tính nhân tạo.</li>
                  <li><strong>Individualistic:</strong> Có tính cá nhân / đề cao cá nhân.</li>
                  <li><strong>Outdated:</strong> Lỗi thời / không còn phù hợp.</li>
                  <li><strong>Queue:</strong> Xếp hàng.</li>
                  <li><strong>Patient:</strong> Kiên nhẫn.</li>
                </ul>

                <p className="text-slate-900 font-medium mt-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <strong>Main conclusion:</strong> Britain has a strong traditional image, especially in public life, but many traditional stereotypes do not accurately represent the everyday lives and attitudes of modern British people.
                </p>
              </div>
            </div>

            {/* MULTICULTURALISM */}
            <div id="sec-multi" className="pt-6 border-t border-slate-200 space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">1. Multiculturalism</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>Large-scale immigration during the 20th century has made Britain a <strong>multicultural society</strong>, especially in big cities.</li>
                <li>Immigrant communities have brought different cultures, languages, lifestyles and attitudes.</li>
                <li>For example, some areas of London have a strong Indian influence, including shops, clothing, languages and education.</li>
                <li>Differences between immigrant communities and traditional British society are gradually becoming smaller.</li>
                <li>Unlike the USA, immigrant communities in Britain rarely live completely separately from the wider society.</li>
                <li>New British communities have contributed to British culture by:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Making society more informal.</li>
                    <li>Changing the nature of local corner shops.</li>
                    <li>Introducing new cultural festivals.</li>
                  </ul>
                </li>
                <li>The <strong>Notting Hill Carnival</strong>, inspired by Caribbean culture, is one of Britain's most popular festivals.</li>
              </ul>
              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British identity is not fixed; it continuously changes through the contributions of different communities.</p>
            </div>

            {/* CONSERVATISM */}
            <div id="sec-conserv" className="space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">2. Conservatism</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>British people are individualistic and do not necessarily follow the same traditional habits.</li>
                <li>However, they generally dislike unnecessary change and prefer <strong>continuity and stability</strong>.</li>
                <li>Politicians often use the idea of "traditional family values" to gain public support.</li>
                <li>British people have a sentimental attachment to the past, which can be seen in:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Their preference for old houses and traditional-looking pubs.</li>
                    <li>Christmas cards depicting historical scenes.</li>
                    <li>Their reluctance to change the currency system.</li>
                  </ul>
                </li>
                <li>Children's reading preferences also reflect conservative attitudes:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Roald Dahl and Enid Blyton were popular writers despite their old-fashioned stories.</li>
                    <li>Their books often describe an idealized world of the past.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British people may not follow traditional lifestyles, but they value tradition, stability and continuity.</p>
            </div>

            {/* BEING DIFFERENT */}
            <div id="sec-diff" className="space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">3. Being Different</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>British people are particularly conservative about things considered symbols of British identity.</li>
                <li>Their individualism makes them proud of being different from other countries.</li>
                <li>They often resist changes simply because they do not want to follow everyone else.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">a. Driving</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>British people drive on the left-hand side of the road.</li>
                <li>They strongly resist changing to driving on the right.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">b. Double-decker buses</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>British people are concerned that European standardization may threaten traditional double-decker buses.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">c. Measurement systems</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>The British government has tried to introduce the metric system, but with limited success.</li>
                <li>People still commonly use:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Pounds and ounces for weight.</li>
                    <li>Fahrenheit for temperature.</li>
                    <li>Traditional British units for distance and liquid measurements.</li>
                  </ul>
                </li>
                <li>The 24-hour clock is also less widely used.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">d. Beer measurements</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>In 1993, a pub was fined £3,100 for selling beer in European measurements instead of traditional pints and half-pints.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">e. Time and financial systems</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Britain has resisted adopting Central European Time.</li>
                <li>Its financial year starts in April rather than January.</li>
              </ul>

              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British people often resist standardization and change because they value their national identity and traditions.</p>

              {/* Summary Table */}
              <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                  Quick Summary to Remember
                </div>
                <table className="w-full text-base text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-bold">Topic</th>
                      <th className="p-4 font-bold">Key idea</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Multiculturalism</td>
                      <td className="p-4">Immigration has made Britain multicultural and continuously changed British identity.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Conservatism</td>
                      <td className="p-4">British people prefer continuity, stability and traditional symbols over unnecessary change.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Being Different</td>
                      <td className="p-4">British people are proud of their uniqueness and often resist adopting other countries' systems.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* RELATIONSHIP BETWEEN THREE IDEAS */}
            <div id="sec-rel" className="space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">Relationship Between the Three Ideas</h3>
              <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div>
                  <strong>Multiculturalism:</strong> Immigration brings different cultures and changes British society.
                </div>
                <div>
                  <strong>Individualism:</strong> British people value personal identity and independence.
                </div>
                <div>
                  <strong>Conservatism and Being Different:</strong> They value national traditions and resist changes that may threaten their distinct identity.
                </div>
              </div>
              <p className="text-sm text-slate-500 italic mt-2">
                *Note: This is a conceptual relationship, not a proven cause-and-effect sequence. Individualism and conservatism are presented as related characteristics in the passage.
              </p>
              <p className="text-slate-900 font-medium mt-3 bg-slate-100 p-4 rounded-xl">
                <strong>Overall conclusion:</strong> British attitudes are shaped by multicultural influences, individualism and conservatism. Although British society continues to change, many British people remain attached to tradition, stability and their distinctive national identity.
              </p>
            </div>

            {/* FORMALITY AND INFORMALITY */}
            <div id="sec-formality" className="pt-6 border-t border-slate-200 space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">1. Formality and Informality</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>Britain has many formal public ceremonies, but this does not mean British people are formal in everyday life.</li>
                <li>The level of formality depends on whether people are playing a <strong>public role or a private role</strong>.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">a. Public situations (Formal)</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>People are expected to follow strict rules of appearance and behaviour.</li>
                <li>For example, bank employees and politicians are expected to wear formal clothes at work.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">b. Private situations (Informal)</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>British people are generally relaxed about clothing and personal appearance.</li>
                <li>They prefer casual clothes during their free time, especially on Sundays.</li>
                <li>They are tolerant of unusual clothing and value personal freedom.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">c. Friendship and Social Behaviour</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>British people often show friendliness by avoiding formalities:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Using first names instead of titles.</li>
                    <li>Wearing casual clothes when entertaining guests.</li>
                    <li>Rarely shaking hands with friends.</li>
                    <li>Saying "help yourself" to make guests feel at home.</li>
                  </ul>
                </li>
                <li>Being informal means accepting someone as a friend, not showing disrespect.</li>
                <li>British people are generally reserved and rarely express affection openly.</li>
                <li>Since the late 20th century, British society has become more informal, with more casual meals and greeting kisses becoming common.</li>
              </ul>

              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British people distinguish between public formality and private informality. Being informal is often a sign of friendship and acceptance.</p>
            </div>

            {/* PUBLIC SPIRITEDNESS & AMATEURISM */}
            <div id="sec-amateur" className="space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">2. Public Spiritedness and Amateurism</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li>Traditionally, British society valued the <strong>"talented amateur"</strong> rather than excessive professionalism.</li>
                <li>People believed society worked better when everyone contributed some free time to help others.</li>
                <li>This attitude could be seen in:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Public services and government.</li>
                    <li>Parliament.</li>
                    <li>The legal system.</li>
                    <li>Education and sports.</li>
                  </ul>
                </li>
                <li>However, professionalism has gradually become more positively accepted.</li>
                <li>Voluntary activities remain an important part of British life.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">Examples of voluntary activities:</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Neighbourhood Watch schemes.</li>
                <li>Charity work and fundraising events.</li>
                <li>Organizing jumble sales, fêtes and flag days.</li>
                <li>Donating blood without payment.</li>
                <li>Supporting charities such as:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Oxfam.</li>
                    <li>Amnesty International.</li>
                    <li>Save the Children Fund.</li>
                    <li>The National Trust.</li>
                  </ul>
                </li>
              </ul>

              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British people traditionally value community participation and voluntary work, although professionalism has become more important.</p>
            </div>

            {/* PRIVACY AND SEX */}
            <div id="sec-privacy" className="space-y-3 scroll-mt-24">
              <h3 className="text-xl font-bold text-slate-900">3. Privacy and Sex</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800">
                <li><strong>Privacy is a fundamental value</strong> in British society.</li>
                <li>People believe individuals have the right to keep personal information private.</li>
                <li>Asking personal questions about income, family or sex life is considered rude unless people know each other well.</li>
                <li>Even the greeting "How do you do?" is a social formality, not a real question.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">a. Attitudes towards Sex</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Modern British attitudes towards sex have become more open and tolerant.</li>
                <li>However, sex is still considered a private and sometimes embarrassing subject.</li>
                <li>Public figures may face scandals when their private sexual activities:
                  <ul className="list-circle pl-6 mt-1.5 space-y-1">
                    <li>Involve breaking the law.</li>
                    <li>Threaten national security.</li>
                    <li>Contradict their political beliefs or public statements.</li>
                  </ul>
                </li>
                <li>The main issue is often the connection between private behaviour and public responsibilities, rather than the sexual activity itself.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">b. Sex Education</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Sex education is considered important in schools, partly because of concerns about AIDS.</li>
                <li>However, many teachers have avoided teaching it because they feel embarrassed.</li>
                <li>Public entertainment often discusses sex through jokes, innuendo and double meanings.</li>
              </ul>

              <h4 className="text-lg font-bold text-slate-900 mt-3">c. Prostitution</h4>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-800">
                <li>Prostitution itself is not illegal in Britain.</li>
                <li>However, publicly approaching people to find customers (<strong>soliciting</strong>) is illegal.</li>
              </ul>

              <p className="text-slate-900 font-semibold mt-2"><strong>Key idea:</strong> British people are increasingly tolerant of sexual matters but continue to value privacy and feel uncomfortable discussing sex openly.</p>

              {/* Summary Table */}
              <div className="my-6 border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-100 px-5 py-3 font-bold text-slate-800 text-sm">
                  Quick Summary to Remember
                </div>
                <table className="w-full text-base text-left">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-bold">Topic</th>
                      <th className="p-4 font-bold">Key idea</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Formality and Informality</td>
                      <td className="p-4">British people are formal in public roles but informal in private life.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Public Spiritedness and Amateurism</td>
                      <td className="p-4">Voluntary work and community participation are important British values.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Privacy and Sex</td>
                      <td className="p-4">British people strongly protect personal privacy, despite increasingly open attitudes towards sex.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* OVERALL CONCLUSION */}
            <div id="sec-conclusion" className="pt-8 border-t-2 border-slate-900 space-y-4 scroll-mt-24">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-wide uppercase">
                Overall Conclusion
              </h3>
              <p className="text-slate-800">British society combines seemingly contrasting values:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-900 font-semibold">
                <li>Formal in public, informal in private.</li>
                <li>Individualistic but willing to contribute to the community.</li>
                <li>Open-minded about sex but protective of privacy.</li>
              </ul>
              <p className="text-slate-800 mt-4 leading-relaxed">
                These contrasts help explain British social behaviour and traditional values.
              </p>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
};
