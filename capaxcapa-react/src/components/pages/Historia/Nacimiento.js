import Como_nace from '../../../media/Images/Historia-Como-nace.svg'
import Nacimiento1 from '../../../media/Images/Historia-Nacimiento1.jpg'
import Nacimiento2 from '../../../media/Images/Historia-Nacimiento2.jpg'
import Lineas from '../../../media/Images/Historia-Lineas.svg'
import Lapiz from '../../../media/Images/Icons/Lapiz.svg'

const Nacimiento = () => {
    return(
        <div>
            
            <img src={Como_nace} className="nacimiento-title"/>

            <div className="nacimiento-contenido1">
                <p>
                Capa x Capa nace de un proyecto escolar que buscaba <b>mantener la motivación de los estudiantes</b> por la visible falta de motivación a causa de la pandemia.
                </p>
            </div>
            
            <div className="nacimiento-bloque" style={{alignItems:'center'}}>
                <div className="nacimiento-contenido2">
                    <p>
                    Se sumaron todas las <b className='b2'>habilidades</b> del equipo, llenando <b className='b2'>cada casilla</b> y <b className='b2'>complementándonos</b> para hacer realidad esta iniciativa.
                    </p>
                </div>
                <img src={Nacimiento1} className="nacimiento-imagen"/>

            </div>
            
            <div className="nacimiento-bloque" style={{alignItems:'flex-start'}}>
                <img src={Nacimiento2} className="nacimiento-imagen"/>
                <div className="nacimiento-contenido3">
                    <p>
                    Nuestra batería fue el motivar a alumno por alumno a no dejar de prepararse para <b className='b3'>alcanzar su mayor potencial.</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Nacimiento