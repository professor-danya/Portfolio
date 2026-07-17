export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: "Prototype" | "Production" | "Experiment";
  workType: "Real project" | "Engineering experiment";
  summary: string;
  problem: string;
  solution: string;
  role: string;
  engineeringApproach: string[];
  builtWith?: string[];
  outcome?: {
    statement: string;
    context?: string;
  };
  visual: "workflow" | "assistant" | "parser";
  tier: "flagship" | "supporting";
  href?: string;
  repositoryUrl?: string;
}

export interface ProjectExperiment {
  id: string;
  title: string;
  description: string;
  status: "Experiment";
  builtWith?: string[];
  href?: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  purpose: string;
  deliverables: string[];
  engineeringFocus: string[];
  visual: ServiceVisual;
  featured?: boolean;
}

export type ServiceVisual =
  | "ai"
  | "telegram"
  | "python"
  | "api"
  | "web"
  | "data"
  | "crm";

export type ServiceIcon =
  | "web"
  | "ai"
  | "telegram"
  | "automation"
  | "api";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}
