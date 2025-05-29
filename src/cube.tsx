import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './cssFiles/cube.css';

export type CubeHandle = {
  resetRotation: () => void;
};

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

const Cube = forwardRef<CubeHandle, CubeProps>(({
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
}, ref) => {
  const [rotation, setRotation] = useState({ x: 0, y: -45 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useImperativeHandle(ref, () => ({
    resetRotation: () => setRotation({ x: 0, y: -45 }),
  }));

  const handleStart = (x: number, y: number) => {
    setIsDragging(true);
    lastPos.current = { x, y };
  };

  const handleMove = (x: number, y: number) => {
    if (!isDragging) return;
    const deltaX = x - lastPos.current.x;
    const deltaY = y - lastPos.current.y;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));

    lastPos.current = { x, y };
  };

  const handleMouseDown = (e: React.MouseEvent) =>
    handleStart(e.clientX, e.clientY);
  const handleMouseMove = (e: React.MouseEvent) =>
    handleMove(e.clientX, e.clientY);
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };
  const handleEnd = () => setIsDragging(false);

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
    <div
      className="cube-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <div
        className={`cube ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? 'none' : 'transform 0.2s ease',
        }}
      >
        {renderFace(frontFaceContent, frontFaceLink, 'front')}
        {renderFace(backFaceContent, backFaceLink, 'back')}
        {renderFace(rightFaceContent, rightFaceLink, 'right')}
        {renderFace(leftFaceContent, leftFaceLink, 'left')}
        {renderFace(topFaceContent, topFaceLink, 'top')}
        {renderFace(bottomFaceContent, bottomFaceLink, 'bottom')}
      </div>
    </div>
  );
});

export default Cube;
