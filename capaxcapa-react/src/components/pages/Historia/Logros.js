import Logros1 from '../../../media/Images/Historia-Logros-1.svg'

const Logros = () => {
    return(
        <div>
            <h1>Logros</h1>
            <br/>
            <p className="logros-description">
                Gracias al impacto generado y el potencial de la iniciativa, Capa x Capa fue postulado al concurso Conexión TEC, 
                donde obtuvimos el <b>1er lugar</b> en la categoría de Impacto Social.
            </p>
            <br/>
            <img src={Logros1}/>
            <br/>
            <br/>
        </div>
    )
}

export default Logros