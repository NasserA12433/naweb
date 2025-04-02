import { faFile, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import githubLight from "../assets/ghd.jpg";
import githubDark from "../assets/ghl.jpg";
import "./cssFiles/home.css";
import { useTheme } from "./ldtheme.tsx";
import Typewriter from "./typewriter.tsx";

function Home() {
	const {isLightMode} = useTheme();
	const imgSrc= isLightMode ? githubLight: githubDark;
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
						<button className="onhover-button">
						<FontAwesomeIcon icon={faFile} size="2x" color="icon"/>
						{" "}
						<span className="tooltip">
						Resume
						</span>
						</button>
					</a>
					<a
						href="https://github.com/NasserA12433"
						target="_blank"
						rel="noopener noreferrer">
						<button className="onhover-button">
						<img
							src={imgSrc}
							className="assetbutton-logo"/>
						<span className="tooltip">
							Github
						</span>
						</button>
					</a>
					<a
						href="https://www.linkedin.com/in/nasser-alnabulsi/"
						target="_blank"
						rel="noopener noreferrer">
						<button className="onhover-button">
							<img src="src\assets\linkedin.png" className="assetbutton-logo"/>
							<span className="tooltip">
								linkedin
							</span>
						</button>
					</a>

			</div>

		</div>
		</motion.div>
	);
}

export default Home;

