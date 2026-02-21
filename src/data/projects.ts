/** Métrica de impacto para storytelling nível pleno/sênior (problem → solution → outcome) */
export interface ImpactMetric {
  value: string;   // e.g. "0%", "100%", "5x"
  label: string;   // e.g. "redução de duplicidade", "eventos/dia"
  highlight?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  organization: string;
  headline: string;
  /** Métricas de impacto (outcomes mensuráveis) — crítico para portfólio nível big tech */
  impact?: ImpactMetric[];
  context: string;
  whatIBuilt: string[];
  architectureNodes: string[];
  architectureDescription?: string;
  features?: string[];
  integrations?: string[];
  stack: {
    category: string;
    items: string[];
  }[];
  responsibilities: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  decisions?: {
    decision: string;
    reason: string;
  }[];
  reliability?: string[];
  observability?: string[];
  engineeringPractices?: string[];
  tags: string[];
  featured: boolean;
  /** Badge no card (ex.: Tech Lead, Full Stack) */
  roleBadge?: "Tech Lead" | "Full Stack";
  /** Linha de destaque abaixo da descrição (ex.: Pipeline de ponta a ponta multi-tenant) */
  highlightLine?: string;
}

export const projects: Project[] = [
  {
    slug: "fleury-hermespardini-integracoes-vtex",
    title: "Integrações e dados para operação digital (VTEX e ecossistema)",
    organization: "Grande Grupo de Saúde",
    headline: "Camada de integração orientada a eventos, com governança, rastreabilidade e base analítica para operação.",
    context: "O projeto foi estruturado para integrar fluxos operacionais entre a plataforma VTEX e serviços internos, com foco em consistência, rastreabilidade e governança. A prioridade foi garantir que eventos e mudanças de estado fossem tratados de forma previsível, mesmo sob falhas intermitentes, reprocessos e variações de payload, mantendo uma base confiável para acompanhamento e suporte operacional.",
    whatIBuilt: [
      "Camada de integração via APIs e webhooks com validação, normalização e contratos de payload.",
      "Estratégia de idempotência e anti-duplicidade para eventos repetidos e reentregas.",
      "Persistência de eventos e trilha de auditoria para rastrear origem, sequência e reprocessos.",
      "Rotinas de reprocessamento e reconciliação para reduzir divergências entre origem e destino.",
      "Camada analítica (views) para métricas operacionais e consumo por dashboards.",
      "Padrões de observabilidade (logs estruturados, correlação e categorização de falhas)."
    ],
    architectureNodes: [
      "VTEX (APIs e webhooks)",
      "Camada de integração (contratos, validação, idempotência, retries)",
      "Persistência (Postgres)",
      "Reprocesso e reconciliação (jobs/rotinas)",
      "Observabilidade (logs e métricas)",
      "Views analíticas",
      "Dashboard/consumo"
    ],
    architectureDescription: "O fluxo trata eventos externos como dados operacionais, com dedupe, auditoria e capacidade de reprocesso. A base separa captura e normalização do consumo analítico, permitindo evoluir métricas e painéis sem afetar a ingestão.",
    features: [
      "Processar eventos e atualizações de estado com validação e padronização de payload.",
      "Evitar duplicidade por reentrega de webhooks (idempotência e dedupe).",
      "Registrar trilha de auditoria e habilitar reprocesso controlado.",
      "Executar reconciliação para detectar e corrigir divergências.",
      "Disponibilizar métricas operacionais via views para dashboards e acompanhamento."
    ],
    integrations: [
      "VTEX (APIs e webhooks)",
      "Postgres/Supabase (persistência e camada analítica)",
      "Jobs/rotinas server-side para reprocesso e reconciliação",
      "Dashboard (consumo de views e endpoints)"
    ],
    stack: [
      { category: "Backend e Integrações", items: ["APIs REST", "Webhooks", "Jobs/workers (rotinas)"] },
      { category: "Dados", items: ["Postgres/Supabase", "SQL (views analíticas)", "Auditoria e trilha de eventos"] },
      { category: "Observabilidade", items: ["Logs estruturados", "Correlação de eventos (correlation_id)"] }
    ],
    responsibilities: [
      "Definição da arquitetura de integração e contratos de payload.",
      "Modelagem de eventos, auditoria e estratégia de reprocesso.",
      "Idempotência, dedupe e tratamento de falhas (retries e consistência).",
      "Construção da camada analítica (views) e apoio ao consumo por dashboards.",
      "Padronização de logging e rastreabilidade ponta a ponta."
    ],
    challenges: [
      {
        challenge: "Falhas intermitentes e reentregas gerando duplicidade e inconsistência.",
        solution: "Idempotência por chaves, upsert controlado, trilha de auditoria e reprocesso seguro."
      },
      {
        challenge: "Rastrear problemas de ponta a ponta em fluxos distribuídos.",
        solution: "Logs estruturados com correlação e categorização por etapa."
      },
      {
        challenge: "Diferenças entre estados na origem e no destino ao longo do tempo.",
        solution: "Rotinas de reconciliação e mecanismos de reprocesso controlado."
      }
    ],
    decisions: [
      {
        decision: "Eventos como base operacional",
        reason: "Facilita auditoria, reprocesso e explicabilidade do estado atual."
      },
      {
        decision: "Idempotência como regra, não exceção",
        reason: "Reduz impacto de reentregas e falhas transitórias."
      },
      {
        decision: "Separar ingestão e consumo analítico",
        reason: "Evita acoplamento entre integração e dashboard, e reduz regressões."
      }
    ],
    reliability: [
      "Idempotência e dedupe para reentregas.",
      "Auditoria com timestamps e origem do processamento.",
      "Reprocesso controlado e reconciliação para consistência ao longo do tempo."
    ],
    observability: [
      "Logs estruturados com correlation_id.",
      "Falhas categorizadas por etapa.",
      "Monitoramento de eventos pendentes e reprocessos."
    ],
    engineeringPractices: [
      "Contratos e validação de payload",
      "Idempotência e dedupe",
      "Auditoria e reprocesso seguro",
      "Observabilidade e rastreabilidade ponta a ponta"
    ],
    tags: ["backend", "integrações", "dados", "webhooks", "governança", "observabilidade"],
    featured: true,
    impact: [
      { value: "0%", label: "duplicidade em reentregas", highlight: true },
      { value: "100%", label: "eventos com trilha de auditoria" },
      { value: "< 3min", label: "tempo para localizar falha (correlation_id)" }
    ]
  },
  {
    slug: "ecologica-automacao-crm",
    title: "Automação comercial e integração com CRM",
    organization: "Empresa do Setor Ambiental",
    roleBadge: "Full Stack",
    headline: "Orquestração de funil com estado do lead, eventos operacionais e base analítica para acompanhamento.",
    context: "O projeto foi estruturado para reduzir inconsistência no atendimento e dar previsibilidade ao funil comercial, conectando captação, qualificação e encaminhamento com registro de contexto e eventos. O foco foi transformar processos de operação em um fluxo orquestrado, com integrações e uma base de dados que permita acompanhar performance e diagnosticar gargalos.",
    whatIBuilt: [
      "Orquestração do fluxo do lead (captação, qualificação, encaminhamento e agendamento quando aplicável).",
      "Integração com CRM para criação/atualização de lead, movimentação de etapas e registro de atividades.",
      "Persistência do estado do lead e trilha de eventos para rastreabilidade de decisões.",
      "Normalização de entradas (origens/campanhas) para consistência operacional.",
      "Camada analítica via views para leitura do funil e métricas de operação.",
      "Padrões de governança (dedupe, idempotência e tratamento de reprocesso)."
    ],
    architectureNodes: [
      "Entrada de leads/campanhas",
      "Orquestrador (regras + estado do lead)",
      "Integração CRM",
      "Persistência (contexto + eventos)",
      "Views analíticas",
      "Dashboard/consumo"
    ],
    architectureDescription: "O lead passa a ter um estado persistido e uma trilha de eventos. Isso permite repetir etapas, reprocessar e explicar por que uma decisão ocorreu, além de sustentar métricas sem depender apenas do CRM como fonte única.",
    features: [
      "Registrar e atualizar lead com estado e contexto centralizados.",
      "Integrar etapas do funil com CRM (pipeline e atividades).",
      "Evitar duplicidade de eventos e reprocessar com segurança.",
      "Consolidar eventos em views para métricas e acompanhamento.",
      "Facilitar diagnóstico de gargalos por etapa do funil."
    ],
    integrations: [
      "CRM (Kommo) para pipeline/atividades",
      "Workflows (n8n) para orquestração e automação",
      "Postgres/Supabase para estado e eventos",
      "Dashboard (consumo de views)"
    ],
    stack: [
      { category: "Backend e Integrações", items: ["Webhooks", "Integrações REST", "Orquestração de fluxos (workflows)"] },
      { category: "Dados", items: ["Postgres/Supabase", "SQL (views)", "Modelo de eventos + estado do lead"] }
    ],
    responsibilities: [
      "Desenho do fluxo e regras de orquestração.",
      "Integração com CRM e padronização das entradas.",
      "Modelagem do estado do lead e trilha de eventos.",
      "Dedupe, idempotência e mecanismos de reprocesso.",
      "Views analíticas para métricas e consumo."
    ],
    challenges: [
      {
        challenge: "Padronizar etapas e evitar inconsistências entre canais e operação.",
        solution: "Estado central do lead e eventos normalizados."
      },
      {
        challenge: "Medir funil sem depender exclusivamente de registros manuais.",
        solution: "Trilha de eventos e camada analítica via views."
      },
      {
        challenge: "Reprocessar sem duplicar dados e sem confundir o time operacional.",
        solution: "Idempotência, dedupe e regras claras de reexecução."
      }
    ],
    decisions: [
      {
        decision: "Estado do lead fora do CRM",
        reason: "Evita acoplamento e permite evoluir regras e métricas com mais controle."
      },
      {
        decision: "Eventos como trilha operacional",
        reason: "Melhora rastreabilidade e reduz ambiguidades."
      },
      {
        decision: "Views analíticas para leitura do funil",
        reason: "Simplifica consumo pelo dashboard e reduz lógica no frontend."
      }
    ],
    reliability: [
      "Dedupe e idempotência para eventos repetidos.",
      "Reprocesso seguro com trilha de eventos.",
      "Padronização de entradas para consistência."
    ],
    observability: [
      "Logs por etapa e por lead (correlação).",
      "Monitoramento de leads pendentes e etapas travadas."
    ],
    engineeringPractices: [
      "Estado e eventos como base operacional",
      "Dedupe e idempotência",
      "Camada analítica via views",
      "Integração CRM com rastreabilidade"
    ],
    tags: ["backend", "automação", "crm", "integrações", "dados", "funil"],
    featured: true,
    impact: [
      { value: "1", label: "fonte única de verdade (estado do lead)", highlight: true },
      { value: "100%", label: "etapas do funil rastreáveis" },
      { value: "0", label: "inconsistências entre CRM e operação" }
    ]
  },
  {
    slug: "afonsina-agent-dashboard",
    title: "Pipeline de atendimento e dashboard operacional",
    organization: "Consultoria de Atendimento",
    headline: "Consolidação de ligações, outcomes e reuniões com dedupe e camada analítica para métricas confiáveis.",
    context: "O projeto foi estruturado para consolidar eventos de atendimento (ligações, tentativas, outcomes e agendamentos) em uma base consistente, reduzindo duplicidades e suportando métricas confiáveis para operação. A prioridade foi transformar eventos dispersos em uma camada analítica clara, pronta para consumo por dashboard.",
    whatIBuilt: [
      "Pipeline de captura e normalização de eventos de atendimento (ligações, tentativas, resultados e agendamentos).",
      "Estratégia anti-duplicidade para lidar com reentregas e reprocessos.",
      "Separação entre dados brutos e camada analítica (views) para métricas.",
      "Exposição segura para consumo no dashboard.",
      "Estrutura para acompanhar performance por etapa e outcomes, sem dependência de consolidação manual."
    ],
    architectureNodes: [
      "Provedor de chamadas/agente",
      "Webhooks/ingestão de eventos",
      "Persistência RAW",
      "Normalização e dedupe",
      "Views analíticas",
      "Dashboard"
    ],
    architectureDescription: "Eventos entram como dados brutos, são normalizados e deduplicados, e depois consolidados em views que representam as métricas de operação. Isso separa ingestão de consumo e reduz risco de inconsistência no painel.",
    features: [
      "Registrar ligações, tentativas e resultados de forma padronizada.",
      "Evitar duplicidade por reentregas e reprocessos.",
      "Consolidar outcomes e agendamentos para métricas.",
      "Entregar uma camada analítica estável para dashboard."
    ],
    integrations: [
      "Telefonia/voz (Vapi/Twilio) - quando aplicável",
      "CRM (quando aplicável)",
      "Postgres/Supabase",
      "Dashboard (consumo de views)"
    ],
    stack: [
      { category: "Backend", items: ["Webhooks", "Funções server-side quando necessário (processamento e normalização)"] },
      { category: "Dados", items: ["Postgres/Supabase", "SQL (views analíticas)", "Governança (dedupe, idempotência, auditoria)"] }
    ],
    responsibilities: [
      "Modelagem de eventos e arquitetura do pipeline.",
      "Normalização e dedupe para estabilidade da base.",
      "Construção das views analíticas para métricas.",
      "Definição de contratos de ingestão e padrões de consistência.",
      "Apoio ao consumo no dashboard."
    ],
    challenges: [
      {
        challenge: "Webhooks e eventos repetidos gerando duplicidade.",
        solution: "Idempotência e chaves de dedupe com upsert controlado."
      },
      {
        challenge: "Transformar eventos em métricas utilizáveis (e não só logs).",
        solution: "Camada analítica via views com consolidação por período, origem e outcome."
      },
      {
        challenge: "Evitar que mudanças de ingestão quebrem o dashboard.",
        solution: "Separação raw vs analytics e contratos de saída estáveis."
      }
    ],
    decisions: [
      {
        decision: "Separar dados brutos de camada analítica",
        reason: "Mantém flexibilidade para evoluir ingestão sem quebrar consumo."
      },
      {
        decision: "Views como contrato do dashboard",
        reason: "Centraliza lógica no banco e reduz lógica no frontend."
      },
      {
        decision: "Idempotência por chave",
        reason: "Protege métricas contra reentregas e reprocessos."
      }
    ],
    reliability: [
      "Dedupe e idempotência por chaves compostas.",
      "Auditoria e rastreabilidade do fluxo.",
      "Contratos de saída via views."
    ],
    observability: [
      "Logs estruturados por evento e correlação por entidade (call_id, lead_id quando aplicável).",
      "Monitoramento de pendências e falhas por etapa."
    ],
    engineeringPractices: [
      "Eventos como base operacional",
      "Camada analítica via views",
      "Dedupe e idempotência",
      "Separação raw/analytics para estabilidade"
    ],
    tags: ["backend", "eventos", "dados", "dashboard", "dedupe", "governança"],
    featured: true,
    impact: [
      { value: "0%", label: "duplicidade em métricas (idempotência)", highlight: true },
      { value: "1", label: "camada analítica estável (raw vs analytics)" },
      { value: "100%", label: "outcomes rastreáveis por etapa" }
    ]
  },
  {
    slug: "hermes-scraper-engine",
    title: "Engine de prospecção B2B (coleta, enriquecimento, segmentação e automação)",
    organization: "Projeto Interno",
    headline: "Pipeline completo para gerar bases acionáveis com qualidade, dedupe, enriquecimento e integrações com CRM, voz e agendamento.",
    context: "O Hermes foi estruturado como uma engine de prospecção B2B orientada a dados, pensada para transformar coleta e enriquecimento em uma base realmente utilizável pela operação. O fluxo parte da ingestão (scraping e fontes externas), passa por normalização e deduplicação, aplica enriquecimento e segmentação por ICP e termina na entrega de listas e integrações prontas para uso. A mesma base também sustenta eventos operacionais e uma camada analítica para dashboards e acompanhamento de performance.",
    whatIBuilt: [
      "Pipeline de ingestão com padronização de saída e tratamento de falhas para garantir previsibilidade na coleta.",
      "Camada de normalização e qualidade de dados para reduzir variações de formato e deixar os campos consistentes.",
      "Estratégia de deduplicação e idempotência para suportar reprocessos e ingestões repetidas sem poluir a base.",
      "Etapa de enriquecimento separada do restante do pipeline, permitindo rodar sinais e complementos de forma independente quando necessário.",
      "Segmentação por ICP e critérios operacionais (tags, subsegmentos, recortes por região) para gerar listas acionáveis.",
      "Camada de entrega para exportação e integração com operação (CRM e fluxos automatizados).",
      "Camada analítica baseada em views para consolidar eventos e facilitar métricas e dashboards."
    ],
    architectureNodes: [
      "Coleta (scraping/fontes)",
      "Staging RAW (armazenamento bruto)",
      "Normalização e validação",
      "Deduplicação e chaves",
      "Enriquecimento (sinais e contexto)",
      "Segmentação (ICP, tags, subsegmentos)",
      "Entrega (export/CRM/workflows)",
      "Eventos e métricas (camada analítica)",
      "Dashboard e relatórios"
    ],
    architectureDescription: "O Hermes separa dados brutos (raw) da camada tratada (curated) e da camada analítica (analytics). Essa separação ajuda a reprocessar com segurança, auditar mudanças e evoluir critérios de segmentação sem comprometer o que já está em operação.",
    features: [
      "Montar base B2B por filtros (setor, região, porte e critérios operacionais).",
      "Unificar registros e reduzir duplicidade por dedupe e idempotência.",
      "Enriquecer empresas e decisores com informações complementares e sinais quando necessário.",
      "Marcar e segmentar leads por ICP e subsegmentos para uso em operação.",
      "Exportar listas e conectar com fluxos comerciais e CRM.",
      "Registrar eventos de operação (tentativas, contatos, outcomes) e consolidar para análise.",
      "Alimentar dashboard com métricas e visão operacional do funil."
    ],
    integrations: [
      "Supabase (Postgres + Auth + RLS) como base de dados e governança multi-tenant.",
      "Edge Functions para ingestão, padronização, dedupe e rotinas de processamento.",
      "Workflows (n8n) para orquestrar automações e integrações.",
      "CRM (Kommo) para criação/atualização de leads, movimentação de etapas e registro de atividades.",
      "Telefonia/voz (Twilio/Vapi) para campanhas e registro de ligações e resultados - quando aplicável.",
      "Google Calendar para agendamentos e sincronização de reuniões - quando aplicável.",
      "Frontend (React/Next) para painéis e dashboards consumindo views e endpoints."
    ],
    stack: [
      { category: "Backend e Dados", items: ["Python", "Postgres (Supabase)", "SQL", "DuckDB"] },
      { category: "APIs e Governança", items: ["Supabase Auth (JWT)", "RLS (multi-tenant)", "Edge Functions", "Versionamento de contratos"] },
      { category: "Automação", items: ["n8n", "Webhooks", "Filas lógicas", "Rotinas de reprocesso"] },
      { category: "Frontend", items: ["React/Next.js", "Dashboard", "Lovable UI"] }
    ],
    responsibilities: [
      "Estruturação e implementação do pipeline ponta a ponta (coleta, normalização, dedupe, enriquecimento e segmentação).",
      "Implementação dos coletores/scrapers e padronização de saída.",
      "Modelagem do banco e organização por camadas (raw/curated/analytics), incluindo estratégia de chaves.",
      "Definição de idempotência e dedupe para ingestões e eventos.",
      "Construção de views e endpoints para consumo no dashboard.",
      "Integração com CRM e automações de operação via workflows.",
      "Governança multi-tenant com RLS e organização por org_id quando necessário.",
      "Apoio à observabilidade com logs, trilha de auditoria e rastreabilidade."
    ],
    challenges: [
      {
        challenge: "Qualidade e consistência do dado coletado (fontes diferentes, formatos variados).",
        solution: "Normalização em pipeline com validações, padronização de schema e separação raw/curated para permitir reprocesso seguro."
      },
      {
        challenge: "Duplicatas e reprocessos (ingestões repetidas, eventos chegando mais de uma vez).",
        solution: "Chaves de dedupe, upsert controlado, idempotência e trilha de auditoria para rastrear alterações e evitar sujeira operacional."
      },
      {
        challenge: "Transformar base em algo acionável para operação (não só armazenamento).",
        solution: "Segmentação por ICP e critérios operacionais, camada de entrega (export/CRM) e registro de eventos operacionais para ajustar o funil."
      }
    ],
    decisions: [
      {
        decision: "Arquitetura em camadas (raw/curated/analytics)",
        reason: "Foi a forma mais estável de permitir reprocesso e evolução dos critérios sem perder histórico ou comprometer o consumo."
      },
      {
        decision: "Chaves compostas para dedupe (cnpj + source + timestamp)",
        reason: "Ajuda a manter unicidade mesmo quando o mesmo registro aparece em múltiplas fontes ou em reprocessos."
      },
      {
        decision: "RLS por org_id nas tabelas operacionais",
        reason: "Resolve segregação multi-tenant no banco, reduzindo dependência de lógica adicional na aplicação."
      },
      {
        decision: "Enriquecimento como etapa própria do pipeline",
        reason: "Permite executar enriquecimento de forma assíncrona e independente da coleta, evitando travar a ingestão."
      }
    ],
    reliability: [
      "Ingestões desenhadas para serem repetíveis sem duplicar dados (idempotência e dedupe).",
      "Separação raw/curated para reprocesso seguro e rastreabilidade de origem.",
      "Trilha de auditoria para registrar quando e por qual processo um registro foi criado ou atualizado.",
      "Rotinas de reconciliação para identificar divergências e manter consistência ao longo do tempo."
    ],
    observability: [
      "Logs estruturados com correlation_id para acompanhar um registro ao longo do pipeline.",
      "Erros classificados por etapa (coleta, normalização, dedupe, enriquecimento) para facilitar diagnóstico.",
      "Monitoramento de registros pendentes, órfãos ou travados em etapas intermediárias.",
      "Acompanhamento do tempo de processamento por etapa para identificar gargalos e pontos de ajuste."
    ],
    engineeringPractices: [
      "Idempotência e dedupe em ingestões e eventos.",
      "Camadas raw/curated/analytics para reprocesso seguro.",
      "Auditoria e rastreabilidade ponta a ponta.",
      "Governança multi-tenant com RLS (quando aplicável).",
      "Observabilidade via logs estruturados e correlação de eventos."
    ],
    tags: ["backend", "dados", "scraping", "automação", "integrações", "multi-tenant"],
    featured: true,
    roleBadge: "Tech Lead",
    highlightLine: "Pipeline de ponta a ponta multi-tenant",
    impact: [
      { value: "raw → curated → analytics", label: "camadas para reprocesso seguro", highlight: true },
      { value: "100%", label: "registros deduplicados (chaves compostas)" },
      { value: "multi-tenant", label: "RLS por org_id" }
    ]
  },
  // ─── Support Hub ────────────────────────────────────────────────────────
  {
    slug: "support-hub-multi-tenant",
    title: "Portal de Suporte ao Cliente Multi-tenant",
    organization: "Produto Interno",
    roleBadge: "Tech Lead",
    highlightLine: "SaaS de suporte com triagem por IA, SLA e CI/CD em VPS",
    headline: "Portal SaaS de suporte multi-tenant com tickets, base de conhecimento, triagem com IA (N1/N2/N3), SLA e notificações em tempo real.",
    context: "O projeto surgiu da necessidade de centralizar o atendimento ao cliente em uma única plataforma multi-tenant — onde cada empresa (tenant) gerencia seus tickets, usuários e base de conhecimento de forma isolada, com visão unificada para o administrador da plataforma. O foco foi construir um produto completo, com qualidade de produção: triagem automática por IA, SLA configurável, notificações multicanal e CI/CD para garantir entrega contínua.",
    whatIBuilt: [
      "Arquitetura multi-tenant com RLS: cada tenant tem isolamento total de dados no banco (pinn_admin, customer_admin, user).",
      "Sistema de tickets com fluxo de estados, atribuição, histórico de mensagens e SLA por produto e severidade.",
      "Base de conhecimento consultável antes da abertura do ticket; conversão de ticket resolvido em rascunho de artigo.",
      "Triagem automática com IA: classificação por severidade e nível (N1/N2/N3), prompts configuráveis e regras de escalação.",
      "Notificações multicanal: in-app (sino), e-mail (SMTP) e WhatsApp (Evolution API) via Outbox Pattern com retentativa.",
      "Painel admin completo: produtos, clientes (tenants), usuários, convites, métricas, NPS e configurações de integrações.",
      "Integração opcional com ClickUp para criação automática de tarefas a partir de tickets.",
      "CI/CD via GitHub Actions: clone, build, .env e restart do container Docker na VPS Hostinger.",
    ],
    architectureNodes: [
      "Frontend React/TypeScript",
      "Supabase (Auth + RLS + PostgreSQL)",
      "Edge Functions (Deno)",
      "Outbox de Notificações",
      "Evolution API (WhatsApp)",
      "SMTP (E-mail)",
      "ClickUp API",
      "Docker + VPS + GitHub Actions",
    ],
    architectureDescription: "Multi-tenancy com RLS garante isolamento total por tenant no banco. Automações são disparadas por triggers (pg_net) chamando Edge Functions para IA, notificações e ClickUp. A fila de notificações (outbox) é processada por worker, garantindo entrega assíncrona e tolerante a falhas.",
    features: [
      "Tickets com estados, histórico e SLA por produto e severidade.",
      "Base de conhecimento com busca e criação a partir de tickets resolvidos.",
      "Triagem e classificação automática com IA (N1/N2/N3).",
      "Notificações por e-mail, WhatsApp e in-app com retentativa.",
      "Painel admin com métricas, NPS e gestão de tenants.",
      "Integração com ClickUp para criação de tarefas.",
      "Deploy automatizado com GitHub Actions e Docker.",
    ],
    integrations: [
      "Supabase Auth + RLS (multi-tenancy)",
      "Evolution API (WhatsApp)",
      "SMTP (e-mail)",
      "ClickUp API",
      "GitHub Actions (CI/CD)",
      "Docker / VPS Hostinger",
    ],
    stack: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query"] },
      { category: "Backend", items: ["Supabase (PostgreSQL + Auth + RLS)", "Edge Functions (Deno)", "pg_net (triggers)"] },
      { category: "Integrações", items: ["Evolution API (WhatsApp)", "SMTP", "ClickUp API"] },
      { category: "Infra & DevOps", items: ["Docker", "VPS Hostinger", "GitHub Actions (CI/CD)", "Nginx"] },
    ],
    responsibilities: [
      "Arquitetura completa: multi-tenancy com RLS, Edge Functions, Outbox Pattern.",
      "Desenvolvimento full stack do zero ao deploy em produção.",
      "Design e implementação do sistema de IA para triagem e escalação.",
      "Pipeline de CI/CD com GitHub Actions e containerização Docker.",
      "Documentação técnica completa (arquitetura, setup, frontend, backend, integrações, deploy, testes).",
    ],
    challenges: [
      {
        challenge: "Garantir isolamento total de dados entre tenants sem filtros manuais em cada query.",
        solution: "RLS com policies por org_id derivado do JWT — o banco filtra automaticamente, independente da query.",
      },
      {
        challenge: "Notificações que chegam ao destinatário mesmo com instabilidade dos serviços externos.",
        solution: "Outbox Pattern: notificação gravada na mesma transação do evento, worker processa com retentativa e backoff.",
      },
      {
        challenge: "Triagem de tickets sem criar dependência rígida de um único modelo de IA.",
        solution: "Prompts configuráveis por nível (N1/N2/N3) e regras de escalação editáveis pelo admin sem deploy.",
      },
    ],
    decisions: [
      { decision: "RLS como única camada de isolamento", reason: "Elimina risco de vazamento por query esquecida e simplifica o código da aplicação." },
      { decision: "Outbox Pattern para notificações", reason: "Garante entrega assíncrona tolerante a falhas sem perder mensagens." },
      { decision: "Edge Functions para IA e integrações", reason: "Execução próxima ao banco, sem servidor intermediário, com acesso direto ao contexto do Supabase." },
    ],
    reliability: [
      "RLS garante isolamento de dados entre tenants no banco.",
      "Outbox Pattern com retentativa para notificações.",
      "Triggers + Edge Functions para automações atômicas.",
    ],
    observability: [
      "Status de cada notificação rastreável na tabela de outbox.",
      "Histórico completo de tickets e transições de estado.",
      "Logs estruturados nas Edge Functions.",
    ],
    engineeringPractices: [
      "Multi-tenancy com RLS por org_id",
      "Outbox Pattern para notificações confiáveis",
      "CI/CD automatizado com GitHub Actions",
      "Testes automatizados (Vitest + Playwright)",
    ],
    tags: ["backend", "multi-tenant", "automação", "integrações", "dados", "dashboards"],
    featured: true,
    impact: [
      { value: "0 vazamentos", label: "de dados entre tenants (RLS)", highlight: true },
      { value: "3 canais", label: "de notificação com Outbox Pattern" },
      { value: "N1/N2/N3", label: "triagem automática por IA" },
    ],
  },
  // ─── OKR Platform ─────────────────────────────────────────────────────────
  {
    slug: "plataforma-okr-indicadores",
    title: "Plataforma de Gestão de OKRs e Indicadores",
    organization: "Projeto Sob Demanda",
    roleBadge: "Full Stack",
    highlightLine: "SaaS de OKRs com importação de dados, perfis de acesso e dashboard em tempo real",
    headline: "Sistema web de gestão estratégica com OKRs, indicadores, dashboard em tempo real, importação de dados e controle de acesso por perfil.",
    context: "O cliente precisava de uma plataforma centralizada para acompanhar OKRs, indicadores e fontes de dados — substituindo planilhas manuais e relatórios dispersos. O sistema deveria suportar múltiplos perfis de acesso (admin, gestor, analista, visualizador), importação de dados por planilha com mapeamento de colunas e um dashboard que refletisse o estado real dos objetivos em tempo real.",
    whatIBuilt: [
      "Dashboard com métricas em tempo real: OKRs no prazo, em atraso, atividades por setor e ciclo.",
      "Gestão completa de OKRs: ciclos (períodos), setores/departamentos, objetivos, resultados-chave (KRs) e tarefas com status, prioridade e responsáveis.",
      "Importação de dados com wizard: CSV/Excel, mapeamento de colunas para indicadores e preview antes de confirmar.",
      "Gestão de fontes de dados: cadastro de fontes e vínculo com KRs para atualização automática.",
      "Autenticação e controle de acesso: Supabase Auth com RLS e roles (admin, gestor, analista, visualizador).",
      "Edge Functions para criação de usuários com roles e operações administrativas.",
      "Deploy preparado para produção com Docker, Nginx e documentação completa.",
    ],
    architectureNodes: [
      "Frontend React/TypeScript",
      "Supabase Auth + RLS",
      "PostgreSQL (OKRs, KRs, tarefas, indicadores)",
      "Edge Functions",
      "Wizard de importação (CSV/Excel)",
      "Views para dashboard",
      "Docker + Nginx",
    ],
    architectureDescription: "Supabase com RLS garante que cada perfil vê apenas o que tem permissão. O dashboard consome views analíticas do banco, sem lógica de agregação no frontend. A importação via wizard mapeia colunas da planilha para indicadores antes de gravar, evitando dados inconsistentes.",
    features: [
      "Dashboard consolidado com OKRs, KRs e atividades em tempo real.",
      "Ciclos, setores, objetivos e resultados-chave com status e prioridade.",
      "Importação de dados por planilha com wizard de mapeamento de colunas.",
      "Perfis de acesso: admin, gestor, analista, visualizador.",
      "Fontes de dados vinculadas a KRs para atualização automática.",
      "Gestão de usuários e configurações por setor.",
    ],
    integrations: [
      "Supabase Auth + RLS (controle de acesso)",
      "PostgreSQL (modelagem relacional de OKRs)",
      "Edge Functions (criação de usuários e roles)",
      "Importação CSV/Excel (wizard com mapeamento)",
    ],
    stack: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "React Router"] },
      { category: "Backend", items: ["Supabase (PostgreSQL + Auth + RLS)", "Edge Functions (Deno)"] },
      { category: "Dados", items: ["SQL (views analíticas)", "Importação CSV/Excel", "Mapeamento de colunas"] },
      { category: "Infra", items: ["Docker", "Nginx", "Documentação de deploy para VPS"] },
    ],
    responsibilities: [
      "Arquitetura completa do sistema: modelagem de OKRs, controle de acesso por perfil e camada analítica.",
      "Desenvolvimento full stack do frontend ao banco.",
      "Implementação do wizard de importação com mapeamento de colunas.",
      "Segurança via RLS com roles distintas no Supabase.",
      "Documentação técnica e setup de deploy.",
    ],
    challenges: [
      {
        challenge: "Garantir que cada perfil veja apenas o que tem permissão, sem filtros manuais.",
        solution: "RLS com policies por role derivada do JWT — o banco filtra automaticamente.",
      },
      {
        challenge: "Importar planilhas com schemas heterogêneos sem corromper os dados do sistema.",
        solution: "Wizard de importação com etapa de mapeamento explícito de colunas e preview antes de confirmar a gravação.",
      },
      {
        challenge: "Dashboard refletindo estado real sem recarregamento e sem lógica de agregação no frontend.",
        solution: "Views analíticas no banco consolidam os cálculos; o frontend apenas consome e renderiza.",
      },
    ],
    decisions: [
      { decision: "Views para dashboard", reason: "Lógica centralizada no banco reduz inconsistência e simplifica o frontend." },
      { decision: "Wizard de importação com preview", reason: "Evita importação de dados errados sem onerar o usuário com configuração técnica." },
      { decision: "RLS para controle de acesso", reason: "Garante segurança por design, não por convenção de código." },
    ],
    reliability: [
      "RLS garante isolamento de dados por perfil.",
      "Preview no wizard de importação evita dados inconsistentes.",
      "Views analíticas como fonte única de verdade para o dashboard.",
    ],
    observability: [
      "Status de OKRs e KRs rastreável por ciclo e setor.",
      "Histórico de importações com mapeamento registrado.",
    ],
    engineeringPractices: [
      "Controle de acesso por perfil com RLS",
      "Wizard de importação com validação antes de gravar",
      "Views analíticas para dashboard confiável",
      "Deploy documentado para produção",
    ],
    tags: ["backend", "dados", "dashboards", "integrações", "automação"],
    featured: false,
    impact: [
      { value: "4 perfis", label: "de acesso com RLS por role", highlight: true },
      { value: "CSV/Excel", label: "com mapeamento de colunas no wizard" },
      { value: "tempo real", label: "OKRs e KRs via views analíticas" },
    ],
  },
  // ─── Insights Hub ─────────────────────────────────────────────────────────
  {
    slug: "analytics-insights-hub",
    title: "Plataforma de Analytics e BI Multi-tenant",
    organization: "Produto Interno",
    roleBadge: "Tech Lead",
    highlightLine: "SaaS de BI com onboarding guiado, mapeamento assistido por IA e dashboards gerados automaticamente",
    headline: "Plataforma SaaS de business intelligence que conecta fontes de dados externas e gera dashboards executivos automaticamente via onboarding guiado e mapeamento assistido por IA.",
    context: "O projeto nasceu de um problema real: empresas que atendem múltiplos clientes precisam de dashboards padronizados, mas cada cliente tem banco e estrutura diferentes. Configurar manualmente cada painel é lento e pouco escalável. A plataforma resolve isso com um fluxo de onboarding em etapas — o usuário conecta sua fonte de dados, a IA sugere mapeamentos e o sistema gera o dashboard com dados reais automaticamente.",
    whatIBuilt: [
      "Onboarding em 5 etapas: Template → Integração → Mapeamento → Preview → Confirmação.",
      "Integração com Supabase do cliente: detecção de tabelas/colunas, filtro automático de tabelas de sistema e amostras de dados.",
      "Suporte a Google Sheets, CSV e API como fontes alternativas.",
      "Mapeamento assistido por IA (Edge Function): sugestões de campo origem → métrica alvo com ranking de relevância e deduplicação.",
      "Engine de dashboard: resolução automática de colunas (datas, categorias, métricas), fallbacks para schemas divergentes, formatação PT-BR.",
      "15+ widgets: KPIs, gráficos de área/linha/barra/pizza, funil, tabelas, cards de insight.",
      "Painel admin: gestão de organizações, templates de dashboard, métricas customizadas, usuários, atividade e auditoria.",
      "Multi-tenancy com RLS: dados de cada cliente completamente isolados.",
    ],
    architectureNodes: [
      "Frontend React/TypeScript",
      "Onboarding wizard (5 etapas)",
      "Edge Function: suggest-mappings (IA)",
      "Edge Function: fetch-client-data",
      "Edge Function: test-supabase-connection",
      "Supabase Admin (auth, RLS, DB)",
      "Banco do cliente (Supabase externo)",
      "Google Sheets / CSV / API",
      "Engine de dashboard (resolução de colunas)",
    ],
    architectureDescription: "O onboarding conecta a fonte do cliente e usa IA para sugerir mapeamentos (campo → métrica). Na confirmação, o sistema cria o dashboard e os widgets no banco com os mapeamentos aprovados. O engine de dashboard resolve automaticamente colunas divergentes e aplica fallbacks quando o schema não bate com o template.",
    features: [
      "Onboarding guiado com conexão de fonte de dados e sugestões de mapeamento por IA.",
      "Detecção automática de tabelas e filtro de tabelas de sistema.",
      "15+ widgets: KPIs, gráficos, funil, tabela, insights.",
      "Engine de dashboard com resolução de colunas e fallbacks.",
      "Painel admin para organizações, templates e métricas customizadas.",
      "Multi-tenancy com RLS — dados de cada cliente isolados.",
      "Suporte a Supabase, Google Sheets, CSV e API como fontes.",
    ],
    integrations: [
      "Supabase do cliente (conexão externa via URL + chave)",
      "Google Sheets",
      "CSV / API",
      "Edge Functions (IA, fetch de dados, teste de conexão)",
    ],
    stack: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "TanStack Query"] },
      { category: "Backend", items: ["Supabase (PostgreSQL + Auth + RLS)", "Edge Functions (Deno): suggest-mappings, fetch-client-data, test-supabase-connection"] },
      { category: "IA & Dados", items: ["Mapeamento assistido por IA", "Ranking de relevância de tabelas", "Resolução automática de colunas"] },
    ],
    responsibilities: [
      "Arquitetura do fluxo de onboarding e do engine de dashboards.",
      "Integração com Supabase externo e desenho do mapeamento template ↔ dados reais.",
      "Filtros de tabelas de sistema, ranking de relevância e deduplicação de sugestões de IA.",
      "Componentes de dashboard (cards, gráficos, funil, tabela) e tratamento de dados vazios.",
      "Multi-tenancy com RLS e isolamento total por organização.",
    ],
    challenges: [
      {
        challenge: "Cada cliente tem um banco com schema diferente — como gerar um dashboard padronizado para todos?",
        solution: "Templates com métricas semânticas (ex.: total_leads, investimento) + mapeamento do usuário que vincula métrica a campo real do banco do cliente.",
      },
      {
        challenge: "Schemas divergentes: o campo esperado pelo template não existe exatamente no banco do cliente.",
        solution: "Engine de dashboard com inferência de groupBy (data/categoria), resolução de colunas por similaridade e fallback para contagem quando não há campo compatível.",
      },
      {
        challenge: "Evitar sugestões de IA ruidosas com tabelas de sistema (migrations, auth, etc.).",
        solution: "Filtro automático de tabelas de sistema na integração e no mapeamento; envio apenas das tabelas mais relevantes para a IA, com limite de sugestões.",
      },
    ],
    decisions: [
      { decision: "Templates com métricas semânticas", reason: "Desacopla o template do schema do cliente — o mapeamento conecta os dois sem depender de nomes de colunas fixos." },
      { decision: "Edge Functions para IA e fetch de dados", reason: "Execução próxima ao banco Supabase, sem servidor intermediário, com acesso ao contexto do cliente." },
      { decision: "RLS por org_id", reason: "Garante que dados de um cliente nunca sejam expostos para outro, independente da query." },
    ],
    reliability: [
      "RLS garante isolamento total entre organizações.",
      "Fallbacks no engine garantem dashboard funcional mesmo com schema divergente.",
      "Teste de conexão antes do onboarding evita falhas tardias.",
    ],
    observability: [
      "Status de cada organização e dashboard rastreável no painel admin.",
      "Logs de atividade e auditoria por organização.",
    ],
    engineeringPractices: [
      "Templates semânticos desacoplados do schema do cliente",
      "Mapeamento assistido por IA com ranking de relevância",
      "Engine de dashboard com resolução automática de colunas",
      "Multi-tenancy com RLS por org_id",
    ],
    tags: ["backend", "dados", "dashboards", "automação", "multi-tenant", "integrações"],
    featured: false,
    impact: [
      { value: "5 etapas", label: "do onboarding ao dashboard gerado", highlight: true },
      { value: "15+ widgets", label: "resolvidos automaticamente pelo engine" },
      { value: "N fontes", label: "Supabase, Sheets, CSV, API" },
    ],
  },
];

export const allTags = ["backend", "integrações", "dados", "automação", "eventos", "dashboards", "scraping", "multi-tenant", "webhooks", "governança", "observabilidade", "crm", "funil", "dedupe", "dashboard"];

export const focusFilters = [
  { id: "integracoes", label: "Integrações", tags: ["integrações", "webhooks"] },
  { id: "dados", label: "Dados", tags: ["dados", "dashboards", "dashboard"] },
  { id: "automacao", label: "Automação", tags: ["automação", "funil"] },
  { id: "scraping", label: "Scraping", tags: ["scraping"] },
  { id: "dashboards", label: "Dashboards", tags: ["dashboards", "dashboard"] },
  { id: "eventos", label: "Eventos", tags: ["eventos", "webhooks"] }
];

export type RoleBadge = Project["roleBadge"];
