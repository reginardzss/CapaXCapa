import React from 'react';

import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';

import '../Inicio/Inicio.css'
import './QuienesSomos.css'
import ImagenFondo from '../../ImagenFondo';

function QuienesSomos(){
    return (
        <div className='font-face-cerebri-sans-pro texto-QuienesSomos'>
            <ImagenFondo imagen={FotoSlide2} titulo={"¿Quiénes somos?"}/>
            <section className='intro-QuienesSomos' style={{width: '1262px', height: '222px', margin: '76px 89px 57px 89px', lineHeight: '58.75px'}}>
                Somos un grupo de <span style={{color: '#BF985E'}}>jóvenes emprendedores</span> distinguido por la variedad de habilidades personales que nos hace complementarnos el uno al otro creando un equipo.
            </section>
            <section className='container'>
                <div style={{height: '100px', display: 'flex'}}>
                    <img src={require('../../../media/Images/Icons/Estrellitas.png')} className='Iconos-y-Valores' style={{marginRight: '1115px', height: '79.01px', width: '79px', top: '11px', marginLeft: '15px'}}/>
                    <img src={require('../../../media/Images/Icons/Mundo.png')} className='Iconos-y-Valores' style={{bottom: '14px', height: '86px'}}/>
                </div>
                <div className='row justify-content-evenly Iconos-y-Valores' style={{width: '1240px', alignItems: 'center', marginLeft: '48px', bottom: '52px', zIndex: '-1'}}>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col-1 Valores' style={{width: '278px', marginRight: '62px'}}>Proactivo</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '404px', marginRight: '62px'}}>Comprometido</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '456px', paddingLeft: '29px', paddingRight: '29px'}}>Multidisciplinario</div>
                </div>
            </section>
            <section className='intro-QuienesSomos' style={{width: '1265px',  height: '121px', marginTop: '61px'}}>y  motivado por crear una iniciativa única para abordar el problema educativo en México.</section>
        </div>
    )
}


export default QuienesSomos