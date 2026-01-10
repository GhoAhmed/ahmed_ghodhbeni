import profile from "../../data/profile.json";

const Experience = ({ expanded = false }) => {
  const experiences = [
    {
      title: "Enseignant en Informatique",
      company: "Institut Supérieur",
      period: "2020 - Présent",
      type: "CDI",
      description: "Formation de futurs ingénieurs et techniciens en développement web, bases de données et algorithmique",
      achievements: [
        "Conception de 15+ cours interactifs",
        "Formation de 500+ étudiants",
        "Taux de réussite de 95%",
        "Développement d'une plateforme e-learning"
      ],
      icon: "👨‍🏫",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Ingénieur Développement",
      company: "Entreprise Tech",
      period: "2018 - 2020",
      type: "CDI",
      description: "Développement d'applications web et mobiles pour divers clients",
      achievements: [
        "Développement de 10+ projets web",
        "Architecture microservices",
        "Intégration CI/CD",
        "Formation d'équipes juniors"
      ],
      icon: "💻",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Développeur Full Stack",
      company: "Startup Innovante",
      period: "2016 - 2018",
      type: "CDI",
      description: "Création d'applications SaaS et participation à l'architecture technique",
      achievements: [
        "Stack MERN complète",
        "API REST performantes",
        "Déploiement cloud (AWS)",
        "Agilité Scrum"
      ],
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-2xl">
          💼
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {expanded ? "Parcours Professionnel" : "Approche Pédagogique"}
          </h2>
          <p className="text-sm text-gray-500">
            {expanded ? "Mon expérience professionnelle" : "Ma méthodologie d'enseignement"}
          </p>
        </div>
      </div>

      {!expanded ? (
        /* Version compacte - Approche pédagogique */
        <div className="space-y-3">
          {profile.pedagogicalApproach.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 center-flex flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">{idx + 1}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Version étendue - Expériences professionnelles */
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0">
              {/* Point sur la timeline */}
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} center-flex text-lg shadow-lg`}>
                {exp.icon}
              </div>

              {/* Contenu */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="badge badge-primary">{exp.type}</span>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;