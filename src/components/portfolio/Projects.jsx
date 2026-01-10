import { CiLink } from "react-icons/ci";
import { FaBriefcase, FaLaptop, FaRobot, FaRocket } from "react-icons/fa";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-2xl">
            <FaRocket className="text-blue-100" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Projets Réalisés
            </h2>
            <p className="text-sm text-gray-600">
              Applications et solutions développées
            </p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Voici une sélection de mes projets professionnels et personnels
          démontrant mon expertise technique et ma capacité à créer des
          solutions complètes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="card card-hover group">
            <div className="space-y-4">
              {/* En-tête du projet */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} center-flex text-3xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                >
                  <project.image />
                </div>
                <span className="badge badge-success text-xs">
                  {project.status}
                </span>
              </div>

              {/* Titre et description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Points forts */}
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <a
                  href={project.link}
                  className="flex-1 btn btn-sm btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLink className="h-5 w-5" />
                  <span>Voir le projet</span>
                </a>
                <a
                  href={project.github}
                  className="flex-1 btn btn-sm btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLaptop className="h-5 w-5" />
                  <span>Code source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
