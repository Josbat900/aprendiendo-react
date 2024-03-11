import React,{useState} from 'react'
import PropTypes from "prop-types"

export const EjercicioComponente = ({year}) => {

  const [yearNow, SetYearNow] = useState(year)

  const siguiente= e =>{
    SetYearNow(yearNow+1)
  }

  const Anterior= e =>{
    SetYearNow(yearNow-1)
  }

  const cambiarYear = e =>{
    let dato = parseInt(e.target.value)

    if(Number.isInteger(dato)){
      SetYearNow(dato)
    }else{
      SetYearNow(year)
    }
    
    
  }

  return (
    <div>
      <h2>Ejercicio con Eventos y UseState</h2>
      <strong className='label'>
        {yearNow}
      </strong>
      <p>
        <button onClick={siguiente}>Siguiente</button>
        &nbsp;
        <button onClick={Anterior}>Anterior</button>
      </p>
      <p>cambiar el año:
      &nbsp;
        <input
          onChange={cambiarYear}
          type='text'
          placeholder='cambia el año'></input>
      </p>

    </div>
  )
}

EjercicioComponente.propTypes = {
  year: PropTypes.number.isRequired
}