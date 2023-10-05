// App.tsx
import React, { useState } from 'react';
import TabComponent from '../components/TabcComponent';
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
    <div className="Final">
        <h3 className="linkedlnT">Linkdln: (personal)</h3><a className="Linkdln" href="https://www.linkedin.com/in/juan-pablo-saavedra-ram%C3%ADrez-77ab15288"><img className="LinI" src="in.png" alt="" /></a>
        <h3 className="GithubiT">Github: (personal)</h3><a  className="Githubi" href="https://github.com/JuanPabloSaavedraRamirez"><img className="GitI" src="GitHub-Mark.png" alt="" /></a>
    </div>
  </>
};

export default Tienda;
