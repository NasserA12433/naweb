import { faFile, faLocationPin, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./cssFiles/home.css";
import { useTheme } from "./ldtheme.tsx";
import Typewriter from "./typewriter.tsx";

function Home() {
	const {isLightMode} = useTheme();
	const [copied, setCopied] = useState(false);

	const handleCopyLink = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};
	useEffect(() => {
		if (copied) {
			const timer = setTimeout(() => setCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [copied]);

	return (
			
				<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
				>
	
		<div className="profile-photo">
			<img src="assets/Profile.png"/>
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
						href="assets/ResumeNasserAlnabulsi.pdf"
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
							{isLightMode? <img src="assets\ghd.jpg" className="assetbutton-logo"/>:<img src="assets\ghl.jpg" className="assetbutton-logo"/> }
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
							{isLightMode? <img src="assets\LL2.png" className="assetbutton-logo"/>:<img src="assets\LD.png" className="assetbutton-logo"/> }
							<span className="tooltip">
								linkedin
							</span>
						</button>
					</a>
					
						<button className="onhover-button" onClick={handleCopyLink}>
							<FontAwesomeIcon icon={faShareNodes} size="2x" color="icon" />{" "}
							<span className="tooltip">{copied ? "Link Copied!" : "Sharable Link!"}</span>
						</button>


			</div>

		</div>
		</motion.div>
	);
}

export default Home;

