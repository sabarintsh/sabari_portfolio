
import React from 'react';

const Specs: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="mb-16 border-b border-primary/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-stark-gold"></span>
            <span className="text-[11px] text-stark-gold tracking-[0.4em] uppercase font-bold">Tech Protocol</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
            Technical <span className="text-primary italic">Schematics</span>
          </h2>
        </div>
        <div className="text-right font-mono hidden md:block border-r-2 border-primary/20 pr-6">
          <p className="text-[10px] text-stark-silver/40">KERNEL: V.2.9.4-STABLE</p>
          <p className="text-[10px] text-primary">SCAN_FREQ: 144Hz</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: CAD & Computational Analysis */}
        <div className="group relative bg-surface-dark/40 border border-white/5 p-1 rounded transition-all hover:border-primary/40 overflow-hidden">
          <div className="absolute inset-0 radar-scan opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          <div className="bg-[#1A1111] p-8 h-full relative z-10">
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-stark-gold text-lg font-black tracking-widest uppercase">01 // Engineering CAD</h3>
              <div className="size-10 flex items-center justify-center bg-primary/10 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-xl">view_in_ar</span>
              </div>
            </div>
            <div className="space-y-8">
              <SkillBar label="SolidWorks (CSWP)" percentage={95} />
              <SkillBar label="CATIA V5" percentage={85} />
              <SkillBar label="Ansys Fluent (CFD)" percentage={70} />
              <SkillBar label="Autodesk Fusion 360" percentage={90} />
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-2">
              <span className="text-[10px] px-3 py-1 bg-black text-stark-silver/60 font-mono border border-white/5">FEA_OPT</span>
              <span className="text-[10px] px-3 py-1 bg-black text-stark-silver/60 font-mono border border-white/5">DFM_CHECK</span>
              <span className="text-[10px] px-3 py-1 bg-black text-stark-silver/60 font-mono border border-white/5">LOFT_SRF</span>
            </div>
          </div>
        </div>

        {/* Column 2: Embedded Systems & Controls */}
        <div className="group relative bg-surface-dark/40 border border-white/5 p-1 rounded transition-all hover:border-primary/40 overflow-hidden">
          <div className="absolute inset-0 radar-scan opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          <div className="bg-[#1A1111] p-8 h-full relative z-10">
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-stark-gold text-lg font-black tracking-widest uppercase">02 // Controls & Dev</h3>
              <div className="size-10 flex items-center justify-center bg-primary/10 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-xl">developer_board</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-black/40 border-l-2 border-primary">
                <p className="text-[10px] text-primary font-mono mb-2 tracking-widest">MICRO_CONTROLLERS</p>
                <p className="text-sm text-stark-silver font-medium">Arduino / ESP32 / Raspberry Pi</p>
              </div>
              <div className="p-4 bg-black/40 border-l-2 border-stark-gold">
                <p className="text-[10px] text-stark-gold font-mono mb-2 tracking-widest">LOGIC_FLOW</p>
                <p className="text-sm text-stark-silver font-medium">MATLAB Simulink / LabVIEW</p>
              </div>
              <div className="p-4 bg-black/40 border-l-2 border-primary">
                <p className="text-[10px] text-primary font-mono mb-2 tracking-widest">PROTOCOLS</p>
                <p className="text-sm text-stark-silver font-medium">CAN Bus / I2C / SPI </p>
              </div>
            </div>
            <div className="mt-10 flex justify-end gap-1">
              {[1,2,3,4].map(i => <div key={i} className="w-1 h-3 bg-primary animate-pulse" style={{ animationDelay: `${i*200}ms` }}></div>)}
            </div>
          </div>
        </div>

        {/* Column 3: Prototyping & Fabrication */}
        <div className="group relative bg-surface-dark/40 border border-white/5 p-1 rounded transition-all hover:border-primary/40 overflow-hidden">
          <div className="absolute inset-0 radar-scan opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          <div className="bg-[#1A1111] p-8 h-full relative z-10">
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-stark-gold text-lg font-black tracking-widest uppercase">03 // Fabrication</h3>
              <div className="size-10 flex items-center justify-center bg-primary/10 text-primary border border-primary/20">
                <span className="material-symbols-outlined text-xl">manufacturing</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FabCard icon="print" label="Additive" detail="SLA/FDM" />
              <FabCard icon="settings_suggest" label="CNC" detail="G-Code/CAM" />
              <FabCard icon="auto_fix" label="Welding" detail="TIG/MIG" />
              <FabCard icon="precision_manufacturing" label="Casting" detail="Mold/Die" />
            </div>
            <div className="mt-12 bg-primary/5 p-4 border border-primary/10 rounded italic text-[11px] text-stark-silver/60 text-center">
              Specializing in High-Fidelity functional rapid prototyping for automotive sub-systems.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar: React.FC<{ label: string; percentage: number }> = ({ label, percentage }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center text-[11px] font-mono text-stark-silver tracking-widest">
      <span className="font-bold">{label}</span>
      <span className="text-primary">{percentage}%</span>
    </div>
    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-primary-light shadow-[0_0_10px_#800000]" 
        style={{ width: `${percentage}%`, transition: 'width 1.5s cubic-bezier(0.65, 0, 0.35, 1)' }}
      ></div>
    </div>
  </div>
);

const FabCard: React.FC<{ icon: string; label: string; detail: string }> = ({ icon, label, detail }) => (
  <div className="bg-black/30 border border-white/5 p-4 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary/20 transition-colors">
    <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
    <span className="text-[10px] font-black text-white uppercase tracking-tighter">{label}</span>
    <span className="text-[9px] text-stark-gold font-mono tracking-widest uppercase">{detail}</span>
  </div>
);

export default Specs;
