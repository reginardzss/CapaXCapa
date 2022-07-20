import React from 'react';

import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';

import '../Inicio/Inicio.css'
import './QuienesSomos.css'
import ImagenFondo from '../../ImagenFondo';

function QuienesSomos(){
    return (
        <div className='font-face-cerebri-sans-pro texto-QuienesSomos'>
            <ImagenFondo imagen={FotoSlide2} titulo={"¿Quiénes somos?"}/>
            <section className='intro-QuienesSomos' style={{width: '87.638vw', height: '222px', margin: '76px 6.18vw 95px 6.18vw'}}>
                Somos un grupo de <span style={{color: '#BF985E'}}>jóvenes emprendedores</span> distinguido por la variedad de habilidades personales que nos hace complementarnos el uno al otro creando un equipo.
            </section>
            <section className='container'>
                <div style={{height: '100px', display: 'flex'}}>
                    <img src={require('../../../media/Images/Icons/Estrellitas.png')} className='Iconos-y-Valores' style={{marginRight: '78.75vw', height: '5.488vw', width: '5.486vw', top: '11px', marginLeft: '1.6vw'}}/>
                    <img src={require('../../../media/Images/Icons/Mundo.png')} className='Iconos-y-Valores' style={{bottom: '14px', height: '5.972vw', width: '5.972vw'}}/>
                </div>
                <div className='row justify-content-evenly Iconos-y-Valores' style={{width: '87.638vw', alignItems: 'center', marginLeft: '3.58vw', bottom: '52px', zIndex: '-1'}}>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col-1 Valores' style={{width: '19.305vw', marginRight: '4.305vw'}}>Proactivo</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '28.055vw', marginRight: '4.305vw'}}>Comprometido</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '31.666vw', paddingLeft: '2.013vw', paddingRight: '2.013vw'}}>Multidisciplinario</div>
                </div>
            </section>
            <section className='intro-QuienesSomos' style={{width: '87.847vw', height: '121px', marginTop: '61px', marginBottom: '72.78px'}}>y  motivado por crear una iniciativa única para abordar el problema educativo en México.</section>
            <section className='container' style={{height: '695.21px', width: '89.236vw'}}>
                <div>
                    <span style={{color: '#D68B67', fontSize: '2.777vw'}}>Motivar e inspirar</span> a estudiantes de educación básica a alcanzar su máximo potencial académico mediante el armado de modelos tridimensionales de cartón para aumentar la probabilidad de elección de estudiantes a continuar estudiando.
                </div>
            </section>
        </div>
    )
}


export default QuienesSomos