import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Layers, Lightbulb, CheckCircle2, Zap } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { architectures, type Architecture } from "@/data/stack";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const nodeTypeStyle: Record<string, string> = {
  source:  "bg-blue-500/10 border-blue-500/30 text-blue-300",
  process: "bg-primary/10 border-primary/30 text-primary",
  storage: "bg-amber-500/10 border-amber-500/30 text-amber-300",
  output:  "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
};

const nodeTypeLegend: Record<string, string> = {
  source:  "Entrada",
  process: "Processo",
  storage: "Armazenamento",
  output:  "Saída",
};

function ArchModal({ arch, onClose }: { arch: Architecture; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.22 }}
        className="bento-card max-w-3xl w-full max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {arch.tags.map((t) => (
                <span key={t} className="chip text-xs">{t}</span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-foreground mb-1">{arch.title}</h2>
            <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
              {arch.description}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
            <X size={18} />
          </Button>
        </div>

        {/* Problema */}
        <div className="mb-5 p-4 rounded-xl border"
          style={{ background: "hsl(var(--card) / 0.5)", borderColor: "hsl(var(--border))" }}>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={14} style={{ color: "hsl(var(--primary))" }} />
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "hsl(var(--primary))" }}>
              Problema que resolve
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            {arch.problem}
          </p>
        </div>

        {/* Abordagem */}
        <div className="mb-5 p-4 rounded-xl border"
          style={{ background: "hsl(var(--card) / 0.5)", borderColor: "hsl(var(--border))" }}>
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} style={{ color: "hsl(160 70% 44%)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "hsl(160 70% 44%)" }}>
              Como funciona
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            {arch.approach}
          </p>
        </div>

        {/* Componentes do fluxo */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            Componentes do fluxo
          </p>
          <div className="space-y-2">
            {arch.nodes.map((node, i) => (
              <div key={node.id} className="flex items-start gap-3 p-3 rounded-lg border"
                style={{ borderColor: "hsl(var(--border))" }}>
                <div className="flex items-center gap-2 shrink-0 w-36">
                  <span className="text-xs font-mono text-foreground/40 w-4">{i + 1}</span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-md border font-medium",
                    nodeTypeStyle[node.type]
                  )}>
                    {nodeTypeLegend[node.type]}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground">{node.label}</span>
                  {node.description && (
                    <span className="text-xs ml-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                      — {node.description}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Princípios */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            Princípios-chave
          </p>
          <ul className="space-y-2">
            {arch.keyPrinciples.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{ color: "hsl(var(--muted-foreground))" }}>
                <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: "hsl(var(--primary))" }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quando usar */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            Quando aplicar
          </p>
          <ul className="space-y-2">
            {arch.whenToUse.map((w, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{ color: "hsl(var(--muted-foreground))" }}>
                <ArrowRight size={13} className="shrink-0 mt-0.5" style={{ color: "hsl(160 70% 44%)" }} />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Arquiteturas = () => {
  const [selectedArch, setSelectedArch] = useState<Architecture | null>(null);

  return (
    <PageTransition>
      <main className="container max-w-6xl px-6 pt-10 lg:pt-16 pb-28">

        {/* Cabeçalho */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-4">
          <p className="section-label">Engenharia</p>
        </motion.div>
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="section-title mb-4">
          Arquiteturas
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="section-subtitle max-w-2xl mb-12">
          Blueprints dos padrões de engenharia que aplico em produção. Cada arquitetura resolve um problema real — clique para ver problema, abordagem e princípios em detalhe.
        </motion.p>

        {/* Legenda de tipos */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="flex flex-wrap items-center gap-3 mb-10 px-1">
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>Legenda:</span>
          {Object.entries(nodeTypeLegend).map(([type, label]) => (
            <span key={type} className={cn(
              "text-xs px-2.5 py-1 rounded-md border font-medium",
              nodeTypeStyle[type]
            )}>
              {label}
            </span>
          ))}
        </motion.div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {architectures.map((arch, i) => (
            <motion.button
              key={arch.id}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              onClick={() => setSelectedArch(arch)}
              className="bento-card text-left group cursor-pointer flex flex-col gap-4 h-full"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {arch.tags.slice(0, 3).map((t) => (
                  <span key={t} className="chip text-xs">{t}</span>
                ))}
                {arch.tags.length > 3 && (
                  <span className="chip text-xs">+{arch.tags.length - 3}</span>
                )}
              </div>

              {/* Título + tagline */}
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-base mb-1.5 group-hover:text-primary transition-colors">
                  {arch.title}
                </h3>
                <p className="text-sm leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}>
                  {arch.tagline}
                </p>
              </div>

              {/* Componentes */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-2 font-medium"
                  style={{ color: "hsl(var(--muted-foreground))" }}>
                  Componentes
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {arch.nodes.slice(0, 5).map((node) => (
                    <span key={node.id}
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-md border",
                        nodeTypeStyle[node.type]
                      )}>
                      {node.label}
                    </span>
                  ))}
                  {arch.nodes.length > 5 && (
                    <span className="chip text-xs">+{arch.nodes.length - 5}</span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-medium mt-auto pt-2 border-t"
                style={{
                  borderColor: "hsl(var(--border))",
                  color: "hsl(var(--primary))",
                }}>
                <Layers size={12} />
                Ver problema, fluxo e princípios
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedArch && (
          <ArchModal arch={selectedArch} onClose={() => setSelectedArch(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Arquiteturas;

