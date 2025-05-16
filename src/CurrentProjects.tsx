
import { motion } from 'framer-motion';
import './cssFiles/cube.css';
import Cube from './cube.tsx';



const CurrentProjects = () =>{
		return (
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: .5 }}
			>
			<div className='cpc'>
				<h1>My Personal Website</h1>
				<div style ={{display: 'flex',alignItems:'center',gap:'2rem'}}>
					<Cube frontFaceContent="React" rightFaceContent="Typescript"
								leftFaceContent="Typescript" backFaceContent="React" 
								frontFaceLink='https://github.com/NasserA12433/naweb'/>
					<p> </p>
					<p>This website utilizes React and TypeScript.</p>
					<p>You can find the GitHub repo by clicking the cube box. 
						OR you can just explore here</p>
					</div>
					<h1>Gamerstride (phone app)</h1>
				<div style ={{display: 'flex',alignItems:'center',gap:'2rem'}}>
					<Cube frontFaceContent="Flutter" rightFaceContent="Kotlin"
								leftFaceContent="Kotlin" backFaceContent="Flutter"
								frontFaceLink='https://github.com/NasserA12433/Gamerstride2.1' />
					<p> </p>
					<p>Created an application on IOS and Android called Gamerstride. </p>
					<p>Click the link to go to github</p>
					</div>
				<h1>First ever personal site</h1>
				<div style= {{display:'flex', alignItems:'center',gap:'2rem'}}>
					<Cube frontFaceContent="CSS" rightFaceContent="HTML"
								leftFaceContent="Markup" backFaceContent=" "
								frontFaceLink='https://github.com/NasserA12433/Personal-Website?tab=readme-ov-file'/>
					<p> </p>
					<p>My first personal website. I designed it without a frameowrk</p>
					<p>Click the link to go to github</p>
					</div>
				<h1>CPP Hackathon Store website</h1>
				<div style= {{display:'flex', alignItems:'center',gap:'2rem'}}>
					<Cube frontFaceContent="Firebase" rightFaceContent='Typescript'
								leftFaceContent=' ' backFaceContent=' '
								frontFaceLink='https://github.com/NasserA12433/BroncoHacks'/>
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
