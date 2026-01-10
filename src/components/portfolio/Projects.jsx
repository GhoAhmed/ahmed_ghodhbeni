const Projects = () => {
  const projects = [
    {
      title: "PedagoApp - Plateforme E-Learning",
      description: "Application web interactive pour l'enseignement avec cours, quiz et suivi de progression",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "🎓",
      color: "from-blue-500 to-indigo-500",
      link: "#",
      github: "#",
      status: "En production",
      highlights: [
        "15+ cours interactifs",
        "Système de quiz automatisé",
        "Tableau de bord étudiant",
        "500+ utilisateurs actifs"
      ]
    },
    {
      title: "Gestionnaire de Bibliothèque",
      description: "Système complet de gestion pour bibliothèques universitaires avec interface admin et utilisateur",
      technologies: ["React", "Express", "PostgreSQL", "Material-UI"],
      image: "📚",
      color: "from-green-500 to-emerald-500",
      link: "#",
      github: "#",
      status: "Déployé",
      highlights: [
        "Gestion des emprunts",
        "Système de réservation",
        "Notifications automatiques",
        "Rapports statistiques"
      ]
    },
    {
      title: "Portfolio Interactif",
      description: "Portfolio moderne et responsive avec animations et design professionnel",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image: "💼",
      color: "from-purple-500 to-pink-500",
      link: "#",
      github: "#",
      status: "En ligne",
      highlights: [
        "Design moderne",
        "Animations fluides",
        "100% responsive",
        "Performance optimisée"
      ]
    },
    {
      title: "API REST E-Commerce",
      description: "Backend complet pour application e-commerce avec authentification et paiement",
      technologies: ["Node.js", "Express", "MongoDB", "Stripe"],
      image: "🛒",
      color: "from-orange-500 to-red-500",
      link: "#",
      github: "#",
      status: "API publique",
      highlights: [
        "Authentification JWT",
        "Paiement Stripe",
        "Documentation Swagger",
        "Tests unitaires"
      ]
    },
    {
      title: "Dashboard Analytics",
      description: "Interface de visualisation de données avec graphiques interactifs et exports",
      technologies: ["React", "Chart.js", "D3.js", "Redux"],
      image: "📊",
      color: "from-cyan-500 to-blue-500",
      link: "#",
      github: "#",
      status: "Beta",
      highlights: [
        "Graphiques interactifs",
        "Exports PDF/Excel",
        "Filtres avancés",
        "Temps réel"
      ]
    },
    {
      title: "Chatbot Pédagogique",
      description: "Assistant virtuel pour aider les étudiants avec leurs questions de cours",
      technologies: ["Python", "NLP", "React", "WebSocket"],
      image: "🤖",
      color: "from-indigo-500 to-purple-500",
      link: "#",
      github: "#",
      status: "Prototype",
      highlights: [
        "Traitement du langage naturel",
        "Réponses contextuelles",
        "Intégration chat en temps réel",
        "Base de connaissances"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-2xl">
            🚀
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Projets Réalisés</h2>
            <p className="text-sm text-gray-600">Applications et solutions développées</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Voici une sélection de mes projets professionnels et personnels démontrant mon expertise technique et ma capacité à créer des solutions complètes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="card card-hover group">
            <div className="space-y-4">
              {/* En-tête du projet */}
              <div className="flex items-start justify-between gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} center-flex text-3xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                  {project.image}
                </div>
                <span className="badge badge-success text-xs">{project.status}</span>
              </div>

              {/* Titre et description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Points forts */}
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <a
                  href={project.link}
                  className="flex-1 btn btn-sm btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🔗</span>
                  <span>Voir le projet</span>
                </a>
                <a
                  href={project.github}
                  className="flex-1 btn btn-sm btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💻</span>
                  <span>Code source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;