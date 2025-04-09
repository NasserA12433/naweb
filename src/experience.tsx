import { motion } from "framer-motion";
import React, { useState } from "react";
import "./cssFiles/experience.css";

interface JobPanelProps {
	title: string;
	company: string;
	logo: string;
	skills:string[];
	description: string[];
	images?: string[];
}

const JobPanel: React.FC<JobPanelProps> = ({ title, company, logo,skills, description,images }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded((prev) => !prev);
	};


	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: .5 }}
		>
			<div className="job-panel">
				<div className="job-logo-wrapper">
					<img
						src={logo}
						alt={`${company} logo`}
						className="job-logo"
					/>
				</div>
				<div>
					<h3 className="job-position">{title}</h3>
					<h4 className="job-company">{company}</h4>
					<div className="job-skills">
					{skills.map((skill, index) => (
					<span key={index} className="skill-bubble">
						{skill}
					</span>
					))}
					</div>
					{expanded && (
						<>
						<ul className="job-details">
							{description.map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
						{images && (
							<div className="job-images">
								{images.map((src,index)=>
								<img
									key={index}
									src={src}
									alt={`Job screenshot ${index + 1}`}
									className="job-image"
									/>
								)}
							</div>
						)}
						</>
					)}

					<button className="learn-more-btn" onClick={toggleExpanded}>
						{expanded ? "Show Less ▲" : "Learn More ▼"}
					</button>
				</div>
			</div>
		</motion.div>
		);
	};
	const Experience = () => {
		return (
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: .5 }}
			>
				<div className="experience-containter">
					<div className="experiencelist">
						<JobPanel
							title="Student Professional Worker"
							company="Los Angeles Department Of Water And Power"
							logo="src\assets\DWP.jpg"
							skills={[" Svelte", "Microsoft AD", "Python", "Flask"]}
							description={[
								"Developed cloud web applications to optimize office workflow (Full stack) ",
								"Automated CIS security reports with Microsoft Active Directory ",
								"Utilized Microsoft Office to document and assist project management staff",
								" Attended meetings with contracted clients",
								" Assisted in handling sensitive confidential data",
								"Shadowed office processes and streamlined workflow tasks",
								"Studied extensive frameworks such as Svelte, IBM mainframes, and ITIL ",
							]}
						/>
						<JobPanel
							title="Software Developer"
							company="BILLEE Rover"
							logo="src\assets\Billiee.png"
							skills={[" ROS2", "Linux", "3D data Clustering"]}
							description={[
								"Utilized ROS2 and NAV2 to deploy self-driving code on a robotic unit",
								"Implemented CSV data table sorting to identify material for medical use.",
								"Utilized LIDAR technology to implement a self-driving feature on a Mars-type rover",
								"Created robotic movement controls in ROS2 software to control the rover",
								"Implemented robotic features for the University Rover Challenge in 2024",
							]}
							images={[
								"src/assets/Rover1.jpg",
								"src/assets/Rover2.jpg",
								"src/assets/Rover4.jpg",

							]}
						/>
					</div>
				</div>
		</motion.div>
	);
};

export default Experience;
