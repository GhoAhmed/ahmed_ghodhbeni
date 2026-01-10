import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="container-app">
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Restons en contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour
            discuter d'opportunités ou de collaborations
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:ahmed.godhbeni@gmail.com"
              className="card card-hover text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                <HiMail className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600">ahmed.godhbeni@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/ahmedghodhbeni/"
              target="_blank"
              className="card card-hover text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                <FaLinkedin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">@ahmedghodhbeni</p>
            </a>

            <a
              href="https://github.com/GhoAhmed"
              target="_blank"
              className="card card-hover text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 center-flex text-white text-2xl group-hover:scale-110 transition-transform">
                <FaGithub className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">@AhmedGho</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
