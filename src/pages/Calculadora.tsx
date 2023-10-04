import React, { useState } from 'react';
import "../style/Calculadora.css"

const Calculadora: React.FC = () => {
  const [display, setDisplay] = useState(''); // Estado para mostrar el número en pantalla

  const handleClick = (value: string) => {
    setDisplay(display + value);
  }

  const handleClear = () => {
    setDisplay('');
  }

  const handleDelete = () => {
    setDisplay(prevDisplay => prevDisplay.slice(0, -1));
  }

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  }

  const handleSquareRoot = () => {
    const number = parseFloat(display);
    if (!isNaN(number) && number >= 0) {
      setDisplay(Math.sqrt(number).toString());
    } else {
      setDisplay('Error');
    }
  }

  return (
    <div>
      <h1 className='NameC'>Calculadora</h1>
      <div className='Calculadora'>
        <input className='Resultado'
          type="text"
          value={display}
          readOnly
        />
          <button className='n1' onClick={() => handleClick('1')}>1</button>
          <button className='n2' onClick={() => handleClick('2')}>2</button>
          <button className='n3' onClick={() => handleClick('3')}>3</button>
          <button className='sMa' onClick={() => handleClick('+')}>+</button>

          <button className='n4' onClick={() => handleClick('4')}>4</button>
          <button className='n5' onClick={() => handleClick('5')}>5</button>
          <button className='n6' onClick={() => handleClick('6')}>6</button>
          <button className='sMe' onClick={() => handleClick('-')}>-</button>

          <button className='n7' onClick={() => handleClick('7')}>7</button>
          <button className='n8' onClick={() => handleClick('8')}>8</button>
          <button className='n9' onClick={() => handleClick('9')}>9</button>
          <button className='nMul' onClick={() => handleClick('*')}>*</button>

          <button className='n0' onClick={() => handleClick('0')}>0</button>
          <button className='Clear' onClick={handleClear}>C</button>
          <button className='Del' onClick={handleDelete}>DEL</button>
          <button className='sD' onClick={() => handleClick('/')}>/</button>

          <button className='sI' onClick={handleCalculate}>=</button>
          <button className='sR' onClick={handleSquareRoot}>√</button>

      </div>
    </div>
  );
}

export default Calculadora;
