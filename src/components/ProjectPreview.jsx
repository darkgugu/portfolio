import '../assets/css/ProjectPreview.css'

export const ProjectPreview = ({ projet }) => {
	const importedImage = require('../assets/images/' + projet.image)
	return (
		<div className="ProjectPreview">
			<img src={importedImage} alt={projet.nom} />
			<div className="content">
				<p>Technos</p>
				<p>Nom du projet</p>
			</div>
		</div>
	)
}
