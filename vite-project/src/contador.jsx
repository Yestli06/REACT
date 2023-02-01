import { useState } from "react"
import { Fragment } from "react"

export const Contador=()=>{

    // const pant1=()=>{("")}

    const [pant1]=useState() 
    const [pant2,setValor]=useState("") 

    const Sumar=()=>{setValor(pant2+1)}
    const Restar=()=>{setValor(pant2-1)}
    const Uno=()=>{setValor(pant2+ "1")}
    const Dos=()=>{setValor(pant2+ "2")}
    const Tres=()=>{setValor(pant2+ "3")}
    const Cuatro=()=>{setValor(pant2+ "4")}
    const Cinco=()=>{setValor(pant2+ "5")}
    const Seis=()=>{setValor(pant2+ "6")}
    const Siete=()=>{setValor(pant2+ "7")}
    const Ocho=()=>{setValor(pant2+ "8")}
    const Nueve=()=>{setValor(pant2+ "9")}
    const Cero=()=>{setValor(pant2+ "0")}
    const igual=()=>{setValor(pant2+ "")}

    return(
        <Fragment>
        <h1>CALCULADOR</h1>

            
            <button type="button" onClick={Sumar}>+</button>
            <button type="button" onClick={Restar}>-</button>
            <p>{pant1}</p>
            <p>{pant2}</p>
            
           
            <button type="button" onClick={Uno}>1</button>
            <button type="button" onClick={Dos}>2</button>
            <button type="button" onClick={Tres}>3</button>
            <button type="button" onClick={Cuatro}>4</button>
            <button type="button" onClick={Cinco}>5</button>
            <button type="button" onClick={Seis}>6</button>
            <button type="button" onClick={Siete}>7</button>
            <button type="button" onClick={Ocho}>8</button>
            <button type="button" onClick={Nueve}>9</button>
            <button type="button" onClick={Cero}>0</button>
            <button type="button" onClick={igual}>=</button>
            
        </Fragment>
    )
}

// const Yes=()=>{
//     return(
//         <h1>Yestli Meneses</h1>
//     )
// }

export default Contador
// export default Yes