import React, { useState } from 'react'
import { saveStorage } from '../helpers/SaveStorage';

export const Create = ({setListState}) => {

    const titleComponent = "Añadir pelicula";

    const[peliState, setPeliState] = useState({
        title: "",
        description: ""
    })

    const {title, description} = peliState;

    const getFormValue = e =>{
        e.preventDefault()
        //conseguir datos del form
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            title,
            description
        }
        //guardar estado
        setPeliState(peli)

        //actualizar el estado del listado principal
        setListState(Elements =>{
            return [...Elements, peli]
        })
        //guardar en el almacenamiento local
        saveStorage("pelis",peli)
    }
    
    
  return (
      <>
          <div className="add">
              <h3 className="title">{titleComponent}</h3>
              {(title && description)&& "has creado la pelicula: "+title}
              <form onSubmit={getFormValue}>
                  <input
                      type="text"
                      id='title'
                      name='title'
                      placeholder="Titulo" />
                  <textarea
                      id='description'
                      name='description'
                      placeholder="Descripcion"></textarea>
                  <input
                      type="submit"
                      id="save"
                      value="guardar" />
              </form>
          </div>
      </>
  )
}
