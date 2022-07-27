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
                    <img  className='diagram' src={diagram}/>
                </div>
            </div>
            

        </div>
    )
}

export default QueHacemos