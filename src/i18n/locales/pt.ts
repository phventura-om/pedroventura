export const pt = {
  // Navbar
  nav: {
    home: "Home",
    projects: "Projetos",
    stack: "Stack",
    architectures: "Arquiteturas",
    contact: "Contato",
    toggleLight: "Ativar modo claro",
    toggleDark: "Ativar modo escuro",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu"
  },

  // Footer
  footer: {
    tagline: "Backend, integrações e dados",
    copyright: "Construído com foco em qualidade."
  },

  // Home Page
  home: {
    profile: {
      name: "Pedro Ventura",
      location: "Brasil · Remoto",
      badgeTechLead: "Tech Lead",
      badgePM: "Project Manager",
      badgeFullStack: "Full Stack Dev"
    },
    stats: {
      years: "Anos de experiência",
      projects: "Projetos entregues",
      devs: "Devs liderados"
    },
    about: {
      title: "Sobre mim",
      headline: "Construo software com foco em resultado, não apenas em código.",
      p1: "Sou desenvolvedor full stack com experiência em construir soluções robustas que conectam produto, time e negócio. Ao longo da carreira, evoluí de desenvolvedor para tech lead e project manager — o que me dá uma visão completa do ciclo de desenvolvimento.",
      p2: "Trabalho com arquitetura de integrações, pipelines de dados, automação e interfaces que realmente funcionam em produção. Já liderei projetos para grupos de saúde, startups e operações B2B com exigências de escala e confiabilidade.",
      p3: "Meu diferencial é unir profundidade técnica com clareza de comunicação — entrego código de qualidade e também garanto que o projeto chegue ao resultado certo."
    },
    hero: {
      title: "Backend, integrações e dados para produtos que precisam ser",
      highlight: "confiáveis",
      role: "Software Engineer — arquitetura, pipelines e impacto mensurável.",
      description: "Desenho e implemento APIs, pipelines e automações com foco em consistência, rastreabilidade e escala. De integrações VTEX/CRM a camadas analíticas em Postgres/Supabase.",
      viewProjects: "Ver projetos",
      viewStack: "Ver stack"
    },
    metrics: {
      title: "Impacto em números",
      projects: "projetos em produção",
      systems: "sistemas integrados",
      focus: "foco em confiabilidade"
    },
    capabilities: {
      integrations: {
        title: "Integrações e APIs",
        items: [
          "APIs REST e webhooks",
          "Contratos, validação, versionamento",
          "Idempotência, retries e auditoria"
        ]
      },
      data: {
        title: "Dados e Analytics Engineering",
        items: [
          "Modelagem relacional (Postgres/Supabase)",
          "Camadas raw, curated e analytics",
          "SQL avançado e views para dashboards"
        ]
      },
      automation: {
        title: "Automação e agentes",
        items: [
          "Orquestração de fluxos (workflows)",
          "Eventos operacionais e estado do lead",
          "Integrações com telefonia/voz e CRM"
        ]
      }
    },
    projects: {
      title: "Projetos em destaque",
      subtitle: "Case studies de integrações, pipelines e automações com impacto real.",
      viewAll: "Ver todos os projetos",
    viewCaseStudy: "Ver case study"
    },
    howIWork: {
      title: "Como eu trabalho",
      subtitle: "Processo estruturado para entregar soluções confiáveis e manuteníveis.",
      steps: [
        { step: "01", title: "Descoberta", desc: "Requisitos técnicos e de negócio" },
        { step: "02", title: "Arquitetura", desc: "Contratos de integração e modelagem" },
        { step: "03", title: "Implementação", desc: "Testes e cenários de falha" },
        { step: "04", title: "Observabilidade", desc: "Governança de dados e métricas" },
        { step: "05", title: "Entrega", desc: "Métricas e evolução contínua" }
      ]
    },
    cta: {
      title: "Quer ver isso aplicado no seu contexto?",
      description: "Vamos conversar sobre como posso ajudar com suas integrações, pipelines ou automações.",
      talkToMe: "Entrar em contato",
      viewProjects: "Ver projetos"
    }
  },

  // Projects Page
  projects: {
    title: "Projetos",
    subtitle: "Case studies de full stack, integrações, dados e engenharia de software.",
    chooseFocus: "Escolha um foco",
    searchPlaceholder: "Buscar por título, organização, tag ou resumo...",
    clearFilters: "Limpar filtros",
    noResults: "Nenhum projeto encontrado com os filtros selecionados.",
    focusFilters: {
      backend: "Backend e Integrações",
      data: "Dados e Analytics",
      automation: "Automação"
    }
  },

  // Project Detail
  projectDetail: {
    impactTitle: "Impacto e resultados",
    context: "Contexto",
    whatIBuilt: "O que eu construí",
    architecture: "Arquitetura",
    stack: "Stack",
    responsibilities: "Responsabilidades",
    challenges: "Desafios e soluções",
    challenge: "Desafio",
    solution: "Solução",
    decisions: "Decisões técnicas",
    decision: "Decisão",
    reason: "Razão",
    reliability: "Confiabilidade",
    observability: "Observabilidade",
    practices: "Práticas de engenharia",
    backToProjects: "Voltar para projetos"
  },

  // Stack Page
  stack: {
    title: "Stack e competências",
    subtitle: "Tecnologias e práticas que uso para construir soluções confiáveis, com foco em backend, integrações e engenharia de dados.",
    practices: {
      title: "Práticas que eu aplico",
      subtitle: "Princípios de engenharia que garantem confiabilidade, rastreabilidade e manutenibilidade em sistemas de dados e integrações."
    },
    categories: {
      backend: {
        title: "Backend e Integrações",
        description: "APIs robustas e integrações confiáveis com foco em consistência e rastreabilidade."
      },
      data: {
        title: "Dados e Analytics Engineering",
        description: "Modelagem relacional e camadas analíticas para decisões baseadas em dados reais."
      },
      automation: {
        title: "Automação e Orquestração",
        description: "Fluxos automatizados para operação eficiente e escalável."
      },
      frontend: {
        title: "Frontend (Suporte)",
        description: "Interfaces para consumo de dados e operação, com foco em usabilidade."
      },
      infra: {
        title: "Infra e Entrega",
        description: "Deploy e operação com foco em confiabilidade e observabilidade."
      },
      engineering: {
        title: "Práticas de Engenharia",
        description: "Princípios que garantem qualidade, segurança e manutenibilidade."
      }
    },
    engineeringPractices: {
      idempotency: {
        title: "Idempotência e anti-duplicidade",
        bullets: [
          "Chaves compostas para operações críticas",
          "Upsert controlado em vez de insert direto",
          "Tabelas de controle para webhooks e eventos"
        ]
      },
      layers: {
        title: "Camadas raw/curated/analytics",
        bullets: [
          "Dados brutos preservados para reprocesso",
          "Transformações em pipeline separado",
          "Views otimizadas para consumo"
        ]
      },
      audit: {
        title: "Auditoria e rastreabilidade",
        bullets: [
          "Trilha de eventos com timestamps",
          "Estado antes/depois para debugging",
          "Correlation ID em toda a cadeia"
        ]
      },
      observability: {
        title: "Observabilidade (logs e métricas)",
        bullets: [
          "Logs estruturados por etapa",
          "Erros categorizados por causa raiz",
          "Monitoramento de pendências e órfãos"
        ]
      },
      security: {
        title: "Segurança e governança",
        bullets: [
          "RLS para segregação por organização",
          "JWT e validação de origem",
          "Contratos de API bem definidos"
        ]
      }
    }
  },

  // Architectures Page
  architectures: {
    title: "Arquiteturas",
    subtitle: "Blueprints de soluções técnicas para integrações, pipelines e fluxos de dados.",
    close: "Fechar",
    items: {
      eventos: {
        title: "Pipeline de eventos e deduplicação",
        description: "Fluxo para ingestão de eventos com anti-duplicidade, garantindo consistência mesmo com webhooks repetidos."
      },
      webhooks: {
        title: "Integração via webhooks com auditoria",
        description: "Arquitetura para receber webhooks externos com validação, logging e trilha de auditoria completa."
      },
      camadas: {
        title: "Camadas raw, curated e analytics",
        description: "Separação de dados em camadas para garantir qualidade e facilitar consumo analítico."
      },
      funil: {
        title: "Orquestração de funil com CRM",
        description: "Fluxo de automação comercial integrando estado do lead, CRM e métricas operacionais."
      }
    }
  },

  // Contact Page
  contact: {
    title: "Contato",
    subtitle: "Quer conversar sobre um projeto ou oportunidade? Escolha o canal que preferir.",
    linkedin: {
      label: "LinkedIn",
      description: "Conecte-se comigo"
    },
    email: {
      label: "Email",
      description: "passisventura@gmail.com"
    },
    whatsapp: {
      label: "WhatsApp",
      description: "Mensagem direta"
    },
    form: {
      title: "Enviar mensagem",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu@email.com",
      message: "Mensagem",
      messagePlaceholder: "Como posso ajudar?",
      submit: "Enviar mensagem"
    }
  },

  // Not Found
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe.",
    backHome: "Voltar para home"
  }
};
