import type { Project, ProjectExperiment } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-automation-engine",
    title: "AI Automation Engine",
    category: "Concept & Engineering Showcase",
    status: "Prototype",
    summary:
      "A modular system for turning incoming business requests into structured, reviewable actions.",
    problem:
      "Operational work often moves between forms, inboxes, spreadsheets, and internal tools. The handoffs are repetitive and difficult to observe.",
    solution:
      "A workflow engine that receives events, applies AI-assisted classification, validates structured output, and routes approved actions to connected services.",
    role:
      "System architecture, workflow design, backend engineering, and interface prototyping.",
    engineeringApproach: [
      "Composable workflow stages",
      "Schema-validated AI output",
      "Explicit review and failure states",
      "Idempotent integration boundaries",
    ],
    builtWith: ["TypeScript", "Next.js", "OpenAI", "PostgreSQL", "Webhooks"],
    visual: "workflow",
    tier: "flagship",
  },
  {
    id: "telegram-ai-assistant",
    title: "Telegram AI Assistant",
    category: "Conversational Systems",
    status: "Prototype",
    summary:
      "A Telegram-native assistant that combines structured commands with contextual AI responses.",
    problem:
      "Bots become difficult to maintain when commands, conversation state, AI calls, and third-party integrations are tightly coupled.",
    solution:
      "A layered bot architecture that separates transport, intent handling, agent tools, persistence, and external service adapters.",
    role:
      "Conversation architecture, bot development, AI integration, and operational tooling.",
    engineeringApproach: [
      "Explicit command and intent routing",
      "Isolated agent tools",
      "Persistent conversation context",
      "Observable integration states",
    ],
    builtWith: ["TypeScript", "Telegram API", "OpenAI", "PostgreSQL"],
    visual: "assistant",
    tier: "supporting",
  },
  {
    id: "data-parser-platform",
    title: "Data Parser & Automation Platform",
    category: "Data Infrastructure",
    status: "Prototype",
    summary:
      "A controlled pipeline for converting inconsistent source files into validated, structured records.",
    problem:
      "Business data arrives in changing formats with incomplete fields, inconsistent naming, and errors that require manual correction.",
    solution:
      "An ingestion and normalization workflow with field mapping, validation rules, review states, and structured exports.",
    role:
      "Parser architecture, transformation pipeline, validation model, and dashboard interface.",
    engineeringApproach: [
      "Deterministic parsing stages",
      "Configurable field mapping",
      "Validation before persistence",
      "Recoverable processing jobs",
    ],
    builtWith: ["Python", "FastAPI", "PostgreSQL", "Next.js"],
    visual: "parser",
    tier: "supporting",
  },
];

// Add only real, verifiable experiments. The index remains hidden while empty.
export const projectExperiments: ProjectExperiment[] = [];
