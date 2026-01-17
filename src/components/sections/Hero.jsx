import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBook, FaBriefcase } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>

      <div
        className={`container-app relative py-16 md:py-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge d'introduction */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              Bienvenue sur StudyHub
            </span>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Apprenez l'informatique
            <br />
            <span className="text-gradient">de manière interactive</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une plateforme pédagogique conçue pour aider les étudiants à
            maîtriser les bases et les technologies modernes à travers des
            <span className="font-medium text-gray-800">
              {" "}
              cours interactifs, des quiz intelligents
            </span>{" "}
            et un apprentissage progressif.
          </p>

          {/* Présentation courte */}
          <div className="flex items-center justify-center gap-3 text-gray-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white font-bold shadow-lg">
              AG
            </div>
            <div className="text-left">
              <p className="font-semibold">Ahmed Ghodhbeni</p>
              <p className="text-sm text-gray-500">
                Ingénieur informatique • Enseignant
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/courses" className="btn btn-primary btn-lg group">
              <FaBook className="w-5 h-5 mr-2" />
              <span>Explorer les cours</span>
            </Link>

            <Link to="/portfolio" className="btn btn-outline btn-lg">
              <FaBriefcase className="w-5 h-5 mr-2" />
              <span>À propos de moi</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Décoration */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
