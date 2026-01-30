
import React from 'react';
import { HISTORY } from '../constants';

const History: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12 relative z-10">
      {/* Page Heading */}
      <div className="flex flex-col gap-2 border-l-4 border-primary pl-6">
        <div className="flex items-center gap-3 text-stark-gold mb-1">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase">Classified File: R&D_LOG_01</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">Operational History</h2>
        <p className="text-[#bc9a9a] max-w-lg text-lg font-light leading-relaxed">
          Authorized personnel only. Reviewing service record and technical deployment history.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative py-8 pl-4 md:pl-0">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stark-gold/50 to-transparent md:-translate-x-1/2"></div>
        <div className="flex flex-col gap-16 md:gap-24 relative">
          {HISTORY.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="absolute left-4 md:left-1/2 bottom-0 h-16 w-px bg-gradient-to-b from-stark-gold/50 to-transparent md:-translate-x-1/2"></div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const isFirstItem = index === 0;

  return (
    <div className={`group relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${!isFirstItem && isEven ? 'md:flex-row' : !isFirstItem && 'md:flex-row-reverse'}`}>
      {/* Content Side */}
      <div className={`md:w-1/2 order-2 md:order-1 pl-12 md:pl-0 pt-2 md:pt-0 ${!isFirstItem && isEven ? 'md:pr-12 md:text-right' : !isFirstItem && 'md:pl-12 md:text-left'} ${isFirstItem && 'md:text-left md:pr-12'}`}>
        <h3 className="text-2xl font-bold text-white tracking-tight uppercase">{item.title}</h3>
        <p className="text-stark-gold font-mono text-sm tracking-widest mt-1 uppercase">{item.role}</p>
        <div className="text-[#bc9a9a] mt-2 text-sm leading-relaxed space-y-2">
          {item.description.split('\n').map((line, idx) => {
            const cleanedLine = line.replace('• ', '');
            const colonIndex = cleanedLine.indexOf(':');
            const hasColon = colonIndex !== -1;
            
            return (
              <div key={idx} className="flex gap-2">
                <span className="flex-shrink-0">•</span>
                <p>
                  {hasColon ? (
                    <>
                      <span className="text-stark-gold font-semibold">
                        {cleanedLine.substring(0, colonIndex)}:
                      </span>
                      <span>{cleanedLine.substring(colonIndex + 1)}</span>
                    </>
                  ) : (
                    <span>{cleanedLine}</span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Node */}
      <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-stark-gold z-10 transition-all duration-300 order-1 md:order-2 mt-2 md:mt-0 ${
        item.isActive ? 'bg-primary shadow-[0_0_10px_rgba(197,160,89,0.5)]' : 'bg-surface-dark group-hover:bg-primary'
      }`}></div>

      {/* Date Side */}
      <div className={`md:w-1/2 order-3 pl-12 md:pl-0 pt-1 md:pt-0 ${!isFirstItem && isEven ? 'md:pl-12 md:text-left' : !isFirstItem && 'md:pr-12 md:text-right'} ${isFirstItem && 'md:pl-12 md:text-left'}`}>
        {item.isActive && (
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 px-3 py-1 rounded text-primary-200 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-primary">Active Mission</span>
          </div>
        )}
        <p className="text-white font-mono text-xl uppercase tracking-tighter">{item.period}</p>
      </div>
    </div>
  );
};

export default History;
