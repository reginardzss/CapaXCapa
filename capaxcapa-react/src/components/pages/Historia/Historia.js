import './Historia.css';
import ImagenFondo from '../../ImagenFondo.js'
import Nacimiento from './Nacimiento.js';
import Logros from './Logros.js';
import ImagenHeader from '../../../media/Images/Historia-Header.jpg'

const Historia = () => {
    return (
        <div>
            <ImagenFondo imagen={ImagenHeader} titulo={"Nuestra Historia"} />
            <div className='font-face-cerebri-sans-book'>
                <h1>Nuestra Historia</h1>
                <Nacimiento />
                <Logros />
            </div>
        </div>
    )
}

export default Historia