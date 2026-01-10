import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import {
  FaBookOpen,
  FaClock,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaLaptopCode,
  FaLongArrowAltRight,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { MdFunctions } from "react-icons/md";

const CourseCard = ({ course }) => {
  const categoryIcons = {
    "Développement Web": FaLaptopCode,
    Programmation: FaCogs,
    "Base de données": FaDatabase,
    Algorithmique: MdFunctions,
    DevOps: FaCloud,
  };

  const CategoryIcon = categoryIcons[course.category] || FaBookOpen;

  const levelColors = {
    Débutant: "bg-green-100 text-green-700",
    Intermédiaire: "bg-blue-100 text-blue-700",
    Avancé: "bg-purple-100 text-purple-700",
    Technologue: "bg-orange-100 text-orange-700",
  };

  const levelColor = levelColors[course.level] || "bg-gray-100 text-gray-700";

  return (
    <div className="card card-hover h-full flex flex-col group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500
                        flex items-center justify-center shadow-md
                        group-hover:scale-110 transition-transform"
        >
          <CategoryIcon className="w-7 h-7 text-white" />
        </div>

        <span className={`badge ${levelColor}`}>{course.level}</span>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Category */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
          <BiSolidPurchaseTagAlt className="text-yellow-500" />
          <span>{course.category}</span>
        </div>
      </div>

      {/* Metrics */}
      {(course.duration || course.lessonsCount || course.studentsCount) && (
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-100">
          {course.duration && (
            <div className="text-center">
              <FaClock className="mx-auto text-gray-500" />
              <div className="text-xs text-gray-600 mt-1">
                {course.duration}
              </div>
            </div>
          )}

          {course.lessonsCount && (
            <div className="text-center">
              <FaBookOpen className="mx-auto text-gray-500" />
              <div className="text-xs text-gray-600 mt-1">
                {course.lessonsCount} leçons
              </div>
            </div>
          )}

          {course.studentsCount && (
            <div className="text-center">
              <FaUsers className="mx-auto text-gray-500" />
              <div className="text-xs text-gray-600 mt-1">
                {course.studentsCount}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rating */}
      {course.rating && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {course.rating}
          </span>
        </div>
      )}

      {/* Button */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="btn btn-primary w-full btn-sm flex items-center justify-center gap-2">
          <span>Voir le cours</span>
          <FaLongArrowAltRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
