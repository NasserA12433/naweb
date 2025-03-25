import { useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./cssFiles/home.css";
import CurrentPlans from "./currentplans.tsx";
import CurrentProjects from "./currentprojects.tsx";
import useMousePosition from "./cursorlocator.tsx";
import Experience from "./experience.tsx";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Website</h1>
    </div>
  );
}

function App() {
  const {x,y}= useMousePosition();

  useEffect(() => {
    const margin= 50;

    const handleMouseMove = (e: MouseEvent) => {
      const {innerWidth, innerHeight}=window;
      if(
        e.clientX<margin ||
        e.clientX>innerWidth-margin||
        e.clientY<margin||
        e.clientY>innerHeight-margin
      ){
        return;
      }
      if (e.target instanceof HTMLElement && e.target.closest(".nav-button")) {
        return; // Ignore buttons
      }

      const trail = document.createElement("div");
      trail.className = "trail";
      document.body.appendChild(trail);

      // Set position at cursor
      requestAnimationFrame(() =>{
      trail.style.left = `${x-5}px`;
      trail.style.top = `${y-5}px`;
    });
      // Remove after fading effect
      setTimeout(() => {
        trail.remove();
      }, 500);
    };

    // Attach the event listener
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
