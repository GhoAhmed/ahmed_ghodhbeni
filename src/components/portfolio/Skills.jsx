import profile from "../../data/profile.json";

const Skills = ({ expanded = false }) => {
  // Catégorisation des compétences avec niveaux
  const skillCategories = [
    {
      title: "Développement Web",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "HTML/CSS", level: 100 },
      ]
    },
    {
      title: "Backend & Bases de données",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "SQL (PostgreSQL, MySQL)", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "API REST", level: 95 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "AWS/Azure", level: 75 },
        { name: "CI/CD", level: 80 },
      ]
    },
    {
      title: "Pédagogie & Soft Skills",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Conception pédagogique", level: 95 },
        { name: "Évaluation & feedback", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Gestion de projet", level: 85 },
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: "🔧", category: "Éditeur" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Postman", icon: "📮", category: "API" },
    { name: "Jira", icon: "📊", category: "Gestion" },
    { name: "Slack", icon: "💬", category: "Communication" },
    { name: "Notion", icon: "📝", category: "Documentation" },
  ];

  return (
    <div className="card space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-2xl">
          🎯
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compétences & Outils</h2>
          <p className="text-sm text-gray-500">Technologies et expertise technique</p>
        </div>
      </div>

      {!expanded ? (
        /* Version compacte */
        <div className="space-y-6">
          {/* Compétences sous forme de tags */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Compétences principales</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Outils favoris</h3>
            <div className="flex flex-wrap gap-2">
              {profile.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Version étendue avec barres de progression */
        <div className="space-y-8">
          {/* Compétences par catégories avec niveaux */}
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} center-flex text-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 pl-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Outils en grille */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Outils & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{tool.name}</p>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;