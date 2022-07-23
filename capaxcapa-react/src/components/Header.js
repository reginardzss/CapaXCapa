import { Link } from "react-router-dom"
import Button from "./Button"

import React from 'react';

// Librería de íconos.
import {BsInstagram} from 'react-icons/bs' // Ícono de Instagram
import {TbMail} from 'react-icons/tb' // Ícono de e-mail

function Header(){
    return(
        <div className="bg-primary" style={{height: '60px', width: '100%', display: 'flex'}}>
            {/* Botones que redireccionan a otras partes de la web. También se encuentra el logo de Capa X Capa. Están a la izquierda respectivamente. */}
            <div className="font-face-cerebri-sans-pro">
                <img src={require("../media/Images/Icons/Logo-CapaXCapa2.png")} style={{height: '2.986vw', width: '3.68vw', margin: '8px 2.986vw 9px 4.166vw'}}/>
                <Link to={"/inicio"}> <Button color={"primary"}>Inicio</Button> </Link>
                <Link to={"/nosotros"}> <Button color={"primary"}>Nosotros</Button> </Link>
                <Link to={"/modelos"}> <Button color={"primary"}>Modelos</Button> </Link>
                <Link to={"/contacto"}> <Button color={"primary"}>Contacto</Button> </Link>
            </div>
            {/* Íconos de e-mail e Instagram que se encuentran a la derecha respectivamente. */}
            <div style={{marginLeft: 'auto', marginRight: '0.869vw'}}>
                <Button onClick={() => window.location = 'mailto:capaxcapamty@gmail.com'} style={{width: '2.777vw'}}> <TbMail size="2.777vw"/> </Button>
                <Button onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'} style={{height: '2.272vw', width: '2.152vw'}}> <BsInstagram style={{height: '2.272vw', width: '2.152vw'}}/> </Button>
            </div>
        </div>
    )
}

export default Header