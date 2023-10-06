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

      <div className='Proyecto3'>
        <img className='ImgProyecto3' src="plotter-con-Raspberry-Pi.jpg" alt="" />
        <h3 className='TextoProyecto3'>En el segundo semestre desarrolle junto a
        una compañera un plotter completamente funcional, con servomotores, una Raspberry
        , palos de madera y un lapiz, atravez de cordenadas podias hacer dibujos
        lo siguiente es una imagen de referencia</h3>
      </div>
      <br /><br /><br /><br /><br />
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

      <div className="Ejemplos">
        <h3>Se manejar Unity, visual studio, visual studio code y spyder, puedo hacer paginas web sencillas
          junto con esto se manejar el html, css y en parte JavaScrip y TypeScrip, aunque estos ultimos aun
          se me dificultan algo, acontinuacion veran unas animaciones en css que se realizar
        </h3>
        <h3>Aqui un cuadrito el cual va a girar en un bucle infinito</h3>
        <div className="Container">
          <div className="Cuadrito"></div>
        </div>
        <br /><br />
        <h3>Al pasar el raton sobre el contenedor este se va a expandir con una
          animacion la cual hara que por segundos se haga mas grande
        </h3>
        <div className="Container">
          <div className="expansion"></div>
        </div>
        <br /><br />
        <h3>Al pasar el raton por el texto este cambiara su estilo y color</h3>
        <div className="Container">
          <div className="Hoverme">Hover me</div>
        </div>
        <br /><br />
      </div>

      <div className="Final">
        <h3 className="linkedlnT">Linkdln: (personal)</h3><a className="Linkdln" href="https://www.linkedin.com/in/juan-pablo-saavedra-ram%C3%ADrez-77ab15288"><img className="LinI" src="in.png" alt="" /></a>
        <h3 className="GithubiT">Github: (personal)</h3><a  className="Githubi" href="https://github.com/JuanPabloSaavedraRamirez"><img className="GitI" src="GitHub-Mark.png" alt="" /></a>
    </div>
  </>
}

export default MainApp
