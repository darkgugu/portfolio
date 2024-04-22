import '../assets/css/ProjectPreview.css'
import '../assets/sortingPoints.json'

export const ProjectPreview = ({ projet }) => {
	const importedImage = require('../assets/images/' + projet.image)
	return (
		<div className="ProjectPreview">
			<img src={importedImage} alt={projet.nom} />
			<div className="content">
				<p className="name">{projet.nom}</p>
				<p className="desc">{projet.description}</p>
			</div>
		</div>
	)
}
