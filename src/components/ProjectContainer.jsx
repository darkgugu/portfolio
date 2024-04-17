import '../assets/css/ProjectContainer.css'
import projects from '../assets/projets.json'
import { ProjectPreview } from './ProjectPreview'
import { Sorter } from './Sorter'

export const ProjectContainer = () => {
	return (
		<div className="ProjectContainer">
			<h2>MES PROJETS</h2>
			<Sorter />
			<div className="projets">
				{projects.map((projet, index) => (
					<ProjectPreview projet={projet} key={index} />
				))}
			</div>
		</div>
	)
}
