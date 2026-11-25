import { QuizQuestion } from '../types';

export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- Chapter 1: Quick Checks & Chapter 1 Exam ---
  {
    id: "q-c1-1",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "Which of the following is the largest island in the British Isles?",
    options: ["Ireland", "Great Britain", "Isle of Man", "Jersey"],
    correctAnswer: 1,
    explanation: "According to the source, Great Britain is the largest island, while Ireland is the second largest island of the British Isles.",
    sourceReference: "Chapter 1 - Reading 1: 1. Geographically Speaking"
  },
  {
    id: "q-c1-2",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "What is the official full name of the UK?",
    options: [
      "The United Kingdom of Great Britain and Ireland",
      "The United Kingdom of Great Britain and Northern Ireland",
      "The Commonwealth of Great Britain",
      "The United Kingdom of the British Isles"
    ],
    correctAnswer: 1,
    explanation: "The official full name is 'The United Kingdom of Great Britain and Northern Ireland'.",
    sourceReference: "Chapter 1 - Reading 1: 3. Names of the United Kingdom"
  },
  {
    id: "q-c1-3",
    type: "true-false",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "True or False: 'British Isles' is a political state term.",
    correctAnswer: false,
    explanation: "'British Isles' is a geographical term, whereas 'The UK' is the political sovereign state.",
    sourceReference: "Chapter 1 - Reading 1: Key distinction to remember"
  },
  {
    id: "q-c1-4",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "In what year was the name 'Great Britain' first used during the reign of King James I?",
    options: ["1194", "1603", "1606", "1801"],
    correctAnswer: 1,
    explanation: "The name Great Britain was first used in 1603 during the reign of King James I when England and Scotland shared the same monarch.",
    sourceReference: "Chapter 1 - Reading 1: Understanding Names - 1. Great Britain"
  },
  {
    id: "q-c1-5",
    type: "fill-blank",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "Great Britain is the largest island of the British Isles, with an area of _____ km² (enter the number only, e.g. 229,850 or 229850).",
    acceptedAnswers: ["229,850", "229850"],
    hint: "Over 220,000 square kilometres",
    explanation: "According to the source, Great Britain has an area of 229,850 km².",
    sourceReference: "Chapter 1 - Reading 1: Understanding Names - 1. Great Britain"
  },
  {
    id: "q-c1-6",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "What is the combined population of the British Isles approximately?",
    options: ["Nearly 50 million", "Nearly 60 million", "Nearly 72 million", "Nearly 85 million"],
    correctAnswer: 2,
    explanation: "The source states that the combined population of the British Isles is nearly 72 million.",
    sourceReference: "Chapter 1 - Reading 1: Understanding Names - 3. The British Isles"
  },
  {
    id: "q-c1-7",
    type: "matching",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "Match each nation of Great Britain to its capital city:",
    pairs: [
      { left: "England", right: "London" },
      { left: "Scotland", right: "Edinburgh" },
      { left: "Wales", right: "Cardiff" }
    ],
    explanation: "England's capital is London, Scotland's is Edinburgh, and Wales's is Cardiff.",
    sourceReference: "Chapter 1 - Reading 1: Understanding Names - 1. Great Britain"
  },
  {
    id: "q-c1-8",
    type: "true-false",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "True or False: Calling Britain 'England' is correct and acceptable to everyone from Scotland and Wales.",
    correctAnswer: false,
    explanation: "Calling Britain 'England' is incorrect and may offend people from other nations such as Scotland, Wales, or Ireland.",
    sourceReference: "Chapter 1 - Reading 1: The Four Nations"
  },
  {
    id: "q-c1-9",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "In which year did Ireland join the Parliament at Westminster to form the United Kingdom of Great Britain and Ireland?",
    options: ["1603", "1606", "1800", "1922"],
    correctAnswer: 2,
    explanation: "In 1800, Ireland joined the Parliament at Westminster, forming the United Kingdom of Great Britain and Ireland. In 1922, most of Ireland became independent.",
    sourceReference: "Chapter 1 - Reading 1: The Four Nations"
  },
  {
    id: "q-c1-10",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    prompt: "Which term is often used to describe relations involving Britain, such as with America?",
    options: ["Gaelic", "Anglo", "Britannic", "Celtic"],
    correctAnswer: 1,
    explanation: "The term 'Anglo' is often used to describe relations involving Britain, such as Anglo-American relations.",
    sourceReference: "Chapter 1 - Reading 1: The Dominance of England"
  },

  // Reading 2: Union Jack
  {
    id: "q-c1-11",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    prompt: "In what year was St George's Cross introduced by King Richard I?",
    options: ["1066", "1194", "1606", "1801"],
    correctAnswer: 1,
    explanation: "St George's Cross (red cross on white background) was introduced by Richard I in 1194.",
    sourceReference: "Chapter 1 - Reading 2: 2. The Three Parts of the Flag - a. St George's Cross"
  },
  {
    id: "q-c1-12",
    type: "matching",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    prompt: "Match the patron saint cross to its country and flag design:",
    pairs: [
      { left: "St George's Cross (England)", right: "Red cross on white background" },
      { left: "St Andrew's Cross (Scotland)", right: "White diagonal cross on blue background" },
      { left: "St Patrick's Cross (Ireland)", right: "Red diagonal cross on white background" }
    ],
    explanation: "St George = red cross on white; St Andrew = white diagonal on blue; St Patrick = red diagonal on white.",
    sourceReference: "Chapter 1 - Reading 2: 2. The Three Parts of the Flag"
  },
  {
    id: "q-c1-13",
    type: "ordering",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    prompt: "Order the historical milestones of the Union Flag chronologically from earliest to latest:",
    items: [
      { id: "o-1", text: "Richard I introduced St George's Cross (England)", correctOrder: 1 },
      { id: "o-2", text: "First Union Flag created combining England and Scotland", correctOrder: 2 },
      { id: "o-3", text: "Ireland united with Great Britain; St Patrick's Cross added", correctOrder: 3 }
    ],
    explanation: "1194 (Richard I introduces St George's Cross) -> 1606 (First Union Flag: England + Scotland) -> 1 January 1801 (Ireland added).",
    sourceReference: "Chapter 1 - Reading 2: 3. The Formation of the Union Jack"
  },
  {
    id: "q-c1-14",
    type: "multiple-choice",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    prompt: "Why doesn't the Welsh dragon appear on the Union Flag?",
    options: [
      "The dragon was considered a pagan symbol by heralds",
      "Wales was already united with England in the 13th century and was considered a principality, not a separate nation in 1606",
      "The dragon could not fit onto the cross layout",
      "Wales refused to join the flag union"
    ],
    correctAnswer: 1,
    explanation: "Wales was already united with England in the 13th century and was considered a principality of the Kingdom of England, not a separate nation when the first Union Flag was created in 1606.",
    sourceReference: "Chapter 1 - Reading 2: 4. Why Doesn't the Welsh Dragon Appear on the Union Flag?"
  },
  {
    id: "q-c1-15",
    type: "true-false",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    prompt: "True or False: The Union Jack is perfectly symmetrical because both Scotland and Ireland joined at the exact same time.",
    correctAnswer: false,
    explanation: "False! The flag is not symmetrical because the Scottish and Irish crosses are arranged differently according to heraldic rules; Scotland's cross has the more honourable position because Scotland joined earlier.",
    sourceReference: "Chapter 1 - Reading 2: 3. The Formation of the Union Jack"
  },

  // --- Chapter 2: Attitudes, Multiculturalism, Conservatism, Being Different, Formality, Privacy ---
  {
    id: "q-c2-1",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    prompt: "Which 1994 vehicle introduction in London is cited as an example of an artificially preserved tradition for tourism?",
    options: ["Routemaster Red Bus", "Asquith taxi", "Black Hackney carriage", "Austin FX4"],
    correctAnswer: 1,
    explanation: "The Asquith taxi was introduced in London in 1994, copying the design of 1930s taxis to attract tourists.",
    sourceReference: "Chapter 2 - Reading: Attitudes - 3. The Preservation of Traditions"
  },
  {
    id: "q-c2-2",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    prompt: "Approximately what percentage of British people regularly eat the full traditional English breakfast today?",
    options: ["About 10%", "About 25%", "About 50%", "About 70%"],
    correctAnswer: 0,
    explanation: "According to the source, only about 10% of British people eat the full traditional breakfast.",
    sourceReference: "Chapter 2 - Reading: Attitudes - 5. Outdated British Stereotypes"
  },
  {
    id: "q-c2-3",
    type: "true-false",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    prompt: "True or False: British people form queues because they genuinely enjoy waiting and have endless patience.",
    correctAnswer: false,
    explanation: "False! The passage explains that forming queues does not mean they enjoy waiting or are particularly patient; surveys show they consider waiting times a problem, and some banks even promise service within two minutes.",
    sourceReference: "Chapter 2 - Reading: Attitudes - 6. The Truth About Queuing"
  },
  {
    id: "q-c2-4",
    type: "matching",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    prompt: "Match each English vocabulary word to its exact Vietnamese translation from the text:",
    pairs: [
      { left: "Stereotype", right: "Định kiến / khuôn mẫu" },
      { left: "Artificial preservation", right: "Sự bảo tồn mang tính nhân tạo" },
      { left: "Political continuity", right: "Sự liên tục về chính trị" },
      { left: "Individualistic", right: "Có tính cá nhân / đề cao cá nhân" }
    ],
    explanation: "These are the exact translations provided in the source text's Important Vocabulary section.",
    sourceReference: "Chapter 2 - Reading: Attitudes - Important Vocabulary"
  },
  {
    id: "q-c2-5",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-4",
    prompt: "Which festival, inspired by Caribbean culture, is highlighted as one of Britain's most popular cultural celebrations?",
    options: ["Glastonbury Festival", "Notting Hill Carnival", "Edinburgh Fringe", "May Day Parade"],
    correctAnswer: 1,
    explanation: "The Notting Hill Carnival, inspired by Caribbean culture, is one of Britain's most popular festivals.",
    sourceReference: "Chapter 2 - Reading: Multiculturalism"
  },
  {
    id: "q-c2-6",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-4",
    prompt: "Which two children's authors are cited as examples of the British preference for books depicting an idealized world of the past?",
    options: [
      "J.K. Rowling and C.S. Lewis",
      "Roald Dahl and Enid Blyton",
      "Beatrix Potter and Lewis Carroll",
      "Philip Pullman and J.R.R. Tolkien"
    ],
    correctAnswer: 1,
    explanation: "Roald Dahl and Enid Blyton were popular writers whose books often describe an idealized world of the past, reflecting conservative attitudes.",
    sourceReference: "Chapter 2 - Reading: Conservatism"
  },
  {
    id: "q-c2-7",
    type: "fill-blank",
    chapterId: "chapter-2",
    lessonId: "reading-4",
    prompt: "In 1993, a British pub was fined £_____ for selling beer in European measurements instead of traditional pints and half-pints (enter the number only, e.g. 3,100 or 3100).",
    acceptedAnswers: ["3,100", "3100"],
    hint: "Over three thousand pounds",
    explanation: "In 1993, a pub was fined £3,100 for selling beer in European measurements.",
    sourceReference: "Chapter 2 - Reading: Being Different - d. Beer measurements"
  },
  {
    id: "q-c2-8",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-4",
    prompt: "In Britain, in which month does the financial year start rather than January?",
    options: ["March", "April", "July", "September"],
    correctAnswer: 1,
    explanation: "Britain's financial year starts in April rather than January.",
    sourceReference: "Chapter 2 - Reading: Being Different - e. Time and financial systems"
  },
  {
    id: "q-c2-9",
    type: "true-false",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    prompt: "True or False: When a British person says 'help yourself' or uses first names with a guest, it is considered a sign of disrespect.",
    correctAnswer: false,
    explanation: "False! Being informal means accepting someone as a friend, not showing disrespect.",
    sourceReference: "Chapter 2 - Reading: Formality and Informality - c. Friendship and Social Behaviour"
  },
  {
    id: "q-c2-10",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    prompt: "Traditionally, British society admired what kind of contributor over excessive professionalism?",
    options: ["The strict bureaucrat", "The talented amateur", "The academic scholar", "The political specialist"],
    correctAnswer: 1,
    explanation: "Traditionally, British society valued the 'talented amateur' rather than excessive professionalism.",
    sourceReference: "Chapter 2 - Reading: Public Spiritedness and Amateurism"
  },
  {
    id: "q-c2-11",
    type: "multiple-choice",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    prompt: "Which of the following is NOT one of the charities explicitly listed as examples of voluntary support in the source?",
    options: ["Oxfam", "Amnesty International", "Save the Children Fund", "Greenpeace International"],
    correctAnswer: 3,
    explanation: "The charities explicitly listed in the source are Oxfam, Amnesty International, Save the Children Fund, and The National Trust.",
    sourceReference: "Chapter 2 - Reading: Public Spiritedness and Amateurism"
  },
  {
    id: "q-c2-12",
    type: "true-false",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    prompt: "True or False: In Britain, prostitution itself is illegal, but soliciting customers publicly is legal.",
    correctAnswer: false,
    explanation: "False! Prostitution itself is NOT illegal in Britain, but publicly approaching people to find customers (soliciting) IS illegal.",
    sourceReference: "Chapter 2 - Reading: Privacy and Sex - c. Prostitution"
  },
  {
    id: "q-c2-13",
    type: "matching",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    prompt: "Match the three key contrasting values of British society summarized in the overall conclusion:",
    pairs: [
      { left: "Public vs Private roles", right: "Formal in public, informal in private" },
      { left: "Individual vs Community", right: "Individualistic but willing to contribute to the community" },
      { left: "Sex vs Privacy", right: "Open-minded about sex but protective of privacy" }
    ],
    explanation: "These are the exact three contrasting pairs highlighted in the Overall Conclusion of Chapter 2.",
    sourceReference: "Chapter 2: Overall Conclusion"
  }
];

