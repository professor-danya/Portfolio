"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactActionsProps {
  email?: string;
  telegramUrl?: string;
}

export function ContactActions({
  email,
  telegramUrl,
}: ContactActionsProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyEmail() {
    if (!email) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  const statusMessage =
    copyStatus === "copied"
      ? "Copied"
      : copyStatus === "error"
        ? "Copy unavailable"
        : "Copy email";

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {email ? (
          <Button
            href={`mailto:${email}?subject=Project%20discussion`}
            size="lg"
            className="group gap-2 motion-reduce:transition-none"
          >
            Send an email
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <path
                d="M4 12 12 4M6 4h6v6"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        ) : (
          <Button size="lg" disabled>
            Email not configured
          </Button>
        )}

        {telegramUrl && (
          <Button
            href={telegramUrl}
            variant="secondary"
            size="lg"
            className="motion-reduce:transition-none"
          >
            Telegram
          </Button>
        )}

        {email && (
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={copyEmail}
            className="motion-reduce:transition-none"
          >
            {statusMessage}
          </Button>
        )}
      </div>

      {email && (
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-block font-mono text-[10px] tracking-[0.04em] text-zinc-600 transition-colors hover:text-zinc-400 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 motion-reduce:transition-none"
        >
          {email}
        </a>
      )}

      <p className="sr-only" aria-live="polite">
        {email && copyStatus === "copied"
          ? `${email} copied to clipboard`
          : email && copyStatus === "error"
            ? `Could not copy ${email}. Select the visible address instead.`
            : ""}
      </p>
    </div>
  );
}
