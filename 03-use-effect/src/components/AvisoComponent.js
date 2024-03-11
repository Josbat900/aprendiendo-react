import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        // cuando el componente se monta
        alert("el componnete esta montado")
        //cuando se desmonta
        return()=>{
            alert("componente desmontado")
        }
    },[])// se ejecuta una sola vez
  return (
    <div>
        <hr/>
        <h3>Hola Josbat</h3>
        <button onClick={e=>{
            alert("welcome")
        }}>mostrar alerta</button>
    </div>
  )
}
