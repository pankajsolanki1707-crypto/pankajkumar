// Go Pustak — Master Ebooks Database
// Official EXAMWAVE EXPERT Amazon Author Store Synced Catalog

export const CATEGORIES = [
  "All Categories",
  "Personal Growth",
  "Competitive Exams",
  "Current Affairs",
  "Education & Learning",
  "Technology",
  "Books & Ideas"
];

export const SUB_CATEGORIES = {
  "Personal Growth": ["Self Help", "Personal Development", "Productivity", "Habits", "Psychology", "Mindset", "Motivation", "Decision Making"],
  "Competitive Exams": ["UPSC", "UPSC EPFO", "State PSC", "Other Competitive Exams"],
  "Current Affairs": ["National", "International", "Economy", "Science & Technology", "Defence", "Environment", "Government Schemes"],
  "Education & Learning": ["General Knowledge", "Study Skills", "Career", "Learning", "Research", "Skill Development"],
  "Technology": ["Artificial Intelligence", "Programming", "Technology Explained", "Digital Trends"],
  "Books & Ideas": ["Book Summaries", "Reading Guides", "Philosophy", "Leadership", "Business", "Biography", "Thought & Ideas"]
};

export const EXAM_TYPES = [
  { id: "upsc", name: "UPSC Civil Services", tag: "UPSC CSE" },
  { id: "upsc-epfo", name: "UPSC EPFO (EO/AO & APFC)", tag: "EPFO" },
  { id: "state-psc", name: "State PSC Exams", tag: "State PSC" }
];

export const AUTHORS = [
  {
    id: "pankaj-kumar",
    name: "Pankaj Kumar",
    role: "Author & Systems Engineer",
    bio: "Pankaj Kumar applies mechanical engineering rigor and cognitive psychology to everyday thinking, habits, and digital technology.",
    avatar: "/go-pustak-logo.png"
  },
  {
    id: "examwave-expert",
    name: "EXAMWAVE EXPERT",
    role: "Official Amazon Publishing Cell",
    bio: "Subject matter experts and senior research fellows crafting precision study resources for UPSC, EPFO, and State PCS.",
    avatar: "/go-pustak-logo.png"
  }
];

