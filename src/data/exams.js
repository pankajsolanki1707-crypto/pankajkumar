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
