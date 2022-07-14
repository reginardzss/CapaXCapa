import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Inicio.css';

import FotoSlide1 from '../../../media/Images/Inicio-slide-1.jpg';
import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';
import FotoSlide3 from '../../../media/Images/Inicio-slide-3.jpg';
import FotoSlide4 from '../../../media/Images/Inicio-slide-4.jpg';

const Galeria = () => {
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide1})` }}>
                    <span>
                        <div className="slideshow-container">
                            <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                            <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                        </div>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide2})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide3})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide4})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );

};

export default Galeria;