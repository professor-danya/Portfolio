"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ServiceVisual as ServiceVisualType } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceVisualProps {
  type: ServiceVisualType;
  featured?: boolean;
}

const compactVisuals: Record<
  Exclude<ServiceVisualType, "ai">,
  { label: string; items: string[] }
> = {
  telegram: {
    label: "Assistant activity",
    items: ["Command received", "Context loaded", "Action held"],
  },
  python: {
    label: "Job runner",
    items: ["Input validated", "Task executing", "Output prepared"],
  },
  api: {
    label: "Integration status",
    items: ["Authentication", "Webhook route", "Retry policy"],
  },
  web: {
    label: "Application state",
    items: ["Interface", "Data layer", "Access control"],
  },
  data: {
    label: "Processing pipeline",
    items: ["Ingest", "Normalize", "Validate"],
  },
  crm: {
    label: "Workflow state",
    items: ["Record updated", "Review requested", "Action queued"],
  },
};

function VisualChrome({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <div className="flex h-10 items-center border-b border-white/[0.06] px-3.5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
      </div>
      <span className="ml-3 truncate font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
        {label}
      </span>
      <span className="ml-auto flex items-center gap-1.5 font-mono text-[8px] text-zinc-600">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-200/75 shadow-[0_0_8px_rgba(191,219,254,0.35)]" />
        {status}
      </span>
    </div>
  );
}

function AiAutomationVisual({ reducedMotion }: { reducedMotion: boolean }) {
  const stages = [
    ["01", "Receive", "Event"],
    ["02", "Interpret", "AI task"],
    ["03", "Validate", "Schema"],
    ["04", "Review", "Human"],
    ["05", "Act", "Integration"],
  ];

  return (
    <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#090a0c] shadow-[0_30px_90px_-45px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.04)]">
      <VisualChrome label="AI automation system" status="Test run" />

      <div className="p-4 sm:p-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
              Workflow / Request processing
            </p>
            <p className="mt-1.5 text-sm font-medium text-zinc-200">
              Controlled AI execution
            </p>
          </div>
          <span className="w-fit rounded-full border border-blue-200/15 bg-blue-200/[0.05] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-blue-100/70">
            Awaiting review
          </span>
        </div>

        <div className="mt-7 grid gap-2 sm:grid-cols-5">
          {stages.map(([number, title, detail], index) => (
            <motion.div
              key={title}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="relative rounded-xl border border-white/[0.065] bg-white/[0.018] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-zinc-700">
                  {number}
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    index < 3 ? "bg-blue-200/70" : "bg-zinc-700",
                  )}
                />
              </div>
              <p className="mt-4 text-[10px] font-medium text-zinc-300">
                {title}
              </p>
              <p className="mt-1 font-mono text-[8px] text-zinc-600">
                {detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_180px]">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
              Current activity
            </p>
            <p className="mt-2 text-[10px] leading-relaxed text-zinc-500">
              Output validated. External action remains paused until review is
              complete.
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-600">
              Controls
            </p>
            <div className="mt-2 flex gap-1.5">
              <span className="rounded-md border border-white/[0.07] px-2 py-1 font-mono text-[7px] text-zinc-600">
                Inspect
              </span>
              <span className="rounded-md border border-blue-200/15 bg-blue-200/[0.05] px-2 py-1 font-mono text-[7px] text-blue-100/70">
                Approve
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompactVisual({
  type,
  reducedMotion,
}: {
  type: Exclude<ServiceVisualType, "ai">;
  reducedMotion: boolean;
}) {
  const visual = compactVisuals[type];

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#090a0c]">
      <VisualChrome label={visual.label} status="Ready" />
      <div className="space-y-2 p-3">
        {visual.items.map((item, index) => (
          <motion.div
            key={item}
            initial={reducedMotion ? false : { opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="flex items-center gap-2.5 rounded-lg border border-white/[0.055] bg-white/[0.018] px-2.5 py-2"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                index === 0 ? "bg-blue-200/75" : "bg-zinc-700",
              )}
            />
            <span className="truncate font-mono text-[8px] text-zinc-500">
              {item}
            </span>
            <span className="ml-auto font-mono text-[7px] uppercase text-zinc-700">
              0{index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ServiceVisual({
  type,
  featured = false,
}: ServiceVisualProps) {
  const reducedMotion = useReducedMotion() ?? false;

  if (type === "ai" || featured) {
    return <AiAutomationVisual reducedMotion={reducedMotion} />;
  }

  return <CompactVisual type={type} reducedMotion={reducedMotion} />;
}
