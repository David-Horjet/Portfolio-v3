import { DotPattern, SquaresPattern, SKILLS } from "@/data";


const SkillsSection: React.FC = () => {
  return (
    <section className="my-28 px-4">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="h-px bg-primary w-full max-w-60"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Decor */}
        <div className="hidden md:flex flex-1 relative min-h-75 items-center justify-center">
          <DotPattern className="absolute top-0 left-0" />
          <SquaresPattern className="absolute top-10 right-20 scale-125" />
          <DotPattern className="absolute bottom-10 left-32" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border border-gray"></div>
          <div className="absolute top-20 right-0 w-24 h-24 border border-gray"></div>
        </div>

        {/* Right Side: Skill Grids */}
        <div className="flex-[1.5] flex flex-wrap gap-4 justify-end">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="border border-gray h-fit min-w-37.5 grow md:grow-0 group hover:border-primary transition-colors">
              <div className="p-2 border-b border-gray text-white font-bold group-hover:border-primary transition-colors">
                {cat.title}
              </div>
              <div className="p-2 text-gray text-sm flex flex-wrap gap-x-3 gap-y-1">
                {cat.skills.map((s, i) => (
                  <span key={i} className="hover:text-white cursor-default transition-colors">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
