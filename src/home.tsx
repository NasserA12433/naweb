import { faFile, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "./cssFiles/home.css";
import Typewriter from "./typewriter.tsx";

function Home() {
	return (
				<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
				>
		<div className="profile-photo">
			<img src="src\assets\Profile.png"/>
		</div>
		<div className="home-container">
			<h1>
				Nasser Alnabulsi
			</h1>
			<p>
				<Typewriter text="Software Developer" speed={100}/>
				<br/>
				<FontAwesomeIcon icon={faLocationPin} color="red"/>
				{" "}La Verne California
				<br/>
				Learning and growing one line of code at a time
			</p>

			<div className="button-container">
					<a
						href="src\assets\ResumeNasserAlnabulsi.pdf"
						download="Nasser_Alnabulsi_Resume.pdf">
						<button className="resume-button">
						<FontAwesomeIcon icon={faFile} size="2x" color="white"/>
						{" "}
						<span className="onhovertype">
						resume
						</span>
						</button>
					</a>
					<a
						href="https://github.com/NasserA12433"
						target="_blank"
						rel="noopener noreferrer">

						<img src="src\assets\ghl2.png" className="github-logo"/>
					</a>
					<a
						href="https://www.linkedin.com/in/nasser-alnabulsi/"
						target="_blank"
						rel="noopener noreferrer">
						
						<img src="src\assets\linkedin.png" className="linkedin-logo"/>
					</a>
					<a
						href="https://www.reddit.com/r/Invincible/comments/nmcxaq/i_couldnt_find_the_original_image_online_anywhere/"
						target="_blank"
						rel="noopener noreferrer">
						
						<img src="src\assets\booty.webp" className="face-logo"/>
					</a>
			</div>

		</div>
		</motion.div>
	);
}

export default Home;

