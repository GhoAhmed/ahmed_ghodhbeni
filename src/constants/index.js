import {
  FaBook,
  FaBriefcase,
  FaBullseye,
  FaChalkboardTeacher,
  FaCloud,
  FaCode,
  FaCommentDots,
  FaDatabase,
  FaDocker,
  FaFile,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaPalette,
  FaReact,
  FaRobot,
  FaRocket,
  FaStar,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import {
  IoLogoAndroid,
  IoLogoGameControllerB,
  IoMdAnalytics,
} from "react-icons/io";
import { RiBookShelfFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaFilePen, FaGraduationCap } from "react-icons/fa6";
import { HiBookOpen, HiBriefcase, HiHome, HiMail } from "react-icons/hi";
import { MdFunctions } from "react-icons/md";
import clientCourses from "../data/courses/client-side.json";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher, GiThink } from "react-icons/gi";
import { SiJira, SiPostman } from "react-icons/si";
import { GrAchievement } from "react-icons/gr";

export const CONTACT_EMAIL = "ahmed.godhbeni@gmail.com";

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
    value: "3+",
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
    description: "React, Angular, Node.js",
    icon: FaLaptopCode,
    iconColor: "blue-700",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Développement Mobile",
    description: "Android, Kotlin, Cross-Platform",
    icon: IoLogoAndroid,
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
    name: "Yassine Ch.",
    role: "Étudiante en Licence",
    comment:
      "Les cours sont clairs, interactifs et vraiment motivants. J'ai beaucoup progressé grâce à cette plateforme !",
    rating: 5,
  },
  {
    name: "Amen Ba.",
    role: "Étudiant en Licence",
    comment:
      "Les quiz et exercices pratiques m'ont aidé à bien préparer mes examens. Excellente pédagogie !",
    rating: 5,
  },
  {
    name: "Amira K.",
    role: "Étudiante en Licence",
    comment:
      "Parfait pour apprendre à son rythme. Les explications sont détaillées et accessibles.",
    rating: 5,
  },
];

