"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/types";
import { ServiceVisual } from "@/components/services/ServiceVisual";

interface CapabilityRowProps {
  service: Service;
  index: number;
}

export function CapabilityRow({ service, index }: CapabilityRowProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.04, 0.12),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid gap-7 border-t border-white/[0.06] py-9 last:border-b sm:py-10 lg:grid-cols-[36px_0.85fr_1.15fr_220px] lg:items-center lg:gap-8"
    >
      <span className="font-mono text-[9px] text-zinc-700">
        {String(index + 2).padStart(2, "0")}
      </span>

      <div>
        <h3 className="text-xl font-light leading-snug tracking-[-0.025em] text-zinc-200">
          {service.title}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          {service.summary}
        </p>
        <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
          {service.purpose}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
            Systems built
          </p>
          <ul className="mt-2.5 space-y-1.5">
            {service.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-center gap-2 text-[10px] text-zinc-500"
              >
                <span
                  aria-hidden="true"
                  className="h-px w-1.5 bg-zinc-700"
                />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-700">
            Engineering focus
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {service.engineeringFocus.map((focus) => (
              <span
                key={focus}
                className="rounded-md border border-white/[0.055] px-2 py-1 font-mono text-[8px] text-zinc-600"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ServiceVisual type={service.visual} />
    </motion.article>
  );
}
