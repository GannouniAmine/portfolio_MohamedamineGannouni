import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Platform Creative',
      role: 'Stage Développement Web',
      period: '06/2025 – 08/2025',
      location: 'Prochainement',
      description: [
        'Développement de la plateforme GestionAcces (Spring Boot & Angular)',
        'Mise en place de l\'authentification sécurisée (JWT), gestion des rôles et tableaux de bord',
        'Participation complète au cycle Agile Scrum : planification, développement, tests et livraisons',
        'Modélisation UML, conception fonctionnelle et optimisation back-end'
      ],
      status: 'upcoming'
    },
    {
      company: 'Tunisie Telecom',
      role: 'Stage Réseaux & Télécommunications',
      period: '08/2024',
      location: 'Tunis',
      description: [
        'Supervision et diagnostic des infrastructures réseaux',
        'Analyse des performances et optimisation des systèmes de télécommunication',
        'Résolution d\'incidents et collaboration avec les équipes techniques'
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

              {exp.status === 'upcoming' && (
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-medium rounded-full mb-4 border border-emerald-200">
                  Stage à venir
                </div>
              )}

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
