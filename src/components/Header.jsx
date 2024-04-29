import { useMediaQuery } from 'react-responsive'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1025px)' })

	const handleClick = () => {
		//Download CV
	}
	return (
		<header className="Header">
			<Link className="logoName">ICHAM DURET</Link>
			{!isTabletOrMobile ? (
				<>
					<nav>
						<a href="#accueil">Accueil</a>
						<a href="#stack">Stack Technique</a>
						<a href="#projets">Projets</a>
					</nav>
					<button className="cv-button" onClick={() => handleClick()}>
						Mon CV
					</button>
				</>
			) : (
				<button className="burger-menu"></button>
			)}
		</header>
	)
}
