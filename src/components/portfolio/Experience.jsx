import { FaBriefcase } from "react-icons/fa";
import { experiences } from "../../constants";
import profile from "../../data/profile.json";

const Experience = ({ expanded = false }) => {
  return (
    <div className="card space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-300 center-flex text-2xl">
          <FaBriefcase className="text-yellow-900" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {expanded ? "Parcours Professionnel" : "Approche Pédagogique"}
          </h2>
          <p className="text-sm text-gray-500">
            {expanded
              ? "Mon expérience professionnelle"
              : "Ma méthodologie d'enseignement"}
          </p>
        </div>
      </div>

      {!expanded ? (
        /* Version compacte - Approche pédagogique */
        <div className="space-y-3">
          {profile.pedagogicalApproach.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 center-flex flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-sm font-semibold">
                  {idx + 1}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      ) : (
        /* Version étendue - Expériences professionnelles */
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
            >
              {/* Point sur la timeline */}
              <div
                className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} center-flex text-lg shadow-lg`}
              >
                <exp.icon />
              </div>

              {/* Contenu */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="badge badge-primary">{exp.type}</span>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm text-gray-700">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
