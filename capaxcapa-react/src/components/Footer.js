import { Link } from "react-router-dom"
import Button from "./Button"

import React from 'react';

// Librería de íconos.
import {BsInstagram} from 'react-icons/bs' // Ícono de Instagram

// Importación de estilos
import "../assets/scss/app.scss"
import "../App.css"
import "./stylesCompartidas/Footer.css"

function Footer(){
    return(
        <div className="bg-danger d-flex" style={{height: '144px', alignItems: 'center'}}>
            {/* Logo de Capa X Capa */}
            <div className="p-2">
                <img src={require("../media/Images/Icons/Logo-CapaXCapa1.png")} height="40"/>
            </div>
            {/* Texto de Capa X Capa */}
            <div className="font-face-ananias" style={{marginLeft: '15px'}}>
                <h1> <span className="Capa">CAPA</span> <span className="X">X</span> <span className="Capa">CAPA</span> </h1>
            </div>
            {/* Resto de Textos del Footer */}
            <div className="p-2 justify-content-end d-flex flex-fill font-face-cerebri-sans-pro" style={{marginTop: '10px'}}>
                {/* "Síguenos" */}
                <div className="p-2 flex-fill justify-content-end" style={{marginLeft: '250px'}}>
                    <h2 className="TextoFooter">¡Síguenos!</h2>
                    <Button onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'}> <BsInstagram size="30px" color="E4C76A"/> </Button>
                </div>
                {/* El resto de textos se encuentran en los siguientes div */}
                <div className="p-2 TextoFooter flex-fill" style={{textAlign: "left", marginLeft: '70px'}}>
                    <h2>Derechos de autor</h2>
                    <h2>Términos Y Condiciones</h2>
                </div>
                <div className="p-2 TextoFooter" style={{textAlign: "left", marginRight: '50px'}}>
                    <h2>Aviso de Privacidad</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer