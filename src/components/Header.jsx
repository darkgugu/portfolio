import { useMediaQuery } from 'react-responsive'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'
import cv from '../assets/CV_DURET_Icham.pdf'

export const Header = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1025px)' })

	const handleClick = () => {
		// using Java Script method to get PDF file
		fetch(cv).then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob)

				// Setting various property values
				let alink = document.createElement('a')
				alink.href = fileURL
				alink.download = 'CV_DURET_Icham.pdf'
				alink.click()
			})
		})
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
