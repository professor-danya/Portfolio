export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

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
