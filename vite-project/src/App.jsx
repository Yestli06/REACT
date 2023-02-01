import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador  from './contador'
import Yes from './contador'

function App() {
  const Nuevo=()=>{
    
    return (
      <p>Nuevo componente</p>
    )
  }

const Aler=()=>{alert("Mensaje de alerta")
}

const Otro=()=>{
return (
  //(<button onClick={()=>(console.log("boton click"))} >nuevo componente</button>)
  (<button onClick={()=>(Aler())} >nuevo componente</button>)
)

}


const b="esto es una prueba"
var c="variable con var"

return (
  <>
    {/* <h1> { Nuevo}</h1>
    <h2> Prueba spa { b } </h2>
    <h1>{c}</h1>
    <Otro/> */}
    <Contador/>
  
  </>
)

}

export default App
