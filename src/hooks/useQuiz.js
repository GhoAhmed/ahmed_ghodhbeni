import { useState } from "react";

export const useQuiz = (questions) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const answerQuestion = (selectedAnswer) => {
    // Sauvegarder la réponse de l'utilisateur
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    // Vérifier si la réponse est correcte
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    // Passer à la question suivante ou terminer
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    isFinished,
    userAnswers,
    answerQuestion,
    resetQuiz,
  };
};
