
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface HomeProps {
  setView?: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Harshit Patro';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <p className="text-primary text-[10px] tracking-[0.2em] font-medium uppercase">System Status: Online</p>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase glitch-text">
            {displayedName}
            <span className="animate-pulse">|</span>
          </h1>
          <div className="flex justify-center">
            <div className="h-[2px] w-24 md:w-48 bg-primary"></div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg md:text-xl text-primary/80 font-medium tracking-widest uppercase">
            Robotics Engineer | Autonomous Systems | Drone Specialist
          </p>
          <p className="text-2xl md:text-3xl font-light text-white/90 blinking-cursor">
            Designing autonomous mobile robots with advanced perception systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button onClick={() => setView?.(View.PROJECTS)} className="group relative px-10 py-4 bg-primary text-white font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10">View Projects</span>
          </button>
          
          <a href="/Harshit-PatroRobotics.pdf" download="Harshit-PatroRobotics.pdf" className="group relative px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.15em] overflow-hidden transition-all duration-300 hover:border-primary hover:text-primary">
            <div className="absolute top-0 right-0 p-1 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-1 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">download</span>
              Download Resume
            </span>
          </a>
        </div>
      </div>

      <div className="mt-20 w-full max-w-5xl px-8 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-10 text-left">
          <div className="space-y-1">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">ROS2 Projects</p>
            <p className="text-xl font-bold text-white tracking-tight">10+<span className="text-primary text-sm ml-1 uppercase">Complete</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Technical Skills</p>
            <p className="text-xl font-bold text-white tracking-tight">20+<span className="text-primary text-sm ml-1">Technologies</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">SLAM Systems</p>
            <p className="text-xl font-bold text-white tracking-tight">Expert<span className="text-primary text-sm ml-1 uppercase">Level</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Active Projects</p>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#259df4]"></div>
              <p className="text-xl font-bold text-white tracking-tight uppercase">UAV Robotics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
