import { skillCategories, tools } from "../../constants";
import profile from "../../data/profile.json";
import { TbTargetArrow } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const Skills = ({ expanded = false }) => {
  // Fonction pour obtenir le style selon le niveau
  const getSkillStyle = (level) => {
    if (level >= 90)
      return {
        dots: 5,
        color: "from-green-400 to-emerald-500",
        badge: "bg-green-100 text-green-700",
        label: "Expert",
      };
    if (level >= 80)
      return {
        dots: 4,
        color: "from-blue-400 to-indigo-500",
        badge: "bg-blue-100 text-blue-700",
        label: "Avancé",
      };
    if (level >= 70)
      return {
        dots: 3,
        color: "from-orange-400 to-amber-500",
        badge: "bg-orange-100 text-orange-700",
        label: "Intermédiaire",
      };
    return {
      dots: 2,
      color: "from-gray-400 to-slate-500",
      badge: "bg-gray-100 text-gray-700",
      label: "Débutant",
    };
  };

  return (
    <div className="card space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-xl sm:text-2xl shadow-lg">
          <TbTargetArrow className="text-white" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Compétences & Outils
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Technologies et expertise technique
          </p>
        </div>
      </div>

      {!expanded ? (
        /* ===== VERSION COMPACTE ===== */
        <div className="space-y-4 sm:space-y-6">
          {/* Compétences principales */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
              Compétences principales
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="group relative px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-100 hover:to-indigo-100 hover:shadow-md transition-all hover:scale-105"
                >
                  {skill}
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              ))}
            </div>
          </div>

          {/* Outils favoris */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
              Outils favoris
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:from-gray-200 hover:to-gray-300 hover:shadow-md transition-all hover:scale-105"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ===== VERSION ÉTENDUE ===== */
        <div className="space-y-6 sm:space-y-8">
          {/* Compétences par catégories */}
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-3 sm:space-y-4">
              {/* Titre de catégorie */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${category.color} center-flex text-lg sm:text-xl shadow-md`}
                >
                  <category.icon className="text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pl-0 sm:pl-2">
                {category.skills.map((skill, i) => {
                  const style = getSkillStyle(skill.level);

                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-xl p-3 sm:p-4 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      {/* Nom de la compétence */}
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {skill.name}
                        </h4>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-bold ${style.badge}`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Indicateurs visuels - Points */}
                      <div className="flex items-center gap-1.5 mb-2">
                        {[...Array(5)].map((_, dotIdx) => (
                          <div
                            key={dotIdx}
                            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                              dotIdx < style.dots
                                ? `bg-gradient-to-r ${style.color} shadow-sm`
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Label niveau */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        {skill.level >= 90 && (
                          <HiSparkles className="text-yellow-500" />
                        )}
                        <span className="font-medium">{style.label}</span>
                      </div>

                      {/* Accent gradient (hover) */}
                      <div
                        className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${style.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Outils & Technologies */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <span>Outils & Technologies</span>
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                {tools.length}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 center-flex flex-shrink-0 group-hover:scale-110 transition-transform">
                    <tool.icon className="text-lg sm:text-xl text-purple-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {tool.name}
                    </p>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Légende */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                <span className="text-gray-600">Expert (90%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500" />
                <span className="text-gray-600">Avancé (80-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-500" />
                <span className="text-gray-600">Intermédiaire (70-79%)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
