import {
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";
import profile from "../../data/profile.json";
import Grille from "../sections/Grille";
import { SiQuizlet } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="card space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white text-5xl font-bold shadow-xl">
            AG
          </div>
        </div>

        {/* Informations principales */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {profile.name}
            </h2>
            <p className="text-xl text-blue-600 font-medium mb-3">
              {profile.title}
            </p>
            <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
          </div>

          {/* Tags de compétences rapides */}
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-primary">
              <FaLaptopCode className="h-5 w-5" /> Développement Web
            </span>
            <span className="badge badge-info">
              <FaGraduationCap className="h-5 w-5" /> Pédagogie
            </span>
            <span className="badge badge-success">
              <FaRocket className="h-5 w-5" /> Innovation
            </span>
            <span className="badge badge-warning">
              <SiQuizlet className="h-5 w-5" /> Problem-Solving
            </span>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-3 pt-2">
            <a
              href="mailto:ahmed.godhbeni@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <HiMail />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedghodhbeni/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/GhoAhmed"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Points forts en grille */}
      <Grille />
    </div>
  );
};

export default Profile;
