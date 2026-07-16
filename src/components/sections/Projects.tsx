import { projects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Selected Work"
            title="Projects that push boundaries"
            description="A curated selection of recent work spanning web platforms, AI systems, automation, and APIs."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <GlassCard hover className="group relative h-full overflow-hidden lg:col-span-1">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/[0.02] blur-3xl transition-all duration-700 group-hover:bg-white/[0.04]" />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-500">
                      {project.year}
                    </span>
                    <span className="text-xs text-zinc-600">Featured</span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <FadeIn key={project.id} delay={0.2 + i * 0.08}>
              <GlassCard hover className="group h-full">
                <span className="text-xs font-medium text-zinc-500">
                  {project.year}
                </span>
                <h3 className="mt-2 text-base font-medium tracking-tight text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} className="text-[10px]">
                      {tag}
                    </Badge>
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
