import { Link } from "react-router-dom"
import Button from "./Button"

import React from 'react';

// Librería de íconos.
import {BsInstagram} from 'react-icons/bs' // Ícono de Instagram
import {TbMail} from 'react-icons/tb' // Ícono de e-mail

function Header(){
    return(
        <div className="bg-primary d-flex" style={{height: '60px'}}>
            {/* Botones que redireccionan a otras partes de la web. También se encuentra el logo de Capa X Capa. Están a la izquierda respectivamente. */}
            <div className="p-2 font-face-cerebri-sans-pro">
                <img src={require("../media/Images/Icons/Logo-CapaXCapa1.png")} height="40"/>
                <Link to={"/inicio"}> <Button color={"primary"}> Inicio</Button> </Link>
                <Link to={"/nosotros"}> <Button color={"primary"}>Nosotros</Button> </Link>
                <Link to={"/modelos"}> <Button color={"primary"}>Modelos</Button> </Link>
                <Link to={"/contacto"}> <Button color={"primary"}>Contacto</Button> </Link>
            </div>
            {/* Íconos de e-mail e Instagram que se encuentran a la derecha respectivamente. */}
            <div className="d-flex justify-content-end flex-fill">
                <Button onClick={() => window.location = 'mailto:capaxcapamty@gmail.com'}> <TbMail size="40px"/> </Button>
                <Button onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'}> <BsInstagram size="30px"/> </Button>
            </div>
        </div>
    )
}

export default Header