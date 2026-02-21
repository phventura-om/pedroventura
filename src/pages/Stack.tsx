import { motion } from "framer-motion";
import { ShieldCheck, Database, Activity, Eye, Lock } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { StackSection } from "@/components/StackSection";
import { stackCategories } from "@/data/stack";
import { useTranslation } from "react-i18next";

const Stack = () => {
  const { t } = useTranslation();

  const engineeringPractices = [
    {
      id: "idempotencia",
      icon: ShieldCheck,
      title: t("stack.engineeringPractices.idempotency.title"),
      bullets: t("stack.engineeringPractices.idempotency.bullets", { returnObjects: true }) as string[]
    },
    {
      id: "camadas",
      icon: Database,
      title: t("stack.engineeringPractices.layers.title"),
      bullets: t("stack.engineeringPractices.layers.bullets", { returnObjects: true }) as string[]
    },
    {
      id: "auditoria",
      icon: Eye,
      title: t("stack.engineeringPractices.audit.title"),
      bullets: t("stack.engineeringPractices.audit.bullets", { returnObjects: true }) as string[]
    },
    {
      id: "observabilidade",
      icon: Activity,
      title: t("stack.engineeringPractices.observability.title"),
      bullets: t("stack.engineeringPractices.observability.bullets", { returnObjects: true }) as string[]
    },
    {
      id: "seguranca",
      icon: Lock,
      title: t("stack.engineeringPractices.security.title"),
      bullets: t("stack.engineeringPractices.security.bullets", { returnObjects: true }) as string[]
    }
  ];

  return (
    <PageTransition>
      <main className="pt-10 lg:pt-16">
        <section className="container max-w-4xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="section-title mb-4">{t("stack.title")}</h1>
            <p className="section-subtitle">
              {t("stack.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-4 mb-16">
            {stackCategories.map((category, i) => (
              <StackSection key={category.id} category={category} index={i} />
            ))}
          </div>

          {/* Práticas que eu aplico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">{t("stack.practices.title")}</h2>
            <p className="text-foreground/60 mb-8 max-w-2xl">
              {t("stack.practices.subtitle")}
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {engineeringPractices.map((practice, i) => (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="card-premium"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <practice.icon size={18} className="text-primary" />
                    <h3 className="text-sm font-semibold">{practice.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {practice.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-foreground/60"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Stack;

