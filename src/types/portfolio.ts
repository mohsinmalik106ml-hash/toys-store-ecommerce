export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Laravel Backend' | 'CRM & Enterprise' | 'REST API';
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveDemoUrl: string;
  previewImage: string;
  architectureDetails?: {
    mvcStructure: string;
    databaseTables: string[];
    sampleRoute: string;
    controllerLogic: string;
  };
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  badge: string; // e.g. "Core Expertise", "Proficient", "Practical Experience"
  details: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  type: 'Internship' | 'Full-Time' | 'Practical Training';
  descriptionBullets: string[];
  keyTech: string[];
  achievement: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
  keyCourses: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  techTags: string[];
  url: string;
  updatedDate: string;
  openIssues: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  roleInterest?: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  feedback: string;
  relationship: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  topics: string[];
}

export interface TechnicalArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  highlights: string[];
}

export interface PortfolioProfile {
  name: string;
  title: string;
  shortIntro: string;
  fullBio: string;
  email: string;
  whatsapp: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  careerObjective: string;
  avatarUrl: string;
}
