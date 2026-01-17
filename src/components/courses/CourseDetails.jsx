import { FaFile, FaHandPointRight } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const CourseDetails = ({ course }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Objectifs */}
      <div className="card">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-xl sm:text-2xl flex-shrink-0">
            <TbTargetArrow className="text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Objectifs d'apprentissage
          </h3>
        </div>

        <ul className="space-y-2 sm:space-y-3">
          {course.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-2 sm:gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 center-flex flex-shrink-0 text-green-600 mt-0.5 text-sm sm:text-base">
                <MdOutlineDone />
              </span>
              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {obj}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prérequis */}
      <div className="card">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 center-flex text-xl sm:text-2xl flex-shrink-0">
            <FaFile className="text-white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Prérequis nécessaires
          </h3>
        </div>

        {course.prerequisites.length > 0 ? (
          <ul className="space-y-2 sm:space-y-3">
            {course.prerequisites.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-100 center-flex flex-shrink-0 text-orange-600 mt-0.5 text-sm sm:text-base">
                  <FaHandPointRight />
                </span>
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-6 sm:py-8">
            <span className="text-4xl sm:text-5xl mb-2 sm:mb-3 block">🎉</span>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Aucun prérequis !
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Ce cours est accessible à tous.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
