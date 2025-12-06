import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">MAG</h1>
            <div className="flex gap-8">
              <a href="#about" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">À propos</a>
              <a href="#skills" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">Compétences</a>
              <a href="#projects" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">Projets</a>
              <a href="#experience" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">Expérience</a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <h3 className="text-lg font-semibold">Mohamed Amine Gannouni</h3>
          </div>
          <p className="text-slate-400 mb-4">Ingénieur Logiciel & DevOps | ENSI</p>
          <p className="text-slate-500">© 2024 Mohamed Amine Gannouni. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
