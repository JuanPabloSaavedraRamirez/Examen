import MainApp from "../MainApp";
import Calculadora from "../pages/Calculadora";
import Tienda from "../pages/Tienda";
import Pokedex from "../pages/Pokedex";
import Encuesta from "../pages/Encuesta";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
  return <>
        <Navbar/>
          <Routes >
              <Route path="/MainApp" element ={<MainApp/>} id="MainApp"/>
              <Route path="Calculadora" element={<Calculadora/>}/>
              <Route path="Tienda" element={<Tienda/>}/>
              <Route path="Pokedex" element={<Pokedex/>}/>
              <Route path="Encuesta" element={<Encuesta/>}/>
          </Routes>
  </>
  
}

export default AppRouter
