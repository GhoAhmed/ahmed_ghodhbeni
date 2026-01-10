import { FaBullseye, FaCheckCircle, FaRocket } from "react-icons/fa";

const WhyPlatform = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="container-app">
        <div className="text-center mb-12">
          <h2 className="section-title">Pourquoi choisir cette plateforme ?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
              <FaBullseye className="w-10 h-10 text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold">Apprentissage ciblé</h3>
            <p className="text-gray-600">
              Des cours structurés et progressifs adaptés à votre niveau
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
              <FaCheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Quiz interactifs</h3>
            <p className="text-gray-600">
              Testez vos connaissances et suivez votre progression
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
              <FaRocket className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold">Pratique continue</h3>
            <p className="text-gray-600">
              Des exercices pratiques pour ancrer vos compétences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlatform;
