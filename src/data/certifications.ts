export type CertCategory = "automation" | "cloud" | "devops" | "programming" | "database" | "google";

// Simple Icons CDN: https://cdn.simpleicons.org/{slug} (white/themed via CSS filter)

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** URL do logo via Simple Icons CDN ou devicons */
  logoUrl: string;
  /** Fallback sigla se o logo não carregar */
  logoBadge: string;
  category: CertCategory;
  description: string;
  level: "foundational" | "associate" | "professional" | "specialist" | "advanced";
  color: string;
  year?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  // ─── Automação ───────────────────────────────────────────────────────────
  {
    id: "n8n-enterprise",
    name: "n8n Enterprise Specialist",
    issuer: "n8n.io",
    logoUrl: "https://cdn.simpleicons.org/n8n/ea4b71",
    logoBadge: "n8n",
    category: "automation",
    level: "specialist",
    color: "#ea4b71",
    description:
      "Especialização no nível Enterprise da plataforma n8n — focada em escalabilidade, governança e operação corporativa. Inclui domínio de SAML/SSO, LDAP, RBAC, histórico e controle de versão de fluxos, variáveis globais e deploy em Docker/Kubernetes com alta disponibilidade.",
    skills: ["SAML/SSO", "RBAC", "Docker/Kubernetes", "Version Control", "Self-hosted", "Governance"],
  },
  // ─── Cloud & Infra ───────────────────────────────────────────────────────
  {
    id: "aws",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    logoUrl: "https://cdn.simpleicons.org/amazonaws/FF9900",
    logoBadge: "AWS",
    category: "cloud",
    level: "foundational",
    color: "#FF9900",
    description:
      "Certificação foundational da AWS que valida compreensão dos serviços de nuvem, modelos de responsabilidade compartilhada, segurança básica, arquitetura na nuvem e cobrança/suporte. Base para todo o ecossistema AWS.",
    skills: ["EC2", "S3", "IAM", "VPC", "Lambda", "Cloud Architecture"],
  },
  {
    id: "vps",
    name: "VPS & Cloud Server Management",
    issuer: "Hostinger / Linux",
    logoUrl: "https://cdn.simpleicons.org/linux/ffffff",
    logoBadge: "VPS",
    category: "cloud",
    level: "associate",
    color: "#0080ff",
    description:
      "Administração de servidores Linux em VPS. Configuração de ambientes, gerenciamento de processos, firewall (UFW/iptables), NGINX, SSL, deploy de aplicações Node.js/Docker e monitoramento de recursos.",
    skills: ["Linux", "NGINX", "SSL/TLS", "Firewall", "Process Management", "SSH"],
  },
  {
    id: "docker",
    name: "Docker & Containers",
    issuer: "Docker Inc.",
    logoUrl: "https://cdn.simpleicons.org/docker/2496ED",
    logoBadge: "Docker",
    category: "devops",
    level: "associate",
    color: "#2496ED",
    description:
      "Domínio de containerização com Docker: criação de imagens, Dockerfiles otimizados, Docker Compose para orquestração local, volumes, redes e boas práticas de segurança em ambientes de produção.",
    skills: ["Dockerfile", "Docker Compose", "Volumes", "Networking", "CI/CD", "Registry"],
  },
  {
    id: "github",
    name: "GitHub Actions & Git Workflows",
    issuer: "GitHub · Microsoft",
    logoUrl: "https://cdn.simpleicons.org/github/ffffff",
    logoBadge: "GH",
    category: "devops",
    level: "associate",
    color: "#e6edf3",
    description:
      "Versionamento avançado com Git e GitHub: GitFlow, branching strategies, code review, proteção de branches e automação de pipelines CI/CD com GitHub Actions — deploy automatizado para VPS e integração cloud.",
    skills: ["Git", "GitHub Actions", "CI/CD", "GitFlow", "Code Review", "Secrets Management"],
  },
  // ─── Google ───────────────────────────────────────────────────────────────
  {
    id: "google-it-support",
    name: "Google IT Support Professional",
    issuer: "Google · Coursera",
    logoUrl: "https://cdn.simpleicons.org/google/4285F4",
    logoBadge: "G",
    category: "google",
    level: "professional",
    color: "#4285F4",
    description:
      "Certificação profissional do Google abrangendo suporte técnico de TI: fundamentos de hardware e redes, sistemas operacionais (Linux/Windows), administração de sistemas, infraestrutura e segurança da informação. Reconhecida pelo mercado como equivalente a nível superior em TI.",
    skills: ["Networking", "Linux", "Windows Admin", "IT Security", "Troubleshooting", "System Administration"],
  },
  {
    id: "google-it-automation",
    name: "Google IT Automation with Python",
    issuer: "Google · Coursera",
    logoUrl: "https://cdn.simpleicons.org/google/4285F4",
    logoBadge: "G+",
    category: "google",
    level: "advanced",
    color: "#4285F4",
    description:
      "Certificação avançada do Google focada em automação de TI com Python: scripts de automação, Git/GitHub, gerenciamento de recursos em escala (cloud), configuration management com Puppet e IaC. Prepara para roles como Systems Administrator e SRE.",
    skills: ["Python", "Git/GitHub", "Puppet", "Bash", "Cloud VMs", "Infrastructure as Code"],
  },
  // ─── Linguagens ──────────────────────────────────────────────────────────
  {
    id: "typescript",
    name: "TypeScript — Avançado",
    issuer: "Microsoft",
    logoUrl: "https://cdn.simpleicons.org/typescript/3178C6",
    logoBadge: "TS",
    category: "programming",
    level: "advanced",
    color: "#3178C6",
    description:
      "TypeScript avançado: sistema de tipos, generics, utility types, decorators, module resolution, strict mode e integração com Node.js, React e APIs REST. Base para codebases robustos e escaláveis.",
    skills: ["Generics", "Utility Types", "Strict Mode", "Decorators", "Type Guards"],
  },
  {
    id: "python",
    name: "Python — Data & Automation",
    issuer: "Python Institute · Google",
    logoUrl: "https://cdn.simpleicons.org/python/3776AB",
    logoBadge: "Py",
    category: "programming",
    level: "associate",
    color: "#3776AB",
    description:
      "Python aplicado a automação, processamento de dados, scripts de integração e web scraping. Uso de Pandas, BeautifulSoup, Requests e integração com APIs e bancos de dados.",
    skills: ["Pandas", "Requests", "BeautifulSoup", "Scraping", "Data Processing", "Automation"],
  },
  {
    id: "java",
    name: "Java — Fundamentos",
    issuer: "Oracle",
    logoUrl: "https://cdn.simpleicons.org/openjdk/ED8B00",
    logoBadge: "Java",
    category: "programming",
    level: "foundational",
    color: "#ED8B00",
    description:
      "Fundamentos de Java: POO, coleções, exceções, I/O, JDBC e padrões de projeto. Base para backend orientado a objetos e compreensão de sistemas corporativos com Spring.",
    skills: ["OOP", "Collections", "JDBC", "Design Patterns", "Spring Basics"],
  },
  {
    id: "csharp",
    name: "C# — .NET Fundamentals",
    issuer: "Microsoft",
    logoUrl: "https://cdn.simpleicons.org/csharp/9B4F96",
    logoBadge: "C#",
    category: "programming",
    level: "foundational",
    color: "#9B4F96",
    description:
      "Fundamentos de C# e .NET: POO, LINQ, async/await e consumo de APIs. Ecossistema Microsoft para backend, automação e integrações com sistemas corporativos.",
    skills: ["OOP", "LINQ", "Async/Await", "ASP.NET Basics", "API Consumption"],
  },
  {
    id: "css",
    name: "CSS & Tailwind CSS — Avançado",
    issuer: "W3C · Tailwind Labs",
    logoUrl: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
    logoBadge: "CSS",
    category: "programming",
    level: "advanced",
    color: "#38BDF8",
    description:
      "CSS avançado: Flexbox, Grid, animações, variáveis CSS e design responsivo. Tailwind CSS utility-first com customização de temas, dark mode e integração com componentes React modernos.",
    skills: ["Flexbox", "CSS Grid", "Animations", "CSS Variables", "Tailwind CSS", "Responsive Design"],
  },
  // ─── Databases ───────────────────────────────────────────────────────────
  {
    id: "sql",
    name: "SQL & Query Optimization",
    issuer: "PostgreSQL · Oracle",
    logoUrl: "https://cdn.simpleicons.org/postgresql/336791",
    logoBadge: "SQL",
    category: "database",
    level: "associate",
    color: "#336791",
    description:
      "SQL avançado: JOINs complexos, CTEs, window functions, índices, EXPLAIN ANALYZE e design de schema para multi-tenancy com RLS.",
    skills: ["CTEs", "Window Functions", "Indexing", "EXPLAIN ANALYZE", "RLS", "Schema Design"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL — Database Engineering",
    issuer: "PostgreSQL Global Development Group",
    logoUrl: "https://cdn.simpleicons.org/postgresql/336791",
    logoBadge: "PG",
    category: "database",
    level: "associate",
    color: "#336791",
    description:
      "Engenharia de banco de dados com PostgreSQL: triggers, stored procedures, RLS, particionamento, conexão pooling e design de pipelines analíticos em camadas (raw → curated → analytics).",
    skills: ["Triggers", "RLS", "Partitioning", "Connection Pooling", "Analytical Pipelines"],
  },
  {
    id: "supabase",
    name: "Supabase — Backend as a Service",
    issuer: "Supabase Inc.",
    logoUrl: "https://cdn.simpleicons.org/supabase/3ECF8E",
    logoBadge: "SB",
    category: "database",
    level: "associate",
    color: "#3ECF8E",
    description:
      "Supabase em produção: autenticação (JWT, OAuth, PKCE), RLS granular, Realtime, Storage, Edge Functions e integração com React/Next.js. Arquitetura multi-tenant e boas práticas de segurança.",
    skills: ["Auth", "RLS", "Realtime", "Edge Functions", "Storage", "Multi-tenancy"],
  },
];

export const certsByCategory: Record<CertCategory, string> = {
  automation: "Automação",
  cloud: "Cloud & Infra",
  devops: "DevOps & CI/CD",
  programming: "Linguagens",
  database: "Banco de Dados",
  google: "Google",
};
