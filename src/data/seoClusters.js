// SEO Topic Clusters Mapping for Pankaj Kumar Author Platform
// Each book is a Pillar Page supported by cluster articles, category hubs, and resources

export const TOPIC_CLUSTERS = {
  "think-on-paper": {
    pillarBookId: "think-on-paper",
    clusterName: "Cognitive Engineering & Handwriting",
    categorySlug: "productivity",
    clusterArticles: [
      {
        id: "why-typing-fails-deep-thinking",
        title: "Why Typing Fails Deep Thinking: The Neurobiology of Handwriting",
        summary: "How handwriting engages unique motor cortex pathways that keyboard typing completely bypasses.",
        internalAnchor: "Read Chapter 1 of Think on Paper"
      },
      {
        id: "external-ram-protocol",
        title: "Building an External Cognitive RAM: Paper Systems for Developers",
        summary: "Deconstructing working memory constraints using index cards and paper notebooks.",
        internalAnchor: "Explore the Think on Paper Architecture"
      }
    ],
    clusterResources: [
      {
        id: "think-on-paper-worksheet",
        title: "1-Page Problem Deconstruction Matrix",
        format: "Printable PDF A4"
      }
    ]
  },

  "motion-vs-action": {
    pillarBookId: "motion-vs-action",
    clusterName: "High-Output Living & Procrastination",
    categorySlug: "productivity",
    clusterArticles: [
      {
        id: "the-illusion-of-motion",
        title: "The Illusion of Motion: Why Preparing Feels Better Than Finishing",
        summary: "How false busywork releases cheap dopamine and delays real execution.",
        internalAnchor: "Learn the Motion vs Action Audit"
      }
    ],
    clusterResources: [
      {
        id: "motion-action-audit",
        title: "30-Day Motion vs Action Tracker",
        format: "Notion & PDF"
      }
    ]
  },

  "defence-matrix": {
    pillarBookId: "defence-matrix",
    clusterName: "Defense Tech & Aerospace Sovereignty",
    categorySlug: "technology",
    clusterArticles: [
      {
        id: "semiconductor-sovereignty-india",
        title: "Understanding India's Semiconductor Sovereignty Quest",
        summary: "An engineer's analysis of Fab construction, substrate supply chains, and stealth fighter radar.",
        internalAnchor: "Read Defence Matrix Analysis"
      }
    ],
    clusterResources: []
  },

  "ai-without-the-hype": {
    pillarBookId: "ai-without-the-hype",
    clusterName: "Pragmatic AI & Enterprise Automation",
    categorySlug: "technology",
    clusterArticles: [
      {
        id: "ai-smb-integration-guide",
        title: "How Small Businesses Can Automate Ops with Modern AI Models",
        summary: "Practical guide to LLM context windows, custom knowledge bases, and API workflows.",
        internalAnchor: "Get AI Without the Hype Guide"
      }
    ],
    clusterResources: [
      {
        id: "ai-smb-readiness-checklist",
        title: "AI Integration Checklist for Small Businesses",
        format: "PDF Checklist"
      }
    ]
  }
};
