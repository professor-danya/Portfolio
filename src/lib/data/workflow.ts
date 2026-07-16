import type { WorkflowStep } from "@/types";

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Deep dive into your goals, users, and constraints. I map requirements into a clear technical scope and timeline.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "System design with the right trade-offs — choosing stack, data models, and infrastructure for long-term maintainability.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Iterative builds with regular demos. Clean code, automated tests, and performance benchmarks at every milestone.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Production deployment, monitoring setup, and documentation. Ongoing support to ensure stability as you scale.",
  },
];
