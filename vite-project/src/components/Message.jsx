import React, {useState} from 'react';
import "./Message.css" 

const Message = ({text})=> {
    const [showMessage ,setShowMessage]=useState(false)

    const handleClick = () =>{
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
            {showMessage && <p className='Message'> {text}</p>} </div>
    );
}

export default  Message;

