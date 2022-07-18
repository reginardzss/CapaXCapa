import React from 'react';
import { Link } from "react-router-dom"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Inicio.css';
import Button from './BotonInicio.js';

import Logo from '../../../media/Images/Icons/Logo-CapaXCapa1.png';
import FotoSlide1 from '../../../media/Images/Inicio-slide-1.jpg';
import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';
import FotoSlide3 from '../../../media/Images/Inicio-slide-3.jpg';
import FotoSlide4 from '../../../media/Images/Inicio-slide-4.jpg';


const Galeria = () => {
    return (
        // dafault==> indicators=false autoplay=true arrows=true
        <Slide indicators={true} autoplay={true}> 
            
            <div className="each-slide-effect">                                                         {/* Slide 1 */}
                <div style={{ 'backgroundImage': `url(${FotoSlide1})` }}>                               {/* Foto de la slide */}
                    <span>
                        <div className="slideshow-grid">                                                {/* Dividir en dos partes lo que va en la foto */}
                            <div className="slideshow-container">                                       {/* Mitad izquierda, texto y boton */}
                                <div style={{ 'height': `120px` }}></div>                               {/* Espacio en blanco */}
                                <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                                <div style={{ 'height': `60px` }}></div>                                {/* Espacio en blanco */}
                                <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                                <div style={{ 'height': `30px` }}></div>                                {/* Espacio en blanco */}
                                <Link to={"/nuestra-historia"}> <Button buttonStyle="btn--yellow"> Nuestra Historia </Button> </Link>
                            </div>
                            <div className="slideshow-container">                                       {/* Mitad derecha, logo y nombre CxC */}
                                <div className="slideshow-grid-logo">                                   {/* Cuadro que encierra logo y nombre */}
                                    <img src={Logo} className="slideshow-logo"/>
                                    <div style={{ 'width': `185px` }}>                                  {/* Línea del nombre (mismo tamaño que logo) */}
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

            <div className="each-slide-effect">                                                         {/* Slide 2 */}
                <div style={{ 'backgroundImage': `url(${FotoSlide2})` }}>                               {/* Foto de la slide */}
                    <span>
                        <div className="slideshow-grid">                                                {/* Mitad izquierda, texto y boton */}
                            <div className="slideshow-container">                                       {/* Mitad izquierda, texto y boton */}
                                <div style={{ 'height': `120px` }}></div>                               {/* Espacio en blanco */}
                                <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                                <div style={{ 'height': `60px` }}></div>                                {/* Espacio en blanco */}
                                <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                                <div style={{ 'height': `30px` }}></div>                                {/* Espacio en blanco */}
                                <Link to={"/quienes-somos"}> <Button buttonStyle="btn--red"> ¿Quiénes somos? </Button> </Link>
                            </div>
                            <div className="slideshow-container">                                       {/* Mitad derecha, logo y nombre CxC */}
                                <div className="slideshow-grid-logo">                                   {/* Cuadro que encierra logo y nombre */}
                                    <img src={Logo} className="slideshow-logo"/>
                                    <div style={{ 'width': `185px` }}>                                  {/* Línea del nombre (mismo tamaño que logo) */}
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

            <div className="each-slide-effect">                                                         {/* Slide 3 */}
                <div style={{ 'backgroundImage': `url(${FotoSlide3})` }}>                               {/* Foto de la slide */}
                    <span>
                        <div className="slideshow-grid">                                                {/* Mitad izquierda, texto y boton */}
                            <div className="slideshow-container">                                       {/* Mitad izquierda, texto y boton */}
                                <div style={{ 'height': `120px` }}></div>                               {/* Espacio en blanco */}
                                <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                                <div style={{ 'height': `60px` }}></div>                                {/* Espacio en blanco */}
                                <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                                <div style={{ 'height': `30px` }}></div>                                {/* Espacio en blanco */}
                                <Link to={"/que-hacemos"}> <Button buttonStyle="btn--green"> ¿Qué hacemos? </Button> </Link>
                            </div>
                            <div className="slideshow-container">                                       {/* Mitad derecha, logo y nombre CxC */}
                                <div className="slideshow-grid-logo">                                   {/* Cuadro que encierra logo y nombre */}
                                    <img src={Logo} className="slideshow-logo"/>
                                    <div style={{ 'width': `185px` }}>                                  {/* Línea del nombre (mismo tamaño que logo) */}
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

            <div className="each-slide-effect">                                                         {/* Slide 4 */}
                <div style={{ 'backgroundImage': `url(${FotoSlide4})` }}>                               {/* Foto de la slide */}
                    <span>
                        <div className="slideshow-grid">                                                {/* Mitad izquierda, texto y boton */}
                            <div className="slideshow-container">                                       {/* Mitad izquierda, texto y boton */}
                                <div style={{ 'height': `120px` }}></div>                               {/* Espacio en blanco */}
                                <div>"Si no estas dispuesto a aprender, nadie te puede ayudar</div>
                                <div style={{ 'height': `60px` }}></div>                                {/* Espacio en blanco */}
                                <div>Si estas dispuesto a aprender, nadie te puede parar"</div>
                                <div style={{ 'height': `30px` }}></div>                                {/* Espacio en blanco */}
                                <Link to={"/impacto"}> <Button buttonStyle="btn--orange"> Impacto generado </Button> </Link>
                            </div>
                            <div className="slideshow-container">                                       {/* Mitad derecha, logo y nombre CxC */}
                                <div className="slideshow-grid-logo">                                   {/* Cuadro que encierra logo y nombre */}
                                    <img src={Logo} className="slideshow-logo"/>
                                    <div style={{ 'width': `185px` }}>                                  {/* Línea del nombre (mismo tamaño que logo) */}
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

export default Galeria;