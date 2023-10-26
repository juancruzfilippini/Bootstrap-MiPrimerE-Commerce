export function getAllProducts(){
    return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> json)
}

export function getOneProducts(){
    return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=> json)
}