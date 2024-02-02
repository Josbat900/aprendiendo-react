import React, {useState} from 'react'

export const MiPrimerEstado = () => {
    /*
    let nombre = "sebastian"
    let cambiarNombre = e =>{
        nombre = "joseph"
    }
    */

    const [nombre,setNombre] = useState("Sebastian");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }
  return (
    <div>
        <h3>componente: mi primer estado</h3>
        <strong className='strong'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        &nbsp;
        <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='cambia el nombre'/>
    </div>
  )
}
