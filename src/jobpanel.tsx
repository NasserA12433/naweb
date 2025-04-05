// src/components/JobPanel.tsx
import React from "react";
import "./cssFiles./jobpanel.css";


interface JobPanelProps {
  title: string;
  company: string;
  logo: string; // image URL or path
  description: string[];
}

const JobPanel: React.FC<JobPanelProps> = ({ title, company, logo, description }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-md p-6 mb-6 items-start">
      <img  src={logo}
            alt={`${company} logo`} 
            className="max-w-full max-h-full object-contain " />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-md text-gray-600 mb-2">{company}</h4>
        <ul className="list-disc pl-5 text-gray-800">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPanel;
