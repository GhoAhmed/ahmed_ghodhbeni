import { useState } from "react";

const Question = ({ question, onAnswer, questionNumber }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (idx) => {
    setSelectedAnswer(idx);
    setShowFeedback(true);

    // Attendre un peu avant de passer à la question suivante
    setTimeout(() => {
      onAnswer(idx);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1500);
  };

  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="card">
      {/* En-tête de la question */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 center-flex text-white font-bold flex-shrink-0">
          {questionNumber}
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
            {question.question}
          </h2>
        </div>
      </div>

      {/* Options de réponse */}
      <div className="space-y-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedAnswer === idx;
          const isCorrectAnswer = idx === question.answer;
          
          let buttonClasses = "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 font-medium ";
          
          if (showFeedback) {
            if (isSelected) {
              if (isCorrect) {
                buttonClasses += "bg-green-50 border-green-500 text-green-900";
              } else {
                buttonClasses += "bg-red-50 border-red-500 text-red-900";
              }
            } else if (isCorrectAnswer) {
              buttonClasses += "bg-green-50 border-green-500 text-green-900";
            } else {
              buttonClasses += "border-gray-200 text-gray-400 opacity-50";
            }
          } else {
            buttonClasses += "border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-900 active:scale-[0.98]";
          }

          return (
            <button
              key={idx}
              onClick={() => !showFeedback && handleAnswerClick(idx)}
              disabled={showFeedback}
              className={buttonClasses}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-lg center-flex flex-shrink-0 font-bold text-sm ${
                  showFeedback && isSelected
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : showFeedback && isCorrectAnswer
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="flex-1">{option}</span>
                {showFeedback && isSelected && (
                  <span className="text-2xl">
                    {isCorrect ? "✓" : "✗"}
                  </span>
                )}
                {showFeedback && !isSelected && isCorrectAnswer && (
                  <span className="text-2xl">✓</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback avec explication */}
      {showFeedback && question.explanation && (
        <div className={`mt-6 p-4 rounded-xl border-2 animate-fadeIn ${
          isCorrect
            ? "bg-green-50 border-green-200"
            : "bg-blue-50 border-blue-200"
        }`}>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">
              {isCorrect ? "🎉" : "💡"}
            </span>
            <div>
              <p className={`font-semibold mb-1 ${
                isCorrect ? "text-green-900" : "text-blue-900"
              }`}>
                {isCorrect ? "Bonne réponse !" : "Explication"}
              </p>
              <p className={isCorrect ? "text-green-800" : "text-blue-800"}>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Message d'encouragement */}
      {showFeedback && !isCorrect && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 text-center">
            💪 Ne vous découragez pas ! Chaque erreur est une opportunité d'apprentissage.
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;