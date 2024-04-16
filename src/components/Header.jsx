import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
	const handleClick = () => {
		//Dowload CV
	}
	return (
		<header className="Header">
			<Link className="logoName">ICHAM DURET</Link>
			<nav>
				<Link>Accueil</Link>
				<Link>Projets</Link>
				<Link>À Propos</Link>
			</nav>
			<button onClick={() => handleClick()}>Mon CV</button>
		</header>
	)
}
