import { Link } from "react-router";

const Result = ({ score, total, onRestart, questions, userAnswers }) => {
  const percentage = Math.round((score / total) * 100);
  
  // Déterminer le niveau de réussite
  const getResultLevel = () => {
    if (percentage >= 90) return {
      icon: "🏆",
      title: "Excellent !",
      message: "Vous maîtrisez parfaitement ce sujet !",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    };
    if (percentage >= 70) return {
      icon: "🎉",
      title: "Très bien !",
      message: "Vous avez de solides connaissances.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    };
    if (percentage >= 50) return {
      icon: "👍",
      title: "Bien !",
      message: "C'est un bon début, continuez vos efforts !",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    };
    return {
      icon: "💪",
      title: "Continuez !",
      message: "Révisez le cours et réessayez, vous allez y arriver !",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    };
  };

  const result = getResultLevel();

  return (
    <div className="space-y-6">
      {/* Carte de résultat principal */}
      <div className={`card bg-gradient-to-br ${result.bgColor} border-2`}>
        <div className="text-center space-y-6">
          {/* Icône et titre */}
          <div>
            <div className="text-8xl mb-4 animate-fadeIn">{result.icon}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {result.title}
            </h2>
            <p className="text-lg text-gray-700">
              {result.message}
            </p>
          </div>

          {/* Score */}
          <div className="py-8">
            <div className={`inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br ${result.color} text-white shadow-2xl`}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-1">{percentage}%</div>
                <div className="text-sm opacity-90">{score}/{total}</div>
              </div>
            </div>
          </div>

          {/* Barre de progression circulaire textuelle */}
          <div className="max-w-md mx-auto">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Statistiques détaillées */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center p-4 bg-white/80 rounded-xl">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Correctes</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl">
              <div className="text-2xl font-bold text-red-600">{total - score}</div>
              <div className="text-sm text-gray-600">Incorrectes</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl">
              <div className="text-2xl font-bold text-blue-600">{total}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onRestart}
              className="btn btn-primary btn-lg"
            >
              <span>🔄</span>
              <span>Recommencer le quiz</span>
            </button>
            <Link
              to="/courses"
              className="btn btn-secondary btn-lg"
            >
              <span>📚</span>
              <span>Retour aux cours</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Révision des réponses */}
      <div className="card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 center-flex text-2xl">
            📝
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Révision des réponses</h3>
            <p className="text-sm text-gray-600">Détail de vos réponses question par question</p>
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((question, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = userAnswer === question.answer;

            return (
              <div 
                key={idx}
                className={`p-4 rounded-xl border-2 ${
                  isCorrect 
                    ? "bg-green-50 border-green-200" 
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg center-flex flex-shrink-0 font-bold ${
                    isCorrect 
                      ? "bg-green-500 text-white" 
                      : "bg-red-500 text-white"
                  }`}>
                    {isCorrect ? "✓" : "✗"}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Question {idx + 1} : {question.question}
                    </h4>
                    
                    <div className="space-y-2 text-sm">
                      <p className={isCorrect ? "text-green-800" : "text-red-800"}>
                        <span className="font-medium">Votre réponse : </span>
                        {question.options[userAnswer]}
                      </p>
                      
                      {!isCorrect && (
                        <p className="text-green-800">
                          <span className="font-medium">Bonne réponse : </span>
                          {question.options[question.answer]}
                        </p>
                      )}
                      
                      {question.explanation && (
                        <p className="text-gray-700 mt-2 pt-2 border-t border-gray-300">
                          <span className="font-medium">💡 Explication : </span>
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Suggestions */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Que faire maintenant ?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {percentage < 70 && (
              <div className="p-4 bg-white rounded-xl">
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-semibold mb-1">Réviser le cours</h4>
                <p className="text-sm text-gray-600">
                  Relisez les chapitres pour mieux comprendre
                </p>
              </div>
            )}
            
            <div className="p-4 bg-white rounded-xl">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold mb-1">Refaire le quiz</h4>
              <p className="text-sm text-gray-600">
                Testez à nouveau vos connaissances
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-xl">
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold mb-1">Autres cours</h4>
              <p className="text-sm text-gray-600">
                Explorez d'autres sujets intéressants
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;