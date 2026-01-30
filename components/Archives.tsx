
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Archives: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'AEROSPACE' | 'ROBOTICS' | 'AUTOMOTIVE'>('ALL');

  const filteredProjects = PROJECTS.filter(p => filter === 'ALL' || p.category === filter);

  return (
    <div className="max-w-[1000px] mx-auto px-6 flex flex-col gap-8">
      <header className="flex items-end justify-between border-b border-[#3a2727] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[#bc9a9a] text-xs font-mono tracking-widest uppercase">System Online // Secure Connection</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3 uppercase">
            Project Archives <span className="text-primary opacity-50 text-2xl">//</span> Sector 7
          </h1>
        </div>
        <div className="hidden md:flex flex-col items-end">
          <div className="text-[#bc9a9a] text-[10px] font-mono tracking-widest text-right">
            COORDINATES: 34.0259° N, 118.7798° W<br/>
            LAST SYNC: 08:42:15 AM
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-2 py-2">
        {['ALL', 'AEROSPACE', 'ROBOTICS', 'AUTOMOTIVE'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-4 py-1.5 text-xs font-bold tracking-wider rounded border transition-all duration-300 ${
              filter === f 
              ? 'bg-primary text-white border-primary shadow-[0_0_10px_rgba(128,0,0,0.3)]' 
              : 'bg-[#231515] text-[#bc9a9a] border-[#3a2727] hover:bg-[#3a2727] hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-[#3a2727] pt-6 mt-4">
        <div className="text-[#bc9a9a] text-xs font-mono tracking-widest">
          DISPLAYING {filteredProjects.length} OF {PROJECTS.length} ARCHIVES
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center border border-[#3a2727] hover:border-primary text-white rounded bg-[#231515] transition-colors" disabled>
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-primary text-white rounded bg-primary/20 shadow-[0_0_10px_rgba(128,0,0,0.3)]">
            <span className="text-xs font-bold">1</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-[#3a2727] hover:border-primary text-white rounded bg-[#231515]">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-surface-dark/50 hover:bg-surface-dark border border-[#3a2727] hover:border-primary/50 transition-all duration-300 rounded overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
      <div className="relative flex flex-col md:flex-row h-full">
        {/* Visual Side */}
        <div className="w-full md:w-64 h-48 md:h-auto relative bg-[#1a1111] border-b md:border-b-0 md:border-r border-[#3a2727] p-4 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative w-full h-full bg-contain bg-no-repeat bg-center grayscale group-hover:grayscale-0 transition-all duration-500" 
               style={{ backgroundImage: `url('${project.imageUrl}')` }}></div>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono text-primary/80 uppercase">{project.figLabel}</div>
        </div>

        {/* Content Side */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-bold tracking-[0.2em] border px-2 py-0.5 rounded shadow-sm ${
                project.tag === 'CLASSIFIED' ? 'text-primary border-primary/50 bg-primary/10' : 'text-stark-gold border-stark-gold/30'
              }`}>
                {project.tag}
              </span>
              <span className="text-[#bc9a9a] text-[10px] font-mono uppercase">ID: {project.id}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2 uppercase tracking-tight">{project.title}</h3>
            <p className="text-[#bc9a9a] text-sm leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>
          <div className="flex items-end justify-between mt-2">
            <div className="flex gap-4 text-xs font-mono text-[#7a6a6a]">
              <div><span className="block text-[10px] opacity-60 uppercase">Status</span>{project.status}</div>
              <div><span className="block text-[10px] opacity-60 uppercase">Date</span>{project.date}</div>
            </div>
            <a 
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2a1e1e] hover:bg-primary text-white text-xs font-bold tracking-widest px-4 py-2 rounded transition-all group-hover:shadow-[0_0_10px_rgba(128,0,0,0.3)] cursor-pointer"
            >
              <span>ACCESS FILE</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;
