import { Link } from "react-router-dom"

import React from 'react';

// Librería de íconos.
import {BsInstagram} from 'react-icons/bs' // Ícono de Instagram
import {TbMail} from 'react-icons/tb' // Ícono de e-mail

// Importación de imágenes
import LogoCapaXCapa from '../media/Images/Icons/elementos-gráficos/LogoCapaXCapa-SinTexto.svg'

// Importación de estilos
import './stylesCompartidas/Header.css'
import './stylesCompartidas/Botones-Iconos.css'

function Header(){
    return(
        <div className="bg-primary" style={{height: '60px', width: '100%', display: 'flex'}}>
            {/* Botones que redireccionan a otras partes de la web. También se encuentra el logo de Capa X Capa. Están a la izquierda respectivamente. */}
            <div className="font-face-cerebri-sans-pro" style={{display: 'flex', alignItems: 'center'}}>
                <img src={LogoCapaXCapa} style={{height: '2.986vw', width: '3.68vw', margin: '8px 2.986vw 9px 4.166vw'}}/>
                <Link to={"/inicio"}> <button className="botones-Header">Inicio</button> </Link>
                <Link to={"/nosotros"}> <button className="botones-Header">Nosotros</button> </Link>
                <Link to={"/modelos"}> <button className="botones-Header">Modelos</button> </Link>
                <Link to={"/contacto"}> <button className="botones-Header">Contacto</button> </Link>
            </div>
            {/* Íconos de e-mail e Instagram que se encuentran a la derecha respectivamente. */}
            <div style={{marginLeft: 'auto', marginRight: '0.869vw', display: 'flex', alignItems: 'center'}}>
                <button className="botones-iconos" onClick={() => window.location = 'mailto:capaxcapamty@gmail.com'} style={{marginRight: '0.5vw'}}> <TbMail size="2.777vw"/> </button>
                <button className="botones-iconos" onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'}> <BsInstagram style={{height: '2.272vw', width: '2.152vw'}}/> </button>
            </div>
        </div>
    )
}

export default Header