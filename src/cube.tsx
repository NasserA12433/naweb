import './cssFiles/Cube.css';

function Cube({frontFaceContent}:{frontFaceContent: React.ReactNode}) {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">{frontFaceContent}</div>
        <div className="face back"></div>
        <div className="face right"></div>
        <div className="face left"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
}

export default Cube;
