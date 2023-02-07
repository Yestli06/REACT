import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Example from './contador'


function App() {  
  const [valor, setValor] = useState("")
  const [valor1,setValor1] = useState("")
  const [op, setOp]=useState("")

 
  const Operador = (i) => {
    if (op == "") {
      setValor1(parseFloat(valor));
      setOp(i.target.value);
      setValor("");
    } else {
      setOp(i.target.value);
    }
  };


  const Res =()=>{
    if(op == "+"){
    setValor(parseFloat(valor) + valor1);
    setOp("");
    setValor1("");
    }
    if(op == "-"){
    setValor(parseFloat(valor1) - valor);
    setOp("");
    setValor1("");
    }
    if(op == "/"){
    setValor(parseFloat(valor1) / valor);
    setOp("");
    setValor1("");
    }
    if(op == "*"){
    setValor(parseFloat(valor) * valor1);
    setOp("");
    setValor1("");
    }
};

  const Borrar = () => {
    return(
     setValor("")
    )
 }
  
  function Example(props){
    return(
       <button onClick={()=> setValor(valor +(props.numero) )} class=" btn-primary"> {props.numero}</button>  
      )
  }
  
  function BtnOpera(props){
    return(
      <button class=" btn-primary" onClick={Operador} value={props.numero}>{props.numero}</button>
    )
  } 

  function Resultado(props){
    return(
      <button class=" btn-danger" onClick={Res} value={props.numero}>{props.numero}</button>
    )
  } 

  const Pantalla =()=>{
    return(
      <input type="text" value={valor} />
    )
  }

  function Borrar1(props){
    return(
        <button class=" btn-warning" onClick={Borrar} value={props.numero}>{props.numero}</button>
    )
}

  return (
    <>
      <Pantalla/>
      <table border="1">
     <tr>
        
     </tr>
      <tr>
        <td><Example numero="1"/></td>
        <td><Example numero="2"/></td>
        <td><Example numero="3"/></td>
        <td><Borrar1 numero="C"/></td>
      </tr>
      <tr>
        <td><Example numero="4"/></td>
        <td><Example numero="5"/></td>
        <td><Example numero="6"/></td>
        <td><BtnOpera numero="-"/></td>
      </tr>
      <tr>
        <td><Example numero="7"/></td>
        <td><Example numero="8"/></td>
        <td><Example numero="9"/></td>
        <td><BtnOpera numero="*"/></td>
      </tr>
      <tr>
        <td><BtnOpera numero="/"/></td>
        <td><Example numero="0"/></td>
        <td><BtnOpera numero="+"/></td>
        <td><Resultado numero="="/></td>
       
      </tr>
    </table>
    </>
  )

}

export default App
