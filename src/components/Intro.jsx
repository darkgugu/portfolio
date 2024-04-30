import '../assets/css/Intro.css'
import portrait from '../assets/images/portrait.png'

export const Intro = () => {
	return (
		<div className="Intro" id="accueil">
			<img src={portrait} alt="Portrait Icham Duret" />
			<p>
				<span className="title">
					Bonjour ! Je suis <span className="name">Icham</span>,
					développeur front-end
				</span>
				<br />
				Diplômé d'OpenClassrooms en 2024, habitué du framework React, je
				maîtrise aussi bien le JavaScript que le Sass ou l'architecture
				Flux. En plus de mes projets Openclassrooms, j'ai déjà réalisé
				des projets scolaires ou personnels en PHP, Node.js, MySQL ou
				Java8
			</p>
		</div>
	)
}
