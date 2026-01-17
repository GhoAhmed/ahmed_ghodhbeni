import { achievements, publications } from "../../constants";
import Language from "../sections/Language";
import { FaTrophy } from "react-icons/fa";
import { BsPersonVcardFill } from "react-icons/bs";

const Certifications = () => {
  return (
    <div className="space-y-6">
      {/* Récompenses et distinctions */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 center-flex text-2xl shadow-lg">
            <FaTrophy />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Récompenses & Certifications
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="card hover-lift border-2 border-yellow-100"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} center-flex text-3xl shadow-lg`}
              >
                <achievement.icon />
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
      <div className="card bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex shadow-lg">
            <BsPersonVcardFill className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Responsabilités
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Publications et contributions
            </p>
          </div>
        </div>

        {/* Publications list */}
        <div className="space-y-3 sm:space-y-4">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex gap-3 sm:gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 center-flex group-hover:scale-110 transition-transform">
                    <pub.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title */}
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                    {pub.title}
                  </h4>

                  {/* Journal/Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                    {pub.journal}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {pub.type}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                      📅 {pub.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Langues */}
      <Language />
    </div>
  );
};

export default Certifications;
