import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import clientCourse from "../data/courses/client-side.json";
import serverCourse from "../data/courses/server-side.json";
import CourseDetails from "../components/courses/CourseDetails";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaBook, FaClock, FaLongArrowAltLeft, FaStar } from "react-icons/fa";
import Loading from "../components/layout/Loading";
import { RiBookShelfFill } from "react-icons/ri";
import CourseContent from "../components/courses/CourseContent";
import { HiUsers } from "react-icons/hi";

const coursesData = {
  "client-side": clientCourse,
  "server-side": serverCourse,
};

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const selectedCourse = coursesData[id];
    if (selectedCourse) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCourse(selectedCourse);
    }
  }, [id]);

  const handleChapterComplete = (chapterId) => {
    if (!completedChapters.includes(chapterId)) {
      setCompletedChapters([...completedChapters, chapterId]);
    }
  };

  const progress = course
    ? Math.round((completedChapters.length / course.chapters.length) * 100)
    : 0;

  if (!course) return <Loading />;

  const isFirst = activeChapter === 0;
  const isLast = activeChapter === course.chapters.length - 1;
  const currentChapter = course.chapters[activeChapter];
  const isCompleted = completedChapters.includes(currentChapter.id);

  return (
    <div className="min-h-screen pb-12 sm:pb-16">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-800 text-white py-8 sm:py-12 md:py-16">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-blue-400/30 rounded-full blur-3xl" />

        <div className="container-app relative z-10">
          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all hover:scale-105 text-sm border border-white/20 shadow-lg"
            >
              <FaLongArrowAltLeft className="text-white" />
              <span className="text-white font-medium hidden sm:inline">
                Retour aux cours
              </span>
              <span className="text-white font-medium sm:hidden">Retour</span>
            </Link>

            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg text-xs sm:text-sm font-semibold shadow-lg">
              {course.level}
            </span>
            <span className="px-3 py-1.5 bg-green-500/20 backdrop-blur-sm text-green-100 border border-green-400/30 rounded-lg text-xs sm:text-sm font-semibold shadow-lg">
              ✓ Actif
            </span>
          </div>

          <div className="max-w-4xl">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm mb-3 sm:mb-4 border border-amber-400/30 shadow-lg">
              <BiSolidPurchaseTag className="text-amber-300 text-base sm:text-lg" />
              <span className="text-amber-100 font-medium">
                {course.category}
              </span>
            </div>

            {/* Title & Description */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 leading-relaxed">
              {course.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <FaBook className="text-blue-300 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-200">Chapitres</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {course.chapters.length}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <FaClock className="text-purple-300 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-200">Durée</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    4h
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <HiUsers className="text-green-300 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-200">Étudiants</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    250+
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <FaStar className="text-yellow-300 text-lg sm:text-xl flex-shrink-0" />
                <div>
                  <div className="text-xs text-blue-200">Note</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    4.8/5
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs sm:text-sm text-blue-200 mb-1">
                    Progression du cours
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {progress}%
                    </span>
                    {progress === 100 && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-semibold">
                        ✓ Terminé
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {completedChapters.length}
                    <span className="text-base sm:text-lg text-blue-200">
                      /{course.chapters.length}
                    </span>
                  </div>
                  <div className="text-xs text-blue-200">chapitres</div>
                </div>
              </div>

              <div className="relative">
                <div className="h-3 sm:h-4 bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </div>
                </div>
                {progress > 0 && (
                  <div
                    className="absolute top-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                    style={{
                      left: `${progress}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                )}
              </div>

              <div className="mt-3 text-xs sm:text-sm text-blue-100 text-center">
                {progress === 0 && "🚀 Commencez votre apprentissage !"}
                {progress > 0 &&
                  progress < 30 &&
                  "💪 Bon début ! Continuez comme ça"}
                {progress >= 30 && progress < 70 && "🔥 Excellent progrès !"}
                {progress >= 70 && progress < 100 && "⭐ Vous y êtes presque !"}
                {progress === 100 && "🎉 Félicitations ! Cours terminé"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container-app mt-6 sm:mt-8">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="lg:hidden w-full mb-4 btn btn-secondary justify-center"
        >
          <RiBookShelfFill className="h-5 w-5" />
          <span>{showSidebar ? "Masquer" : "Afficher"} les chapitres</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div
            className={`lg:col-span-1 ${showSidebar ? "block" : "hidden lg:block"}`}
          >
            <div className="card lg:sticky lg:top-24">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <RiBookShelfFill className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                <span>Chapitres</span>
              </h3>

              <nav className="space-y-2 max-h-[60vh] overflow-y-auto">
                {course.chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setActiveChapter(index);
                      setShowSidebar(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-xl transition-all ${
                      activeChapter === index
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg center-flex flex-shrink-0 text-sm ${
                          completedChapters.includes(chapter.id)
                            ? "bg-green-500 text-white"
                            : activeChapter === index
                              ? "bg-white/20"
                              : "bg-white"
                        }`}
                      >
                        {completedChapters.includes(chapter.id) ? (
                          <span>✓</span>
                        ) : (
                          <span
                            className={
                              activeChapter === index
                                ? "text-white"
                                : "text-gray-600"
                            }
                          >
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-medium line-clamp-2">
                        {chapter.title}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <Link
                  to={`/quiz/${course.id}`}
                  className="btn btn-primary w-full justify-center"
                >
                  <span>🎯</span>
                  <span>Passer le quiz</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <CourseDetails course={course} />

            <div className="card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Chapitre {activeChapter + 1} : {currentChapter.title}
                </h2>
                {isCompleted && (
                  <span className="badge badge-success self-start sm:self-auto">
                    <span>✓</span>
                    <span>Complété</span>
                  </span>
                )}
              </div>

              <CourseContent content={currentChapter.content} />

              {/* Navigation - MOBILE */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 sm:hidden">
                <div className="space-y-3">
                  {/* Marquer comme lu - Priorité 1 */}
                  <button
                    onClick={() => handleChapterComplete(currentChapter.id)}
                    disabled={isCompleted}
                    className={`w-full btn justify-center py-3.5 ${
                      isCompleted
                        ? "bg-green-100 text-green-700 border-2 border-green-300 cursor-not-allowed"
                        : "btn-primary"
                    }`}
                  >
                    <span className="text-lg">{isCompleted ? "✓" : "📖"}</span>
                    <span className="font-semibold">
                      {isCompleted ? "Chapitre complété" : "Marquer comme lu"}
                    </span>
                  </button>

                  {/* Navigation Prev/Next */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        setActiveChapter(Math.max(0, activeChapter - 1))
                      }
                      disabled={isFirst}
                      className="btn btn-secondary disabled:opacity-50 justify-center py-3"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span>Précédent</span>
                    </button>

                    <button
                      onClick={() =>
                        setActiveChapter(
                          Math.min(
                            course.chapters.length - 1,
                            activeChapter + 1,
                          ),
                        )
                      }
                      disabled={isLast}
                      className="btn btn-secondary disabled:opacity-50 justify-center py-3"
                    >
                      <span>Suivant</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Progress indicator */}
                  <div className="text-center text-sm text-gray-500 pt-1">
                    Chapitre {activeChapter + 1} sur {course.chapters.length}
                  </div>
                </div>
              </div>

              {/* Navigation - DESKTOP */}
              <div className="hidden sm:flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() =>
                    setActiveChapter(Math.max(0, activeChapter - 1))
                  }
                  disabled={isFirst}
                  className="btn btn-secondary disabled:opacity-50 min-w-[140px] justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Précédent</span>
                </button>

                <button
                  onClick={() => handleChapterComplete(currentChapter.id)}
                  disabled={isCompleted}
                  className={`flex-1 btn max-w-xs justify-center ${
                    isCompleted
                      ? "bg-green-100 text-green-700 border-2 border-green-300 cursor-not-allowed"
                      : "btn-primary"
                  }`}
                >
                  <span>{isCompleted ? "✓" : "📖"}</span>
                  <span>{isCompleted ? "Complété" : "Marquer comme lu"}</span>
                </button>

                <button
                  onClick={() =>
                    setActiveChapter(
                      Math.min(course.chapters.length - 1, activeChapter + 1),
                    )
                  }
                  disabled={isLast}
                  className="btn btn-secondary disabled:opacity-50 min-w-[140px] justify-center"
                >
                  <span>Suivant</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Congratulations */}
            {completedChapters.length === course.chapters.length && (
              <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="text-4xl sm:text-6xl">🎉</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Félicitations !
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 px-4">
                    Vous avez terminé tous les chapitres de ce cours. Il est
                    temps de tester vos connaissances !
                  </p>
                  <Link
                    to={`/quiz/${course.id}`}
                    className="btn btn-primary btn-lg inline-flex"
                  >
                    <span>🎯</span>
                    <span>Commencer le quiz final</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
