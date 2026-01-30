
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Certifications from './components/Certifications';
import Archives from './components/Archives';
import History from './components/History';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stark-charcoal overflow-x-hidden">
      {/* Global Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 grid-bg bg-grid-pattern"></div>
      
      <Header />
      
      <main className="flex-grow">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="specs" className="min-h-screen py-24 bg-background-dark/30">
          <Specs />
        </section>

        <section id="certifications" className="min-h-screen py-24">
          <Certifications />
        </section>

        <section id="archives" className="min-h-screen py-24 bg-background-dark/30">
          <Archives />
        </section>

        <section id="history" className="min-h-screen py-24 bg-surface-dark/20">
          <History />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
