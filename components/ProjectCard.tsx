import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative border border-neutral-800 bg-neutral-925 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col h-full">
      {/* Image Placeholder / Area */}
      <div className="h-48 w-full bg-neutral-900 relative overflow-hidden border-b border-neutral-800 group-hover:border-neutral-700 transition-colors">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30">
             <span className="font-mono text-neutral-700 text-xs uppercase tracking-widest">No Preview</span>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
          <button className="p-3 bg-neutral-200 text-black rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
            <ExternalLink size={18} />
          </button>
          <button className="p-3 bg-neutral-800 text-white border border-neutral-600 rounded-full hover:bg-neutral-700 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
            <Github size={18} />
          </button>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-neutral-100 mb-2 font-mono group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-sm text-neutral-400 mb-5 leading-relaxed flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-mono uppercase tracking-wider text-neutral-400 border border-neutral-800 rounded bg-neutral-900/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;