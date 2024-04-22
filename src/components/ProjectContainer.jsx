import '../assets/css/ProjectContainer.css'
import projects from '../assets/projets.json'
import { ProjectPreview } from './ProjectPreview'
import { Sorter } from './Sorter'
import { useSelector } from 'react-redux'
import { getSelection } from '../app/selectors.js'

export const ProjectContainer = () => {
	const selection = useSelector(getSelection)
	let sortedProjects = projects
	selection.forEach(
		(tag) =>
			(sortedProjects = sortedProjects.filter((projet) =>
				projet.tags.includes(tag)
			))
	)

	return (
		<div className="ProjectContainer">
			<h2>MES PROJETS</h2>
			<Sorter />
			<div className="projets">
				{selection.length !== 0
					? sortedProjects.map((projet, index) => (
							<ProjectPreview projet={projet} key={index} />
					  ))
					: projects.map((projet, index) => (
							<ProjectPreview projet={projet} key={index} />
					  ))}
			</div>
		</div>
	)
}
