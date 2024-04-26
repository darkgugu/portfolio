import '../assets/css/ProjectContainer.css'
import projects from '../assets/projets.json'
import { ProjectPreview } from './ProjectPreview'
import { Sorter } from './Sorter'
import { useSelector } from 'react-redux'
import { getSelection } from '../app/selectors.js'
import { useState } from 'react'
import { ProjectModal } from './ProjectModal.jsx'

export const ProjectContainer = () => {
	const [isModaleOpen, setIsModaleOpen] = useState(false)
	const [modaleProjet, setModaleProjet] = useState()
	const selection = useSelector(getSelection)
	let sortedProjects = projects
	selection.forEach(
		(tag) =>
			(sortedProjects = sortedProjects.filter((projet) =>
				projet.tags.includes(tag)
			))
	)

	const openModale = (projet) => {
		setModaleProjet(projet)
		setIsModaleOpen(true)
	}

	return (
		<div className="ProjectContainer">
			<h2>MES PROJETS</h2>
			<Sorter />
			{!isModaleOpen ? (
				<div className="projets">
					{selection.length !== 0
						? sortedProjects.map((projet, index) => (
								<ProjectPreview
									projet={projet}
									key={index}
									onClick={() => openModale(projet)}
								/>
						  ))
						: projects.map((projet, index) => (
								<ProjectPreview
									projet={projet}
									key={index}
									onClick={() => openModale(projet)}
								/>
						  ))}
				</div>
			) : (
				<ProjectModal
					projet={modaleProjet}
					setIsModaleOpen={setIsModaleOpen}
				/>
			)}
		</div>
	)
}
