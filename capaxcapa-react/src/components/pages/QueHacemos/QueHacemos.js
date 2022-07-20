import ImagenFondo from '../../ImagenFondo.js'
import fondoSlide from '../../../media/Images/Inicio-slide-3.jpg'
import diagram from '../../../media/Images/Diagrama_Que_Hacemos.jpg'
import './QueHacemos.css'
function QueHacemos() {
    return (
        <div>
            <ImagenFondo imagen={fondoSlide} titulo={"¿Qué hacemos?"} />

            <div>
                <div className='diagram-div'>
                    <img  className='imagen-div' src={diagram}/>
                </div>
            </div>
            {/*
                <section className = "flex-containerCajaProceso">
                <div className = "cajaProceso"> 
                    <span> Aqui te mostramos nuestro proceso de produccion </span>
                </div>
                </section>
            */}

        </div>
    )
}

export default QueHacemos