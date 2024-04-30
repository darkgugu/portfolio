import '../assets/css/ProjectModal.css'
import closeIcon from '../assets/images/closeIcon.png'
import githubIcon from '../assets/images/github.png'
import { useMediaQuery } from 'react-responsive'

export const ProjectModal = ({ projet, setIsModaleOpen }) => {
	const closeModale = () => {
		setIsModaleOpen(false)
	}
	const importedImage = require('../assets/images/' + projet.image)
	const githubUrl = 'https://github.com/darkgugu/'

	let images = []

	for (let i = 0; i < projet.tags.length; i++) {
		if (projet.tags[i] !== 'scolaire' && projet.tags !== 'perso') {
			images.push(
				require('../assets/images/technos/' + projet.tags[i] + '.png')
			)
		}
	}

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1025px)' })

	return (
		<div className="ProjectModal">
			<img
				className="preview-media"
				src={importedImage}
				alt={projet.nom}
			/>
			<div className="content">
				<h3>{projet.nom}</h3>
				<p className="type">
					Projet
					{projet.tags.includes('scolaire')
						? ' scolaire'
						: ' personnel'}
				</p>
				<div className="techno-git">
					<div className="technos-images">
						{images.map((src, index) => (
							<img src={src} alt="" key={index} />
						))}
					</div>

					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`${githubUrl}${projet.githubLink}`}
					>
						{!isTabletOrMobile
							? 'Voir le projet sur Github'
							: 'Github'}
						<img src={githubIcon} alt="" />
					</a>
				</div>
				<div className="description">{projet.descriptionLongue}</div>
			</div>
			<img
				className="close-icon"
				alt=""
				src={closeIcon}
				onClick={() => closeModale()}
			/>
		</div>
	)
}
