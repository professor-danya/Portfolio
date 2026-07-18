function createAbsoluteUrl(value: string) {
  const url = new URL(
    value.startsWith("http://") || value.startsWith("https://")
      ? value
      : `https://${value}`,
  );

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("The configured site URL must use HTTP or HTTPS.");
  }

  return url;
}

function resolveSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return createAbsoluteUrl(configuredUrl);
  }

  if (process.env.VERCEL_ENV === "production") {
    const vercelProductionUrl =
      process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

    if (vercelProductionUrl) {
      return createAbsoluteUrl(vercelProductionUrl);
    }

    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be configured for production deployments.",
    );
  }

  const vercelPreviewUrl =
    process.env.VERCEL_BRANCH_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (vercelPreviewUrl) {
    return createAbsoluteUrl(vercelPreviewUrl);
  }

  return new URL("http://localhost:3000");
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
