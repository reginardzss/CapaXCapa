import React from "react";
import "./Historia.css"

const Logro = ({children, image}) => {
    return (
        <div>
            <p className="logro-description">
                {children}
            </p>
            <img style={{'marginBottom':'100px'}} src={image}/>
        </div>
    )
}

export default Logro