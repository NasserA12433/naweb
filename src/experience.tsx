import './cssFiles/experience.css';

// Define an interface for the experience data
interface ExperienceData {
  title: string;
  company: string;
  description: string;
  image: string;
}

// Define the experience data as an array of the type 'ExperienceData'
const experiencesData: ExperienceData[] = [
  {
    title: 'Student Professional Worker',
    company: 'Company 1',
    description: 'Description of responsibilities and achievements for job 1.',
    image: DWP.jpg,
  },
  {
    title: 'Job Title 2',
    company: 'Company 2',
    description: 'Description of responsibilities and achievements for job 2.',
    image: '/assets/DWP.jpg',
  },
];

// Define the 'Experience' component to render individual experiences
const Experience = ({ title, company, description, image }: ExperienceData) => {
    return (
      <div className="experience-item">
        <img src={image} alt={title} className="experience-image" />
        <h2>{title}</h2>
        <h3>{company}</h3>
        <p className="experience-description">{description}</p>  {/* Styled description */}
      </div>
    );
  };
  

// Main 'Experiences' component that will map over the experiencesData
const Experiences = () => {
  return (
    <div style={{ padding: '2rem' }}>
      {experiencesData.map((exp, index) => (
        <Experience key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experiences;
