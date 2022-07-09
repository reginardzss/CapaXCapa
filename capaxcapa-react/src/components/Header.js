import { Link } from "react-router-dom"
import Button from "./Button"

import React, { useEffect, useState} from 'react';

function Header(){
    return(
        
    <div className="bg-primary d-flex">
        <div className="p-2 flex-fill"><h1 className="text-light"><b>Capa X Capa</b></h1></div>
        <div className="p-2 flex-fill">
            <div className="d-flex justify-content-end">
            <Link to={"/home"}> <Button color={"primary"}> Ir a <b>Home</b> </Button> </Link>
            </div>
        </div>
    </div>
    )
}

export default Header