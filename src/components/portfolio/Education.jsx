const Education = () => {
  const education = [
    {
      degree: "Diplôme d'Ingénieur en Informatique",
      school: "École Nationale d'Ingénieurs",
      location: "Tunis, Tunisie",
      period: "2013 - 2016",
      type: "Diplôme d'ingénieur",
      icon: "🎓",
      color: "from-blue-500 to-indigo-500",
      description: "Spécialisation en développement logiciel et systèmes d'information",
      highlights: [
        "Major de promotion",
        "Projet de fin d'études : Application e-learning",
        "Mention Très Bien",
        "Stage chez Microsoft Tunisie"
      ]
    },
    {
      degree: "Licence en Informatique",
      school: "Faculté des Sciences",
      location: "Tunis, Tunisie",
      period: "2010 - 2013",
      type: "Licence",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
      description: "Formation fondamentale en informatique et mathématiques",
      highlights: [
        "Algorithmique avancée",
        "Programmation orientée objet",
        "Bases de données relationnelles",
        "Architecture des ordinateurs"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️",
      color: "bg-orange-500",
      credentialId: "AWS-SAA-123456"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      icon: "📋",
      color: "bg-blue-500",
      credentialId: "PSM-789012"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      icon: "🗄️",
      color: "bg-green-500",
      credentialId: "MDB-345678"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2021",
      icon: "⚛️",
      color: "bg-cyan-500",
      credentialId: "UC-901234"
    }
  ];

  const formations = [
    { title: "Pédagogie universitaire", year: "2021", icon: "👨‍🏫" },
    { title: "Design Thinking", year: "2021", icon: "💡" },
    { title: "DevOps avec Docker & Kubernetes", year: "2020", icon: "🐳" },
    { title: "Machine Learning Basics", year: "2020", icon: "🤖" },
  ];

  return (
    <div className="space-y-6">
      {/* Parcours académique */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-2xl">
            🎓
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Formation Académique</h2>
            <p className="text-sm text-gray-500">Parcours universitaire</p>
          </div>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:pb-0">
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} center-flex text-lg shadow-lg`}>
                {edu.icon}
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="badge badge-primary">{edu.type}</span>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-2">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-2xl">
            🏆
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
            <p className="text-sm text-gray-500">Certifications professionnelles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className={`w-12 h-12 rounded-xl ${cert.color} center-flex text-2xl flex-shrink-0 shadow-md`}>
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 truncate">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="badge badge-success">{cert.date}</span>
                  <span className="truncate">ID: {cert.credentialId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formations complémentaires */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white center-flex text-2xl shadow-sm">
            📖
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Formations Complémentaires
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {formations.map((formation, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
              <span className="text-2xl">{formation.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{formation.title}</p>
                <p className="text-xs text-gray-500">{formation.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;