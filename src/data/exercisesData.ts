import { ExerciseMCQ, ExerciseTF, ExerciseItem } from '../types';

export const EXERCISE_MCQS: ExerciseMCQ[] = [
  // --- Chapter 1, Reading 1: Geography, States, Names ---
  {
    id: 'mcq-1',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'geo-speaking',
    sectionTitle: 'Geographically Speaking',
    difficulty: 'easy',
    question: 'Where are the British Isles located geographically?',
    options: [
      'Off the north-west coast of Europe',
      'In the central Mediterranean Sea',
      'Between Iceland and Greenland',
      'Off the south-west coast of Scandinavia'
    ],
    correctAnswer: 0,
    explanation: 'According to the source, the British Isles are located off the north-west coast of Europe.',
    sourceSection: 'Chapter 1: Reading 1 - 1. Geographically Speaking'
  },
  {
    id: 'mcq-2',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'politically-speaking',
    sectionTitle: 'Politically Speaking',
    difficulty: 'medium',
    question: 'Which of the following correctly describes the two independent sovereign states in the British Isles?',
    options: [
      'England and Scotland',
      'Great Britain and Ireland',
      'The United Kingdom and the Republic of Ireland',
      'The United Kingdom and Northern Ireland'
    ],
    correctAnswer: 2,
    explanation: 'There are two independent sovereign states in the British Isles: The United Kingdom (UK) and The Republic of Ireland (Eire). Northern Ireland is part of the UK, not an independent state.',
    sourceSection: 'Chapter 1: Reading 1 - 2. Politically Speaking'
  },
  {
    id: 'mcq-3',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'names-of-uk',
    sectionTitle: 'Names of the United Kingdom',
    difficulty: 'medium',
    question: 'What is the key distinction between the terms "British Isles" and "The UK"?',
    options: [
      '"British Isles" is a sovereign state, while "The UK" is a sporting team',
      '"British Isles" is a geographical term, while "The UK" is a political state',
      '"British Isles" includes only England, while "The UK" includes Ireland',
      'Both terms mean the exact same sovereign country'
    ],
    correctAnswer: 1,
    explanation: 'The text highlights the key distinction: "British Isles" is a geographical term (a group of islands), whereas "The UK" is a political state consisting of Great Britain and Northern Ireland.',
    sourceSection: 'Chapter 1: Reading 1 - 3. Names of the United Kingdom'
  },
  {
    id: 'mcq-4',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: Great Britain',
    difficulty: 'easy',
    question: 'In what year was the name "Great Britain" first used during the reign of King James I?',
    options: [
      '1194',
      '1603',
      '1800',
      '1922'
    ],
    correctAnswer: 1,
    explanation: 'The name Great Britain was first used in 1603 during the reign of King James I, when England and Scotland shared the same monarch but kept separate parliaments.',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 1. Great Britain'
  },
  {
    id: 'mcq-5',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: Statistics',
    difficulty: 'medium',
    question: 'What is the approximate total land area of Great Britain, the largest island of the British Isles?',
    options: [
      '130,200 km²',
      '229,850 km²',
      '315,159 km²',
      '550,000 km²'
    ],
    correctAnswer: 1,
    explanation: 'The source specifies that Great Britain is the largest island of the British Isles, with an area of 229,850 km². (315,159 km² is the total area of the entire British Isles).',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 1. Great Britain'
  },
  {
    id: 'mcq-6',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: British Isles',
    difficulty: 'medium',
    question: 'How many smaller islands, in addition to Great Britain and Ireland, do the British Isles include?',
    options: [
      'Fewer than 100',
      'About 500',
      'Approximately 2,000',
      'More than 6,000'
    ],
    correctAnswer: 3,
    explanation: 'The source states that the British Isles include Great Britain and Ireland, the Isle of Man, the Hebrides, and more than 6,000 smaller islands.',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 3. The British Isles'
  },
  {
    id: 'mcq-7',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'four-nations',
    sectionTitle: 'The Four Nations',
    difficulty: 'hard',
    question: 'What historical event occurred in 1800 regarding the unification of the British nations?',
    options: [
      'Scotland and England shared the same monarch for the first time',
      'Ireland joined the Parliament at Westminster, forming the United Kingdom of Great Britain and Ireland',
      'Most of Ireland became an independent sovereign state',
      'Wales was officially integrated as a principality'
    ],
    correctAnswer: 1,
    explanation: 'In 1800, Ireland joined the Parliament at Westminster, forming the United Kingdom of Great Britain and Ireland. (In 1922, most of Ireland became independent).',
    sourceSection: 'Chapter 1: Reading 1 - The Four Nations'
  },
  {
    id: 'mcq-8',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'dominance-of-england',
    sectionTitle: 'The Dominance of England',
    difficulty: 'hard',
    question: 'Why did the political unification of Britain primarily occur, according to the source?',
    options: [
      'By voluntary mutual democratic agreement among all four nations',
      'Mainly because of England\'s economic and military power',
      'Because of an invasion by external European monarchs',
      'By religious decree from the Pope in Rome'
    ],
    correctAnswer: 1,
    explanation: 'The source states that "Britain\'s unification happened mainly because of England\'s economic and military power, not mutual agreement."',
    sourceSection: 'Chapter 1: Reading 1 - The Dominance of England'
  },
  {
    id: 'mcq-9',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'dominance-of-england',
    sectionTitle: 'The Dominance of England',
    difficulty: 'medium',
    question: 'Which of the following is cited in the text as a reflection of English dominance in British public life?',
    options: [
      'The country\'s central bank being named the "Bank of England"',
      'The official language being named Gaelic',
      'The parliament meeting exclusively in Edinburgh',
      'The currency bearing the Welsh dragon on all banknotes'
    ],
    correctAnswer: 0,
    explanation: 'The text notes English dominance in British public life through examples such as the central bank being called the "Bank of England", the monarch being Elizabeth II, and the term "Anglo".',
    sourceSection: 'Chapter 1: Reading 1 - The Dominance of England'
  },
  {
    id: 'mcq-10',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'national-loyalties',
    sectionTitle: 'National Loyalties',
    difficulty: 'medium',
    question: 'How do people of Caribbean and South Asian descent typically view their national identity in Britain?',
    options: [
      'They refuse to accept any British citizenship or identity',
      'They may proudly identify as British but not necessarily English',
      'They always identify strictly as English and reject Britishness',
      'They only identify with their ancestral town and no national category'
    ],
    correctAnswer: 1,
    explanation: 'The source points out: "People of Caribbean and South Asian descent may proudly identify as British but not necessarily English."',
    sourceSection: 'Chapter 1: Reading 1 - National Loyalties'
  },

  // --- Chapter 1, Reading 2: The Union Jack ---
  {
    id: 'mcq-11',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'union-jack-intro',
    sectionTitle: 'The Union Jack',
    difficulty: 'easy',
    question: 'What does the Union Jack symbolize in terms of community and identity?',
    options: [
      'Total erasure of Scottish and Irish cultures in favour of England',
      'Political union and respect for individual identities within a united community',
      'The absolute supremacy of the Royal Navy across the globe',
      'The religious unification of Protestantism and Catholicism'
    ],
    correctAnswer: 1,
    explanation: 'The flag symbolizes the political union of the British Isles and "respect for individual identities within a united community."',
    sourceSection: 'Chapter 1: Reading 2 - 1. The Union Jack'
  },
  {
    id: 'mcq-12',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'three-parts-flag',
    sectionTitle: 'The Three Parts of the Flag',
    difficulty: 'easy',
    question: 'Who introduced St George\'s Cross as England\'s national flag in 1194?',
    options: [
      'King James I',
      'King Richard I',
      'Queen Elizabeth II',
      'King Edward I'
    ],
    correctAnswer: 1,
    explanation: 'St George\'s Cross (red cross on white) was introduced by King Richard I in 1194.',
    sourceSection: 'Chapter 1: Reading 2 - 2. The Three Parts of the Flag'
  },
  {
    id: 'mcq-13',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'three-parts-flag',
    sectionTitle: 'The Three Parts of the Flag',
    difficulty: 'easy',
    question: 'Which flag consists of a white diagonal cross on a blue background?',
    options: [
      'St George\'s Cross (England)',
      'St Andrew\'s Cross (Scotland)',
      'St Patrick\'s Cross (Ireland)',
      'The Flag of Wales'
    ],
    correctAnswer: 1,
    explanation: 'St Andrew\'s Cross (Scotland) is a white diagonal cross on a blue background.',
    sourceSection: 'Chapter 1: Reading 2 - 2. The Three Parts of the Flag'
  },
  {
    id: 'mcq-14',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'formation-union-jack',
    sectionTitle: 'Formation of the Union Jack',
    difficulty: 'hard',
    question: 'Why is the modern Union Jack flag NOT symmetrical?',
    options: [
      'Because of a printing error during the 1801 manufacturing process',
      'Because the Scottish and Irish crosses are arranged in different positions according to heraldic rules',
      'Because the Welsh dragon was removed, leaving one side lighter',
      'Because England demanded its red cross be placed off-center'
    ],
    correctAnswer: 1,
    explanation: 'The flag is not symmetrical because the Scottish and Irish diagonal crosses are counterchanged (arranged in different positions) according to heraldic rules, giving Scotland the more honourable position.',
    sourceSection: 'Chapter 1: Reading 2 - 3. The Formation of the Union Jack'
  },
  {
    id: 'mcq-15',
    type: 'mcq',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'welsh-dragon-absence',
    sectionTitle: 'Why No Welsh Dragon?',
    difficulty: 'medium',
    question: 'Why was the Welsh dragon omitted from the first Union Flag in 1606?',
    options: [
      'Wales was already united with England in the 13th century and considered a principality of England, not a separate kingdom',
      'The heralds could not draw a dragon using Christian cross rules',
      'Wales had rejected the Protestant Reformation',
      'The Welsh people voted against inclusion in the flag'
    ],
    correctAnswer: 0,
    explanation: 'Wales was already united with England in the 13th century. In 1606, Wales was considered a principality of the Kingdom of England rather than a separate nation, so it was already represented by England\'s cross.',
    sourceSection: 'Chapter 1: Reading 2 - 4. Why Doesn\'t the Welsh Dragon Appear on the Union Flag?'
  },

  // --- Chapter 2: Attitudes, Traditions, Stereotypes ---
  {
    id: 'mcq-16',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'stereotypes-change',
    sectionTitle: 'Stereotypes and Change',
    difficulty: 'easy',
    question: 'Why is Britain widely known as a "land of tradition"?',
    options: [
      'Because its families follow ancient pagan rituals in everyday life',
      'Because of its long history and political continuity',
      'Because it bans modern technology in government buildings',
      'Because all citizens are required by law to drink afternoon tea'
    ],
    correctAnswer: 1,
    explanation: 'Britain is widely known as a "land of tradition" because of its long history and political continuity.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 2. Stereotypes and Change'
  },
  {
    id: 'mcq-17',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'preservation-traditions',
    sectionTitle: 'The Preservation of Traditions',
    difficulty: 'medium',
    question: 'What example does the author provide of a tradition artificially introduced in London in 1994 to attract tourists?',
    options: [
      'The Routemaster Double-decker bus',
      'The Asquith taxi (copying 1930s taxi designs)',
      'The Changing of the Guard ceremony',
      'The State Opening of Parliament'
    ],
    correctAnswer: 1,
    explanation: 'The Asquith taxi was introduced in London in 1994, deliberately copying the design of 1930s taxis to attract tourists.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 3. The Preservation of Traditions'
  },
  {
    id: 'mcq-18',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'traditions-everyday-life',
    sectionTitle: 'Traditions in Everyday Life',
    difficulty: 'medium',
    question: 'Which modern habit of British people is mentioned as contrasting with the image of a traditional society?',
    options: [
      'They are enthusiastic video watchers',
      'They always wear traditional bowler hats',
      'They practice mandatory morning archery',
      'They listen solely to 17th-century folk tunes'
    ],
    correctAnswer: 0,
    explanation: 'The text notes that in private life British people are highly individualistic and enthusiastic video watchers, which contrasts with the traditional image.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 4. Traditions in Everyday Life'
  },
  {
    id: 'mcq-19',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'outdated-stereotypes',
    sectionTitle: 'Outdated British Stereotypes',
    difficulty: 'medium',
    question: 'Approximately what proportion of British people regularly eat the full traditional cooked English breakfast today?',
    options: [
      'About 10%',
      'About 35%',
      'About 60%',
      'Over 85%'
    ],
    correctAnswer: 0,
    explanation: 'According to the source, "Only about 10% of British people eat the full traditional breakfast."',
    sourceSection: 'Chapter 2: Reading: Attitudes - 5. Outdated British Stereotypes'
  },
  {
    id: 'mcq-20',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'truth-about-queuing',
    sectionTitle: 'The Truth About Queuing',
    difficulty: 'hard',
    question: 'What does the passage conclude about the famous British habit of queuing?',
    options: [
      'It proves that British people genuinely enjoy waiting and possess unlimited patience',
      'Queuing is an orderly social habit, but surveys show British people consider waiting times a problem and do not necessarily enjoy waiting',
      'Queuing was made mandatory by an Act of Parliament in 1993',
      'British people only queue when ordered to do so by police'
    ],
    correctAnswer: 1,
    explanation: 'The text explains that forming queues does not mean British people enjoy waiting or are patient; surveys show they consider wait times a problem, and banks even promise service within two minutes.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 6. The Truth About Queuing'
  },

  // --- Chapter 2: Multiculturalism, Conservatism, Being Different ---
  {
    id: 'mcq-21',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'multiculturalism',
    sectionTitle: 'Multiculturalism',
    difficulty: 'medium',
    question: 'How do immigrant communities in Britain differ from those in the USA, according to the text?',
    options: [
      'In Britain, immigrant communities rarely live completely separately from the wider society',
      'In Britain, immigrants are required to change their names',
      'In the USA, immigrants never celebrate cultural festivals',
      'In Britain, immigration only began in the 21st century'
    ],
    correctAnswer: 0,
    explanation: 'The text highlights that "Unlike the USA, immigrant communities in Britain rarely live completely separately from the wider society."',
    sourceSection: 'Chapter 2: Reading - 1. Multiculturalism'
  },
  {
    id: 'mcq-22',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'multiculturalism',
    sectionTitle: 'Multiculturalism',
    difficulty: 'easy',
    question: 'Which popular festival, inspired by Caribbean culture, is highlighted as an example of multicultural contribution to British life?',
    options: [
      'The Edinburgh Tattoo',
      'The Notting Hill Carnival',
      'The Chelsea Flower Show',
      'The Glyndebourne Opera Festival'
    ],
    correctAnswer: 1,
    explanation: 'The Notting Hill Carnival, inspired by Caribbean culture, is one of Britain\'s most popular festivals.',
    sourceSection: 'Chapter 2: Reading - 1. Multiculturalism'
  },
  {
    id: 'mcq-23',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'conservatism',
    sectionTitle: 'Conservatism',
    difficulty: 'medium',
    question: 'Which popular children\'s authors are mentioned as reflecting British conservative attachment to an idealized past?',
    options: [
      'J.K. Rowling and Philip Pullman',
      'Roald Dahl and Enid Blyton',
      'C.S. Lewis and J.R.R. Tolkien',
      'Beatrix Potter and Kenneth Grahame'
    ],
    correctAnswer: 1,
    explanation: 'The passage cites Roald Dahl and Enid Blyton as writers whose popular stories often describe an idealized world of the past, reflecting conservative attitudes.',
    sourceSection: 'Chapter 2: Reading - 2. Conservatism'
  },
  {
    id: 'mcq-24',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'being-different',
    sectionTitle: 'Being Different: Measurements',
    difficulty: 'hard',
    question: 'What happened to a British pub in 1993 that illustrated British resistance to European metric measurements?',
    options: [
      'It was forced to close down permanently',
      'It was fined £3,100 for selling beer in European measurements instead of traditional pints and half-pints',
      'It received a government subsidy for adopting metric liters',
      'It was awarded a national tourism medal'
    ],
    correctAnswer: 1,
    explanation: 'In 1993, a British pub was fined £3,100 for selling beer in European measurements instead of traditional pints and half-pints.',
    sourceSection: 'Chapter 2: Reading - 3. Being Different'
  },
  {
    id: 'mcq-25',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'being-different',
    sectionTitle: 'Being Different: Systems',
    difficulty: 'medium',
    question: 'In Britain, when does the official financial year start?',
    options: [
      '1 January',
      'April',
      '1 July',
      '1 September'
    ],
    correctAnswer: 1,
    explanation: 'Britain\'s financial year starts in April rather than January.',
    sourceSection: 'Chapter 2: Reading - 3. Being Different'
  },

  // --- Chapter 2: Formality, Amateurism, Privacy ---
  {
    id: 'mcq-26',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'formality-informality',
    sectionTitle: 'Formality and Informality',
    difficulty: 'medium',
    question: 'How do British people generally regard informality in private social behaviour?',
    options: [
      'As a sign of disrespect and ill-breeding',
      'As a sign of friendship and acceptance',
      'As behaviour permitted only for children',
      'As a violation of royal decrees'
    ],
    correctAnswer: 1,
    explanation: 'The text emphasizes that for British people, "Being informal means accepting someone as a friend, not showing disrespect."',
    sourceSection: 'Chapter 2: Reading - 1. Formality and Informality'
  },
  {
    id: 'mcq-27',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'public-spiritedness',
    sectionTitle: 'Public Spiritedness and Amateurism',
    difficulty: 'hard',
    question: 'What historical social value is described as admiring individuals who contribute their free time to help society rather than relying strictly on paid professionals?',
    options: [
      'The "professional bureaucrat"',
      'The "talented amateur"',
      'The "commercial specialist"',
      'The "mercenary volunteer"'
    ],
    correctAnswer: 1,
    explanation: 'British society traditionally valued the "talented amateur" rather than excessive professionalism, believing society worked better when people contributed free time to help others.',
    sourceSection: 'Chapter 2: Reading - 2. Public Spiritedness and Amateurism'
  },
  {
    id: 'mcq-28',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'public-spiritedness',
    sectionTitle: 'Public Spiritedness and Amateurism',
    difficulty: 'medium',
    question: 'Which of the following is NOT listed among the charities supported through voluntary work in the text?',
    options: [
      'Oxfam',
      'Amnesty International',
      'The National Trust',
      'World Bank Foundation'
    ],
    correctAnswer: 3,
    explanation: 'The charities explicitly listed in the textbook are Oxfam, Amnesty International, Save the Children Fund, and The National Trust.',
    sourceSection: 'Chapter 2: Reading - 2. Public Spiritedness and Amateurism'
  },
  {
    id: 'mcq-29',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'privacy-and-sex',
    sectionTitle: 'Privacy and Sex',
    difficulty: 'hard',
    question: 'What is the legal status regarding prostitution in Britain, according to the textbook?',
    options: [
      'Both prostitution and soliciting customers on the street are completely legal',
      'Both prostitution and soliciting are strictly illegal felonies',
      'Prostitution itself is not illegal, but publicly approaching people to find customers (soliciting) is illegal',
      'Prostitution is legal only if run directly by local councils'
    ],
    correctAnswer: 2,
    explanation: 'The text states: "Prostitution itself is not illegal in Britain. However, publicly approaching people to find customers (soliciting) is illegal."',
    sourceSection: 'Chapter 2: Reading - 3. Privacy and Sex'
  },
  {
    id: 'mcq-30',
    type: 'mcq',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'overall-conclusion',
    sectionTitle: 'Overall Conclusion',
    difficulty: 'hard',
    question: 'Which three contrasting pairs summarize British social values in the final conclusion?',
    options: [
      'Rich in public / Poor in private; Peaceful at home / Aggressive abroad; Polite in speech / Violent in sports',
      'Formal in public, informal in private; Individualistic but willing to contribute to the community; Open-minded about sex but protective of privacy',
      'Democratic in politics / Monarchist in church; Metric in science / Imperial in trade; Religious in schools / Secular in parliament',
      'Urban in culture / Rural in mindset; Conservative in youth / Liberal in old age; English in language / Celtic in law'
    ],
    correctAnswer: 1,
    explanation: 'The Overall Conclusion explicitly highlights three contrasting pairs: Formal in public, informal in private; Individualistic but willing to contribute to the community; Open-minded about sex but protective of privacy.',
    sourceSection: 'Chapter 2: Overall Conclusion'
  }
];

