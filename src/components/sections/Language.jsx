import { languages } from "../../constants";
import { FaEarthAfrica } from "react-icons/fa6";
import { HiCheckCircle } from "react-icons/hi";

const Language = () => {
  // Fonction pour déterminer le style selon le niveau
  const getLevelStyle = (proficiency) => {
    if (proficiency >= 90)
      return {
        bg: "from-green-500 to-emerald-600",
        border: "border-green-200",
        text: "text-green-700",
        bgLight: "bg-green-50",
      };
    if (proficiency >= 70)
      return {
        bg: "from-blue-500 to-indigo-600",
        border: "border-blue-200",
        text: "text-blue-700",
        bgLight: "bg-blue-50",
      };
    if (proficiency >= 50)
      return {
        bg: "from-orange-500 to-amber-600",
        border: "border-orange-200",
        text: "text-orange-700",
        bgLight: "bg-orange-50",
      };
    return {
      bg: "from-gray-500 to-slate-600",
      border: "border-gray-200",
      text: "text-gray-700",
      bgLight: "bg-gray-50",
    };
  };

  return (
    <div className="card">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-xl sm:text-2xl shadow-lg">
          <FaEarthAfrica className="text-white" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Langues
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Compétences linguistiques
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {languages.map((lang, idx) => {
          const style = getLevelStyle(lang.proficiency);

          return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl border-2 ${style.border} ${style.bgLight} p-4 hover:shadow-lg transition-all hover:scale-105`}
            >
              {/* Badge de niveau en haut à droite */}
              <div className="absolute top-2 right-2">
                <div
                  className={`px-2.5 py-1 bg-gradient-to-r ${style.bg} rounded-full shadow-md`}
                >
                  <span className="text-xs font-bold text-white">
                    {lang.proficiency}%
                  </span>
                </div>
              </div>

              {/* Contenu principal */}
              <div className="flex items-start gap-3">
                {/* Drapeau */}
                <div className="text-4xl sm:text-5xl flex-shrink-0">
                  {lang.flag}
                </div>

                {/* Info langue */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                    {lang.name}
                  </h4>
                  <p
                    className={`text-sm sm:text-base font-semibold ${style.text} mb-2`}
                  >
                    {lang.level}
                  </p>

                  {/* Points de compétence visuels */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < Math.ceil(lang.proficiency / 20)
                            ? `bg-gradient-to-r ${style.bg}`
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Indicateur si niveau élevé */}
              {lang.proficiency >= 90 && (
                <div className="absolute bottom-2 right-2">
                  <HiCheckCircle className="text-green-500 text-xl" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Language;
