import type { ProjectExperiment } from "@/types";

interface ExperimentIndexProps {
  experiments: ProjectExperiment[];
}

export function ExperimentIndex({ experiments }: ExperimentIndexProps) {
  if (experiments.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 border-t border-white/[0.06] pt-10">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
            Smaller work
          </p>
          <h3 className="mt-2 text-xl font-light tracking-tight text-zinc-200">
            Experiments and utilities
          </h3>
        </div>
        <span className="font-mono text-[9px] text-zinc-700">
          {String(experiments.length).padStart(2, "0")}
        </span>
      </div>

      <div>
        {experiments.map((experiment, index) => {
          const content = (
            <>
              <span className="font-mono text-[9px] text-zinc-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-zinc-300">
                {experiment.title}
              </span>
              <span className="hidden md:block">
                <span className="block text-xs text-zinc-600">
                  {experiment.description}
                </span>
                {experiment.builtWith && experiment.builtWith.length > 0 && (
                  <span className="mt-1 block font-mono text-[8px] text-zinc-700">
                    {experiment.builtWith.join(" · ")}
                  </span>
                )}
              </span>
              <span className="ml-auto font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                {experiment.status}
              </span>
            </>
          );

          const className =
            "grid grid-cols-[28px_1fr_auto] items-center gap-4 border-t border-white/[0.055] py-5 transition-colors last:border-b hover:bg-white/[0.015] md:grid-cols-[28px_180px_1fr_auto]";

          return experiment.href ? (
            <a key={experiment.id} href={experiment.href} className={className}>
              {content}
            </a>
          ) : (
            <div key={experiment.id} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
