import { testimonials } from "../../constants";

const Testimonials = () => {
  return (
    <section className="container-app">
      <div className="text-center mb-12">
        <h2 className="section-title">Ce que disent mes étudiants</h2>
        <p className="section-subtitle mx-auto">
          La satisfaction de mes étudiants est ma priorité
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card hover-lift">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ⭐
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.comment}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 center-flex text-white font-semibold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
