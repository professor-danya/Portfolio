import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ai-automation-systems",
    title: "AI Automation Systems",
    summary:
      "Workflows that use AI for classification, extraction, drafting, and decision support without hiding operational control.",
    purpose:
      "For processes where unstructured information must become a clear, reviewable business action.",
    deliverables: [
      "AI-assisted workflows",
      "Structured output pipelines",
      "Review and approval interfaces",
    ],
    engineeringFocus: [
      "Validation",
      "Human review",
      "Failure handling",
      "Observability",
    ],
    visual: "ai",
    featured: true,
  },
  {
    id: "telegram-bots",
    title: "Telegram Bots & Intelligent Assistants",
    summary:
      "Telegram-native tools that combine commands, contextual conversations, notifications, and connected services.",
    purpose:
      "For focused interactions that are more useful inside an existing communication channel than a separate application.",
    deliverables: ["Command systems", "AI assistants", "Operational bots"],
    engineeringFocus: [
      "Intent routing",
      "Permissions",
      "Persistent state",
      "Tool isolation",
    ],
    visual: "telegram",
  },
  {
    id: "python-automation",
    title: "Python Automation",
    summary:
      "Focused scripts and background jobs for repetitive data, file, reporting, and integration work.",
    purpose:
      "For dependable tasks that should run consistently without requiring a full product interface.",
    deliverables: ["Processing scripts", "Scheduled jobs", "Internal utilities"],
    engineeringFocus: [
      "Clear inputs",
      "Recoverable jobs",
      "Logging",
      "Maintainability",
    ],
    visual: "python",
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    summary:
      "Reliable connections between products, internal systems, and third-party services.",
    purpose:
      "For moving data and actions across tools while keeping authentication, retries, and failures explicit.",
    deliverables: ["Service adapters", "Webhooks", "Data synchronization"],
    engineeringFocus: [
      "Idempotency",
      "Rate limits",
      "Retries",
      "Monitoring",
    ],
    visual: "api",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    summary:
      "Purpose-built interfaces for internal operations, dashboards, portals, and focused digital products.",
    purpose:
      "For workflows that need a clear interface, structured data, and dependable access across devices.",
    deliverables: ["Internal tools", "Dashboards", "Client portals"],
    engineeringFocus: [
      "Accessibility",
      "Performance",
      "Data integrity",
      "Maintainability",
    ],
    visual: "web",
  },
  {
    id: "data-processing",
    title: "Data Processing Systems",
    summary:
      "Pipelines that ingest, normalize, validate, and prepare inconsistent information for reliable use.",
    purpose:
      "For files and records that require repeatable transformation before they can support operations or analysis.",
    deliverables: ["Parsing pipelines", "Validation tools", "Structured exports"],
    engineeringFocus: [
      "Deterministic stages",
      "Schema validation",
      "Traceability",
      "Review states",
    ],
    visual: "data",
  },
  {
    id: "business-automation",
    title: "CRM & Business Workflow Automation",
    summary:
      "Deterministic workflows for routing information, updating records, requesting approvals, and coordinating tools.",
    purpose:
      "For recurring operational processes that should be visible, auditable, and less dependent on manual handoffs.",
    deliverables: ["CRM workflows", "Approval flows", "Tool orchestration"],
    engineeringFocus: [
      "Auditability",
      "Explicit rules",
      "Recovery",
      "Operational clarity",
    ],
    visual: "crm",
  },
];
