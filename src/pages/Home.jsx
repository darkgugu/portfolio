import '../assets/css/Home.css'
import { Intro } from '../components/Intro'
import { ProjectContainer } from '../components/ProjectContainer'

export const Home = () => {
	return (
		<div className="Home">
			<Intro />
			<ProjectContainer />
		</div>
	)
}
