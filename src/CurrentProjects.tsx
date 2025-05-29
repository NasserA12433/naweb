
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './cssFiles/cube.css';
import './cssFiles/currentprojects.css';
import Cube, { CubeHandle } from './cube.tsx';

const CurrentProjects = () => {
	const cubeRefs = [useRef<CubeHandle>(null), useRef<CubeHandle>(null), useRef<CubeHandle>(null), useRef<CubeHandle>(null)];


	const handleResetClick = () => {
	cubeRefs.forEach(ref => {
		ref.current?.resetRotation();
	});
};

	return (
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: .75}}
			>

			

			<div className="cpc">
				
			<div className='reset'>
				<button className='reset-button'onClick={handleResetClick}>Reset Cube Rotation</button>
			</div>
			
				<div className='project-header'>
					<h1>My Personal Website</h1>
				</div>
			<div className='project-content'>
			<Cube
				ref={cubeRefs[0]}
				frontFaceContent="React"
				rightFaceContent="Typescript"
				leftFaceContent="Typescript"
				backFaceContent="React"
				frontFaceLink='https://github.com/NasserA12433/naweb'
			/>
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
					<Cube ref={cubeRefs[1]} frontFaceContent="Flutter" rightFaceContent="Kotlin"
								leftFaceContent="Kotlin" backFaceContent="Flutter"
								frontFaceLink='https://github.com/NasserA12433/Gamerstride2.1' />
				</div>
				<div className='project-text'>
					<p> </p>
					<p>Created an application on IOS and Android called Gamerstride. </p>
					<p>Click the link to go to github</p>
				</div>



				<div className='project-header'>
					<h1>First personal website</h1>
				</div>
				<div className='project-content'>
					<Cube ref={cubeRefs[2]} frontFaceContent="CSS" rightFaceContent="HTML"
								leftFaceContent="Markup" backFaceContent=" "
								frontFaceLink='https://github.com/NasserA12433/Personal-Website?tab=readme-ov-file'/>
				</div>
				<div className='project-text'>
						<p> </p>
						<p>My first personal website. I designed it without a framework</p>
						<p>Click the link to go to github</p>
				</div>
				


				<div className='project-header'>
					<h1>CPP Hackathon Store website</h1>
				</div>
				<div className='project-content'>
					<Cube ref={cubeRefs[3]} frontFaceContent="Firebase" rightFaceContent='Typescript'
								leftFaceContent=' ' backFaceContent=' '
								frontFaceLink='https://github.com/NasserA12433/BroncoHacks'/>
				</div>
				<div className='project-text'>
					<p> </p>
					<p></p>Cal Poly Pomona website project.
					<p>I generated the SQL tables, links, Relations, and Flask API code.</p>
					<p>Click the link to go to github</p>
				</div>
			</div>
		</motion.div>
		);
}

export default CurrentProjects;
