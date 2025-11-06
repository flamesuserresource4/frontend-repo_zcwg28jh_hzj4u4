import Nav from './components/Nav'
import Hero from './components/Hero'
import HorizontalScroller from './components/HorizontalScroller'
import { ExperienceSection, ProjectsSection, OfferSection, StackSection, ContactSection } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0f1a] via-[#0e1220] to-[#0b0f1a] text-white">
      <Nav />
      <Hero />
      <HorizontalScroller />
      <main className="relative">
        <ExperienceSection />
        <ProjectsSection />
        <OfferSection />
        <StackSection />
        <ContactSection />
      </main>
      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} — Built with care and a bit of sparkle ✨
      </footer>
    </div>
  )
}

export default App
