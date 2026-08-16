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
    role: "Research & Exam Content Cell",
    bio: "A dedicated team of subject matter experts, exam toppers, and senior researchers crafting high-precision study resources.",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop"
  }
];

export const BOOKS = [
  {
    id: "think-on-paper",
    slug: "think-on-paper",
    title: "Think on Paper",
    subtitle: "A Small Tool. Big Transformation. The $2 Productivity Upgrade for Your Brain",
    tagline: "How writing by hand organizes your mind, clears mental clutter, and turns abstract thoughts into executable reality.",
    category: "Personal Growth",
    subcategory: "Productivity",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Publishing",
    coverBg: "from-emerald-800 to-emerald-950",
    coverAccent: "#10B981",
    coverText: "text-emerald-100",
    coverStyle: "journal",
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
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
    ],
    sampleExcerpt: `Chapter 1: Your Brain Is a Processor, Not a Hard Drive

When you try to solve a complex decision entirely inside your head, your mental RAM reaches immediate saturation. Placing pen on paper provides an instant external memory buffer.`
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
    author: AUTHORS[2], // Go Pustak Editorial Team
    publisher: "Go Pustak Exam Prep Cell",
    coverBg: "from-blue-900 to-slate-950",
    coverAccent: "#2563EB",
    coverText: "text-blue-50",
    coverStyle: "exam",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
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
    description: `Designed specifically for UPSC EPFO Enforcement Officer / Accounts Officer (EO/AO) and Assistant Provident Fund Commissioner (APFC) aspirants.

This ebook synthesizes complex legal provisions, accounting standards, and social security schemes into clear, revised notes with previous year question analysis.`,
    whoShouldRead: [
      "UPSC EPFO EO/AO & APFC aspirants aiming for first-attempt success.",
      "Candidates seeking concise coverage of Labour Laws, Industrial Relations, and Accounting Principles.",
      "Working professionals needing time-efficient revision material."
    ],
    whatYoullLearn: [
      "General Accounting Principles (GAAP, Ledger entries, Trial Balance, Depreciation).",
      "Industrial Relations & New Labour Codes 2020 (Wage Code, Industrial Relations Code, Social Security Code, OSH Code).",
      "Social Security Schemes in India (EPF Act 1952, ESI Act 1948, PM-SYM, Atal Pension Yojana).",
      "Indian Polity, Economy, and Freedom Movement key points."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "General Accounting Principles & Financial Statements" },
      { chapter: "Module 2", title: "Industrial Relations & Trade Union Movements" },
      { chapter: "Module 3", title: "New 4 Labour Codes 2020 Comparison Matrix" },
      { chapter: "Module 4", title: "Social Security Legislation & Government Schemes" },
      { chapter: "Module 5", title: "Previous 10 Years UPSC EPFO Solved Questions" }
    ],
    faqs: [
      { q: "Are the new Labour Codes included?", a: "Yes. All 4 new Labour Codes of 2020 are thoroughly updated and tabulated." },
      { q: "Is this suitable for APFC exam as well?", a: "Yes, it covers both EO/AO and APFC syllabus requirements." }
    ],
    sampleExcerpt: `Module 2: Industrial Relations & Trade Union Legislation

Industrial Relations deals with the dynamic relationship between employees, employers, and the State. The Trade Unions Act of 1926 mandates a minimum of 7 members to apply for registration of a trade union.`
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
    author: AUTHORS[2], // Go Pustak Editorial Team
    publisher: "Go Pustak Current Affairs Cell",
    coverBg: "from-amber-800 to-red-950",
    coverAccent: "#F59E0B",
    coverText: "text-amber-50",
    coverStyle: "digest",
    coverImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
    featured: true,
    bestseller: false,
    isFree: true, // FREE EBOOK
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
    description: `A 100% free comprehensive current affairs monthly edition covering all major events across Polity, International Relations, Economy, Defence, Environment, and Science & Technology.

Includes mind maps, GS Paper 1-4 syllabus mapping, and practice questions for UPSC CSE, State PSC, and competitive exams.`,
    whoShouldRead: [
      "UPSC CSE Prelims & Mains 2026/2027 aspirants.",
      "State PSC and competitive exam candidates seeking reliable monthly news analysis.",
      "General readers wanting structured current events summaries."
    ],
    whatYoullLearn: [
      "Key Supreme Court judgments and Constitutional amendments.",
      "Global bilateral summits and multilateral agreements (G20, BRICS, SCO).",
      "Economic Survey highlights, RBI monetary policy decisions, and inflation indices.",
      "ISRO space missions, Defence procurements, and environmental conservation acts."
    ],
    tableOfContents: [
      { chapter: "Section 1", title: "Polity & Governance" },
      { chapter: "Section 2", title: "International Relations & Strategic Affairs" },
      { chapter: "Section 3", title: "Indian Economy & Financial System" },
      { chapter: "Section 4", title: "Science, AI & Space Technology" },
      { chapter: "Section 5", title: "Environment, Ecology & Climate Change" }
    ],
    faqs: [
      { q: "Is this monthly current affairs ebook completely free?", a: "Yes! 100% free direct download with zero hidden fees." },
      { q: "Is it formatted for print and mobile reading?", a: "Yes, clean two-column layout optimized for tablets, phones, and printouts." }
    ],
    sampleExcerpt: `Section 3: Indian Economy & Financial System

The Reserve Bank of India's Monetary Policy Committee maintained the Repo Rate while highlighting the importance of anchored inflation expectations and liquidity management in banking channels.`
  },
  {
    id: "courage-to-practice-freedom",
    slug: "courage-to-practice-freedom",
    title: "The Courage to Practice Freedom",
    subtitle: "How to Live Without Approval, Fear, or Excuses",
    tagline: "Freedom is not a philosophical realization. It is a daily discipline trained under pressure.",
    category: "Personal Growth",
    subcategory: "Self Help",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Publishing",
    coverBg: "from-amber-100 to-stone-200",
    coverAccent: "#DC2626",
    coverText: "text-stone-900",
    coverStyle: "bold",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
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
    description: `Most people don’t feel unfree because they lack intelligence or information. They feel unfree because they don’t know how to practice freedom when it costs them comfort, approval, or certainty.

In **The Courage to Practice Freedom**, Pankaj Kumar provides a practical behavior manual for setting boundaries without debate, ending people-pleasing, and choosing meaningful action regardless of emotional mood.`,
    whoShouldRead: [
      "Anyone who overthinks decisions waiting for external permission or validation.",
      "People struggling with people-pleasing, guilt, and fear of disappointing others.",
      "Readers looking for practical psychological clarity over superficial motivational slogans."
    ],
    whatYoullLearn: [
      "Why feeling free comes *after* acting free, not before.",
      "Separation of Tasks: Differentiating your responsibility from others' emotional reactions.",
      "How to set non-negotiable personal boundaries without explanation or debate.",
      "Choosing long-term purpose over short-term comfort."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Freedom Is Not a Feeling, It Is a Skill" },
      { chapter: "Chapter 2", title: "The Hidden Cost of Wanting Approval" },
      { chapter: "Chapter 3", title: "Practicing Separation of Tasks in Real Life" },
      { chapter: "Chapter 4", title: "Boundaries That Don’t Need Permission" },
      { chapter: "Chapter 5", title: "Meaning Before Happiness" }
    ],
    faqs: [
      { q: "Is this a theoretical philosophy book?", a: "No, it contains concrete exercises at the end of every chapter." }
    ],
    sampleExcerpt: `Chapter 1: Freedom Is Not a Feeling, It Is a Skill

You cannot think your way into personal freedom. You must act your way into it by taking small, uncomfortable steps when approval is absent.`
  },
  {
    id: "motion-vs-action",
    slug: "motion-vs-action",
    title: "Motion vs Action",
    subtitle: "Stop Preparing and Start Executing | Eliminating the Illusion of Progress",
    tagline: "Busy is not the same as effective. Break free from fake productivity traps.",
    category: "Personal Growth",
    subcategory: "Productivity",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Publishing",
    coverBg: "from-stone-900 to-black",
    coverAccent: "#F97316",
    coverText: "text-orange-100",
    coverStyle: "bold",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
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
    description: `Motion feels like work. Motion is reading another book on productivity, organizing your desk for the third time today, or writing endless to-do lists. Action is writing the first code line, submitting the application, or making the difficult call.

Pankaj Kumar outlines the precise neurological difference between Motion and Action, and gives you a framework to ship real results every single day.`,
    whoShouldRead: [
      "Procrastinators who hide behind research, planning, and preparation.",
      "Students preparing for competitive exams who spend hours organizing timetables without studying.",
      "Creators and developers who struggle to finish and launch projects."
    ],
    whatYoullLearn: [
      "The scientific difference between Motion (passive prep) and Action (output delivery).",
      "The 'One Keystone Action' rule for daily execution.",
      "How to eliminate complexity traps that mask fear of failure."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Illusion of Progress" },
      { chapter: "Chapter 2", title: "Why Research Feels Safer Than Execution" },
      { chapter: "Chapter 3", title: "The One Keystone Action Protocol" },
      { chapter: "Chapter 4", title: "Shipping Imperfect Work Daily" }
    ],
    faqs: [
      { q: "Is there a Hindi edition available?", a: "Yes! 'मोशन बनाम एक्शन' is available on Go Pustak." }
    ],
    sampleExcerpt: `Chapter 1: The Illusion of Progress

When you spend four hours customizing your note-taking app, your brain releases dopamine as if you accomplished real work. You didn't. You remained in Motion.`
  },
  {
    id: "pragmatic-ai-for-business",
    slug: "pragmatic-ai-for-business",
    title: "Pragmatic AI for Business Leaders & Learners",
    subtitle: "Integrating Artificial Intelligence, LLMs & Automation Without Hype",
    tagline: "A zero-fluff engineering guide to building AI workflows that increase leverage.",
    category: "Technology",
    subcategory: "Artificial Intelligence",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Tech Series",
    coverBg: "from-cyan-950 to-slate-900",
    coverAccent: "#06B6D4",
    coverText: "text-cyan-100",
    coverStyle: "tech",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
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
    description: `Artificial Intelligence is transforming every sector, but most commentary is split between apocalyptic panic and unrealistic marketing hype.

**Pragmatic AI** provides an engineering-first blueprint for understanding how Large Language Models (LLMs), RAG systems, and AI agents operate under the hood, and how to integrate them practically into business processes.`,
    whoShouldRead: [
      "Business managers, founders, and consultants seeking real AI implementation strategies.",
      "Software developers and students entering the AI and machine learning ecosystem.",
      "Knowledge workers wanting to automate repetitive analytical tasks."
    ],
    whatYoullLearn: [
      "How LLMs process tokens, context windows, and embeddings.",
      "Structured Prompt Engineering: Few-shot, Chain-of-Thought, and System Persona design.",
      "Building Retrieval-Augmented Generation (RAG) pipelines for custom documents.",
      "Ethical data security, privacy compliance, and AI governance."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Demystifying LLMs: Architecture Without Math Overload" },
      { chapter: "Chapter 2", title: "Prompt Engineering as Code" },
      { chapter: "Chapter 3", title: "RAG Architecture: Chatting With Enterprise Data" },
      { chapter: "Chapter 4", title: "Automating Workflows with AI Agents" }
    ],
    faqs: [
      { q: "Do I need deep Python coding experience to read this?", a: "No. The book covers conceptual architecture, business implementation, and prompt logic alongside optional code snippets." }
    ],
    sampleExcerpt: `Chapter 2: Prompt Engineering as Code

A prompt is not a casual conversation with a chatbot. In an enterprise system, a prompt is a structured software input that requires clear constraints, fallback handlers, and deterministic output schemas.`
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
    author: AUTHORS[2], // Go Pustak Editorial Team
    publisher: "Go Pustak Exam Prep Cell",
    coverBg: "from-indigo-900 to-slate-900",
    coverAccent: "#6366F1",
    coverText: "text-indigo-100",
    coverStyle: "exam",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
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
    description: `General Awareness is the make-or-break section in SSC CGL Tier 1 and Tier 2 exams.

This handbook distills NCERT fundamentals, previous 15 years SSC questions, and high-frequency static GK topics into one easy-to-revise PDF handbook.`,
    whoShouldRead: [
      "SSC CGL, CHSL, CPO, and MTS aspirants.",
      "Candidates looking for last-minute high-yield revision material."
    ],
    whatYoullLearn: [
      "Indian History Chronology: Ancient, Medieval, and Freedom Struggle key dates.",
      "Indian Constitution: Articles, Schedules, Amendments, and Landmark Cases.",
      "Physical & Indian Geography: Rivers, National Parks, Soil Types, Mineral Resources.",
      "General Science: Physics laws, Chemistry formulas, Biology human anatomy."
    ],
    tableOfContents: [
      { chapter: "Part 1", title: "Indian History & National Movement" },
      { chapter: "Part 2", title: "Polity & Constitution Essentials" },
      { chapter: "Part 3", title: "Geography of India & World" },
      { chapter: "Part 4", title: "General Science (Physics, Chemistry, Biology)" }
    ],
    faqs: [
      { q: "Is this book in English?", a: "Yes, written in simple, clear English optimized for quick memorization." }
    ],
    sampleExcerpt: `Part 2: Polity Essentials — Important Articles

Article 14: Equality before law. Article 21: Protection of life and personal liberty. Article 32: Right to Constitutional Remedies (termed by Dr. B.R. Ambedkar as the heart and soul of the Constitution).`
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
    author: AUTHORS[2], // Go Pustak Editorial Team
    publisher: "Go Pustak Exam Prep Cell",
    coverBg: "from-emerald-900 to-teal-950",
    coverAccent: "#14B8A6",
    coverText: "text-teal-50",
    coverStyle: "exam",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
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
    description: `Banking Awareness requires clear conceptual understanding of financial systems and current RBI policy developments.

This study guide covers everything from the structure of Indian banking to digital payment infrastructure (UPI, NEFT, RTGS, CBDC).`,
    whoShouldRead: [
      "SBI PO, IBPS PO, IBPS Clerk, and RRB aspirants preparing for Mains and Interviews.",
      "RBI Grade B and NABARD Grade A candidates needing solid financial awareness."
    ],
    whatYoullLearn: [
      "Functions of RBI, CRR, SLR, Repo Rate, Reverse Repo, MSF.",
      "Types of Bank Accounts, Cheques, NPA Classification, SARFAESI Act.",
      "Digital Banking: NPCI, UPI, RuPay, CBDC (Digital Rupee), Cyber Security."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Reserve Bank of India & Monetary Policy" },
      { chapter: "Module 2", title: "Types of Banking & Financial Instruments" },
      { chapter: "Module 3", title: "NPAs, Capital Adequacy & Basel III Norms" },
      { chapter: "Module 4", title: "Digital Payments & NPCI Infrastructure" }
    ],
    faqs: [
      { q: "Is this updated with latest RBI policies?", a: "Yes, updated with current monetary policy rates and digital payment guidelines." }
    ],
    sampleExcerpt: `Module 1: Reserve Bank of India & Monetary Policy

The Reserve Bank of India was established on April 1, 1935, under the Reserve Bank of India Act, 1934. It acts as the banker to the government and lender of last resort for commercial banks.`
  },
  {
    id: "wired-mind-silent-pages",
    slug: "wired-mind-silent-pages",
    title: "Wired Mind, Silent Pages",
    subtitle: "Read Deeper, Live Clearer | How Reading Rewires the Distracted Brain",
    tagline: "In an era of hyper-stimulation, deep reading is the ultimate cognitive superpower.",
    category: "Personal Growth",
    subcategory: "Psychology",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Publishing",
    coverBg: "from-amber-900 to-stone-900",
    coverAccent: "#D97706",
    coverText: "text-amber-50",
    coverStyle: "editorial",
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 131,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "5.4 MB",
    prices: {
      pdf: 139,
      usd: 1.79
    },
    oneLiner: "Reclaim your attention span from short-form videos and rediscover the meditative power of long-form reading.",
    description: `Our minds are constantly wired—fragmented by notifications, algorithmic feeds, and endless short-form content. Silent pages offer a powerful antidote.

In **Wired Mind, Silent Pages**, Pankaj Kumar explores the neuroscience of deep reading and provides practical strategies to rebuild long-form focus.`,
    whoShouldRead: [
      "Anyone who finds themselves checking their phone while trying to read a book.",
      "Students struggling to read dense textbooks without losing concentration.",
      "Knowledge workers seeking to restore deep focus."
    ],
    whatYoullLearn: [
      "The Neurological Shift: How reading physical books activates deep brain networks.",
      "How algorithm feeds erode working memory capacity.",
      "Designing a 30-minute daily distraction-free reading ritual."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Fragmented Attention Economy" },
      { chapter: "Chapter 2", title: "Deep Reading vs. Screen Scanning" },
      { chapter: "Chapter 3", title: "Rebuilding Your Cognitive Focus Reservoir" }
    ],
    faqs: [
      { q: "Is there a Hindi edition?", a: "Yes! 'उलझा हुआ मन, सुकून के पन्ने' is available." }
    ],
    sampleExcerpt: `Chapter 1: The Fragmented Attention Economy

When you open a physical book, there are no notifications waiting in the margin. The book asks nothing of you except your presence.`
  },
  {
    id: "free-effective-study-habits-guide",
    slug: "free-effective-study-habits-guide",
    title: "The Effective Study Habits Guide",
    subtitle: "Science-Backed Techniques for Faster Learning & Retention",
    tagline: "Active recall, spaced repetition, and study scheduling for students and competitive exam aspirants.",
    category: "Education & Learning",
    subcategory: "Study Skills",
    author: AUTHORS[1], // Dr. Ananya Sharma
    publisher: "Go Pustak Learning Cell",
    coverBg: "from-emerald-700 to-teal-900",
    coverAccent: "#10B981",
    coverText: "text-emerald-50",
    coverStyle: "guide",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    featured: true,
    bestseller: true,
    isFree: true, // FREE EBOOK
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
    description: `Stop re-reading textbooks passively! Dr. Ananya Sharma outlines cognitive learning techniques verified by educational neuroscience.

Learn how to create flashcards, schedule revision cycles using the Ebbinghaus Forgetting Curve, and explain complex concepts simply.`,
    whoShouldRead: [
      "Students preparing for school, university, or competitive exams.",
      "Lifelong learners wanting to retain information faster."
    ],
    whatYoullLearn: [
      "Active Recall vs. Passive Reading.",
      "Spaced Repetition intervals for long-term memory consolidation.",
      "The Feynman Technique: Teaching to learn."
    ],
    tableOfContents: [
      { chapter: "Module 1", title: "Why Rereading Textbooks Fails" },
      { chapter: "Module 2", title: "Active Recall & Flashcard Systems" },
      { chapter: "Module 3", title: "Spaced Repetition Schedule" }
    ],
    faqs: [
      { q: "Is this guide completely free?", a: "Yes! Download instantly as a free PDF." }
    ],
    sampleExcerpt: `Module 1: Why Rereading Textbooks Fails

Rereading highlighted text creates an 'illusion of competence'. Your brain recognizes the words, but recognition is not the same as recall.`
  },
  {
    id: "defence-matrix-stealth-airframes",
    slug: "defence-matrix-stealth-airframes",
    title: "Defence Matrix: Aerospace Stealth & Defense Engineering",
    subtitle: "5th Gen Fighter Airframes, Stealth Geometry, Radar Cross-Section & S-500 Systems",
    tagline: "An engineering deep dive into modern aerospace defense technology and military aviation.",
    category: "Technology",
    subcategory: "Technology Explained",
    author: AUTHORS[0], // Pankaj Kumar
    publisher: "Go Pustak Tech Series",
    coverBg: "from-slate-900 to-zinc-950",
    coverAccent: "#64748B",
    coverText: "text-slate-100",
    coverStyle: "defense",
    coverImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop",
    featured: false,
    bestseller: false,
    isFree: false,
    pages: 210,
    publishedYear: 2026,
    updatedDate: "2026-07-15",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "14.2 MB",
    prices: {
      pdf: 249,
      usd: 2.99
    },
    oneLiner: "Aerospace engineering analysis of radar signature reduction, stealth composites, and air defense systems.",
    description: `Written by mechanical engineer Pankaj Kumar, **Defence Matrix** provides an authoritative exploration of military aerospace engineering.

Covers stealth airframe shaping, Radar Cross Section (RCS) physics, RAM coatings, electronic warfare, and missile defense systems.`,
    whoShouldRead: [
      "Aerospace engineering students, defense enthusiasts, and military technology researchers.",
      "UPSC Defence / CAPF / CDS aspirants seeking deep technical knowledge."
    ],
    whatYoullLearn: [
      "Stealth Geometry: Planform alignment, internal weapons bays, and serpentine intakes.",
      "Radar Cross Section (RCS) measurement in square meters.",
      "S-400 & S-500 surface-to-air missile defense architecture."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Physics of Radar Cross Section (RCS)" },
      { chapter: "Chapter 2", title: "Stealth Airframe Geometry & Planform Alignment" },
      { chapter: "Chapter 3", title: "Electronic Warfare & Countermeasures" }
    ],
    faqs: [
      { q: "Is this book accessible to general tech enthusiasts?", a: "Yes, complex formulas are accompanied by clear engineering diagrams and explanations." }
    ],
    sampleExcerpt: `Chapter 1: Physics of Radar Cross Section (RCS)

Stealth is not invisibility. Stealth is the deliberate reduction of a vehicle's electromagnetic signature so that enemy sensors detect it only at close range.`
  },
  {
    id: "book-summary-vault-vol-1",
    slug: "book-summary-vault-vol-1",
    title: "The Book Summary Vault — Vol 1",
    subtitle: "25 Timeless Books on Systems, Mindset, Leadership & Clear Thinking Summarized",
    tagline: "Actionable 15-minute breakdowns of influential non-fiction classics.",
    category: "Books & Ideas",
    subcategory: "Book Summaries",
    author: AUTHORS[2], // Go Pustak Editorial Team
    publisher: "Go Pustak Ideas Library",
    coverBg: "from-amber-900 to-yellow-950",
    coverAccent: "#D97706",
    coverText: "text-amber-100",
    coverStyle: "vault",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    featured: false,
    bestseller: true,
    isFree: false,
    pages: 175,
    publishedYear: 2026,
    updatedDate: "2026-08-01",
    language: "English",
    fileFormats: ["PDF Digital", "EPUB Edition"],
    fileSize: "6.9 MB",
    prices: {
      pdf: 149,
      usd: 1.99
    },
    oneLiner: "Core mental models, key quotes, and implementation steps from 25 classic non-fiction books.",
    description: `Don't just read summaries—extract actionable systems! **The Book Summary Vault** synthesizes 25 foundational books across productivity, decision-making, finance, and psychology into structured, point-by-point guides.`,
    whoShouldRead: [
      "Busy readers, executives, and students wanting key insights from non-fiction masterpieces.",
      "Book lovers seeking structured review guides."
    ],
    whatYoullLearn: [
      "Key takeaways from books like Atomic Habits, Deep Work, Thinking Fast and Slow, The Psychology of Money.",
      "1-Page Mental Model diagrams for each book.",
      "Actionable implementation checklists."
    ],
    tableOfContents: [
      { chapter: "Part 1", title: "Productivity & Focus Summaries" },
      { chapter: "Part 2", title: "Psychology & Decision Making Summaries" },
      { chapter: "Part 3", title: "Finance & Wealth Mindset Summaries" }
    ],
    faqs: [
      { q: "Are these full book summaries?", a: "Yes, each summary is 6–8 pages with deep analysis, key quotes, and action steps." }
    ],
    sampleExcerpt: `Summary 1: Atomic Habits by James Clear

You do not rise to the level of your goals. You fall to the level of your systems. Focus on 1% daily marginal gains.`
  }
];
