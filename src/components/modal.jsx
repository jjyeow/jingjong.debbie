import React from 'react';
import { PiPhoneFill } from "react-icons/pi";

function Modal(props) {
    return (
        <div
            style={{
                display: props.modal ? "block" : "none",
                width: "100vw",
                height: "100vh",
                position: "relative"
            }}
        >
            <div className='modal-2'>
                {props.content}
            </div>
        </div>
    )
}

export default Modal;