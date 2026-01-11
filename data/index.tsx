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
  },
  {
    title: "FlyBirdie",
    description: "A Match, merge, and master game on Base and TON. Compete with players worldwide.",
    technologies: ["Next.Js", "TypeScript", "Redux", "Figma"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2005.17.10.png?w=800&h=600&fit=crop",
    links: { live: "#" }
  },
  {
    title: "Ogavisa",
    description: "Comprehensive visa and immigration service platform streamlining application processes.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Figma"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2005.22.43.png?w=800&h=600&fit=crop",
    links: { live: "#" }
  },
  {
    title: "Sicilia Brand",
    description: "Italian E-commerce fashion platform with custom shopping experience, inventory management, and seamless checkout process.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Figma"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    links: { live: "#" }
  },
  {
    title: "StyleMeUp",
    description: "Beauty and grooming booking website that make it easy and faster to connect with top service providers across Nigeria.",
    technologies: ["NextJs", "TypeScript", "Node.js", "Express", "Figma"],
    image: "https://p0donyprzzs2zmqz.public.blob.vercel-storage.com/Screenshot%202025-07-20%20at%2005.18.52.png?w=800&h=600&fit=crop",
    links: { live: "#" }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "Rust", "Python", "JavaScript"]
  },
  {
    title: "Databases",
    skills: ["SQLite", "PostgreSQL", "MongoDb", "Supabase"]
  },
  {
    title: "Tools",
    skills: ["VSCode", "Postman", "Linux", "Figma", "Swagger", "Redux", "Ubuntu", "Git"]
  },
  {
    title: "Other",
    skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "Websockets", "Docker"]
  },
  {
    title: "Frameworks",
    skills: ["React", "FastApi", "Express.js", "Next.js", "Anchor"]
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
