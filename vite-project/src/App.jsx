import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Example from './contador'


function App() {  
  const [valor, setValor] = useState("")
  const [valor2] = useState("")

  var resultado;

  var suma;
  function Example(props){
    return(
       <button onClick={()=> setValor(valor +(props.numero) )} class="btn btn-danger"> {props.numero}</button>  
      )
  }

  

  const Pantalla=()=>{
    return(
        <input type="text" value={valor} />
    )
  }

  const Pantalla2=()=>{
    return(
        <input type="text" value={valor2} />
    )
  }

  const Suma=()=>{
   
  }


  return (
    <>
      <Pantalla/><br />
      <Pantalla2/>
      <table border="1">
     <tr>
        
     </tr>
      <tr>
        <td><Example numero="1"/></td>
        <td><Example numero="2"/></td>
        <td><Example numero="3"/></td>
        <td><Example numero="4"/></td>
        <td><Suma/>+</td>
      </tr>
      <tr>
        <td><Example numero="5"/></td>
        <td><Example numero="6"/></td>
        <td><Example numero="7"/></td>
        <td><Example numero="8"/></td>
        <td><Example numero="-"/></td>
      </tr>
      <tr>
        <td><Example numero="9"/></td>
        <td><Example numero="0"/></td>
        <td><Example numero="/"/></td>
        <td><Example numero="*"/></td>
        <td><Example numero="="/></td>
      </tr>
    </table>
    </>
  )

}

export default App
