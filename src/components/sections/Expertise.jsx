import { expertiseAreas } from "../../constants";

const Expertise = () => {
  return (
    <section className="container-app">
      <div className="text-center mb-12">
        <h2 className="section-title">Domaines d'expertise</h2>
        <p className="section-subtitle mx-auto">
          Des cours couvrant les technologies et concepts essentiels du
          développement
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="card card-hover group cursor-pointer">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} center-flex text-4xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <area.icon className={`text-${area.iconColor}`} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {area.title}
            </h3>
            <p className="text-gray-600 text-sm">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
