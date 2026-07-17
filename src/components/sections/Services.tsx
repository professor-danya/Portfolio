import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ServiceFeature } from "@/components/services/ServiceFeature";
import { CapabilityRow } from "@/components/services/CapabilityRow";

export function Services() {
  const featuredService = services.find((service) => service.featured);
  const supportingServices = services.filter((service) => !service.featured);

  return (
    <section
      id="services"
      aria-label="Engineering services"
      className="relative border-t border-white/[0.04] py-28 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_55%_40%_at_50%_0%,rgba(191,219,254,0.03),transparent)]"
      />

      <Container>
        <div className="relative">
          <SectionHeader
            label="Engineering services"
            title="Systems I build"
            description="Focused software systems designed around real operational work, clear boundaries, and maintainable engineering."
          />

          {featuredService && <ServiceFeature service={featuredService} />}

          <div className="mt-16 sm:mt-20">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                Additional capabilities
              </p>
              <span className="font-mono text-[9px] text-zinc-700">
                {String(supportingServices.length).padStart(2, "0")}
              </span>
            </div>

            {supportingServices.map((service, index) => (
              <CapabilityRow
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div className="mt-20 flex flex-col justify-between gap-8 border-y border-white/[0.06] py-10 sm:flex-row sm:items-center sm:py-12">
            <div>
              <p className="text-2xl font-light tracking-[-0.03em] text-zinc-100 sm:text-3xl">
                Build less. <span className="text-zinc-500">Build better.</span>
              </p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
                Start with the smallest reliable system that solves the actual
                problem.
              </p>
            </div>
            <Button href="#contact" variant="secondary" size="lg">
              Discuss a system
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
