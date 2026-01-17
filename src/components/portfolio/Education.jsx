import { FaGraduationCap, FaTrophy, FaExternalLinkAlt } from "react-icons/fa";
import { certifications, education, formations } from "../../constants";
import { IoBookSharp } from "react-icons/io5";
import { HiCheckCircle } from "react-icons/hi";

const Education = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ===== FORMATION ACADÉMIQUE ===== */}
      <div className="card">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-xl sm:text-2xl shadow-lg">
            <FaGraduationCap className="text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Formation Académique
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Parcours universitaire
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="group relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-gray-300 last:pb-0 hover:border-blue-400 transition-colors"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[13px] sm:-left-[17px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${edu.color} center-flex text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform`}
              >
                <edu.icon className="text-white" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mt-1">
                      {edu.school}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                      📍 {edu.location}
                    </p>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                    <span className="badge badge-primary text-xs">
                      {edu.type}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      📅 {edu.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {edu.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <HiCheckCircle className="text-green-500 flex-shrink-0 mt-0.5 text-base sm:text-lg" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CERTIFICATIONS ===== */}
      <div className="card">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-xl sm:text-2xl shadow-lg">
            <FaTrophy className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Certifications
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Certifications professionnelles
            </p>
          </div>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-bold">
            {certifications.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${cert.color} center-flex text-xl sm:text-2xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}
              >
                <cert.icon className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base line-clamp-1 group-hover:text-purple-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-1">
                  {cert.issuer}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-mono truncate max-w-[120px]">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>

              {/* External link indicator */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaExternalLinkAlt className="text-purple-500 text-xs" />
              </div>

              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== FORMATIONS COMPLÉMENTAIRES ===== */}
      <div className="card bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex shadow-lg">
              <IoBookSharp className="text-white text-lg sm:text-xl" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Formations Complémentaires
              </h3>
              <p className="text-xs text-gray-500">Développement continu</p>
            </div>
          </div>
          <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-bold">
            {formations.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {formations.map((formation, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-transparent hover:border-blue-300 hover:shadow-md transition-all hover:scale-105"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 center-flex flex-shrink-0 group-hover:scale-110 transition-transform">
                <formation.icon className="text-blue-600 text-lg sm:text-xl" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {formation.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {formation.year}
                  </span>
                </div>
              </div>

              {/* Check icon for completed */}
              <HiCheckCircle className="text-green-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
