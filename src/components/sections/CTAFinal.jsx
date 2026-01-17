import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const CTAFinal = () => {
  return (
    <section className="container-app">
      {/* Option 1: Gradient moderne bleu-violet avec overlay */}
      <div className="relative overflow-hidden card bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white text-center p-8 sm:p-12 md:p-16">
        {/* Effet de lumière en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-transparent to-purple-400/20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>

        {/* Contenu */}
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full bg-white/10 backdrop-blur-sm">
            <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Rejoignez des centaines d'étudiants qui progressent chaque jour
            grâce à nos cours
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              to="/courses"
              className="btn bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transition-transform btn-lg shadow-xl"
            >
              <FaRocket className="w-5 h-5" />
              <span>Commencer maintenant</span>
            </Link>
            <a
              href="mailto:ahmed.godhbeni@gmail.com"
              className="btn border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white transition-all btn-lg"
            >
              <HiMail className="w-5 h-5" />
              <span>Me contacter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
