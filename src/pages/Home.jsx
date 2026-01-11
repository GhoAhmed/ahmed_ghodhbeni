import { testimonials } from "../constants";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Expertise from "../components/sections/Expertise";
import WhyPlatform from "../components/sections/WhyPlatform";
import Testimonials from "../components/sections/Testimonials";
import CTAFinal from "../components/sections/CTAFinal";

const Home = () => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <Hero />

      {/* Statistiques */}
      <Stats />

      {/* Domaines d'expertise */}
      <Expertise />

      {/* Pourquoi cette plateforme */}
      <WhyPlatform />

      {/* Témoignages */}
      <Testimonials testimonials={testimonials} />

      {/* Call to Action Final */}
      <CTAFinal />
    </div>
  );
};

export default Home;
