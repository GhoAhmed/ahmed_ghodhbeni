import { FaBook, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const HeroCourse = () => {
  return (
    <section className="container-app">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
        {/* Effets de fond améliorés */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Cercles lumineux en arrière-plan */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-blue-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Badge en haut */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm sm:text-base border border-white/20">
            <HiSparkles className="text-yellow-300 animate-pulse" />
            <span className="text-blue-100 font-medium">
              Apprentissage interactif
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Catalogue de Cours
            <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-200 mt-2">
              Développez vos compétences
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Explorez mes cours interactifs et développez vos compétences en
            informatique avec des projets pratiques et des exercices engageants
          </p>

          {/* Icônes de fonctionnalités */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto pt-4 sm:pt-6">
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                <FaBook className="text-white text-lg sm:text-xl" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-blue-100">
                5+ Cours
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/30 flex items-center justify-center">
                <FaLaptopCode className="text-white text-lg sm:text-xl" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-blue-100">
                Pratique
              </span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
                <FaGraduationCap className="text-white text-lg sm:text-xl" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-blue-100">
                Certifié
              </span>
            </div>
          </div>

          {/* Indicateur de scroll (optionnel) */}
          <div className="pt-4 sm:pt-6 hidden sm:block">
            <div className="inline-flex flex-col items-center gap-2 text-blue-200 animate-bounce">
              <span className="text-sm">Découvrir les cours</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCourse;
