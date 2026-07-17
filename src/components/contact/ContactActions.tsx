"use client";

import { useState } from "react";

interface ContactActionsProps {
  email: string;
}

export function ContactActions({ email }: ContactActionsProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  const statusMessage =
    copyStatus === "copied"
      ? "Email copied"
      : copyStatus === "error"
        ? "Copy unavailable"
        : "Copy email";

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${email}?subject=Project%20discussion`}
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Send an email
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path
              d="M4 12 12 4M6 4h6v6"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] px-6 text-sm font-medium text-zinc-300 transition-colors hover:border-white/[0.16] hover:bg-white/[0.045] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {statusMessage}
        </button>
      </div>

      <a
        href={`mailto:${email}`}
        className="mt-4 inline-block font-mono text-[10px] tracking-[0.04em] text-zinc-600 transition-colors hover:text-zinc-400"
      >
        {email}
      </a>

      <p className="sr-only" aria-live="polite">
        {copyStatus === "copied"
          ? `${email} copied to clipboard`
          : copyStatus === "error"
            ? `Could not copy ${email}. Select the visible address instead.`
            : ""}
      </p>
    </div>
  );
}