export const QUIZ_SETS = [
  {
    id: "quick-ch1-r1",
    title: "Quick Check: Country & People",
    description: "5 rapid-fire questions testing geography, naming conventions, and the Four Nations.",
    questionIds: ["q-c1-1", "q-c1-2", "q-c1-3", "q-c1-4", "q-c1-8"]
  },
  {
    id: "quick-ch1-r2",
    title: "Quick Check: The Union Jack",
    description: "5 questions on the history, patron crosses, and formation of the Union Flag.",
    questionIds: ["q-c1-11", "q-c1-12", "q-c1-13", "q-c1-14", "q-c1-15"]
  },
  {
    id: "quick-ch2-attitudes",
    title: "Quick Check: Attitudes & Stereotypes",
    description: "Questions on British stereotypes, queuing reality, and core vocabulary.",
    questionIds: ["q-c2-1", "q-c2-2", "q-c2-3", "q-c2-4"]
  },
  {
    id: "quick-ch2-values",
    title: "Quick Check: Values, Privacy & Society",
    description: "Check your understanding of the talented amateur, privacy, formality, and contrasts.",
    questionIds: ["q-c2-5", "q-c2-7", "q-c2-9", "q-c2-10", "q-c2-12", "q-c2-13"]
  },
  {
    id: "quiz-chapter-1",
    title: "Chapter 1 Comprehensive Quiz",
    description: "Test all topics in Chapter 1: Geography, Names, Dominance of England, and the Union Jack.",
    questionIds: ["q-c1-1", "q-c1-2", "q-c1-3", "q-c1-4", "q-c1-5", "q-c1-6", "q-c1-7", "q-c1-8", "q-c1-9", "q-c1-10", "q-c1-11", "q-c1-12", "q-c1-13", "q-c1-14", "q-c1-15"]
  },
  {
    id: "quiz-chapter-2",
    title: "Chapter 2 Comprehensive Quiz",
    description: "Test all topics in Chapter 2: Stereotypes, Multiculturalism, Conservatism, Formality, and Privacy.",
    questionIds: ["q-c2-1", "q-c2-2", "q-c2-3", "q-c2-4", "q-c2-5", "q-c2-6", "q-c2-7", "q-c2-8", "q-c2-9", "q-c2-10", "q-c2-11", "q-c2-12", "q-c2-13"]
  },
  {
    id: "quiz-part-1-exam",
    title: "Comprehensive Part I Final Examination",
    description: "Complete certification exam covering 100% of the material in Part I: The Country of Britain.",
    questionIds: ALL_QUIZ_QUESTIONS.map(q => q.id)
  }
];
