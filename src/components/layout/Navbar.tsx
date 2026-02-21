import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = [
  { path: "/projetos",      label: "Projetos" },
  { path: "/stack",         label: "Stack" },
  { path: "/arquiteturas",  label: "Arquiteturas" },
  { path: "/certificacoes", label: "Certificações" },
  { path: "/contato",       label: "Contato" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto max-w-5xl rounded-2xl transition-all duration-300",
          scrolled
            ? "border border-border/60 bg-background/85 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border border-transparent bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link to="/"
            className="text-base font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Pedro<span className="text-gradient">Ventura</span>
            <span className="ml-1.5 text-xs font-mono px-1.5 py-0.5 rounded"
              style={{
                background: "hsl(252 90% 74% / 0.12)",
                color: "hsl(252 90% 80%)",
                border: "1px solid hsl(252 90% 74% / 0.2)"
              }}>
              dev
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link px-3 py-1.5 rounded-lg text-sm transition-all duration-200",
                  isActive(item.path)
                    ? "text-foreground bg-secondary"
                    : "hover:bg-secondary/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            {/* Mobile hamburger */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-xl
                text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border/50 md:hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
