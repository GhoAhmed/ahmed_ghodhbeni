import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { HiBookOpen, HiBriefcase, HiHome, HiMail } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Détection du scroll pour effet d'élévation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Accueil", icon: <HiHome className="w-5 h-5" /> },
    {
      to: "/courses",
      label: "Cours",
      icon: <HiBookOpen className="w-5 h-5" />,
    },
    {
      to: "/portfolio",
      label: "Portfolio",
      icon: <HiBriefcase className="w-5 h-5" />,
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="container-app">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Title */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 center-flex text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              AG
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-gradient block">
                Ahmed Ghodhbeni
              </span>
              <span className="text-xs text-gray-500 -mt-1 block">
                Ingénieur • Enseignant
              </span>
            </div>
          </NavLink>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/80 rounded-full p-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
                {({ isActive }) =>
                  isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
                  )
                }
              </NavLink>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:ahmed.godhbeni@gmail.com"
              className="btn btn-primary btn-sm"
            >
              <HiMail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-4 px-4">
                <a
                  href="mailto:ahmed.ghodhbeni@example.com"
                  className="btn btn-primary w-full"
                >
                  <HiMail className="w-5 h-5" />
                  <span>Me contacter</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
