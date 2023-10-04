import "./style/Portafolio.css"

const MainApp = () => {
  return <>
    <h1 className="NameP">Portafolio</h1>
    <div className='Portafolio'>
      <img className='ImgPerfil' src="Perfil.jpg" alt="" />
      <h2 className='Nombre'>Juan Pablo Saavedra Ramírez 
        <h3 className='Universidad'>Amerike - Estudiante
        <h4 className='Datos'>Edad:19</h4>
      </h3></h2>
    </div>
      
      

      <div className='Proyecto1'>
        <img className='ImgProyecto1' src="amerike-top-blanco.png" alt="" />
        <h3 className='TextoProyecto1'>Actualmente estoy cursando el 
        3er semestre de la carrera desarrollo de software interactivo
        y videojuegos, con un buen promedio</h3>
      </div>

      <div className='Proyecto2'>
        <img className='ImgProyecto2' src="quest.png" alt="" />
        <h3 className='TextoProyecto2'>Estoy trabajando en un videojuego como
        como desarrollador, es para la materia de proyecto semestral</h3>
      </div>

      <div className="conocimientos">
        <h2 className="Texto">Conocimiento en legunajes de programacion</h2>
        <h3 className="Malo">Malo</h3>
        <h3 className="Decente">Decente</h3>
        <h3 className="Bueno">Bueno</h3>
        <h3 className="Excelente">Excelente</h3>

        <img className="C" src="C.png" alt="" />
        <h3 className="CName">C#</h3>
        <div className="CBarr"></div>

        <img className="Python" src="python.png" alt="" />
        <h3 className="PName">Python</h3>
        <div className="PBarr"></div>

        <img className="Javascrip" src="javas.png" alt="" />
        <h3 className="JName">JavaScrip</h3>
        <div className="JBarr"></div>

      </div>

      <div className="Redes">


      </div>
  </>
}

export default MainApp
