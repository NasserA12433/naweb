import './cssFiles/Cube.css';

type CubeProps = {
  frontFaceContent?: React.ReactNode;
  backFaceContent?: React.ReactNode;
  rightFaceContent?: React.ReactNode;
  leftFaceContent?: React.ReactNode;
  topFaceContent?: React.ReactNode;
  bottomFaceContent?: React.ReactNode;

  frontFaceLink?: string;
  backFaceLink?: string;
  rightFaceLink?: string;
  leftFaceLink?: string;
  topFaceLink?: string;
  bottomFaceLink?: string;
};

function Cube({
  frontFaceContent,
  backFaceContent,
  rightFaceContent,
  leftFaceContent,
  topFaceContent,
  bottomFaceContent,

  frontFaceLink,
  backFaceLink,
  rightFaceLink,
  leftFaceLink,
  topFaceLink,
  bottomFaceLink,
}: CubeProps) {
  const renderFace = (
    content: React.ReactNode,
    link: string | undefined,
    className: string
  ) => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`face ${className}`}
        >
          {content}
        </a>
      );
    }
    return <div className={`face ${className}`}>{content}</div>;
  };

  return (
    <div className="cube-container">
      <div className="cube">
        {renderFace(frontFaceContent, frontFaceLink, 'front')}
        {renderFace(backFaceContent, backFaceLink, 'back')}
        {renderFace(rightFaceContent, rightFaceLink, 'right')}
        {renderFace(leftFaceContent, leftFaceLink, 'left')}
        {renderFace(topFaceContent, topFaceLink, 'top')}
        {renderFace(bottomFaceContent, bottomFaceLink, 'bottom')}
      </div>
    </div>
  );
}

export default Cube;
