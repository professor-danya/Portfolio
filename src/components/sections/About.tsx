import { Container } from "@/components/ui/Container";
import {
  PrincipleList,
  type EngineeringPrinciple,
} from "@/components/about/PrincipleList";
import {
  TechnicalFocus,
  type TechnicalFocusItem,
} from "@/components/about/TechnicalFocus";

const principles: EngineeringPrinciple[] = [
  {
    title: "Understand before building",
    description:
      "Map the data flow, constraints, dependencies, and failure cases before choosing tools or writing implementation code.",
  },
  {
    title: "Make boundaries explicit",
    description:
      "Separate interfaces, business rules, data access, and integrations so each part can be understood and changed independently.",
  },
  {
    title: "Design for failure",
    description:
      "Use validation, logs, retries, review states, and recoverable operations instead of assuming every dependency will behave correctly.",
  },
  {
    title: "Improve through observation",
    description:
      "Instrument real behavior, test assumptions, remove unnecessary complexity, and refine the system from evidence.",
  },
];

const technicalFocus: TechnicalFocusItem[] = [
  {
    title: "Reliable AI workflows",
    detail: "Structured output, validation, review, and controlled actions.",
  },
  {
    title: "Agent tool design",
    detail: "Small capabilities with explicit permissions and boundaries.",
  },
  {
    title: "Data processing",
    detail: "Deterministic parsing, normalization, and traceable validation.",
  },
  {
    title: "Interface engineering",
    detail: "Clear operational states for complex underlying systems.",
  },
  {
    title: "Automation observability",
    detail: "Execution history, failure context, and recoverable workflows.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="Engineering profile"
      className="relative py-28 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_50%_40%_at_20%_10%,rgba(191,219,254,0.03),transparent)]"
      />

      <Container>
        <div className="relative">
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Engineering profile
              </p>
              <h2 className="mt-5 max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.045em] text-zinc-50 sm:text-5xl">
                Complex systems should become clear software.
              </h2>

              <div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-zinc-500 sm:text-base">
                <p>
                  I approach software as a connected system of data, decisions,
                  interfaces, and failure states. Before building, I reduce the
                  problem to the smallest architecture that can solve it
                  reliably.
                </p>
                <p>
                  AI is useful where interpretation is required. Deterministic
                  code remains the better tool where behavior must be exact.
                  Good engineering makes that boundary visible.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-white/[0.07] pt-7">
                <span className="font-mono text-2xl font-light tracking-[-0.08em] text-zinc-200">
                  &lt;/D&gt;
                </span>
                <div className="h-8 w-px bg-white/[0.08]" />
                <div>
                  <p className="text-xs font-medium text-zinc-300">
                    Professor Danya
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    Build less. Build better.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Operating principles
                </p>
                <span className="font-mono text-[9px] text-zinc-700">04</span>
              </div>
              <PrincipleList principles={principles} />
            </div>
          </div>

          <div className="mt-20 sm:mt-24">
            <TechnicalFocus items={technicalFocus} />
          </div>
        </div>
      </Container>
    </section>
  );
}
