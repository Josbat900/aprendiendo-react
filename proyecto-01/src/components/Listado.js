import React, { useEffect, useState} from 'react'
import { Edit } from './Edit';

export const Listado = ({listState,setListState}) => {

    // const [listState,setListState]= useState([])

    const [editar, setEditar] = useState(0);

    
    const getPelis = ()=>{
        let pelis = JSON.parse(localStorage.getItem("pelis"));
        setListState(pelis);
        return pelis
    };
    
    useEffect(()=>{
        getPelis();
    },[]);

    const deletePeli = (id) =>{
        let pelisGuardadas = getPelis();
        
        let nuevoArray = pelisGuardadas.filter(peli => peli.id !== parseInt(id));

        setListState(nuevoArray)

        localStorage.setItem("pelis",JSON.stringify(nuevoArray))
    }

    return (
        <>
            {listState != null ? listState.map(peli => {
                return (
                    <article key={peli.id} className="itemPeli">
                        <div className="barrita"></div>
                        <h3 className="title">{peli.title}</h3>
                        <p className="Description">{peli.description}</p>

                        <button className="edit" onClick={()=> setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={()=> deletePeli(peli.id)}>Borrar</button>
                        {editar === peli.id &&(
                            <Edit peli={peli} 
                                getPelis={getPelis}
                                setEditar={setEditar}
                                setListState={setListState}
                            />
                        )}
                    </article> 
                );
            }): <h1>No hay peliculas para mostrar</h1>
          }
        </>
    )
}
