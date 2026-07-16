import type { TechCategory } from "@/types";

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "Go", "FastAPI", "GraphQL"],
  },
  {
    name: "Data & AI",
    items: ["PostgreSQL", "Redis", "MongoDB", "OpenAI", "Pinecone"],
  },
  {
    name: "Infrastructure",
    items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Cloudflare"],
  },
];
