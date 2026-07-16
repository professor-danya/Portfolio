import { siteConfig } from "@/lib/data/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

const principles = [
  {
    title: "Precision over volume",
    description:
      "Every line of code serves a purpose. I prioritize clarity, maintainability, and measurable impact.",
  },
  {
    title: "Performance by default",
    description:
      "Fast experiences aren't optional. Core Web Vitals, bundle size, and runtime efficiency are built in from the start.",
  },
  {
    title: "Partnership mindset",
    description:
      "I work as an extension of your team — transparent communication, honest timelines, and shared ownership of outcomes.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <SectionHeader
              label="About"
              title={`Hi, I'm ${siteConfig.name.split(" ")[0]}`}
              description="A software engineer with five years of experience building products for startups and established businesses alike. I combine technical depth with design sensibility to deliver work that feels as good as it functions."
              className="mb-0"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {principles.map((principle) => (
                <GlassCard key={principle.title}>
                  <h3 className="text-sm font-medium text-zinc-200">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {principle.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
