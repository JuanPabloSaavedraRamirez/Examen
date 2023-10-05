import { useState } from 'react';
import '../style/Encuesta.css';

const Encuesta = () => {
  const [respuestas, setRespuestas] = useState({
    pregunta1: false,
    pregunta2: false,
    pregunta3: false,
    pregunta4: false,
    pregunta5: false,
    pregunta6: false,
    pregunta7: false,
    pregunta8: false,
    pregunta9: false,
    pregunta10: false,
  });

  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestasBloqueadas, setRespuestasBloqueadas] = useState(false);

  const handleRespuesta = (pregunta: string, valor: boolean) => {
    if (!respuestasBloqueadas) {
      setRespuestas((prevRespuestas) => ({
        ...prevRespuestas,
        [pregunta]: valor,
      }));
    }
  };

  const calcularPuntaje = () => {
    let puntaje = 0;
    for (const pregunta in respuestas) {
      if (Object.prototype.hasOwnProperty.call(respuestas, pregunta)) {
        puntaje += respuestas[pregunta as keyof typeof respuestas] ? 1 : 0;
      }
    }
    return puntaje;
  };

  const obtenerFrase = (puntaje: number) => {
    if (puntaje === 10) {
      return "Eres todo un otaku, bañate";
    }
    else if (puntaje === 9 ){
      return "Casi todo un otaku";
    }
    else if (puntaje === 8 ) {
      return "Eres algo otaku";
    }
    else if (puntaje === 7 ) {
      return "Eres levemente otaku";
    }
    else if (puntaje === 6 ) {
      return "Eres otaku?";
    }
    else if (puntaje === 5) {
      return "Tienes conocimientos de anime";
    } 
    else if (puntaje === 4) {
      return "Sabes cosas";
    } 
    else if (puntaje === 3) {
      return "Pues meh, sabes algo";
    } 
    else if (puntaje === 2) {
      return "Apoco si?";
    } 
    else if (puntaje === 1) {
      return "Minimo has visto 1";
    } 
    else {
      return "No eres otaku";
    }
  };

  const mostrarResultadoHandler = () => {
    setMostrarResultado(true);
    setRespuestasBloqueadas(true);
  };

  return <>
    <div className="encuesta-container">
      <h1 className='Encuesta'>Encuesta</h1>
      <ol className="preguntas-lista">
        <li>
          <label>
            Haz visto Dragon ball?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta1"
                value="si"
                onChange={(e) => handleRespuesta('pregunta1', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta1"
                value="no"
                onChange={(e) => handleRespuesta('pregunta1', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Naruto?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta2"
                value="si"
                onChange={(e) => handleRespuesta('pregunta2', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta2"
                value="no"
                onChange={(e) => handleRespuesta('pregunta2', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Sailor Moon?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta3"
                value="si"
                onChange={(e) => handleRespuesta('pregunta3', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta3"
                value="no"
                onChange={(e) => handleRespuesta('pregunta3', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Demon Slayer?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta4"
                value="si"
                onChange={(e) => handleRespuesta('pregunta4', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta4"
                value="no"
                onChange={(e) => handleRespuesta('pregunta4', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto My Hero Academia?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta5"
                value="si"
                onChange={(e) => handleRespuesta('pregunta5', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta5"
                value="no"
                onChange={(e) => handleRespuesta('pregunta5', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Jujutsu Kaisen?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta6"
                value="si"
                onChange={(e) => handleRespuesta('pregunta6', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta6"
                value="no"
                onChange={(e) => handleRespuesta('pregunta6', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Attack on Titan?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta7"
                value="si"
                onChange={(e) => handleRespuesta('pregunta7', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta7"
                value="no"
                onChange={(e) => handleRespuesta('pregunta7', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Bungo Stray Dogs?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta8"
                value="si"
                onChange={(e) => handleRespuesta('pregunta8', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta8"
                value="no"
                onChange={(e) => handleRespuesta('pregunta8', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Hells Paradise?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta9"
                value="si"
                onChange={(e) => handleRespuesta('pregunta9', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta9"
                value="no"
                onChange={(e) => handleRespuesta('pregunta9', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
        <li>
          <label>
            Haz visto Oshi no Ko?
            <div className="boton-container">
              <input
                type="radio"
                name="pregunta10"
                value="si"
                onChange={(e) => handleRespuesta('pregunta10', e.target.value === "si")}
              /> Si
              <input
                type="radio"
                name="pregunta10"
                value="no"
                onChange={(e) => handleRespuesta('pregunta10', e.target.value === "si")}
              /> No
            </div>
          </label>
        </li>
      </ol>
      <button className="boton" onClick={mostrarResultadoHandler} disabled={mostrarResultado}>
        Obtener Resultado
      </button>
      {mostrarResultado && (
        <div className="resultado">
          <h2>Resultado:</h2>
          <p>{obtenerFrase(calcularPuntaje())}</p>
        </div>
      )}
    </div>
        <br /><br /><br />
      <div className="Final">
        <h3 className="linkedlnT">Linkdln: (personal)</h3><a className="Linkdln" href="https://www.linkedin.com/in/juan-pablo-saavedra-ram%C3%ADrez-77ab15288"><img className="LinI" src="in.png" alt="" /></a>
        <h3 className="GithubiT">Github: (personal)</h3><a  className="Githubi" href="https://github.com/JuanPabloSaavedraRamirez"><img className="GitI" src="GitHub-Mark.png" alt="" /></a>
      </div>
  </>;
};

export default Encuesta;
