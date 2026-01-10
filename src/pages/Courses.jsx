import { useEffect, useState } from "react";
import { Link } from "react-router";
import CourseCard from "../components/courses/CourseCard";
import clientCourses from "../data/courses/client-side.json";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Simuler plus de cours pour la démonstration
  const allCourses = [
    clientCourses,
    {
      id: "react-fundamentals",
      title: "React - Les Fondamentaux",
      category: "Développement Web",
      level: "Intermédiaire",
      description: "Apprenez à créer des applications web modernes avec React, hooks et composants.",
      prerequisites: ["JavaScript ES6", "HTML/CSS", "Notions de SPA"],
      duration: "8 heures",
      lessonsCount: 12,
      studentsCount: 245,
      rating: 4.8
    },
    {
      id: "javascript-advanced",
      title: "JavaScript Avancé",
      category: "Programmation",
      level: "Avancé",
      description: "Maîtrisez les concepts avancés de JavaScript : closures, promises, async/await.",
      prerequisites: ["JavaScript de base", "Algorithmique"],
      duration: "10 heures",
      lessonsCount: 15,
      studentsCount: 189,
      rating: 4.9
    },
    {
      id: "sql-database",
      title: "Bases de Données SQL",
      category: "Base de données",
      level: "Débutant",
      description: "Introduction aux bases de données relationnelles et au langage SQL.",
      prerequisites: ["Logique de base"],
      duration: "6 heures",
      lessonsCount: 10,
      studentsCount: 312,
      rating: 4.7
    },
    {
      id: "nodejs-backend",
      title: "Node.js & Express",
      category: "Développement Web",
      level: "Intermédiaire",
      description: "Créez des API REST performantes avec Node.js et Express.",
      prerequisites: ["JavaScript", "HTTP/REST"],
      duration: "12 heures",
      lessonsCount: 18,
      studentsCount: 198,
      rating: 4.6
    },
    {
      id: "mongodb-nosql",
      title: "MongoDB - NoSQL",
      category: "Base de données",
      level: "Intermédiaire",
      description: "Découvrez les bases de données NoSQL avec MongoDB et Mongoose.",
      prerequisites: ["JavaScript", "Bases de données"],
      duration: "7 heures",
      lessonsCount: 11,
      studentsCount: 167,
      rating: 4.5
    }
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCourses(allCourses);
    setFilteredCourses(allCourses);
  }, []);

  // Extraire les catégories uniques
  const categories = ["all", ...new Set(allCourses.map(c => c.category))];
  const levels = ["all", "Débutant", "Intermédiaire", "Avancé", "Technologue"];

  // Filtrage des cours
  useEffect(() => {
    let filtered = courses;

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par catégorie
    if (selectedCategory !== "all") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filtre par niveau
    if (selectedLevel !== "all") {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, courses]);

  const stats = [
    { icon: "📚", value: allCourses.length, label: "Cours disponibles" },
    { icon: "👨‍🎓", value: "500+", label: "Étudiants actifs" },
    { icon: "⭐", value: "4.7", label: "Note moyenne" },
    { icon: "🎓", value: "95%", label: "Taux de réussite" },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Catalogue de Cours
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Explorez mes cours interactifs et développez vos compétences en informatique
          </p>
        </div>
      </section>

      {/* Statistiques */}
      <section className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="container-app">
        <div className="card space-y-4">
          {/* Barre de recherche */}
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un cours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-12"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">
              🔍
            </span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "Toutes les catégories" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveau
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="input"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === "all" ? "Tous les niveaux" : level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Résultats de recherche */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{filteredCourses.length}</span> cours trouvé{filteredCourses.length > 1 ? 's' : ''}
            </p>
            {(searchTerm || selectedCategory !== "all" || selectedLevel !== "all") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Liste des cours */}
      <section className="container-app">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`}>
                <CourseCard course={course} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun cours trouvé
            </h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedLevel("all");
              }}
              className="btn btn-primary"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* Call to action */}
      <section className="container-app">
        <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100 text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Vous ne trouvez pas le cours que vous cherchez ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-moi pour suggérer de nouveaux cours ou pour des formations personnalisées
          </p>
          <a href="mailto:ahmed.ghodhbeni@example.com" className="btn btn-primary">
            <span>📧</span>
            <span>Me contacter</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;