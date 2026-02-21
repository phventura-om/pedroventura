import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { certifications, certsByCategory, type CertCategory } from "@/data/certifications";
import { BadgeCheck, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const levelLabel: Record<string, string> = {
  foundational: "Foundational",
  associate:    "Associate",
  professional: "Professional",
  specialist:   "Specialist",
  advanced:     "Advanced",
};

const levelColor: Record<string, string> = {
  foundational: "text-emerald-400 border-emerald-400/25 bg-emerald-400/8",
  associate:    "text-blue-400 border-blue-400/25 bg-blue-400/8",
  professional: "text-violet-400 border-violet-400/25 bg-violet-400/8",
  specialist:   "text-amber-400 border-amber-400/25 bg-amber-400/8",
  advanced:     "text-rose-400 border-rose-400/25 bg-rose-400/8",
};

const categoryKeys = Object.keys(certsByCategory) as CertCategory[];

export default function Certificacoes() {
  const [activeCategory, setActiveCategory] = useState<CertCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <PageTransition>
      <main className="container max-w-5xl px-6 pt-10 pb-28 lg:pt-16">

        {/* Cabeçalho */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-2">
          <p className="section-label">Qualificações</p>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="section-title mb-3">
          Certificações &amp; Competências
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="section-subtitle max-w-2xl mb-10">
          Certificações formais, trilhas de especialização e domínios técnicos comprovados em produção.
          Cada competência foi aplicada em projetos reais — não só estudada.
        </motion.p>

        {/* Filtros */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 mr-1"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            <Filter size={13} />
            <span className="text-xs font-medium uppercase tracking-widest">Filtrar</span>
          </div>
          {[{ id: "all" as const, label: "Todas" },
            ...categoryKeys.map((k) => ({ id: k, label: certsByCategory[k] }))
          ].map(({ id, label }) => (
            <button key={id} onClick={() => setActiveCategory(id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border",
                activeCategory === id
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                  : "border-border/60 hover:border-primary/40 hover:text-foreground",
              )}
              style={{ color: activeCategory === id ? undefined : "hsl(var(--muted-foreground))" }}>
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid de certificações */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((cert, i) => (
            <motion.article
              key={cert.id}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i}
              whileHover={{ y: -2, transition: { duration: 0.18 } }}
              className="bento-card flex flex-col gap-4 cursor-default"
              style={{ borderColor: `${cert.color}22` }}
            >
              {/* Topo: logo + nível */}
              <div className="flex items-start justify-between">
                {/* Logo real da empresa/tech */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${cert.color}14`,
                    border: `1px solid ${cert.color}28`,
                  }}>
                  <img
                    src={cert.logoUrl}
                    alt={cert.issuer}
                    className="w-6 h-6 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style="font-size:11px;font-weight:700;color:${cert.color}">${cert.logoBadge}</span>`;
                      }
                    }}
                  />
                </div>
                <span className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full border",
                  levelColor[cert.level]
                )}>
                  {levelLabel[cert.level]}
                </span>
              </div>

              {/* Nome + emissor */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm leading-snug mb-0.5">
                  {cert.name}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {cert.description}
                </p>
              </div>

              {/* Skills */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t"
                  style={{ borderColor: "hsl(var(--border))" }}>
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded-md border"
                      style={{
                        background: `${cert.color}08`,
                        borderColor: `${cert.color}20`,
                        color: "hsl(var(--muted-foreground))",
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mt-12 bento-card flex items-start gap-4 max-w-2xl">
          <BadgeCheck size={18} className="shrink-0 mt-0.5" style={{ color: "hsl(var(--primary))" }} />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">
              Competências aplicadas em produção
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Todas as tecnologias listadas foram aplicadas em projetos reais com clientes e sistemas em produção
              — não apenas em ambientes de estudo. Cada skill tem rastreabilidade em case studies documentados.
            </p>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
