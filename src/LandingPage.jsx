import './sass/style.scss'
import {Header, Banner} from './Components';
import rect from './img/rect.svg'
import cuadrados from './img/cuadrados.svg'

export const LandingPage = () => {

  	return (
		<div className="App">
			<Header/>
			<Banner/>
			<hr/>
			<section className='container-all' id="quienes-somos">
				<div className='text'>
					<h2 className='subtitle'>
					¿Quiénes somos?
					</h2>
					<p className='parag'>
					Somos un equipo de desarrollo de software independiente
					latinoamericano, dedicado a brindar los mejores servicios a
					nuestros clientes. Desde la creación del sitio web como la
					puesta en producción final.
					</p>
					<div className='image'>
						<img
						alt=""
						src={rect}
						className='rect'/>
					</div>
				
					<img 
					alt=""
					src={cuadrados}
					className='cuadrados'/>
				</div>
			</section>
		</div>
  	);
}
