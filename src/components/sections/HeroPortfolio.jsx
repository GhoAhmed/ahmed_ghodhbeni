import { FaFileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const HeroPortfolio = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-600 via-blue-400 to-indigo-900 text-white rounded-3xl p-8 md:p-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium">À propos de moi</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-200">
          Portfolio Professionnel
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Ingénieur informatique passionné par l'enseignement et l'innovation
          pédagogique
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="btn bg-white text-blue-600 hover:bg-gray-100"
          >
            <HiMail className="h-5 w-5" />
            <span>Me contacter</span>
          </a>
          <a
            href="#"
            download
            className="btn btn-outline border-white text-white hover:bg-white/10"
          >
            <FaFileAlt className="w-5 h-5" />
            <span>Télécharger CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
