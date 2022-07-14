import React from 'react';
import "./Inicio.css"

const STYLES = [
    "btn--yellow",
    "btn--red",
    "btn--green",
    "btn--orange",
];

const BotonInicio = ({
    children,
    type,
    onClick,
    buttonStyle
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default BotonInicio