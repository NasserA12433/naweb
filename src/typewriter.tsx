import { useEffect, useState } from "react";
import "./cssFiles/home.css";

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState(text[0] || ""); // Start with first letter
  const [index, setIndex] = useState(1); // Start from index 1

  useEffect(() => {
    if (index >= text.length) return; // Stop when all letters are displayed

    const timeoutId = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex(index + 1);
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [index, text, speed]);

  return displayText;
};

export default Typewriter;
