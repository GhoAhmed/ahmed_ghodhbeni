import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";

const CourseCard = ({ course }) => {
  // Icônes par catégorie
  const categoryIcons = {
    "Développement Web": "💻",
    Programmation: "⚙️",
    "Base de données": "🗄️",
    Algorithmique: "🧮",
    DevOps: "☁️",
  };

  // Couleurs par niveau
  const levelColors = {
    Débutant: "bg-green-100 text-green-700",
    Intermédiaire: "bg-blue-100 text-blue-700",
    Avancé: "bg-purple-100 text-purple-700",
    Technologue: "bg-orange-100 text-orange-700",
  };

  const icon = categoryIcons[course.category] || "📚";
  const levelColor = levelColors[course.level] || "bg-gray-100 text-gray-700";

  return (
    <div className="card card-hover h-full flex flex-col group">
      {/* En-tête avec icône */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-3xl shadow-md group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={`badge ${levelColor}`}>{course.level}</span>
      </div>

      {/* Titre et description */}
      <div className="flex-1 space-y-3">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Catégorie */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
          <BiSolidPurchaseTagAlt className="text-yellow-400" />
          <span>{course.category}</span>
        </div>
      </div>

      {/* Métriques du cours */}
      {(course.duration || course.lessonsCount || course.studentsCount) && (
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
          {course.duration && (
            <div className="text-center">
              <div className="text-lg">⏱️</div>
              <div className="text-xs text-gray-600 mt-1">
                {course.duration}
              </div>
            </div>
          )}
          {course.lessonsCount && (
            <div className="text-center">
              <div className="text-lg">📖</div>
              <div className="text-xs text-gray-600 mt-1">
                {course.lessonsCount} leçons
              </div>
            </div>
          )}
          {course.studentsCount && (
            <div className="text-center">
              <div className="text-lg">👥</div>
              <div className="text-xs text-gray-600 mt-1">
                {course.studentsCount}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Note si disponible */}
      {course.rating && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(course.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {course.rating}
          </span>
        </div>
      )}

      {/* Prérequis (tags compacts) */}
      {course.prerequisites && course.prerequisites.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 mb-2">
            Prérequis :
          </p>
          <div className="flex flex-wrap gap-1.5">
            {course.prerequisites.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
              >
                {item}
              </span>
            ))}
            {course.prerequisites.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                +{course.prerequisites.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Bouton hover */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="btn btn-primary w-full btn-sm">
          <span>Voir le cours</span>
          <FaLongArrowAltRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
