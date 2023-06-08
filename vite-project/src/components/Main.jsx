import React,  { useState } from 'react';

const Main=()=>{
    const [ count,setCount]=useState(0);
    const handleIncrement =()=>{
        setCount(count+2);
    };

    const handleDecrement =()=>{
        setCount(count-1);


    };
    return(
        <div>
            <h1>Contador</h1>
            <p>El valor actual es  {count} </p>
            <button onClick= {handleIncrement} > Aumentar</button>
            <button onClick= {handleDecrement} > Disminuir</button>
        </div>
    );
};

export default Main;