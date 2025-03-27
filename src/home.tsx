import "./cssFiles/home.css";

import Typewriter from "./typewriter.tsx";

function Home() {
  return (
    <div className="home-container">
      <h1>Im a
      <Typewriter text="Software Devloper" speed={100}/>
      </h1>
    </div>
  );
}

