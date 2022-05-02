import puntos from '../img/puntos.svg';
import vector from '../img/Vector.svg';
import banner from '../img/banner-image.svg';
import banderas from '../img/banderas.svg';



export const Banner = () => {

    //Logic Component

    return(
        <>
            <section id='home' className='banner'>
                <div className='container-text'>
                    <div className='container-img'>
                    <img alt="" src={banderas} className='banderas' />
                    </div>
                    <div className='text'>
                    <h1 className='title'>
                        Te ayudamos a impulsar tu negocio.
                    </h1>
                    <p className='parag'>
                        Ofrecemos los mejores sistemas
                        de software para satisfacer todas las necesidades de tu empresa
                    </p>
                    </div>
                </div>
                <div className='container-image-banner'>
                    <img alt="" src={banner} className='img-banner'/>
                </div>
                <img alt="" src={puntos} className='puntos' />
                <img alt="" src={vector} className='vector' />
            </section>
        </>
        )
}