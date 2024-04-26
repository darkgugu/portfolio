import '../assets/css/TechStack.css'
import jsIcon from '../assets/images/technos/js.png'
import reactIcon from '../assets/images/technos/react.png'
import sassIcon from '../assets/images/technos/sass.png'

export const TechStack = () => {
	return (
		<div className="TechStack">
			<h2>Stack Technique</h2>
			<div className="technos">
				<img src={jsIcon} alt="Logo javascript" />
				<img src={reactIcon} alt="Logo React" />
				<img src={sassIcon} alt="Logo Sass" />
			</div>
		</div>
	)
}
