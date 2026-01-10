import { Project, SkillCategory } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    technologies: ["HTML", "SCSS", "Python", "Flask"],
    image: "https://picsum.photos/seed/chert/400/200",
    links: { live: "#", cached: "#" }
  },
  {
    title: "ProtectX",
    description: "Discord anti-crash bot",
    technologies: ["React", "Express", "Discord.js", "Node.js", "HTML", "SCSS", "Python", "Flask"],
    image: "https://picsum.photos/seed/protect/400/200",
    links: { live: "#" }
  },
  {
    title: "Kahoot Answers Viewer",
    description: "Get answers to your kahoot quiz",
    technologies: ["CSS", "Express", "Node.js"],
    image: "https://picsum.photos/seed/kahoot/400/200",
    links: { live: "#" }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "Lua", "Python", "JavaScript"]
  },
  {
    title: "Databases",
    skills: ["SQLite", "PostgreSQL", "Mongo"]
  },
  {
    title: "Tools",
    skills: ["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font Awesome"]
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]
  }
];

// Reusable Dot Pattern SVG component
export const DotPattern = ({ className = "" }: { className?: string }) => (
  <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {[...Array(25)].map((_, i) => (
      <circle key={i} cx={(i % 5) * 20 + 2} cy={Math.floor(i / 5) * 20 + 2} r="2" fill="#ABB2BF" />
    ))}
  </svg>
);

export const SquaresPattern = ({ className = "" }: { className?: string }) => (
    <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="0.5" y="0.5" width="85" height="85" stroke="#ABB2BF" />
        <rect x="69.5" y="69.5" width="85" height="85" stroke="#ABB2BF" />
    </svg>
);
