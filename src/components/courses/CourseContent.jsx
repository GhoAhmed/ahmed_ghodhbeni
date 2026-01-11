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
import { BiCodeBlock } from "react-icons/bi";

// ============================================================================
// 1. COMPOSANT CODE INTERACTIF
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
    <div className="my-6 border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaCode className="text-blue-400" />
          <span className="text-gray-300 text-sm font-semibold">
            {title || language?.toUpperCase() || "CODE"}
          </span>
        </div>
        {editable && (
          <button
            onClick={runCode}
            disabled={isRunning}
            className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <FaPlay className="text-xs" />
            {isRunning ? "Exécution..." : "Exécuter"}
          </button>
        )}
      </div>

      {editable ? (
        <textarea
          value={currentCode}
          onChange={(e) => setCurrentCode(e.target.value)}
          className="w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={Math.max(5, currentCode.split("\n").length)}
          spellCheck={false}
        />
      ) : (
        <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto">
          <code className="font-mono text-sm">{code}</code>
        </pre>
      )}

      {showOutput && output && (
        <div className="bg-black text-green-400 p-4 font-mono text-sm border-t-2 border-gray-800">
          <div className="text-gray-400 mb-1 font-semibold">Output:</div>
          <div className="whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. COMPOSANT QUIZ INTERACTIF
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
    <div className="my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
      <div className="flex items-start gap-3 mb-4">
        <MdQuiz className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
        <h4 className="font-bold text-gray-900 text-lg">{question}</h4>
      </div>

      <div className="space-y-3">
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
              className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium ${
                selectedAnswer === null
                  ? "border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50"
                  : showAsCorrect
                  ? "border-green-500 bg-green-50"
                  : showAsWrong
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200 bg-gray-50"
              } disabled:cursor-not-allowed`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
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
          className={`mt-4 p-4 rounded-lg border-2 ${
            isCorrect
              ? "bg-green-50 border-green-300"
              : "bg-yellow-50 border-yellow-300"
          }`}
        >
          <p className="font-semibold mb-2 flex items-center gap-2">
            {isCorrect ? (
              <>
                <FaCheckCircle className="text-green-600" />
                <span className="text-green-800">
                  Excellent ! Bonne réponse
                </span>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-yellow-600" />
                <span className="text-yellow-800">Pas tout à fait...</span>
              </>
            )}
          </p>
          {explanation && (
            <p className="text-sm text-gray-700">{explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 3. COMPOSANT CALLOUT
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
      className={`my-6 p-4 border-l-4 rounded-r-lg ${style.bg} ${style.border}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{style.icon}</span>
        <div className="flex-1">
          {title && (
            <div className={`font-bold mb-2 ${style.text}`}>{title}</div>
          )}
          <div className={style.text}>{content}</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. COMPOSANT TABLE
// ============================================================================
const DataTable = ({ headers, rows }) => {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider"
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
                <td key={j} className="px-6 py-4 text-sm text-gray-700">
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
// 5. COMPOSANT TIMELINE
// ============================================================================
const Timeline = ({ items }) => {
  return (
    <div className="my-6 space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              {index + 1}
            </div>
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300 my-1"></div>
            )}
          </div>
          <div className="flex-1 pb-8">
            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================================
// 6. COMPOSANT ACTIVITY (TD/TP)
// ============================================================================
const Activity = ({ title, instructions, expectedOutput, duration }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-6 border-2 border-orange-200 rounded-xl overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaBookOpen className="text-xl" />
            <h4 className="font-bold text-lg">{title}</h4>
          </div>
          {duration && (
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
              <FaClock />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="mb-4">
          <h5 className="font-semibold text-gray-900 mb-2">📋 Consignes :</h5>
          <p className="text-gray-700">{instructions}</p>
        </div>

        {expectedOutput && expectedOutput.length > 0 && (
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>{isExpanded ? "▼" : "▶"}</span>
              <span>Livrables attendus</span>
            </button>

            {isExpanded && (
              <ul className="mt-3 space-y-2">
                {expectedOutput.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
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
// 7. COMPOSANT EXERCICE
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
    <div className="my-6 border-2 border-purple-200 rounded-xl overflow-hidden bg-purple-50">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 text-white">
        <h4 className="font-bold text-lg flex items-center gap-2">
          <FaLightbulb />
          {title}
        </h4>
        <p className="text-sm text-purple-100 mt-1">{instructions}</p>
      </div>

      <div className="p-4 bg-white">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-3 bg-gray-900 text-gray-100 font-mono text-sm rounded-lg resize-none focus:ring-2 focus:ring-purple-500"
          rows={10}
          spellCheck={false}
          placeholder="// Écrivez votre code ici..."
        />

        <div className="flex gap-2 mt-3 flex-wrap">
          <button
            onClick={runCode}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 flex items-center gap-2"
          >
            <FaPlay className="text-xs" />
            Tester
          </button>

          {hints && hints.length > 0 && (
            <button
              onClick={() => setShowHints(!showHints)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              {showHints ? "Masquer" : "Voir"} les indices
            </button>
          )}

          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700"
            >
              {showSolution ? "Masquer" : "Voir"} la solution
            </button>
          )}
        </div>

        {output && (
          <div className="mt-3 p-3 bg-black text-green-400 rounded-lg font-mono text-sm">
            <div className="text-gray-400 mb-1">Output:</div>
            {output}
          </div>
        )}

        {criteria && criteria.length > 0 && (
          <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="font-bold text-blue-900 mb-2">
              ✅ Critères de validation :
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              {criteria.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {showHints && hints && (
          <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <div className="font-bold text-blue-900 mb-2">💡 Indices :</div>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
              {hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ul>
          </div>
        )}

        {showSolution && solution && (
          <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
            <div className="font-bold text-green-900 mb-2">✓ Solution :</div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">{solution}</code>
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
    return <div className="text-gray-500">Aucun contenu disponible</div>;
  }

  return (
    <div className="space-y-4">
      {content.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed text-base"
              >
                {block.value}
              </p>
            );

          case "heading":
            return (
              <h3
                key={index}
                className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2"
              >
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded"></span>
                {block.value}
              </h3>
            );

          case "list":
            return (
              <div key={index}>
                {block.title && (
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {block.title}
                  </h4>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  {block.items?.map((item, i) => (
                    <li key={i} className="leading-relaxed">
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
              <div key={index} className="my-6">
                {block.title && (
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaVideo className="text-red-500" />
                    {block.title}
                  </h4>
                )}
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                  <iframe
                    src={block.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {block.description && (
                  <p className="mt-2 text-sm text-gray-600">
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
