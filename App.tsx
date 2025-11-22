import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, X } from 'lucide-react';
import ContributionGraph from './components/ContributionGraph';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import Navigation from './components/Navigation';
import { Project } from './types';

// Mock Data for Projects
const projects: Project[] = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description: "A high-performance real-time analytics dashboard for crypto assets featuring WebSockets and D3 visualizations.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    imageUrl: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "HyperStore",
    description: "Headless e-commerce solution built with Next.js allowing sub-second page loads and seamless checkout flows.",
    tags: ["Next.js", "Stripe", "Tailwind", "Zustand"],
    imageUrl: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "CodeSync API",
    description: "A collaborative code editing backend service capable of handling thousands of concurrent connections.",
    tags: ["Node.js", "Redis", "Docker", "GraphQL"],
    imageUrl: "https://picsum.photos/600/400?random=3"
  },
  {
    id: 4,
    title: "Vortex UI",
    description: "An open-source React component library focused on glassmorphism and futuristic interaction patterns.",
    tags: ["Storybook", "React", "Rollup"],
    imageUrl: "https://picsum.photos/600/400?random=4"
  }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll observer to update active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-300 selection:bg-white/20 selection:text-white pb-24">
      
      {/* Background Grid Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="pt-24 pb-12 md:pt-36 md:pb-20">
          <div className="animate-slide-up">
            
            {/* Bio */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
                  Hi, I'm Qasim <span className="inline-block animate-wave">👋</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-400">
                  and I love making thoughtful mobile apps <span className="text-pink-500">💗</span>
                </h2>
              </div>

              <div className="space-y-5 text-lg text-neutral-400 leading-relaxed max-w-3xl">
                <p>
                  I’m a Software Engineer passionate about turning ideas into sleek, high-performing <strong className="text-neutral-200 font-medium">mobile apps</strong>. Give me a challenge, and I’ll find a creative solution — it’s just how I think.
                </p>
                <p>
                  Outside of coding, I’m usually immersed in a thriller movie (<em>The Wailing</em> is my favorite) or listening to Talha Anjum and Seedhe Maut. I like to think my coding style mirrors that: smooth, precise, with a touch of suspense.
                </p>
                <p>
                  I'm always looking for new opportunities to learn and grow. You can reach me out on various platforms.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#" aria-label="GitHub" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition-all group">
                  <Github size={20} className="group-hover:text-white transition-colors" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition-all group">
                  <Linkedin size={20} className="group-hover:text-white transition-colors" />
                </a>
                <a href="#" aria-label="Twitter" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition-all group">
                  <Twitter size={20} className="group-hover:text-white transition-colors" />
                </a>
                <a href="#" aria-label="Email" className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-800 transition-all group">
                  <Mail size={20} className="group-hover:text-white transition-colors" />
                </a>
                <div className="w-px h-10 bg-neutral-800 mx-1"></div>
                <a href="#" aria-label="Spotify" className="flex items-center gap-2.5 p-3 md:px-5 md:py-3 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/20 hover:bg-[#1DB954]/20 hover:border-[#1DB954]/40 transition-all group">
                   <img src="https://cdn.simpleicons.org/spotify" className="w-5 h-5 group-hover:opacity-100 opacity-80 transition-opacity" alt="Spotify" />
                  <span className="text-sm font-medium text-[#1DB954] hidden md:block">Spotify</span>
                </a>
                <a href="#" aria-label="Letterboxd" className="flex items-center gap-2.5 p-3 md:px-5 md:py-3 rounded-xl bg-[#292f38] border border-[#445566] hover:border-[#606e82] transition-all group text-neutral-300">
                  <img src="https://cdn.simpleicons.org/letterboxd/d1d5db" className="w-5 h-5 group-hover:opacity-100 opacity-80 transition-opacity" alt="Letterboxd" />
                  <span className="text-sm font-medium hidden md:block">Letterboxd</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* STATS / GRAPH SECTION */}
        <section id="stats" className="py-16 border-t border-neutral-900/50">
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-white mb-2 flex items-center gap-2">
              <span className="text-neutral-600">01.</span> Contribution Activity
            </h2>
            <p className="text-sm text-neutral-500">A visual representation of code commits over the last 52 weeks.</p>
          </div>
          
          <div className="p-5 border border-neutral-800 bg-neutral-900/20 rounded-xl backdrop-blur-sm">
            <ContributionGraph />
            <div className="flex justify-between items-center mt-3 text-xs font-mono text-neutral-600">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#1f1f1f]"></div>
                <div className="w-3 h-3 rounded bg-[#404040]"></div>
                <div className="w-3 h-3 rounded bg-[#a3a3a3]"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 border-t border-neutral-900/50">
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-white mb-2 flex items-center gap-2">
              <span className="text-neutral-600">02.</span> Tech Stack
            </h2>
            <p className="text-sm text-neutral-500">Technologies and tools I use to build digital products.</p>
          </div>
          <SkillsSection />
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-16 border-t border-neutral-900/50">
          <div className="mb-8">
            <h2 className="text-2xl font-mono text-white mb-2 flex items-center gap-2">
              <span className="text-neutral-600">03.</span> Career Timeline
            </h2>
            <p className="text-sm text-neutral-500">My professional journey in the tech industry.</p>
          </div>
          <ExperienceTimeline />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 border-t border-neutral-900/50">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-mono text-white mb-2 flex items-center gap-2">
                <span className="text-neutral-600">04.</span> Selected Works
              </h2>
              <p className="text-sm text-neutral-500">Projects that define my technical capabilities.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 border-t border-neutral-900/50 mb-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">Let's build something <span className="text-neutral-600">extraordinary</span>.</h2>
            <p className="text-base text-neutral-400">
              Currently available for freelance projects and open to full-time opportunities.
              If you have an idea or just want to say hi, drop me a message.
            </p>
            
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black font-semibold text-base rounded-full hover:bg-neutral-200 transition-colors">
              <Mail size={20} />
              <span>Say Hello</span>
            </a>

            <div className="pt-10 flex justify-center gap-8 text-neutral-600 font-mono text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </section>

      </div>

      <Navigation activeSection={activeSection} />
      
    </div>
  );
};

export default App;