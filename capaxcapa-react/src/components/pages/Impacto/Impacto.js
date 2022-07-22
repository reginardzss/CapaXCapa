import './Impacto.css';
import ImagenFondo from '../../ImagenFondo.js'

import Foto from '../../../media/Images/Inicio-slide-2.jpg';
import Lapiz from '../../../media/Images/Icons/Lapiz.svg';
import Libros from '../../../media/Images/Icons/Libros.svg';

function Impacto(){
    return (
        <div>
            <ImagenFondo imagen={Foto} titulo={"Impacto"} />
            <div className="separador">
                <div className="grid-horizontal-tres">
                    <div className="contenedor-info">
                        <div className="impacto-contenedor-informacion">
                            <div className="info-numero-grande text-red"> 7 </div>
                            <div className="info-texto"> Meses desde la </div>
                            <div className="info-texto">creación del proyecto </div>
                        </div>
                    </div>
                    <div className="contenedor-info">
                        <div className="impacto-contenedor-informacion" style={{ 'margin-left': `2vw` }}>
                            <div className="info-numero-grande text-green"> 4 </div>
                            <div className="info-texto"> Colaboraciones </div>
                        </div>
                    </div>
                    <div className="contenedor-info">
                        <div className="impacto-contenedor-informacion" style={{ 'margin-left': `4vw` }}>
                            <div className="info-numero-grande text-orange"> 310 </div>
                            <div className="info-texto"> Estudiantes beneficiados </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separador" style={{ 'margin-bottom': `10vh` }}>
                <div className="contenedor">
                    <div className="contenedor-fotos-chicas">
                        <div className="foto-chica">
                            Foto 1
                        </div>
                        <div className="foto-chica" style={{ 'margin-top': `2vw` }}>
                            Foto 2
                        </div>
                    </div>
                    <div className="foto-grande">
                        Foto 3
                    </div>
                </div>
                <div className="contenedor">
                    <div className="foto-grande">
                        Foto 4
                    </div>
                    <div className="foto-mediana">
                        Foto 5
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impacto