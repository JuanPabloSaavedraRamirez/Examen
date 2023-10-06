// App.tsx
import React, { useState } from 'react';
import TabComponent from '../components/TabcComponent';
import Inferior from '../components/inferior';
import "../style/Tienda.css"

const Tienda: React.FC = () => {

  const [message, setMessage] = useState<string | null>(null);

  const handleClick = () => {
    setMessage('Que buenos gustos crack');
  };

  return <>
    <div className="Tienda">
      <h1>Libros y Novelas de Beginning after the end </h1>
      <TabComponent />
      <button className='buy' onClick={handleClick}>Buy</button>
      {message && <h3>{message}</h3>}
    </div>
    <br /><br /><br />
    <Inferior />
  </>
};

export default Tienda;
