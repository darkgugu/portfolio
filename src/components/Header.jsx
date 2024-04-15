import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className="Header">
			<div>'Logo'</div>
			<nav>
				<Link>Accueil</Link>
				<Link>Projets</Link>
				<Link>À Propos</Link>
			</nav>
			<div>CV button</div>
		</header>
	)
}
