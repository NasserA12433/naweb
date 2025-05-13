import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './cssFiles/navbar.css';
import CurrentProjects from "./CurrentProjects.tsx";
import Experience from "./experience.tsx";
import Home from "./home.tsx";
import { useTheme } from "./ldtheme.tsx";

function Navbar() {
    const {toggleTheme}= useTheme();
    return (
    <Router>
        <nav className="navbar">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/experiences" className="nav-button">Experiences</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <button onClick={toggleTheme} className="ldmode">
            <img src="src\assets\ldicon.png" className="lightdark-logo"/>
        </button>
        </nav>

        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/" element={<Home/>} />
        <Route path="/experiences" element={<Experience/>} />
        <Route path="/projects" element={<CurrentProjects/>} />
        </Routes>
    </Router>
    );
}
export default Navbar;
