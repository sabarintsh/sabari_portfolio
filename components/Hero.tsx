
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 relative">
      {/* Decorative Sidebar Left */}
      <div className="hidden xl:flex absolute left-0 top-0 bottom-0 w-24 border-r border-stark-silver/5 flex-col justify-between py-12 items-center z-20">
        <div className="text-[10px] text-stark-silver/20 font-mono -rotate-90 whitespace-nowrap tracking-[0.5em] uppercase">
          SECURE_UPLINK_0921-X
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
          <div className="flex flex-col gap-4">
             <SocialIcon icon="hub" />
             <SocialIcon icon="code" />
             <SocialIcon icon="terminal" />
          </div>
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        </div>
        <div className="text-[10px] text-primary/40 font-mono tracking-widest animate-pulse">
          LIVE
        </div>
      </div>

      <div className="lg:pl-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Typography */}
        <div className="lg:col-span-7 flex flex-col gap-10 relative z-20">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-stark-gold"></span>
            <span className="text-stark-gold font-mono text-[11px] font-bold uppercase tracking-[0.4em]">R&D Operations Directorate</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
              SABARI <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-stark-silver inline-block py-2">NITESH RAJ</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-stark-gold font-bold uppercase tracking-[0.25em] pt-2 flex items-center gap-4">
              <span className="w-4 h-4 bg-primary rounded-full"></span>
              DESIGN & R&D ENGINEER
            </h2>
          </div>

          <p className="text-stark-silver/70 text-base md:text-lg leading-relaxed max-w-2xl font-body border-l-4 border-primary/20 pl-8 py-2 italic">
            "Engineering mobility through the intersection of aerodynamics, powertrain optimization, and advanced mechatronic integration. Precision is not a goal; it's the standard."
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-6">
            <button 
              onClick={() => document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex h-16 min-w-[240px] items-center justify-center bg-primary overflow-hidden text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(128,0,0,0.4)] rounded"
            >
              <div className="absolute inset-0 w-2 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-4 text-sm font-black uppercase tracking-[0.3em]">
                Initialize Access
                <span className="material-symbols-outlined text-xl animate-bounce-x">arrow_right_alt</span>
              </span>
            </button>
            
            <div className="flex flex-col gap-1">
                <span className="text-[10px] text-stark-silver font-mono uppercase tracking-widest opacity-50">Authorized Personnel Only</span>
                <div className="h-0.5 w-full bg-stark-silver/10 overflow-hidden">
                    <div className="h-full bg-stark-gold w-1/3 animate-[loading_3s_infinite_linear]"></div>
                </div>
            </div>
          </div>

          {/* Awards Recognition Card */}
          <a 
            href="https://drive.google.com/drive/folders/1og3zYgd4w0CLL9z3IcXxnGclR4QWwbh6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 border border-stark-gold/30 bg-[#1e1515] p-1 rounded relative group overflow-hidden w-full block cursor-pointer transition-all hover:border-stark-gold/60 hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stark-gold"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stark-gold"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stark-gold"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stark-gold"></div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10 bg-grid-pattern bg-[size:20px_20px]">
              <div className="flex items-center gap-4">
                <div className="bg-stark-gold/10 p-3 rounded-full border border-stark-gold/20 text-stark-gold">
                  <span className="material-symbols-outlined text-3xl">military_tech</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white text-lg font-bold tracking-wider uppercase mb-1">Awards Recognition</h4>
                  <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-sm text-[#bc9a9a] font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Best Out-going Student
                    </span>
                    <span className="hidden md:inline text-white/20">|</span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Best Project Award
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-[10px] text-white/20 font-mono block">REF_ID: AWD-2020-X</span>
                <span className="material-symbols-outlined text-white/20">qr_code_2</span>
              </div>
            </div>
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
          </a>
        </div>

        {/* Right: Technical HUD Visual */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[800px] w-full flex items-center justify-center perspective-1000">
          {/* Background Technical Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-stark-silver/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-primary/10 rounded-full border-dashed animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-t-2 border-stark-gold/20 rounded-full animate-[spin_15s_ease-in-out_infinite]"></div>
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center floating-element">
            {/* The Main Visual Car Part Mockup */}
            <div className="relative w-full aspect-square max-w-[550px] bg-contain bg-center bg-no-repeat transition-all duration-700 hover:rotate-2 hover:scale-110" 
                 style={{ 
                   backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHSjZfsbGmsVJwPMqCTR5IJvPekMp_h-JsbwarPGELxxRvSqoDaM5R9l0Q2HfiEatIJFMgncJatt_bltii6d1lifOg55ULfmA97cYFvsi8I4CgpBylQbefwbrxLWgV_iRH9HNnYBMQO-8wHbHlJoSbSywuwQa1N2_L8CYN-TcxG6juC1NjCTYu_hwg-4Y8zwhVnogDFMGHwlK609bhHg-dBq3e81hhqa_uQA4Y7AVMjYAUWuJvPtDO6Q8cItJsPHRD7IVrtYgH4Ic')",
                   filter: 'drop-shadow(0 0 30px rgba(128, 0, 0, 0.4)) contrast(1.1)'
                 }}>
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 scanline opacity-30 pointer-events-none"></div>
              
              {/* Dynamic Callouts */}
              <div className="absolute top-[20%] right-[-10%] bg-black/80 border border-primary/40 p-4 backdrop-blur-md hidden md:block">
                <div className="text-[10px] text-primary font-mono mb-2 flex justify-between">
                  <span>SYSTEM_LOAD</span>
                  <span>[88%]</span>
                </div>
                <div className="w-32 h-1.5 bg-primary/20 overflow-hidden">
                  <div className="h-full bg-primary w-[88%] shadow-[0_0_8px_#800000]"></div>
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[-5%] bg-black/80 border-l-4 border-stark-gold p-4 backdrop-blur-md">
                <p className="text-stark-gold text-xs font-black font-mono uppercase tracking-widest">A-01 MK IV</p>
                <p className="text-stark-silver text-[10px] font-mono mt-1 opacity-70">Chassis Structural Analysis</p>
              </div>
            </div>
          </div>

          {/* Corner Markers */}
          <div className="absolute top-0 left-0 text-primary p-4 border-t border-l border-primary/30 rounded-tl-xl"><span className="material-symbols-outlined">add</span></div>
          <div className="absolute bottom-0 right-0 text-primary p-4 border-b border-r border-primary/30 rounded-br-xl"><span className="material-symbols-outlined">add</span></div>
        </div>
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <button className="text-stark-silver/40 hover:text-primary transition-colors p-2">
    <span className="material-symbols-outlined">{icon}</span>
  </button>
);

export default Hero;
