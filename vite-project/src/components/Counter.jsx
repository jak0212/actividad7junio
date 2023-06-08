import React,  { useState } from 'react';

const Counter2 =()=>{
    const [ count,setCount]=useState(0);
    const handleIncrement =()=>{
        setCount(count+2);
    };

    const handleDecrement =()=>{
        setCount(count-1);


    };
    return(
        <div>
            <h1>Medidor</h1>
            <p>el coste total es {count} </p>
            <button onClick= {handleIncrement} > Incrementar</button>
            <button onClick= {handleDecrement} > Decrementar</button>
        </div>
    );
};

export default Counter2;
