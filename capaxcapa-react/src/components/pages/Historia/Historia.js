import './Historia.css';
import ImagenFondo from '../../ImagenFondo.js'
import Nacimiento from './Nacimiento.js';
import Logros from './Logros.js';
//import ImagenHeader from '../../../media/Images/Historia-Header.jpg'
import ImagenHeader from '../../../media/Images/Historia-Header.jpg'

const Historia = () => {
    return (
        <div>
            <ImagenFondo imagen={ImagenHeader} titulo={"Nuestra Historia"} colorTexto={'#D68B67'}/>
            <div className='font-face-cerebri-sans-book'>
                <Nacimiento />
                <div className="linea" style={{marginBottom: '5%'}}/>
                <Logros />
            </div>
        </div>
    )
}

export default Historia