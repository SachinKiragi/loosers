import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import GroupStudy from "./pages/GroupStudy";
import CourseDetail from "./pages/CourseDetail";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:courseId" element={<CourseDetail />} />
        <Route path="/learn/:courseId/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/elearning" element={<Learn />} />
        <Route path="/groupstudy" element={<GroupStudy />} />
        <Route path="/skills" element={<Learn />} />
        <Route path="/mentorship" element={<GroupStudy />} />
        <Route path="/entrepreneurship" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
