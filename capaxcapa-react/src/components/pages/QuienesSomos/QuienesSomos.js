import React from 'react';

import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';
import Destellos from '../../../media/Images/Icons/elementos-gráficos/Destellos.svg'
import Mundo from '../../../media/Images/Icons/elementos-gráficos/Mundo.svg'
import Group102 from '../../../media/Images/Icons/elementos-gráficos/Group-102.svg'
import CaritaFeliz from '../../../media/Images/Icons/elementos-gráficos/Carita-Feliz.svg'
import Lapiz from '../../../media/Images/Icons/elementos-gráficos/Lápiz.svg'
import Libros from '../../../media/Images/Icons/elementos-gráficos/Libros.svg'

import '../Inicio/Inicio.css'
import './QuienesSomos.css'
import ImagenFondo from '../../ImagenFondo';

function QuienesSomos(){
    return (
        <div className='font-face-cerebri-sans-pro'>
            <ImagenFondo imagen={FotoSlide2} titulo={"¿Quiénes somos?"}/>
            {/* Primer texto. Está centrado. */}
            <section className='intro-QuienesSomos texto-QuienesSomosPrimParte' style={{width: '87.638vw', height: '222px', margin: '76px 6.18vw 95px 6.18vw'}}>
                Somos un grupo de <span style={{color: '#BF985E'}}>jóvenes emprendedores</span> distinguido por la variedad de habilidades personales que nos hace complementarnos el uno al otro creando un equipo.
            </section>
            {/* Valores */}
            <section className='container'>
                {/* Imágenes */}
                <div style={{height: '100px', display: 'flex'}}>
                    <img src={Destellos} className='Iconos-y-Valores' style={{marginRight: '78.75vw', height: '5.488vw', width: '5.486vw', top: '11px', marginLeft: '1.6vw'}}/>
                    <img src={Mundo} className='Iconos-y-Valores' style={{bottom: '14px', height: '5.972vw', width: '5.972vw'}}/>
                </div>
                {/* Valores encerrados */}
                <div className='row justify-content-evenly Iconos-y-Valores texto-QuienesSomosPrimParte' style={{width: '87.638vw', alignItems: 'center', marginLeft: '3.58vw', bottom: '52px', zIndex: '-1'}}>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col-1 Valores' style={{width: '19.305vw', marginRight: '4.305vw'}}>Proactivo</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '28.055vw', marginRight: '4.305vw'}}>Comprometido</div>
                    <div className='border border-danger rounded-pill border-4 rounded-5 col Valores' style={{width: '31.666vw', paddingLeft: '2.013vw', paddingRight: '2.013vw'}}>Multidisciplinario</div>
                </div>
            </section>
            {/* Segundo texto. Está centrado. */}
            <section className='intro-QuienesSomos texto-QuienesSomosPrimParte' style={{width: '87.847vw', height: '121px', marginTop: '61px', marginBottom: '72.78px'}}>y  motivado por crear una iniciativa única para abordar el problema educativo en México.</section>
            {/* Texto con imagen y una lista. */}
            <section className='container texto-QuienesSomosSegParte' style={{height: '695.21px', width: '89.236vw', display: 'flex'}}>
                {/* Texto */}
                <div style={{height: '368px', width: '31.597vw', float: 'left', marginTop: '166.22px'}}>
                    <span style={{color: '#D68B67', fontSize: '2.777vw'}}>Motivar e inspirar</span> a estudiantes de educación básica a alcanzar su <span style={{color: '#D68B67'}}>máximo potencial académico</span> mediante el armado de modelos tridimensionales de cartón para aumentar la probabilidad de elección de estudiantes a continuar estudiando.
                    <img src={CaritaFeliz} style={{height: '3.263vw', width: '3.263vw', position: 'relative', marginLeft: '23.916vw', bottom: '587.75px', transform: 'rotate(11.22deg)'}}/>
                </div>
                <div className='Texto-Curvo' style={{float: 'left', display: 'flex', marginLeft: '10.194vw', width: '25.82vw'}}>
                    <img src={Group102} style={{height: '355.72px', width: '14.513vw', marginTop: '155.21px'}}/>
                    <span style={{transform: 'rotate(-68.82deg)', position: 'relative', right: '2.012vw', bottom: '80px'}}>M</span><span style={{transform: 'rotate(-54.11deg)', position: 'relative', right: '6vw', bottom: '60px'}}>i</span><span style={{transform: 'rotate(-44.72deg)', position: 'relative', right: '8.7vw', bottom: '50px'}}>s</span><span style={{transform: 'rotate(-35.23deg)', position: 'relative', right: '11.5vw', bottom: '44px'}}>i</span><span style={{transform: 'rotate(-24.23deg)', position: 'relative', right: '15vw', bottom: '40px'}}>ó</span><span style={{transform: 'rotate(-9.16deg)', position: 'relative', right: '20vw', bottom: '38px'}}>n</span>
                    <span style={{transform: 'rotate(26.31deg)', position: 'relative', right: '38vw', top: '550px'}}>V</span><span style={{transform: 'rotate(8.82deg)', position: 'relative', right: '32.5vw', top: '590px'}}>a</span><span style={{transform: 'rotate(-2.44deg)', position: 'relative', right: '28.5vw', top: '595px'}}>l</span><span style={{transform: 'rotate(-14.56deg)', position: 'relative', right: '24vw', top: '580px'}}>o</span><span style={{transform: 'rotate(-28.41deg)', position: 'relative', right: '19.5vw', top: '540px'}}>r</span><span style={{transform: 'rotate(-42.36deg)', position: 'relative', right: '15.8vw', top: '480px'}}>e</span><span style={{transform: 'rotate(-57.65deg)', position: 'relative', right: '13vw', top: '390px'}}>s</span>
                </div>
                <div style={{float: 'right', marginRight: '4.305vw', marginTop: '180.22px'}}>
                    <ul style={{height: '368px', width: '25.555vw'}}>
                        <li><span>Pasión</span></li>
                        <li><span>Trabajo en equipo</span></li>
                        <li><span>Honestidad</span></li>
                        <li><span>Innovación</span></li>
                        <li><span>Impacto Social</span></li>
                    </ul>
                    <img src={Lapiz} style={{height: '5.659vw', width: '2.361vw', position: 'relative', marginLeft: '15.603vw', bottom: '250.08px', transform: 'rotate(35.99deg)'}}></img>
                </div>
            </section>
            <div className='linea'></div>
            <section style={{marginTop: '44px'}}>
                <h1 style={{fontSize: '5.555vw', height: '192px', width: '57.986vw', color: '#0F223C', textAlign: 'center', margin: 'auto'}}>Conoce al equipo Capa X Capa</h1>
                <img src={Libros} style={{height: '6.915vw', width: '5.137vw', position: 'relative', right: '21.8vw', bottom: '106px'}}></img>
                <img src={CaritaFeliz} style={{height: '3.263vw', width: '3.263vw', position: 'relative', left: '17.5vw', bottom: '96px', transform: 'rotate(11.22deg)'}}/>
            </section>
        </div>
    )
}

export default QuienesSomos