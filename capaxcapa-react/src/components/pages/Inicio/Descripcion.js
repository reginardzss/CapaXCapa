import React from 'react';
import './Inicio.css';

import Foto from '../../../media/Images/Inicio-slide-5.jpg';
import Lapiz from '../../../media/Images/Icons/Lapiz.svg';
import Libros from '../../../media/Images/Icons/Libros.svg';


function Descripcion(){
    return (
        <div>
            <div className='text-main'>
                <span> 
                    Cada ciclo escolar, más de 150 mil alumnos de educación básica no continúan con sus estudios por 
                </span>
                <span className="text-red" style={{ 'marginLeft': `18px` }}> 
                    falta de motivación
                </span>
            </div>
            <div className="linea"></div>
            <div className="slideshow-grid">
                <div className="description-grid" style={{ 'marginLeft': '5vw', 'marginBottom' : `4vh`}}>
                    <div className="description-parragraph">
                        <div className='circle'>
                        </div>
                        <span>
                            Una de las causas más comunes de abandono escolar en México es la
                        </span>
                        <span className="text-desc-bold" style={{ 'marginRight': `1%` }}> 
                            falta de motivación
                        </span>
                        <span>
                            debido a que los métodos de enseñanza actuales no mantienen el interés de los estudiantes.
                        </span>
                    </div>
                    <div className="description-parragraph">
                    <div className='circle'>
                        </div>
                        <span>
                        El abandono escolar desencadena hecho de que los estudiantes abandonen la escuela tiene un impacto en sus
                        </span>
                        <span className="text-desc-bold"> 
                            vidas personales
                        </span>
                        <span>
                            , así como en su 
                        </span>
                        <span className="text-desc-bold"> 
                            calidad de vida
                        </span>
                        <span style={{ 'marginRight': `1%` }}>
                            , la 
                        </span>
                        <span className="text-desc-bold-red" style={{ 'marginRight': `1%` }}>
                            toma de oportunidades
                        </span>
                        <span>
                            y la 
                        </span>
                        <span className="text-desc-bold-red">
                            salud mental
                        </span>
                        <span>
                            .
                        </span>
                    </div>
                    <div className="description-parragraph">
                    <div className='circle'>
                        </div>
                        <span>
                            Sin mencionar que 
                        </span>
                        <span className="text-desc-bold"> 
                            aumenta la desigualdad social
                        </span>
                        <span>
                            , lo que representa una enorme pérdida de potencial humano.
                        </span>
                    </div>
                </div>
                <div className='imagen-descp' style={{ 'backgroundImage': `url(${Foto})` }}>
                    <div>
                        <img src={Lapiz} className="imagen-lapiz"/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="linea"></div>
            <div className="description-bottom-grid">
                <div>
                    <img src={Libros} className="imagen-libro"/>
                </div>
                <div className="description-bottom" style={{ 'width': `26vw` }}>
                    <div style={{ 'width': `6vw`, 'textAlign' : `right` }}>
                        <span className="text-red" style={{ 'fontSize': `4.861vw`, 'fontWeight': `900`, 'lineHeight': `5.694vw`}}>
                            7
                        </span>
                    </div>
                    <div style={{ 'width': `19vw`, 'textAlign' : `left`, 'paddingRight' : `2vw`}}>
                        <span> meses desde la creación del proyecto </span>
                    </div>
                </div>
                <div className="description-bottom" style={{ 'width': `26vw` }}>
                    <div style={{ 'width': `6vw`, 'textAlign' : `right` }}>
                        <span className="text-green" style={{ 'fontSize': `4.861vw`, 'fontWeight': `900`, 'lineHeight': `5.694vw`}}>
                            4
                        </span>
                    </div>
                    <div style={{ 'width': `19vw`, 'textAlign' : `left`, 'paddingRight' : `2vw`}}>
                        <span> colaboraciones </span>
                    </div>
                </div>
                <div className="description-bottom" style={{ 'width': `26vw` }}>
                    <div style={{ 'width': `9vw`, 'textAlign' : `right` }}>
                        <span className="text-orange" style={{ 'fontSize': `4.861vw`, 'fontWeight': `900`, 'lineHeight': `5.694vw`}}>
                            310
                        </span>
                    </div>
                    <div style={{ 'width': `16vw`, 'textAlign' : `left`, 'paddingRight' : `1vw`}}>
                        <span> estudiantes beneficiados </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Descripcion