import React, {useState} from 'react';


const Header = ({text})=> {
    const [showMessage ,setShowMessage]=useState(false)

    const handleClick = () =>{
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <button onClick={handleClick}>Entendio?</button>
            {showMessage && <p className='Header'> {text}</p>} </div>
    );
}

export default Header;
