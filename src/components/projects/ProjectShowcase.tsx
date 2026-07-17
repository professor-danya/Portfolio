"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

interface ProjectShowcaseProps {
  project: Project;
  reverse?: boolean;
  index: number;
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.href && !project.repositoryUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 pt-2">
      {project.href && (
        <a
          href={project.href}
          className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
        >
          View project
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      )}
      {project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-200"
        >
          View repository
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      )}
    </div>
  );
}

function ProjectNarrative({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full border border-blue-200/15 bg-blue-200/[0.05] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-blue-100/70">
          {project.status}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
          {project.category}
        </span>
      </div>

      <h3
        id={`${project.id}-title`}
        className="mt-6 text-3xl font-light leading-tight tracking-[-0.035em] text-zinc-50 sm:text-4xl"
      >
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        {project.summary}
      </p>

      <div className="mt-8 grid gap-6 border-t border-white/[0.065] pt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
            Problem
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
            Solution
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-7">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
          My role
        </p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          {project.role}
        </p>
      </div>

      <div className="mt-7">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
          Engineering approach
        </p>
        <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
          {project.engineeringApproach.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[11px] leading-relaxed text-zinc-500"
            >
              <span
                aria-hidden="true"
                className="mt-[0.55em] h-px w-2 shrink-0 bg-zinc-700"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.builtWith && project.builtWith.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-1.5">
          {project.builtWith.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/[0.065] bg-white/[0.018] px-2.5 py-1.5 font-mono text-[9px] text-zinc-500"
            >
              {technology}
            </span>
          ))}
        </div>
      )}

      {project.outcome && (
        <div className="mt-7 border-l border-blue-200/20 pl-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600">
            Verified outcome
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            {project.outcome.statement}
          </p>
          {project.outcome.context && (
            <p className="mt-1 text-[10px] text-zinc-600">
              {project.outcome.context}
            </p>
          )}
        </div>
      )}

      <ProjectLinks project={project} />
    </div>
  );
}

export function ProjectShowcase({
  project,
  reverse = false,
  index,
}: ProjectShowcaseProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const featured = project.tier === "flagship";

  return (
    <motion.article
      aria-labelledby={`${project.id}-title`}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.75,
        delay: Math.min(index * 0.08, 0.16),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0c0d0f] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-8 lg:p-10",
        featured ? "lg:p-12" : "lg:p-10",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 bg-[radial-gradient(circle_at_top_right,rgba(191,219,254,0.045),transparent_68%)]"
      />

      <div
        className={cn(
          "relative grid items-center gap-10 lg:gap-12",
          featured
            ? "lg:grid-cols-[0.82fr_1.18fr]"
            : "lg:grid-cols-[0.9fr_1.1fr]",
        )}
      >
        <div className={cn(reverse && "lg:order-2")}>
          <ProjectNarrative project={project} />
        </div>
        <div className={cn(reverse && "lg:order-1")}>
          <ProjectVisual
            type={project.visual}
            title={project.title}
            featured={featured}
          />
        </div>
      </div>
    </motion.article>
  );
}
