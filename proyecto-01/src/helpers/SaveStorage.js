export const saveStorage = (key,element) =>{

    let elements = JSON.parse(localStorage.getItem(key))
    //comprobamos si es un array
    if(Array.isArray(elements)){
        //añadir un elemento nuevo
        elements.push(element)
    }else{
        // crear un nuevo array con la peli
        elements=[element]
    }
    //guardar en el local storage
    localStorage.setItem(key,JSON.stringify(elements))

    return element 
}