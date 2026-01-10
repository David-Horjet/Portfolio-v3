import { Project, SkillCategory } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Swiv",
    description: "A decentralized perpetuals exchange built on Solana with advanced trading features.",
    technologies: ["Next.Js", "Typescript", "Node.Js", "Websockets", "Solana", "Rust", "Anchor"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2004.57.47.png?w=600&h=400&fit=crop",
    links: { live: "#", cached: "#" }
  },
  {
    title: "Omrix AI",
    description: "Create, deploy, and automate AI agents in seconds — no code necessary",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2005.14.50.png?w=800&h=600&fit=crop",
    links: { live: "#" }
  },
  {
    title: "Motherland Imperial",
    description: "Luxury real estate platform showcasing premium properties with admin management tools.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Figma"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2005.20.50.png?w=800&h=600&fit=crop",
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
