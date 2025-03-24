import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CurrentPlans from './currentplans.tsx';
import CurrentProjects from './currentprojects.tsx';
import Experience from './experience.tsx';
import './home.css';
import Home from './home.tsx'; // Ensure this file exists

function App() {
	return (
	  <Router>
		<div className="navbar">
		  <Link to="/" className="nav-button">Home</Link>
		  <Link to="/experiences" className="nav-button">Experiences</Link>
		  <Link to="/projects" className="nav-button">Projects</Link>
		  <Link to="/current-plans" className="nav-button">What I'm Working On</Link>
		</div>

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
