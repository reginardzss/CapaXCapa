import './Nosotros.css';
import ImagenHeader from '../../../media/Images/Nosotros-Header.png'
import ImagenFondo from '../../ImagenFondo.js'
import { FiMapPin, FiStar } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';
import { BiPackage } from 'react-icons/bi';

const Nosotros = () => {
    return (
        <div>
            <ImagenFondo imagen={ImagenHeader} titulo={"Nosotros"} />
            <div className='font-face-cerebri-sans-book'>
                
                <div>
                    {/* Código para dibujar todas las lineas horizontales y verticales */}
                    {/* <div style={{position:'absolute'}}>
                        <div className="linea-vertical" style={{top: '1.5vw'}}/>
                        <div className="linea-horizontal" style={{left: '45.5vw', top: '1.5vw', width: '4vw'}}/>
                        <div className="linea-horizontal" style={{left: '50vw', top: '19.5vw', width: '4vw'}}/>
                        <div className="linea-horizontal" style={{left: '45.5vw', top: '37.5vw', width: '4vw'}}/>
                        <div className="linea-horizontal" style={{left: '50vw', top: '49.6vw', width: '4vw'}}/>
                    </div> */}

                    {/* Código para desplegar toda la información de la primera parte de la linea del tiempo */}
                    <div className="nosotros-contenido1">
                        <h1>
                            <FiMapPin color='green'/> Capa X Capa inició en 2021
                        </h1>
                        <p>
                            <BsFillCircleFill color='#D68B67'/> Comenzó como un proyecto de servicio social y 
                            <b>se convirtió en nuestra pasión</b> por promover en México una mentalidad de <b>compartir valor</b>
                        </p>
                        <p>
                            <BsFillCircleFill color='#D68B67'/> Somos un grupo de jóvenes emprendedores y amigos que buscan 
                            <b>crear un impacto positivo</b> a largo plazo en la <b>educación de México</b>
                        </p>
                    </div>

                    {/* Código para desplegar toda la información de la segunda parte de la linea del tiempo */}
                    <div className="nosotros-contenido2">
                            <h1>
                                Buscamos transformar la educación de México
                            </h1>
                            <p>
                                <BsFillCircleFill color='#A2C261'/> Creamos una <b className='b3'>experiencia que fomenta la imaginación </b> y mantenga a los estudiantes motivados a seguir sus estudios
                            </p>
                    </div>
                
                    {/* Código para desplegar toda la información de la tercera parte de la linea del tiempo */}
                    <div className="nosotros-contenido3">
                        <h1>
                           La innovación comienza <FiStar className='star' fill='yellow' color='black'/>
                        </h1>
                        <p>
                            <BsFillCircleFill color='#BF985E'/> El proceso de fabricación aprovecha la versatilidad, la precisión y el uso mundial de la <b className='b2'>tecnología de corte láser</b>
                        </p>
                        <p>
                            <BsFillCircleFill color='#BF985E'/> Elaboramos de los <b className='b2'>modelos de montaje 3D</b> de bajo costo hechos con capas de materiales sostenibles
                        </p>
                    </div>

                    {/* Código para desplegar toda la información de la cuarta parte de la linea del tiempo */}
                    <div className="nosotros-contenido4">
                        <h1>
                            ¡Estamos llegando a más personas! <BiPackage color='#8A6F47'/>
                        </h1>
                        <p>
                            <BsFillCircleFill color='#D68B67'/> Aquí puedes acceder las <b>instrucciones</b> para armar el modelo de montaje 3D de tu preferencia
                        </p>
                        <button className='button1'>Leer más</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nosotros
