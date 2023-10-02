import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/MainApp"}>Portafolio</Link></li>
            <li><Link to={"/Calculadora"}>Calculadora</Link></li>
            <li><Link to={"/Tienda"}>Tienda</Link></li>
            <li><Link to={"/Pokedex"}>Pokedex</Link></li>
            <li><Link to={"/Encuesta"}>Encuesta</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
