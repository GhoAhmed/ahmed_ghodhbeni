import { useState } from "react";
import Profile from "../components/portfolio/Profile";
import Experience from "../components/portfolio/Experience";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";
import Projects from "../components/portfolio/Projects";
import Certifications from "../components/portfolio/Certifications";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Vue d'ensemble", icon: "👤" },
    { id: "experience", label: "Expérience", icon: "💼" },
    { id: "skills", label: "Compétences", icon: "🎯" },
    { id: "projects", label: "Projets", icon: "🚀" },
    { id: "education", label: "Formation", icon: "🎓" },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* En-tête du Portfolio */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white rounded-3xl p-8 md:p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Disponible pour le concours Technologue</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Portfolio Professionnel
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Ingénieur informatique passionné par l'enseignement et l'innovation pédagogique
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              <span>📧</span>
              <span>Me contacter</span>
            </a>
            <a href="#" download className="btn btn-outline border-white text-white hover:bg-white/10">
              <span>📄</span>
              <span>Télécharger CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation par onglets */}
      <section className="container-app">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu des onglets */}
      <section className="container-app">
        <div className="animate-fadeIn">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <Profile />
              <div className="grid md:grid-cols-2 gap-6">
                <Experience />
                <Skills />
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              <Experience expanded />
              <Certifications />
            </div>
          )}

          {activeTab === "skills" && (
            <Skills expanded />
          )}

          {activeTab === "projects" && (
            <Projects />
          )}

          {activeTab === "education" && (
            <Education />
          )}
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="container-app">
        <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Restons en contact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="mailto:ahmed.ghodhbeni@example.com" className="card card-hover text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600">ahmed.ghodhbeni@example.com</p>
              </a>

              <a href="#" target="_blank" className="card card-hover text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                  💼
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-gray-600">Ahmed Ghodhbeni</p>
              </a>

              <a href="#" target="_blank" className="card card-hover text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-gray-600">@ahmedghodhbeni</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;