import { useState } from 'react'
import '../assets/css/TechStack.css'
import jsIcon from '../assets/images/technos/js.png'
import reactIcon from '../assets/images/technos/react.png'
import sassIcon from '../assets/images/technos/sass.png'

export const TechStack = () => {
	const [nameDisplayed, setNameDisplayed] = useState(false)
	return (
		<div className="TechStack" id="stack">
			<h2>Stack Technique</h2>
			<div className="technos">
				<div className="img-span-container">
					<img
						onMouseEnter={() => setNameDisplayed('js')}
						onMouseLeave={() => setNameDisplayed(false)}
						src={jsIcon}
						alt="Logo javascript"
					/>
					{nameDisplayed === 'js' ? <span>JavaScript</span> : null}
				</div>
				<div className="img-span-container">
					<img
						onMouseEnter={() => setNameDisplayed('react')}
						onMouseLeave={() => setNameDisplayed(false)}
						src={reactIcon}
						alt="Logo react"
					/>
					{nameDisplayed === 'react' ? <span>React</span> : null}
				</div>
				<div className="img-span-container">
					<img
						onMouseEnter={() => setNameDisplayed('sass')}
						onMouseLeave={() => setNameDisplayed(false)}
						src={sassIcon}
						alt="Logo sass"
					/>
					{nameDisplayed === 'sass' ? <span>Sass</span> : null}
				</div>
			</div>
		</div>
	)
}
