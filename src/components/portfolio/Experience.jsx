import { FaBriefcase, FaUserTie } from "react-icons/fa";
import { experiences } from "../../constants";
import profile from "../../data/profile.json";
import { HiCheckCircle, HiSparkles } from "react-icons/hi";
import { BsStars, BsLightbulbFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";

const Experience = ({ expanded = false }) => {
  return (
    <div className="card space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 center-flex text-xl sm:text-2xl shadow-lg">
          {expanded ? (
            <FaBriefcase className="text-white" />
          ) : (
            <FaUserTie className="text-white" />
          )}
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {expanded ? "Parcours Professionnel" : "Objectifs & Pédagogies"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            {expanded
              ? "Mon expérience professionnelle"
              : "Ingénieur & Enseignant passionné"}
          </p>
        </div>
      </div>

      {!expanded ? (
        /* ===== VERSION COMPACTE - À propos ===== */
        <div className="space-y-4 sm:space-y-6">
          {/* Objectif professionnel */}
          <div className="group relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-5 border-2 border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <BsLightbulbFill className="text-white text-lg sm:text-xl" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base flex items-center gap-2">
                  <span>Mon Objectif</span>
                  <BsStars className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {profile.objective}
                </p>
              </div>
            </div>
          </div>

          {/* Approche pédagogique - Cards en grille */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-sm sm:text-base flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded" />
              <span>Approche Pédagogique</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.pedagogicalApproach.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all hover:scale-105"
                >
                  {/* Numéro */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 center-flex flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Texte */}
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed flex-1">
                    {item}
                  </p>

                  {/* Check icon */}
                  <HiCheckCircle className="text-green-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ===== VERSION ÉTENDUE - Expériences professionnelles ===== */
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-gray-300 last:pb-0 hover:border-blue-400 transition-colors"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[13px] sm:-left-[17px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${exp.color} center-flex text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform`}
              >
                <exp.icon className="text-white" />
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mt-1">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        📍 {exp.location}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                    <span className="badge badge-primary text-xs shrink-0">
                      {exp.type}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      📅 {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="relative">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed bg-gray-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-400">
                    {exp.description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HiCheckCircle className="text-green-500" />
                    <span>Réalisations clés</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2 sm:p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group/achievement"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500 center-flex flex-shrink-0 group-hover/achievement:scale-110 transition-transform">
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Summary footer */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  {experiences.length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Expériences
                </div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {experiences.reduce(
                    (acc, exp) => acc + exp.achievements.length,
                    0,
                  )}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Réalisations
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">
                  {new Set(experiences.map((e) => e.type)).size}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Types de postes
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
