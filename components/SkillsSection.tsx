import React from 'react';
import { 
  Terminal, Cpu, Globe, Database, Wrench, Bot, 
  Server, Layers, Box, Workflow, Link, Smile, Cloud
} from 'lucide-react';

interface Skill {
  name: string;
  iconClass?: string; // For devicon classes
  icon?: React.ElementType; // For lucide-react fallbacks
}

interface SkillCategory {
  category: string;
  icon: React.ElementType;
  items: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    icon: Terminal,
    items: [
      { name: "TypeScript", iconClass: "devicon-typescript-plain" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain" },
      { name: "Python", iconClass: "devicon-python-plain" },
      { name: "Go", iconClass: "devicon-go-plain" },
      { name: "Rust", iconClass: "devicon-rust-plain" },
      { name: "SQL", icon: Database }
    ]
  },
  {
    category: "Frameworks",
    icon: Cpu,
    items: [
      { name: "React", iconClass: "devicon-react-original" },
      { name: "Next.js", iconClass: "devicon-nextjs-plain" },
      { name: "Vue", iconClass: "devicon-vuejs-plain" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain" },
      { name: "Express", iconClass: "devicon-express-original" },
      { name: "Tailwind", iconClass: "devicon-tailwindcss-original" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
      { name: "Redis", iconClass: "devicon-redis-plain" },
      { name: "Supabase", iconClass: "devicon-supabase-plain" }, // Fallback handled if class missing
      { name: "DynamoDB", icon: Database }
    ]
  },
  {
    category: "Networking",
    icon: Globe,
    items: [
      { name: "REST", icon: Globe },
      { name: "GraphQL", iconClass: "devicon-graphql-plain" },
      { name: "WebSockets", icon: Layers },
      { name: "gRPC", icon: Box },
      { name: "Nginx", iconClass: "devicon-nginx-original" },
      { name: "AWS VPC", icon: Cloud }
    ]
  },
  {
    category: "Dev Tools",
    icon: Wrench,
    items: [
      { name: "Git", iconClass: "devicon-git-plain" },
      { name: "Docker", iconClass: "devicon-docker-plain" },
      { name: "Kubernetes", iconClass: "devicon-kubernetes-plain" },
      { name: "Linux", iconClass: "devicon-linux-plain" },
      { name: "CI/CD", icon: Workflow },
      { name: "Vercel", iconClass: "devicon-vercel-original" }
    ]
  },
  {
    category: "AI Tools",
    icon: Bot,
    items: [
      { name: "OpenAI", icon: Bot },
      { name: "LangChain", icon: Link },
      { name: "Hugging Face", icon: Smile },
      { name: "TensorFlow", iconClass: "devicon-tensorflow-original" },
      { name: "PyTorch", iconClass: "devicon-pytorch-original" }
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skillsData.map((skillGroup, index) => {
        const GroupIcon = skillGroup.icon;
        return (
          <div key={index} className="p-6 border border-neutral-800 bg-neutral-900/20 rounded-xl hover:border-neutral-700 transition-all duration-300 group flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-5 pb-2.5 border-b border-neutral-800/50 text-neutral-500 group-hover:text-neutral-300 transition-colors">
              <GroupIcon size={16} />
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold">{skillGroup.category}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {skillGroup.items.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-neutral-900/40 border border-neutral-800/50 hover:bg-neutral-800 hover:border-neutral-700 transition-colors cursor-default group/item">
                    {item.iconClass ? (
                      <i className={`${item.iconClass} text-base text-neutral-400 group-hover/item:text-white transition-colors`} />
                    ) : ItemIcon ? (
                      <ItemIcon size={16} className="text-neutral-400 group-hover/item:text-white transition-colors" />
                    ) : null}
                    <span className="text-xs text-neutral-400 group-hover/item:text-neutral-200 font-mono truncate">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSection;