import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, Shield, Lightbulb, ShieldCheck, Activity, Wrench, Plug, TrendingUp } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjetoDetalhe = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    return (
      <PageTransition>
        <main className="pt-10 lg:pt-16 container max-w-4xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/projetos">Voltar aos projetos</Link>
          </Button>
        </main>
      </PageTransition>
    );
  }

  const architectureNodes = project.architectureNodes.map((label, i) => ({
    id: `node-${i}`,
    label,
    type: (i === 0 ? "source" : i === project.architectureNodes.length - 1 ? "output" : i % 2 === 0 ? "storage" : "process") as 'source' | 'process' | 'storage' | 'output',
  }));

  const sectionDelay = 0.05;

  return (
    <PageTransition>
      <main className="pt-10 lg:pt-16">
        <article className="container max-w-4xl px-6 py-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar aos projetos
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
            layoutId={`project-card-${project.slug}`}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {project.organization}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              {project.headline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="chip chip-accent">
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Impacto / Resultados — primeiro para storytelling nível pleno */}
          {project.impact && project.impact.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">{t("projectDetail.impactTitle")}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.impact.map((metric, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border p-4 ${
                      metric.highlight
                        ? "border-primary/30 bg-primary/5"
                        : "border-border bg-card"
                    }`}
                  >
                    <p className="metric-value text-primary">{metric.value}</p>
                    <p className="metric-label mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-4">Contexto</h2>
            <p className="text-foreground/75 leading-relaxed">
              {project.context}
            </p>
          </motion.section>

          {/* What I built */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 2 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-4">O que eu construí</h2>
            <ul className="space-y-3">
              {project.whatIBuilt.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/75"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 3 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Arquitetura</h2>
            <div className="card-premium">
              <ArchitectureFlow nodes={architectureNodes} />
              {project.architectureDescription && (
                <p className="text-sm text-foreground/60 mt-4 pt-4 border-t border-border">
                  {project.architectureDescription}
                </p>
              )}
            </div>
          </motion.section>

          {/* Features - only for Hermes */}
          {project.features && project.features.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 3.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Wrench size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">Funcionalidades principais</h2>
              </div>
              <ul className="space-y-3">
                {project.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Integrations - only for Hermes */}
          {project.integrations && project.integrations.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 3.8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Plug size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">Integrações do Hermes</h2>
              </div>
              <ul className="space-y-3">
                {project.integrations.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 4 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-4">Stack</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.stack.map((category) => (
                <div key={category.category} className="card-premium">
                  <h3 className="text-sm font-medium text-primary mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Responsibilities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 5 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-4">
              Minhas responsabilidades
            </h2>
            <ul className="space-y-3">
              {project.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/75"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-4">
              Desafios e como resolvi
            </h2>
            <div className="space-y-4">
              {project.challenges.map((item, i) => (
                <div key={i} className="card-premium">
                  <p className="text-sm font-medium text-primary mb-2">
                    Desafio
                  </p>
                  <p className="text-foreground/75 mb-3">{item.challenge}</p>
                  <p className="text-sm font-medium text-primary mb-2">
                    Solução
                  </p>
                  <p className="text-foreground/75">{item.solution}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Decisions and trade-offs */}
          {project.decisions && project.decisions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">Decisões e trade-offs</h2>
              </div>
              <div className="space-y-3">
                {project.decisions.map((item, i) => (
                  <div key={i} className="card-premium py-4">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Decisão: {item.decision}
                    </p>
                    <p className="text-sm text-foreground/60">
                      Motivo: {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Reliability and governance */}
          {project.reliability && project.reliability.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 8 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">Confiabilidade e governança</h2>
              </div>
              <ul className="space-y-2">
                {project.reliability.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Observability */}
          {project.observability && project.observability.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 9 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Activity size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">Observabilidade</h2>
              </div>
              <ul className="space-y-2">
                {project.observability.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground/75"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Engineering practices - only for Hermes */}
          {project.engineeringPractices && project.engineeringPractices.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionDelay * 9.5 }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-4">Práticas de engenharia aplicadas</h2>
              <div className="card-premium">
                <ul className="space-y-2">
                  {project.engineeringPractices.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground/75"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}

          {/* Confidentiality note */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 10 }}
            className="border-t border-border pt-8 mb-12"
          >
            <div className="flex items-start gap-3 text-sm text-foreground/50">
              <Shield size={18} className="flex-shrink-0 mt-0.5" />
              <p>
                Alguns detalhes foram generalizados por confidencialidade,
                mantendo arquitetura e decisões técnicas.
              </p>
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionDelay * 11 }}
            className="space-y-6"
          >
            {/* Next project */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Próximo projeto</p>
              <Link
                to={`/projetos/${nextProject.slug}`}
                className="group block card-premium hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">
                      {nextProject.organization}
                    </p>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </h3>
                  </div>
                  <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>

            {/* Back to projects */}
            <div className="text-center pt-4">
              <Button asChild variant="outline" className="hover:border-primary/50">
                <Link to="/projetos" className="inline-flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Voltar aos projetos
                </Link>
              </Button>
            </div>
          </motion.section>
        </article>
      </main>
    </PageTransition>
  );
};

export default ProjetoDetalhe;

