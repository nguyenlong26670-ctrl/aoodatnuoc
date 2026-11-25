import { Flashcard } from '../types';

export const FLASHCARD_ITEMS: Flashcard[] = [
  // Vocabulary Flashcards (with original source translations)
  {
    id: "fc-v1",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Stereotype",
    back: "A widely held but fixed and oversimplified image or idea of a particular type of person or thing.",
    vietnamese: "Định kiến / khuôn mẫu",
    details: [
      "In Chapter 2, it refers to traditional images of British people from old books, plays, and songs that no longer reflect modern life."
    ],
    status: "new"
  },
  {
    id: "fc-v2",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Tradition",
    back: "The transmission of customs or beliefs from generation to generation.",
    vietnamese: "Truyền thống",
    details: [
      "Britain is widely known as a 'land of tradition' due to its long history and political continuity."
    ],
    status: "new"
  },
  {
    id: "fc-v3",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Political continuity",
    back: "The uninterrupted, stable maintenance of political institutions and government over centuries without violent revolution.",
    vietnamese: "Sự liên tục về chính trị",
    details: [
      "Allows traditional ceremonies like the State Opening of Parliament and Trooping the Colour to endure for centuries."
    ],
    status: "new"
  },
  {
    id: "fc-v4",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Artificial preservation",
    back: "Maintaining or reintroducing traditions intentionally, often to attract tourists.",
    vietnamese: "Sự bảo tồn mang tính nhân tạo",
    details: [
      "Examples: Asquith taxi (1994, copying 1930s design) and keeping London buses red."
    ],
    status: "new"
  },
  {
    id: "fc-v5",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Individualistic",
    back: "Characterized by individualism; prioritizing personal independence and individual choices over rigid social conformity.",
    vietnamese: "Có tính cá nhân / đề cao cá nhân",
    details: [
      "In private life, British people are highly individualistic and rarely follow ancient customs uniformly."
    ],
    status: "new"
  },
  {
    id: "fc-v6",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Outdated",
    back: "No longer in use, fashionable, or representative of modern society.",
    vietnamese: "Lỗi thời / không còn phù hợp",
    details: [
      "Examples: Bowler hats (rarely worn), Full English breakfast (eaten by only ~10%), tea vs coffee."
    ],
    status: "new"
  },
  {
    id: "fc-v7",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Queue",
    back: "A line or sequence of people or vehicles awaiting their turn.",
    vietnamese: "Xếp hàng",
    details: [
      "Queuing is a social norm in Britain, but it does NOT mean British people enjoy waiting or are uniquely patient."
    ],
    status: "new"
  },
  {
    id: "fc-v8",
    category: "vocabulary",
    chapterId: "chapter-2",
    lessonId: "reading-3",
    front: "Patient",
    back: "Able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious.",
    vietnamese: "Kiên nhẫn",
    details: [
      "Surveys show British people find waiting times frustrating, debunking the myth that queuing equals patience."
    ],
    status: "new"
  },

  // Geography & Terms
  {
    id: "fc-g1",
    category: "geography",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "Great Britain vs The UK",
    back: "Great Britain is the physical island (England + Scotland + Wales). The UK is the sovereign political state (Great Britain + Northern Ireland).",
    details: [
      "Great Britain: 229,850 km²",
      "UK capital: London; seat at the United Nations."
    ],
    status: "new"
  },
  {
    id: "fc-g2",
    category: "geography",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "The British Isles",
    back: "A geographical group of islands in the North Atlantic off the north-west coast of Europe.",
    details: [
      "Includes: Great Britain, Ireland, Isle of Man, Hebrides, and >6,000 smaller islands.",
      "Total area: ~315,159 km²; population: nearly 72 million.",
      "Contains two sovereign states: The UK and The Republic of Ireland."
    ],
    status: "new"
  },
  {
    id: "fc-g3",
    category: "geography",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "The Four Nations & Capitals",
    back: "England (London), Scotland (Edinburgh), Wales (Cardiff), and Ireland / Northern Ireland.",
    details: [
      "Calling Britain 'England' is inaccurate and may offend people from Scotland, Wales, or Ireland.",
      "Historically had distinct Celtic vs Germanic languages and legal systems."
    ],
    status: "new"
  },

  // Historical Dates
  {
    id: "fc-h1",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    front: "1194",
    back: "St George's Cross was introduced by Richard I.",
    details: [
      "A red cross on a white background.",
      "Became England's official national flag."
    ],
    status: "new"
  },
  {
    id: "fc-h2",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "1603",
    back: "The name 'Great Britain' was first used during the reign of King James I.",
    details: [
      "England and Scotland shared the same monarch but kept separate parliaments at this time."
    ],
    status: "new"
  },
  {
    id: "fc-h3",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    front: "1606",
    back: "The first Union Flag was created after the union of England and Scotland.",
    details: [
      "Combined St George's Cross (England) and St Andrew's Cross (Scotland).",
      "A white border was added around the red cross per heraldic rules."
    ],
    status: "new"
  },
  {
    id: "fc-h4",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "1800 & 1 January 1801",
    back: "1800: Ireland joined Westminster Parliament. 1 January 1801: St Patrick's Cross was added to form the modern Union Flag.",
    details: [
      "United Kingdom of Great Britain and Ireland was established.",
      "St Patrick's Cross: red diagonal cross on white background."
    ],
    status: "new"
  },
  {
    id: "fc-h5",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-1",
    front: "1922",
    back: "Most of Ireland broke away to become an independent sovereign state (Republic of Ireland / Eire).",
    details: [
      "Northern Ireland remained part of the United Kingdom."
    ],
    status: "new"
  },
  {
    id: "fc-h6",
    category: "history",
    chapterId: "chapter-1",
    lessonId: "reading-2",
    front: "Why is the Welsh dragon absent from the Union Jack?",
    back: "Wales was already united with England in the 13th century and was considered a principality of England in 1606, not a separate kingdom.",
    details: [
      "Because it was already part of the Kingdom of England, Wales was represented by the English St George's Cross."
    ],
    status: "new"
  },

  // Values & Attitudes
  {
    id: "fc-a1",
    category: "attitudes",
    chapterId: "chapter-2",
    lessonId: "reading-4",
    front: "The 1993 Beer Measurement Fine",
    back: "A British pub was fined £3,100 for selling beer in European metric units instead of traditional pints and half-pints.",
    details: [
      "Demonstrates British people's pride in 'Being Different' and strong resistance to European standardization."
    ],
    status: "new"
  },
  {
    id: "fc-a2",
    category: "attitudes",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    front: "The 'Talented Amateur'",
    back: "The traditional British admiration for community volunteers and gifted non-professionals who give their free time to help society.",
    details: [
      "Historically reflected in public services, sports, Parliament, and education.",
      "Still visible in massive voluntary activities: Neighbourhood Watch, jumble sales, blood donation, and charities like Oxfam."
    ],
    status: "new"
  },
  {
    id: "fc-a3",
    category: "attitudes",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    front: "Public Role vs Private Role",
    back: "Formal in public situations (dress codes at banks/politics); highly informal in private life (casual clothes, first names, 'help yourself').",
    details: [
      "Informality in Britain signifies friendship and acceptance, not disrespect."
    ],
    status: "new"
  },
  {
    id: "fc-a4",
    category: "attitudes",
    chapterId: "chapter-2",
    lessonId: "reading-5",
    front: "British Stance on Privacy and Sex",
    back: "Privacy is a fundamental right. Attitudes towards sex are increasingly open and tolerant, yet sex remains a private, embarrassing topic.",
    details: [
      "Prostitution itself is not illegal in Britain, but soliciting (publicly approaching people for customers) is illegal.",
      "Public figure scandals arise when private behaviour conflicts with public duty, national security, or the law."
    ],
    status: "new"
  }
];
