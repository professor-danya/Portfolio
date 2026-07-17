import { Container } from "@/components/ui/Container";
import { ContactActions } from "@/components/contact/ContactActions";
import { ProjectBriefGuide } from "@/components/contact/ProjectBriefGuide";
import { siteConfig } from "@/lib/config/site";

export function Contact() {
  const contactConfig: { email?: string; telegram?: string } = siteConfig;
  const email = contactConfig.email?.trim() || undefined;
  const telegramUrl = contactConfig.telegram?.trim() || undefined;

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
                Discuss a system,
                <br />
                workflow, or product.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
                Share the process, technical challenge, or business workflow.
                The first step is understanding whether software—and especially
                AI—is the right solution.
              </p>

              <div className="mt-9">
                <ContactActions
                  email={email}
                  telegramUrl={telegramUrl}
                />
              </div>
            </div>

            <ProjectBriefGuide />
          </div>

          <div className="mt-24 flex flex-col gap-8 border-t border-white/[0.07] pt-9 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <p className="font-mono text-2xl tracking-[-0.08em] text-blue-100/80">
                &lt;/D&gt;
              </p>
              <span
                aria-hidden="true"
                className="h-7 w-px bg-white/[0.08]"
              />
              <p className="text-sm text-zinc-400">
                Professor Danya
              </p>
            </div>
            <p className="text-2xl font-light leading-tight tracking-[-0.035em] text-zinc-200 sm:text-right sm:text-3xl">
              Build less.
              <br />
              <span className="text-zinc-500">Build better.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
