export interface StackCategory {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  practices: string[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "backend",
    title: "Backend e Integrações",
    description: "APIs robustas e integrações confiáveis com foco em consistência e rastreabilidade.",
    technologies: ["APIs REST", "Webhooks", "Node.js", "TypeScript", "Python", "Edge Functions"],
    practices: [
      "Contratos de API bem definidos",
      "Versionamento semântico",
      "Validação de payloads",
      "Idempotência e retries",
      "Auditoria de eventos",
      "Rate limiting e throttling"
    ]
  },
  {
    id: "dados",
    title: "Dados e Analytics Engineering",
    description: "Modelagem relacional e camadas analíticas para decisões baseadas em dados reais.",
    technologies: ["PostgreSQL", "Supabase", "SQL avançado", "Views materializadas", "dbt"],
    practices: [
      "Modelagem relacional normalizada",
      "Camadas raw, curated e analytics",
      "Views para dashboards",
      "Governança de dados",
      "Qualidade e validação",
      "Documentação de schemas"
    ]
  },
  {
    id: "automacao",
    title: "Automação e Orquestração",
    description: "Fluxos automatizados para operação eficiente e escalável.",
    technologies: ["Workflows", "Jobs/Workers", "Cron", "n8n", "Event-driven"],
    practices: [
      "Orquestração de pipelines",
      "Eventos operacionais",
      "Estado e contexto do processo",
      "Retry e fallback strategies",
      "Logging estruturado",
      "Alertas e monitoramento"
    ]
  },
  {
    id: "frontend",
    title: "Frontend (Suporte)",
    description: "Interfaces para consumo de dados e operação, com foco em usabilidade.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    practices: [
      "Componentes reutilizáveis",
      "Design system consistente",
      "Responsividade",
      "Acessibilidade",
      "Performance otimizada"
    ]
  },
  {
    id: "infra",
    title: "Infra e Entrega",
    description: "Deploy e operação com foco em confiabilidade e observabilidade.",
    technologies: ["Vercel", "VPS", "Docker", "GitHub Actions", "Supabase"],
    practices: [
      "CI/CD automatizado",
      "Ambientes de staging",
      "Logs centralizados",
      "Métricas de aplicação",
      "Backup e recuperação"
    ]
  },
  {
    id: "engenharia",
    title: "Práticas de Engenharia",
    description: "Princípios que garantem qualidade, segurança e manutenibilidade.",
    technologies: ["Git", "TypeScript", "Testing", "Code Review"],
    practices: [
      "Idempotência em operações críticas",
      "Observabilidade (logs, métricas, traces)",
      "Modelagem de domínio",
      "Versionamento de APIs",
      "Segurança e RLS",
      "Testes automatizados",
      "Documentação técnica"
    ]
  }
];

export interface Architecture {
  id: string;
  title: string;
  tagline: string;       // frase curta para o card
  description: string;  // descrição completa para o modal
  problem: string;       // qual problema resolve
  approach: string;      // como resolve
  keyPrinciples: string[];
  whenToUse: string[];
  tags: string[];
  nodes: {
    id: string;
    label: string;
    description?: string;
    type: 'source' | 'process' | 'storage' | 'output';
  }[];
  connections: {
    from: string;
    to: string;
  }[];
}

