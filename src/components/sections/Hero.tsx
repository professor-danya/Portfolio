"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineLines = [
  { text: "Build less.", gradient: false },
  { text: "Build better.", gradient: true },
];

const capabilities = ["AI systems", "Web products", "Automation"];

function StaggeredWords({
  text,
  className,
  baseDelay = 0,
  reducedMotion,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  reducedMotion: boolean;
}) {
  const words = text.split(" ");

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: baseDelay + i * 0.07,
            ease: EASE,
          }}
          className="mr-[0.28em] inline-block last:mr-0"
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function WorkflowStep({
  title,
  detail,
  active = false,
}: {
  title: string;
  detail: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.065] bg-white/[0.02] px-3.5 py-3">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
          active
            ? "border-blue-200/20 bg-blue-200/[0.07] text-blue-200"
            : "border-white/[0.08] bg-white/[0.02] text-zinc-600"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-medium text-zinc-200">{title}</p>
        <p className="mt-0.5 truncate font-mono text-[9px] text-zinc-600">
          {detail}
        </p>
      </div>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5 text-zinc-700"
      >
        <path
          d="m6 4 4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ProductPresentation({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.45, ease: EASE }}
      className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:max-w-none"
    >
      <div className="hero-product-glow pointer-events-none absolute -inset-8 rounded-3xl" />

      <div className="hero-product relative overflow-hidden rounded-[22px] border border-white/[0.09] bg-zinc-950/70 backdrop-blur-xl">
        <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
            Intelligent operations
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-200/80 shadow-[0_0_8px_rgba(191,219,254,0.4)]" />
            Live
          </div>
        </div>

        <div className="grid min-h-[350px] grid-cols-[52px_1fr] sm:grid-cols-[62px_1fr]">
          <aside
            aria-hidden="true"
            className="flex flex-col items-center gap-5 border-r border-white/[0.055] py-5"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.04] font-mono text-[10px] text-zinc-300">
              D
            </div>
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className={`h-2.5 w-2.5 rounded-[3px] border ${
                  item === 0
                    ? "border-blue-200/25 bg-blue-200/10"
                    : "border-white/[0.08]"
                }`}
              />
            ))}
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                  System / 01
                </p>
                <h2 className="mt-1.5 text-sm font-medium tracking-tight text-zinc-100">
                  AI Operations Control
                </h2>
              </div>
              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-zinc-500">
                v2.4
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
                <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-600">
                  Automations
                </p>
                <p className="mt-2 text-base font-light tracking-tight text-zinc-100">
                  Live
                </p>
                <p className="mt-1 text-[9px] text-zinc-600">
                  Workflows connected
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
                <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-600">
                  Reliability
                </p>
                <p className="mt-2 text-base font-light tracking-tight text-zinc-100">
                  Nominal
                </p>
                <p className="mt-1 text-[9px] text-zinc-600">System health</p>
              </div>
            </div>

            <div className="mt-2.5 space-y-2">
              <WorkflowStep
                title="Inbound request"
                detail="Webhook received"
                active
              />
              <WorkflowStep
                title="AI classification"
                detail="Intent mapped"
                active
              />
              <WorkflowStep
                title="Business action"
                detail="CRM updated · complete"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: 12, y: 0 }}
        animate={
          reducedMotion
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 1, x: 0, y: [0, -4, 0] }
        }
        transition={
          reducedMotion
            ? { duration: 0.8, delay: 0.85, ease: EASE }
            : {
                opacity: { duration: 0.8, delay: 0.85, ease: EASE },
                x: { duration: 0.8, delay: 0.85, ease: EASE },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }
        }
        className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-white/[0.08] bg-zinc-950/85 px-3.5 py-3 shadow-2xl backdrop-blur-xl sm:flex"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200/15 bg-blue-200/[0.06] text-blue-200">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5"
          >
            <path
              d="M8 2.5v11M3.5 6 8 2.5 12.5 6M3.5 10 8 13.5l4.5-3.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-medium text-zinc-300">
            All systems operational
          </p>
          <p className="mt-0.5 font-mono text-[8px] text-zinc-600">
            Last check · just now
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  let wordOffset = 0.12;

  return (
    <section
      aria-labelledby="hero-title"
      className="hero relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/[0.045]"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : { opacity: [0.65, 0.95, 0.65], scale: [1, 1.035, 1] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hero-spotlight pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div className="hero-vignette pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative z-10 w-full pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
          <div className="max-w-3xl">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  {!reducedMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200/30" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-200/90" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  {siteConfig.availability}
                </span>
              </div>
            </motion.div>

            <h1 id="hero-title" className="hero-headline text-zinc-50">
              {headlineLines.map((line, lineIndex) => {
                const delay = wordOffset;
                wordOffset += line.text.split(" ").length * 0.07 + 0.06;

                return (
                  <span
                    key={line.text}
                    className="block overflow-hidden pb-1"
                  >
                    {line.gradient ? (
                      <span className="hero-gradient-text">
                        <StaggeredWords
                          text={line.text}
                          baseDelay={delay}
                          reducedMotion={reducedMotion}
                        />
                      </span>
                    ) : (
                      <StaggeredWords
                        text={line.text}
                        baseDelay={delay}
                        reducedMotion={reducedMotion}
                      />
                    )}
                  </span>
                );
              })}
            </h1>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="mt-8 max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg"
            >
              I design and engineer intelligent digital products that simplify
              complex work — from AI systems and automation to high-performance
              web applications.
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease: EASE }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href="#projects" size="lg" className="group gap-2">
                View selected work
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="group gap-2"
              >
                Start a project
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 12 12 4M6 4h6v6"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-6"
            >
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-center gap-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                    {item}
                  </span>
                  {index < capabilities.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-0.5 w-0.5 rounded-full bg-zinc-700 sm:block"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:flex lg:justify-end">
            <ProductPresentation reducedMotion={reducedMotion} />
          </div>
        </div>
      </Container>
    </section>
  );
}
