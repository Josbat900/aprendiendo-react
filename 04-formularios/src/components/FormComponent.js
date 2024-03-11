import React, { useState } from 'react'

export const FormComponent = () => {

    const [usuario, setUsuario] = useState({})

    const datosForm = e =>{
        e.preventDefault();

        let datos = e.target;
        let usuario = {
            nombre:datos.nombre.value,
            apellido:datos.apellido.value,
            genero:datos.genero.value,
            bio:datos.bio.value
        }
        console.log(usuario)

        setUsuario(usuario)
    }

    const cambiarDatos = e =>{
        let nameInput= e.target.name;
        //let usuarioModificar = usuario
        
        //usuarioModificar[nameInput] = e.target.value

        /* con el return normal
        setUsuario(estadoPrevio =>{
            return{
                ...estadoPrevio,
                [nameInput]: e.target.value
            }
        });
        */
        //return automatico de las arrow function
        setUsuario(estadoPrevio =>({    
                ...estadoPrevio,
                [nameInput]: e.target.value 
        }));
    }

  return (
    <div className='formApp'>
        <h1>Formularios con React</h1>
          {usuario.bio && usuario.bio.length >= 1 &&
              (<div className='label labelRed'>
                  {usuario.nombre} {usuario.apellido} es {usuario.genero} y su bio es: <p>{usuario.bio}</p>
              </div>)
          }
          <form onSubmit={datosForm}>
              <input
                  type='text'
                  placeholder='nombre'
                  name='nombre' 
                  onChange={cambiarDatos}/>
              <input
                  type='text'
                  placeholder='apellido'
                  name='apellido' 
                  onChange={cambiarDatos}/>
              <select name='genero' onChange={cambiarDatos}>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
              </select>
              <textarea
                  placeholder='biografia'
                  name='bio'
                  onChange={cambiarDatos}>
                    </textarea>
              <input type='submit' value="enviar" />
          </form>
    </div>
  )
}
