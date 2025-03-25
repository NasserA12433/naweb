import { useEffect } from "react";
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
useEffect(() => {
  const margin = 50;
  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;

    // Restrict effect to screen margin
    if (
      e.clientX < margin ||
      e.clientX > innerWidth - margin ||
      e.clientY < margin ||
      e.clientY > innerHeight - margin
    ) {
      return;
    }

    // Avoid effect on navigation buttons
    if (e.target instanceof HTMLElement && e.target.closest(".nav-button")) {
      return;
    }

    const trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);

    // Ensure the element is added before measuring
    requestAnimationFrame(() => {
      const size = 10; // Ensuring a fixed size
      trail.style.left = `${e.clientX - size / 2}px`;
      trail.style.top = `${e.clientY - size / 2}px`;
    });

    // Remove the trail after fading
    setTimeout(() => {
      trail.remove();
    }, 500);
  };

  document.addEventListener("mousemove", handleMouseMove);
  return () => document.removeEventListener("mousemove", handleMouseMove);
}, []);

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
