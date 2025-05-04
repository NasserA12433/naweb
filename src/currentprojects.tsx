import './cssFiles/cube.css';
import Cube from './cube.tsx';

function CurrentProjects() {
  return (
    <div className='cpc'>
      <div className="cube-stack">
        <Cube frontFaceContent="React"/>
        <Cube frontFaceContent="Typescript"/>
        <Cube frontFaceContent="Flask"/>
        <Cube frontFaceContent="Python"/>
        <Cube frontFaceContent="SQL"/>
        </div>
    </div>
  );
}

export default CurrentProjects;
