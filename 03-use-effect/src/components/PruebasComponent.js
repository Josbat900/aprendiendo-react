import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

  const [usuario, setUsuario] = useState("Sebastian");
  const [fecha, setFecha]= useState("06-15-2022")
  const [contador, setContador] = useState(0)
  
  const modUsuario = e=>{
    setUsuario(e.target.value)
  }

  const cambiarFecha = e=>{
    setFecha(Date.now().toLocaleString())
  }
// se ejecuta una vez al cargar el componente
  useEffect(()=>{
    console.log("has cargado el componente")
  },[])

  useEffect(()=>{
    setContador(contador+1)
    console.log("has cambiado el usuario "+ contador)
  },[usuario])

  return (
    <div>
      <h1>Hook useEffect</h1>
      <strong className={contador >= 10 ? "label" : "label labelRed"}>{usuario}</strong>
      <strong>{fecha}</strong>
      <p>
        <input
          onChange={modUsuario}
          type='text'
          placeholder='cambia el nombre' />
        <button onClick={cambiarFecha}> cambiar fecha </button>
      </p>
      {usuario === "josbat" && <AvisoComponent/>}
    </div>
  )
}
