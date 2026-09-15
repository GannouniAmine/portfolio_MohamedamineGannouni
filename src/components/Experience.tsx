import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Telnet Holding',
      role: 'Stage de fin d’études (PFE) – Ingénieur logiciel',
      period: 'Février – juillet 2026',
      location: 'Tunis',
      description: [
        'Plateforme web de gestion des compétences : référentiel, matrice d’évaluation, validation historisée, notifications, export Excel et tableaux de bord',
        'Module d’analyse de projet assistée par IA avec FastAPI et Azure OpenAI : extraction des compétences, analyse des écarts et rapport PDF',
        'Sécurité JWT par cookies httpOnly, contrôle d’accès par rôle avec Spring Security et audit OWASP ZAP',
        'Qualité et livraison : 102 classes de tests, couverture portée de 78 % à 89 %, CI GitHub Actions et analyse SonarQube',
        '34 user stories livrées sur 20 sprints en Agile Scrum',
        'Technologies : Java, Spring Boot, Vue.js, PostgreSQL, Python, FastAPI, Azure OpenAI, Docker, GitHub Actions, SonarQube'
      ],
      status: 'completed'
    },
    {
      company: 'Platform Creative',
      role: 'Stage en développement web',
      period: 'Juin – août 2025',
      location: 'Tunis',
      description: [
        'Développement d’AccessHR, plateforme de gestion des accès, présences et congés pour trois profils',
        'Authentification par reconnaissance faciale avec un microservice Python, Flask, OpenCV DNN, YuNet et SFace',
        'Modules de gestion des projets, tâches, absences, congés, annonces et tableaux de bord par rôle',
        'Sécurité JWT et Spring Security, activation par courriel, API Swagger et environnement Docker Compose',
        'Conception UML et travail en Agile Scrum. Technologies : Java, Spring Boot, Angular, MySQL, Python, Flask, OpenCV'
      ],
      status: 'completed'
    },
    {
      company: 'Tunisie Telecom',
      role: 'Stage Réseaux & Télécommunications',
      period: '08/2024',
      location: 'Ben Arous',
      description: [
        'Assistance technique sur les infrastructures réseau : diagnostic et résolution d’incidents',
        'Analyse des performances et optimisation des systèmes de télécommunication'
      ],
      status: 'completed'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-12 text-center">Expérience Professionnelle</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-cyan-300 transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start mb-3 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg mr-4">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">{exp.role}</h3>
                    <p className="text-lg bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start text-slate-600">
                    <span className="bg-gradient-to-r from-cyan-500 to-teal-500 mr-3 mt-2 rounded-full w-2 h-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
