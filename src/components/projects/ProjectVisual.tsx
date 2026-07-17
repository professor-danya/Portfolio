"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  type: Project["visual"];
  title: string;
  featured?: boolean;
}

function WindowChrome({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <div className="flex h-11 items-center border-b border-white/[0.06] px-4">
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
      </div>
      <span className="ml-4 font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </span>
      <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] text-zinc-500">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-200/80 shadow-[0_0_8px_rgba(191,219,254,0.35)]" />
        {status}
      </span>
    </div>
  );
}

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600">
      {children}
    </p>
  );
}

function WorkflowVisual({ reducedMotion }: { reducedMotion: boolean }) {
  const stages = [
    { name: "Request received", detail: "Webhook", active: true },
    { name: "AI classification", detail: "Structured output", active: true },
    { name: "Review gate", detail: "Approval required", active: false },
    { name: "Business action", detail: "Integration", active: false },
  ];

  return (
    <div className="min-h-[390px] sm:min-h-[450px]">
      <WindowChrome label="Automation engine" status="Executing" />
      <div className="grid min-h-[345px] grid-cols-1 sm:grid-cols-[1fr_170px]">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <PanelLabel>Workflow / Incoming request</PanelLabel>
              <p className="mt-1.5 text-sm font-medium text-zinc-200">
                Qualification pipeline
              </p>
            </div>
            <span className="rounded-full border border-blue-200/15 bg-blue-200/[0.06] px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-blue-100/80">
              In progress
            </span>
          </div>

          <div className="relative mt-7 space-y-2.5">
            <div className="absolute bottom-5 left-[17px] top-5 w-px bg-white/[0.07]" />
            {stages.map((stage, index) => (
              <motion.div
                key={stage.name}
                initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex items-center gap-3 rounded-xl border border-white/[0.065] bg-[#0e0f12] p-3"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                    stage.active
                      ? "border-blue-200/20 bg-blue-200/[0.07] text-blue-200"
                      : "border-white/[0.08] bg-zinc-950 text-zinc-600",
                  )}
                >
                  {stage.active && index === 1 && !reducedMotion ? (
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-current"
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-zinc-300">
                    {stage.name}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[8px] text-zinc-600">
                    {stage.detail}
                  </p>
                </div>
                <span className="ml-auto font-mono text-[8px] text-zinc-700">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="hidden border-l border-white/[0.055] p-4 sm:block">
          <PanelLabel>Execution</PanelLabel>
          <div className="mt-4 space-y-4">
            {[
              ["Trigger", "Connected"],
              ["AI model", "Ready"],
              ["Review", "Waiting"],
            ].map(([label, state], index) => (
              <div key={label}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] text-zinc-500">{label}</span>
                  <span className="font-mono text-[8px] text-zinc-600">
                    {state}
                  </span>
                </div>
                <div className="mt-1.5 h-px overflow-hidden bg-white/[0.06]">
                  <motion.div
                    className="h-full bg-blue-200/45"
                    initial={reducedMotion ? { width: "70%" } : { width: 0 }}
                    whileInView={{
                      width: index === 2 ? "42%" : "100%",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.018] p-3">
            <PanelLabel>Agent activity</PanelLabel>
            <p className="mt-2 text-[9px] leading-relaxed text-zinc-500">
              Classifying intent and preparing a structured action for review.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function AssistantVisual({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="min-h-[360px]">
      <WindowChrome label="Telegram assistant" status="Connected" />
      <div className="grid min-h-[315px] grid-cols-[1fr_112px] sm:grid-cols-[1fr_150px]">
        <div className="p-4">
          <div className="flex items-center gap-3 border-b border-white/[0.05] pb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200/15 bg-blue-200/[0.06] text-[10px] text-blue-100">
              AI
            </div>
            <div>
              <p className="text-[10px] font-medium text-zinc-300">
                Operations assistant
              </p>
              <p className="mt-0.5 font-mono text-[8px] text-zinc-600">
                context available
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-zinc-800/80 px-3 py-2.5 text-[10px] leading-relaxed text-zinc-300">
              Summarize the new request and prepare the next action.
            </div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[88%] rounded-2xl rounded-bl-md border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
            >
              <p className="text-[10px] leading-relaxed text-zinc-400">
                The request has been classified. I prepared a structured draft
                and held the external action for approval.
              </p>
              <div className="mt-2.5 flex gap-1.5">
                <span className="rounded-md border border-white/[0.07] px-2 py-1 font-mono text-[7px] uppercase text-zinc-600">
                  Review draft
                </span>
                <span className="rounded-md border border-blue-200/15 bg-blue-200/[0.05] px-2 py-1 font-mono text-[7px] uppercase text-blue-100/70">
                  Approve
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <aside className="border-l border-white/[0.055] p-3">
          <PanelLabel>Agent tools</PanelLabel>
          <div className="mt-3 space-y-2">
            {["Knowledge", "CRM", "Calendar"].map((tool, index) => (
              <div
                key={tool}
                className="rounded-lg border border-white/[0.06] bg-white/[0.018] p-2.5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      index === 0 ? "bg-blue-200/80" : "bg-zinc-600",
                    )}
                  />
                  <span className="truncate text-[8px] text-zinc-500">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <PanelLabel>Activity</PanelLabel>
            <p className="mt-2 font-mono text-[7px] leading-relaxed text-zinc-600">
              Intent routed
              <br />
              Context loaded
              <br />
              Action paused
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ParserVisual({ reducedMotion }: { reducedMotion: boolean }) {
  const fields = [
    ["company_name", "Company"],
    ["contact_email", "Email"],
    ["request_type", "Category"],
  ];

  return (
    <div className="min-h-[360px]">
      <WindowChrome label="Data parser" status="Reviewing" />
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium text-zinc-300">
              incoming-records.csv
            </p>
            <p className="mt-1 font-mono text-[8px] text-zinc-600">
              Source file · ready
            </p>
          </div>
          <span className="rounded-md border border-blue-200/15 bg-blue-200/[0.05] px-2 py-1 font-mono text-[7px] uppercase text-blue-100/70">
            Parsed
          </span>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_110px]">
          <div className="rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
            <div className="flex items-center justify-between">
              <PanelLabel>Field mapping</PanelLabel>
              <span className="font-mono text-[7px] text-zinc-700">
                Draft
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {fields.map(([source, target], index) => (
                <motion.div
                  key={source}
                  initial={reducedMotion ? false : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-lg border border-white/[0.055] px-2.5 py-2"
                >
                  <span className="truncate font-mono text-[7px] text-zinc-600">
                    {source}
                  </span>
                  <span className="text-[8px] text-zinc-700">→</span>
                  <span className="truncate font-mono text-[7px] text-zinc-400">
                    {target}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
            <PanelLabel>Validation</PanelLabel>
            <div className="mt-4 space-y-3">
              {[
                ["Required", true],
                ["Types", true],
                ["Duplicates", false],
              ].map(([label, valid]) => (
                <div
                  key={String(label)}
                  className="flex items-center justify-between"
                >
                  <span className="text-[8px] text-zinc-600">{label}</span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      valid ? "bg-blue-200/75" : "bg-zinc-700",
                    )}
                  />
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.065] bg-white/[0.018] px-3 py-2.5">
          <span className="font-mono text-[8px] text-zinc-600">
            Structured output prepared
          </span>
          <span className="font-mono text-[7px] uppercase tracking-wider text-zinc-500">
            Awaiting review
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({
  type,
  title,
  featured = false,
}: ProjectVisualProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div
      role="img"
      aria-label={`${title} interface visualization`}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#090a0c] shadow-[0_28px_80px_-36px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.045)]",
        featured && "lg:rounded-[22px]",
      )}
    >
      <div aria-hidden="true">
        {type === "workflow" && (
          <WorkflowVisual reducedMotion={reducedMotion} />
        )}
        {type === "assistant" && (
          <AssistantVisual reducedMotion={reducedMotion} />
        )}
        {type === "parser" && <ParserVisual reducedMotion={reducedMotion} />}
      </div>
    </div>
  );
}
