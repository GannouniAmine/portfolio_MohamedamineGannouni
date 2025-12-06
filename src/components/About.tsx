import { GraduationCap, Award, Languages } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-12 text-center">À propos</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Objectif</h3>
            <p className="text-gray-600 leading-relaxed">
              Étudiant en génie logiciel à l'ENSI, je suis passionné par le développement logiciel,
              le cloud, les architectures modernes et l'intelligence artificielle. Je recherche un stage
              de fin d'études afin d'appliquer mes compétences dans un environnement professionnel
              exigeant et innovant.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Qualités</h3>
            <div className="flex flex-wrap gap-3">
              {['Esprit d\'analyse', 'Autonomie', 'Rigueur', 'Communication efficace',
                'Apprentissage rapide', 'Travail en équipe'].map((quality) => (
                <span key={quality} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl border border-cyan-200/30 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg w-fit mb-4">
              <GraduationCap className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Formation</h3>
            <div className="space-y-3 text-gray-600">
              <div>
                <p className="font-medium text-slate-900">ENSI</p>
                <p className="text-sm text-slate-600">Cycle Ingénieur en Génie Logiciel</p>
                <p className="text-sm text-cyan-600">Actuellement</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">IPEIEM El Manar</p>
                <p className="text-sm text-slate-600">Classe Préparatoire</p>
                <p className="text-sm text-slate-500">2023</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Baccalauréat</p>
                <p className="text-sm text-slate-600">Sciences Techniques</p>
                <p className="text-sm text-slate-500">2021</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200/30 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Certifications</h3>
            <div className="space-y-2 text-slate-600">
              <p className="text-sm">DevOps & CI/CD</p>
              <p className="text-sm">Architecture Microservices</p>
              <p className="text-sm">Cloud Computing</p>
              <p className="text-sm">Intelligence Artificielle</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-200/30 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg w-fit mb-4">
              <Languages className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Langues</h3>
            <div className="space-y-3 text-slate-600">
              <div>
                <p className="font-medium text-slate-900">Arabe</p>
                <p className="text-sm text-teal-600">Maternelle</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Français</p>
                <p className="text-sm text-teal-600">B1</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">Anglais</p>
                <p className="text-sm text-teal-600">B1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
