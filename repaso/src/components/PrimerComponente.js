import React, {useState} from 'react'

const PrimerComponente = () => {

    //let nombre = "sebastian"

    let cursos = [
        "master en java",
        "master en python",
        "master en react"
    ]

    const [nombre, setNombre] = useState("sebastian")

    const cambiarNombre = (nuevoNombre) =>{
        setNombre(nuevoNombre)
    }
  return (
    <>
    <div>PrimerComponente div</div>
    <ul>
        {
            cursos.map( (curso, indice) =>{
                return (<li key={indice}>{curso}</li>)
            })
        }
    </ul>

    <input type='text' onChange={e=>cambiarNombre(e.target.value)} placeholder='cambia el nombre'></input>
    <p>mi nombre es: <strong className={nombre.length>=4 ? "verde" :"rojo"}>{nombre}</strong></p>
    <button onClick={e => cambiarNombre("Josbat")}>cambiar nombre</button>
    <button onClick={e=>{
        console.log("el valor guardado en tu estado es", nombre)
        }}> mostar valor del estado </button>
    </>
  )
}

export default PrimerComponente