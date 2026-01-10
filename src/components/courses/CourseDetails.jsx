import { FaFile, FaHandPointRight } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const CourseDetails = ({ course }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Objectifs */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-2xl">
            <TbTargetArrow />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Objectifs d'apprentissage
          </h3>
        </div>

        <ul className="space-y-3">
          {course.objectives.map((obj, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-green-100 center-flex flex-shrink-0 text-green-600 mt-0.5">
                <MdOutlineDone />
              </span>
              <span className="text-gray-700 leading-relaxed">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prérequis */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 center-flex text-2xl">
            <FaFile />
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Prérequis nécessaires
          </h3>
        </div>

        <ul className="space-y-3">
          {course.prerequisites.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-orange-100 center-flex flex-shrink-0 text-orange-600 mt-0.5">
                <FaHandPointRight />
              </span>
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {course.prerequisites.length === 0 && (
          <div className="text-center py-4">
            <span className="text-4xl mb-2 block">🎉</span>
            <p className="text-gray-600 text-sm">
              Aucun prérequis ! Ce cours est accessible à tous.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
