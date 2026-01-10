import { Link } from "react-router";
import { FaRocket } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const CTAFinal = () => {
  return (
    <section className="container-app">
      <div className="card bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-center p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-100">
          Prêt à commencer votre apprentissage ?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Rejoignez des centaines d'étudiants qui progressent chaque jour grâce
          à nos cours
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/courses"
            className="btn bg-white text-blue-600 hover:bg-gray-100 btn-lg"
          >
            <FaRocket className="w-5 h-5 mr-2" />
            <span>Commencer maintenant</span>
          </Link>
          <a
            href="mailto:ahmed.ghodhbeni@example.com"
            className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg"
          >
            <HiMail className="w-5 h-5 mr-2" />
            <span>Me contacter</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
