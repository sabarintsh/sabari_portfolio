
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full z-10 border-t border-white/5 bg-black pt-24 pb-12 px-6 lg:px-24">
      {/* HUD System Overlay Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
      
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full"></span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Secure Connection Active</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Ready for <span className="text-primary">Deployment</span>
          </h2>
          
          <p className="text-stark-silver/40 font-mono text-sm max-w-xl mb-12">
            Currently accepting high-impact R&D opportunities in aerospace and automotive sectors. Authorized for system architecture and technical consultancy.
          </p>
          
          <a 
            href="mailto:sabarintsh@gmail.com" 
            className="group relative text-3xl md:text-6xl font-black tracking-tighter text-white hover:text-primary transition-all duration-500 flex items-center gap-6"
          >
            sabarintsh@gmail.com
            <span className="material-symbols-outlined text-4xl group-hover:translate-x-4 transition-transform duration-500">mail</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ContactCard title="LinkedIn" sub="Professional Network" icon="diversity_3" link="https://www.linkedin.com/in/sabari-nitesh-raj/" />
          <ContactCard title="Technical PDF" sub="Download Dossier" icon="file_download" link="/resume.pdf" download={true} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <div className="flex items-center gap-4">
            <div className="size-10 border border-primary flex items-center justify-center text-primary font-bold rotate-45">
              <span className="-rotate-45 text-sm">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold tracking-widest uppercase">R. Sabari Nitesh Raj</span>
              <span className="text-[10px] text-stark-silver/40 font-mono uppercase tracking-tighter">EST. 2024 // ALL RIGHTS RESERVED</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-stark-silver/30 uppercase tracking-[0.2em]">
            <span>COORD: 11.0168° N, 76.9558° E</span>
            <span className="text-primary">●</span>
            <span>Uplink: Starlink-01</span>
            <span className="text-primary">●</span>
            <span>SYS_LOG: Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactCard: React.FC<{ title: string; sub: string; icon: string; link: string; download?: boolean }> = ({ title, sub, icon, link, download }) => (
  <a href={link} download={download} target={!download ? "_blank" : undefined} rel={!download ? "noopener noreferrer" : undefined} className="group bg-surface-dark/20 border border-white/5 p-6 flex items-center gap-6 hover:border-primary/40 transition-all duration-300 rounded overflow-hidden relative">
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="size-14 flex items-center justify-center bg-black border border-white/5 text-primary rounded-sm group-hover:border-primary/40 transition-colors z-10">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <div className="flex flex-col z-10">
      <span className="text-white text-lg font-black uppercase tracking-tight group-hover:text-primary transition-colors">{title}</span>
      <span className="text-[10px] text-stark-silver/40 font-mono uppercase tracking-widest">{sub}</span>
    </div>
  </a>
);

export default Footer;
