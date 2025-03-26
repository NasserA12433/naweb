import { useEffect, useState } from "react";
import "./cssFiles/MouseTrail.css"; // Import styles

const FADE_DURATION = 1000; // Time (ms) before a dot fully disappears

interface TrailDot {
    x: number;
    y: number;
    timestamp: number;
}

const MouseTrail: React.FC = () => {
    const [trail, setTrail] = useState<TrailDot[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const now = Date.now();

            setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY, timestamp: now }]);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Remove old dots automatically
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrail((prevTrail) => prevTrail.filter(dot => now - dot.timestamp < FADE_DURATION));
        }, 50); // Check every 50ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="trail-container">
            {trail.map((dot, index) => {
                const age = Date.now() - dot.timestamp;
                const opacity = 1 - age / FADE_DURATION; // Fade out over time

                return (
                    <span
                        key={index}
                        className="trail-dot"
                        style={{
                            left: dot.x,
                            top: dot.y,
                            opacity,
                            transform: `scale(${opacity})`, // Shrink as it fades
                        }}
                    />
                );
            })}
        </div>
    );
};

export default MouseTrail;
