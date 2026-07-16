"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data/navigation";
import { socialLinks } from "@/lib/data/social";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-white/[0.04] py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Contact"
            title="Let's build something exceptional"
            description="Have a project in mind? Share the details and I'll respond within 24 hours."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-3">
            <GlassCard>
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5 text-emerald-400"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-zinc-100">
                    Message sent
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-zinc-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-white/[0.16] focus:bg-white/[0.04]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-zinc-500"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-white/[0.16] focus:bg-white/[0.04]"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-zinc-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors focus:border-white/[0.16] focus:bg-white/[0.04]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8">
              <GlassCard>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </GlassCard>

              <GlassCard>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                  Social
                </p>
                <ul className="mt-3 space-y-2">
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
                </ul>
              </GlassCard>

              <GlassCard>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                  Response time
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Typically within 24 hours on business days.
                </p>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
