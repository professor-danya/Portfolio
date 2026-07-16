"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineLines = [
  { text: "Engineering", gradient: false },
  { text: "digital systems", gradient: true },
  { text: "that scale.", gradient: false },
];

const terminalLines: { tokens: { text: string; color: string }[] }[] = [
  {
    tokens: [
      { text: "import", color: "text-violet-400/90" },
      { text: " { deploy } ", color: "text-zinc-300" },
      { text: "from", color: "text-violet-400/90" },
      { text: " '@/core'", color: "text-emerald-400/80" },
    ],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: "const", color: "text-violet-400/90" },
      { text: " stack ", color: "text-zinc-300" },
      { text: "= ", color: "text-zinc-500" },
      { text: "[", color: "text-zinc-400" },
    ],
  },
  {
    tokens: [
      { text: "  ", color: "" },
      { text: "'Next.js'", color: "text-emerald-400/80" },
      { text: ", ", color: "text-zinc-500" },
      { text: "'OpenAI'", color: "text-emerald-400/80" },
      { text: ", ", color: "text-zinc-500" },
    ],
  },
  {
    tokens: [
      { text: "  ", color: "" },
      { text: "'Telegram'", color: "text-emerald-400/80" },
      { text: ", ", color: "text-zinc-500" },
      { text: "'PostgreSQL'", color: "text-emerald-400/80" },
    ],
  },
  {
    tokens: [{ text: "]", color: "text-zinc-400" }],
  },
  {
    tokens: [],
  },
  {
    tokens: [
      { text: "await", color: "text-violet-400/90" },
      { text: " deploy", color: "text-sky-400/90" },
      { text: "({ ", color: "text-zinc-400" },
      { text: "stack", color: "text-zinc-300" },
      { text: ", ", color: "text-zinc-500" },
      { text: "env", color: "text-zinc-300" },
      { text: ": ", color: "text-zinc-500" },
      { text: "'prod'", color: "text-emerald-400/80" },
      { text: " })", color: "text-zinc-400" },
    ],
  },
  {
    tokens: [
      { text: "// ", color: "text-zinc-600" },
      { text: "→ deployed in 847ms ✓", color: "text-zinc-500" },
    ],
  },
];

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
          initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.75,
            delay: baseDelay + i * 0.07,
            ease: EASE,
          }}
          className="mr-[0.28em] inline-block last:mr-0"
          aria-hidden={i > 0}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function HeroTerminal({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.45, ease: EASE }}
      className="hero-terminal-wrap relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-none"
    >
      <div className="hero-terminal-glow pointer-events-none absolute -inset-8 rounded-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
        className="hero-terminal relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/60 shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="ml-2 font-mono text-[11px] text-zinc-600">
            deploy.ts
          </span>
          <span className="ml-auto font-mono text-[10px] text-zinc-700">
            ~/src/core
          </span>
        </div>

        <div className="relative px-5 py-5 font-mono text-[12px] leading-[1.75] sm:text-[13px]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
          {terminalLines.map((line, lineIndex) => (
            <div key={lineIndex} className="whitespace-pre">
              {line.tokens.length === 0 ? (
                "\u00A0"
              ) : (
                line.tokens.map((token, tokenIndex) => (
                  <span key={tokenIndex} className={token.color}>
                    {token.text}
                  </span>
                ))
              )}
              {lineIndex === terminalLines.length - 1 && (
                <span className="hero-cursor ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[2px] bg-zinc-400/80" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
          <span className="font-mono text-[10px] text-zinc-600">
            TypeScript · UTF-8
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-500/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            Live
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: 20, y: 0 }}
        animate={
          reducedMotion
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 1, x: 0, y: [0, 6, 0] }
        }
        transition={
          reducedMotion
            ? { duration: 0.8, delay: 0.85, ease: EASE }
            : {
                opacity: { duration: 0.8, delay: 0.85, ease: EASE },
                x: { duration: 0.8, delay: 0.85, ease: EASE },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }
        }
        className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/[0.06] bg-zinc-950/80 px-3.5 py-2.5 backdrop-blur-xl sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Status
        </p>
        <p className="mt-0.5 font-mono text-xs text-zinc-400">
          3 services running
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  let wordOffset = 0.12;

  return (
    <section className="hero relative flex min-h-[100dvh] items-center overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-spotlight pointer-events-none absolute inset-0" aria-hidden />
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
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  {siteConfig.availability}
                </span>
              </div>
            </motion.div>

            <h1 className="hero-headline text-zinc-50">
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
              {siteConfig.role} crafting web applications, AI systems,
              Telegram bots, and APIs — with the precision of production
              infrastructure.
            </motion.p>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="#projects" size="lg">
                View work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </motion.div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="mt-14 flex items-center gap-6 border-t border-white/[0.06] pt-8"
            >
              {["Web", "AI", "APIs", "Automation"].map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:flex lg:justify-end">
            <HeroTerminal reducedMotion={reducedMotion} />
          </div>
        </div>
      </Container>
    </section>
  );
}