export const EXERCISE_TFS: ExerciseTF[] = [
  // --- Chapter 1: Geography, States, Names ---
  {
    id: 'tf-1',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'geo-speaking',
    sectionTitle: 'Geographically Speaking',
    difficulty: 'easy',
    statement: 'The British Isles consist of two large islands (Great Britain and Ireland) and several smaller islands.',
    correctAnswer: true,
    explanation: 'The text states that the British Isles consist of two large islands (Great Britain and Ireland) and several smaller islands.',
    sourceSection: 'Chapter 1: Reading 1 - 1. Geographically Speaking'
  },
  {
    id: 'tf-2',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'politically-speaking',
    sectionTitle: 'Politically Speaking',
    difficulty: 'medium',
    statement: 'The Republic of Ireland is an administrative region governed directly by the UK Parliament in London.',
    correctAnswer: false,
    correctedStatement: 'The Republic of Ireland (Eire) is an independent sovereign state completely separate from the UK, governing most of the island of Ireland.',
    explanation: 'The Republic of Ireland is an independent sovereign state that governs about five-sixths of Ireland, completely separate from the UK.',
    sourceSection: 'Chapter 1: Reading 1 - 2. Politically Speaking'
  },
  {
    id: 'tf-3',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'names-of-uk',
    sectionTitle: 'Names of the United Kingdom',
    difficulty: 'easy',
    statement: 'The abbreviation "GB" is commonly used on car stickers and in international sporting events.',
    correctAnswer: true,
    explanation: 'According to the source, "Great Britain (GB): Used in international sporting events and car stickers."',
    sourceSection: 'Chapter 1: Reading 1 - 3. Names of the United Kingdom'
  },
  {
    id: 'tf-4',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: Great Britain',
    difficulty: 'medium',
    statement: 'Great Britain is composed of four parts: England, Scotland, Wales, and Northern Ireland.',
    correctAnswer: false,
    correctedStatement: 'Great Britain consists of three parts on the island: England, Scotland, and Wales. (The UK consists of Great Britain plus Northern Ireland).',
    explanation: 'Great Britain consists of only England, Scotland, and Wales. Northern Ireland is part of the UK, not part of the island of Great Britain.',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 1. Great Britain'
  },
  {
    id: 'tf-5',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: Great Britain',
    difficulty: 'medium',
    statement: 'Great Britain is divided into smaller administrative regions called counties.',
    correctAnswer: true,
    explanation: 'The text confirms: "It is divided into smaller regions called counties."',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 1. Great Britain'
  },
  {
    id: 'tf-6',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: British Isles Population',
    difficulty: 'medium',
    statement: 'The combined population of the British Isles is nearly 72 million.',
    correctAnswer: true,
    explanation: 'The source states: "Their combined population is nearly 72 million."',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 3. The British Isles'
  },
  {
    id: 'tf-7',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'understanding-names',
    sectionTitle: 'Understanding Names: Channel Islands',
    difficulty: 'hard',
    statement: 'The Channel Islands (Alderney, Jersey, Guernsey, Sark) are always legally recognized as sovereign nations within the United Nations.',
    correctAnswer: false,
    correctedStatement: 'The Channel Islands (Alderney, Jersey, Guernsey and Sark) are a group of islands sometimes included geographically in the British Isles, not separate UN sovereign states.',
    explanation: 'The Channel Islands are sometimes included in the British Isles; they are not independent sovereign states with UN seats.',
    sourceSection: 'Chapter 1: Reading 1 - Understanding Names: 3. The British Isles'
  },
  {
    id: 'tf-8',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'four-nations',
    sectionTitle: 'The Four Nations',
    difficulty: 'easy',
    statement: 'Calling Britain "England" is incorrect and may offend people from Scotland, Wales, or Ireland.',
    correctAnswer: true,
    explanation: 'The source explicitly warns: "Calling Britain \'England\' is incorrect and may offend people from other nations."',
    sourceSection: 'Chapter 1: Reading 1 - The Four Nations'
  },
  {
    id: 'tf-9',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'four-nations',
    sectionTitle: 'The Four Nations: History',
    difficulty: 'medium',
    statement: 'In 1922, the entire island of Ireland was fully united under the London Parliament without any separation.',
    correctAnswer: false,
    correctedStatement: 'In 1922, most of Ireland broke away from the UK to become an independent sovereign state (Republic of Ireland).',
    explanation: 'In 1922, most of Ireland became an independent state, leaving only Northern Ireland within the UK.',
    sourceSection: 'Chapter 1: Reading 1 - The Four Nations'
  },
  {
    id: 'tf-10',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'dominance-of-england',
    sectionTitle: 'Dominance of England',
    difficulty: 'medium',
    statement: 'English is the main language spoken across all four nations of Britain.',
    correctAnswer: true,
    explanation: 'The source notes: "English is the main language of all four nations."',
    sourceSection: 'Chapter 1: Reading 1 - The Dominance of England'
  },
  {
    id: 'tf-11',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-1',
    sectionId: 'national-loyalties',
    sectionTitle: 'National Loyalties',
    difficulty: 'hard',
    statement: 'People living in England never support ancestral nations like Scotland or Wales in international sporting competitions.',
    correctAnswer: false,
    correctedStatement: 'Many people living in England identify with their Scottish, Welsh, or Irish family origins and often support their ancestral country in international sports.',
    explanation: 'The text states: "People often support their ancestral country in international sports, even if they were born or raised in England."',
    sourceSection: 'Chapter 1: Reading 1 - National Loyalties'
  },

  // --- Chapter 1: The Union Jack ---
  {
    id: 'tf-12',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'union-jack-intro',
    sectionTitle: 'The Union Jack',
    difficulty: 'easy',
    statement: 'The UK flag is also known as the Union Flag or the Royal Banner.',
    correctAnswer: true,
    explanation: 'The text states: "The UK flag is called the Union Jack, Union Flag or Royal Banner."',
    sourceSection: 'Chapter 1: Reading 2 - 1. The Union Jack'
  },
  {
    id: 'tf-13',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'three-parts-flag',
    sectionTitle: 'The Three Crosses',
    difficulty: 'easy',
    statement: 'St Patrick\'s Cross, representing Ireland, is a red diagonal cross on a white background.',
    correctAnswer: true,
    explanation: 'St Patrick\'s Cross is described as "A red diagonal cross on a white background."',
    sourceSection: 'Chapter 1: Reading 2 - 2. The Three Parts of the Flag'
  },
  {
    id: 'tf-14',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'formation-union-jack',
    sectionTitle: 'Formation of Union Jack',
    difficulty: 'medium',
    statement: 'The first Union Flag was created in 1606 by combining St George\'s Cross and St Andrew\'s Cross.',
    correctAnswer: true,
    explanation: 'In 1606, the first Union Flag combined England\'s St George\'s Cross and Scotland\'s St Andrew\'s Cross.',
    sourceSection: 'Chapter 1: Reading 2 - 3. The Formation of the Union Jack'
  },
  {
    id: 'tf-15',
    type: 'tf',
    chapterId: 'chapter-1',
    lessonId: 'reading-2',
    sectionId: 'formation-union-jack',
    sectionTitle: 'Formation of Union Jack',
    difficulty: 'hard',
    statement: 'Ireland\'s cross holds the more honourable position on the Union Flag because Ireland had a larger population than Scotland.',
    correctAnswer: false,
    correctedStatement: 'Scotland\'s cross holds the more honourable position on the Union Flag because Scotland joined the Union earlier than Ireland.',
    explanation: 'The text clarifies: "Scotland\'s cross has the more honourable position because Scotland joined the Union earlier."',
    sourceSection: 'Chapter 1: Reading 2 - 3. The Formation of the Union Jack'
  },

  // --- Chapter 2: Attitudes, Stereotypes & Traditions ---
  {
    id: 'tf-16',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'stereotypes-attitudes',
    sectionTitle: 'British Stereotypes',
    difficulty: 'easy',
    statement: 'Traditional stereotypes of British people always accurately reflect modern everyday British life.',
    correctAnswer: false,
    correctedStatement: 'Traditional stereotypes often come from the past (old books, songs, plays) and may no longer reflect modern British life.',
    explanation: 'The passage explicitly argues that traditional stereotypes should not always be accepted as true because society changes over time.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 1. British Stereotypes and Attitudes'
  },
  {
    id: 'tf-17',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'preservation-traditions',
    sectionTitle: 'Preservation of Traditions',
    difficulty: 'medium',
    statement: 'The British government kept London buses red mainly to preserve their traditional image and support tourism.',
    correctAnswer: true,
    explanation: 'The text states: "The government kept London buses red to preserve their traditional image and support tourism."',
    sourceSection: 'Chapter 2: Reading: Attitudes - 3. The Preservation of Traditions'
  },
  {
    id: 'tf-18',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'outdated-stereotypes',
    sectionTitle: 'Outdated Stereotypes',
    difficulty: 'medium',
    statement: 'In modern British shops, coffee is now bought more than tea.',
    correctAnswer: true,
    explanation: 'The text notes: "Coffee is now bought more than tea in British shops."',
    sourceSection: 'Chapter 2: Reading: Attitudes - 5. Outdated British Stereotypes'
  },
  {
    id: 'tf-19',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'outdated-stereotypes',
    sectionTitle: 'Outdated Stereotypes',
    difficulty: 'easy',
    statement: 'Bowler hats remain the standard daily headwear for most London businessmen today.',
    correctAnswer: false,
    correctedStatement: 'The stereotypical London gentleman\'s bowler hat is rarely worn today.',
    explanation: 'The text lists bowler hats under Outdated Stereotypes, stating that they are rarely worn today.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 5. Outdated British Stereotypes'
  },
  {
    id: 'tf-20',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-3',
    sectionId: 'truth-about-queuing',
    sectionTitle: 'The Truth About Queuing',
    difficulty: 'medium',
    statement: 'Some British banks have promised to serve customers within two minutes to address wait-time concerns.',
    correctAnswer: true,
    explanation: 'The text states: "Some banks even promise to serve customers within two minutes" to address waiting time frustrations.',
    sourceSection: 'Chapter 2: Reading: Attitudes - 6. The Truth About Queuing'
  },

  // --- Chapter 2: Multiculturalism, Conservatism, Being Different ---
  {
    id: 'tf-21',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'multiculturalism',
    sectionTitle: 'Multiculturalism',
    difficulty: 'medium',
    statement: 'British national identity is fixed and has remained completely unchanged since the medieval era.',
    correctAnswer: false,
    correctedStatement: 'British identity is not fixed; it continuously changes through the contributions of different immigrant communities.',
    explanation: 'The key idea states: "British identity is not fixed; it continuously changes through the contributions of different communities."',
    sourceSection: 'Chapter 2: Reading - 1. Multiculturalism'
  },
  {
    id: 'tf-22',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'conservatism',
    sectionTitle: 'Conservatism',
    difficulty: 'medium',
    statement: 'British conservatism means people dislike unnecessary change and prefer continuity and stability.',
    correctAnswer: true,
    explanation: 'The text states: "they generally dislike unnecessary change and prefer continuity and stability."',
    sourceSection: 'Chapter 2: Reading - 2. Conservatism'
  },
  {
    id: 'tf-23',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'conservatism',
    sectionTitle: 'Conservatism: Attachment to Past',
    difficulty: 'easy',
    statement: 'British people\'s sentimental attachment to the past is reflected in their preference for old houses and traditional-looking pubs.',
    correctAnswer: true,
    explanation: 'The text notes attachment to the past in their preference for old houses, traditional pubs, and historical Christmas cards.',
    sourceSection: 'Chapter 2: Reading - 2. Conservatism'
  },
  {
    id: 'tf-24',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'being-different',
    sectionTitle: 'Being Different: Driving',
    difficulty: 'easy',
    statement: 'British people drive on the left-hand side of the road and have strongly resisted switching to the right.',
    correctAnswer: true,
    explanation: 'The text notes: "British people drive on the left-hand side of the road. They strongly resist changing to driving on the right."',
    sourceSection: 'Chapter 2: Reading - 3. Being Different'
  },
  {
    id: 'tf-25',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-4',
    sectionId: 'being-different',
    sectionTitle: 'Being Different: Metric System',
    difficulty: 'medium',
    statement: 'The British public immediately and completely abandoned pounds, ounces, and Fahrenheit when the government introduced metric units.',
    correctAnswer: false,
    correctedStatement: 'The British government tried to introduce the metric system with limited success; people still commonly use pounds, ounces, Fahrenheit, and imperial liquid units.',
    explanation: 'The text states government efforts to introduce metric units had limited success, and people still commonly use traditional units.',
    sourceSection: 'Chapter 2: Reading - 3. Being Different'
  },

  // --- Chapter 2: Formality, Amateurism, Privacy ---
  {
    id: 'tf-26',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'formality-informality',
    sectionTitle: 'Formality and Informality',
    difficulty: 'medium',
    statement: 'Because Britain has many formal public ceremonies, British people are also formal and stiff in their private everyday lives.',
    correctAnswer: false,
    correctedStatement: 'British people distinguish between public formality and private informality; in private life, they are relaxed and casual.',
    explanation: 'The text clarifies that formal public ceremonies do not mean people are formal in everyday life; formality depends on whether they are in a public or private role.',
    sourceSection: 'Chapter 2: Reading - 1. Formality and Informality'
  },
  {
    id: 'tf-27',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'formality-informality',
    sectionTitle: 'Friendship and Social Behaviour',
    difficulty: 'medium',
    statement: 'British friends frequently shake hands every time they meet.',
    correctAnswer: false,
    correctedStatement: 'British people rarely shake hands with friends, avoiding formalities as a sign of friendship.',
    explanation: 'The text states British people show friendliness by avoiding formalities, such as "Rarely shaking hands with friends."',
    sourceSection: 'Chapter 2: Reading - 1. Formality and Informality'
  },
  {
    id: 'tf-28',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'public-spiritedness',
    sectionTitle: 'Public Spiritedness',
    difficulty: 'easy',
    statement: 'In Britain, donating blood is performed as a voluntary activity without financial payment.',
    correctAnswer: true,
    explanation: 'The text lists "Donating blood without payment" as an example of British voluntary activities.',
    sourceSection: 'Chapter 2: Reading - 2. Public Spiritedness and Amateurism'
  },
  {
    id: 'tf-29',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'privacy-and-sex',
    sectionTitle: 'Privacy and Sex',
    difficulty: 'medium',
    statement: 'In British social etiquette, the greeting "How do you do?" is a literal enquiry inviting detailed personal medical answers.',
    correctAnswer: false,
    correctedStatement: 'The greeting "How do you do?" is a social formality, not a real personal question.',
    explanation: 'The text explicitly states: "Even the greeting \'How do you do?\' is a social formality, not a real question."',
    sourceSection: 'Chapter 2: Reading - 3. Privacy and Sex'
  },
  {
    id: 'tf-30',
    type: 'tf',
    chapterId: 'chapter-2',
    lessonId: 'reading-5',
    sectionId: 'privacy-and-sex',
    sectionTitle: 'Privacy and Sex: Sex Education',
    difficulty: 'hard',
    statement: 'Many British teachers have historically avoided teaching sex education because they feel personally embarrassed.',
    correctAnswer: true,
    explanation: 'The text notes: "many teachers have avoided teaching it because they feel embarrassed."',
    sourceSection: 'Chapter 2: Reading - 3. Privacy and Sex'
  }
];

export const ALL_EXERCISE_ITEMS: ExerciseItem[] = [
  ...EXERCISE_MCQS,
  ...EXERCISE_TFS
];
