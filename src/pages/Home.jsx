import '../assets/css/Home.css'
import { Intro } from '../components/Intro'
import { ProjectContainer } from '../components/ProjectContainer'
import { TechStack } from '../components/TechStack'

export const Home = () => {
	return (
		<div className="Home">
			<Intro />
			<TechStack />
			<ProjectContainer />
		</div>
	)
}
