import Home from "../pages/Home";
import Courses from "../pages/Courses";
import CoursePage from "../pages/CoursePage";
import QuizPage from "../pages/QuizPage";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/quiz/:courseId" element={<QuizPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
