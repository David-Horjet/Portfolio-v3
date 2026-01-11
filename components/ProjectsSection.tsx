
import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/data';

const ProjectsSection: React.FC = () => {
  return (
    <section id='works' className="my-20 px-4">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-primary">#</span>projects
          </h2>
          <div className="h-px bg-primary w-full max-w-125"></div>
        </div>
        <button className="text-white hover:text-primary transition-colors whitespace-nowrap text-sm md:text-base">
          View all ~~{">"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
