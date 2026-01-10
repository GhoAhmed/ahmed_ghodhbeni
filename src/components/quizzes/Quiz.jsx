import { useQuiz } from "../../hooks/useQuiz";
import Question from "./Question";
import Result from "./Result";

const Quiz = ({ quizData }) => {
  const {
    currentQuestion,
    currentIndex,
    totalQuestions,
    score,
    isFinished,
    answerQuestion,
    resetQuiz,
    userAnswers
  } = useQuiz(quizData.questions);

  if (!quizData) {
    return (
      <div className="card text-center">
        <p className="text-gray-600">Quiz introuvable</p>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {!isFinished ? (
        <>
          {/* Carte d'informations */}
          <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 center-flex text-white font-bold text-lg">
                  {currentIndex + 1}
                </div>
                <div>
                  <p className="text-sm text-gray-600">Question en cours</p>
                  <p className="font-semibold text-gray-900">
                    {currentIndex + 1} sur {totalQuestions}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-600">Score actuel</p>
                <p className="font-semibold text-gray-900 text-lg">
                  {score} / {currentIndex}
                </p>
              </div>
            </div>

            {/* Barre de progression */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Progression</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <Question 
            question={currentQuestion} 
            onAnswer={answerQuestion}
            questionNumber={currentIndex + 1}
          />

          {/* Indicateurs des questions */}
          <div className="card">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Navigation rapide :
            </p>
            <div className="flex flex-wrap gap-2">
              {quizData.questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-lg center-flex text-sm font-medium transition-all ${
                    idx === currentIndex
                      ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md"
                      : idx < currentIndex
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {idx < currentIndex ? "✓" : idx + 1}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Result 
          score={score} 
          total={totalQuestions} 
          onRestart={resetQuiz}
          questions={quizData.questions}
          userAnswers={userAnswers}
        />
      )}
    </div>
  );
};

export default Quiz;