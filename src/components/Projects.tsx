import { ExternalLink, Folder } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Spendly – Smart Expense Parser',
      description: 'Application de gestion des dépenses en microservices, avec extraction des reçus par OCR et IA.',
      tags: ['Spring Boot', 'Thymeleaf', 'OCR.Space', 'OpenAI', 'Docker'],
      category: 'Full-Stack + IA',
      color: 'from-purple-50',
      link: 'https://github.com/MiroJlassi/Spendly'
    },
    {
      title: 'GestionAcces / AccessHR',
      description: 'Plateforme web de gestion des accès, des présences et des congés, avec authentification faciale et tableaux de bord par rôle.',
      tags: ['Spring Boot', 'Angular', 'Python', 'OpenCV', 'Docker'],
      category: 'Full-Stack',
      color: 'from-cyan-50',
      link: 'https://github.com/GannouniAmine/GestionAccesProject'
    },
    {
      title: 'Pipeline CI/CD',
      description: 'Automatisation du build, des tests, du déploiement et de la supervision dans une chaîne DevOps complète.',
      tags: ['Git', 'GitHub Actions', 'Maven', 'JUnit', 'SonarQube', 'Docker', 'Ansible', 'Kubernetes', 'Grafana'],
      category: 'DevOps',
      color: 'from-emerald-50'
    },
    {
      title: 'BookHive',
      description: 'Application web de gestion d’une bibliothèque personnelle.',
      tags: ['Next.js', 'NestJS', 'PostgreSQL'],
      category: 'Full-Stack',
      color: 'from-blue-50',
      link: 'https://github.com/GannouniAmine/bibleotheque_personnel'
    },
    {
      title: 'Market Research RAG Agent',
      description: 'Agent d’analyse de marché fondé sur une architecture RAG pour exploiter des données non structurées.',
      tags: ['Python', 'OpenAI', 'LangChain', 'React', 'RAG'],
      category: 'IA & Data',
      color: 'from-orange-50',
      link: 'https://github.com/AhmedTrb/RAG-Solution-for-Market-Research'
    },
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-900 transition-colors mb-4"
              >
                Voir le dépôt GitHub
                <ExternalLink size={16} />
              </a>

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
