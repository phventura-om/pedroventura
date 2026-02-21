import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Menu, X, Github, Linkedin, Mail,
  House, Layers, Code2, GitBranch, BadgeCheck, MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = [
  { path: "/",             label: "Início",         icon: House,        exact: true  },
  { path: "/projetos",     label: "Projetos",        icon: Layers,       exact: false },
  { path: "/stack",        label: "Stack",           icon: Code2,        exact: false },
  { path: "/arquiteturas", label: "Arquiteturas",    icon: GitBranch,    exact: false },
  { path: "/certificacoes",label: "Certificações",   icon: BadgeCheck,   exact: false },
  { path: "/contato",      label: "Contato",         icon: MessageSquare,exact: false },
];

const socials = [
  { href: "https://linkedin.com/in/pedroventura", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/pedroventura",      icon: Github,   label: "GitHub"   },
  { href: "mailto:passisventura@gmail.com",        icon: Mail,     label: "Email"    },
];

function NavContent({ onClose }: { onClose?: () => void }) {
  const location = useLocation();

  const isActive = (path: string, exact: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <div className="flex flex-col h-full select-none">

      {/* ── Logo ─────────────────────────────────────── */}
      <Link to="/" onClick={onClose}
        className="flex items-center gap-3 mb-8 group px-1">
        {/* Avatar com glow sutil */}
        <div
          className="relative w-10 h-10 rounded-2xl flex items-center justify-center
            text-sm font-black shrink-0 transition-all duration-300 group-hover:scale-105"
          style={{
            background: "linear-gradient(135deg, hsl(252 90% 74% / 0.22), hsl(252 90% 74% / 0.06))",
            border: "1px solid hsl(252 90% 74% / 0.28)",
            color: "hsl(252 90% 85%)",
            boxShadow: "0 0 20px hsl(252 90% 74% / 0.12), inset 0 1px 0 hsl(252 90% 90% / 0.08)",
          }}>
          PV
          {/* Pulse dot online */}
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2"
            style={{
              background: "hsl(160 70% 44%)",
              borderColor: "hsl(244 22% 4%)",
            }} />
        </div>

        {/* Nome */}
        <div className="leading-none">
          <p className="text-sm font-extrabold tracking-tight text-foreground">
            Pedro<span style={{
              background: "linear-gradient(120deg, hsl(252 90% 80%), hsl(200 80% 72%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Ventura</span>
          </p>
          <p className="text-[10px] font-mono mt-0.5"
            style={{ color: "hsl(var(--muted-foreground) / 0.6)" }}>
            Software Engineer
          </p>
        </div>
      </Link>

      {/* ── Nav items ────────────────────────────────── */}
      <nav className="flex flex-col gap-0.5 flex-1">
        {navItems.map((item) => {
          const active = isActive(item.path, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                "relative flex items-center gap-3 pl-3.5 pr-3 py-2.5 rounded-xl text-sm font-medium",
                "transition-all duration-200 group/nav overflow-hidden",
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={active ? {
                background: "hsl(252 90% 74% / 0.08)",
              } : undefined}
            >
              {/* Barra de acento esquerda (ativa) */}
              {active && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full"
                  style={{ background: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              {/* Hover fill */}
              {!active && (
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover/nav:opacity-100 transition-opacity duration-200"
                  style={{ background: "hsl(244 14% 11%)" }} />
              )}

              {/* Icon */}
              <Icon
                size={15}
                className="relative z-10 shrink-0 transition-colors duration-200"
                style={{ color: active ? "hsl(var(--primary))" : undefined }}
              />

              {/* Label */}
              <span className="relative z-10 tracking-[-0.01em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── Bottom ───────────────────────────────────── */}
      <div className="mt-6 space-y-3">
        {/* Social icons */}
        <div className="flex items-center gap-1 px-1">
          {socials.map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200
                hover:bg-secondary/80 hover:text-foreground"
              style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Language */}
        <div className="px-1">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[220px] flex-col px-4 py-6 z-40"
        style={{
          background: "hsl(244 22% 4%)",
        }}>
        <NavContent />
      </aside>

      {/* ── Mobile Top Bar ──────────────────────────── */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5"
        style={{
          background: "hsl(244 22% 4% / 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}>
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black"
            style={{
              background: "hsl(252 90% 74% / 0.14)",
              border: "1px solid hsl(252 90% 74% / 0.24)",
              color: "hsl(252 90% 84%)",
            }}>
            PV
          </div>
          <span className="text-sm font-bold">
            Pedro
            <span style={{
              background: "linear-gradient(120deg, hsl(252 90% 80%), hsl(200 80% 72%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Ventura</span>
          </span>
        </Link>
        <button onClick={() => setOpen(true)}
          className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors hover:bg-secondary"
          style={{ color: "hsl(var(--muted-foreground))" }}>
          <Menu size={18} />
        </button>
      </header>

      {/* ── Mobile Drawer ───────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[260px] z-50 px-4 py-6"
              style={{
                background: "hsl(244 22% 4%)",
              }}>
              <div className="flex justify-end mb-2">
                <button onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-secondary"
                  style={{ color: "hsl(var(--muted-foreground))" }}>
                  <X size={16} />
                </button>
              </div>
              <NavContent onClose={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
