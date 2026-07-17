import { Container } from "@/components/ui/Container";
import { ContactActions } from "@/components/contact/ContactActions";
import { ProjectBriefGuide } from "@/components/contact/ProjectBriefGuide";

const contactEmail = "fieldaev@bk.ru";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative border-t border-white/[0.04] py-28 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_55%_45%_at_20%_10%,rgba(191,219,254,0.035),transparent)]"
      />

      <Container>
        <div className="relative">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Contact
              </p>
              <h2
                id="contact-title"
                className="mt-5 max-w-2xl text-4xl font-light leading-[1.02] tracking-[-0.045em] text-zinc-50 sm:text-5xl lg:text-6xl"
              >
                Discuss a system, workflow, or product problem.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
                Share the process, constraint, or technical problem. The first
                step is understanding whether software—and especially AI—is the
                appropriate solution.
              </p>

              <div className="mt-9">
                <ContactActions email={contactEmail} />
              </div>
            </div>

            <ProjectBriefGuide />
          </div>

          <div className="mt-24 flex flex-col gap-4 border-t border-white/[0.07] pt-8 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-lg tracking-[-0.06em] text-zinc-300">
                &lt;/D&gt; Professor Danya
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Build less. Build better.
              </p>
            </div>
            <p className="max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-zinc-700 sm:text-right">
              Clear problems. Appropriate tools. Maintainable systems.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
