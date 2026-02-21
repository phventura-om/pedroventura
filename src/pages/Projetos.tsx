import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PageTransition } from "@/components/layout/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, focusFilters } from "@/data/projects";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Projetos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [activeFocus, setActiveFocus] = useState<string | null>(searchParams.get("focus") || null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (activeFocus) params.set("focus", activeFocus);
    setSearchParams(params, { replace: true });
  }, [search, activeFocus, setSearchParams]);

  const activeFilter = focusFilters.find((f) => f.id === activeFocus);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(searchLower) ||
        project.organization.toLowerCase().includes(searchLower) ||
        project.headline.toLowerCase().includes(searchLower) ||
        project.tags.some((t) => t.toLowerCase().includes(searchLower));

      const matchesFocus =
        !activeFilter ||
        activeFilter.tags.some((t) => project.tags.includes(t));

      return matchesSearch && matchesFocus;
    });
  }, [search, activeFilter]);

  return (
    <PageTransition>
      <main className="container max-w-6xl px-6 pt-10 pb-24 lg:pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Projetos</p>
          <h1 className="section-title mb-3">Case studies</h1>
          <p className="section-subtitle">
            Integrações, pipelines de dados, automações e sistemas que funcionam em produção.
          </p>
        </motion.div>

        {/* Filtros de foco */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--muted-foreground))" }}>
            Filtrar por foco
          </p>
          <div className="flex flex-wrap gap-2">
            {focusFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFocus(activeFocus === f.id ? null : f.id)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  activeFocus === f.id
                    ? "text-primary-foreground"
                    : "border hover:border-primary/30 hover:text-foreground"
                )}
                style={
                  activeFocus === f.id
                    ? { background: "hsl(var(--primary))", border: "1px solid transparent" }
                    : {
                        background: "hsl(244 14% 11%)",
                        color: "hsl(var(--muted-foreground))",
                        borderColor: "hsl(var(--border))",
                      }
                }
              >
                {f.label}
              </button>
            ))}
            {activeFocus && (
              <button
                onClick={() => setActiveFocus(null)}
                className="rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-1.5
                  transition-colors duration-200"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <X size={12} /> Limpar
              </button>
            )}
          </div>
        </motion.div>

        {/* Busca */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 max-w-xl"
        >
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2"
              style={{ color: "hsl(var(--muted-foreground))" }} />
            <Input
              type="text"
              placeholder="Buscar por título, organização ou tecnologia..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-11 rounded-xl text-sm"
              style={{
                background: "hsl(244 14% 8%)",
                borderColor: "hsl(var(--border))"
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-foreground transition-colors"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid de projetos */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch"
            >
              {filteredProjects.map((project, i) => (
                <motion.div key={project.slug}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="h-full">
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-lg font-medium text-foreground/60">Nenhum projeto encontrado</p>
              <p className="text-sm mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                Tente outros filtros ou limpe a busca
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
};

export default Projetos;
