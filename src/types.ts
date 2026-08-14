export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  client?: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  contribution: string;
  impact?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeDownloadUrl: string;
  statusText: string;
  aboutText: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  capabilities: {
    title: string;
    description: string;
    iconName: string;
  }[];
  approachSteps: {
    num: string;
    title: string;
    description: string;
  }[];
  education: EducationItem[];
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
}
