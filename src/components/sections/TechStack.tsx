import { techStack } from "@/lib/data/tech-stack";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function TechStack() {
  return (
    <section id="stack" className="border-t border-white/[0.04] py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Technologies"
            title="Tools of the trade"
            description="A battle-tested stack chosen for reliability, developer experience, and production performance."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {techStack.map((category, i) => (
            <FadeIn key={category.name} delay={i * 0.08}>
              <GlassCard className="h-full">
                <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
