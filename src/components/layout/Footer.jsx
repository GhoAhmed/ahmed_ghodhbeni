import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { NavLink } from "react-router";
import { quickLinks, socialLinks } from "../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
      {/* Section principale */}
      <div className="container-app py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne 1 : À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white font-bold text-xl shadow-lg">
                SH
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-400">StudyHub</h3>
                <p className="text-sm text-gray-400">Plateforme éducative</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plateforme pédagogique interactive pour l'apprentissage de
              l'informatique et du développement.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Liens rapides
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-200"></span>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Colonne 3 : Contact & Réseaux sociaux */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Restons connectés
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm center-flex text-xl transition-all duration-200 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="w-6 h-6 text-gray-500" />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <p className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Tunisie, Kasserine</span>
              </p>
              <a
                href="mailto:ahmed.godhbeni@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <HiMail className="w-5 h-5" />
                <span>ahmed.godhbeni@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-700/50">
        <div className="container-app py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Ahmed Ghodhbeni. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
