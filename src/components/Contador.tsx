import React, { useState } from "react";
import "../style/Tienda.css";

type Props = {
    title:string
    initial?:number
}

const Contador = (props:Props) => {

    const {title,initial} = props;
    const [valor, setvalor] = useState(initial?initial:0);
    

    function Resta1(){
        if(valor > 0){
            setvalor((actual) => actual-1)
        }
    }

    function Mas1(){
        setvalor((actual) => actual+1)
    }

    return <>
    <div className="Contador">
        
        <h1 className="Title">{title}</h1>
        <h2 className="Valor">{valor}</h2>
        <button className="SaR" onClick={Resta1}>-1</button>
        <button className="SaR" onClick={Mas1}>+1</button>
    </div>
    </>
}

export default Contador
