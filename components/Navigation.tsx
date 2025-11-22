import React from 'react';
import { Home, User, Code, Mail, Layers, Cpu } from 'lucide-react';
import { NavItem } from '../types';

interface NavigationProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'stats', label: 'Stats', icon: Layers },
  { id: 'skills', label: 'Stack', icon: Cpu },
  { id: 'experience', label: 'Exp', icon: User },
  { id: 'projects', label: 'Work', icon: Code },
  { id: 'contact', label: 'Connect', icon: Mail },
];

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[500px]">
      <div className="flex items-center justify-between px-2 py-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-2xl shadow-black/50">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300 group ${
                isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-neutral-800/50 rounded-xl -z-10 animate-fade-in" />
              )}
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="mb-1 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="text-xs font-medium tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;