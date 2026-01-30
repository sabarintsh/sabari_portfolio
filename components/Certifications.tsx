import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Product design',
      description: 'Product design, designing softwares - Solidworks, Catia - CADD center',
      link: 'https://drive.google.com/drive/folders/12VbhkkVpBRDFPGGIatBlEXV4mcdkqgn5?usp=sharing'
    },
    {
      id: 2,
      title: 'Parova Technologies',
      description: 'Drone basics, components and development',
      link: ' https://drive.google.com/drive/folders/1jQGM1HocqOBZg8m9ung0nrpAw7azBiLl?usp=sharing'
    },
    {
      id: 3,
      title: 'Sports and building Aerodynamics',
      description: 'Sports and building Aerodynamics - Course',
      link: 'https://drive.google.com/drive/folders/1KG6FyoMtvVZsykPAz_59bu9ILOCd3uA9?usp=sharing'
    },
    {
      id: 4,
      title: 'Introduction to the Internet Of Things (IoT)',
      description: 'Introduction to the Internet Of Things (IoT) and embedded systems',
      link: 'https://drive.google.com/drive/folders/1InvgXcSIO9p0kSKBH_SoXcbrjAIqDeek?usp=sharing'
    },
    {
      id: 5,
      title: 'Hacking and patching',
      description: 'Hacking and patching - Course',
      link: ' https://drive.google.com/drive/folders/19sKRJDG5Rwg3mauAnI0rMutQIfUh3v9W?usp=sharing'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12 relative z-10">
      {/* Page Heading */}
      <div className="flex flex-col gap-2 border-l-4 border-primary pl-6">
        <div className="flex items-center gap-3 text-stark-gold mb-1">
          <span className="material-symbols-outlined text-sm">verified</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase">Professional Development</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">Certifications</h2>
        <p className="text-[#bc9a9a] max-w-lg text-lg font-light leading-relaxed">
          Industry-recognized credentials and specialized training in engineering disciplines.
        </p>
      </div>

      {/* Certifications List */}
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <a
            key={cert.id}
            href={cert.link || '#'}
            target={cert.link ? '_blank' : undefined}
            rel={cert.link ? 'noopener noreferrer' : undefined}
            className="group relative bg-surface-dark/30 border border-white/5 p-6 hover:border-primary/40 transition-all duration-300 rounded overflow-hidden block cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none"></div>
            
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent group-hover:w-[3px] transition-all duration-300"></div>

            <div className="relative z-10 flex items-start gap-6">
              {/* Number/Index */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 text-primary font-bold text-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#bc9a9a] text-sm leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 text-primary/20 group-hover:text-primary/60 transition-colors flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                {cert.link && (
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                )}
              </div>
            </div>

            {/* Hover shine effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out pointer-events-none"></div>
          </a>
        ))}
      </div>

      {/* Stats Footer */}
      <div className="mt-12 border-t border-white/5 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
          <p className="text-[10px] text-[#bc9a9a] uppercase tracking-widest font-mono">Certifications</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-stark-gold mb-2">1+</div>
          <p className="text-[10px] text-[#bc9a9a] uppercase tracking-widest font-mono">Years Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-primary mb-2">3+</div>
          <p className="text-[10px] text-[#bc9a9a] uppercase tracking-widest font-mono">Major Areas</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-stark-gold mb-2">∞</div>
          <p className="text-[10px] text-[#bc9a9a] uppercase tracking-widest font-mono">Learning Curve</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
