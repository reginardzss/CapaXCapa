import Como_nace from '../../../media/Images/Como-nace.svg'

const Nacimiento = () => {
    return(
        <div>
            <img src={Como_nace}/>
            <div className="nacimiento-contenido1">
                <p>
                Capa x Capa nace de un proyecto escolar que buscaba <b>mantener la motivación de los estudiantes</b> por la visible falta de motivación a causa de la pandemia.
                </p>
            </div>
        </div>
    )
}

export default Nacimiento