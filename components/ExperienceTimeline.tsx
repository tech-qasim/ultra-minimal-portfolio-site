import React from 'react';
import { Experience } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Junior Developer",
    company: "Startup Inc.",
    period: "2020 - 2021",
    description: "Built landing pages and maintained legacy React codebases."
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "TechCorp",
    period: "2021 - 2023",
    description: "Led migration to Next.js, improved performance by 40%."
  },
  {
    id: 3,
    role: "Senior Engineer",
    company: "InnovateAI",
    period: "2023 - Present",
    description: "Architecting AI-driven interfaces and design systems."
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative w-full pb-0">
      {/* Connecting Line - Aligned with the center of the dot */}
      <div className="absolute top-2 left-0 w-full h-[1px] bg-neutral-800 hidden md:block" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="group relative flex flex-col md:items-center md:text-center animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
            
            {/* Dot on Line - Desktop Only */}
            <div className="hidden md:flex w-4 h-4 bg-neutral-900 border border-neutral-600 rounded-full z-10 mb-6 group-hover:bg-neutral-200 group-hover:border-white transition-colors duration-300" />
            
            <div className="p-6 border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm rounded-xl w-full hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/50">
              <div className="flex items-center md:justify-center gap-2 mb-1.5 text-neutral-500 text-xs font-mono uppercase tracking-wider">
                <Calendar size={12} />
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1.5">{exp.role}</h3>
              <div className="flex items-center md:justify-center gap-2 text-neutral-400 mb-4">
                <Briefcase size={14} />
                <span className="text-sm">{exp.company}</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;