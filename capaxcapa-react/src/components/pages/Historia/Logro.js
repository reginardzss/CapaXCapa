import React from "react";
import "./Historia.css"

const Logro = ({children, image}) => {
    return (
        <div>
            <p className="logro-description">
                {children}
            </p>
            <img className="logro-imagen" src={image}/>
        </div>
    )
}

export default Logro