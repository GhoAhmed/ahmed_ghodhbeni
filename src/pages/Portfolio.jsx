import { useState } from "react";
import Profile from "../components/portfolio/Profile";
import Experience from "../components/portfolio/Experience";
import Skills from "../components/portfolio/Skills";
import Education from "../components/portfolio/Education";
import Projects from "../components/portfolio/Projects";
import Certifications from "../components/portfolio/Certifications";
import { tabs } from "../constants";
import HeroPortfolio from "../components/sections/HeroPortfolio";
import Contact from "../components/sections/Contact";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8 pb-16">
      {/* En-tête du Portfolio */}
      <HeroPortfolio />

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
                <span className="text-lg">
                  <tab.icon />
                </span>
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

          {activeTab === "skills" && <Skills expanded />}

          {activeTab === "projects" && <Projects />}

          {activeTab === "education" && <Education />}
        </div>
      </section>

      {/* Section Contact */}
      <Contact />
    </div>
  );
};

export default Portfolio;
