import React from 'react';
import { Link } from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Inicio.css';
import Button from './BotonInicio.js';

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
                            <div style={{ 'height': `120px` }}></div>
                            <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                            <div style={{ 'height': `60px` }}></div>
                            <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                            <div style={{ 'height': `60px` }}></div>
                            <Link to={"/nosotros"}> <Button buttonStyle="btn--yellow"> Nuestra Historia </Button> </Link>
                        </div>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide2})` }}>
                    <span>
                        <div className="slideshow-container">
                            <div style={{ 'height': `120px` }}></div>
                            <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                            <div style={{ 'height': `60px` }}></div>
                            <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                            <div style={{ 'height': `60px` }}></div>
                            <Link to={"/nosotros"}> <Button buttonStyle="btn--red"> Nuestra Historia </Button> </Link>
                        </div>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide3})` }}>
                    <span>
                        <div className="slideshow-container">
                            <div style={{ 'height': `120px` }}></div>
                            <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                            <div style={{ 'height': `60px` }}></div>
                            <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                            <div style={{ 'height': `60px` }}></div>
                            <Link to={"/nosotros"}> <Button buttonStyle="btn--green"> Nuestra Historia </Button> </Link>
                        </div>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${FotoSlide4})` }}>
                    <span>
                        <div className="slideshow-container">
                            <div style={{ 'height': `120px` }}></div>
                            <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                            <div style={{ 'height': `60px` }}></div>
                            <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                            <div style={{ 'height': `60px` }}></div>
                            <Link to={"/nosotros"}> <Button buttonStyle="btn--orange"> Nuestra Historia </Button> </Link>
                        </div>
                    </span>
                </div>
            </div>
        </Slide>
    );

};

export default Galeria;