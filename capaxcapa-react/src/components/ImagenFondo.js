import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './pages/Inicio/Inicio.css';

import Logo from '../media/Images/Icons/Logo-CapaXCapa1.png';

function ImagenFondo(props){
    return (
        // default==> indicators=false autoplay=true arrows=true
        <Slide indicators={false} autoplay={false} arrows={false} infinite={false}> 
            
            <div className="each-slide-effect">                                                         {/* Slide 1 */}
                <div style={{ 'backgroundImage': `url(${props.imagen})` }}>                               {/* Foto de la slide */}
                    <span>
                        <div className="slideshow-grid">                                                {/* Mitad izquierda, texto y boton */}
                            <div className="slideshow-container">                                       {/* Mitad izquierda, texto y boton */}
                                <div style={{ 'height': `554px` }}></div>                               {/* Espacio en blanco */}
                                <div style={{color: props.colorTexto, fontSize: '11.018vw', width: '92.847vw', height: '190px', alignItems: 'center', textAlign: 'center', marginTop: '0px'}}>{props.titulo}</div>
                            </div>
                            <div className="slideshow-container">                                       {/* Mitad derecha, logo y nombre CxC */}
                                <div className="slideshow-grid-logo">                                   {/* Cuadro que encierra logo y nombre */}
                                    <img src={Logo} className="slideshow-logo"/>
                                    <div style={{ 'width': `12.847vw` }}>                                  {/* Línea del nombre (mismo tamaño que logo) */}
                                        <span className="text-yellow">Capa</span>
                                        <span className="text-green">X</span>
                                        <span className="text-yellow">Capa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

        </Slide>
    );

};

export default ImagenFondo;