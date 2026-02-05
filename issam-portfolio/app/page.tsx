import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      {/* Visual effects */}
      <div className="scanline" />
      <div className="noise" />
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        
        {/* Add more sections here */}
        <section id="about" className="min-h-screen bg-terminal-gray/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold text-terminal-green mb-8">
              [SECTION_ABOUT]
            </h2>
            <p className="text-gray-400 text-lg">
              Section à développer avec ton contenu...
            </p>
          </div>
        </section>

        <section id="parcours" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold text-terminal-green mb-8">
              [SECTION_PARCOURS]
            </h2>
            <p className="text-gray-400 text-lg">
              Section à développer avec ton contenu...
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-terminal-gray/50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold text-terminal-green mb-8">
              [SECTION_PROJECTS]
            </h2>
            <p className="text-gray-400 text-lg">
              Section à développer avec tes projets...
            </p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold text-terminal-green mb-8">
              [SECTION_CONTACT]
            </h2>
            <p className="text-gray-400 text-lg">
              Section à développer avec tes informations de contact...
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-terminal-green/20 py-8 bg-terminal-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm tracking-wider">
            © 2026 ISSAM OUFADEL • SYSTÈME V1.0 • MADE WITH NEXT.JS
          </p>
        </div>
      </footer>
    </>
  )
}