export const architectures: Architecture[] = [
  {
    id: "eventos-dedup",
    title: "Pipeline de Eventos e Deduplicação",
    tagline: "Ingestão de eventos tolerante a falhas, sem duplicidade.",
    description: "Padrão para receber e processar eventos (webhooks, integrações, filas) de forma segura, garantindo que reentregas, falhas intermitentes e reprocessos nunca gerem dados duplicados ou estados inconsistentes.",
    problem: "Sistemas distribuídos entregam eventos mais de uma vez. Webhooks retentam, filas reprocessam, integrações falham e reconectam. Sem um mecanismo explícito, cada reentrega pode criar duplicatas, gerar cobrança dupla, movimentar um lead duas vezes ou quebrar dashboards.",
    approach: "Cada evento recebe uma chave de idempotência gerada na origem (ou derivada do payload). Na ingestão, a chave é verificada antes de processar — eventos já vistos são ignorados silenciosamente. O estado do processamento fica registrado, permitindo reprocesso seguro a qualquer momento.",
    keyPrinciples: [
      "Idempotência por chave: o mesmo evento processado N vezes tem o mesmo efeito que 1 vez.",
      "Separação entre recepção e processamento: ingestão rápida, lógica de negócio assíncrona.",
      "Trilha de auditoria: cada evento registra timestamp, origem e status de processamento.",
      "Reprocesso explícito: há diferença entre reprocessar intencionalmente e reentrega acidental.",
    ],
    whenToUse: [
      "Integração com plataformas externas via webhook (e-commerce, CRM, pagamentos).",
      "Pipelines de dados com múltiplas fontes que podem enviar o mesmo dado.",
      "Qualquer fluxo onde a falha de rede ou retry pode causar processamento duplo.",
    ],
    tags: ["Eventos", "Idempotência", "Webhooks", "Dedupe", "Auditoria"],
    nodes: [
      { id: "source",   label: "Fonte de eventos",   description: "Webhook, fila ou integração externa que entrega o evento.", type: "source" },
      { id: "ingest",   label: "Ingestão",            description: "Recebe o evento, extrai a chave de idempotência e registra.", type: "process" },
      { id: "validate", label: "Validação de schema", description: "Verifica estrutura e campos obrigatórios do payload.", type: "process" },
      { id: "dedupe",   label: "Deduplicação",        description: "Consulta a chave; ignora se já processado, prossegue se novo.", type: "process" },
      { id: "persist",  label: "Persistência",        description: "Grava o evento e atualiza o estado do processamento.", type: "storage" },
      { id: "notify",   label: "Downstream",          description: "Dispara consequências: notificação, integração, jobs.", type: "output" },
    ],
    connections: [
      { from: "source",   to: "ingest" },
      { from: "ingest",   to: "validate" },
      { from: "validate", to: "dedupe" },
      { from: "dedupe",   to: "persist" },
      { from: "persist",  to: "notify" },
    ],
  },
  {
    id: "webhooks-auditoria",
    title: "Integração via Webhooks com Auditoria",
    tagline: "Recepção segura de eventos externos com rastreabilidade completa.",
    description: "Padrão para expor endpoints que recebem eventos de sistemas externos (e-commerce, CRM, pagamentos) com autenticação, validação de schema, log de auditoria imutável e separação entre recepção e processamento.",
    problem: "Ao integrar com sistemas externos via webhook, dois problemas recorrentes surgem: (1) não há como saber o que chegou, quando chegou e se foi processado corretamente; (2) payloads malformados, autenticações inválidas ou picos de carga podem corromper dados ou travar o sistema receptor.",
    approach: "O endpoint de recepção faz apenas três coisas: autentica a origem, valida o schema do payload e grava o evento bruto na fila/log de auditoria. O processamento real acontece de forma assíncrona, desacoplado da recepção. Isso garante resposta rápida ao emissor (200 OK imediato) e rastreabilidade total do que foi recebido.",
    keyPrinciples: [
      "Recepção síncrona, processamento assíncrono: o endpoint responde rápido e nunca tranca.",
      "Log imutável na entrada: tudo que chega é gravado antes de qualquer processamento.",
      "Validação de schema como portão: payloads inválidos são rejeitados antes de entrar na lógica.",
      "Auditoria com correlation_id: cada evento pode ser rastreado ponta a ponta.",
    ],
    whenToUse: [
      "Receber eventos de plataformas como VTEX, Stripe, Kommo, Evolution API ou qualquer SaaS.",
      "Integrações críticas onde precisar provar 'o que chegou e quando' tem valor operacional.",
      "Sistemas com SLA de resposta (<500ms) que não podem bloquear na lógica de negócio.",
    ],
    tags: ["Webhooks", "Auditoria", "Autenticação", "Schema Validation", "Async"],
    nodes: [
      { id: "webhook",  label: "Webhook externo",     description: "Evento enviado por plataforma externa (CRM, pagamento, e-commerce).", type: "source" },
      { id: "auth",     label: "Autenticação",         description: "Valida assinatura HMAC ou token do emissor.", type: "process" },
      { id: "validate", label: "Validação de schema",  description: "Confirma campos obrigatórios e tipos do payload.", type: "process" },
      { id: "audit",    label: "Log de auditoria",     description: "Grava o payload bruto com timestamp, origem e correlation_id.", type: "storage" },
      { id: "process",  label: "Processamento async",  description: "Executa a lógica de negócio desacoplada da recepção.", type: "process" },
      { id: "response", label: "Resposta 200 OK",      description: "Retorna confirmação imediata ao emissor.", type: "output" },
    ],
    connections: [
      { from: "webhook",  to: "auth" },
      { from: "auth",     to: "validate" },
      { from: "validate", to: "audit" },
      { from: "audit",    to: "process" },
      { from: "audit",    to: "response" },
      { from: "process",  to: "response" },
    ],
  },
  {
    id: "camadas-dados",
    title: "Camadas Raw, Curated e Analytics",
    tagline: "Dados organizados em camadas para reprocesso seguro e consumo analítico.",
    description: "Padrão de modelagem de dados em três camadas independentes: Raw (dado bruto, imutável), Curated (dado limpo e normalizado) e Analytics (views e agregações para consumo). Permite evoluir qualquer camada sem impactar as outras.",
    problem: "Em sistemas que recebem dados de múltiplas fontes, misturar dado bruto com dado transformado cria um problema sério: qualquer reprocesso pode sobrescrever ou corromper o histórico. Além disso, a lógica de transformação acaba sendo replicada no frontend, em jobs e em queries ad-hoc, criando inconsistências.",
    approach: "Cada dado percorre três camadas com responsabilidades distintas. A camada Raw recebe e persiste o dado exatamente como chegou — imutável. A camada Curated aplica normalização, limpeza e enriquecimento. A camada Analytics expõe views e agregações para consumo por dashboards e APIs. O reprocesso é sempre possível e seguro, pois o dado bruto original permanece intacto.",
    keyPrinciples: [
      "Raw é imutável: nenhuma transformação toca o dado original.",
      "Curated tem schema estável: contrato claro para quem consome.",
      "Analytics via views: lógica centralizada no banco, não no frontend.",
      "Reprocesso seguro: qualquer camada pode ser reconstruída a partir da anterior.",
    ],
    whenToUse: [
      "Pipelines com múltiplas fontes heterogêneas (webhooks, planilhas, APIs, scraping).",
      "Sistemas com dashboards que precisam de dados confiáveis e sem lógica no cliente.",
      "Projetos com requisito de auditoria, histórico ou capacidade de reprocesso.",
    ],
    tags: ["Data Pipeline", "Analytics", "PostgreSQL", "Views", "Governança"],
    nodes: [
      { id: "sources",  label: "Fontes de dados",  description: "Webhooks, APIs, planilhas, scraping ou eventos internos.", type: "source" },
      { id: "raw",      label: "Camada Raw",        description: "Persistência imutável do dado bruto com timestamp e origem.", type: "storage" },
      { id: "transform",label: "Transformação",     description: "Normalização, limpeza, enriquecimento e validação de qualidade.", type: "process" },
      { id: "curated",  label: "Camada Curated",    description: "Dado limpo com schema estável, pronto para uso e reprocesso.", type: "storage" },
      { id: "agg",      label: "Agregações",        description: "Cálculos, consolidações e lógica de negócio no banco.", type: "process" },
      { id: "analytics",label: "Analytics / Views", description: "Views materializadas e endpoints prontos para dashboards.", type: "output" },
    ],
    connections: [
      { from: "sources",   to: "raw" },
      { from: "raw",       to: "transform" },
      { from: "transform", to: "curated" },
      { from: "curated",   to: "agg" },
      { from: "agg",       to: "analytics" },
    ],
  },
  {
    id: "funil-crm",
    title: "Orquestração de Funil com CRM",
    tagline: "Estado do lead centralizado, funil rastreável e métricas confiáveis.",
    description: "Padrão para integrar captação, qualificação e movimentação de leads em um funil orquestrado, com estado persistido fora do CRM. Resolve a dependência total do CRM como fonte única de verdade, permitindo rastreabilidade, reprocesso e métricas independentes.",
    problem: "A maioria dos times comerciais usa o CRM como única fonte de verdade — mas CRMs são otimizados para UX, não para consistência de dados. Leads se perdem, etapas são puladas, eventos não são registrados e as métricas do painel dependem de quem lembrou de atualizar o card.",
    approach: "O estado do lead passa a ser gerenciado fora do CRM, em uma tabela própria com histórico de transições. O CRM recebe atualizações via integração, mas deixa de ser a fonte de verdade operacional. Eventos de qualificação, encaminhamento, agendamento e outcome são registrados na base e consolidados em views analíticas.",
    keyPrinciples: [
      "Estado do lead fora do CRM: independência e controle total sobre transições.",
      "Trilha de eventos: cada decisão registrada com timestamp, origem e contexto.",
      "CRM como output, não como fonte: o CRM reflete o que aconteceu, não define.",
      "Views analíticas: métricas do funil geradas no banco, não por exports manuais.",
    ],
    whenToUse: [
      "Operações com CRM externo (Kommo, Pipedrive, HubSpot) onde o controle de estado é crítico.",
      "Funis com múltiplos canais de entrada que precisam ser normalizados.",
      "Times que precisam de métricas do funil sem depender de atualizações manuais no CRM.",
    ],
    tags: ["CRM", "Funil", "Automação", "Estado", "Métricas"],
    nodes: [
      { id: "lead",    label: "Captação de lead",  description: "Entrada pelo formulário, WhatsApp, anúncio ou integração.", type: "source" },
      { id: "qualify", label: "Qualificação",       description: "Regras de ICP, scoring e roteamento por critério.", type: "process" },
      { id: "state",   label: "Estado do lead",     description: "Tabela de estado com histórico de transições e contexto.", type: "storage" },
      { id: "crm",     label: "Integração CRM",     description: "Sincronização de pipeline, atividades e atualizações.", type: "process" },
      { id: "action",  label: "Ação / Follow-up",   description: "Disparo de automações: notificação, agendamento, tarefa.", type: "process" },
      { id: "metrics", label: "Views de métricas",  description: "Consolidação analítica do funil por etapa, origem e período.", type: "output" },
    ],
    connections: [
      { from: "lead",    to: "qualify" },
      { from: "qualify", to: "state" },
      { from: "state",   to: "crm" },
      { from: "state",   to: "action" },
      { from: "state",   to: "metrics" },
    ],
  },
  {
    id: "multi-tenant-rls",
    title: "Arquitetura Multi-tenant com RLS",
    tagline: "Isolamento de dados por tenant no banco, sem lógica extra na aplicação.",
    description: "Padrão para construir sistemas SaaS onde múltiplos clientes (tenants) compartilham a mesma infraestrutura, mas com isolamento total de dados garantido por Row Level Security (RLS) no PostgreSQL. Elimina a necessidade de filtros manuais por tenant na aplicação.",
    problem: "Em sistemas multi-tenant, a abordagem mais simples é filtrar `WHERE org_id = ?` em cada query — mas isso é frágil. Uma query esquecida expõe dados de outro cliente. Testar todos os cenários é difícil. E quando o sistema cresce, garantir isolamento vira um problema de revisão de código constante.",
    approach: "A segregação é resolvida no banco com RLS: policies que automaticamente limitam SELECT, INSERT, UPDATE e DELETE ao tenant do usuário autenticado, derivado do JWT. A aplicação passa o token, o banco aplica o filtro. Não importa qual query for executada — o RLS garante que os dados retornados pertencem ao tenant correto.",
    keyPrinciples: [
      "RLS como camada de segurança: isolamento garantido independente da query.",
      "org_id derivado do JWT: o token carrega o contexto do tenant.",
      "Roles distintas: pinn_admin vê tudo, customer_admin vê seu tenant, user vê o permitido.",
      "Testes de isolamento: validar que um tenant não consegue acessar dados de outro.",
    ],
    whenToUse: [
      "Plataformas SaaS com múltiplos clientes usando a mesma base de dados.",
      "Sistemas com requisitos de compliance onde vazamento entre tenants é crítico.",
      "Projetos Supabase onde RLS é a camada de autorização principal.",
    ],
    tags: ["Multi-tenant", "RLS", "PostgreSQL", "Supabase", "SaaS", "Segurança"],
    nodes: [
      { id: "auth",    label: "Autenticação JWT",    description: "Token com claims do usuário, incluindo org_id e role.", type: "source" },
      { id: "rls",     label: "Row Level Security",  description: "Policies no banco que filtram dados automaticamente por org_id.", type: "process" },
      { id: "roles",   label: "Roles e permissões",  description: "admin, customer_admin, user — cada um com visibilidade diferente.", type: "process" },
      { id: "data",    label: "Dados do tenant",     description: "Tabelas com org_id; o RLS garante que cada tenant vê apenas o seu.", type: "storage" },
      { id: "api",     label: "API / Edge Function", description: "Passa o JWT; o banco aplica o isolamento sem filtros manuais.", type: "output" },
    ],
    connections: [
      { from: "auth",  to: "rls" },
      { from: "rls",   to: "roles" },
      { from: "roles", to: "data" },
      { from: "data",  to: "api" },
    ],
  },
  {
    id: "notificacao-outbox",
    title: "Fila de Notificações com Outbox Pattern",
    tagline: "Notificações assíncronas garantidas, sem perda em falhas de rede.",
    description: "Padrão para enviar notificações (e-mail, WhatsApp, in-app) de forma confiável, usando uma tabela de outbox como buffer intermediário. Resolve o problema de notificações perdidas quando o serviço externo está indisponível no momento do evento.",
    problem: "Enviar uma notificação diretamente no meio de uma transação é arriscado: se o serviço de e-mail ou WhatsApp estiver fora, a notificação se perde silenciosamente. Sem retentativa, o usuário nunca recebe. Com retentativa ingênua, o mesmo evento pode gerar múltiplas notificações.",
    approach: "Em vez de chamar o serviço de notificação diretamente, o evento grava um registro na tabela de outbox como parte da mesma transação. Um worker periódico lê os registros pendentes, envia a notificação e marca como processado. Se o envio falhar, o registro permanece para retry. Idempotência garante que cada notificação seja enviada exatamente uma vez.",
    keyPrinciples: [
      "Outbox transacional: a notificação é gravada na mesma transação do evento.",
      "Worker assíncrono: o envio real acontece fora do fluxo crítico.",
      "Retentativa controlada: falhas são tratadas com backoff, não perdidas.",
      "Idempotência: cada notificação tem ID único para evitar envio duplo.",
    ],
    whenToUse: [
      "Sistemas que enviam e-mail, WhatsApp ou push notification em resposta a eventos.",
      "Qualquer fluxo onde 'não receber a notificação' causa problema operacional.",
      "Integrações com APIs de terceiros (SMTP, Evolution API) que podem ter instabilidade.",
    ],
    tags: ["Notificações", "Outbox Pattern", "Async", "Retry", "WhatsApp", "E-mail"],
    nodes: [
      { id: "event",   label: "Evento de negócio",  description: "Ticket criado, lead qualificado, SLA estourado, etc.", type: "source" },
      { id: "outbox",  label: "Tabela de outbox",   description: "Registro transacional da notificação pendente com status.", type: "storage" },
      { id: "worker",  label: "Worker / pg_net",    description: "Processo que lê pendentes, tenta enviar e atualiza status.", type: "process" },
      { id: "channel", label: "Canal de envio",     description: "SMTP (e-mail), Evolution API (WhatsApp), in-app.", type: "process" },
      { id: "result",  label: "Status final",       description: "Sent, failed, retrying — rastreável na outbox.", type: "output" },
    ],
    connections: [
      { from: "event",  to: "outbox" },
      { from: "outbox", to: "worker" },
      { from: "worker", to: "channel" },
      { from: "channel",to: "result" },
      { from: "result", to: "outbox" },
    ],
  },
];
