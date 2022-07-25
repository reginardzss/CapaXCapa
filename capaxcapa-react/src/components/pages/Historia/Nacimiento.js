import Como_nace from '../../../media/Images/Historia-Como-nace.svg'
import Nacimiento1 from '../../../media/Images/Historia-Nacimiento1.jpg'
import Nacimiento2 from '../../../media/Images/Historia-Nacimiento2.jpg'
import Lapiz from '../../../media/Images/Icons/Lapiz.svg'
import Covid from '../../../media/Images/Icons/elementos-gráficos/Covid.svg'
import Libros from '../../../media/Images/Icons/Libros.svg'


const Nacimiento = () => {
    return(
        <div>
            
            <img src={Como_nace} className="nacimiento-title"/>

            <div style={{position: 'relative'}}>
                <div className="linea-vertical" style={{top: '-5vw', height: '5vw'}}/>
            </div>

            <div className="nacimiento-contenido1">
                <p>
                Capa x Capa nace de un proyecto escolar que buscaba <b>mantener la motivación de los estudiantes</b> por la visible falta de motivación a causa de la pandemia.
                </p>
            </div>

            <div>
                <div style={{position: 'relative'}}>
                    <div className="linea-vertical" style={{top: '-9vw', height: '10vw'}}/>
                </div>

                <div style={{position: 'relative'}}>
                    <div className="linea-horizontal" style={{left: '20vw', top: '0.5vw', width: '30vw'}}/>
                </div>

                <div style={{position: 'relative'}}>
                    <div className="linea-vertical" style={{left: '20vw', top: '0.6vw', height: '7.3vw'}}/>
                </div>
            </div>
        
            <div style={{position: 'relative'}}>
                <img src={Covid} style={{width:'6.5vw', position: 'absolute', left: '11vw', bottom: '5vw'}}/>
            </div>
            
            <div className="nacimiento-bloque" style={{alignItems:'center'}}>
                <div className="nacimiento-contenido2">
                    <p>
                    Se sumaron todas las <b className='b2'>habilidades</b> del equipo, llenando <b className='b2'>cada casilla</b> y <b className='b2'>complementándonos</b> para hacer realidad esta iniciativa.
                    </p>
                </div>
                <img src={Nacimiento1} className="nacimiento-imagen"/>
                <div style={{position:'relative'}}>
                    <img src={Lapiz} style={{width:'4vw', position: 'absolute', left: '-3.5vw', bottom: '11vw'}}/>
                </div>
                
            </div>
                <div style={{position: 'relative'}}>
                    <div className="linea-vertical" style={{left: '20vw', top: '-18vw', height: '13vw'}}/>
                </div>
                <div style={{position: 'relative'}}>
                    <div className="linea-horizontal" style={{left: '20vw', top: '-5vw', width: '60vw'}}/>
                </div>
                <div style={{position: 'relative'}}>
                    <div className="linea-vertical" style={{left: '80.5vw', top: '-5vw', height: '5.2vw'}}/>
                </div>
            <div></div>
            
            <div className="nacimiento-bloque" style={{alignItems:'flex-start'}}>
                <img src={Nacimiento2} className="nacimiento-imagen"/>
                <div className="nacimiento-contenido3">
                    <p>
                    Nuestra batería fue el motivar a alumno por alumno a no dejar de prepararse para <b className='b3'>alcanzar su mayor potencial.</b>
                    </p>
                </div>
                <div style={{position: 'relative'}}>
                    <img src={Libros} style={{width:'10vw', position: 'absolute', left: '-55vw', bottom: '-30.5vw'}}/>
                </div>
            </div>

        </div>
    )
}

export default Nacimiento