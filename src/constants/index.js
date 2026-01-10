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
import clientCourses from "../data/courses/client-side.json";
import { RiBookShelfFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";

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

export const allCourses = [
  clientCourses,
  {
    id: "react-fundamentals",
    title: "React - Les Fondamentaux",
    category: "Développement Web",
    level: "Intermédiaire",
    description:
      "Apprenez à créer des applications web modernes avec React, hooks et composants.",
    prerequisites: ["JavaScript ES6", "HTML/CSS", "Notions de SPA"],
    duration: "8 heures",
    lessonsCount: 12,
    studentsCount: 245,
    rating: 4.8,
  },
  {
    id: "javascript-advanced",
    title: "JavaScript Avancé",
    category: "Programmation",
    level: "Avancé",
    description:
      "Maîtrisez les concepts avancés de JavaScript : closures, promises, async/await.",
    prerequisites: ["JavaScript de base", "Algorithmique"],
    duration: "10 heures",
    lessonsCount: 15,
    studentsCount: 189,
    rating: 4.9,
  },
  {
    id: "sql-database",
    title: "Bases de Données SQL",
    category: "Base de données",
    level: "Débutant",
    description:
      "Introduction aux bases de données relationnelles et au langage SQL.",
    prerequisites: ["Logique de base"],
    duration: "6 heures",
    lessonsCount: 10,
    studentsCount: 312,
    rating: 4.7,
  },
  {
    id: "nodejs-backend",
    title: "Node.js & Express",
    category: "Développement Web",
    level: "Intermédiaire",
    description: "Créez des API REST performantes avec Node.js et Express.",
    prerequisites: ["JavaScript", "HTTP/REST"],
    duration: "12 heures",
    lessonsCount: 18,
    studentsCount: 198,
    rating: 4.6,
  },
  {
    id: "mongodb-nosql",
    title: "MongoDB - NoSQL",
    category: "Base de données",
    level: "Intermédiaire",
    description:
      "Découvrez les bases de données NoSQL avec MongoDB et Mongoose.",
    prerequisites: ["JavaScript", "Bases de données"],
    duration: "7 heures",
    lessonsCount: 11,
    studentsCount: 167,
    rating: 4.5,
  },
];

export const coursesStats = [
  {
    icon: RiBookShelfFill,
    iconColor: "orange-700",
    value: allCourses.length,
    label: "Cours disponibles",
  },
  {
    icon: PiStudentFill,
    iconColor: "green-700",
    value: "50+",
    label: "Étudiants actifs",
  },
  {
    icon: FaStar,
    iconColor: "amber-300",
    value: "4.7",
    label: "Note moyenne",
  },
  {
    icon: FaGraduationCap,
    iconColor: "purple-700",
    value: "95%",
    label: "Taux de réussite",
  },
];
