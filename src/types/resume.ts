export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface WorkExperience {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights?: string[];
}

export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  url?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface ResumeData {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    profiles: Profile[];
  };
  work: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  volunteer?: {
    organization: string;
    position: string;
    summary: string;
  }[];
}