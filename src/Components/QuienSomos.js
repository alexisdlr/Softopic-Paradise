import rect from '../img/rect.svg'
import cuadrados from '../img/cuadrados.svg'
export function QuienSomos () {
    return(
        <section className='container-all' id="quienes-somos">
            <div className='text'>
                <h2 className='subtitle'>
                ¿Quiénes somos?
                </h2>
                <p className='parag'>
                Somos equipo de desarrollo de software independiente
                latinoamericano, dedicado a brindar los mejores servicios a
                nuestros clientes. Desde la creación del sitio web como la
                puesta en producción final.
                </p>
                <div className='image'>
                    <img
                    src={rect}
                    className='rect'/>
                </div>
               
                <img src={cuadrados}
                className='cuadrados'/>
            </div>
        </section>
    )
}