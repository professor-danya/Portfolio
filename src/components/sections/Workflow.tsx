import { workflowSteps } from "@/lib/data/workflow";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function Workflow() {
  return (
    <section id="workflow" className="py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Process"
            title="How we work together"
            description="A structured approach that keeps projects on track and outcomes predictable."
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent md:block" />

          <div className="space-y-12 md:space-y-0">
            {workflowSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative grid gap-4 md:grid-cols-[80px_1fr] md:gap-12 md:py-10">
                  <div className="flex items-start gap-4 md:block">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-zinc-950 text-xs font-medium text-zinc-400">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
