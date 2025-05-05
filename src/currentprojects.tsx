import './cssFiles/cube.css';
import Cube from './cube.tsx';

function CurrentProjects() {
  return (
    
    <div className='cpc'>
      <h1>This website</h1>
      <div style ={{display: 'flex',alignItems:'center',gap:'2rem'}}>
        <Cube frontFaceContent="React" rightFaceContent="Typescript"
              leftFaceContent="Typescript" backFaceContent="React" />
        <p> </p>
        <p>This website utilizes React and TypeScript.</p>
        <p>You can find the GitHub repo by clicking the cube box. 
          OR you can just explore here</p>
        </div>
      <h1>CPP Housing finder Application</h1>
      <div style= {{display:'flex', alignItems:'center',gap:'1rem'}}>
        <Cube frontFaceContent="Flask" rightFaceContent="Python"
              leftFaceContent="Python" backFaceContent="Flask"/>
        <p> </p>
        <p>Cal Poly Pomona Housing finder application.</p>
        <p>Click the box to follow to the github Repo</p>
        </div>
      <h1>Payment billing website</h1>
      <div style= {{display:'flex', alignItems:'center',gap:'1rem'}}>
        <Cube frontFaceContent="SQL"/>
        <p> </p>
        <p></p>Cal Poly Pomona website project.
        <p>I generated the SQL tables, links, Relations, and Flask API code.</p>
        <p>Click to follow to the github Repo</p>
        </div>

    </div>
  );
}

export default CurrentProjects;
