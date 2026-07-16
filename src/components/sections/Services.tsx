import { services } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ServiceIconComponent } from "@/components/ui/ServiceIcon";
import { FadeIn } from "@/components/ui/FadeIn";

export function Services() {
  return (
    <section id="services" className="border-t border-white/[0.04] py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Expertise"
            title="What I build"
            description="End-to-end engineering across the full product lifecycle — from architecture to deployment."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.08}>
              <GlassCard
                hover
                className="group relative h-full overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/[0.015] blur-2xl transition-all duration-700 group-hover:bg-white/[0.03]" />
                <div className="relative">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-colors group-hover:border-white/[0.15] group-hover:text-zinc-200">
                    <ServiceIconComponent
                      icon={service.icon}
                      className="h-5 w-5"
                    />
                  </div>
                  <h3 className="text-base font-medium tracking-tight text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
