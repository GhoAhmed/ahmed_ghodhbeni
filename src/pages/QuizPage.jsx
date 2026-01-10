import { useParams, Link } from "react-router";
import PageContainer from "../components/layout/PageContainer";
import { useQuiz } from "../hooks/useQuiz";
import quizClient from "../data/quizzes/quiz-client-side.json";

const QuizPage = () => {
  const { courseId } = useParams();
  const quiz = courseId === quizClient.courseId ? quizClient : null;

  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    isFinished,
    answerQuestion,
    resetQuiz
  } = useQuiz(quiz ? quiz.questions : []);

  if (!quiz) return <PageContainer>Quiz introuvable</PageContainer>;

  return (
    <PageContainer>
      <h1 className="section-title">{quiz.title}</h1>

      {!isFinished ? (
        <div className="mt-6">
          <h2 className="font-semibold mb-4">{currentQuestion.question}</h2>
          <div className="flex flex-col gap-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => answerQuestion(idx)}
                className="btn btn-outline"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-gray-500">
            Question {currentIndex + 1} / {totalQuestions}
          </p>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold mb-4">Quiz terminé !</p>
          <p className="text-gray-600 mb-4">
            Votre score : {score} / {totalQuestions}
          </p>
          <button onClick={resetQuiz} className="btn btn-primary mr-2">
            Recommencer
          </button>
          <Link to={`/courses/${quiz.courseId}`} className="btn btn-secondary">
            Retour au cours
          </Link>
        </div>
      )}
    </PageContainer>
  );
};

export default QuizPage;
