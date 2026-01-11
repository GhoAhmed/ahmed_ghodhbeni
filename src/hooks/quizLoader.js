// utils/quizLoader.js
// Centralisation du chargement des quiz

import quizClient from "../data/quizzes/quiz-client-side.json";
import quizServer from "../data/quizzes/quiz-server-side.json";

/**
 * Dictionnaire de tous les quiz disponibles
 * Les clés DOIVENT correspondre aux courseId
 */
export const quizzesData = {
  "client-side": quizClient,
  "server-side": quizServer,
  // Ajoutez ici les autres quiz au fur et à mesure
  // "algorithmique-structures-donnees": quizAlgo,
  // "developpement-mobile-natif": quizMobileNatif,
  // etc.
};

/**
 * Récupère un quiz par le courseId
 * @param {string} courseId - L'ID du cours
 * @returns {Object|null} - Les données du quiz ou null si non trouvé
 */
export const getQuizByCourseId = (courseId) => {
  return quizzesData[courseId] || null;
};

/**
 * Vérifie si un quiz existe pour un cours
 * @param {string} courseId - L'ID du cours
 * @returns {boolean}
 */
export const quizExists = (courseId) => {
  return courseId in quizzesData;
};

/**
 * Récupère tous les courseIds ayant un quiz
 * @returns {string[]}
 */
export const getAvailableQuizIds = () => {
  return Object.keys(quizzesData);
};
