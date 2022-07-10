import { Link } from "react-router-dom"
import Button from "./Button"

import React, { useEffect, useState} from 'react';

import {BsInstagram} from 'react-icons/bs'
import {TbMail} from 'react-icons/tb'

function Header(){
    

    return(
        
    <div className="bg-primary d-flex" style={{height: '50px'}}>
        <div className="p-2 font-face-cerebri-sans-book">
            <img src={require("../Images/Icons/Logo-CapaXCapa1.png")} height="40"/>
            <Link to={"/inicio"}> <Button color={"primary"}> Inicio</Button> </Link>
            <Link to={"/nosotros"}> <Button color={"primary"}>Nosotros</Button> </Link>
            <Link to={"/modelos"}> <Button color={"primary"}>Modelos</Button> </Link>
            <Link to={"/contacto"}> <Button color={"primary"}>Contacto</Button> </Link>
        </div>
        <div className="d-flex justify-content-end flex-fill">
            <Button onClick={() => window.location = 'mailto:capaxcapamty@gmail.com'}> <TbMail size="40px"/> </Button>
            <Button onClick={event => window.location.href='https://www.instagram.com/capaxcapa_oficial/'} color={"primary"}> <BsInstagram size="30px"/> </Button>
        </div>
    </div>
    )
}

export default Header