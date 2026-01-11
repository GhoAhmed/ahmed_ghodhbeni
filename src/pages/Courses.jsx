import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/courses/CourseCard";
import { allCourses } from "../constants";
import HeroCourse from "../components/sections/HeroCourse";
import CourseStats from "../components/sections/CourseStats";
import { FaSearch } from "react-icons/fa";
import CTACourse from "../components/sections/CTACourse";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCourses(allCourses);
    setFilteredCourses(allCourses);
  }, []);

  // Extraire les catégories uniques
  const categories = ["all", ...new Set(allCourses.map((c) => c.category))];
  const levels = ["all", "Débutant", "Intermédiaire", "Avancé", "Technologue"];

  // Filtrage des cours
  useEffect(() => {
    let filtered = courses;

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par catégorie
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Filtre par niveau
    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, courses]);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <HeroCourse />

      {/* Statistiques */}
      <CourseStats />

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
              <FaSearch />
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
                {categories.map((cat) => (
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
                {levels.map((level) => (
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
              <span className="font-semibold">{filteredCourses.length}</span>{" "}
              cours trouvé{filteredCourses.length > 1 ? "s" : ""}
            </p>
            {(searchTerm ||
              selectedCategory !== "all" ||
              selectedLevel !== "all") && (
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
      <CTACourse />
    </div>
  );
};

export default Courses;
