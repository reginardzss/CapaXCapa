import React from 'react';
// Importación de imágenes jpg y svg
import FotoSlide2 from '../../../media/Images/Inicio-slide-2.jpg';
import Destellos from '../../../media/Images/Icons/elementos-gráficos/Destellos.svg'
import Mundo from '../../../media/Images/Icons/elementos-gráficos/Mundo.svg'
import CaritaFeliz from '../../../media/Images/Icons/elementos-gráficos/Carita-Feliz.svg'
import Lapiz from '../../../media/Images/Icons/elementos-gráficos/Lápiz.svg'
import Libros from '../../../media/Images/Icons/elementos-gráficos/Libros.svg'
import Group132 from '../../../media/Images/Icons/Group-132.svg'
// Importación de estilos
import '../Inicio/Inicio.css'
import '../../stylesCompartidas/Linea.css'
import './QuienesSomos.css'
// Importación de componentes
import ImagenFondo from '../../ImagenFondo';
import Button from '../../Button'
// Importación de íconos
import {GrLinkedinOption} from 'react-icons/gr'

function QuienesSomos(){
    return (
        <div className='font-face-cerebri-sans-pro'>
            {/* Imagen inicial de fondo */}
            <ImagenFondo imagen={FotoSlide2} titulo={"¿Quiénes somos?"} colorTexto={'#D68B67'}/>
            {/* Primer texto. Está centrado. */}
            <section className='intro-QuienesSomos texto-QuienesSomosPrimParte' style={{width: '87.638vw', height: '222px', margin: '76px 6.18vw 95px 6.18vw'}}>
                Somos un grupo de <span style={{color: '#BF985E'}}>jóvenes emprendedores</span> distinguido por la variedad de habilidades personales que nos hace complementarnos el uno al otro creando un equipo.
            </section>
            {/* Valores */}
            <section className='container'>
                {/* Imágenes */}
                <div style={{height: '100px', display: 'flex'}}>
                    <img src={Destellos} className='Iconos-y-Valores' style={{marginRight: '77.45vw', height: '5.488vw', width: '5.486vw', top: '11px', position: 'relative', right: '0.8vw'}}/>
                    <img src={Mundo} className='Iconos-y-Valores' style={{bottom: '14px', height: '5.972vw', width: '5.972vw'}}/>
                </div>
                {/* Valores encerrados */}
                <div className='row justify-content-evenly Iconos-y-Valores texto-QuienesSomosPrimParte' style={{width: '87.638vw', alignItems: 'center', marginLeft: '1.2vw', bottom: '52px', zIndex: '-1'}}>
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
                <div style={{height: '368px', width: '31.597vw', float: 'left', marginTop: '166.22px', lineHeight: '40.49px'}}>
                    <span style={{color: '#D68B67', fontSize: '2.777vw', lineHeight: '47.64px'}}>Motivar e inspirar</span> a estudiantes de educación básica a alcanzar su <span style={{color: '#D68B67'}}>máximo potencial académico</span> mediante el armado de modelos tridimensionales de cartón para aumentar la probabilidad de elección de estudiantes a continuar estudiando.
                    <img src={CaritaFeliz} style={{height: '3.263vw', width: '3.263vw', position: 'relative', marginLeft: '23.916vw', bottom: '458.75px', transform: 'rotate(11.22deg)'}}/>
                </div>
                {/* Imagen de enmedio con las manos y palabras de "Misión" y "Valores"*/}
                {/* Anteriormente se había utilizado la imagen svg de las manos y las palabras estaban hechas con texto y cada letra se rotaba y se ponía en su posición.
                Ahora esto se reemplazó por un recurso gráfico, que es una imagen svg que contiene todo. Esto con el objetivo de que este contenido pueda ser responsivo más fácilmente.*/}
                {/* Código que se uso anteriromente */}
                {/* <div className='Texto-Curvo' style={{float: 'left', display: 'flex', marginLeft: '10.194vw', width: '25.82vw'}}>
                    <img src={Group102} style={{height: '355.72px', width: '14.513vw', marginTop: '155.21px'}}/>
                    <span style={{transform: 'rotate(-68.82deg)', position: 'relative', right: '2.012vw', bottom: '80px'}}>M</span><span style={{transform: 'rotate(-54.11deg)', position: 'relative', right: '6vw', bottom: '60px'}}>i</span><span style={{transform: 'rotate(-44.72deg)', position: 'relative', right: '8.7vw', bottom: '50px'}}>s</span><span style={{transform: 'rotate(-35.23deg)', position: 'relative', right: '11.5vw', bottom: '44px'}}>i</span><span style={{transform: 'rotate(-24.23deg)', position: 'relative', right: '15vw', bottom: '40px'}}>ó</span><span style={{transform: 'rotate(-9.16deg)', position: 'relative', right: '20vw', bottom: '38px'}}>n</span>
                    <span style={{transform: 'rotate(26.31deg)', position: 'relative', right: '38vw', top: '550px'}}>V</span><span style={{transform: 'rotate(8.82deg)', position: 'relative', right: '32.5vw', top: '590px'}}>a</span><span style={{transform: 'rotate(-2.44deg)', position: 'relative', right: '28.5vw', top: '595px'}}>l</span><span style={{transform: 'rotate(-14.56deg)', position: 'relative', right: '24vw', top: '580px'}}>o</span><span style={{transform: 'rotate(-28.41deg)', position: 'relative', right: '19.5vw', top: '540px'}}>r</span><span style={{transform: 'rotate(-42.36deg)', position: 'relative', right: '15.8vw', top: '480px'}}>e</span><span style={{transform: 'rotate(-57.65deg)', position: 'relative', right: '13vw', top: '390px'}}>s</span>
                </div> */}
                {/* Código actual */}
                <img src={Group132} style={{float: 'left', display: 'flex', width: '34.82vw', height: '48.278vw'}}></img>
                {/* Lista de valores */}
                <div style={{float: 'right', marginRight: '4.305vw', marginTop: '180.22px'}}>
                    <ul style={{height: '368px', width: '25.555vw', lineHeight: '80px'}}>
                        <li><span>Pasión</span></li>
                        <li><span>Trabajo en equipo</span></li>
                        <li><span>Honestidad</span></li>
                        <li><span>Innovación</span></li>
                        <li><span>Impacto Social</span></li>
                    </ul>
                    <img src={Lapiz} style={{height: '5.659vw', width: '2.361vw', position: 'relative', marginLeft: '15.603vw', bottom: '150.08px', transform: 'rotate(15.99deg)'}}></img>
                </div>
            </section>
            {/* Línea divisioria */}
            <div className='linea'></div>
            {/* Sección donde se muestra la info de los integrantes de Capa X Capa */}
            <section style={{marginTop: '44px'}}>
                <h1 style={{fontSize: '5.555vw', height: '192px', width: '57.986vw', color: '#0F223C', textAlign: 'center', margin: 'auto'}}>Conoce al equipo Capa X Capa</h1>
                <img src={Libros} style={{height: '6.915vw', width: '5.137vw', position: 'relative', right: '21.8vw', bottom: '106px'}}></img>
                <img src={CaritaFeliz} style={{height: '3.263vw', width: '3.263vw', position: 'relative', left: '17.5vw', bottom: '96px', transform: 'rotate(11.22deg)'}}/>
                <div id='div-integrantes-CapaXCapa'>
                    <article className='info-integrantes-CapaXCapa'>
                        <img src={require("../../../media/Images/Integrantes-CapaXCapa/León-Nieto.JPG")} className='integrantes-CapaXCapa'></img>
                        <h2 className='nombres-integrantes-CapaXCapa'>León Carlos Nieto Gómora</h2>
                        <div className='carrera-linkedin'>
                            <h3 className='carrera'>Ingeniero Mecatrónico</h3>
                            <Button onClick={event => window.location.href='https://www.linkedin.com/in/le%C3%B3n-carlos-nieto-g%C3%B3mora-775112177/'}> <GrLinkedinOption className='linkedin' color='#FFFFFF'/> </Button>
                        </div>
                    </article>
                    <article className='info-integrantes-CapaXCapa'>
                        <img src={require("../../../media/Images/Integrantes-CapaXCapa/Diego-Ramírez.JPG")} className='integrantes-CapaXCapa'></img>
                        <h2 className='nombres-integrantes-CapaXCapa'>Diego Antonio Ramírez Rivera</h2>
                        <div className='carrera-linkedin'>
                            <h3 className='carrera'>Ingeniero Mecatrónico</h3>
                            <Button onClick={event => window.location.href='http://www.linkedin.com/in/Diego-A-Ramirez-R'}> <GrLinkedinOption className='linkedin' color='#FFFFFF'/> </Button>
                        </div>
                    </article>
                    <article className='info-integrantes-CapaXCapa'>
                        <img src={require("../../../media/Images/Integrantes-CapaXCapa/Juan-Eraña.JPG")} className='integrantes-CapaXCapa'></img>
                        <h2 className='nombres-integrantes-CapaXCapa'>Juan Pablo Eraña Berridi</h2>
                        <div className='carrera-linkedin'>
                            <h3 className='carrera'>Ingeniero Químico</h3>
                            <Button onClick={event => window.location.href='http://www.linkedin.com/in/Juan-Pablo-Era%C3%B1a-Berridi'}> <GrLinkedinOption className='linkedin' color='#FFFFFF'/> </Button>
                        </div>
                    </article>
                    <article className='info-integrantes-CapaXCapa'>
                        <img src={require("../../../media/Images/Integrantes-CapaXCapa/Patricio-Borbolla.JPG")} className='integrantes-CapaXCapa'></img>
                        <h2 className='nombres-integrantes-CapaXCapa'>Patricio Borbolla Burillo</h2>
                        <div className='carrera-linkedin'>
                            <h3 className='carrera'>Ingeniero Mecatrónico</h3>
                            <Button onClick={event => window.location.href='https://www.linkedin.com/company/wix-com'}> <GrLinkedinOption className='linkedin' color='#FFFFFF'/> </Button>
                        </div>
                    </article>
                    <article className='info-integrantes-CapaXCapa'>
                        <img src={require("../../../media/Images/Integrantes-CapaXCapa/Silvana-Barajas.jpeg")} className='integrantes-CapaXCapa'></img>
                        <h2 className='nombres-integrantes-CapaXCapa'>Silvana Barajas García</h2>
                        <div className='carrera-linkedin'>
                            <h3 className='carrera'>Licenciada en Estrategia y Transformación de Negocios</h3>
                            <Button onClick={event => window.location.href='https://www.linkedin.com/in/silvanabarajas00'}> <GrLinkedinOption className='linkedin' color='#FFFFFF'/> </Button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default QuienesSomos