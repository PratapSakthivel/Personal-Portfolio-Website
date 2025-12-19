export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string; // Extended description for the modal
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI/ML' | 'Tools';
  level: number; // 0-100
  icon: string; // URL to icon image
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  cgpa?: string;
  percentage?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  quote: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CERTIFICATIONS = 'certifications',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact',
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}