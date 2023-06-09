import React, { useState } from 'react';
import "./Message.css";

const Message = ({ text }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <header>
        <h1>Esto es un header</h1>
      </header>
      <main>
        <button onClick={handleClick}>Mostrar/Ocultar</button>
        {showMessage && <p className='Message'>{text}</p>}
      </main>
      <footer>
        <p>Kevin Eduardo Hernandez Botero  Adso 07/06/23</p>
      </footer>
    </div>
  );
};

export default Message;
