import React from 'react';
import { PiPhoneFill } from "react-icons/pi";

function Button2(props) {
    return (
        <div 
            className='audio-button'
            onClick={()=>{props.action()}}
        >
            <div>{props.label}</div>
        </div>
    )
}

export default Button2;