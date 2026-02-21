import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const badgeClass: Record<string, string> = {
  "Tech Lead": "badge-techlead",
  "Full Stack": "badge-fullstack",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const mainImpact = project.impact?.find((m) => m.highlight) ?? project.impact?.[0];

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:rounded-2xl"
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="card-hover h-full flex flex-col"
      >
        {/* Header: número + categoria + badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-1 rounded-lg"
              style={{
                background: "hsl(252 90% 74% / 0.08)",
                color: "hsl(252 90% 74% / 0.5)",
                border: "1px solid hsl(252 90% 74% / 0.12)"
              }}>
              {num}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "hsl(var(--muted-foreground))" }}>
              {project.organization}
            </span>
          </div>
          {/* roleBadge removido da listagem */}
        </div>

        {/* Título */}
        <h3 className="font-bold text-lg leading-snug text-foreground
          group-hover:text-primary transition-colors duration-200 mb-3"
          style={{ letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>

        {/* Headline */}
        <p className="text-sm leading-relaxed flex-1 mb-4"
          style={{ color: "hsl(var(--muted-foreground))" }}>
          {project.headline}
        </p>

        {/* Métrica de impacto */}
        {mainImpact && (
          <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-xl"
            style={{
              background: "hsl(252 90% 74% / 0.07)",
              border: "1px solid hsl(252 90% 74% / 0.15)"
            }}>
            <TrendingUp size={13} style={{ color: "hsl(var(--primary))", flexShrink: 0 }} />
            <span className="text-xs font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
              <span style={{ color: "hsl(var(--primary))", fontWeight: 600 }}>
                {mainImpact.value}
              </span>{" "}
              {mainImpact.label}
            </span>
          </div>
        )}

        {/* Highlight line */}
        {project.highlightLine && (
          <div className="flex items-center gap-1.5 mb-4 text-xs font-medium"
            style={{ color: "hsl(var(--primary))" }}>
            <span className="w-1 h-1 rounded-full bg-current" />
            {project.highlightLine}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-semibold
          group-hover:gap-2.5 transition-all duration-200"
          style={{ color: "hsl(var(--primary))" }}>
          Ver case study
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
}
