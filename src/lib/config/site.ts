function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL must be configured for production builds.",
      );
    }

    return new URL("http://localhost:3000");
  }

  return new URL(configuredUrl);
}

export const siteConfig = {
  name: "Professor Danya",
  mark: "</D>",
  title: "Professor Danya — AI Automation & Software Systems",
  description:
    "Designing and engineering AI-assisted workflows, automation systems, APIs, data processing tools, and focused web applications.",
  tagline: "AI automation, software systems, and focused product engineering.",
  email: "fieldaev@bk.ru",
  availability: "Independent AI engineer",
  locale: "en_US",
  language: "en",
  url: resolveSiteUrl(),
} as const;
