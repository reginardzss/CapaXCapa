import { Link } from "react-router-dom"

import React from 'react';

// Librería de íconos.
import {BsInstagram} from 'react-icons/bs' // Ícono de Instagram

// Importación de estilos
import "../App.css"
import "./stylesCompartidas/Footer.css"
import "./stylesCompartidas/Botones-Iconos.css"

// Importación de imágenes
import LogoCapaXCapa from '../media/Images/Icons/elementos-gráficos/LogoCapaXCapa-SinTexto.svg'

function Footer(){
    return(
        <div className="bg-danger" style={{height: '144px', display: 'flex', alignItems: 'center'}}>
            <div style={{marginLeft: '3.75vw'}}>
                {/* Logo de Capa X Capa */}
                <img src={LogoCapaXCapa} style={{height: '4.027vw', width: '4.831vw', marginRight: '1.041vw', position: 'relative', bottom: '5px'}}/>
                {/* Texto de Capa X Capa */}
                <h1 className="font-face-ananias" style={{marginLeft: '1.047vw', float: 'right'}}> <span className="Capa">CAPA</span> <span className="X">X</span> <span className="Capa">CAPA</span> </h1>
            </div>
            {/* Resto de Textos del Footer */}
            <div className="font-face-cerebri-sans-pro" style={{marginLeft: '13.688vw', marginRight: '1.805vw'}}>
                {/* "Síguenos" */}
                <div style={{float: 'left'}}>
                    <h2 className="TextoFooter">¡Síguenos!</h2>
                    <button className="botones-iconos" onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'}> <BsInstagram style={{height: '2.404vw', width: '2.152vw'}} color="E4C76A"/> </button>
                </div>
                {/* El resto de textos se encuentran en los siguientes div */}
                <div className="TextoFooter" style={{textAlign: "left", marginLeft: '8.263vw', float: 'left'}}>
                    <h2>Derechos de autor</h2>
                    <h2>Términos Y Condiciones</h2>
                </div>
                <div className="TextoFooter" style={{textAlign: "left", marginLeft: '3.402vw', float: 'right'}}>
                    <h2>Aviso de Privacidad</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer