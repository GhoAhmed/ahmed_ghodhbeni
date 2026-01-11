import { useParams, Link } from "react-router-dom";
import Quiz from "../components/quizzes/Quiz";
import { getQuizByCourseId } from "../hooks/quizLoader";

const QuizPage = () => {
  const { courseId } = useParams();

  // Charger le quiz correspondant au courseId
  const quizData = getQuizByCourseId(courseId);

  if (!quizData) {
    return (
      <div className="container-app py-16">
        <div className="card text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quiz introuvable
          </h2>
          <p className="text-gray-600 mb-6">
            Le quiz pour ce cours n'est pas encore disponible.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to={`/courses/${courseId}`} className="btn btn-secondary">
              <span>←</span>
              <span>Retour au cours</span>
            </Link>
            <Link to="/courses" className="btn btn-primary">
              <span>📚</span>
              <span>Voir tous les cours</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      {/* En-tête du Quiz */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-12 md:py-16">
        <div className="container-app">
          <div className="flex items-start gap-4 mb-6">
            <Link
              to={`/courses/${courseId}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              <span>←</span>
              <span>Retour au cours</span>
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
              <span>🎯</span>
              <span>Quiz Interactif</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {quizData.title}
            </h1>

            <p className="text-lg md:text-xl text-purple-100">
              Testez vos connaissances avec {quizData.questions.length}{" "}
              questions
            </p>
          </div>
        </div>
      </section>

      {/* Composant Quiz */}
      <div className="container-app mt-8">
        <div className="max-w-4xl mx-auto">
          <Quiz quizData={quizData} />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
