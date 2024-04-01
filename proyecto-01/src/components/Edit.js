import React from 'react'

export const Edit = ({ peli, getPelis, setEditar, setListState }) => {
  const titleComponent = "Editar pelicula"
  const saveEdit = (e, id) => {
    e.preventDefault()
    //conseguir el target del evento
    let target = e.target;
    
    //buscar el indice de la pelicuala a actualizar
    const pelisAlmacenadas = getPelis();
    console.log(pelisAlmacenadas)

    const index = pelisAlmacenadas.findIndex(peli => peli.id === id);

    //crear objeto con el indice

    let peliActualizada = {
      id,
      title: target.title.value,
      description: target.description.value
    };

    pelisAlmacenadas[index] = peliActualizada;

    localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));

    setListState(pelisAlmacenadas);
    setEditar(0);
  };
  return (
    <div className='edit_form'>
      <h3 className='title'>{titleComponent}</h3>
      <form className='editar' onSubmit={e => saveEdit(e, peli.id)}>
        <input
          type='text'
          name='title'
          className='tituloEdit'
          defaultValue={peli.title} />

        <textarea
          name='description'
          defaultValue={peli.description}
          className='descriptionEdit' />
        <input type='submit'
          className='editar'
          value="actualizar" />
      </form>
    </div>
  )
}