export const BOOKS = [
  {
    "id": "upsc-epfo-special-subject-notes-pankaj-kumar",
    "slug": "upsc-epfo-special-subject-notes-pankaj-kumar",
    "asin": "B0FWRQ657W",
    "amazonUrl": "https://www.amazon.in/dp/B0FWRQ657W",
    "title": "Industrial Relations, Labour Laws & Social Security for UPSC EPFO 2025",
    "subtitle": "Comprehensive Guide with Concepts, Acts, and Case Studies for Enforcement Officer & APFC Exams",
    "tagline": "Comprehensive Master Notes for EO/AO & APFC Examinations",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "pankaj-kumar",
      "name": "Pankaj Kumar & EXAMWAVE EXPERT",
      "role": "Author & Systems Engineer",
      "bio": "Pankaj Kumar applies mechanical engineering rigor and cognitive psychology to everyday thinking, habits, and digital technology.",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-emerald-900 to-teal-950",
    "coverAccent": "#10B981",
    "coverText": "text-emerald-50",
    "coverStyle": "exam",
    "coverImage": "/covers/amazon_highres/B0FWRQ657W.jpg",
    "downloadUrl": "/ebooks/New_compile_epfo_file.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 210,
    "publishedYear": 2025,
    "updatedDate": "2026-08-12",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "EPUB Edition",
      "Kindle Edition"
    ],
    "fileSize": "3.28 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "Comprehensive guide covering Industrial Relations, Labour Laws, and Social Security for UPSC EPFO EO/AO & APFC.",
    "description": "Official ExamWave reference compendium covering all non-traditional UPSC EPFO subjects (GAAP, Auditing, Insurance, Labour Codes, and Social Security) in one unified reference.",
    "whoShouldRead": [
      "UPSC EPFO EO/AO & APFC candidates."
    ],
    "whatYoullLearn": [
      "GAAP principles",
      "Auditing vouching rules",
      "New 4 Labour Codes 2020"
    ],
    "tableOfContents": [
      {
        "chapter": "Module 1",
        "title": "General Accounting & Auditing"
      }
    ]
  },
  {
    "id": "upsc-epfo-special-subject-notes-hindi",
    "slug": "upsc-epfo-special-subject-notes-hindi",
    "title": "UPSC EPFO 2025 Special Subject Notes (हिंदी संस्करण)",
    "subtitle": "GAAP, Auditing, Insurance, Industrial Relations, Labour Laws & Social Security",
    "tagline": "आकाश कश्यप एवं पंकज कुमार द्वारा लिखित हिंदी माध्यम संपूर्ण स्पेशल नोट्स",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "akash-kashyap",
      "name": "Akash Kashyap & EXAMWAVE EXPERT",
      "role": "Co-Authors & Exam Researchers",
      "bio": "Exam preparation specialists crafting comprehensive subject notes and accounting principles for UPSC EPFO aspirants.",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-teal-900 to-emerald-950",
    "coverAccent": "#06B6D4",
    "coverText": "text-teal-50",
    "coverStyle": "exam",
    "coverImage": "/covers/upsc-epfo-special-subject-notes-hindi.png",
    "downloadUrl": "/ebooks/Special_sub_hindi_compile.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 215,
    "publishedYear": 2025,
    "updatedDate": "2026-08-12",
    "language": "Hindi",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "6.51 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "आकाश कश्यप एवं पंकज कुमार द्वारा हिंदी माध्यम के अभ्यर्थियों के लिए विशेष विषय नोट्स।",
    "description": "UPSC EPFO परीक्षा के सभी विशेष विषयों (लेखांकन, अंकेक्षण, बीमा, श्रम कानून एवं सामाजिक सुरक्षा) का हिंदी में प्रामाणिक संकलन।",
    "whoShouldRead": [
      "UPSC EPFO हिंदी माध्यम अभ्यर्थी।"
    ],
    "whatYoullLearn": [
      "GAAP, अंकेक्षण, बीमा, श्रम कानून।"
    ],
    "tableOfContents": [
      {
        "chapter": "भाग 1",
        "title": "लेखांकन एवं अंकेक्षण सिद्धांत"
      }
    ]
  },
  {
    "id": "crack-upsc-epfo-apfc-2026-blueprint",
    "slug": "crack-upsc-epfo-apfc-2026-blueprint",
    "asin": "B0H7661MLV",
    "amazonUrl": "https://www.amazon.in/dp/B0H7661MLV",
    "title": "UPSC EPFO/APFC 2026 in Your First Attempt: Avoid These Costly Mistakes",
    "subtitle": "A Practical Success Guide for UPSC EPFO & APFC Aspirants Featuring a Study Plan",
    "tagline": "Study Plan • Revision System • Mock Test Strategy • Productivity Framework",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research & Exam Content Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-slate-900 to-blue-950",
    "coverAccent": "#2563EB",
    "coverText": "text-blue-50",
    "coverStyle": "exam",
    "coverImage": "/covers/amazon_highres/B0H7661MLV.jpg",
    "downloadUrl": "/ebooks/EPFO_APFC_2026_Crack_guide.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 140,
    "publishedYear": 2026,
    "updatedDate": "2026-08-10",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "1.61 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "Avoid 10 costly preparation traps and master the exact study-revision blueprint for UPSC EPFO 2026.",
    "description": "Targeting UPSC EPFO EO/AO or APFC 2026? Complete blueprint outlining the exact master plan, booklist, time allocation matrix, and mock test strategy.",
    "whoShouldRead": [
      "First-time aspirants preparing for UPSC EPFO 2026."
    ],
    "whatYoullLearn": [
      "10 costliest preparation mistakes",
      "60-day study plan"
    ],
    "tableOfContents": [
      {
        "chapter": "Chapter 1",
        "title": "Decoding UPSC EPFO Syllabus"
      }
    ]
  },
  {
    "id": "current-affairs-yearly-mcq-2025-2026",
    "slug": "current-affairs-yearly-mcq-2025-2026",
    "asin": "B0GRMXQ5KT",
    "amazonUrl": "https://www.amazon.in/dp/B0GRMXQ5KT",
    "title": "Current Affairs Yearly MCQ 2025–2026: 2000+ Current Affairs MCQs for UPSC CSE 2026",
    "subtitle": "January 2025 to January 2026 Current Affairs MCQ Book with Detailed Explanations",
    "tagline": "2000+ Topic-Wise Questions for UPSC Prelims 2026",
    "category": "Current Affairs",
    "subcategory": "National",
    "examCategory": "upsc",
    "currentAffairsMonth": "Jan 2025 - Jan 2026",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research & Exam Content Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-red-950 to-blue-950",
    "coverAccent": "#EF4444",
    "coverText": "text-red-50",
    "coverStyle": "digest",
    "coverImage": "/covers/amazon_highres/B0GRMXQ5KT.jpg",
    "downloadUrl": "/ebooks/UPSC_Current_Affairs_Jan_July_2026_PREMIUM.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 310,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "1.23 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "2000+ topic-wise analytical current affairs MCQs covering January 2025 to January 2026.",
    "description": "Complete 12-month current affairs question bank with explanations mapped for Prelims MCQs and Mains answer pointers.",
    "whoShouldRead": [
      "UPSC CSE 2026 candidates."
    ],
    "whatYoullLearn": [
      "12 months national & international news MCQs."
    ],
    "tableOfContents": [
      {
        "chapter": "Section 1",
        "title": "Polity & Governance MCQs"
      }
    ]
  },
  {
    "id": "upsc-prelims-2026-best-300-mcqs",
    "slug": "upsc-prelims-2026-best-300-mcqs",
    "asin": "B0GRC4JY5R",
    "amazonUrl": "https://www.amazon.in/dp/B0GRC4JY5R",
    "title": "UPSC Prelims 2026 Current Affairs MCQs: Best 300 Practice Questions with Explanations",
    "subtitle": "January 2026 Current Affairs | UPSC IAS Prelims Practice Test | Polity, Economy, Environment",
    "tagline": "High-Probability 300 Questions for UPSC Prelims 2026",
    "category": "Current Affairs",
    "subcategory": "National",
    "examCategory": "upsc",
    "currentAffairsMonth": "Jan 2026",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research & Exam Content Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-blue-900 to-amber-950",
    "coverAccent": "#F59E0B",
    "coverText": "text-amber-100",
    "coverStyle": "digest",
    "coverImage": "/covers/amazon_highres/B0GRC4JY5R.jpg",
    "downloadUrl": "/ebooks/UPSC_Current_Affairs_Jan_July_2026_PREMIUM.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 120,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "1.23 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "Targeted 300 practice questions covering high-probability January 2026 current events.",
    "description": "Curated 300 MCQs covering Environment, Polity, Economy, and International Relations for UPSC IAS Prelims.",
    "whoShouldRead": [
      "UPSC IAS Prelims 2026 candidates."
    ],
    "whatYoullLearn": [
      "January 2026 current affairs MCQs."
    ],
    "tableOfContents": [
      {
        "chapter": "Test 1",
        "title": "Environment & Economy MCQs"
      }
    ]
  },
  {
    "id": "indian-economy-550-mcqs-upsc-epfo",
    "slug": "indian-economy-550-mcqs-upsc-epfo",
    "asin": "B0FW3TPFWZ",
    "amazonUrl": "https://www.amazon.in/dp/B0FW3TPFWZ",
    "title": "Indian Economy through MCQs — 550 UPSC EPFO & Civil Services Practice Questions",
    "subtitle": "Comprehensive Source-Based MCQs from Ramesh Singh’s Indian Economy with Explanations",
    "tagline": "550 High-Yield Economics Questions for UPSC & EPFO",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-stone-900 to-emerald-950",
    "coverAccent": "#10B981",
    "coverText": "text-emerald-50",
    "coverStyle": "exam",
    "coverImage": "/covers/amazon_highres/B0FW3TPFWZ.jpg",
    "downloadUrl": "/ebooks/general_accounting _hindi.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 180,
    "publishedYear": 2025,
    "updatedDate": "2026-07-25",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "1.02 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "550 practice MCQs based on standard Indian Economy reference textbooks.",
    "description": "Banking, inflation, budget, national income, and monetary policy MCQs with detailed explanations.",
    "whoShouldRead": [
      "UPSC CSE & EPFO candidates."
    ],
    "whatYoullLearn": [
      "RBI monetary policy, Budget, Taxation."
    ],
    "tableOfContents": [
      {
        "chapter": "Module 1",
        "title": "National Income Accounting"
      }
    ]
  },
  {
    "id": "complete-geography-notes-hindi-bhugol",
    "slug": "complete-geography-notes-hindi-bhugol",
    "asin": "B0G2CFSVKK",
    "amazonUrl": "https://www.amazon.in/dp/B0G2CFSVKK",
    "title": "Complete Geography Notes in Hindi: भारत एवं विश्व भूगोल का संपूर्ण गाइड",
    "subtitle": "नदियाँ, झीलें, पर्वत, जलवायु, मिट्टियाँ, कृषि, बाँध, समुद्री तट, मौसम एवं चट्टानें",
    "tagline": "प्रतियोगी परीक्षाओं के लिए संपूर्ण हिंदी भूगोल हस्तलिखित नोट्स",
    "category": "Competitive Exams",
    "subcategory": "UPSC",
    "examCategory": "upsc",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-blue-950 to-teal-950",
    "coverAccent": "#06B6D4",
    "coverText": "text-cyan-50",
    "coverStyle": "guide",
    "coverImage": "/covers/amazon_highres/B0G2CFSVKK.jpg",
    "downloadUrl": "/ebooks/ExamWave_UPPCS_Quick_Revision_2026_Hindi.pdf",
    "featured": true,
    "latestRelease": true,
    "bestseller": true,
    "isFree": false,
    "pages": 195,
    "publishedYear": 2026,
    "updatedDate": "2026-08-05",
    "language": "Hindi",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "5.10 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "भारत एवं विश्व भूगोल के मानचित्र एवं सारणी आधारित हिंदी रिवीजन नोट्स।",
    "description": "भारतीय नदियाँ, पर्वत, जलवायु, मिट्टियाँ, कृषि एवं खनिज संसाधनों का संपूर्ण हिंदी संकलन।",
    "whoShouldRead": [
      "UPSC, State PSC एवं अन्य प्रतियोगी परीक्षाओं के छात्र।"
    ],
    "whatYoullLearn": [
      "भौतिक एवं भारत का भूगोल।"
    ],
    "tableOfContents": [
      {
        "chapter": "भाग 1",
        "title": "भारत की नदियाँ एवं पर्वत"
      }
    ]
  },
  {
    "id": "art-culture-500-mcqs-hindi",
    "slug": "art-culture-500-mcqs-hindi",
    "asin": "B0G1TVKL7J",
    "amazonUrl": "https://www.amazon.in/dp/B0G1TVKL7J",
    "title": "Art & Culture 500 MCQs for UPSC EPFO/APFC | भारतीय कला और संस्कृति",
    "subtitle": "UPSC, State PCS, EPFO, CAPF, NDA सहित सभी प्रतियोगी परीक्षाओं के लिए 500 महत्वपूर्ण प्रश्न",
    "tagline": "स्थापत्य, नृत्य, संगीत एवं धरोहर 500 वस्तुनिष्ठ प्रश्न",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-amber-900 to-yellow-950",
    "coverAccent": "#D97706",
    "coverText": "text-amber-100",
    "coverStyle": "exam",
    "coverImage": "/covers/amazon_highres/B0G1TVKL7J.jpg",
    "downloadUrl": "/ebooks/UPSC_EPFO_SPECIAL_SUBJECTS_MOCK_TEST.pdf",
    "featured": false,
    "bestseller": true,
    "isFree": false,
    "pages": 150,
    "publishedYear": 2025,
    "updatedDate": "2026-07-20",
    "language": "Hindi",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "11.8 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "भारतीय कला, वास्तुकला एवं सांस्कृतिक धरोहर पर 500 व्याख्या सहित प्रश्न।",
    "description": "भारतीय मंदिर स्थापत्य, शास्त्रीय नृत्य, संगीत एवं यूनेस्को धरोहर स्थलों पर 500 MCQs.",
    "whoShouldRead": [
      "UPSC CSE, EPFO एवं State PCS के हिंदी अभ्यर्थी।"
    ],
    "whatYoullLearn": [
      "कला एवं संस्कृति MCQs."
    ],
    "tableOfContents": [
      {
        "chapter": "भाग 1",
        "title": "स्थापत्य एवं वास्तुकला"
      }
    ]
  },
  {
    "id": "general-science-500-mcqs-upsc-epfo",
    "slug": "general-science-500-mcqs-upsc-epfo",
    "asin": "B0FTGFK4LR",
    "amazonUrl": "https://www.amazon.in/dp/B0FTGFK4LR",
    "title": "General Science 500+ MCQs for UPSC EPFO & Civil Services",
    "subtitle": "Comprehensive Coverage of Physics, Chemistry, Biology, Environment & Applied Science",
    "tagline": "500+ Exam-Level General Science Practice Questions",
    "category": "Competitive Exams",
    "subcategory": "UPSC EPFO",
    "examCategory": "upsc-epfo",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-slate-900 to-emerald-950",
    "coverAccent": "#10B981",
    "coverText": "text-emerald-100",
    "coverStyle": "exam",
    "coverImage": "/covers/amazon_highres/B0FTGFK4LR.jpg",
    "downloadUrl": "/ebooks/Audit_TT.pdf",
    "featured": false,
    "bestseller": false,
    "isFree": false,
    "pages": 140,
    "publishedYear": 2025,
    "updatedDate": "2026-07-18",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "730 KB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "500+ General Science questions covering Physics, Chemistry, Biology, and Biotechnology.",
    "description": "Targeted practice handbook for general science section of competitive examinations.",
    "whoShouldRead": [
      "UPSC CSE & EPFO candidates."
    ],
    "whatYoullLearn": [
      "Physics, Chemistry & Biology MCQs."
    ],
    "tableOfContents": [
      {
        "chapter": "Module 1",
        "title": "Physics & Everyday Science"
      }
    ]
  },
  {
    "id": "static-gk-5000-mcqs-part-1-hindi",
    "slug": "static-gk-5000-mcqs-part-1-hindi",
    "asin": "B0G15CJGH8",
    "amazonUrl": "https://www.amazon.in/dp/B0G15CJGH8",
    "title": "Static GK 5000 MCQs – Part 1 | भारत और विश्व सामान्य ज्ञान",
    "subtitle": "5000+ Objective Questions on Indian Polity, History, Geography, Economy & Science (Hindi Edition)",
    "tagline": "5000+ वस्तुनिष्ठ सामान्य ज्ञान प्रश्न व्याख्या सहित",
    "category": "Competitive Exams",
    "subcategory": "State PSC",
    "examCategory": "state-psc",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-stone-900 to-amber-950",
    "coverAccent": "#D97706",
    "coverText": "text-amber-100",
    "coverStyle": "guide",
    "coverImage": "/covers/amazon_highres/B0G15CJGH8.jpg",
    "downloadUrl": "/ebooks/ExamWave_UPPCS_Quick_Revision_2026_Hindi.pdf",
    "featured": false,
    "bestseller": true,
    "isFree": false,
    "pages": 260,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "Hindi",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "5.10 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "भारत एवं विश्व सामान्य ज्ञान के 5000 वस्तुनिष्ठ प्रश्न हिंदी माध्यम में।",
    "description": "इतिहास, भूगोल, राजव्यवस्था एवं विज्ञान का 5000 प्रश्नों का महा-अभ्यास संकलन।",
    "whoShouldRead": [
      "सभी प्रतियोगी परीक्षाओं के अभ्यर्थी।"
    ],
    "whatYoullLearn": [
      "Static GK 5000 MCQs."
    ],
    "tableOfContents": [
      {
        "chapter": "भाग 1",
        "title": "भारतीय इतिहास एवं राजव्यवस्था"
      }
    ]
  },
  {
    "id": "master-english-vocabulary-1000-words",
    "slug": "master-english-vocabulary-1000-words",
    "asin": "B0FV8X2MLB",
    "amazonUrl": "https://www.amazon.in/dp/B0FV8X2MLB",
    "title": "Master English Vocabulary: 1000 Powerful Words for Competitive Exams & Daily Use",
    "subtitle": "Boost Your Word Power with 1000 Carefully Selected Words, Meanings, Examples & Synonyms",
    "tagline": "1000 High-Frequency Words for UPSC & Competitive Exams",
    "category": "Education & Learning",
    "subcategory": "Study Skills",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "Language & Aptitude Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-blue-950 to-indigo-900",
    "coverAccent": "#2563EB",
    "coverText": "text-blue-50",
    "coverStyle": "guide",
    "coverImage": "/covers/amazon_highres/B0FV8X2MLB.jpg",
    "downloadUrl": "/ebooks/habits_dont_work.pdf",
    "featured": false,
    "bestseller": true,
    "isFree": false,
    "pages": 130,
    "publishedYear": 2025,
    "updatedDate": "2026-07-25",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "3.8 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "1000 essential vocabulary words with mnemonics, synonyms, and usage examples.",
    "description": "Comprehensive vocabulary handbook for competitive exams and editorial reading comprehension.",
    "whoShouldRead": [
      "Aspirants aiming to improve English comprehension."
    ],
    "whatYoullLearn": [
      "1000 vocabulary words."
    ],
    "tableOfContents": [
      {
        "chapter": "Part 1",
        "title": "High-Yield Editorial Words A-Z"
      }
    ]
  },
  {
    "id": "adhunik-bharat-short-notes-hindi",
    "slug": "adhunik-bharat-short-notes-hindi",
    "asin": "B0G2MPT7YS",
    "amazonUrl": "https://www.amazon.in/dp/B0G2MPT7YS",
    "title": "आधुनिक भारत: परीक्षाओं के लिए संक्षिप्त एवं प्रभावी नोट्स (Hindi Edition)",
    "subtitle": "UPSC, State PCS एवं अन्य परीक्षाओं के लिए तथ्यात्मक एवं याद रखने योग्य नोट्स",
    "tagline": "1857 की क्रांति से 1947 स्वतंत्रता तक बिंदुवार रिवीजन",
    "category": "Competitive Exams",
    "subcategory": "UPSC",
    "examCategory": "upsc",
    "author": {
      "id": "go-pustak-editorial",
      "name": "EXAMWAVE EXPERT Cell",
      "role": "ExamWave Research Cell",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "ExamWave / Go Pustak Publishing",
    "coverBg": "from-amber-900 to-red-950",
    "coverAccent": "#EF4444",
    "coverText": "text-amber-50",
    "coverStyle": "guide",
    "coverImage": "/covers/amazon_highres/B0G2MPT7YS.jpg",
    "downloadUrl": "/ebooks/ExamWave_UPPCS_Quick_Revision_2026_Hindi.pdf",
    "featured": false,
    "bestseller": true,
    "isFree": false,
    "pages": 155,
    "publishedYear": 2026,
    "updatedDate": "2026-08-02",
    "language": "Hindi",
    "fileFormats": [
      "PDF Digital",
      "Kindle Edition"
    ],
    "fileSize": "5.10 MB",
    "prices": {
      "pdf": 99,
      "usd": 1.29
    },
    "oneLiner": "आधुनिक भारतीय इतिहास का 1857 से 1947 तक का हिंदी तथ्यात्मक संकलन।",
    "description": "स्वतंत्रता आंदोलन, गवर्नर जनरल, कांग्रेस अधिवेशन एवं महत्वपूर्ण संधियों के संक्षिप्त नोट्स।",
    "whoShouldRead": [
      "UPSC CSE एवं State PCS के हिंदी अभ्यर्थी।"
    ],
    "whatYoullLearn": [
      "आधुनिक भारत का इतिहास।"
    ],
    "tableOfContents": [
      {
        "chapter": "भाग 1",
        "title": "1857 का संग्राम एवं सामाजिक आंदोलन"
      }
    ]
  },
  {
    "id": "think-on-paper",
    "slug": "think-on-paper",
    "title": "Think on Paper",
    "subtitle": "A Small Tool. Big Transformation. The $2 Productivity Upgrade for Your Brain",
    "tagline": "How writing by hand organizes your mind, clears mental clutter, and turns abstract thoughts into executable reality.",
    "category": "Personal Growth",
    "subcategory": "Productivity",
    "author": {
      "id": "pankaj-kumar",
      "name": "Pankaj Kumar",
      "role": "Author & Systems Engineer",
      "bio": "Pankaj Kumar applies mechanical engineering rigor and cognitive psychology to everyday thinking, habits, and digital technology.",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "Go Pustak Publishing",
    "coverBg": "from-emerald-800 to-emerald-950",
    "coverAccent": "#10B981",
    "coverText": "text-emerald-100",
    "coverStyle": "journal",
    "coverImage": "/covers/think_on_paper.jpg",
    "downloadUrl": "/ebooks/think_on_paper.pdf",
    "featured": true,
    "bestseller": true,
    "isFree": false,
    "pages": 64,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "EPUB Edition"
    ],
    "fileSize": "4.2 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "Offload working memory RAM onto physical paper using simple structural paper architecture frameworks.",
    "description": "Most people don’t struggle because they lack intelligence. They struggle because they ask their brains to hold too many thoughts at the same time.",
    "whoShouldRead": [
      "Engineers, founders, and knowledge workers."
    ],
    "whatYoullLearn": [
      "How to offload short-term working memory RAM onto paper."
    ],
    "tableOfContents": [
      {
        "chapter": "Chapter 1",
        "title": "Your Brain Is a Processor"
      }
    ]
  },
  {
    "id": "motion-vs-action",
    "slug": "motion-vs-action",
    "title": "Motion vs Action",
    "subtitle": "Stop Preparing and Start Executing | Eliminating the Illusion of Progress",
    "tagline": "Busy is not the same as effective. Break free from fake productivity traps.",
    "category": "Personal Growth",
    "subcategory": "Productivity",
    "author": {
      "id": "pankaj-kumar",
      "name": "Pankaj Kumar",
      "role": "Author & Systems Engineer",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "Go Pustak Publishing",
    "coverBg": "from-stone-900 to-black",
    "coverAccent": "#F97316",
    "coverText": "text-orange-100",
    "coverStyle": "bold",
    "coverImage": "/covers/motion_vs_action.png",
    "downloadUrl": "/ebooks/motion_vs_action.pdf",
    "featured": true,
    "bestseller": true,
    "isFree": false,
    "pages": 110,
    "publishedYear": 2026,
    "updatedDate": "2026-08-02",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "EPUB Edition"
    ],
    "fileSize": "4.9 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "Break the illusion of fake productivity and eliminate motion traps with execution triggers.",
    "description": "Motion feels like work. Action is delivering the output.",
    "whoShouldRead": [
      "Procrastinators hiding behind research."
    ],
    "whatYoullLearn": [
      "Difference between Motion and Action."
    ],
    "tableOfContents": [
      {
        "chapter": "Chapter 1",
        "title": "The Illusion of Progress"
      }
    ]
  },
  {
    "id": "courage-to-practice-freedom",
    "slug": "courage-to-practice-freedom",
    "title": "The Courage to Practice Freedom",
    "subtitle": "How to Live Without Approval, Fear, or Excuses",
    "tagline": "Freedom is not a philosophical realization. It is a daily discipline trained under pressure.",
    "category": "Personal Growth",
    "subcategory": "Self Help",
    "author": {
      "id": "pankaj-kumar",
      "name": "Pankaj Kumar",
      "role": "Author & Systems Engineer",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "Go Pustak Publishing",
    "coverBg": "from-amber-100 to-stone-200",
    "coverAccent": "#DC2626",
    "coverText": "text-stone-900",
    "coverStyle": "bold",
    "coverImage": "/covers/courage_to_practice_freedom.png",
    "downloadUrl": "/ebooks/courage_to_practice_freedom.pdf",
    "featured": true,
    "bestseller": true,
    "isFree": false,
    "pages": 127,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "EPUB Edition"
    ],
    "fileSize": "5.8 MB",
    "prices": {
      "pdf": 149,
      "usd": 1.99
    },
    "oneLiner": "Enforce boundaries without permission, break approval-seeking traps, and build unshakeable self-trust.",
    "description": "Freedom comes after acting free, not before.",
    "whoShouldRead": [
      "Anyone who overthinks decisions waiting for approval."
    ],
    "whatYoullLearn": [
      "Separation of Tasks."
    ],
    "tableOfContents": [
      {
        "chapter": "Chapter 1",
        "title": "Freedom Is a Skill"
      }
    ]
  },
  {
    "id": "pragmatic-ai-for-business",
    "slug": "pragmatic-ai-for-business",
    "title": "Pragmatic AI for Business Leaders & Learners",
    "subtitle": "Integrating Artificial Intelligence, LLMs & Automation Without Hype",
    "tagline": "A zero-fluff engineering guide to building AI workflows that increase leverage.",
    "category": "Technology",
    "subcategory": "Artificial Intelligence",
    "author": {
      "id": "pankaj-kumar",
      "name": "Pankaj Kumar",
      "role": "Author & Systems Engineer",
      "avatar": "/go-pustak-logo.png"
    },
    "publisher": "Go Pustak Tech Series",
    "coverBg": "from-cyan-950 to-slate-900",
    "coverAccent": "#06B6D4",
    "coverText": "text-cyan-100",
    "coverStyle": "tech",
    "coverImage": "/covers/ai_without_the_hype.png",
    "downloadUrl": "/ebooks/pragmatic_ai.pdf",
    "featured": true,
    "bestseller": false,
    "isFree": false,
    "pages": 145,
    "publishedYear": 2026,
    "updatedDate": "2026-08-01",
    "language": "English",
    "fileFormats": [
      "PDF Digital",
      "EPUB Edition"
    ],
    "fileSize": "7.1 MB",
    "prices": {
      "pdf": 199,
      "usd": 2.49
    },
    "oneLiner": "Practical AI prompt engineering, LLM architecture, and workflow automation for modern professionals.",
    "description": "Engineering-first blueprint for understanding how Large Language Models (LLMs) operate under the hood.",
    "whoShouldRead": [
      "Business managers and developers."
    ],
    "whatYoullLearn": [
      "Prompt engineering as code."
    ],
    "tableOfContents": [
      {
        "chapter": "Chapter 1",
        "title": "Demystifying LLMs"
      }
    ]
  }
];
