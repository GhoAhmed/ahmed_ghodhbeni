import { Link } from "react-router";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  // Statistiques dynamiques
  const stats = [
    { value: "5+", label: "Années d'expérience", icon: "🎓" },
    { value: "500+", label: "Étudiants formés", icon: "👨‍🎓" },
    { value: "15+", label: "Cours interactifs", icon: "📚" },
    { value: "95%", label: "Taux de satisfaction", icon: "⭐" },
  ];

  // Domaines d'expertise
  const expertiseAreas = [
    {
      title: "Développement Web",
      description: "React, Node.js, JavaScript moderne",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Bases de données",
      description: "SQL, MongoDB, Architecture de données",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Algorithmique",
      description: "Structures de données, Complexité",
      icon: "🧮",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps & Cloud",
      description: "Docker, CI/CD, AWS, Azure",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Témoignages
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Étudiante en Licence",
      comment: "Les cours sont clairs, interactifs et vraiment motivants. J'ai beaucoup progressé grâce à cette plateforme !",
      rating: 5,
    },
    {
      name: "Karim B.",
      role: "Étudiant en Master",
      comment: "Les quiz et exercices pratiques m'ont aidé à bien préparer mes examens. Excellente pédagogie !",
      rating: 5,
    },
    {
      name: "Amira K.",
      role: "Reconversion professionnelle",
      comment: "Parfait pour apprendre à son rythme. Les explications sont détaillées et accessibles.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>
        
        <div className={`container-app relative py-16 md:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge d'introduction */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Plateforme pédagogique interactive
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
              Découvrez une approche pédagogique moderne avec des cours interactifs, 
              des quiz engageants et un suivi personnalisé pour favoriser votre réussite.
            </p>

            {/* Présentation courte */}
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white font-bold shadow-lg">
                AG
              </div>
              <div className="text-left">
                <p className="font-semibold">Ahmed Ghodhbeni</p>
                <p className="text-sm text-gray-500">Ingénieur Informatique • Enseignant</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/courses" className="btn btn-primary btn-lg group">
                <span>📚</span>
                <span>Explorer les cours</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link to="/portfolio" className="btn btn-outline btn-lg">
                <span>💼</span>
                <span>Voir mon portfolio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Décoration */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Statistiques */}
      <section className="container-app">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card text-center hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="container-app">
        <div className="text-center mb-12">
          <h2 className="section-title">Domaines d'expertise</h2>
          <p className="section-subtitle mx-auto">
            Des cours couvrant les technologies et concepts essentiels du développement moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="card card-hover group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} center-flex text-4xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi cette plateforme */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="section-title">Pourquoi choisir cette plateforme ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold">Apprentissage ciblé</h3>
              <p className="text-gray-600">
                Des cours structurés et progressifs adaptés à votre niveau
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
                ✅
              </div>
              <h3 className="text-xl font-semibold">Quiz interactifs</h3>
              <p className="text-gray-600">
                Testez vos connaissances et suivez votre progression
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white shadow-lg center-flex text-4xl">
                🚀
              </div>
              <h3 className="text-xl font-semibold">Pratique continue</h3>
              <p className="text-gray-600">
                Des exercices pratiques pour ancrer vos compétences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
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
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
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
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="container-app">
        <div className="card bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-center p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Rejoignez des centaines d'étudiants qui progressent chaque jour grâce à nos cours interactifs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="btn bg-white text-blue-600 hover:bg-gray-100 btn-lg">
              <span>🚀</span>
              <span>Commencer maintenant</span>
            </Link>
            <a href="mailto:ahmed.ghodhbeni@example.com" className="btn btn-outline border-white text-white hover:bg-white/10 btn-lg">
              <span>📧</span>
              <span>Me contacter</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;