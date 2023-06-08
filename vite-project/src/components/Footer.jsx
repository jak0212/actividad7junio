import React,{useState} from "react"


const Footer = ({text}) => {
 
        const [showMessage ,setShowMessage]=useState(false)
    
        const handleClick = () =>{
            setShowMessage(!showMessage);
        };
    
        return (
            <div>
                <button onClick={handleClick}>Entendio?</button>
                {showMessage && <p className='Footer'> {text}</p>} </div>
        );
    }
export default Footer