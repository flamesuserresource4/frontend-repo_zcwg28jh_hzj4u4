import React from 'react';
import Hero from './components/Hero';
import HorizontalScroller from './components/HorizontalScroller';
import Nav from './components/Nav';
import { ExperienceSection, ProjectsSection, OfferSection, StackSection, ContactSection } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Nav />
      <Hero />
      <HorizontalScroller />
      <main>
        <ExperienceSection />
        <ProjectsSection />
        <OfferSection />
        <StackSection />
        <ContactSection />
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-16 text-center text-white/50">
        © {new Date().getFullYear()} motive — Built with love, motion, and great code.
      </footer>
    </div>
  );
}

export default App;
