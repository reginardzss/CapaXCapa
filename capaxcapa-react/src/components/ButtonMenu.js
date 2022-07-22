import React from 'react';

// esto ya se puede exportar en como un elemento <Button/>
function ButtonMenu(props){

    const onUserClick = () => {
        props.onClick && props.onClick()
    }

    return (
        <React.Fragment>
            <button onClick={onUserClick} className={"btn-menu "} style={{backgroundColor: props.color}}>
                {props.children}
            </button>
        </React.Fragment>
    )
}

export default ButtonMenu