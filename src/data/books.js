// Go Pustak — Master Ebooks Database
// Multi-author digital ebook platform supporting PDF & EPUB formats

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
  "Competitive Exams": ["UPSC", "UPSC EPFO", "SSC", "Banking", "State PSC", "Other Competitive Exams"],
  "Current Affairs": ["National", "International", "Economy", "Science & Technology", "Defence", "Environment", "Government Schemes"],
  "Education & Learning": ["General Knowledge", "Study Skills", "Career", "Learning", "Research", "Skill Development"],
  "Technology": ["Artificial Intelligence", "Programming", "Technology Explained", "Digital Trends"],
  "Books & Ideas": ["Book Summaries", "Reading Guides", "Philosophy", "Leadership", "Business", "Biography", "Thought & Ideas"]
};

export const EXAM_TYPES = [
  { id: "upsc", name: "UPSC Civil Services", tag: "UPSC CSE" },
  { id: "upsc-epfo", name: "UPSC EPFO (EO/AO & APFC)", tag: "EPFO" },
  { id: "ssc", name: "SSC CGL / CHSL", tag: "SSC" },
  { id: "banking", name: "Banking (IBPS / SBI PO)", tag: "Banking" },
  { id: "state-psc", name: "State PSC Exams", tag: "State PSC" }
];

export const AUTHORS = [
  {
    id: "pankaj-kumar",
    name: "Pankaj Kumar",
    role: "Author & Systems Engineer",
    bio: "Pankaj Kumar applies mechanical engineering rigor and cognitive psychology to everyday thinking, habits, and digital technology.",
    avatar: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Senior Cognitive Psychologist & Educator",
    bio: "Specializing in learning neuroscience, memory retention techniques, and exam performance psychology for competitive aspirants.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "go-pustak-editorial",
    name: "Go Pustak Editorial Team",
    role: "ExamWave Research & Exam Content Cell",
    bio: "A dedicated team of subject matter experts, exam toppers, and senior researchers crafting high-precision study resources.",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop"
  }
];

