// src/components/courses/CourseContentRenderer.jsx
import { useState } from "react";
import {
  FaPlay,
  FaLightbulb,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaVideo,
  FaClock,
  FaTable,
  FaBookOpen,
} from "react-icons/fa";
import { MdQuiz, MdTimeline } from "react-icons/md";

// ============================================================================
// 1. COMPOSANT CODE INTERACTIF - RESPONSIVE
// ============================================================================
const InteractiveCode = ({
  code,
  language,
  title,
  editable = true,
  showOutput = true,
}) => {
  const [currentCode, setCurrentCode] = useState(code);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    try {
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => logs.push(args.join(" "));

      // eslint-disable-next-line no-eval
      eval(currentCode);

      console.log = originalLog;
      setOutput(logs.join("\n") || "✓ Code exécuté avec succès");
    } catch (error) {
      setOutput(`❌ Erreur: ${error.message}`);
    }
    setTimeout(() => setIsRunning(false), 300);
  };

  return (
    <div className="my-4 sm:my-6 border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <FaCode className="text-blue-400 flex-shrink-0 text-sm sm:text-base" />
          <span className="text-gray-300 text-xs sm:text-sm font-semibold truncate">
            {title || language?.toUpperCase() || "CODE"}
          </span>
        </div>
        {editable && (
          <button
            onClick={runCode}
            disabled={isRunning}
            className="px-3 sm:px-4 py-1 sm:py-1.5 bg-green-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-1.5 sm:gap-2 disabled:opacity-50 flex-shrink-0"
          >
            <FaPlay className="text-xs" />
            <span className="hidden sm:inline">
              {isRunning ? "Exécution..." : "Exécuter"}
            </span>
            <span className="sm:hidden">▶</span>
          </button>
        )}
      </div>

      {editable ? (
        <textarea
          value={currentCode}
          onChange={(e) => setCurrentCode(e.target.value)}
          className="w-full p-3 sm:p-4 bg-gray-900 text-gray-100 font-mono text-xs sm:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={Math.max(5, Math.min(currentCode.split("\n").length, 15))}
          spellCheck={false}
        />
      ) : (
        <pre className="p-3 sm:p-4 bg-gray-900 text-gray-100 overflow-x-auto">
          <code className="font-mono text-xs sm:text-sm">{code}</code>
        </pre>
      )}

      {showOutput && output && (
        <div className="bg-black text-green-400 p-3 sm:p-4 font-mono text-xs sm:text-sm border-t-2 border-gray-800">
          <div className="text-gray-400 mb-1 font-semibold">Output:</div>
          <div className="whitespace-pre-wrap break-words">{output}</div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. COMPOSANT QUIZ INTERACTIF - RESPONSIVE
// ============================================================================
const InlineQuiz = ({ question, options, correctAnswer, explanation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="my-4 sm:my-6 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
      <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
        <MdQuiz className="text-2xl sm:text-3xl text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1" />
        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
          {question}
        </h4>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === correctAnswer;
          const showAsCorrect = selectedAnswer !== null && isCorrectOption;
          const showAsWrong = isSelected && !isCorrectOption;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all font-medium text-sm sm:text-base ${
                selectedAnswer === null
                  ? "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 active:scale-[0.98]"
                  : showAsCorrect
                    ? "border-green-500 bg-green-50"
                    : showAsWrong
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 bg-gray-50"
              } disabled:cursor-not-allowed`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm ${
                    showAsCorrect
                      ? "border-green-500 bg-green-500 text-white"
                      : showAsWrong
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-gray-400"
                  }`}
                >
                  {showAsCorrect ? (
                    <FaCheckCircle />
                  ) : showAsWrong ? (
                    <FaTimesCircle />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div
          className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg border-2 ${
            isCorrect
              ? "bg-green-50 border-green-300"
              : "bg-yellow-50 border-yellow-300"
          }`}
        >
          <p className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
            {isCorrect ? (
              <>
                <FaCheckCircle className="text-green-600 flex-shrink-0" />
                <span className="text-green-800">
                  Excellent ! Bonne réponse
                </span>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-yellow-600 flex-shrink-0" />
                <span className="text-yellow-800">Pas tout à fait...</span>
              </>
            )}
          </p>
          {explanation && (
            <p className="text-xs sm:text-sm text-gray-700">{explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 3. COMPOSANT CALLOUT - RESPONSIVE
// ============================================================================
const Callout = ({ variant = "info", title, content, icon }) => {
  const variants = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-900",
      icon: icon || "💡",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-900",
      icon: icon || "⚠️",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-900",
      icon: icon || "✓",
    },
    danger: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-900",
      icon: icon || "⚡",
    },
    tip: {
      bg: "bg-purple-50",
      border: "border-purple-500",
      text: "text-purple-900",
      icon: icon || "💡",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`my-4 sm:my-6 p-3 sm:p-4 border-l-4 rounded-r-lg ${style.bg} ${style.border}`}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl flex-shrink-0">{style.icon}</span>
        <div className="flex-1 min-w-0">
          {title && (
            <div
              className={`font-bold mb-1 sm:mb-2 ${style.text} text-sm sm:text-base`}
            >
              {title}
            </div>
          )}
          <div className={`${style.text} text-sm sm:text-base`}>{content}</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. COMPOSANT TABLE - RESPONSIVE
// ============================================================================
const DataTable = ({ headers, rows }) => {
  return (
    <div className="my-4 sm:my-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold text-white uppercase tracking-wider whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ============================================================================
// 5. COMPOSANT TIMELINE - RESPONSIVE
// ============================================================================
const Timeline = ({ items }) => {
  return (
    <div className="my-4 sm:my-6 space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
              {index + 1}
            </div>
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300 my-1"></div>
            )}
          </div>
          <div className="flex-1 pb-6 sm:pb-8">
            <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
              {item.title}
            </h4>
            <p className="text-gray-700 text-xs sm:text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================================
// 6. COMPOSANT ACTIVITY (TD/TP) - RESPONSIVE
// ============================================================================
const Activity = ({ title, instructions, expectedOutput, duration }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-4 sm:my-6 border-2 border-orange-200 rounded-xl overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 sm:px-4 py-2.5 sm:py-3 text-white">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <FaBookOpen className="text-base sm:text-xl flex-shrink-0" />
            <h4 className="font-bold text-base sm:text-lg truncate">{title}</h4>
          </div>
          {duration && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex-shrink-0">
              <FaClock />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6 bg-white">
        <div className="mb-3 sm:mb-4">
          <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
            📋 Consignes :
          </h5>
          <p className="text-gray-700 text-sm sm:text-base">{instructions}</p>
        </div>

        {expectedOutput && expectedOutput.length > 0 && (
          <div className="mt-3 sm:mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
            >
              <span>{isExpanded ? "▼" : "▶"}</span>
              <span>Livrables attendus</span>
            </button>

            {isExpanded && (
              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                {expectedOutput.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                  >
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 7. COMPOSANT EXERCICE - RESPONSIVE
// ============================================================================
const Exercise = ({
  title,
  instructions,
  starterCode,
  solution,
  hints,
  criteria,
}) => {
  const [code, setCode] = useState(starterCode || "");
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const logs = [];
      const originalLog = console.log;
      console.log = (...args) => logs.push(args.join(" "));

      // eslint-disable-next-line no-eval
      eval(code);

      console.log = originalLog;
      setOutput(logs.join("\n") || "✓ Code exécuté");
    } catch (error) {
      setOutput(`❌ ${error.message}`);
    }
  };

  return (
    <div className="my-4 sm:my-6 border-2 border-purple-200 rounded-xl overflow-hidden bg-purple-50">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 sm:px-4 py-2.5 sm:py-3 text-white">
        <h4 className="font-bold text-base sm:text-lg flex items-center gap-2 mb-1">
          <FaLightbulb className="flex-shrink-0" />
          <span className="truncate">{title}</span>
        </h4>
        <p className="text-xs sm:text-sm text-purple-100">{instructions}</p>
      </div>

      <div className="p-3 sm:p-4 bg-white">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2.5 sm:p-3 bg-gray-900 text-gray-100 font-mono text-xs sm:text-sm rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
          rows={10}
          spellCheck={false}
          placeholder="// Écrivez votre code ici..."
        />

        <div className="flex gap-2 mt-3 flex-wrap">
          <button
            onClick={runCode}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
          >
            <FaPlay className="text-xs" />
            Tester
          </button>

          {hints && hints.length > 0 && (
            <button
              onClick={() => setShowHints(!showHints)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-xs sm:text-sm"
            >
              {showHints ? "Masquer" : "Voir"} les indices
            </button>
          )}

          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 text-xs sm:text-sm"
            >
              {showSolution ? "Masquer" : "Voir"} la solution
            </button>
          )}
        </div>

        {output && (
          <div className="mt-3 p-2.5 sm:p-3 bg-black text-green-400 rounded-lg font-mono text-xs sm:text-sm">
            <div className="text-gray-400 mb-1">Output:</div>
            <div className="break-words">{output}</div>
          </div>
        )}

        {criteria && criteria.length > 0 && (
          <div className="mt-3 p-2.5 sm:p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
              ✅ Critères de validation :
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-blue-800">
              {criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {showHints && hints && (
          <div className="mt-3 p-2.5 sm:p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="font-bold text-blue-900 mb-2 text-sm sm:text-base">
              💡 Indices :
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-blue-800">
              {hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          </div>
        )}

        {showSolution && solution && (
          <div className="mt-3 p-2.5 sm:p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="font-bold text-green-900 mb-2 text-sm sm:text-base">
              ✓ Solution :
            </div>
            <pre className="bg-gray-900 text-gray-100 p-2.5 sm:p-3 rounded-lg overflow-x-auto">
              <code className="font-mono text-xs sm:text-sm">{solution}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 8. COMPOSANT PRINCIPAL - RENDERER
// ============================================================================
const CourseContentRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return (
      <div className="text-gray-500 text-sm sm:text-base">
        Aucun contenu disponible
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {content.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed text-sm sm:text-base"
              >
                {block.value}
              </p>
            );

          case "heading":
            return (
              <h3
                key={index}
                className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 flex items-center gap-2"
              >
                <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded flex-shrink-0"></span>
                <span className="break-words">{block.value}</span>
              </h3>
            );

          case "list":
            return (
              <div key={index}>
                {block.title && (
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    {block.title}
                  </h4>
                )}
                <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-gray-700 ml-3 sm:ml-4">
                  {block.items?.map((item, i) => (
                    <li
                      key={i}
                      className="leading-relaxed text-sm sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "code":
            return (
              <InteractiveCode
                key={index}
                code={block.code || block.value}
                language={block.language}
                title={block.title}
                editable={block.editable !== false}
                showOutput={block.showOutput !== false}
              />
            );

          case "quiz":
            return (
              <InlineQuiz
                key={index}
                question={block.question}
                options={block.options}
                correctAnswer={block.correctAnswer}
                explanation={block.explanation}
              />
            );

          case "callout":
            return (
              <Callout
                key={index}
                variant={block.variant || "info"}
                title={block.title}
                content={block.content}
                icon={block.icon}
              />
            );

          case "table":
            return (
              <DataTable
                key={index}
                headers={block.headers}
                rows={block.rows}
              />
            );

          case "timeline":
            return <Timeline key={index} items={block.items} />;

          case "activity":
            return (
              <Activity
                key={index}
                title={block.title}
                instructions={block.instructions}
                expectedOutput={block.expectedOutput}
                duration={block.duration}
              />
            );

          case "exercise":
            return (
              <Exercise
                key={index}
                title={block.title}
                instructions={block.instructions}
                starterCode={block.starterCode}
                solution={block.solution}
                hints={block.hints}
                criteria={block.criteria}
              />
            );

          case "video":
            return (
              <div key={index} className="my-4 sm:my-6">
                {block.title && (
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <FaVideo className="text-red-500 flex-shrink-0" />
                    <span>{block.title}</span>
                  </h4>
                )}
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 shadow-lg">
                  <iframe
                    src={block.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {block.description && (
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    {block.description}
                  </p>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default CourseContentRenderer;
