import Logro from './Logro.js'

import LogrosTitle from '../../../media/Images/Historia-Logros-Title.svg'
import Logros1 from '../../../media/Images/Historia-Logros-1.svg'

const Logros = () => {
    return(
        <div>
            <img style={{'margin-bottom': `100px`}} src={LogrosTitle}/>
            <Logro image={Logros1}>
                Gracias al impacto generado y el potencial de la iniciativa, Capa x Capa fue postulado al concurso Conexión TEC, 
                donde obtuvimos el <b>1er lugar</b> en la categoría de Impacto Social.
            </Logro>
        </div>
    )
}

export default Logros