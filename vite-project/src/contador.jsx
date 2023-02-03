import { useEffect } from "react";
import { useState } from "react"
import { Fragment } from "react"

function Example(props){
    const [valor, setValor] = useState("")
    return(
        <Fragment>
        <div>
            <button onClick={()=> setValor(valor +(props.numero) )} class="btn btn-danger"> {props.numero}</button>
        </div>
        </Fragment>
    )
}

export default Example
// export default Yes