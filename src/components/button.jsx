import React from 'react';
import { PiPhoneFill } from "react-icons/pi";

function Button(props) {
    return (
        <div className='call-button' onClick={() => {window.open(props.whatsappLink, "_blank")}}>
            <PiPhoneFill color={"black"}/>
            <div style={{marginLeft: 10}}>{props.label}</div>
        </div>
    )
}

export default Button;