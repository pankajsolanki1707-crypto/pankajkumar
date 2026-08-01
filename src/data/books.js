// Pankaj Kumar Author Platform - Master Books Database
// Page counts retrieved directly from actual PDF document structures.

export const CATEGORIES = [
  "All Books",
  "Productivity",
  "Psychology",
  "Self Improvement",
  "Technology",
  "Philosophy",
  "Habits",
  "Decision Making"
];

export const BOOKS = [
  {
    id: "courage-to-practice-freedom",
    title: "The Courage to Practice Freedom",
    subtitle: "How to Live Without Approval, Fear, or Excuses",
    tagline: "How to live without approval, fear, or excuses.",
    category: "Self Improvement",
    secondaryCategories: ["Psychology", "Philosophy"],
    coverBg: "from-amber-100 to-stone-200",
    coverAccent: "#DC2626",
    coverText: "text-stone-900",
    coverStyle: "bold",
    coverImage: "/covers/courage_to_practice_freedom.png",
    featured: true,
    latestRelease: true,
    bestseller: true,
    pages: 127,
    publishedYear: 2026,
    language: "English",
    prices: {
      pdf: 149
    },
    formats: ["PDF Digital"],
    oneLiner: "Freedom is not a feeling or philosophical realization. It is a daily discipline trained under pressure.",
    description: `Most people don’t feel unfree because they lack intelligence, motivation, or information. They feel unfree because they don’t know how to practice freedom when it costs them comfort, approval, or certainty.

In **The Courage to Practice Freedom**, engineer and author Pankaj Kumar breaks down why insight alone doesn't change your life, and presents a concrete practice manual for building self-trust, enforcing boundaries without permission, and stepping out of approval-seeking traps.`,
    whoShouldRead: [
      "Anyone who overthinks more than they act and postpones decisions waiting to feel 'ready'.",
      "People who struggle with people-pleasing, guilt, and fear of disappointment.",
      "Seekers looking for practical psychological clarity over superficial motivational slogans."
    ],
    whatYoullLearn: [
      "Why feeling free comes *after* acting free, not before.",
      "The Separation of Tasks: Differentiating your responsibility from others' reactions.",
      "How to set boundaries that don't require permission, debate, or justification.",
      "Freedom from the past without denying its influence on your nervous system."
    ],
    tableOfContents: [
      { chapter: "Introduction", title: "Why Understanding Freedom Is Not Enough" },
      { chapter: "Chapter 1", title: "Freedom Is Not a Feeling, It Is a Skill" },
      { chapter: "Chapter 2", title: "Why Insight Alone Doesn’t Change Your Life" },
      { chapter: "Chapter 3", title: "The Hidden Cost of Wanting Approval" },
      { chapter: "Chapter 4", title: "Responsibility Without Self-Blame" },
      { chapter: "Chapter 5", title: "Practicing Separation of Tasks (In Real Life)" },
      { chapter: "Chapter 6", title: "Choosing Actions When Motivation Is Missing" },
      { chapter: "Chapter 7", title: "Freedom from the Past (Without Denying It)" },
      { chapter: "Chapter 8", title: "How to Stop Living in Other People’s Minds" },
      { chapter: "Chapter 9", title: "Boundaries That Don’t Need Permission" },
      { chapter: "Chapter 10", title: "Being Kind without Self-Erasure" },
      { chapter: "Chapter 11", title: "When Disappointment Is Inevitable" },
      { chapter: "Chapter 12", title: "Conflict as Proof You Are Free" },
      { chapter: "Chapter 13", title: "Meaning before Happiness" },
      { chapter: "Chapter 14", title: "A Life You Can Stand Behind" }
    ],
    faqs: [
      { q: "Is this a theoretical philosophical book?", a: "No. It is a practical behavior manual with specific daily practices at the end of each chapter." },
      { q: "When do I get the PDF version?", a: "Instantly upon completion of payment via Cashfree. The PDF will also be saved in your 'My Library' dashboard." }
    ],
    sampleExcerpt: `Introduction: Why Understanding Freedom Is Not Enough

Most people don’t feel unfree because they lack intelligence, motivation, or information. They feel unfree because they don’t know how to practice freedom when it costs them comfort, approval, or certainty.

You may already understand many of the ideas this book builds on. You might know that:
- You can’t control others’ opinions
- The past doesn’t strictly determine the future
- Happiness isn’t something society hands out as a reward

And yet, knowing these things hasn’t made your life lighter. You still hesitate before speaking honestly. You still overthink how you’re perceived. You still postpone decisions waiting to feel “ready.” You still explain yourself more than necessary.

This gap between understanding and living is where most personal growth books quietly fail. Insight feels powerful in the moment. Practice feels uncomfortable in real life.

Freedom, as it turns out, is not a realization. It is a discipline. This book begins where understanding ends.`
  },
  {
    id: "think-on-paper",
    title: "Think on Paper",
    subtitle: "A Small Tool. Big Transformation. The $2 Productivity Upgrade for Your Brain",
    tagline: "How writing by hand organizes your mind, clears mental clutter, and turns abstract thoughts into executable reality.",
    category: "Productivity",
    secondaryCategories: ["Decision Making", "Psychology"],
    coverBg: "from-emerald-800 to-emerald-950",
    coverAccent: "#10B981",
    coverText: "text-emerald-100",
    coverStyle: "journal",
    coverImage: "/covers/think_on_paper.jpg",
    featured: true,
    latestRelease: false,
    bestseller: true,
    pages: 64,
    publishedYear: 2025,
    language: "English",
    prices: {
      pdf: 149
    },
    formats: ["PDF Digital"],
    oneLiner: "Stop thinking inside your head. Offload your thoughts onto paper and engineer your life with precision.",
    description: `Most people spend their entire lives trying to solve complex problems inside their head. But working memory is severely limited—it can only hold 4 to 7 pieces of information at once.

In **Think on Paper**, engineer and author Pankaj Kumar introduces a systematic framework for offloading internal cognitive load onto external medium. By applying principles of systems engineering, signal processing, and cognitive psychology, this book teaches you how to map out complex decisions, debug mental bottlenecks, and build personal operating systems on simple paper.`,
    whoShouldRead: [
      "Engineers, developers, and knowledge workers struggling with cognitive overload.",
      "Entrepreneurs who need to make critical strategic decisions without mental fatigue.",
      "Creatives who have endless ideas but struggle to organize them into execution.",
      "Anyone who feels anxious, overwhelmed, or stuck in chronic overthinking."
    ],
    whatYoullLearn: [
      "The 4-Step Paper Architecture: Capture, Deconstruct, Synthesize, Execute.",
      "How to build a mental external RAM using simple index cards and dot-grid journals.",
      "Why typing on laptops creates superficial thinking, while handwriting activates deep neurological synthesis.",
      "The Decision Tree Matrix for resolving complex career and personal dilemmas in under 15 minutes.",
      "Daily paper routines of historical polymaths, engineers, and bestselling thinkers."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Working Memory Trap: Why Thinking in Your Head Fails" },
      { chapter: "Chapter 2", title: "Paper as External Memory: The Engineering Analogy" },
      { chapter: "Chapter 3", title: "The Deconstruction Protocol: Breaking Heavy Problems into Atoms" },
      { chapter: "Chapter 4", title: "The Decision Matrix: Mathematical Clarity for Life Choices" },
      { chapter: "Chapter 5", title: "Daily & Weekly Paper Systems for High-Output Living" },
      { chapter: "Chapter 6", title: "Maintaining the System: Avoiding Journaling Traps" }
    ],
    faqs: [
      { q: "Do I need a special fancy journal or expensive pen for this?", a: "Not at all. The principles work on any plain sheet of paper, index card, or simple notebook. It is about the protocol, not the stationery." },
      { q: "When do I get the PDF version?", a: "Instantly upon checkout! It will be immediately unlocked in your 'My Library' dashboard with a secure download link." },
      { q: "Is sample chapter available?", a: "Yes! Click the 'Read Free Sample' button to read Chapter 1 right now in your browser." }
    ],
    sampleExcerpt: `Chapter 1: The Working Memory Trap

Consider how a computer operates under heavy computation. When you open fifty browser tabs, run background video rendering, and open a compiler, RAM fills up. The machine slows down. Fans whir. Click responses lag.

Your brain operates on the exact same physical constraints. Working memory is your neurological RAM. When you try to weigh career choices, financial budgets, project deadlines, and personal relationship nuances all inside your head at once, your internal RAM crashes. You experience this as anxiety, brain fog, and chronic procrastination.

The solution is not to try harder inside your head. The solution is externalization.`
  },
  {
    id: "motion-vs-action",
    title: "Motion vs Action",
    subtitle: "How to Escape the Illusion of Progress and Finally Get Things Done",
    tagline: "Stop confusing activity with achievement. A framework for high-output living.",
    category: "Productivity",
    secondaryCategories: ["Habits", "Decision Making"],
    coverBg: "from-slate-800 to-slate-950",
    coverAccent: "#3B82F6",
    coverText: "text-slate-100",
    coverStyle: "bold",
    coverImage: "/covers/motion_vs_action.png",
    featured: true,
    bestseller: true,
    pages: 83,
    publishedYear: 2025,
    language: "English",
    prices: {
      pdf: 129
    },
    formats: ["PDF Digital"],
    oneLiner: "Being busy is not the same as being effective. Learn how to stop preparing and start delivering results.",
    description: `Motion is researching 10 books on writing. Action is writing 500 words. Motion is tweaking your website color palette. Action is hitting publish. 

In **Motion vs Action**, Pankaj Kumar breaks down why humans naturally default to motion: because motion feels like work without the risk of failure. This book provides a ruthless filter to audit your daily tasks, eliminate false work, and build momentum through real output.`,
    whoShouldRead: [
      "People who feel constantly busy at the end of the day but haven't achieved their core goals.",
      "Entrepreneurs who spend weeks planning but delay launching.",
      "Students preparing endlessly without practicing active recall."
    ],
    whatYoullLearn: [
      "The Motion-Action Matrix: How to categorize every task in 30 seconds.",
      "Why motion triggers false dopamine and tricks your brain into complacency.",
      "How to set strict 'Execution Gates' before allowing yourself to research or plan."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Comfort of Preparation" },
      { chapter: "Chapter 2", title: "Dopamine Traps in Modern Work" },
      { chapter: "Chapter 3", title: "Designing Execution Gates" },
      { chapter: "Chapter 4", title: "The 80/20 Action Audit" }
    ],
    faqs: [
      { q: "How is this different from generic time management books?", a: "Most time management books teach you how to do more tasks faster. This book teaches you how to stop doing 80% of useless tasks entirely." }
    ],
    sampleExcerpt: `Chapter 1: The Comfort of Preparation

Motion gives us the pleasant feeling that we are taking care of business. But action produces a result. 

If you read 10 diet books, you are in motion. If you eat a healthy meal, you are in action.`
  },
  {
    id: "defence-matrix",
    title: "Defence Matrix",
    subtitle: "First Edition | India's Next-Gen Air Power: AMCA, TEDBF & Future Fighters | S-500 & India | Gaganyaan & Bharatiya Antariksh Station",
    tagline: "An engineer's deep dive into modern warfare, indigenous defense tech, rocket-sled breakthroughs, and national orbital labs.",
    category: "Technology",
    secondaryCategories: ["Philosophy"],
    coverBg: "from-blue-950 to-slate-900",
    coverAccent: "#0284C7",
    coverText: "text-sky-100",
    coverStyle: "tech",
    coverImage: "/covers/defence_matrix.png",
    featured: true,
    bestseller: true,
    pages: 28,
    publishedYear: 2024,
    language: "English",
    prices: {
      pdf: 199
    },
    formats: ["PDF Digital"],
    oneLiner: "A rigorous engineering analysis of India's leap toward indigenous defense self-reliance, AMCA, TEDBF, Gaganyaan 2027, and Bharatiya Antariksh Station.",
    description: `From radar cross-section engineering in the AMCA stealth fighter program to jet engine metallurgy, missile shields, rocket-sled testing, and human spaceflight in Gaganyaan 2027, **Defence Matrix** examines how technology shapes geopolitics. 

Drawing from his engineering background, Pankaj Kumar delivers an objective, highly detailed overview of India's military industrial transformation and orbital laboratory goals.`,
    whoShouldRead: [
      "Defense analysts, policy makers, and military tech enthusiasts.",
      "Engineers interested in aerospace, radar systems, spaceflight, and defense electronics.",
      "Citizens wanting an authentic, non-sensationalized look at national security."
    ],
    whatYoullLearn: [
      "India's Next-Gen Air Power: AMCA, TEDBF & Future Fighters.",
      "S-500 & India: Strategic Missile Shield Architecture.",
      "DRDO's Rocket-Sled Breakthrough Explained.",
      "Gaganyaan 2027: India's Human Spaceflight Program.",
      "Bharatiya Antariksh Station: India's Permanent Orbital Lab."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Next-Gen Air Power: AMCA & TEDBF Aerospace Engineering" },
      { chapter: "Chapter 2", title: "Air Defense Shields: S-500 Integration & Indian Airspace Security" },
      { chapter: "Chapter 3", title: "DRDO Rocket-Sled Propulsion & Hypersonic Testing" },
      { chapter: "Chapter 4", title: "Gaganyaan 2027 & Bharatiya Antariksh Station Operations" }
    ],
    faqs: [
      { q: "Is this book overly technical for non-engineers?", a: "No. Complex technical concepts are explained using intuitive diagrams, clear analogies, and historical context." }
    ],
    sampleExcerpt: `Chapter 1: Next-Gen Air Power: AMCA & TEDBF Aerospace Engineering

Stealth is not invisibility. Stealth is radar delay—buying precious extra seconds so your aircraft detects the adversary before their radar locks onto you.`
  },
  {
    id: "motion-banam-action",
    title: "मोशन बनाम एक्शन",
    subtitle: "प्रगति के भ्रम से बाहर निकलें और असल में काम पूरा करें",
    tagline: "प्रगति के भ्रम से बाहर निकलें और असल में काम पूरा करें।",
    category: "Productivity",
    secondaryCategories: ["Habits", "Decision Making"],
    coverBg: "from-slate-900 to-black",
    coverAccent: "#F97316",
    coverText: "text-orange-100",
    coverStyle: "bold",
    coverImage: "/covers/motion_banam_action.png",
    featured: true,
    latestRelease: false,
    bestseller: false,
    pages: 110,
    publishedYear: 2026,
    language: "Hindi",
    prices: {
      pdf: 129
    },
    formats: ["PDF Digital"],
    oneLiner: "व्यस्त रहने और असरदार काम करने में बड़ा फर्क है। प्रगति के भ्रम से बाहर निकलें।",
    description: `कु छ साल पहले, मैंने उन 22 self-improvement षकताबों की एक ललस्ट देखी लजन्हें मैंने लसफग एक ही साल में पूरी तरह 'चट' कर ददया था। Habit building पर सुपरदहट षकताबें, इंसानी ददमाग की गहरी साइकोलॉजी और िो करोड़ों रुपये िाली 'million-dollar morning routines' मैंने सब कु छ छान मारा था।

**मोशन बनाम एक्शन** आपको इस पेचीदा जाल से बाहर निकालती है और सादे कागज़ पर 'One Honest Page' फ्रेमवर्क से रोजाना वास्तविक परिणाम हासिल करना सिखाती है।`,
    whoShouldRead: [
      "हर वह व्यक्ति जो दिन भर व्यस्त रहता है पर दिन के अंत में लक्ष्य हासिल नहीं हो पाता।",
      "विद्यार्थी और प्रोफेशनल जो ओवरथिंकिंग और टालमटोल (Procrastination) से परेशान हैं।"
    ],
    whatYoullLearn: [
      "Motion और Action के बीच का बुनियादी वैज्ञानिक अंतर।",
      "The One Honest Page Framework: रोजाना 1 Keystone Action पर फोकस करना।"
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "तरक्की का भ्रम (The Illusion of Progress)" },
      { chapter: "Chapter 2", title: "Complexity का जाल (The Complexity Trap)" }
    ],
    faqs: [
      { q: "क्या यह 'Motion vs Action' की हिंदी पुस्तक है?", a: "हाँ, यह आधिकारिक हिंदी संस्करण है।" }
    ],
    sampleExcerpt: `प्रस्तावना: Productivity का जाल (The Productivity Trap)

कु छ साल पहले, मैंने उन 22 self-improvement षकताबों की एक ललस्ट देखी लजन्हें मैंने लसफग एक ही साल में पूरी तरह 'चट' कर ददया था।`
  },
  {
    id: "attention-is-enough",
    title: "Attention is Enough",
    subtitle: "How to Rebuild Focus and Discipline in a World Designed to Distract You",
    tagline: "Unbroken focus is the currency of extraordinary achievement.",
    category: "Psychology",
    secondaryCategories: ["Productivity"],
    coverBg: "from-amber-700 to-amber-900",
    coverAccent: "#F59E0B",
    coverText: "text-amber-50",
    coverStyle: "editorial",
    coverImage: "/covers/attention_is_enough.png",
    featured: false,
    bestseller: false,
    pages: 105,
    publishedYear: 2024,
    language: "English",
    prices: { pdf: 129 },
    formats: ["PDF Digital"],
    oneLiner: "Where your attention goes, your energy flows. Master focus to master your life craft.",
    description: "In attention lies everything. Pankaj Kumar synthesizes ancient contemplative wisdom with modern cognitive science to help you build an impenetrable focus ritual.",
    whoShouldRead: ["Knowledge workers, students, researchers, and creators."],
    whatYoullLearn: ["Attention budgeting", "Deep work blocks", "Monk mode protocols"],
    tableOfContents: [{ chapter: "Chapter 1", title: "The Scarcity of Focus" }],
    faqs: [{ q: "Is this book in Hindi?", a: "Yes, 'ध्यान ही पर्याप्त है' is the official Hindi edition." }],
    sampleExcerpt: `Chapter 1: The Scarcity of Focus

Attention is the ultimate lens through which human reality is perceived.`
  },
  {
    id: "dhyan-hi-paryapt-hai",
    title: "ध्यान ही पर्याप्त है",
    subtitle: "एक ऐसी दुनिया में जहाँ ध्यान बिखराने के लिए सब कुछ बना है, बिना ज़ोर लगाए फोकस, अनुशासन और गहराई वापस पाने की कला",
    tagline: "फोकस, अनुशासन और गहराई वापस पाने की कला।",
    category: "Psychology",
    secondaryCategories: ["Self Improvement"],
    coverBg: "from-amber-600 to-amber-900",
    coverAccent: "#F59E0B",
    coverText: "text-amber-100",
    coverStyle: "warm",
    coverImage: "/covers/dhyan_hi_paryapt_hai.png",
    featured: false,
    bestseller: false,
    pages: 119,
    publishedYear: 2024,
    language: "Hindi",
    prices: { pdf: 129 },
    formats: ["PDF Digital"],
    oneLiner: "बिना ज़ोर लगाए फोकस, अनुशासन और गहराई वापस पाने की व्यावहारिक कला।",
    description: "एक ऐसी दुनिया में जहाँ ध्यान बिखराने के लिए सब कुछ बना है, यह पुस्तक आपको बिना ज़ोर लगाए फोकस और आन्तरिक अनुशासन वापस पाने का वैज्ञानिक मार्ग सिखाती है।",
    whoShouldRead: ["हर वह व्यक्ति जो डिजिटल बिखराव से दूर एकाग्रता चाहता है।"],
    whatYoullLearn: ["अविचलित एकाग्रता", "डिजिटल उपवास", "गहन अध्ययन"],
    tableOfContents: [{ chapter: "अध्याय 1", title: "ध्यान का महत्व" }],
    faqs: [{ q: "क्या यह Attention is Enough की हिंदी पुस्तक है?", a: "हाँ, यह आधिकारिक हिंदी संस्करण है।" }],
    sampleExcerpt: `अध्याय 1: ध्यान का महत्व

ध्यान कोई ज़ोर-जबरदस्ती या तनाव नहीं है, यह तो केवल अपनी उपस्थिति को गहराई से पहचानना है।`
  },
  {
    id: "habits-dont-work",
    title: "Habits Don't Work...",
    subtitle: "Why You Keep Failing Even When You Know What To Do",
    tagline: "Why willpower fails and how system design replaces discipline.",
    category: "Habits",
    secondaryCategories: ["Psychology", "Productivity"],
    coverBg: "from-pink-950 to-rose-950",
    coverAccent: "#E11D48",
    coverText: "text-rose-100",
    coverStyle: "provocative",
    coverImage: "/covers/habits_dont_work.png",
    featured: false,
    bestseller: false,
    pages: 61,
    publishedYear: 2024,
    language: "English",
    prices: {
      pdf: 129
    },
    formats: ["PDF Digital"],
    oneLiner: "Stop relying on motivation cycles. Design environments where desired actions become friction-free physics.",
    description: `You already know what you should be doing: eat clean, exercise, sleep early, read more, focus on work. Yet year after year, resolutions crumble.

The problem isn't your character—it is your system architecture. **Habits Don't Work** explains why reliance on habit streaks creates fragile psychological loops, and shows how environment engineering makes success inevitable.`,
    whoShouldRead: [
      "Anyone tired of starting new habit trackers and abandoning them 2 weeks later."
    ],
    whatYoullLearn: [
      "The Willpower Depletion Fallacy.",
      "Friction Engineering: Increasing resistance for bad habits."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Failure of Habit Loops" }
    ],
    faqs: [
      { q: "Is this contradicting James Clear's Atomic Habits?", a: "It builds upon habit research." }
    ],
    sampleExcerpt: `Chapter 1: The Willpower Depletion Fallacy

Do not elevate your willpower. Lower your friction.`
  },
  {
    id: "ai-without-the-hype",
    title: "AI Without the Hype",
    subtitle: "A Practical Guide for Small and Medium Businesses to Integrate AI Safely, Improve Productivity, and Stay in Control",
    tagline: "No fluff, no jargon. Just actionable steps to streamline business with modern AI.",
    category: "Technology",
    secondaryCategories: ["Decision Making"],
    coverBg: "from-cyan-950 to-slate-900",
    coverAccent: "#06B6D4",
    coverText: "text-cyan-100",
    coverStyle: "guide",
    coverImage: "/covers/ai_without_the_hype.png",
    featured: false,
    bestseller: false,
    pages: 112,
    publishedYear: 2025,
    language: "English",
    prices: {
      pdf: 149
    },
    formats: ["PDF Digital"],
    oneLiner: "A pragmatic blueprint for business owners to automate ops, boost margins, and harness AI without spending a fortune.",
    description: `Don't get lost in corporate tech buzzwords. **AI Without the Hype** breaks down LLMs, automated workflows, custom knowledge bases, and customer service bots into straightforward business upgrades.`,
    whoShouldRead: [
      "Small business owners, agency founders, and department managers."
    ],
    whatYoullLearn: [
      "The 5 High-ROI AI Use Cases for SMBs."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Separating Magic from Math" }
    ],
    faqs: [
      { q: "Do I need coding skills to implement this?", a: "No." }
    ],
    sampleExcerpt: `Chapter 1: Separating Magic from Math

Artificial Intelligence is neither a mystical sentient magic worker nor a useless buzzword.`
  },
  {
    id: "one-honest-page",
    title: "One Honest Page",
    subtitle: "The Simple Practice of Radical Self-Honesty",
    tagline: "Write your way out of anxiety, confusion, and indecision.",
    category: "Self Improvement",
    secondaryCategories: ["Psychology"],
    coverBg: "from-amber-100 to-orange-50",
    coverAccent: "#EA580C",
    coverText: "text-amber-950",
    coverStyle: "warm",
    coverImage: "/covers/one_honest_page.png",
    featured: false,
    bestseller: false,
    pages: 72,
    publishedYear: 2025,
    language: "English",
    prices: {
      pdf: 139
    },
    formats: ["PDF Digital"],
    oneLiner: "You are only one honest page of writing away from resolving your deepest mental knot.",
    description: `We hide from ourselves in the noise of daily life. We tell ourselves convenient stories to avoid discomfort. 

**One Honest Page** is a gentle yet uncompromising manual on expressive writing and radical self-honesty.`,
    whoShouldRead: [
      "Anyone suffering from emotional overwhelm, anxiety, or unexpressed grief."
    ],
    whatYoullLearn: [
      "The Uncensored Page Rule: How to bypass the internal editor."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Lies We Tell Ourselves" }
    ],
    faqs: [
      { q: "Is this book suitable for beginners?", a: "Yes." }
    ],
    sampleExcerpt: `Chapter 1: The Lies We Tell Ourselves

Truth has a distinct physical weight on paper.`
  },
  {
    id: "algorithm-effect",
    title: "The Algorithm Effect",
    subtitle: "How Social Media Is Rewiring The Way We Think, Feel, and Decide",
    tagline: "Reclaim your agency from feed optimization and dopamine-driven loops.",
    category: "Technology",
    secondaryCategories: ["Psychology"],
    coverBg: "from-purple-950 to-indigo-950",
    coverAccent: "#8B5CF6",
    coverText: "text-purple-100",
    coverStyle: "modern",
    coverImage: "/covers/algorithm_effect.png",
    featured: false,
    bestseller: false,
    pages: 196,
    publishedYear: 2024,
    language: "English",
    prices: {
      pdf: 119
    },
    formats: ["PDF Digital"],
    oneLiner: "Understand the math behind engagement optimization and protect your brain from algorithmic manipulation.",
    description: `You think you choose what you watch, read, and believe. In reality, hyper-optimized machine learning models predict your subconscious vulnerabilities and serve content designed to keep you scrolling.`,
    whoShouldRead: [
      "Anyone experiencing attention fragmentation, mental fatigue, or social media burnout."
    ],
    whatYoullLearn: [
      "Reinforcement Learning loops."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Optimization Goal: Human Eyeballs" }
    ],
    faqs: [
      { q: "Is this book against technology?", a: "Not at all." }
    ],
    sampleExcerpt: `Chapter 1: The Optimization Goal: Human Eyeballs

If you do not explicitly define your own attention priorities, a server farm in Silicon Valley will define them for you.`
  },
  {
    id: "dragon-and-the-elephant",
    title: "The Dragon and the Elephant",
    subtitle: "India's Geopolitical Strategy 2030",
    tagline: "Navigating economic rivalry, tech sovereignty, and regional balance in Asia.",
    category: "Philosophy",
    secondaryCategories: ["Technology"],
    coverBg: "from-emerald-950 to-stone-900",
    coverAccent: "#10B981",
    coverText: "text-emerald-100",
    coverStyle: "strategic",
    coverImage: "/covers/dragon_and_elephant.png",
    featured: false,
    bestseller: false,
    pages: 280,
    publishedYear: 2024,
    language: "English",
    prices: {
      pdf: 169
    },
    formats: ["PDF Digital"],
    oneLiner: "A strategic blueprint for how India can leverage technology, supply chains, and soft power in the Asian Century.",
    description: `The 21st century will be defined by the economic and technological dynamic between China (The Dragon) and India (The Elephant).`,
    whoShouldRead: [
      "International relations students, diplomats, and geopolitical observers."
    ],
    whatYoullLearn: [
      "The Semiconductor Race: Why chip manufacturing is the new oil."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "Two Giants: Historical Parallel Paths" }
    ],
    faqs: [
      { q: "When do I receive my PDF download?", a: "Instantly upon payment." }
    ],
    sampleExcerpt: `Chapter 1: Two Giants: Historical Parallel Paths

Geopolitics is fundamentally driven by physical geography and technological leverage.`
  },
  {
    id: "wired-mind-silent-pages",
    title: "Wired Mind, Silent Pages",
    subtitle: "Read Deeper, Live Clearer | How Reading Rewires the Distracted Brain",
    tagline: "In an era of hyper-stimulation, deep reading is the ultimate cognitive superpower.",
    category: "Psychology",
    secondaryCategories: ["Self Improvement", "Philosophy"],
    coverBg: "from-amber-900 to-stone-900",
    coverAccent: "#D97706",
    coverText: "text-amber-50",
    coverStyle: "editorial",
    coverImage: "/covers/wired_mind.png",
    featured: false,
    bestseller: false,
    pages: 131,
    publishedYear: 2024,
    language: "English",
    prices: {
      pdf: 139
    },
    formats: ["PDF Digital"],
    oneLiner: "Reclaim your attention span from short-form videos and rediscover the meditative power of long-form literature.",
    description: `Our minds are constantly wired—fragmented by notifications, algorithmic feeds, and endless scrolling. Silent pages offer an antidote.`,
    whoShouldRead: [
      "Anybody who finds themselves constantly checking their phone while trying to read a book."
    ],
    whatYoullLearn: [
      "The Neurological Shift."
    ],
    tableOfContents: [
      { chapter: "Chapter 1", title: "The Fragmented Attention Economy" }
    ],
    faqs: [
      { q: "Is there a Hindi version of this book?", a: "Yes! 'उलझा हुआ मन, सुकून के पन्ने'." }
    ],
    sampleExcerpt: `Chapter 1: The Fragmented Attention Economy

When you open a physical book, there are no notifications waiting in the margin.`
  },
  {
    id: "jeevan-mein-khade-hona-seekhiye",
    title: "जीवन में खड़े रहना सीखिए",
    subtitle: "अनुमति, स्वीकृति और डर के बिना अपना जीवन जीने की कला",
    tagline: "आत्मविश्वास, संयम और आन्तरिक शक्ति का एक सुदृढ़ मार्गदर्शक।",
    category: "Self Improvement",
    secondaryCategories: ["Philosophy"],
    coverBg: "from-stone-800 to-stone-950",
    coverAccent: "#A8A29E",
    coverText: "text-stone-100",
    coverStyle: "classic",
    coverImage: "/covers/jeevan_mein_khade_rahna.png",
    featured: false,
    bestseller: false,
    pages: 134,
    publishedYear: 2024,
    language: "Hindi",
    prices: { pdf: 129 },
    formats: ["PDF Digital"],
    oneLiner: "अनुमति, स्वीकृति और डर के बिना अपना जीवन जीने की कला।",
    description: "यह पुस्तक जीवन की चुनौतियों के सामने झुकने की बजाय धैर्य, स्वीकृति और अदम्य साहस के साथ खड़े रहने की प्रेरणा देती है।",
    whoShouldRead: ["हर वह व्यक्ति जो जीवन के कठिन मोड़ों पर संबल और दिशा की खोज में है।"],
    whatYoullLearn: ["स्वीकृति की शक्ति"],
    tableOfContents: [{ chapter: "अध्याय 1", title: "चुनौती को स्वीकारें" }],
    faqs: [{ q: "क्या यह किताब हिंदी में उपलब्ध है?", a: "हाँ, यह मूल रूप से हिंदी भाषा में ही रचित है।" }],
    sampleExcerpt: `अध्याय 1: चुनौती को स्वीकारें

जब परिस्थितियाँ आपके विपरीत हों, तब आपकी सबसे बड़ी विजय केवल खड़े रहना है।`
  },
  {
    id: "shabdon-ka-dukandar",
    title: "शब्दों का दुकानदार",
    subtitle: "एक पुरानी किताब, हाशिये पर लिखे कुछ शब्द, और कई ज़िंदगीयों का अनकहा सच।",
    tagline: "विचारों, शब्दों और जीवन की गहरी खोज की एक दार्शनिक कहानी।",
    category: "Philosophy",
    secondaryCategories: ["Self Improvement"],
    coverBg: "from-amber-950 to-yellow-950",
    coverAccent: "#D97706",
    coverText: "text-amber-100",
    coverStyle: "story",
    coverImage: "/covers/shabdon_ka_dukandar.png",
    featured: false,
    bestseller: false,
    pages: 175,
    publishedYear: 2024,
    language: "Hindi",
    prices: { pdf: 139 },
    formats: ["PDF Digital"],
    oneLiner: "शब्द केवल लिखे नहीं जाते, वे इंसान की आत्मा की छाप होते हैं।",
    description: "एक अनोखी दार्शनिक यात्रा जो पाठक को शब्दों के जादू और जीवन के गूढ़ अर्थों से रूबरू कराती है।",
    whoShouldRead: ["साहित्य और दर्शन प्रेमी।"],
    whatYoullLearn: ["शब्दों का जीवन पर प्रभाव"],
    tableOfContents: [{ chapter: "अध्याय 1", title: "हवेली का द्वार" }],
    faqs: [{ q: "क्या यह उपन्यास है?", a: "यह दार्शनिक आख्यान और चिंतन का अनूठा सम्मिश्रण है।" }],
    sampleExcerpt: `अध्याय 1: हवेली का द्वार

शब्द दुकान पर बिकने वाले बेजान सामान नहीं हैं, वे मनुष्य के विचारों का प्रतिबिम्ब हैं।`
  },
  {
    id: "uljha-hua-man",
    title: "उलझा हुआ मन, सुकून के पन्ने",
    subtitle: "Hindi Edition of Wired Mind, Silent Pages",
    tagline: "डिजिटल युग में मानसिक शांति और पन्नों के साथ सुकून पाने का मार्ग।",
    category: "Psychology",
    secondaryCategories: ["Philosophy"],
    coverBg: "from-amber-950 to-stone-900",
    coverAccent: "#D97706",
    coverText: "text-amber-100",
    coverStyle: "warm",
    coverImage: "/covers/uljha_hua_man.jpg",
    featured: false,
    bestseller: false,
    pages: 171,
    publishedYear: 2024,
    language: "Hindi",
    prices: { pdf: 129 },
    formats: ["PDF Digital"],
    oneLiner: "डिजिटल कोलाहल से दूर पन्नों की शांत दुनिया में लौटने का निमंत्रण।",
    description: "स्मार्टफोन और स्क्रीन की दुनिया से मानसिक सुकून और अध्ययन की ओर लौटने का मार्ग।",
    whoShouldRead: ["हिंदी में पुस्तकें पढ़ने के शौकीन।"],
    whatYoullLearn: ["एकाग्रता", "पठन कला"],
    tableOfContents: [{ chapter: "अध्याय 1", title: "कोलाहल से शांति की ओर" }],
    faqs: [{ q: "क्या यह Wired Mind, Silent Pages की हिंदी रूप है?", a: "हाँ, यह आधिकारिक हिंदी संस्करण है।" }],
    sampleExcerpt: `अध्याय 1: कोलाहल से शांति की ओर

किताब का हर पन्ना एक शांत कमरे की तरह है जहाँ आप बिना किसी विघ्न के स्वयं से मिल सकते हैं।`
  },
  {
    id: "road-to-entrepreneurship",
    title: "The Road to Entrepreneurship Starts With Why",
    subtitle: "Decisive Steps to Build a Purpose-Driven Business",
    tagline: "Build a lasting venture rooted in core principles rather than fleeting hype.",
    category: "Decision Making",
    secondaryCategories: ["Productivity"],
    coverBg: "from-blue-900 to-slate-950",
    coverAccent: "#2563EB",
    coverText: "text-blue-50",
    coverStyle: "business",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    featured: false,
    bestseller: false,
    pages: 235,
    publishedYear: 2023,
    language: "English",
    prices: { pdf: 149 },
    formats: ["PDF Digital"],
    oneLiner: "Discover the foundational purpose that keeps your business resilient through economic storms.",
    description: "Starting a business is easy; sustaining it requires clarity of purpose. Pankaj Kumar shares a strategic framework for modern founders.",
    whoShouldRead: ["Aspiring entrepreneurs and early-stage founders."],
    whatYoullLearn: ["Finding your core business Why"],
    tableOfContents: [{ chapter: "Chapter 1", title: "The Why Filter" }],
    faqs: [{ q: "Can I download PDF?", a: "Yes, instant PDF download upon purchase." }],
    sampleExcerpt: `Chapter 1: The Why Filter

A business without a clear 'Why' is merely a temporary transaction mechanism.`
  }
];

export const TESTIMONIALS = [
  {
    quote: "Pankaj Kumar's 'Think on Paper' fundamentally transformed how I manage technical decisions at work. It feels like getting an upgrade to your brain's operating system.",
    author: "Rajesh Varma",
    role: "Principal Systems Architect",
    company: "Tech Mahindra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Most non-fiction books have one good idea stretched over 250 pages. Pankaj's writing is the opposite: dense with actionable engineering rigor, zero fluff.",
    author: "Ananya Sharma",
    role: "Director of Product",
    company: "SaaS Pioneer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Motion vs Action opened my eyes. I was spending 6 hours a day 'planning' without producing anything real. Pankaj's framework cured my procrastination.",
    author: "Dr. Vikram Seth",
    role: "Cognitive Psychology Researcher",
    company: "AIIMS Delhi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];