export const BOOKS = [
  {
    id: "crack-upsc-epfo-apfc-2026-blueprint",
    slug: "crack-upsc-epfo-apfc-2026-blueprint",
    title: "Crack UPSC EPFO/APFC 2026 in Your First Attempt",
    subtitle: "Avoid These Costly Mistakes Before You Start — The Complete Preparation Blueprint",
    tagline: "Study Plan • Revision System • Mock Test Strategy • Productivity Framework",
    category: "Competitive Exams",
    subcategory: "UPSC EPFO",
    examCategory: "upsc-epfo",
    author: AUTHORS[2], // Go Pustak / ExamWave Editorial
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-slate-900 to-blue-950",
    coverAccent: "#2563EB",
    coverText: "text-blue-50",
    coverStyle: "exam",
    coverImage: "/covers/crack-upsc-epfo-apfc-2026-blueprint.png",
    featured: true,
    latestRelease: true,
    bestseller: true,
    isFree: false,
    pages: 140,
    publishedYear: 2026,
    updatedDate: "2026-08-10",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "7.5 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "Avoid 10 costly preparation traps and master the exact study-revision blueprint for UPSC EPFO 2026.",
    description: `Targeting UPSC EPFO EO/AO or APFC 2026? Most aspirants fail not due to lack of study hours, but because they waste time on irrelevant study material and flawed revision schedules.

This complete blueprint outlines the exact master plan, booklist, time allocation matrix, and mock test strategy needed to clear UPSC EPFO in your first attempt.`,
    whoShouldRead: [
      "First-time aspirants preparing for UPSC EPFO EO/AO and APFC 2026.",
      "Working candidates seeking an efficient 60-day revision strategy.",
      "Aspirants confused by conflicting booklists and strategy videos."
    ],
    whatYoullLearn: [
      "The 10 costliest mistakes made by 90% of EPFO candidates.",
      "How to allocate time between General Accounting, Labour Laws, and GS.",
      "Scientific 3-stage revision system using active recall."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Decoding UPSC EPFO: EO/AO vs. APFC Syllabus" },
      { chapter: "Chapter 2", title: "The 10 Deadly Preparation Mistakes to Avoid" },
      { chapter: "Chapter 3", title: "The 60-Day Master Study Plan" },
      { chapter: "Chapter 4", title: "Mock Test Strategy & Marks Optimization" }
    ],
    faqs: [
      { q: "Is this suitable for beginner aspirants?", a: "Yes. It gives a complete step-by-step roadmap from day 1 to exam day." }
    ]
  },
  {
    id: "upsc-current-affairs-2026-january-to-july",
    slug: "upsc-current-affairs-2026-january-to-july",
    title: "UPSC Current Affairs 2026: January to July",
    subtitle: "Prelims & Mains Current Affairs for UPSC CSE, EPFO EO/AO, APFC & State PSC",
    tagline: "Premium 7-Month Compendium for Serious Aspirants",
    category: "Current Affairs",
    subcategory: "National",
    examCategory: "upsc",
    currentAffairsMonth: "Jan-Jul 2026",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-red-950 to-blue-950",
    coverAccent: "#EF4444",
    coverText: "text-red-50",
    coverStyle: "digest",
    coverImage: "/covers/upsc-current-affairs-2026-january-to-july.png",
    featured: true,
    latestRelease: true,
    bestseller: true,
    isFree: false,
    pages: 310,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "16.4 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Complete 7-month analytical current affairs compendium mapped topic-wise for Prelims MCQs and Mains answer pointers.",
    description: `A 7-month comprehensive current affairs compendium covering January 2026 to July 2026 for UPSC Civil Services, EPFO, and State PSCs.

Categorized into Economic Survey analysis, Budget developments, Polity, Science & Tech, Defence, and International Summits.`,
    whoShouldRead: [
      "UPSC CSE 2026/2027 Prelims & Mains candidates.",
      "UPSC EPFO EO/AO and APFC aspirants needing updated current affairs."
    ],
    whatYoullLearn: [
      "Categorized coverage of 7 months of national & international news.",
      "GS Paper 1-4 syllabus mapping for quick Mains answer drafting.",
      "100+ high-probability Prelims practice MCQs."
    ],
    tableOfContents: [
      { chapter: "Section 1", title: "Polity, Governance & Constitutional Acts" },
      { chapter: "Section 2", title: "Indian Economy, Banking & Trade" },
      { chapter: "Section 3", title: "Science, AI, Space & Defence" },
      { chapter: "Section 4", title: "Environment, Ecology & Climate Summits" }
    ],
    faqs: [
      { q: "Is this available in Hindi?", a: "Yes! The Hindi edition 'UPSC करेंट अफेयर्स 2026: जनवरी से जुलाई' is also available." }
    ]
  },
  {
    id: "upsc-current-affairs-2026-january-july-hindi",
    slug: "upsc-current-affairs-2026-january-july-hindi",
    title: "UPSC Current Affairs 2026: जनवरी से जुलाई (Hindi Edition)",
    subtitle: "UPSC CSE, EPFO EO/AO, APFC और राज्य PSC के लिए समसामयिक घटनाक्रम",
    tagline: "प्रारंभिक एवं मुख्य परीक्षा के लिए 7 महीनों का संपूर्ण विश्लेषणात्मक संकलन",
    category: "Current Affairs",
    subcategory: "National",
    examCategory: "upsc",
    currentAffairsMonth: "Jan-Jul 2026",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-blue-900 to-amber-950",
    coverAccent: "#F59E0B",
    coverText: "text-amber-100",
    coverStyle: "digest",
    coverImage: "/covers/upsc-current-affairs-2026-january-july-hindi.png",
    featured: true,
    latestRelease: true,
    bestseller: true,
    isFree: false,
    pages: 315,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "Hindi",
    fileFormats: ["PDF Digital"],
    fileSize: "16.8 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "हिंदी माध्यम के अभ्यर्थियों के लिए जनवरी से जुलाई 2026 का प्रामाणिक समसामयिक घटनाक्रम संकलन।",
    description: `संघ लोक सेवा आयोग (UPSC) और राज्य लोक सेवा आयोगों की परीक्षाओं के लिए जनवरी 2026 से जुलाई 2026 तक का संपूर्ण हिंदी माध्यम करेंट अफेयर्स संकलन।

राजव्यवस्था, अर्थव्यवस्था, पर्यावरण, विज्ञान एवं प्रौद्योगिकी और अंतर्राष्ट्रीय संबंधों का विस्तृत विश्लेषण।`,
    whoShouldRead: [
      "UPSC CSE एवं EPFO परीक्षा 2026 के हिंदी माध्यम के छात्र।",
      "UPPCS, BPSC, MPPSC एवं अन्य राज्य लोक सेवा आयोग परीक्षाओं के अभ्यर्थी।"
    ],
    whatYoullLearn: [
      "7 महीनों के समसामयिक घटनाक्रम का सटीक एवं बिंदुवार विश्लेषण।",
      "मुख्य परीक्षा के उत्तर लेखन हेतु महत्वपूर्ण तथ्य एवं आंकड़े।"
    ],
    tableOfContents: [
      { chapter: "भाग 1", title: "भारतीय राजव्यवस्था एवं शासन" },
      { chapter: "भाग 2", title: "भारतीय अर्थव्यवस्था एवं वित्तीय क्षेत्र" },
      { chapter: "भाग 3", title: "पर्यावरण, पारिस्थितिकी एवं जैव विविधता" }
    ],
    faqs: [
      { q: "क्या यह हिंदी भाषा में है?", a: "हाँ, यह मूल रूप से शुद्ध एवं सरल हिंदी भाषा में रचित है।" }
    ]
  },
  {
    id: "industrial-relations-labour-laws-2025",
    slug: "industrial-relations-labour-laws-2025",
    title: "Industrial Relations, Labour Laws & Social Security for UPSC EPFO 2025",
    subtitle: "Comprehensive Notes on New 4 Labour Codes 2020 & Social Security Schemes",
    tagline: "One Stop Solution for UPSC EPFO EO/AO & APFC Aspirants",
    category: "Competitive Exams",
    subcategory: "UPSC EPFO",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-amber-700 to-stone-900",
    coverAccent: "#D97706",
    coverText: "text-amber-50",
    coverStyle: "exam",
    coverImage: "/covers/industrial-relations-labour-laws-2025.png",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 185,
    publishedYear: 2025,
    updatedDate: "2026-07-15",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "9.1 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "Targeted point-wise notes on the new 4 Labour Codes 2020, Trade Union acts, and Social Security legislation.",
    description: `Complete point-wise notes covering Industrial Relations, Labour Legislation, and Social Security Schemes in India.

Includes clear comparative tables between old labour acts and the New 4 Labour Codes of 2020.`,
    whoShouldRead: [
      "UPSC EPFO Enforcement Officer & APFC candidates."
    ],
    whatYoullLearn: [
      "Wage Code 2019, Industrial Relations Code 2020, Social Security Code 2020, OSH Code 2020.",
      "EPF Act 1952, ESI Act 1948, Payment of Gratuity Act 1972.",
      "Trade Union Movement history in India."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Industrial Relations Principles & History" },
      { chapter: "Module 2", title: "New 4 Labour Codes Detailed Comparison" }
    ],
    faqs: [
      { q: "Does this contain MCQs?", a: "Yes, chapter-wise previous year questions and practice MCQs included." }
    ]
  },
  {
    id: "current-affairs-yearly-mcq-2025-2026",
    slug: "current-affairs-yearly-mcq-2025-2026",
    title: "Current Affairs Yearly MCQ 2025–2026",
    subtitle: "2000+ Current Affairs MCQs for UPSC CSE, EPFO & Civil Services",
    tagline: "January 2025 to January 2026 Year-Round Question Bank",
    category: "Current Affairs",
    subcategory: "National",
    examCategory: "upsc",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-cyan-950 to-blue-950",
    coverAccent: "#06B6D4",
    coverText: "text-cyan-50",
    coverStyle: "digest",
    coverImage: "/covers/current-affairs-yearly-mcq-2025-2026.png",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 260,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "13.2 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "2000+ objective practice questions with detailed explanations covering 12 full months of current events.",
    description: `Test your current affairs readiness with 2000+ high-quality MCQs covering January 2025 to January 2026. Includes statement-based UPSC style questions.`,
    whoShouldRead: [
      "UPSC CSE, EPFO, and State PSC candidates testing their Prelims preparation."
    ],
    whatYoullLearn: [
      "2000+ statement-based MCQs with detailed explanations.",
      "Topic-wise classification: Economy, Science, Environment, Polity."
    ],
    tableOfContents: [
      { chapter: "Set 1-10", title: "Polity & Constitutional Developments MCQs" },
      { chapter: "Set 11-20", title: "Economy, Banking & Trade MCQs" }
    ],
    faqs: [
      { q: "Are explanations provided for all questions?", a: "Yes, every single question has a detailed explanation." }
    ]
  },
  {
    id: "general-science-500-mcqs-upsc-epfo",
    slug: "general-science-500-mcqs-upsc-epfo",
    title: "General Science 500+ MCQs for UPSC EPFO & Civil Services",
    subtitle: "Comprehensive Coverage of Physics, Chemistry & Biology with Explanations",
    tagline: "500+ High-Yield Questions for UPSC EPFO, SSC & State PSC",
    category: "Competitive Exams",
    subcategory: "UPSC",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-blue-900 to-indigo-950",
    coverAccent: "#3B82F6",
    coverText: "text-blue-50",
    coverStyle: "exam",
    coverImage: "/covers/general-science-500-mcqs-upsc-epfo.png",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 150,
    publishedYear: 2026,
    updatedDate: "2026-07-20",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "8.4 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "500+ solved General Science questions covering human anatomy, everyday physics laws, and chemical reactions.",
    description: `Master General Science for UPSC EPFO and competitive exams. Covers everyday science principles, diseases, space science, and biotechnology.`,
    whoShouldRead: [
      "UPSC EPFO, SSC CGL, and State PSC candidates."
    ],
    whatYoullLearn: [
      "Physics: Optics, Thermodynamics, Electricity, Waves.",
      "Chemistry: Organic compounds, Metals, Acids and Bases.",
      "Biology: Human digestive system, Blood circulatory system, Vitamins."
    ],
    tableOfContents: [
      { chapter: "Part 1", title: "Physics Laws & Everyday Phenomena" },
      { chapter: "Part 2", title: "Chemistry & Industrial Compounds" },
      { chapter: "Part 3", title: "Biology & Human Anatomy" }
    ],
    faqs: [
      { q: "Is NCERT science covered?", a: "Yes, based strictly on Class 6-10 NCERT science fundamentals." }
    ]
  },
  {
    id: "upsc-june-2026-current-affairs-science-tech",
    slug: "upsc-june-2026-current-affairs-science-tech",
    title: "UPSC June 2026 Current Affairs: Science & Technology Monthly Handbook",
    subtitle: "Complete Coverage of AI, Space Missions, Defence Tech & Biotech",
    tagline: "Monthly Special Digest for UPSC CSE, EPFO & State PSC",
    category: "Current Affairs",
    subcategory: "Science & Technology",
    examCategory: "upsc",
    currentAffairsMonth: "June 2026",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-indigo-950 to-slate-950",
    coverAccent: "#6366F1",
    coverText: "text-indigo-50",
    coverStyle: "digest",
    coverImage: "/covers/upsc-june-2026-current-affairs-science-tech.png",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 80,
    publishedYear: 2026,
    updatedDate: "2026-07-05",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "5.6 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "June 2026 Science & Technology monthly handbook covering ISRO satellite launches, AI regulations, and defence developments.",
    description: `Specialized monthly current affairs handbook dedicated exclusively to Science & Technology developments in June 2026 for civil services aspirants.`,
    whoShouldRead: [
      "UPSC CSE and State PSC candidates strengthening GS Paper 3 Science & Tech."
    ],
    whatYoullLearn: [
      "ISRO Gaganyaan mission updates & semiconductor manufacturing policy.",
      "Global AI safety agreements & Quantum computing breakthroughs."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Space Exploration & ISRO Launches" },
      { chapter: "Module 2", title: "Artificial Intelligence & Semiconductors" }
    ],
    faqs: [
      { q: "Is this included in the yearly bundle?", a: "Yes, bundled with UPSC Current Affairs Master Pack." }
    ]
  },
  {
    id: "indian-economy-550-mcqs-upsc-epfo",
    slug: "indian-economy-550-mcqs-upsc-epfo",
    title: "Indian Economy through MCQs — 550 Practice Questions",
    subtitle: "550+ Practice Questions with Detailed Explanations for UPSC EPFO & Civil Services",
    tagline: "500+ Best MCQs Covering Banking, Inflation, Fiscal Policy & Budget",
    category: "Competitive Exams",
    subcategory: "UPSC EPFO",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-stone-900 to-slate-950",
    coverAccent: "#A8A29E",
    coverText: "text-stone-100",
    coverStyle: "exam",
    coverImage: "/covers/indian-economy-550-mcqs-upsc-epfo.png",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 165,
    publishedYear: 2026,
    updatedDate: "2026-07-25",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "8.9 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "550 practice MCQs on Indian Economy covering RBI Monetary Policy, Inflation indices, Balance of Payments, and GST.",
    description: `Indian Economy questions in UPSC EPFO and CSE test core concepts. Practice 550 curated questions covering Banking, Fiscal Policy, External Trade, and National Income.`,
    whoShouldRead: [
      "UPSC EPFO EO/AO, APFC, and Civil Services aspirants."
    ],
    whatYoullLearn: [
      "Repo rate, CRR, SLR, WPI vs CPI inflation calculations.",
      "Balance of Payments: Current Account Deficit vs Capital Account.",
      "Union Budget & Economic Survey key concepts."
    ],
    tableOfContents: [
      { chapter: "Set 1", title: "National Income & Banking System MCQs" },
      { chapter: "Set 2", title: "Inflation, Trade & Budget MCQs" }
    ],
    faqs: [
      { q: "Is this updated with 2026 Budget terms?", a: "Yes, fully updated with recent economic terminology." }
    ]
  },
  {
    id: "complete-geography-notes-hindi-bhugol",
    slug: "complete-geography-notes-hindi-bhugol",
    title: "Complete Geography Notes in Hindi (भूगोल)",
    subtitle: "भारत एवं भौतिक भूगोल का संपूर्ण गाइड: नदियाँ, झीलें, पर्वत, जलवायु, मिट्टियाँ",
    tagline: "एसएससी, रेलवे, बैंक, UPSC एवं एक दिवसीय परीक्षाओं के लिए संपूर्ण भौतिक भूगोल संक्षिप्त नोट्स",
    category: "Education & Learning",
    subcategory: "General Knowledge",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-purple-950 to-amber-950",
    coverAccent: "#A855F7",
    coverText: "text-purple-100",
    coverStyle: "guide",
    coverImage: "/covers/complete-geography-notes-hindi-bhugol.png",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 190,
    publishedYear: 2026,
    updatedDate: "2026-08-05",
    language: "Hindi",
    fileFormats: ["PDF Digital"],
    fileSize: "10.4 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "भारत एवं विश्व के भूगोल का हिंदी माध्यम में बिंदुवार एवं तालिकाबद्ध संकलन।",
    description: `एसएससी, रेलवे, राज्य लोक सेवा आयोग और प्रतियोगी परीक्षाओं के लिए भूगोल (Geography) का संपूर्ण हैंडबुक।

भारत की नदियाँ, पर्वत, झीलें, जलवायु, मृदा के प्रकार और खनिज संसाधनों का तालिकाबद्ध प्रस्तुतीकरण।`,
    whoShouldRead: [
      "SSC, Railway, UP Police, State PSC एवं प्रतियोगी परीक्षाओं के हिंदी माध्यम छात्र।"
    ],
    whatYoullLearn: [
      "हिमालयी एवं प्रायद्वीपीय नदियाँ का तंत्र।",
      "भारत की जलवायु, मानसूनी हवाएँ एवं वर्षा वितरण।",
      "प्रमुख राष्ट्रीय उद्यान एवं अभयारण्य।"
    ],
    tableOfContents: [
      { chapter: "अध्याय 1", title: "भौतिक भूगोल एवं सौरमंडल" },
      { chapter: "अध्याय 2", title: "भारत का भौतिक स्वरूप एवं नदियाँ" }
    ],
    faqs: [
      { q: "क्या इसमें मानचित्र एवं तालिकाएँ शामिल हैं?", a: "हाँ, सभी महत्वपूर्ण तथ्यों को तालिकाओं के रूप में प्रस्तुत किया गया है।" }
    ]
  },
  {
    id: "upsc-epfo-500-mcqs-art-and-culture",
    slug: "upsc-epfo-500-mcqs-art-and-culture",
    title: "UPSC EPFO & APFC 2025 — 500 MCQs on Indian Art & Culture",
    subtitle: "Nitin Singhania Based 500 Best Practice MCQs with Detailed Explanations",
    tagline: "Architecture, Classical Dances, Music, Paintings, Festivals & UNESCO Heritage Sites",
    category: "Competitive Exams",
    subcategory: "UPSC",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-amber-950 to-stone-900",
    coverAccent: "#D97706",
    coverText: "text-amber-100",
    coverStyle: "exam",
    coverImage: "/covers/upsc-epfo-500-mcqs-art-and-culture.png",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 140,
    publishedYear: 2025,
    updatedDate: "2026-07-10",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "7.8 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "500 practice MCQs on Indian Art & Culture based on Nitin Singhania standard reference.",
    description: `Art & Culture questions in UPSC EPFO can be tricky. Practice 500 high-yield questions covering Temple Architecture (Nagara, Dravida, Vesara), Classical Dances, Martial Arts, and Fairs.`,
    whoShouldRead: [
      "UPSC EPFO EO/AO, APFC, and Civil Services aspirants."
    ],
    whatYoullLearn: [
      "Mauryan, Gupta, and Chola Architecture.",
      "8 Classical Dances of India & Folk art forms.",
      "UNESCO World Heritage Sites in India."
    ],
    tableOfContents: [
      { chapter: "Part 1", title: "Indian Architecture & Sculptures MCQs" },
      { chapter: "Part 2", title: "Performing Arts & Music MCQs" }
    ],
    faqs: [
      { q: "Is this based on Nitin Singhania textbook?", a: "Yes, structured according to standard Art & Culture references." }
    ]
  },
  {
    id: "upsc-epfo-apfc-2026-hindi-guide",
    slug: "upsc-epfo-apfc-2026-hindi-guide",
    title: "UPSC EPFO/APFC 2026 - पहली कोशिश में सफलता संपूर्ण तैयारी गाइड",
    subtitle: "Master Labour Laws, Accounting, Social Security & General Studies (Hindi Edition)",
    tagline: "कोर समझ: लेबर लॉज और एकाउंटिंग • 60-दिन मास्टर प्लान • 30+ मॉक टेस्ट रणनीति",
    category: "Competitive Exams",
    subcategory: "UPSC EPFO",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-blue-950 to-slate-900",
    coverAccent: "#2563EB",
    coverText: "text-blue-100",
    coverStyle: "exam",
    coverImage: "/covers/upsc-epfo-apfc-2026-hindi-guide.png",
    featured: true,
    bestseller: true,
    isFree: false,
    pages: 245,
    publishedYear: 2026,
    updatedDate: "2026-08-05",
    language: "Hindi",
    fileFormats: ["PDF Digital"],
    fileSize: "13.5 MB",
    prices: {
      pdf: 99,
      usd: 1.29
    },
    oneLiner: "UPSC EPFO EO/AO एवं APFC परीक्षा 2026 की हिंदी माध्यम में संपूर्ण तैयारी गाइड।",
    description: `UPSC EPFO परीक्षा 2026 के लिए हिंदी माध्यम का प्रामाणिक गाइड। नए 4 लेबर कोड्स, सामान्य लेखांकन सिद्धांत, औद्योगिक संबंध और सामाजिक सुरक्षा योजनाओं का बिंदुवार संकलन।`,
    whoShouldRead: [
      "UPSC EPFO परीक्षा 2026 की तैयारी कर रहे हिंदी माध्यम के अभ्यर्थी।"
    ],
    whatYoullLearn: [
      "नये 4 लेबर कोड्स 2020 की तुलनात्मक सारणी।",
      "लेखांकन सिद्धांत (Accounting Principles) का सरल हिंदी विवरण।"
    ],
    tableOfContents: [
      { chapter: "भाग 1", title: "औद्योगिक संबंध एवं नए श्रम कानून" },
      { chapter: "भाग 2", title: "सामान्य लेखांकन के सिद्धांत" }
    ],
    faqs: [
      { q: "क्या इसमें अभ्यास प्रश्न शामिल हैं?", a: "हाँ, प्रत्येक अध्याय के अंत में महत्वपूर्ण प्रश्न दिए गए हैं।" }
    ]
  },
  {
    id: "uppcs-quick-revision-series-2026",
    slug: "uppcs-quick-revision-series-2026",
    title: "UPPCS Quick Revision Series 2026",
    subtitle: "Complete Revision Notes for Prelims & Mains: History, Geography, Polity, Economy, Science & UP Special",
    tagline: "The Ultimate Quick Revision Guide for Uttar Pradesh Public Service Commission",
    category: "Competitive Exams",
    subcategory: "State PSC",
    examCategory: "state-psc",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Publishing",
    coverBg: "from-blue-900 to-indigo-950",
    coverAccent: "#3B82F6",
    coverText: "text-blue-50",
    coverStyle: "guide",
    coverImage: "/covers/uppcs-quick-revision-series-2026.png",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 220,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "11.8 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Compact revision guide for UPPCS Prelims & Mains covering General Studies and UP Special GK.",
    description: `Designed specifically for Uttar Pradesh PCS aspirants. Synthesizes History, Geography, Polity, Economy, Science, and UP State Special facts into bulleted revision notes.`,
    whoShouldRead: [
      "UPPCS Prelims & Mains 2026 candidates needing fast last-minute revision."
    ],
    whatYoullLearn: [
      "Uttar Pradesh History, Geography, Census 2011 & UP Schemes.",
      "Point-wise GS Paper 1-4 revision modules."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "UP Special Knowledge & Census Facts" },
      { chapter: "Module 2", title: "Indian History & Polity Quick Notes" }
    ],
    faqs: [
      { q: "Is UP Special GK included?", a: "Yes, complete UP State geography, history, and current schemes covered." }
    ]
  },
  {
    id: "think-on-paper",
    slug: "think-on-paper",
    title: "Think on Paper",
    subtitle: "A Small Tool. Big Transformation. The $2 Productivity Upgrade for Your Brain",
    tagline: "How writing by hand organizes your mind, clears mental clutter, and turns abstract thoughts into executable reality.",
    category: "Personal Growth",
    subcategory: "Productivity",
    author: AUTHORS[0],
    publisher: "Go Pustak Publishing",
    coverBg: "from-emerald-800 to-emerald-950",
    coverAccent: "#10B981",
    coverText: "text-emerald-100",
    coverStyle: "journal",
    coverImage: "/covers/think_on_paper.jpg",
    featured: true,
    bestseller: true,
    isFree: false,
    pages: 64,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "4.2 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Offload working memory RAM onto physical paper using simple structural paper architecture frameworks.",
    description: `Most people don’t struggle because they lack intelligence, motivation, or information. They struggle because they ask their brains to hold too many thoughts, decisions, and tasks at the same time.

In **Think on Paper**, Pankaj Kumar demonstrates why physical paper remains the ultimate cognitive superpower for modern knowledge workers, engineers, and exam aspirants.`,
    whoShouldRead: [
      "Engineers, founders, and knowledge workers dealing with mental clutter and information overload.",
      "Competitive exam aspirants needing structured note-taking and deep recall systems.",
      "Anyone trapped in overthinking who wants to turn messy ideas into crisp physical execution."
    ],
    whatYoullLearn: [
      "How to offload short-term working memory RAM onto paper to lower decision fatigue.",
      "The neuroscience of handwriting grapheme-motor encoding vs. digital typing.",
      "The 'One Honest Page' daily morning focus routine.",
      "Non-linear spatial diagramming for complex multi-variable problems."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Your Brain Is a Processor, Not a Hard Drive" },
      { chapter: "Chapter 2", title: "The Neuroscience of Pen on Paper" },
      { chapter: "Chapter 3", title: "The RAM Purge: Clearing Mental Noise" },
      { chapter: "Chapter 4", title: "The One Honest Page Morning System" },
      { chapter: "Chapter 5", title: "Non-Linear Spatial Problem Solving" }
    ],
    faqs: [
      { q: "Do I need expensive stationery?", a: "No. A simple $2 spiral notebook or blank paper sheet works perfectly." },
      { q: "How is the ebook delivered?", a: "Instantly via secure signed PDF & EPUB download links saved in your My Library." }
    ]
  },
  {
    id: "upsc-epfo-study-guide",
    slug: "upsc-epfo-study-guide",
    title: "UPSC EPFO EO/AO & APFC Comprehensive Study Guide",
    subtitle: "Complete Exam Blueprint | General Accounting, Industrial Relations, Labour Laws & Social Security",
    tagline: "High-yield concise notes designed for maximum marks in UPSC EPFO examinations.",
    category: "Competitive Exams",
    subcategory: "UPSC EPFO",
    examCategory: "upsc-epfo",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Exam Prep Cell",
    coverBg: "from-blue-900 to-slate-950",
    coverAccent: "#2563EB",
    coverText: "text-blue-50",
    coverStyle: "exam",
    coverImage: "/covers/industrial-relations-labour-laws-2025.png",
    featured: true,
    bestseller: true,
    isFree: false,
    pages: 240,
    publishedYear: 2026,
    updatedDate: "2026-08-05",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "12.8 MB",
    prices: {
      pdf: 199,
      usd: 2.49
    },
    oneLiner: "Targeted, point-wise coverage of General Accounting Principles, Labour Laws, Industrial Relations, and Indian Economy for UPSC EPFO.",
    description: `Designed specifically for UPSC EPFO Enforcement Officer / Accounts Officer (EO/AO) and Assistant Provident Fund Commissioner (APFC) aspirants.`,
    whoShouldRead: [
      "UPSC EPFO EO/AO & APFC aspirants aiming for first-attempt success."
    ],
    whatYoullLearn: [
      "General Accounting Principles (GAAP, Ledger entries, Trial Balance, Depreciation)."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "General Accounting Principles & Financial Statements" }
    ],
    faqs: [
      { q: "Are the new Labour Codes included?", a: "Yes." }
    ]
  },
  {
    id: "upsc-current-affairs-june-2026",
    slug: "upsc-current-affairs-june-2026",
    title: "UPSC Current Affairs Digest — Monthly Edition",
    subtitle: "National, International, Economy, Science & Environment | Prelims & Mains Analysis",
    tagline: "Categorized, objective-plus-analytical current affairs curated for civil services aspirants.",
    category: "Current Affairs",
    subcategory: "National",
    examCategory: "upsc",
    currentAffairsMonth: "June 2026",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Current Affairs Cell",
    coverBg: "from-amber-800 to-red-950",
    coverAccent: "#F59E0B",
    coverText: "text-amber-50",
    coverStyle: "digest",
    coverImage: "/covers/upsc-june-2026-current-affairs-science-tech.png",
    featured: true,
    bestseller: false,
    isFree: true,
    pages: 95,
    publishedYear: 2026,
    updatedDate: "2026-07-01",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "6.5 MB",
    prices: {
      pdf: 0,
      usd: 0
    },
    oneLiner: "Free comprehensive monthly current affairs digest with Mains answer pointers and Prelims MCQs.",
    description: `A 100% free comprehensive current affairs monthly edition covering all major events across Polity, International Relations, Economy, Defence, Environment, and Science & Technology.`,
    whoShouldRead: [
      "UPSC CSE Prelims & Mains 2026/2027 aspirants."
    ],
    whatYoullLearn: [
      "Key Supreme Court judgments and Constitutional amendments."
    ],
    tableOfContents: [
      { chapter: "Section 1", title: "Polity & Governance" }
    ],
    faqs: [
      { q: "Is this monthly current affairs ebook completely free?", a: "Yes!" }
    ]
  },
  {
    id: "courage-to-practice-freedom",
    slug: "courage-to-practice-freedom",
    title: "The Courage to Practice Freedom",
    subtitle: "How to Live Without Approval, Fear, or Excuses",
    tagline: "Freedom is not a philosophical realization. It is a daily discipline trained under pressure.",
    category: "Personal Growth",
    subcategory: "Self Help",
    author: AUTHORS[0],
    publisher: "Go Pustak Publishing",
    coverBg: "from-amber-100 to-stone-200",
    coverAccent: "#DC2626",
    coverText: "text-stone-900",
    coverStyle: "bold",
    coverImage: "/covers/courage_to_practice_freedom.png",
    featured: true,
    bestseller: true,
    isFree: false,
    pages: 127,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "5.8 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Enforce boundaries without permission, break approval-seeking traps, and build unshakeable self-trust.",
    description: `Most people don’t feel unfree because they lack intelligence or information. They feel unfree because they don’t know how to practice freedom when it costs them comfort, approval, or certainty.`,
    whoShouldRead: [
      "Anyone who overthinks decisions waiting for external permission."
    ],
    whatYoullLearn: [
      "Why feeling free comes after acting free, not before."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Freedom Is Not a Feeling, It Is a Skill" }
    ],
    faqs: [
      { q: "Is this a theoretical philosophy book?", a: "No." }
    ]
  },
  {
    id: "motion-vs-action",
    slug: "motion-vs-action",
    title: "Motion vs Action",
    subtitle: "Stop Preparing and Start Executing | Eliminating the Illusion of Progress",
    tagline: "Busy is not the same as effective. Break free from fake productivity traps.",
    category: "Personal Growth",
    subcategory: "Productivity",
    author: AUTHORS[0],
    publisher: "Go Pustak Publishing",
    coverBg: "from-stone-900 to-black",
    coverAccent: "#F97316",
    coverText: "text-orange-100",
    coverStyle: "bold",
    coverImage: "/covers/motion_vs_action.png",
    featured: true,
    bestseller: true,
    isFree: false,
    pages: 110,
    publishedYear: 2026,
    updatedDate: "2026-08-02",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "4.9 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Break the illusion of fake productivity and eliminate motion traps with execution triggers.",
    description: `Motion feels like work. Motion is reading another book on productivity, organizing your desk, or writing to-do lists. Action is writing code or submitting the application.`,
    whoShouldRead: [
      "Procrastinators hiding behind research and preparation."
    ],
    whatYoullLearn: [
      "The scientific difference between Motion and Action."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Illusion of Progress" }
    ],
    faqs: [
      { q: "Is there a Hindi edition?", a: "Yes!" }
    ]
  },
  {
    id: "pragmatic-ai-for-business",
    slug: "pragmatic-ai-for-business",
    title: "Pragmatic AI for Business Leaders & Learners",
    subtitle: "Integrating Artificial Intelligence, LLMs & Automation Without Hype",
    tagline: "A zero-fluff engineering guide to building AI workflows that increase leverage.",
    category: "Technology",
    subcategory: "Artificial Intelligence",
    author: AUTHORS[0],
    publisher: "Go Pustak Tech Series",
    coverBg: "from-cyan-950 to-slate-900",
    coverAccent: "#06B6D4",
    coverText: "text-cyan-100",
    coverStyle: "tech",
    coverImage: "/covers/ai_without_the_hype.png",
    featured: true,
    bestseller: false,
    isFree: false,
    pages: 145,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "7.1 MB",
    prices: {
      pdf: 199,
      usd: 2.49
    },
    oneLiner: "Practical AI prompt engineering, LLM architecture, and workflow automation for modern professionals.",
    description: `Pragmatic AI provides an engineering-first blueprint for understanding how Large Language Models (LLMs) operate under the hood.`,
    whoShouldRead: [
      "Business managers, founders, and consultants."
    ],
    whatYoullLearn: [
      "How LLMs process tokens and context windows."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Demystifying LLMs" }
    ],
    faqs: [
      { q: "Do I need coding experience?", a: "No." }
    ]
  },
  {
    id: "ssc-cgl-general-awareness-handbook",
    slug: "ssc-cgl-general-awareness-handbook",
    title: "SSC CGL & CHSL General Awareness Blueprint",
    subtitle: "History, Polity, Geography, Economy & Static GK | Point-Wise Revision Notes",
    tagline: "High-probability static GK and general science notes for SSC Tier 1 & Tier 2.",
    category: "Competitive Exams",
    subcategory: "SSC",
    examCategory: "ssc",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Exam Prep Cell",
    coverBg: "from-indigo-900 to-slate-900",
    coverAccent: "#6366F1",
    coverText: "text-indigo-100",
    coverStyle: "exam",
    coverImage: "/covers/complete-geography-notes-hindi-bhugol.png",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 180,
    publishedYear: 2026,
    updatedDate: "2026-07-20",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "9.2 MB",
    prices: {
      pdf: 129,
      usd: 1.69
    },
    oneLiner: "Concise table-formatted revision notes covering History, Geography, Polity, Science, and Static GK for SSC exams.",
    description: `General Awareness is the make-or-break section in SSC CGL Tier 1 and Tier 2 exams. Distills NCERT fundamentals and previous 15 years SSC questions.`,
    whoShouldRead: [
      "SSC CGL, CHSL, CPO, and MTS aspirants."
    ],
    whatYoullLearn: [
      "Indian History Chronology and Polity Articles."
    ],
    tableOfContents: [
      { chapter: "Part 1", title: "Indian History & National Movement" }
    ],
    faqs: [
      { q: "Is this in English?", a: "Yes." }
    ]
  },
  {
    id: "banking-awareness-po-clerk",
    slug: "banking-awareness-po-clerk",
    title: "Mastering Banking & Financial Awareness",
    subtitle: "For SBI PO, IBPS PO, RBI Grade B & NABARD Examinations",
    tagline: "Complete coverage of RBI circulars, banking terminology, monetary policy, and digital banking.",
    category: "Competitive Exams",
    subcategory: "Banking",
    examCategory: "banking",
    author: AUTHORS[2],
    publisher: "ExamWave / Go Pustak Exam Prep Cell",
    coverBg: "from-emerald-900 to-teal-950",
    coverAccent: "#14B8A6",
    coverText: "text-teal-50",
    coverStyle: "exam",
    coverImage: "/covers/indian-economy-550-mcqs-upsc-epfo.png",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 160,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "8.1 MB",
    prices: {
      pdf: 139,
      usd: 1.79
    },
    oneLiner: "Essential guide to RBI functions, Monetary Policy, Capital Markets, NPCI payment systems, and financial terms.",
    description: `Banking Awareness requires clear conceptual understanding of financial systems and current RBI policy developments.`,
    whoShouldRead: [
      "SBI PO, IBPS PO/Clerk, and RBI Grade B aspirants."
    ],
    whatYoullLearn: [
      "Functions of RBI, CRR, SLR, Repo Rate."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Reserve Bank of India & Monetary Policy" }
    ],
    faqs: [
      { q: "Updated with RBI rates?", a: "Yes." }
    ]
  },
  {
    id: "free-effective-study-habits-guide",
    slug: "free-effective-study-habits-guide",
    title: "The Effective Study Habits Guide",
    subtitle: "Science-Backed Techniques for Faster Learning & Retention",
    tagline: "Active recall, spaced repetition, and study scheduling for students and competitive exam aspirants.",
    category: "Education & Learning",
    subcategory: "Study Skills",
    author: AUTHORS[1],
    publisher: "Go Pustak Learning Cell",
    coverBg: "from-emerald-700 to-teal-900",
    coverAccent: "#10B981",
    coverText: "text-emerald-50",
    coverStyle: "guide",
    coverImage: "/covers/habits_dont_work.png",
    featured: true,
    bestseller: true,
    isFree: true,
    pages: 45,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital"],
    fileSize: "3.8 MB",
    prices: {
      pdf: 0,
      usd: 0
    },
    oneLiner: "Free practical guide on Active Recall, Spaced Repetition, and the Feynman Technique for rapid learning.",
    description: `Stop rereading textbooks passively! Dr. Ananya Sharma outlines cognitive learning techniques verified by educational neuroscience.`,
    whoShouldRead: [
      "Students preparing for school, university, or competitive exams."
    ],
    whatYoullLearn: [
      "Active Recall vs. Passive Reading."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Why Rereading Textbooks Fails" }
    ],
    faqs: [
      { q: "Is this free?", a: "Yes!" }
    ]
  }
];
