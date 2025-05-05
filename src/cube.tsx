import './cssFiles/Cube.css';

type CubeProps = {
  frontFaceContent?: React.ReactNode;
  backFaceContent?: React.ReactNode;
  rightFaceContent?: React.ReactNode;
  leftFaceContent?: React.ReactNode;
  topFaceContent?: React.ReactNode;
  bottomFaceContent?: React.ReactNode;
};

function Cube({
  frontFaceContent,
  backFaceContent,
  rightFaceContent,
  leftFaceContent,
  topFaceContent,
  bottomFaceContent,
}: CubeProps) {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">{frontFaceContent}</div>
        <div className="face back">{backFaceContent}</div>
        <div className="face right">{rightFaceContent}</div>
        <div className="face left">{leftFaceContent}</div>
        <div className="face top">{topFaceContent}</div>
        <div className="face bottom">{bottomFaceContent}</div>
      </div>
    </div>
  );
}

export default Cube;
