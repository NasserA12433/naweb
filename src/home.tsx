import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./cssFiles/home.css";
import CurrentProjects from "./currentprojects.tsx";
import Experience from "./experience.tsx";


function Home() {
  return (
    <div className="home-container">
      <h1>Im a </h1>
      <span>
      </span>
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/projects" element={<CurrentProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
