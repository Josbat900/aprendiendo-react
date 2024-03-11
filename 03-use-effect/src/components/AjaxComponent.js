import React, { useEffect, useState } from 'react'


export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("")

    /*
    //funcion generica o basica

    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsersAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data)
                console.log(usuarios)
            }, error => {
                console.error(error)
            })
    }
    */
    const getUsersAjaxAW = () => {

        //setTimeout para poder ver el delay
        setTimeout(async()=>{
            try{
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const { data } = await peticion.json();
                console.log(data)
                setUsuarios(data)
                setCargando(false) 

            } catch(error){
                console.error(error)
                setErrores(error.message)
            }
        },1500)

    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsersAjaxPms()
        getUsersAjaxAW();
    }, []);

    if (errores !== "") {
        //cuando hay un error
        return (
            <div className='error'>
                {errores}
            </div>
        );
    } else if (cargando === true) {

        //cuando esta cargando
        return (
            <div className='cargando'>
                cargando datos...
            </div>
        );
    } else if (cargando === false && errores === "") {
        return (
            //cuando funciono bien
            <div>
                <h2>listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario)
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width="40" alt='avatars' />
                                &nbsp;
                                {usuario.first_name}{usuario.last_name}
                            </li>)
                        })
                    }
                </ol>
            </div>
        )
    }
}
