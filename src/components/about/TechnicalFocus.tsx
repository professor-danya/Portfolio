"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface TechnicalFocusItem {
  title: string;
  detail: string;
}

interface TechnicalFocusProps {
  items: TechnicalFocusItem[];
}

export function TechnicalFocus({ items }: TechnicalFocusProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-y border-white/[0.07] py-8 sm:py-10"
    >
      <div className="mb-7 flex items-center justify-between gap-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
          Current technical focus
        </p>
        <span className="font-mono text-[9px] text-zinc-700">
          Continuously evolving
        </span>
      </div>

      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => (
          <div key={item.title}>
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-blue-200/70"
              />
              <span className="font-mono text-[8px] text-zinc-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 text-xs font-medium text-zinc-300">
              {item.title}
            </h3>
            <p className="mt-2 text-[10px] leading-relaxed text-zinc-600">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
