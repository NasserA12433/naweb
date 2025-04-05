import React from "react";
import "./cssFiles/experience.css";

interface JobPanelProps {
  title: string;
  company: string;
  logo: string;
  description: string[];
}

const JobPanel: React.FC<JobPanelProps> = ({ title, company, logo, description }) => {
  return (
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
        <ul className="job-details">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <JobPanel
        title="Student Professional Worker"
        company="Las Angeles Department Of Water And Power"
        logo="src\assets\DWP.jpg"
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
        company="BILLEE"
        logo="src\assets\Billiee.png"
        description={[
          "Utilized ROS2 and NAV2 to deploy self-driving code on a robotic unit",
          "Implemented CSV data table sorting to identify material for medical use.",
          "Utilized LIDAR technology to implement a self-driving feature on a Mars-type rover",
          "Created robotic movement controls in ROS2 software to control the rover",
          "Implemented robotic features for the University Rover Challenge in 2024",
        ]}
      />
    </div>
  );
};

export default Experience;
