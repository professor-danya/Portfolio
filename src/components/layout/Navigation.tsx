"use client";

import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-zinc-500">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 text-sm font-medium text-zinc-100 transition-all hover:border-white/[0.2] hover:bg-white/[0.08]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span
              className={cn(
                "h-px w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-zinc-300 transition-all duration-300",
                mobileOpen && "-translate-y-[5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-2">
          {navigation.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-2xl font-light text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-12 items-center rounded-full bg-zinc-50 px-8 text-base font-medium text-zinc-950"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
