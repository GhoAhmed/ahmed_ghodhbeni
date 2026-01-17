import { HiMail, HiLightBulb } from "react-icons/hi";
import { FaQuestionCircle } from "react-icons/fa";

const CTACourse = () => {
  return (
    <section className="container-app">
      <div className="relative overflow-hidden card bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 text-center p-6 sm:p-8 md:p-10">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-purple-200/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Icône principale */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg mb-2">
            <FaQuestionCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Titre */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Vous ne trouvez pas le cours que vous cherchez ?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Contactez-moi pour suggérer de nouveaux cours ou pour des formations
            personnalisées adaptées à vos besoins
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="mailto:ahmed.godhbeni@gmail.com"
              className="btn btn-primary btn-lg group"
            >
              <HiMail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span>Me contacter</span>
            </a>
            <button className="btn btn-secondary btn-lg group">
              <HiLightBulb className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span>Suggérer un cours</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACourse;
