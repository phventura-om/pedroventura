import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { useTranslation } from "react-i18next";

const Contato = () => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      icon: Linkedin,
      label: t("contact.linkedin.label"),
      href: "https://www.linkedin.com/in/phventura/",
      description: t("contact.linkedin.description"),
    },
    {
      icon: Mail,
      label: t("contact.email.label"),
      href: "mailto:passisventura@gmail.com",
      description: t("contact.email.description"),
    },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp.label"),
      href: "https://wa.me/5532999530416",
      description: t("contact.whatsapp.description"),
    },
  ];

  return (
    <PageTransition>
      <main className="pt-10 lg:pt-16">
        <section className="container max-w-4xl px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="section-title mb-4">{t("contact.title")}</h1>
            <p className="section-subtitle mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Simple form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-premium max-w-xl mx-auto"
          >
            <h2 className="text-lg font-semibold mb-6">{t("contact.form.title")}</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contato;

