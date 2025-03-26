import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./cssFiles/home.css";
import CurrentPlans from "./currentplans.tsx";
import CurrentProjects from "./currentprojects.tsx";
import Experience from "./experience.tsx";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
    </div>
  );
}

function App() {

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/experiences" className="nav-button">Experiences</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/current-plans" className="nav-button">What I'm Working On</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/projects" element={<CurrentProjects />} />
        <Route path="/current-plans" element={<CurrentPlans />} />
      </Routes>
    </Router>
  );
}

export default App;
