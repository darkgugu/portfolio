import { useState } from 'react'
import '../assets/css/ProjectPreview.css'
import '../assets/sortingPoints.json'

export const ProjectPreview = ({ projet, onClick }) => {
	const [isHover, setIsHover] = useState(false)
	const start = () => {
		//setIsHover(true)
		//console.log('start')
	}
	const stop = () => {
		//setIsHover(false)
		//console.log('stop')
	}
	const importedImage = require('../assets/images/' + projet.image)
	const importedVideo = require('../assets/videos/printit.webm')
	return (
		<div
			className="ProjectPreview"
			onMouseEnter={() => start()}
			onMouseLeave={() => stop()}
			onClick={onClick}
		>
			{!isHover ? (
				<img
					className="preview-media"
					src={importedImage}
					alt={projet.nom}
				/>
			) : (
				<video className="preview-media">
					<source src={importedVideo} />
				</video>
			)}
			<div className="content">
				<p className="name">{projet.nom}</p>
				<p className="desc">{projet.descriptionCourte}</p>
			</div>
		</div>
	)
}
