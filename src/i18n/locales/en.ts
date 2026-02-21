export const en = {
  // Navbar
  nav: {
    home: "Home",
    projects: "Projects",
    stack: "Stack",
    architectures: "Architectures",
    contact: "Contact",
    toggleLight: "Switch to light mode",
    toggleDark: "Switch to dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu"
  },

  // Footer
  footer: {
    tagline: "Backend, integrations and data",
    copyright: "Built with a focus on quality."
  },

  // Home Page
  home: {
    profile: {
      name: "Pedro Ventura",
      location: "Brazil · Remote",
      badgeTechLead: "Tech Lead",
      badgePM: "Project Manager",
      badgeFullStack: "Full Stack Dev"
    },
    stats: {
      years: "Years of experience",
      projects: "Projects delivered",
      devs: "Devs led"
    },
    about: {
      title: "About me",
      headline: "I build software focused on outcome, not just code.",
      p1: "I'm a full stack developer with experience building robust solutions that connect product, team and business. I've evolved from developer to tech lead and project manager — which gives me a full view of the development cycle.",
      p2: "I work with integration architecture, data pipelines, automation and interfaces that actually run in production. I've led projects for healthcare groups, startups and B2B operations with scale and reliability requirements.",
      p3: "My edge is combining technical depth with clear communication — I deliver quality code and also ensure the project reaches the right outcome."
    },
    hero: {
      title: "Backend, integrations and data for products that need to be",
      highlight: "reliable",
      role: "Software Engineer — architecture, pipelines, and measurable impact.",
      description: "I design and build APIs, pipelines and automations with focus on consistency, traceability and scale. From VTEX/CRM integrations to analytical layers in Postgres/Supabase.",
      viewProjects: "View projects",
      viewStack: "View stack"
    },
    metrics: {
      title: "Impact in numbers",
      projects: "projects in production",
      systems: "systems integrated",
      focus: "focus on reliability"
    },
    capabilities: {
      integrations: {
        title: "Integrations and APIs",
        items: [
          "REST APIs and webhooks",
          "Contracts, validation, versioning",
          "Idempotency, retries and auditing"
        ]
      },
      data: {
        title: "Data and Analytics Engineering",
        items: [
          "Relational modeling (Postgres/Supabase)",
          "Raw, curated and analytics layers",
          "Advanced SQL and views for dashboards"
        ]
      },
      automation: {
        title: "Automation and agents",
        items: [
          "Flow orchestration (workflows)",
          "Operational events and lead state",
          "Voice/telephony and CRM integrations"
        ]
      }
    },
    projects: {
      title: "Featured projects",
      subtitle: "Case studies of integrations, pipelines and automations with real impact.",
      viewAll: "View all projects",
    viewCaseStudy: "View case study"
    },
    howIWork: {
      title: "How I work",
      subtitle: "Structured process to deliver reliable and maintainable solutions.",
      steps: [
        { step: "01", title: "Discovery", desc: "Technical and business requirements" },
        { step: "02", title: "Architecture", desc: "Integration contracts and modeling" },
        { step: "03", title: "Implementation", desc: "Testing and failure scenarios" },
        { step: "04", title: "Observability", desc: "Data governance and metrics" },
        { step: "05", title: "Delivery", desc: "Metrics and continuous evolution" }
      ]
    },
    cta: {
      title: "Want to see this applied to your context?",
      description: "Let's talk about how I can help with your integrations, pipelines or automations.",
      talkToMe: "Get in touch",
      viewProjects: "View projects"
    }
  },

  // Projects Page
  projects: {
    title: "Projects",
    subtitle: "Case studies of full stack, integrations, data and software engineering.",
    chooseFocus: "Choose a focus",
    searchPlaceholder: "Search by title, organization, tag or summary...",
    clearFilters: "Clear filters",
    noResults: "No projects found with the selected filters.",
    focusFilters: {
      backend: "Backend & Integrations",
      data: "Data & Analytics",
      automation: "Automation"
    }
  },

  // Project Detail
  projectDetail: {
    impactTitle: "Impact and results",
    context: "Context",
    whatIBuilt: "What I built",
    architecture: "Architecture",
    stack: "Stack",
    responsibilities: "Responsibilities",
    challenges: "Challenges and solutions",
    challenge: "Challenge",
    solution: "Solution",
    decisions: "Technical decisions",
    decision: "Decision",
    reason: "Reason",
    reliability: "Reliability",
    observability: "Observability",
    practices: "Engineering practices",
    backToProjects: "Back to projects"
  },

  // Stack Page
  stack: {
    title: "Stack and skills",
    subtitle: "Technologies and practices I use to build reliable solutions, focused on backend, integrations and data engineering.",
    practices: {
      title: "Practices I apply",
      subtitle: "Engineering principles that ensure reliability, traceability and maintainability in data and integration systems."
    },
    categories: {
      backend: {
        title: "Backend and Integrations",
        description: "Robust APIs and reliable integrations focused on consistency and traceability."
      },
      data: {
        title: "Data and Analytics Engineering",
        description: "Relational modeling and analytical layers for data-driven decisions."
      },
      automation: {
        title: "Automation and Orchestration",
        description: "Automated flows for efficient and scalable operations."
      },
      frontend: {
        title: "Frontend (Support)",
        description: "Interfaces for data consumption and operations, focused on usability."
      },
      infra: {
        title: "Infrastructure and Delivery",
        description: "Deploy and operations focused on reliability and observability."
      },
      engineering: {
        title: "Engineering Practices",
        description: "Principles that ensure quality, security and maintainability."
      }
    },
    engineeringPractices: {
      idempotency: {
        title: "Idempotency and deduplication",
        bullets: [
          "Composite keys for critical operations",
          "Controlled upsert instead of direct insert",
          "Control tables for webhooks and events"
        ]
      },
      layers: {
        title: "Raw/curated/analytics layers",
        bullets: [
          "Raw data preserved for reprocessing",
          "Transformations in separate pipeline",
          "Optimized views for consumption"
        ]
      },
      audit: {
        title: "Auditing and traceability",
        bullets: [
          "Event trail with timestamps",
          "Before/after state for debugging",
          "Correlation ID throughout the chain"
        ]
      },
      observability: {
        title: "Observability (logs and metrics)",
        bullets: [
          "Structured logs by stage",
          "Errors categorized by root cause",
          "Monitoring of pending and orphan records"
        ]
      },
      security: {
        title: "Security and governance",
        bullets: [
          "RLS for organization segregation",
          "JWT and origin validation",
          "Well-defined API contracts"
        ]
      }
    }
  },

  // Architectures Page
  architectures: {
    title: "Architectures",
    subtitle: "Technical solution blueprints for integrations, pipelines and data flows.",
    close: "Close",
    items: {
      eventos: {
        title: "Event pipeline and deduplication",
        description: "Flow for event ingestion with deduplication, ensuring consistency even with repeated webhooks."
      },
      webhooks: {
        title: "Webhook integration with auditing",
        description: "Architecture to receive external webhooks with validation, logging and complete audit trail."
      },
      camadas: {
        title: "Raw, curated and analytics layers",
        description: "Data separation in layers to ensure quality and facilitate analytical consumption."
      },
      funil: {
        title: "Funnel orchestration with CRM",
        description: "Commercial automation flow integrating lead state, CRM and operational metrics."
      }
    }
  },

  // Contact Page
  contact: {
    title: "Contact",
    subtitle: "Want to discuss a project or opportunity? Choose your preferred channel.",
    linkedin: {
      label: "LinkedIn",
      description: "Connect with me"
    },
    email: {
      label: "Email",
      description: "passisventura@gmail.com"
    },
    whatsapp: {
      label: "WhatsApp",
      description: "Direct message"
    },
    form: {
      title: "Send message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      message: "Message",
      messagePlaceholder: "How can I help?",
      submit: "Send message"
    }
  },

  // Not Found
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist.",
    backHome: "Back to home"
  }
};
