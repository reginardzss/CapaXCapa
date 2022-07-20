import ImagenFondo from '../../ImagenFondo.js'
import fondoSlide from '../../../media/Images/Inicio-slide-3.jpg'
import './QueHacemos.css'
function QueHacemos(){
    return (
        <div>
            <ImagenFondo imagen={fondoSlide} titulo={"¿Qué hacemos?"}/>
            <h1>¿Qué Hacemos?</h1>

            <section className = "flex-containerCajaProceso">
                <div className = "cajaProceso"> 
                    <span> Aqui te mostramos nuestro proceso de produccion </span>
                </div>
            </section>
        </div>  
    )
}

export default QueHacemos