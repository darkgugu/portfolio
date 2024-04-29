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

	const simulateClear = () => {
		document.getElementById('clearFilters').click()
	}

	return (
			<h2>MES PROJETS</h2>
			<Sorter />
			{!isModaleOpen ? (
				<>
					{selection.length !== 0 ? (
						sortedProjects.length === 1 ? (
							<p>1 projet est affiché</p>
						) : sortedProjects.length === 0 ? (
							<>
								<p>Aucun projet ne correspond à ces critères</p>
								<button
									id="fakeClear"
									onClick={() => simulateClear()}
								>
									Réinitialiser les filtres
								</button>
							</>
						) : (
							<p>{sortedProjects.length} projets sont affichés</p>
						)
					) : (
						<p>Tous les projets sont affichés</p>
					)}
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
				</>
			) : (
				<ProjectModal
					projet={modaleProjet}
					setIsModaleOpen={setIsModaleOpen}
				/>
			)}
		</div>
	)
}
