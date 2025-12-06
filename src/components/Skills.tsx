import { Code, Server, Cog, Cloud, Database, Package } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Server,
      title: 'Back-end',
      skills: ['Java (Spring Boot)', 'Python', 'Node.js', 'NestJS', 'Express'],
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Code,
      title: 'Front-end',
      skills: ['Angular', 'React', 'Next.js', 'HTML', 'CSS', 'TypeScript'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cog,
      title: 'DevOps',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Jenkins', 'Kubernetes', 'Ansible'],
      gradient: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud / Monitoring',
      skills: ['Prometheus', 'Grafana', 'SonarQube'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: ['PostgreSQL', 'MySQL', 'SQL'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Package,
      title: 'Autres',
      skills: ['Swagger', 'Postman', 'JWT', 'UML'],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-12 text-center">Compétences Techniques</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-lg mr-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-md text-sm hover:from-cyan-100 hover:to-teal-50 hover:text-cyan-700 transition-all border border-slate-200 hover:border-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
