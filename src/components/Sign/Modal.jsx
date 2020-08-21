import React, { useState, useEffect, useRef } from 'react'

function Modal() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="Modal__container">
            <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
            { isOpen ? (
                <div className="Modal">
                    <p>Modal Opened</p>
                </div>
            ) : null }
        </div>
    )
}

export default Modal;
