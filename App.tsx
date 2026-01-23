
import React, { useState } from 'react';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Header from './components/Header';
import Footer from './components/Footer';
import HUDDecorator from './components/HUDDecorator';

export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <Home setView={setCurrentView} />;
      case View.ABOUT: return <About />;
      case View.PROJECTS: return <Projects />;
      case View.SKILLS: return <Skills />;
      case View.EXPERIENCE: return <Experience />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background-dark">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute inset-0 radar-sweep opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
        <div className="scan-line opacity-10"></div>
      </div>

      <Header currentView={currentView} setView={setCurrentView} />
      
      <main className="relative z-10 flex-1 flex flex-col overflow-y-auto pt-20">
        {renderView()}
      </main>

      <Footer />
      <HUDDecorator />
    </div>
  );
};

export default App;
