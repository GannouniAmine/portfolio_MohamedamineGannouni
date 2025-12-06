import { Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 text-center">Contact</h2>
        <p className="text-center text-slate-600 mb-12">
          N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités de collaboration.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Restons connectés</h3>

            <a
              href="mailto:Mohamedamine.gannouni@ensi-uma.tn"
              className="flex items-center p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-200/30 hover:border-cyan-400 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-slate-900 font-medium">Mohamedamine.gannouni@ensi-uma.tn</p>
              </div>
            </a>

            <a
              href="tel:+21623521637"
              className="flex items-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200/30 hover:border-emerald-400 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Téléphone</p>
                <p className="text-slate-900 font-medium">+216 23 521 637</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/GannouniAmine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-lg hover:shadow-lg hover:shadow-slate-900/30 transition-all hover:-translate-y-1 flex items-center justify-center flex-1 group border border-slate-700"
              >
                <Github size={24} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-amine-gannouni-73836b38b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-600/30 transition-all hover:-translate-y-1 flex items-center justify-center flex-1 group border border-blue-500"
              >
                <Linkedin size={24} className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 p-8 rounded-xl border border-cyan-200/30 hover:border-cyan-300 transition-colors">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Disponibilité</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mt-1 mr-3 group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-medium text-slate-900">Actuellement disponible</p>
                  <p className="text-sm text-slate-600">Pour un stage de fin d'études</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mt-1 mr-3 group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-medium text-slate-900">Type de poste recherché</p>
                  <p className="text-sm text-slate-600">Stage de développement logiciel, DevOps, ou IA</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mt-1 mr-3 group-hover:scale-125 transition-transform"></div>
                <div>
                  <p className="font-medium text-slate-900">Durée souhaitée</p>
                  <p className="text-sm text-slate-600">4-6 mois</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-cyan-200/30">
              <p className="text-sm text-slate-600 italic">
                "Passionné par l'innovation technologique et toujours prêt à relever de nouveaux défis."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
