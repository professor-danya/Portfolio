"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/types";
import { ServiceVisual } from "@/components/services/ServiceVisual";

interface ServiceFeatureProps {
  service: Service;
}

export function ServiceFeature({ service }: ServiceFeatureProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0c0d0f] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-8 lg:p-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-[radial-gradient(circle_at_top_right,rgba(191,219,254,0.045),transparent_68%)]"
      />

      <div className="relative grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="rounded-full border border-blue-200/15 bg-blue-200/[0.05] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-blue-100/70">
              Primary capability
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
              01
            </span>
          </div>

          <h3 className="mt-6 text-3xl font-light leading-tight tracking-[-0.035em] text-zinc-50 sm:text-4xl">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {service.summary}
          </p>

          <div className="mt-7 border-t border-white/[0.06] pt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
              Where it fits
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              {service.purpose}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
              Systems built
            </p>
            <ul className="mt-3 space-y-2">
              {service.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="flex items-center gap-2.5 text-xs text-zinc-400"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-2 bg-zinc-700"
                  />
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {service.engineeringFocus.map((focus) => (
              <span
                key={focus}
                className="rounded-md border border-white/[0.065] bg-white/[0.018] px-2.5 py-1.5 font-mono text-[9px] text-zinc-500"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        <ServiceVisual type={service.visual} featured />
      </div>
    </motion.article>
  );
}
