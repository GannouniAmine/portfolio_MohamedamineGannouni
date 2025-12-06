import { Folder, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Pipeline CI/CD Full DevOps',
      description: 'Conception d\'un pipeline CI/CD complet : Git, GitHub Actions, Maven, JUnit, SonarQube, Docker, Ansible, Kubernetes, Prometheus, Grafana. Automatisation du build, test, déploiement et monitoring.',
      tags: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
      category: 'DevOps',
      color: 'from-emerald-50'
    },
    {
      title: 'Spendly – Smart Expense Parser',
      description: 'Architecture microservices Spring Boot avec un moteur OCR + IA (OpenAI) pour extraire automatiquement les données de reçus. Intégration d\'APIs externes, containerisation Docker, orchestration Kubernetes et création de dashboards.',
      tags: ['Spring Boot', 'OpenAI', 'OCR', 'Docker', 'Kubernetes', 'Microservices'],
      category: 'Full-Stack + IA',
      color: 'from-purple-50'
    },
    {
      title: 'BookHive',
      description: 'Application web de gestion de bibliothèque personnelle (Next.js, NestJS, PostgreSQL). Authentification, gestion livres, catégories et recherche.',
      tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Authentication'],
      category: 'Full-Stack',
      color: 'from-blue-50'
    },
    {
      title: 'Market Research RAG Agent',
      description: 'Outil d\'analyse de marché basé sur un agent RAG (React, Python, LangChain, vector DB) permettant l\'extraction d\'insights à partir de données non structurées.',
      tags: ['React', 'Python', 'LangChain', 'RAG', 'Vector DB', 'IA'],
      category: 'IA & Data',
      color: 'from-orange-50'
    },
    {
      title: 'E-commerce Fashion',
      description: 'Application boutique en ligne (PHP, JS, HTML/CSS) avec système de panier, gestion produits et authentification.',
      tags: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      category: 'Web',
      color: 'from-pink-50'
    },
    {
      title: 'E-BUS Ticketing System',
      description: 'Application CLI en C pour la gestion et l\'optimisation de réservations de tickets.',
      tags: ['C', 'CLI', 'Algorithms'],
      category: 'Systems',
      color: 'from-cyan-50'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 text-center">Projets</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Une sélection de projets académiques et personnels démontrant mes compétences en développement,
          DevOps, intelligence artificielle et architecture logicielle.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.color} to-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 hover:border-cyan-300`}
            >
              <div className="flex items-start justify-between mb-3">
                <Folder className="text-cyan-600" size={32} />
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded text-xs border border-slate-200 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
