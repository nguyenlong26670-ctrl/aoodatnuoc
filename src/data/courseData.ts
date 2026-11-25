import { Chapter } from '../types';

export const COURSE_TITLE = "PART I: THE COUNTRY OF BRITAIN";
export const COURSE_SUBTITLE = "Key Knowledge & Cultural Insights from the Original Study Guide";

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: "chapter-1",
    number: 1,
    title: "A FIRST LOOK AT THE UNITED KINGDOM",
    description: "Geography, Political Divisions, Names of the UK, The Four Nations, English Dominance, National Loyalties, and the History & Meaning of the Union Jack.",
    readings: [
      {
        id: "reading-1",
        chapterId: "chapter-1",
        title: "Reading 1: Country and People",
        subtitle: "Geography, States, Names, Four Nations, and Loyalties",
        estimatedMinutes: 15,
        sections: [
          {
            id: "geo-speaking",
            number: "1",
            title: "Geographically Speaking",
            subsections: [
              {
                id: "geo-points",
                title: "Geographical Location & Major Islands",
                bullets: [
                  "The British Isles are located off the north-west coast of Europe.",
                  "They consist of two large islands and several smaller islands.",
                  "The two largest islands are: Great Britain – the largest island, and Ireland – the second largest island."
                ],
                componentType: "british-isles-diagram"
              }
            ]
          },
          {
            id: "politically-speaking",
            number: "2",
            title: "Politically Speaking",
            subsections: [
              {
                id: "political-states",
                title: "Two Independent States in the British Isles",
                bullets: [
                  "There are two independent states in the British Isles:",
                  "The Republic of Ireland (Eire): Governs most of the island of Ireland.",
                  "The United Kingdom (UK): Governs Great Britain, Northern Ireland and most smaller islands."
                ]
              }
            ]
          },
          {
            id: "names-of-uk",
            number: "3",
            title: "Names of the United Kingdom",
            subsections: [
              {
                id: "names-list",
                title: "Official and Common Designations",
                bullets: [
                  "The United Kingdom of Great Britain and Northern Ireland: Official full name.",
                  "The United Kingdom / The UK: Commonly used names.",
                  "Great Britain (GB): Used in international sporting events and car stickers.",
                  "Britain: Used in both formal and informal contexts.",
                  "British: The adjective referring to the UK and its people or culture."
                ]
              }
            ],
            keyDistinction: {
              title: "Key distinction to remember:",
              items: [
                { label: "British Isles", text: "A geographical term." },
                { label: "Great Britain", text: "The largest island." },
                { label: "The UK", text: "A political state consisting of Great Britain and Northern Ireland." },
                { label: "The Republic of Ireland", text: "An independent state separate from the UK." }
              ]
            }
          },
          {
            id: "understanding-names",
            title: "UNDERSTANDING NAMES",
            subsections: [
              {
                id: "und-gb",
                badge: "1",
                title: "Great Britain",
                bullets: [
                  "Great Britain consists of three parts:",
                  "• England – Capital: London.",
                  "• Scotland – Capital: Edinburgh.",
                  "• Wales – Capital: Cardiff.",
                  "It is divided into smaller regions called counties.",
                  "The name Great Britain was first used in 1603 during the reign of King James I.",
                  "England and Scotland shared the same monarch but kept separate parliaments.",
                  "Great Britain is the largest island of the British Isles, with an area of 229,850 km²."
                ]
              },
              {
                id: "und-uk",
                badge: "2",
                title: "The United Kingdom (UK)",
                bullets: [
                  "The UK is an independent sovereign country with its own government and a seat at the United Nations.",
                  "Its full official name is The United Kingdom of Great Britain and Northern Ireland.",
                  "It consists of: Great Britain (England, Scotland and Wales) and Northern Ireland.",
                  "The capital city is London, where the UK government and parliament are located.",
                  "Its short name is the UK."
                ]
              },
              {
                id: "und-bi",
                badge: "3",
                title: "The British Isles",
                bullets: [
                  "The British Isles are a group of islands in the North Atlantic, off the north-west coast of Europe.",
                  "They include:",
                  "• Great Britain and Ireland.",
                  "• The Isle of Man and the Hebrides.",
                  "• More than 6,000 smaller islands.",
                  "Their total area is approximately 315,159 km².",
                  "Their combined population is nearly 72 million.",
                  "They include two sovereign states:",
                  "• The Republic of Ireland – covers about five-sixths of Ireland.",
                  "• The United Kingdom – consists of Great Britain and Northern Ireland.",
                  "The Channel Islands (Alderney, Jersey, Guernsey and Sark) are sometimes included in the British Isles."
                ]
              }
            ],
            summaryTable: {
              title: "Quick Comparison to Remember",
              headers: ["Term", "Meaning"],
              rows: [
                ["Great Britain", "England + Scotland + Wales"],
                ["The UK", "Great Britain + Northern Ireland"],
                ["The British Isles", "Geographical group of islands, including Great Britain and Ireland"]
              ]
            }
          },
          {
            id: "four-nations",
            title: "The Four Nations",
            subsections: [
              {
                id: "fn-points",
                title: "Historical Background & Unification",
                bullets: [
                  "Britain consists of four nations: England, Scotland, Wales and Ireland.",
                  "Calling Britain “England” is incorrect and may offend people from other nations.",
                  "The political unification of the four nations was a gradual process:",
                  "• 1800: Ireland joined the Parliament at Westminster, forming the United Kingdom of Great Britain and Ireland.",
                  "• 1922: Most of Ireland became an independent state.",
                  "Historically, the four nations had different:",
                  "• Racial and cultural backgrounds.",
                  "• Languages (Celtic and Germanic languages).",
                  "• Economic, social and legal systems.",
                  "Today, many differences have disappeared, but national identities remain strong.",
                  "Although there is one UK government, some government activities are organized separately in each nation."
                ],
                componentType: "four-nations-diagram"
              }
            ]
          },
          {
            id: "dominance-of-england",
            title: "The Dominance of England",
            subsections: [
              {
                id: "dom-points",
                title: "Cultural, Political, and Linguistic Dominance",
                bullets: [
                  "England has the strongest cultural and political influence in Britain.",
                  "English is the main language of all four nations.",
                  "The political system and many everyday customs originated in England.",
                  "Britain's unification happened mainly because of England's economic and military power, not mutual agreement.",
                  "English influence can be seen in British public life:",
                  "• The country's central bank is called the Bank of England.",
                  "• The monarch is known as Elizabeth II.",
                  "• The term “Anglo” is often used to describe relations involving Britain, such as Anglo-American relations."
                ]
              }
            ]
          },
          {
            id: "national-loyalties",
            title: "National Loyalties",
            subsections: [
              {
                id: "loyalties-points",
                title: "Complexities of Identity and Sporting Support",
                bullets: [
                  "It is safer to use “Britain” for the country and “British” for nationality instead of calling everyone English.",
                  "England is only one part of the UK.",
                  "Many people living in England identify as Scottish, Welsh or Irish because of their family origins.",
                  "People often support their ancestral country in international sports, even if they were born or raised in England.",
                  "People of Caribbean and South Asian descent may proudly identify as British but not necessarily English.",
                  "National loyalties can be complicated:",
                  "• People may support different countries in different sports.",
                  "• Family background and cultural identity influence sporting loyalties.",
                  "• English people may also support Scottish, Welsh or Irish teams when they compete against countries outside the British Isles."
                ]
              }
            ],
            summaryTable: {
              title: "Quick Summary to Remember",
              headers: ["Topic", "Key idea"],
              rows: [
                ["The Four Nations", "Britain has four historical national identities: England, Scotland, Wales and Ireland."],
                ["The Dominance of England", "England has the greatest political and cultural influence in Britain."],
                ["National Loyalties", "British people may identify with their ancestral nations rather than simply as English."]
              ]
            }
          }
        ]
      },
      {
        id: "reading-2",
        chapterId: "chapter-1",
        title: "Reading 2: The History and Meaning of the Union Jack",
        subtitle: "Components, Crosses, Historical Formation, and Welsh Dragon Absence",
        estimatedMinutes: 12,
        sections: [
          {
            id: "union-jack-intro",
            number: "1",
            title: "The Union Jack",
            subsections: [
              {
                id: "uj-definition",
                title: "Names and Symbolism",
                bullets: [
                  "The UK flag is called the Union Jack, Union Flag or Royal Banner.",
                  "It combines three national flags: England, Scotland and Ireland.",
                  "The name “Union Jack” is traditionally associated with the flag flown at the bows of warships.",
                  "The flag symbolizes the political union of the British Isles and respect for individual identities within a united community."
                ],
                componentType: "union-jack-timeline"
              }
            ]
          },
          {
            id: "three-parts-flag",
            number: "2",
            title: "The Three Parts of the Flag",
            subsections: [
              {
                id: "cross-england",
                letter: "a",
                title: "St George's Cross (England)",
                bullets: [
                  "A red cross on a white background.",
                  "Introduced by Richard I in 1194.",
                  "Became England's national flag."
                ]
              },
              {
                id: "cross-scotland",
                letter: "b",
                title: "St Andrew's Cross (Scotland)",
                bullets: [
                  "A white diagonal cross on a blue background.",
                  "St Andrew became Scotland's patron saint in the 11th century.",
                  "Scottish troops had used the white cross since the 14th century."
                ]
              },
              {
                id: "cross-ireland",
                letter: "c",
                title: "St Patrick's Cross (Ireland)",
                bullets: [
                  "A red diagonal cross on a white background.",
                  "Represents Ireland and its patron saint, St Patrick.",
                  "St Patrick helped spread Christianity in Ireland by building churches, monasteries and schools."
                ]
              }
            ]
          },
          {
            id: "formation-union-jack",
            number: "3",
            title: "The Formation of the Union Jack",
            subsections: [
              {
                id: "formation-steps",
                title: "1606 and 1801 Milestones",
                bullets: [
                  "1606: The first Union Flag was created after the union of England and Scotland.",
                  "It combined St George's Cross and St Andrew's Cross.",
                  "A white border was added around the red cross according to heraldic rules.",
                  "1 January 1801: Ireland united with Great Britain, and St Patrick's Cross was added.",
                  "The resulting design is the Union Flag used today.",
                  "The flag is not symmetrical because the Scottish and Irish crosses are arranged in different positions according to heraldic rules.",
                  "Scotland's cross has the more honourable position because Scotland joined the Union earlier."
                ]
              }
            ]
          },
          {
            id: "welsh-dragon-absence",
            number: "4",
            title: "Why Doesn't the Welsh Dragon Appear on the Union Flag?",
            subsections: [
              {
                id: "wales-status",
                title: "Historical Union in the 13th Century",
                bullets: [
                  "Wales was already united with England in the 13th century.",
                  "When the first Union Flag was created in 1606, Wales was not considered a separate nation but a principality of the Kingdom of England.",
                  "Therefore, the Welsh dragon was not included in the Union Flag."
                ]
              }
            ],
            summaryTable: {
              title: "Quick Summary to Remember",
              headers: ["Topic", "Key information"],
              rows: [
                ["Union Jack", "Combination of three national flags."],
                ["England", "St George's Cross – red cross on white."],
                ["Scotland", "St Andrew's Cross – white diagonal cross on blue."],
                ["Ireland", "St Patrick's Cross – red diagonal cross on white."],
                ["1606", "First Union Flag (England + Scotland)."],
                ["1801", "Present Union Flag created (England + Scotland + Ireland)."],
                ["Wales", "Welsh dragon is absent because Wales was already united with England."]
              ]
            },
            keyConcept: "The Union Jack represents the union of England, Scotland and Ireland through the combination of their national crosses."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-2",
    number: 2,
    title: "TRADITIONAL BELIEFS AND VALUES",
    description: "Attitudes, Stereotypes vs Reality, Multiculturalism, Conservatism, Being Different, Formality vs Informality, Public Spiritedness, Privacy & Sex.",
    readings: [
      {
        id: "reading-3",
        chapterId: "chapter-2",
        title: "Reading: Attitudes – Stereotypes & Traditions",
        subtitle: "Stereotypes, Land of Tradition, Everyday Life, Queuing, and Vocabulary",
        estimatedMinutes: 15,
        sections: [
          {
            id: "stereotypes-attitudes",
            number: "1",
            title: "British Stereotypes and Attitudes",
            subsections: [
              {
                id: "stereo-intro",
                title: "Perception vs Social Change",
                bullets: [
                  "British people are often associated with certain typical characteristics.",
                  "However, stereotypes should not always be accepted as true because society changes over time.",
                  "Traditional images of British people may no longer reflect modern British life."
                ]
              }
            ]
          },
          {
            id: "stereotypes-change",
            number: "2",
            title: "Stereotypes and Change",
            subsections: [
              {
                id: "land-tradition",
                title: "Reputation and Public Ceremonies",
                bullets: [
                  "Society changes, but its reputation and stereotypes often remain unchanged.",
                  "Many British stereotypes come from old books, songs and plays.",
                  "Britain is widely known as a “land of tradition” because of its long history and political continuity.",
                  "Some public ceremonies still preserve centuries-old traditions, such as:",
                  "• The State Opening of Parliament.",
                  "• Trooping the Colour.",
                  "• Changing the Guard at Buckingham Palace."
                ]
              }
            ]
          },
          {
            id: "preservation-traditions",
            number: "3",
            title: "The Preservation of Traditions",
            subsections: [
              {
                id: "art-preserv",
                title: "Artificial Preservation for Tourism",
                bullets: [
                  "Some traditions are artificially preserved or reintroduced to attract tourists.",
                  "Examples:",
                  "• Asquith taxi: Introduced in London in 1994, copying the design of 1930s taxis.",
                  "• Red buses: The government kept London buses red to preserve their traditional image and support tourism."
                ]
              }
            ]
          },
          {
            id: "traditions-everyday-life",
            number: "4",
            title: "Traditions in Everyday Life",
            subsections: [
              {
                id: "everyday-reality",
                title: "Private Life vs Traditional Image",
                bullets: [
                  "In private life, British people are generally less traditional than people in many other countries.",
                  "Few ancient customs are regularly followed by most families.",
                  "British people are highly individualistic.",
                  "They are also enthusiastic video watchers, which contrasts with the image of a traditional society."
                ]
              }
            ]
          },
          {
            id: "outdated-stereotypes",
            number: "5",
            title: "Outdated British Stereotypes",
            subsections: [
              {
                id: "outdated-list",
                title: "Habits No Longer Common in Modern Times",
                bullets: [
                  "Many supposedly typical British habits are no longer common:",
                  "• Bowler hats: The stereotypical London gentleman's hat is rarely worn today.",
                  "• Traditional English breakfast: Only about 10% of British people eat the full traditional breakfast.",
                  "• Tea drinking: Coffee is now bought more than tea in British shops.",
                  "• Afternoon tea: It is mainly enjoyed by retired people and the upper-middle class, rather than the majority."
                ],
                componentType: "comparison-cards"
              }
            ]
          },
          {
            id: "truth-about-queuing",
            number: "6",
            title: "The Truth About Queuing",
            subsections: [
              {
                id: "queue-reality",
                title: "Orderliness vs Actual Patience",
                bullets: [
                  "British people are famous for forming queues when waiting for services.",
                  "However, this does not mean they enjoy waiting or are particularly patient.",
                  "Surveys and newspaper reports show that British people consider waiting times a problem.",
                  "Some banks even promise to serve customers within two minutes.",
                  "Therefore, the stereotype of British people as patient because they queue is misleading."
                ]
              }
            ],
            summaryTable: {
              title: "Quick Summary to Remember",
              headers: ["Topic", "Key idea"],
              rows: [
                ["Stereotypes and Change", "British stereotypes often come from the past and may not reflect modern life."],
                ["Land of Tradition", "Britain preserves traditional public ceremonies and customs."],
                ["Artificial Traditions", "Some traditions are maintained mainly for tourism."],
                ["Everyday Life", "British people are individualistic and less traditional than commonly believed."],
                ["Outdated Stereotypes", "Traditional breakfast, tea drinking and bowler hats are no longer typical."],
                ["Queuing", "British people queue but do not necessarily enjoy waiting."]
              ]
            },
            vocabularyItems: [
              { term: "Stereotype", vietnamese: "Định kiến / khuôn mẫu", definition: "A widely held but fixed and oversimplified image or idea of a particular type of person or thing." },
              { term: "Tradition", vietnamese: "Truyền thống", definition: "The transmission of customs or beliefs from generation to generation." },
              { term: "Political continuity", vietnamese: "Sự liên tục về chính trị", definition: "The uninterrupted, stable maintenance of political institutions over long historical periods." },
              { term: "Artificial preservation", vietnamese: "Sự bảo tồn mang tính nhân tạo", definition: "Maintaining customs or objects artificially, often for commercial or tourism purposes." },
              { term: "Individualistic", vietnamese: "Có tính cá nhân / đề cao cá nhân", definition: "Characterized by individualism; prioritizing personal independence and individual choices." },
              { term: "Outdated", vietnamese: "Lỗi thời / không còn phù hợp", definition: "No longer in use or fashionable; out of date." },
              { term: "Queue", vietnamese: "Xếp hàng", definition: "A line or sequence of people or vehicles awaiting their turn." },
              { term: "Patient", vietnamese: "Kiên nhẫn", definition: "Able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious." }
            ],
            mainConclusion: "Britain has a strong traditional image, especially in public life, but many traditional stereotypes do not accurately represent the everyday lives and attitudes of modern British people."
          }
        ]
      },
      {
        id: "reading-4",
        chapterId: "chapter-2",
        title: "Reading: Multiculturalism, Conservatism & Being Different",
        subtitle: "Immigration, Cultural Contributions, Continuity, and Distinct National Identity",
        estimatedMinutes: 16,
        sections: [
          {
            id: "multiculturalism",
            number: "1",
            title: "Multiculturalism",
            subsections: [
              {
                id: "multi-points",
                title: "20th Century Immigration and Cultural Evolution",
                bullets: [
                  "Large-scale immigration during the 20th century has made Britain a multicultural society, especially in big cities.",
                  "Immigrant communities have brought different cultures, languages, lifestyles and attitudes.",
                  "For example, some areas of London have a strong Indian influence, including shops, clothing, languages and education.",
                  "Differences between immigrant communities and traditional British society are gradually becoming smaller.",
                  "Unlike the USA, immigrant communities in Britain rarely live completely separately from the wider society.",
                  "New British communities have contributed to British culture by:",
                  "• Making society more informal.",
                  "• Changing the nature of local corner shops.",
                  "• Introducing new cultural festivals.",
                  "The Notting Hill Carnival, inspired by Caribbean culture, is one of Britain's most popular festivals."
                ],
                keyIdea: "British identity is not fixed; it continuously changes through the contributions of different communities."
              }
            ]
          },
          {
            id: "conservatism",
            number: "2",
            title: "Conservatism",
            subsections: [
              {
                id: "cons-points",
                title: "Desire for Stability and Sentimental Attachment to the Past",
                bullets: [
                  "British people are individualistic and do not necessarily follow the same traditional habits.",
                  "However, they generally dislike unnecessary change and prefer continuity and stability.",
                  "Politicians often use the idea of \"traditional family values\" to gain public support.",
                  "British people have a sentimental attachment to the past, which can be seen in:",
                  "• Their preference for old houses and traditional-looking pubs.",
                  "• Christmas cards depicting historical scenes.",
                  "• Their reluctance to change the currency system.",
                  "Children's reading preferences also reflect conservative attitudes:",
                  "• Roald Dahl and Enid Blyton were popular writers despite their old-fashioned stories.",
                  "• Their books often describe an idealized world of the past."
                ],
                keyIdea: "British people may not follow traditional lifestyles, but they value tradition, stability and continuity."
              }
            ]
          },
          {
            id: "being-different",
            number: "3",
            title: "Being Different",
            subsections: [
              {
                id: "diff-points",
                title: "Resistance to Standardization and Pride in Uniqueness",
                bullets: [
                  "British people are particularly conservative about things considered symbols of British identity.",
                  "Their individualism makes them proud of being different from other countries.",
                  "They often resist changes simply because they do not want to follow everyone else."
                ],
                subsections: [
                  {
                    letter: "a",
                    title: "Driving",
                    bullets: [
                      "British people drive on the left-hand side of the road.",
                      "They strongly resist changing to driving on the right."
                    ]
                  },
                  {
                    letter: "b",
                    title: "Double-decker buses",
                    bullets: [
                      "British people are concerned that European standardization may threaten traditional double-decker buses."
                    ]
                  },
                  {
                    letter: "c",
                    title: "Measurement systems",
                    bullets: [
                      "The British government has tried to introduce the metric system, but with limited success.",
                      "People still commonly use:",
                      "• Pounds and ounces for weight.",
                      "• Fahrenheit for temperature.",
                      "• Traditional British units for distance and liquid measurements.",
                      "The 24-hour clock is also less widely used."
                    ]
                  },
                  {
                    letter: "d",
                    title: "Beer measurements",
                    bullets: [
                      "In 1993, a pub was fined £3,100 for selling beer in European measurements instead of traditional pints and half-pints."
                    ]
                  },
                  {
                    letter: "e",
                    title: "Time and financial systems",
                    bullets: [
                      "Britain has resisted adopting Central European Time.",
                      "Its financial year starts in April rather than January."
                    ]
                  }
                ],
                keyIdea: "British people often resist standardization and change because they value their national identity and traditions."
              }
            ],
            summaryTable: {
              title: "Quick Summary to Remember",
              headers: ["Topic", "Key idea"],
              rows: [
                ["Multiculturalism", "Immigration has made Britain multicultural and continuously changed British identity."],
                ["Conservatism", "British people prefer continuity, stability and traditional symbols over unnecessary change."],
                ["Being Different", "British people are proud of their uniqueness and often resist adopting other countries' systems."]
              ]
            }
          },
          {
            id: "relationship-three-ideas",
            title: "Relationship Between the Three Ideas",
            subsections: [
              {
                id: "rel-concepts",
                title: "Conceptual Relationship: Multiculturalism, Individualism, Conservatism and Being Different",
                bullets: [
                  "Multiculturalism: Immigration brings different cultures and changes British society.",
                  "Individualism: British people value personal identity and independence.",
                  "Conservatism and Being Different: They value national traditions and resist changes that may threaten their distinct identity."
                ],
                note: "This is a conceptual relationship, not a proven cause-and-effect sequence. Individualism and conservatism are presented as related characteristics in the passage.",
                componentType: "attitudes-diagram"
              }
            ],
            mainConclusion: "British attitudes are shaped by multicultural influences, individualism and conservatism. Although British society continues to change, many British people remain attached to tradition, stability and their distinctive national identity."
          }
        ]
      },
      {
        id: "reading-5",
        chapterId: "chapter-2",
        title: "Reading: Formality, Community Spirit, Privacy & Values",
        subtitle: "Public vs Private Roles, The Talented Amateur, and Contrasting Social Values",
        estimatedMinutes: 16,
        sections: [
          {
            id: "formality-informality",
            number: "1",
            title: "Formality and Informality",
            subsections: [
              {
                id: "form-intro",
                title: "Public Role vs Private Role",
                bullets: [
                  "Britain has many formal public ceremonies, but this does not mean British people are formal in everyday life.",
                  "The level of formality depends on whether people are playing a public role or a private role."
                ],
                subsections: [
                  {
                    letter: "a",
                    title: "Public situations (Formal)",
                    bullets: [
                      "People are expected to follow strict rules of appearance and behaviour.",
                      "For example, bank employees and politicians are expected to wear formal clothes at work."
                    ]
                  },
                  {
                    letter: "b",
                    title: "Private situations (Informal)",
                    bullets: [
                      "British people are generally relaxed about clothing and personal appearance.",
                      "They prefer casual clothes during their free time, especially on Sundays.",
                      "They are tolerant of unusual clothing and value personal freedom."
                    ]
                  },
                  {
                    letter: "c",
                    title: "Friendship and Social Behaviour",
                    bullets: [
                      "British people often show friendliness by avoiding formalities:",
                      "• Using first names instead of titles.",
                      "• Wearing casual clothes when entertaining guests.",
                      "• Rarely shaking hands with friends.",
                      "• Saying \"help yourself\" to make guests feel at home.",
                      "Being informal means accepting someone as a friend, not showing disrespect.",
                      "British people are generally reserved and rarely express affection openly.",
                      "Since the late 20th century, British society has become more informal, with more casual meals and greeting kisses becoming common."
                    ]
                  }
                ],
                keyIdea: "British people distinguish between public formality and private informality. Being informal is often a sign of friendship and acceptance."
              }
            ]
          },
          {
            id: "public-spiritedness",
            number: "2",
            title: "Public Spiritedness and Amateurism",
            subsections: [
              {
                id: "amateur-values",
                title: "The Talented Amateur and Voluntary Work",
                bullets: [
                  "Traditionally, British society valued the \"talented amateur\" rather than excessive professionalism.",
                  "People believed society worked better when everyone contributed some free time to help others.",
                  "This attitude could be seen in:",
                  "• Public services and government.",
                  "• Parliament.",
                  "• The legal system.",
                  "• Education and sports.",
                  "However, professionalism has gradually become more positively accepted.",
                  "Voluntary activities remain an important part of British life."
                ],
                subsections: [
                  {
                    title: "Examples of voluntary activities:",
                    bullets: [
                      "Neighbourhood Watch schemes.",
                      "Charity work and fundraising events.",
                      "Organizing jumble sales, fêtes and flag days.",
                      "Donating blood without payment.",
                      "Supporting charities such as: Oxfam, Amnesty International, Save the Children Fund, and The National Trust."
                    ]
                  }
                ],
                keyIdea: "British people traditionally value community participation and voluntary work, although professionalism has become more important."
              }
            ]
          },
          {
            id: "privacy-and-sex",
            number: "3",
            title: "Privacy and Sex",
            subsections: [
              {
                id: "priv-intro",
                title: "Privacy as a Fundamental Value",
                bullets: [
                  "Privacy is a fundamental value in British society.",
                  "People believe individuals have the right to keep personal information private.",
                  "Asking personal questions about income, family or sex life is considered rude unless people know each other well.",
                  "Even the greeting \"How do you do?\" is a social formality, not a real question."
                ],
                subsections: [
                  {
                    letter: "a",
                    title: "Attitudes towards Sex",
                    bullets: [
                      "Modern British attitudes towards sex have become more open and tolerant.",
                      "However, sex is still considered a private and sometimes embarrassing subject.",
                      "Public figures may face scandals when their private sexual activities:",
                      "• Involve breaking the law.",
                      "• Threaten national security.",
                      "• Contradict their political beliefs or public statements.",
                      "The main issue is often the connection between private behaviour and public responsibilities, rather than the sexual activity itself."
                    ]
                  },
                  {
                    letter: "b",
                    title: "Sex Education",
                    bullets: [
                      "Sex education is considered important in schools, partly because of concerns about AIDS.",
                      "However, many teachers have avoided teaching it because they feel embarrassed.",
                      "Public entertainment often discusses sex through jokes, innuendo and double meanings."
                    ]
                  },
                  {
                    letter: "c",
                    title: "Prostitution",
                    bullets: [
                      "Prostitution itself is not illegal in Britain.",
                      "However, publicly approaching people to find customers (soliciting) is illegal."
                    ]
                  }
                ],
                keyIdea: "British people are increasingly tolerant of sexual matters but continue to value privacy and feel uncomfortable discussing sex openly."
              }
            ],
            summaryTable: {
              title: "Quick Summary to Remember",
              headers: ["Topic", "Key idea"],
              rows: [
                ["Formality and Informality", "British people are formal in public roles but informal in private life."],
                ["Public Spiritedness and Amateurism", "Voluntary work and community participation are important British values."],
                ["Privacy and Sex", "British people strongly protect personal privacy, despite increasingly open attitudes towards sex."]
              ]
            },
            overallConclusion: [
              "British society combines seemingly contrasting values:",
              "• Formal in public, informal in private.",
              "• Individualistic but willing to contribute to the community.",
              "• Open-minded about sex but protective of privacy.",
              "These contrasts help explain British social behaviour and traditional values."
            ]
          }
        ]
      }
    ]
  }
];
