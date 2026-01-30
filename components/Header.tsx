
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <header className="w-full border-b border-stark-silver/10 bg-stark-charcoal/90 backdrop-blur-xl sticky top-0 z-[100]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="size-10 flex items-center justify-center border-2 border-primary bg-primary/5 text-primary rounded-sm transform rotate-45 group hover:rotate-90 transition-transform duration-500">
            <span className="material-symbols-outlined text-xl -rotate-45 group-hover:-rotate-90 transition-transform duration-500">all_inclusive</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-black tracking-tighter leading-none">R.S.N.R</h1>
            <span className="text-[9px] text-stark-silver tracking-[0.3em] uppercase opacity-60 font-mono">Precision Engineering</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center bg-black/40 border border-stark-silver/5 rounded-full px-2 py-1">
          <button onClick={() => scrollTo('hero')} className="px-6 py-2 text-xs font-bold text-stark-silver hover:text-white transition-colors uppercase tracking-widest">Home</button>
          <button onClick={() => scrollTo('specs')} className="px-6 py-2 text-xs font-bold text-stark-silver hover:text-white transition-colors uppercase tracking-widest">Schematics</button>
          <button onClick={() => scrollTo('certifications')} className="px-6 py-2 text-xs font-bold text-stark-silver hover:text-white transition-colors uppercase tracking-widest">Certifications</button>
          <button onClick={() => scrollTo('archives')} className="px-6 py-2 text-xs font-bold text-stark-silver hover:text-white transition-colors uppercase tracking-widest">Archives</button>
          <button onClick={() => scrollTo('history')} className="px-6 py-2 text-xs font-bold text-stark-silver hover:text-white transition-colors uppercase tracking-widest">Service Log</button>
        </nav>

        {/* Status/CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end text-right font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-primary animate-pulse">●</span>
              <span className="text-[11px] text-white tracking-widest">{formatTime(time)}</span>
            </div>
            <span className="text-[9px] text-stark-silver opacity-50 uppercase tracking-tighter">System Status: Nominal</span>
          </div>
          <button className="hidden sm:flex h-11 items-center bg-primary hover:bg-red-900 text-white px-8 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded shadow-[0_0_15px_rgba(128,0,0,0.3)]">
            Dossier
          </button>
          <button className="md:hidden text-white p-2 border border-stark-silver/10 rounded">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
