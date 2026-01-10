import { useState } from "react";

export function useQuiz(questions = []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const answerQuestion = (selectedOption) => {
    const isCorrect = selectedOption === currentQuestion.answer;

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOption,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  };

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: questions.length,
    score,
    answers,
    isFinished,
    answerQuestion,
    resetQuiz,
  };
}
