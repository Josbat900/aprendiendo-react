import React, { useState } from 'react'
    
export const Search = ({listState, setListState}) => {
    
    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);

    const searchPeli = (e) =>{
        //crear estado y actualizarlo
        setBusqueda(e.target.value);
        // el listado de peliculas
        let pelisEncontradas = listState.filter(peli =>{
            return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });
        // filtrar para buscar coincidencia
        if(busqueda.length <= 1|| pelisEncontradas <= 0){
            pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true)
        }else{
            setNoEncontrado(false)
        }

        //actualizar el estado del listado
        setListState(pelisEncontradas)
    }
    return (
        <>
            <div className="search">
                <h3 className="tittle">Buscador</h3>
                {noEncontrado === true &&(
                    <span className='noEncontrado'>no se ha encontrado ninguna coincidencia</span>
                )}
                <form>
                    <input type="text"
                           id='searchField'
                           name='busqueda'
                           autoComplete='off'
                           onChange={searchPeli}
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </>
    )
}
