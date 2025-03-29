import "./cssFiles/home.css";

import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "./typewriter.tsx";

function Home() {
  return (

    <div className="home-container">
      <img src="src\assets\Profile.png"/>
      <h1>
        Nasser Alnabulsi
      </h1>
      <p>
        <Typewriter text="Software Devloper " speed={100}/>
        <FontAwesomeIcon icon={faLocationPin} size="2x" color="red"/>
        {" "}La Verne California
        <br/>
        Learning and growing one line of code at a time
        </p>
    </div>
  );
}

export default Home;

