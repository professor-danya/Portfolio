import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "atlas-commerce",
    title: "Atlas Commerce Platform",
    description:
      "A high-performance e-commerce engine with real-time inventory, multi-currency checkout, and sub-100ms page loads across global edge regions.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    year: "2025",
    featured: true,
  },
  {
    id: "nexus-ai",
    title: "Nexus AI Assistant",
    description:
      "Enterprise-grade conversational AI with RAG pipelines, document ingestion, and role-based access — deployed for a legal tech firm handling 50k+ queries monthly.",
    tags: ["Python", "OpenAI", "Pinecone", "FastAPI"],
    year: "2025",
    featured: true,
  },
  {
    id: "pulse-bot",
    title: "Pulse Telegram Bot",
    description:
      "Multi-channel notification and command bot serving 12,000+ users with payment integration, scheduled broadcasts, and admin analytics dashboard.",
    tags: ["Node.js", "Telegram API", "MongoDB"],
    year: "2024",
  },
  {
    id: "flowsync",
    title: "FlowSync Automation Suite",
    description:
      "End-to-end business automation connecting CRM, invoicing, and fulfillment — reducing manual operations by 70% for a logistics company.",
    tags: ["n8n", "REST APIs", "Webhooks", "PostgreSQL"],
    year: "2024",
  },
  {
    id: "vertex-api",
    title: "Vertex Payment Gateway API",
    description:
      "RESTful payment orchestration layer with idempotent transactions, webhook delivery guarantees, and comprehensive OpenAPI documentation.",
    tags: ["Go", "gRPC", "Kafka", "Docker"],
    year: "2023",
  },
  {
    id: "lumen-dashboard",
    title: "Lumen Analytics Dashboard",
    description:
      "Real-time SaaS metrics dashboard with custom charting, team permissions, and CSV export — built for a B2B startup's growth team.",
    tags: ["React", "D3.js", "Supabase", "Tailwind"],
    year: "2023",
  },
];
