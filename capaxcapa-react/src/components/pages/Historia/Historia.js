import './Historia.css';
import Nacimiento from './Nacimiento.js';
import Logros from './Logros.js';

const Historia = () => {
    return (
        <div className='font-face-cerebri-sans-book'>
            <h1>Nuestra Historia</h1>
            <Nacimiento />
            <Logros />
        </div>
    )
}

export default Historia