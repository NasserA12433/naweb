import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './cssFiles/navbar.css';
import CurrentProjects from "./currentprojects.tsx";
import Experience from "./experience.tsx";
import Home from "./home.tsx";


function Navbar() {

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
export default Navbar;
