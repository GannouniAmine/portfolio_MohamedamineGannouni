import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full border border-cyan-500/30">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm text-cyan-300">Bienvenue sur mon portfolio</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            Mohamed Amine<br/>Gannouni
          </h1>

          <p className="text-2xl md:text-3xl text-slate-200 mb-6 font-light">
            Ingénieur Logiciel & DevOps
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionné par le développement logiciel, le cloud, les architectures modernes et l'intelligence artificielle.
            À la recherche d'opportunités pour appliquer mes compétences dans un environnement innovant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 font-semibold"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 rounded-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1 font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="mx-auto text-cyan-400/50" size={32} />
        </div>
      </div>
    </section>
  );
}
