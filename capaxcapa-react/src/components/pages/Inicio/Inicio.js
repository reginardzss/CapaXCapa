//import "../App.css"
import Galeria from './Galeria.js';
import Descripcion from './Descripcion.js';
import React, { Component }  from 'react'; // CAMBIO EMILIO... ERROR

function Inicio(){
    return (
        <div className="font-face-ananias">
            <Galeria />
            <Descripcion />
        </div>
    )
}

export default Inicio