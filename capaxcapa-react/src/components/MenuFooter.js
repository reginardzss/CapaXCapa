import { Link } from "react-router-dom"
import Button from './ButtonMenu';
import Btn from './Button.js';

import React from 'react';
import "./stylesCompartidas/MenuFooter.css"

import {TbMail} from 'react-icons/tb' // Ícono de e-mail
import CaritaFeliz from "../media/Images/Icons/elementos-gráficos/Carita-Feliz.svg"
import NuestraHistoriaIcon from "../media/Images/Icons/elementos-gráficos/Nuestra-Historia.svg"
import QuienesSomosIcon from "../media/Images/Icons/elementos-gráficos/Group-102.svg"
import QueHacemosIcon from "../media/Images/Icons/elementos-gráficos/¿Qué hacemos_.svg"
import ImpactoIcon from "../media/Images/Icons/elementos-gráficos/Impacto.svg"

function MenuFooter(){
    return(
        <div style={{marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
            <div className='div-menu' style={{ backgroundColor: '#E4C76A', borderTopStyle: 'solid', borderRightStyle: 'solid', borderBottomStyle: 'solid', borderWidth: '3px', borderColor: '#0F223C' }}>
                <div className="menu-items">
                    <h1> Nuestra <br/> Historia </h1> <br/>
                    <Link to={"/nuestra-historia"}> <Button color={'#D68B67'}> Leer más → </Button> </Link> <br/> <br/>
                    <img className="menu-icon" src={NuestraHistoriaIcon}/>
                </div>
            </div>
            <div className='div-menu' style={{ backgroundColor: '#D68B67', borderTopStyle: 'solid', borderRightStyle: 'solid', borderBottomStyle: 'solid', borderWidth: '3px', borderColor: '#0F223C' }}>
                <div className="menu-items">
                    <img className="menu-icon" src={QuienesSomosIcon}/> <br/> <br/>
                    <h1> ¿Quiénes <br /> Somos? </h1> <br/>
                    <Link to={"/quienes-somos"}> <Button color={'#A2C261'}> Leer más → </Button> </Link>
                </div>
            </div>
            <div className="div-menu" style={{ backgroundColor: '#A2C261', borderTopStyle: 'solid', borderRightStyle: 'solid', borderBottomStyle: 'solid', borderWidth: '3px', borderColor: '#0F223C' }}>
                <div className="menu-items">
                    <h1> ¿Qué <br /> Hacemos? </h1> <br/>
                    <Link to={"/que-hacemos"}> <Button color={'#BF985E'}> Leer más → </Button> </Link> <br/> <br/>
                    <img className="menu-icon" src={QueHacemosIcon}/>
                </div>
            </div>
            <div className="div-menu" style={{ backgroundColor: '#BF985E', borderTopStyle: 'solid', borderBottomStyle: 'solid', borderWidth: '3px', borderColor: '#0F223C' }}>
                <div className="menu-items">
                    <img className="menu-icon" src={ImpactoIcon}/> <br/> <br/>
                    <h1> Impacto <br /> Generado </h1> <br/>
                    <Link to={"/impacto"}> <Button color={'#A2C261'}> Leer más → </Button> </Link>
                </div>
            </div>

            <div style={{padding: '2.5vw'}}>
                <h1 style={{display: 'inline'}}> ¿Cómo colaborar? </h1> 
                <Button color={'#D68B67'}> Escríbenos → </Button>
                <Btn onClick={() => window.location = 'mailto:capaxcapamty@gmail.com'} style={{width: '3vw'}}> <TbMail size="3vw"/> </Btn>
            </div>

            <div className="menu-mensaje">
                <img src={CaritaFeliz} style={{position: 'relative', left: '70vw', bottom: '3.5vw', height: '5vw', width: '5vw'}} />
                <p className="mensaje"> En caso de que le haya interesado el proyecto y considere que tiene una idea útil para la mejora de la comprensión de su lección, envíenos un correo para agendar una reunión y conocer su propuesta. </p>
            </div>
        </div>
    )
}

export default MenuFooter