
import React from 'react';
import { Project } from '../types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-gray flex flex-col group hover:border-primary transition-colors">
      <div className="w-full h-48 overflow-hidden border-b border-gray group-hover:border-primary transition-colors">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      
      <div className="p-2 border-b border-gray group-hover:border-primary transition-colors text-gray text-xs flex flex-wrap gap-2">
        {project.technologies.join(" ")}
      </div>
      
      <div className="p-4 flex-1">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray mb-4 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex gap-4">
          {project.links.live && (
            <Link href={project.links.live} className="border border-primary px-3 py-1 text-white text-sm font-medium hover:bg-primary/10 transition-colors flex items-center gap-2">
              Live {"<~>"}
            </Link>
          )}
          {/* {project.links.cached && (
            <button className="border border-gray px-3 py-1 text-gray text-sm font-medium hover:bg-gray/10 transition-colors flex items-center gap-2">
              Cached {">"}
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
