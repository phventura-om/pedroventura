import { motion } from "framer-motion";
import { StackCategory } from "@/data/stack";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StackSectionProps {
  category: StackCategory;
  index?: number;
}

export function StackSection({ category, index = 0 }: StackSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-premium"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
          <ChevronDown
            size={20}
            className={cn(
              "text-muted-foreground transition-transform mt-1",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-6 space-y-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech) => (
                <span key={tech} className="chip chip-accent">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Práticas
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.practices.map((practice) => (
                <li
                  key={practice}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
