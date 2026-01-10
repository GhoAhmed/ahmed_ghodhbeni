import {
  FaBook,
  FaCloud,
  FaDatabase,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { HiBookOpen, HiBriefcase, HiHome, HiMail } from "react-icons/hi";
import { MdFunctions } from "react-icons/md";

export const navLinks = [
  { to: "/", label: "Accueil", icon: HiHome },
  {
    to: "/courses",
    label: "Cours",
    icon: HiBookOpen,
  },
  {
    to: "/portfolio",
    label: "Portfolio",
    icon: HiBriefcase,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ahmedghodhbeni/",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/GhoAhmed",
    color: "hover:text-gray-900",
  },
  {
    name: "Email",
    icon: HiMail,
    url: "mailto:ahmed.godhbeni@gmail.com",
    color: "hover:text-red-600",
  },
];

export const quickLinks = [
  { to: "/", label: "Accueil" },
  { to: "/courses", label: "Cours" },
  { to: "/portfolio", label: "Portfolio" },
];

// Statistiques dynamiques
export const stats = [
  {
    value: "2+",
    label: "Années d'expérience",
    icon: FaGraduationCap,
    iconColor: "blue-700",
  },
  {
    value: "100+",
    label: "Étudiants formés",
    icon: FaUserGraduate,
    iconColor: "green-700",
  },
  {
    value: "5+",
    label: "Cours interactifs",
    icon: FaBook,
    iconColor: "purple-700",
  },
  {
    value: "95%",
    label: "Taux de satisfaction",
    icon: FaStar,
    iconColor: "orange-700",
  },
];

// Domaines d'expertise
export const expertiseAreas = [
  {
    title: "Développement Web",
    description: "React, Node.js, JavaScript moderne",
    icon: FaLaptopCode,
    iconColor: "blue-700",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Bases de données",
    description: "SQL, MongoDB, Architecture de données",
    icon: FaDatabase,
    iconColor: "green-700",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Algorithmique",
    description: "Structures de données, Complexité",
    icon: MdFunctions,
    iconColor: "purple-700",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps & Cloud",
    description: "Docker, CI/CD, AWS, Azure",
    icon: FaCloud,
    iconColor: "orange-700",
    color: "from-orange-500 to-red-500",
  },
];

// Témoignages
export const testimonials = [
  {
    name: "Sarah M.",
    role: "Étudiante en Licence",
    comment:
      "Les cours sont clairs, interactifs et vraiment motivants. J'ai beaucoup progressé grâce à cette plateforme !",
    rating: 5,
  },
  {
    name: "Karim B.",
    role: "Étudiant en Master",
    comment:
      "Les quiz et exercices pratiques m'ont aidé à bien préparer mes examens. Excellente pédagogie !",
    rating: 5,
  },
  {
    name: "Amira K.",
    role: "Reconversion professionnelle",
    comment:
      "Parfait pour apprendre à son rythme. Les explications sont détaillées et accessibles.",
    rating: 5,
  },
];
