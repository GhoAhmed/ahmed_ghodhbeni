import profile from "../../data/profile.json";

const Profile = () => {
  const highlights = [
    { icon: "🎓", label: "Ingénieur Informatique", value: "Diplômé" },
    { icon: "👨‍🏫", label: "Enseignant", value: "5+ ans d'expérience" },
    { icon: "👨‍🎓", label: "Étudiants formés", value: "500+" },
    { icon: "⭐", label: "Satisfaction", value: "95%" },
  ];

  return (
    <div className="card space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white text-5xl font-bold shadow-xl">
            AG
          </div>
        </div>

        {/* Informations principales */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h2>
            <p className="text-xl text-blue-600 font-medium mb-3">
              {profile.title}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Tags de compétences rapides */}
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">💻 Développement Web</span>
            <span className="badge badge-info">🎓 Pédagogie</span>
            <span className="badge badge-success">🚀 Innovation</span>
            <span className="badge badge-warning">☁️ Cloud & DevOps</span>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-3 pt-2">
            <a
              href="mailto:ahmed.ghodhbeni@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <span>📧</span>
              <span>Email</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Points forts en grille */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
        {highlights.map((item, idx) => (
          <div key={idx} className="text-center space-y-2">
            <div className="text-3xl">{item.icon}</div>
            <div className="text-sm text-gray-500">{item.label}</div>
            <div className="font-semibold text-gray-900">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;