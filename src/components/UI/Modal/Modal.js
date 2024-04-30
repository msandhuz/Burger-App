import React from 'react';
import './Modal.css'; // Ensure the CSS file exists and is correctly linked.

const Modal = ({ show, children, modalClosed }) => {
    return (
        <div 
            className="Modal"
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0',
                visibility: show ? 'visible' : 'hidden'
            }}>
            {children}
            <button onClick={modalClosed}>Cancel</button>
            <button onClick={() => alert('Continue')}>Continue</button>
        </div>
    );
};

export default Modal;
