import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBook, FaBrain, FaUserTie, FaUsers, FaBriefcase, FaMedal, FaDownload, FaComments } from 'react-icons/fa';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  const modules = [
    {
      icon: <FaBook />,
      title: "Localized E-Learning",
      description: "Access educational content tailored to your local context and needs.",
      link: "/elearning"
    },
    {
      icon: <FaBrain />,
      title: "Skill-Building",
      description: "Develop practical skills through interactive courses and workshops.",
      link: "/skills"
    },
    {
      icon: <FaUserTie />,
      title: "Mentorship",
      description: "Connect with experienced mentors who will guide your journey.",
      link: "/mentorship"
    },
    {
      icon: <FaUsers />,
      title: "Group Study",
      description: "Learn together with peers in collaborative study sessions.",
      link: "/groupstudy"
    },
    {
      icon: <FaBriefcase />,
      title: "Micro-Entrepreneurship",
      description: "Learn business skills and start your own micro-enterprise.",
      link: "/entrepreneurship"
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1 className="dashboard-title">Welcome to Your Learning Journey</h1>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </header>

        <div className="module-grid">
          <Link to="/progress" className="module-card">
            <FaMedal className="module-icon" />
            <h3>Progress & Certificates</h3>
            <p>Track your learning journey and download certificates</p>
          </Link>
          <Link to="/resources" className="module-card">
            <FaDownload className="module-icon" />
            <h3>Learning Resources</h3>
            <p>Access study guides, planners, and educational materials</p>
          </Link>
          <Link to="/feedback" className="module-card">
            <FaComments className="module-icon" />
            <h3>Share Feedback</h3>
            <p>Help us improve with your text or voice feedback</p>
          </Link>
          {modules.map((module, index) => (
            <a key={index} href={module.link} className="module-card">
              <div className="module-icon">{module.icon}</div>
              <h3 className="module-title">{module.title}</h3>
              <p className="module-description">{module.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
