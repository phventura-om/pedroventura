import { motion, type Easing } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlowNode {
  id: string;
  label: string;
  type: 'source' | 'process' | 'storage' | 'output';
}

interface ArchitectureFlowProps {
  nodes: FlowNode[];
  className?: string;
  animated?: boolean;
}

const nodeStyles = {
  source: "bg-primary/20 border-primary/40 text-primary",
  process: "bg-secondary border-border text-secondary-foreground",
  storage: "bg-muted border-border text-foreground",
  output: "bg-primary/10 border-primary/30 text-primary",
};

const easeOut: Easing = [0.0, 0.0, 0.2, 1];
const easeInOut: Easing = [0.4, 0, 0.2, 1];

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.4,
      ease: easeOut,
    },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: i * 0.12 + 0.2,
      duration: 0.3,
      ease: easeOut,
    },
  }),
};

const pulseVariants = {
  initial: { x: 0, opacity: 0 },
  animate: (i: number) => ({
    x: [0, 24],
    opacity: [0, 1, 1, 0],
    transition: {
      delay: i * 0.12 + 0.5,
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 2,
      ease: easeInOut,
    },
  }),
};

export function ArchitectureFlow({ nodes, className, animated = true }: ArchitectureFlowProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* Visual flow */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            custom={index}
            initial={animated ? "hidden" : "visible"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={nodeVariants}
            className="flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "px-4 py-2 rounded-lg border text-sm font-medium text-center min-w-[120px] cursor-default",
                "shadow-sm hover:shadow-md transition-shadow",
                nodeStyles[node.type]
              )}
            >
              {node.label}
            </motion.div>
            
            {index < nodes.length - 1 && (
              <div className="hidden sm:flex items-center relative">
                {/* Connector line */}
                <motion.div
                  custom={index}
                  initial={animated ? "hidden" : "visible"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={connectorVariants}
                  className="w-6 h-0.5 bg-border origin-left"
                />
                
                {/* Animated pulse dot */}
                {animated && (
                  <motion.div
                    custom={index}
                    initial="initial"
                    animate="animate"
                    variants={pulseVariants}
                    className="absolute left-0 w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Text fallback for accessibility */}
      <details className="text-xs text-muted-foreground">
        <summary className="cursor-pointer hover:text-foreground transition-colors">
          Descrição textual do fluxo
        </summary>
        <ol className="mt-2 ml-4 list-decimal space-y-1">
          {nodes.map((node) => (
            <li key={node.id}>{node.label}</li>
          ))}
        </ol>
      </details>
    </div>
  );
}
