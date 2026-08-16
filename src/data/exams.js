// Go Pustak — Competitive Exams Hub Database

export const EXAM_HUBS = [
  {
    id: "upsc",
    slug: "upsc",
    name: "UPSC Civil Services",
    badge: "UPSC CSE",
    tagline: "Structured Ebooks, Current Affairs & Mains Answer Frameworks for IAS/IPS Aspirants.",
    description: "Prepare for UPSC CSE Prelims & Mains with concise, point-wise study guides, monthly current affairs digests, and syllabus-mapped notes.",
    iconName: "Award",
    accentColor: "from-blue-900 to-indigo-950",
    primaryEbookIds: ["upsc-current-affairs-june-2026", "upsc-epfo-study-guide"],
    keySubjects: ["Polity & Governance", "Indian Economy", "Geography & Environment", "History & Culture", "Science & Technology", "Ethics (GS-4)"]
  },
  {
    id: "upsc-epfo",
    slug: "upsc-epfo",
    name: "UPSC EPFO (EO/AO & APFC)",
    badge: "EPFO Special",
    tagline: "Dedicated Material for General Accounting, Industrial Relations, Labour Laws & Social Security.",
    description: "Complete exam-oriented coverage for Enforcement Officer (EO), Accounts Officer (AO), and Assistant Provident Fund Commissioner (APFC) posts.",
    iconName: "FileCheck",
    accentColor: "from-emerald-900 to-teal-950",
    primaryEbookIds: ["upsc-epfo-study-guide"],
    keySubjects: ["General Accounting Principles", "Industrial Relations", "New 4 Labour Codes 2020", "Social Security Legislation", "Indian Freedom Struggle"]
  },
  {
    id: "ssc",
    slug: "ssc",
    name: "SSC CGL / CHSL",
    badge: "SSC CGL & CHSL",
    tagline: "Point-Wise Static GK, General Awareness, and High-Probability Revision Handbooks.",
    description: "Comprehensive notes for SSC CGL Tier 1 & Tier 2, CHSL, and CPO covering History, Geography, Polity, Science, and Current Events.",
    iconName: "BookOpen",
    accentColor: "from-indigo-900 to-slate-900",
    primaryEbookIds: ["ssc-cgl-general-awareness-handbook"],
    keySubjects: ["Indian History", "Indian Polity & Constitution", "General Science", "Physical & Indian Geography", "Static GK Tables"]
  },
  {
    id: "banking",
    slug: "banking",
    name: "Banking (IBPS / SBI PO & Clerk)",
    badge: "SBI & IBPS PO",
    tagline: "RBI Circulars, Monetary Policy, Digital Banking & Financial Awareness Handbooks.",
    description: "Targeted banking awareness ebooks for SBI PO, IBPS PO/Clerk, RBI Grade B, and NABARD Mains and Interview preparation.",
    iconName: "Building2",
    accentColor: "from-teal-900 to-slate-900",
    primaryEbookIds: ["banking-awareness-po-clerk"],
    keySubjects: ["RBI Functions & Rates", "Digital Payment Systems (UPI, CBDC)", "NPA & Financial Instruments", "Banking Terms & Abbreviations"]
  },
  {
    id: "state-psc",
    slug: "state-psc",
    name: "State PSC Examinations",
    badge: "State PSC",
    tagline: "General Studies & Regional Current Affairs for UPPSC, BPSC, MPPSC & State Services.",
    description: "State-specific General Studies guides, regional current affairs digests, and previous year solved questions.",
    iconName: "Landmark",
    accentColor: "from-amber-900 to-stone-900",
    primaryEbookIds: ["upsc-current-affairs-june-2026", "free-effective-study-habits-guide"],
    keySubjects: ["State History & Geography", "State Economy & Budget", "General Studies Paper 1-4", "Administrative Aptitude"]
  }
];
