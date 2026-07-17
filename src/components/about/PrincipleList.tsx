"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

interface PrincipleListProps {
  principles: EngineeringPrinciple[];
}

export function PrincipleList({ principles }: PrincipleListProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="border-t border-white/[0.07]">
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: Math.min(index * 0.06, 0.18),
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-[32px_1fr] gap-4 border-b border-white/[0.07] py-6 sm:grid-cols-[40px_1fr] sm:py-7"
        >
          <span className="pt-0.5 font-mono text-[9px] text-zinc-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm font-medium tracking-tight text-zinc-200">
              {principle.title}
            </h3>
            <p className="mt-2 max-w-lg text-xs leading-relaxed text-zinc-500">
              {principle.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
