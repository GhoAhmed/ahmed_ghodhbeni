const Certifications = () => {
  const achievements = [
    {
      title: "Meilleur enseignant de l'année",
      year: "2023",
      organization: "Institut Supérieur",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Prix d'excellence pédagogique",
      year: "2022",
      organization: "Ministère de l'Enseignement Supérieur",
      icon: "🎖️",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Innovation en e-learning",
      year: "2021",
      organization: "Conférence EdTech Tunisie",
      icon: "💡",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const publications = [
    {
      title: "L'apprentissage actif dans l'enseignement de la programmation",
      type: "Article de recherche",
      journal: "Revue Tunisienne de Pédagogie",
      year: "2023",
      icon: "📄"
    },
    {
      title: "Gamification et motivation des étudiants en informatique",
      type: "Communication",
      journal: "Colloque International de Pédagogie",
      year: "2022",
      icon: "🎮"
    }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", flag: "🇹🇳", proficiency: 100 },
    { name: "Français", level: "Courant (C1)", flag: "🇫🇷", proficiency: 95 },
    { name: "Anglais", level: "Avancé (B2)", flag: "🇬🇧", proficiency: 85 },
  ];

  return (
    <div className="space-y-6">
      {/* Récompenses et distinctions */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 center-flex text-2xl shadow-lg">
            🏆
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Récompenses & Distinctions</h3>
            <p className="text-sm text-gray-500">Reconnaissances professionnelles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="card hover-lift border-2 border-yellow-100">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} center-flex text-3xl shadow-lg`}>
                {achievement.icon}
              </div>
              <h4 className="font-semibold text-gray-900 text-center mb-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-600 text-center mb-1">
                {achievement.organization}
              </p>
              <p className="text-center">
                <span className="badge badge-warning">{achievement.year}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white center-flex text-2xl shadow-sm">
            📚
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Publications</h3>
        </div>

        <div className="space-y-3">
          {publications.map((pub, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl">
              <div className="text-3xl">{pub.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  {pub.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  {pub.journal}
                </p>
                <div className="flex gap-2">
                  <span className="badge badge-info">{pub.type}</span>
                  <span className="badge badge-primary">{pub.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-2xl">
            🌍
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Langues</h3>
            <p className="text-sm text-gray-500">Compétences linguistiques</p>
          </div>
        </div>

        <div className="space-y-4">
          {languages.map((lang, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{lang.name}</p>
                    <p className="text-sm text-gray-500">{lang.level}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-600">
                  {lang.proficiency}%
                </span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;