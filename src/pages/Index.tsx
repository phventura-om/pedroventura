import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Calendar, Building2, Sparkles,
} from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter((p) => p.featured);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const badgeVariantMap: Record<string, string> = {
  "Tech Lead":  "badge-techlead",
  "Full Stack": "badge-fullstack",
  "Developer":  "badge-pm",
};

const Index = () => (
  <PageTransition>
    <main>

      {/* ─── HERO — centralizado e minimalista ──────────────────────────── */}
      <section className="flex flex-col items-center justify-center text-center
        min-h-[calc(100vh-3.5rem)] lg:min-h-screen px-6 pt-4 pb-12 relative overflow-hidden">

        {/* Glow ambiente */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(252 90% 74% / 0.07), transparent 70%)",
          }} />

        <motion.div className="relative z-10 flex flex-col items-center gap-5 max-w-xl">
          {/* Badge disponível */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="badge-available">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para projetos
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.5}>
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black"
              style={{
                background: "linear-gradient(135deg, hsl(252 90% 74% / 0.2), hsl(252 90% 74% / 0.05))",
                border: "1.5px solid hsl(252 90% 74% / 0.35)",
                color: "hsl(252 90% 82%)",
                textShadow: "0 0 24px hsl(252 90% 74% / 0.5)",
                boxShadow: "0 0 40px hsl(252 90% 74% / 0.12)",
              }}>
              PV
            </div>
          </motion.div>

          {/* Nome */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
            <h1 className="text-5xl md:text-6xl font-black tracking-[-0.05em] leading-none"
              style={{
                background: "linear-gradient(120deg, #fff 0%, hsl(252 90% 82%) 50%, hsl(200 80% 76%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Pedro Ventura
            </h1>
          </motion.div>

          {/* Cargo */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1.5}
            className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
              Software Engineer
            </p>
            <p className="text-sm" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
              Juiz de Fora, MG · Remoto
            </p>
          </motion.div>

          {/* Role badges */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="flex flex-wrap justify-center gap-2">
            <span className="badge-techlead">Tech Lead</span>
            <span className="badge-pm">Project Manager</span>
            <span className="badge-fullstack">Full Stack</span>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2.5}
            className="w-12 h-px" style={{ background: "hsl(var(--border))" }} />

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg"
              className="gap-2 rounded-xl font-bold px-6
                bg-primary text-primary-foreground hover:bg-primary/90
                shadow-xl shadow-primary/25 hover:scale-[1.02] transition-all duration-200">
              <Link to="/projetos">
                <Sparkles size={15} />
                Ver case studies
                <ArrowRight size={15} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline"
              className="gap-2 rounded-xl font-semibold border-border/70 hover:border-primary/50 hover:bg-primary/5">
              <Link to="/contato">
                Entrar em contato
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── EXPERIÊNCIA TIMELINE ──────────────────────────────────────────── */}
      <section className="container max-w-4xl px-6 py-20 border-t"
        style={{ borderColor: "hsl(var(--border))" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-12">
          <p className="section-label mb-2">Trajetória</p>
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle max-w-lg mt-2">
            Construída na prática — de campo a sistemas de produção, de freelance a Tech Lead.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "hsl(var(--border))" }} />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative sm:pl-14 pb-8 last:pb-0">

                {/* Dot */}
                <div className="absolute left-0 top-5 w-8 h-8 rounded-full border-2 hidden sm:flex items-center justify-center"
                  style={{
                    background: exp.current ? "hsl(var(--primary) / 0.15)" : "hsl(var(--background))",
                    borderColor: exp.current ? "hsl(var(--primary))" : "hsl(var(--border))",
                  }}>
                  <div className={cn("w-2.5 h-2.5 rounded-full",
                    exp.current ? "bg-primary animate-pulse" : "bg-muted-foreground/40"
                  )} />
                </div>

                <div className="card-hover cursor-default">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      {exp.journeyNote && (
                        <p className="text-xs font-medium mb-1.5 flex items-center gap-1.5"
                          style={{ color: "hsl(160 70% 44%)" }}>
                          <span className="w-1 h-1 rounded-full bg-current" />
                          {exp.journeyNote}
                        </p>
                      )}
                      <div className="flex items-center flex-wrap gap-2 mb-0.5">
                        <h3 className="font-semibold text-foreground text-base">{exp.role}</h3>
                        {exp.badge && (
                          <span className={cn(badgeVariantMap[exp.badge] ?? "chip")}>{exp.badge}</span>
                        )}
                        {exp.current && (
                          <span className="badge-available text-xs px-2 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Atual
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-semibold" style={{ color: "hsl(var(--primary))" }}>
                          {exp.company}
                        </p>
                        {exp.companyLabel && (
                          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                            · {exp.companyLabel}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0 space-y-0.5">
                      <div className="flex items-center justify-end gap-1 text-xs font-medium text-foreground/60">
                        <Calendar size={10} /> {exp.period}
                      </div>
                      <p className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{exp.duration}</p>
                      <div className="flex items-center justify-end gap-1 text-xs"
                        style={{ color: "hsl(var(--muted-foreground))" }}>
                        <Building2 size={10} /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-3">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "hsl(var(--muted-foreground))" }}>
                        <CheckCircle2 size={13} className="shrink-0 mt-0.5"
                          style={{ color: "hsl(var(--primary))" }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJETOS DESTAQUE ─────────────────────────────────────────────── */}
      <section className="container max-w-4xl px-6 py-20 border-t"
        style={{ borderColor: "hsl(var(--border))" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <p className="section-label mb-2">Projetos</p>
            <h2 className="section-title">Case studies em destaque</h2>
          </div>
          <Link to="/projetos"
            className="flex items-center gap-2 text-sm font-medium group"
            style={{ color: "hsl(var(--primary))" }}>
            Ver todos
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 items-stretch">
          {featuredProjects.map((project, i) => (
            <motion.div key={project.slug}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="h-full flex flex-col">
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="container max-w-4xl px-6 py-20 border-t"
        style={{ borderColor: "hsl(var(--border))" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="bento-card py-14 text-center max-w-xl mx-auto">
          <p className="section-label mb-3">Contato</p>
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Vamos construir algo
            <span className="text-gradient"> juntos?</span>
          </h2>
          <p className="text-sm leading-relaxed mb-7 max-w-sm mx-auto"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            Aberto a projetos de integração, backend, dados e automação.
            Prefiro conversas diretas — sem enrolação.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg"
              className="gap-2 rounded-xl font-bold bg-primary text-primary-foreground
                hover:bg-primary/90 shadow-xl shadow-primary/25 hover:scale-[1.02] transition-all">
              <Link to="/contato">Entrar em contato <ArrowRight size={16} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg"
              className="gap-2 rounded-xl border-border/70 hover:border-primary/40">
              <Link to="/projetos">Ver projetos</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  </PageTransition>
);

export default Index;
