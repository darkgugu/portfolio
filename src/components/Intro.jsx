import '../assets/css/Intro.css'
import portrait from '../assets/images/portrait.jpg'

export const Intro = () => {
	return (
		<div className="Intro">
			<img src={portrait} alt="Portrait Icham Duret" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				fringilla enim mauris, at commodo purus sagittis et. Cras
				faucibus nec quam eget tempus. Maecenas venenatis volutpat
				metus. Proin eu dui dui. Interdum et malesuada fames ac ante
				ipsum primis in faucibus. Ut scelerisque leo elit, ac vehicula
				sapien vehicula nec. Sed maximus nulla orci, in tempor dui
				consequat eu. In sit amet sodales tellus. Cras auctor odio a
				magna venenatis eleifend. Morbi dapibus justo non interdum
				rutrum. Proin nec interdum turpis, a ultricies elit.
			</p>
		</div>
	)
}
