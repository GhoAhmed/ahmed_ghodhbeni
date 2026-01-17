import { FaFileAlt, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import { HiMail, HiSparkles } from "react-icons/hi";

const HeroPortfolio = () => {
  return (
    <section className="container-app">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-600 to-indigo-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
        {/* Motif de grille en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Cercles lumineux décoratifs */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-indigo-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Badge de statut */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <HiSparkles className="text-yellow-300 text-sm sm:text-base" />
            <span className="text-xs sm:text-sm font-medium">
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Titre principal */}
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ahmed Ghodhbeni
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-200">
              Ingénieur Informatique
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Passionné par l'enseignement et l'innovation pédagogique, spécialisé
            dans le développement web et les technologies modernes
          </p>

          {/* Statistiques rapides */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto py-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <FaBriefcase className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-blue-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">2+</div>
              <div className="text-xs sm:text-sm text-blue-200">Années</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <FaCode className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-indigo-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                10+
              </div>
              <div className="text-xs sm:text-sm text-blue-200">Projets</div>
            </div>
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <FaUser className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-purple-300" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                100+
              </div>
              <div className="text-xs sm:text-sm text-blue-200">Étudiants</div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#contact"
              className="btn bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform shadow-xl btn-lg group"
            >
              <HiMail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Me contacter</span>
            </a>
            <a
              href="#"
              download
              className="btn border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all btn-lg group"
            >
              <FaFileAlt className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
