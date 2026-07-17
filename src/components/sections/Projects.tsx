import { projectExperiments, projects } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ExperimentIndex } from "@/components/projects/ExperimentIndex";

export function Projects() {
  const flagship = projects.find((project) => project.tier === "flagship");
  const supporting = projects.filter(
    (project) => project.tier === "supporting",
  );

  return (
    <section
      id="projects"
      aria-label="Selected systems"
      className="relative border-t border-white/[0.04] py-28 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(191,219,254,0.035),transparent)]"
      />

      <Container>
        <div className="relative">
          <SectionHeader
            label="Selected systems"
            title="Engineering complex work into clear products"
            description="Product and engineering prototypes exploring practical AI, automation, and data infrastructure."
          />

          <div className="space-y-8 lg:space-y-12">
            {flagship && (
              <ProjectShowcase project={flagship} index={0} />
            )}
            {supporting.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                index={index + 1}
                reverse={index % 2 === 0}
              />
            ))}
          </div>

          <ExperimentIndex experiments={projectExperiments} />
        </div>
      </Container>
    </section>
  );
}