export const allCourses = [
  clientCourses,
  {
    id: "algorithmique-structures-donnees",
    title: "Algorithmique & Structures de Données",
    category: "Programmation",
    level: "TI",
    description:
      "Comprendre les bases de l’algorithmique et maîtriser les structures de données essentielles : tableaux, listes, piles, files, arbres.",
    prerequisites: ["Logique de base"],
    duration: "12 heures",
    lessonsCount: 20,
    studentsCount: 320,
    rating: 4.9,
  },
  {
    id: "developpement-mobile-natif",
    title: "Développement Mobile Natif",
    category: "Développement Mobile",
    level: "SEM",
    description:
      "Créer des applications mobiles natives performantes pour Android avec une architecture propre et moderne.",
    prerequisites: ["POO", "Algorithmique"],
    duration: "14 heures",
    lessonsCount: 22,
    studentsCount: 210,
    rating: 4.7,
  },
  {
    id: "developpement-mobile-cross-platform",
    title: "Développement Mobile Cross-Platform",
    category: "Développement Mobile",
    level: "DSI3",
    description:
      "Développer des applications mobiles multiplateformes avec Flutter ou React Native à partir d’un seul code source.",
    prerequisites: ["POO", "Notions Mobile"],
    duration: "12 heures",
    lessonsCount: 18,
    studentsCount: 195,
    rating: 4.8,
  },
  {
    id: "developpement-cote-serveur",
    title: "Développement Côté Serveur",
    category: "Développement Web",
    level: "DSI2",
    description:
      "Concevoir et développer des applications backend sécurisées avec gestion des utilisateurs, API REST et bases de données.",
    prerequisites: ["POO", "Bases de données", "HTTP"],
    duration: "16 heures",
    lessonsCount: 24,
    studentsCount: 230,
    rating: 4.9,
  },
  {
    id: "bases-de-donnees",
    title: "Bases de Données & SQL",
    category: "Base de données",
    level: "TI",
    description:
      "Apprendre la modélisation des données et le langage SQL pour concevoir et interroger des bases de données relationnelles.",
    prerequisites: ["Logique de base"],
    duration: "8 heures",
    lessonsCount: 14,
    studentsCount: 340,
    rating: 4.8,
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

export const tabs = [
  { id: "overview", label: "Vue d'ensemble", icon: FaUser },
  { id: "experience", label: "Expérience", icon: FaBriefcase },
  { id: "skills", label: "Compétences", icon: FaBullseye },
  { id: "projects", label: "Projets", icon: FaRocket },
  { id: "education", label: "Formation", icon: FaGraduationCap },
];

export const highlights = [
  { icon: FaGraduationCap, label: "Ingénieur Informatique", value: "Diplômé" },
  { icon: GiTeacher, label: "Enseignant", value: "2 ans d'expérience" },
  { icon: PiStudentFill, label: "Étudiants formés", value: "50+" },
  { icon: FaStar, label: "Satisfaction", value: "95%" },
];

export const experiences = [
  {
    title: "Enseignant en Informatique",
    company: "Institut Supérieur",
    period: "2020 - Présent",
    type: "CDI",
    description:
      "Formation de futurs ingénieurs et techniciens en développement web, bases de données et algorithmique",
    achievements: [
      "Conception de 15+ cours interactifs",
      "Formation de 500+ étudiants",
      "Taux de réussite de 95%",
      "Développement d'une plateforme e-learning",
    ],
    icon: FaChalkboardTeacher,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Ingénieur Développement",
    company: "Entreprise Tech",
    period: "2018 - 2020",
    type: "CDI",
    description:
      "Développement d'applications web et mobiles pour divers clients",
    achievements: [
      "Développement de 10+ projets web",
      "Architecture microservices",
      "Intégration CI/CD",
      "Formation d'équipes juniors",
    ],
    icon: FaLaptopCode,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Développeur Full Stack",
    company: "Startup Innovante",
    period: "2016 - 2018",
    type: "CDI",
    description:
      "Création d'applications SaaS et participation à l'architecture technique",
    achievements: [
      "Stack MERN complète",
      "API REST performantes",
      "Déploiement cloud (AWS)",
      "Agilité Scrum",
    ],
    icon: FaRocket,
    color: "from-purple-500 to-pink-500",
  },
];

export const skillCategories = [
  {
    title: "Développement Web",
    icon: FaLaptopCode,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "HTML/CSS", level: 100 },
    ],
  },
  {
    title: "Backend & Bases de données",
    icon: FaDatabase,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "API REST", level: 95 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: FaCloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git/GitHub", level: 95 },
      { name: "AWS/Azure", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    title: "Pédagogie & Soft Skills",
    icon: FaGraduationCap,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Conception pédagogique", level: 95 },
      { name: "Évaluation & feedback", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Gestion de projet", level: 85 },
    ],
  },
];

export const tools = [
  { name: "VS Code", icon: FaCode, category: "Éditeur" },
  { name: "Figma", icon: FaPalette, category: "Design" },
  { name: "Postman", icon: SiPostman, category: "API" },
  { name: "Jira", icon: SiJira, category: "Gestion" },
  { name: "Slack", icon: FaCommentDots, category: "Communication" },
  { name: "Notion", icon: FaFilePen, category: "Documentation" },
];

export const achievements = [
  {
    title: "Meilleur enseignant de l'année",
    year: "2023",
    organization: "Institut Supérieur",
    icon: GrAchievement,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Prix d'excellence pédagogique",
    year: "2022",
    organization: "Ministère de l'Enseignement Supérieur",
    icon: FaMedal,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Innovation en e-learning",
    year: "2021",
    organization: "Conférence EdTech Tunisie",
    icon: FcIdea,
    color: "from-green-500 to-emerald-500",
  },
];

export const publications = [
  {
    title: "L'apprentissage actif dans l'enseignement de la programmation",
    type: "Article de recherche",
    journal: "Revue Tunisienne de Pédagogie",
    year: "2023",
    icon: FaFile,
  },
  {
    title: "Gamification et motivation des étudiants en informatique",
    type: "Communication",
    journal: "Colloque International de Pédagogie",
    year: "2022",
    icon: IoLogoGameControllerB,
  },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle", flag: "🇹🇳", proficiency: 100 },
  { name: "Français", level: "Courant (C1)", flag: "🇫🇷", proficiency: 95 },
  { name: "Anglais", level: "Avancé (B2)", flag: "🇬🇧", proficiency: 85 },
];

export const projects = [
  {
    title: "PedagoApp - Plateforme E-Learning",
    description:
      "Application web interactive pour l'enseignement avec cours, quiz et suivi de progression",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: FaGraduationCap,
    color: "from-blue-500 to-indigo-500",
    link: "#",
    github: "#",
    status: "En production",
    highlights: [
      "15+ cours interactifs",
      "Système de quiz automatisé",
      "Tableau de bord étudiant",
      "500+ utilisateurs actifs",
    ],
  },
  {
    title: "Gestionnaire de Bibliothèque",
    description:
      "Système complet de gestion pour bibliothèques universitaires avec interface admin et utilisateur",
    technologies: ["React", "Express", "PostgreSQL", "Material-UI"],
    image: RiBookShelfFill,
    color: "from-green-500 to-emerald-500",
    link: "#",
    github: "#",
    status: "Déployé",
    highlights: [
      "Gestion des emprunts",
      "Système de réservation",
      "Notifications automatiques",
      "Rapports statistiques",
    ],
  },
  {
    title: "Portfolio Interactif",
    description:
      "Portfolio moderne et responsive avec animations et design professionnel",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: FaBriefcase,
    color: "from-purple-500 to-pink-500",
    link: "#",
    github: "#",
    status: "En ligne",
    highlights: [
      "Design moderne",
      "Animations fluides",
      "100% responsive",
      "Performance optimisée",
    ],
  },
  {
    title: "API REST E-Commerce",
    description:
      "Backend complet pour application e-commerce avec authentification et paiement",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe"],
    image: TiShoppingCart,
    color: "from-orange-500 to-red-500",
    link: "#",
    github: "#",
    status: "API publique",
    highlights: [
      "Authentification JWT",
      "Paiement Stripe",
      "Documentation Swagger",
      "Tests unitaires",
    ],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Interface de visualisation de données avec graphiques interactifs et exports",
    technologies: ["React", "Chart.js", "D3.js", "Redux"],
    image: IoMdAnalytics,
    color: "from-cyan-500 to-blue-500",
    link: "#",
    github: "#",
    status: "Beta",
    highlights: [
      "Graphiques interactifs",
      "Exports PDF/Excel",
      "Filtres avancés",
      "Temps réel",
    ],
  },
  {
    title: "Chatbot Pédagogique",
    description:
      "Assistant virtuel pour aider les étudiants avec leurs questions de cours",
    technologies: ["Python", "NLP", "React", "WebSocket"],
    image: FaRobot,
    color: "from-indigo-500 to-purple-500",
    link: "#",
    github: "#",
    status: "Prototype",
    highlights: [
      "Traitement du langage naturel",
      "Réponses contextuelles",
      "Intégration chat en temps réel",
      "Base de connaissances",
    ],
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur en Informatique",
    school: "École Nationale d'Ingénieurs",
    location: "Tunis, Tunisie",
    period: "2013 - 2016",
    type: "Diplôme d'ingénieur",
    icon: FaGraduationCap,
    color: "from-blue-500 to-indigo-500",
    description:
      "Spécialisation en développement logiciel et systèmes d'information",
    highlights: [
      "Major de promotion",
      "Projet de fin d'études : Application e-learning",
      "Mention Très Bien",
      "Stage chez Microsoft Tunisie",
    ],
  },
  {
    degree: "Licence en Informatique",
    school: "Faculté des Sciences",
    location: "Tunis, Tunisie",
    period: "2010 - 2013",
    type: "Licence",
    icon: RiBookShelfFill,
    color: "from-green-500 to-emerald-500",
    description: "Formation fondamentale en informatique et mathématiques",
    highlights: [
      "Algorithmique avancée",
      "Programmation orientée objet",
      "Bases de données relationnelles",
      "Architecture des ordinateurs",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: FaCloud,
    color: "bg-orange-500",
    credentialId: "AWS-SAA-123456",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    icon: FaFile,
    color: "bg-blue-500",
    credentialId: "PSM-789012",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    icon: FaDatabase,
    color: "bg-green-500",
    credentialId: "MDB-345678",
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2021",
    icon: FaReact,
    color: "bg-cyan-500",
    credentialId: "UC-901234",
  },
];

export const formations = [
  { title: "Pédagogie universitaire", year: "2021", icon: FaChalkboardTeacher },
  { title: "Design Thinking", year: "2021", icon: GiThink },
  { title: "DevOps avec Docker & Kubernetes", year: "2020", icon: FaDocker },
  { title: "Machine Learning Basics", year: "2020", icon: FaRobot },
];
