export interface ExperienceRole {
  id: string;
  company: string;
  companyLabel?: string;
  role: string;
  type: "full-time" | "contract" | "freelance" | "clt";
  period: string;
  duration: string;
  location: string;
  journeyNote?: string; // linha de contexto da jornada
  description: string;
  bullets: string[];
  tech: string[];
  badge?: string;
  current?: boolean;
}

export const experiences: ExperienceRole[] = [
  {
    id: "pinn",
    company: "Pinn Product Builder",
    companyLabel: "Produto próprio · Tempo integral",
    role: "Full Stack Developer · Project Manager · Tech Lead",
    type: "full-time",
    period: "2025 — Presente",
    duration: "Atual",
    location: "Belo Horizonte, MG · Remoto",
    current: true,
    journeyNote: "Estágio atual — onde tudo converge",
    description:
      "Toda a trajetória anterior — integração de sistemas, automação, dados e liderança de entregas — convergiu para a fundação da Pinn: uma builder de software voltada a criar produtos reais com alta qualidade técnica. Aqui atuo como Tech Lead e desenvolvedor principal, com responsabilidade total sobre arquitetura, entrega e alinhamento de produto.",
    bullets: [
      "Arquitetura e desenvolvimento full stack de sistemas SaaS: portal de suporte multi-tenant, plataforma de OKRs e hub de analytics conectado a fontes externas.",
      "Implementação de automações avançadas com n8n, integradas a CRMs, APIs externas, WhatsApp (Evolution API) e fluxos de atendimento com triagem por IA.",
      "Pipelines de dados com separação raw/curated/analytics, views para dashboards e observabilidade ponta a ponta.",
      "Agentes de IA para triagem, qualificação de leads e atendimento — com processos definidos, SLA e rastreabilidade.",
      "Liderança técnica de squads: definição de arquitetura, code review, gestão de backlog, CI/CD com GitHub Actions e deploy em VPS com Docker.",
      "Gestão de produto e alinhamento com clientes: levantamento de requisitos, roadmap técnico e entrega com documentação completa.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "n8n", "Python", "Docker", "GitHub Actions", "Edge Functions"],
    badge: "Tech Lead",
  },
  {
    id: "ventura-solutions",
    company: "Ventura Solutions",
    companyLabel: "Empresa própria · Autônomo",
    role: "Software Developer & Automation Architect",
    type: "freelance",
    period: "Fev 2024 — Presente",
    duration: "2 anos 1 mês",
    location: "Juiz de Fora, MG · Remoto",
    current: true,
    journeyNote: "A transição — de integrador a arquiteto de sistemas",
    description:
      "Após desenvolver visão técnica de campo e sistemas físicos, abri minha própria operação para aplicar o que aprendia sobre integração de sistemas no mundo do software. Comecei a construir integrações reais para clientes B2B — APIs, automações, pipelines de dados — evoluindo rapidamente para projetos de maior complexidade com governança, multi-tenancy e camadas analíticas.",
    bullets: [
      "Desenvolvimento de integrações via APIs REST e webhooks com contratos, validação de payload e idempotência — para grupos de saúde, startups e operações B2B.",
      "Automação de funis comerciais com orquestração de fluxos, estado do lead centralizado e integração com CRM (Kommo/Pipedrive).",
      "Camadas analíticas em Postgres/Supabase com separação raw/curated/analytics e views para dashboards operacionais.",
      "Pipelines de prospecção B2B com scraping, enriquecimento de dados e segmentação por ICP.",
      "Entrega ponta a ponta: levantamento de requisitos, arquitetura, implementação, observabilidade e documentação.",
    ],
    tech: ["TypeScript", "Python", "PostgreSQL", "Supabase", "n8n", "VTEX", "Webhooks", "React", "Node.js"],
    badge: "Full Stack",
  },
  {
    id: "viu-tecnologia",
    company: "Viu! Tecnologia",
    companyLabel: "Tempo integral",
    role: "Integrador de Sistemas",
    type: "clt",
    period: "Abr 2024 — Set 2024",
    duration: "6 meses",
    location: "Juiz de Fora, MG · Presencial",
    journeyNote: "O click — integração de sistemas na prática",
    description:
      "Primeira experiência direta com integração de sistemas em ambiente corporativo. Configurar dispositivos, redes e protocolos de comunicação me deu a compreensão prática de como sistemas físicos e digitais se conectam — uma base que influenciaria diretamente minha forma de pensar arquitetura de software e integrações via API mais tarde.",
    bullets: [
      "Instalação e integração de sistemas de automação residencial e comercial (som, IoT, controle de acesso).",
      "Configuração de redes, protocolos de comunicação e equipamentos de infraestrutura.",
      "Suporte técnico ao cliente final e documentação técnica de instalações e processos.",
    ],
    tech: ["Automação Residencial", "IoT", "Redes", "IPv6", "Suporte Técnico"],
    badge: "Developer",
  },
  {
    id: "deode",
    company: "Deode Inovação e Eficiência em Energia",
    companyLabel: "Tempo integral",
    role: "Técnico Operacional",
    type: "clt",
    period: "Nov 2021 — Abr 2023",
    duration: "1 ano 6 meses",
    location: "Juiz de Fora, MG · Presencial",
    journeyNote: "O início — disciplina técnica e visão de campo",
    description:
      "Início da trajetória técnica em campo, em projetos de eficiência energética com clientes industriais e comerciais. Foi aqui que desenvolvi disciplina técnica, atenção a padrões e a capacidade de documentar e explicar processos — competências que carrego até hoje na engenharia de software.",
    bullets: [
      "Atuação em projetos de eficiência energética em indústrias e comércios, com foco em qualidade de execução.",
      "Instalação, manutenção e diagnóstico de equipamentos elétricos em ambiente de campo.",
      "Elaboração de relatórios técnicos e documentação de visitas e processos.",
    ],
    tech: ["Eficiência Energética", "Elétrica", "Manutenção", "Campo"],
    badge: "Developer",
  },
];
