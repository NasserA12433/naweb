
import { motion } from 'framer-motion';
import './cssFiles/cube.css';
import './cssFiles/currentprojects.css';
import Cube from './cube.tsx';



const CurrentProjects = () =>{
		return (
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: .75}}
			>
			
			<div className="cpc">
				<div className='project-header'>
					<h1>My Personal Website</h1>
				</div>
				<div className='project-content'>
						<Cube frontFaceContent="React" rightFaceContent="Typescript"
							leftFaceContent="Typescript" backFaceContent="React"
							frontFaceLink='https://github.com/NasserA12433/naweb'/>
				</div>
				<div className='project-text'>
					<p> </p>
					<p>This website utilizes React and TypeScript.</p>
					<p>You can find the GitHub repo by clicking the cube box. 
						OR you can just explore here</p>
				</div>



				<div className='project-header'>
					<h1>GamerStride (Phone Application)</h1>
				</div>
				<div className='project-content'>
					<Cube frontFaceContent="Flutter" rightFaceContent="Kotlin"
								leftFaceContent="Kotlin" backFaceContent="Flutter"
								frontFaceLink='https://github.com/NasserA12433/Gamerstride2.1' />
				<div className='project-text'>
					<p> </p>
					<p>Created an application on IOS and Android called Gamerstride. </p>
					<p>Click the link to go to github</p>
					</div>
				</div>


				<div className='project-header'>
					<h1>First personal website</h1>
				</div>
				<div className='project-content'>
					<Cube frontFaceContent="CSS" rightFaceContent="HTML"
								leftFaceContent="Markup" backFaceContent=" "
								frontFaceLink='https://github.com/NasserA12433/Personal-Website?tab=readme-ov-file'/>
					<div className='project-text'>
						<p> </p>
						<p>My first personal website. I designed it without a framework</p>
						<p>Click the link to go to github</p>
					</div>
				</div>


				<div className='project-header'>
					<h1>CPP Hackathon Store website</h1>
				</div>
				<div className='project-content'>
					<Cube frontFaceContent="Firebase" rightFaceContent='Typescript'
								leftFaceContent=' ' backFaceContent=' '
								frontFaceLink='https://github.com/NasserA12433/BroncoHacks'/>
					<div className='project-text'>
						<p> </p>
						<p></p>Cal Poly Pomona website project.
						<p>I generated the SQL tables, links, Relations, and Flask API code.</p>
						<p>Click the link to go to github</p>
						</div>
				</div>
			</div>
		</motion.div>
		);
}

export default CurrentProjects;
