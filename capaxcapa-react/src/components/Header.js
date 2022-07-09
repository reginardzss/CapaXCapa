import { Link } from "react-router-dom"
import Button from "./Button"

import React, { useEffect, useState} from 'react';

function Header(){
    return(
        
    <div className="bg-primary d-flex">
        <div className="p-2 flex-fill font-face-cerebri-sans-book">
        <Link to={"/inicio"}> <Button color={"primary"}>Inicio</Button> </Link>
        <Link to={"/nosotros"}> <Button color={"primary"}>Nosotros</Button> </Link>
        <Link to={"/modelos"}> <Button color={"primary"}>Modelos</Button> </Link>
        <Link to={"/contacto"}> <Button color={"primary"}>Contacto</Button> </Link>
        </div>
        <div className="p-2 flex-fill">
            <div className="d-flex justify-content-end">
            <Link to={"/inicio"}> <Button color={"primary"}> Ir a <b>Inicio</b> </Button> </Link>
            </div>
        </div>
    </div>
    )
}

export default Header