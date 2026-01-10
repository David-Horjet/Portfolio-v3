export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    live?: string;
    cached?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
