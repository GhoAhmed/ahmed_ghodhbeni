import { HiMail } from "react-icons/hi";

const CTACourse = () => {
  return (
    <section className="container-app">
      <div className="card bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100 text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Vous ne trouvez pas le cours que vous cherchez ?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contactez-moi pour suggérer de nouveaux cours ou pour des formations
          personnalisées
        </p>
        <a
          href="mailto:ahmed.ghodhbeni@example.com"
          className="btn btn-primary"
        >
          <HiMail className="w-6 h-6" />
          <span>Me contacter</span>
        </a>
      </div>
    </section>
  );
};

export default CTACourse;
