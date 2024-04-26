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
				<div className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vivamus tincidunt lectus ac odio fermentum volutpat.
					Suspendisse at nisi convallis, condimentum risus eu, mattis
					nulla. Duis vitae arcu tellus. In venenatis est nec mi
					commodo dapibus. Pellentesque sit amet viverra sapien. Sed
					dignissim tincidunt dictum. In velit purus, dapibus nec
					tincidunt quis, iaculis ac dui. Etiam pretium iaculis
					efficitur. Sed vehicula orci in sapien gravida, id finibus
					augue porttitor. Etiam at nunc et quam rutrum gravida. Morbi
					fringilla, lectus eget maximus blandit, sapien odio egestas
					sem, vel dictum massa metus et leo. Nunc ac odio vitae ex
					lacinia varius non quis sapien. Nullam rhoncus molestie
					neque. Phasellus malesuada enim ut sem vehicula, sit amet
					sodales est viverra. Vivamus ut sapien non metus cursus
					molestie. Vivamus egestas leo ac sem hendrerit dictum.
				</div>
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
