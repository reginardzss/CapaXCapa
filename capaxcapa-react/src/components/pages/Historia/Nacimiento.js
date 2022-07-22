import Como_nace from '../../../media/Images/Historia-Como-nace.svg'

const Nacimiento = () => {
    return(
        <div>
            <img src={Como_nace}/>
            <div className="nacimiento-contenido1">
                <p>
                Capa x Capa nace de un proyecto escolar que buscaba <b>mantener la motivación de los estudiantes</b> por la visible falta de motivación a causa de la pandemia.
                </p>
            </div>

            <div className="nacimiento-contenido2">
                <p>
                Se sumaron todas las <b className='b2'>habilidades</b> del equipo, llenando <b className='b2'>cada casilla</b> y <b className='b2'>complementándonos</b> para hacer realidad esta iniciativa.
                </p>
            </div>
            
            <div className="nacimiento-contenido3">
                <p>
                Nuestra batería fue el motivar a alumno por alumno a no dejar de prepararse para <b className='b3'>alcanzar su mayor potencial.</b>
                </p>
            </div>
        </div>
    )
}

export default Nacimiento