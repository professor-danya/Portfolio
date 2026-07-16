import { navigation, siteConfig } from "@/lib/data/navigation";
import { socialLinks } from "@/lib/data/social";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-8">
          <div>
            <p className="text-lg font-medium tracking-tight text-zinc-100">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
              Navigation
            </p>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Designed & built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}
