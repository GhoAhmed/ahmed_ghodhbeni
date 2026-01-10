import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import clientCourse from "../data/courses/client-side.json";
import CourseDetails from "../components/courses/CourseDetails";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Loading from "../components/layout/Loading";
import { RiBookShelfFill } from "react-icons/ri";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);

  useEffect(() => {
    if (id === clientCourse.id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCourse(clientCourse);
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

  if (!course) {
    return <Loading />;
  }

  return (
    <div className="pb-16">
      {/* En-tête du cours */}
      <section className="bg-gradient-to-br from-blue-400 to-indigo-800 text-white py-12 md:py-16">
        <div className="container-app">
          <div className="flex items-start gap-4 mb-6">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              <FaLongArrowAltLeft />
              <span className="text-blue-200">Retour aux cours</span>
            </Link>
            <span className="badge bg-white/20 text-white border-white/30">
              {course.level}
            </span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
              <BiSolidPurchaseTag className="text-amber-300" />
              <span>{course.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-200">
              {course.title}
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-6">
              {course.description}
            </p>

            {/* Barre de progression */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progression du cours</span>
                <span className="font-semibold">{progress}%</span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-100">
                {completedChapters.length} sur {course.chapters.length}{" "}
                chapitres complétés
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-app mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Navigation des chapitres */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <RiBookShelfFill className="h-8 w-8 text-blue-400" />
                <span>Chapitres</span>
              </h3>

              <nav className="space-y-2">
                {course.chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapter(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      activeChapter === index
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg center-flex flex-shrink-0 ${
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
                      <span className="text-sm font-medium line-clamp-2">
                        {chapter.title}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Bouton Quiz */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  to={`/quiz/${course.id}`}
                  className="btn btn-primary w-full"
                >
                  <span>🎯</span>
                  <span>Passer le quiz</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Détails du cours */}
            <CourseDetails course={course} />

            {/* Chapitre actif */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Chapitre {activeChapter + 1} :{" "}
                  {course.chapters[activeChapter].title}
                </h2>
                {completedChapters.includes(
                  course.chapters[activeChapter].id
                ) && (
                  <span className="badge badge-success">
                    <span>✓</span>
                    <span>Complété</span>
                  </span>
                )}
              </div>

              <div className="prose prose-blue max-w-none space-y-4">
                {course.chapters[activeChapter].content.map((block, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {block.value}
                  </p>
                ))}
              </div>

              {/* Navigation entre chapitres */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() =>
                    setActiveChapter(Math.max(0, activeChapter - 1))
                  }
                  disabled={activeChapter === 0}
                  className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>←</span>
                  <span>Précédent</span>
                </button>

                <button
                  onClick={() =>
                    handleChapterComplete(course.chapters[activeChapter].id)
                  }
                  disabled={completedChapters.includes(
                    course.chapters[activeChapter].id
                  )}
                  className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {completedChapters.includes(
                    course.chapters[activeChapter].id
                  ) ? (
                    <>
                      <span>✓</span>
                      <span>Complété</span>
                    </>
                  ) : (
                    <>
                      <span>Marquer comme lu</span>
                      <span>✓</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() =>
                    setActiveChapter(
                      Math.min(course.chapters.length - 1, activeChapter + 1)
                    )
                  }
                  disabled={activeChapter === course.chapters.length - 1}
                  className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Suivant</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Message de félicitations si tous les chapitres sont complétés */}
            {completedChapters.length === course.chapters.length && (
              <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Félicitations !
                  </h3>
                  <p className="text-gray-700">
                    Vous avez terminé tous les chapitres de ce cours. Il est
                    temps de tester vos connaissances !
                  </p>
                  <Link
                    to={`/quiz/${course.id}`}
                    className="btn btn-primary btn-lg"
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
