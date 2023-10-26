import { getAllProducts } from "../service/products.js"

//Instancias de elementos

const contenedor_camarones = document.getElementById("contenedor-ropa-masculina")
const contenedor_calamares = document.getElementById("contenedor-accesorios")
const contenedor_almejas = document.getElementById("contenedor-componentes")

const fillProducts = async ()=>{
    const products = await getAllProducts()

    products.forEach(product=>{
        const category = product.category

        let container;
        if (category == "men's clothing"){
            container= contenedor_camarones
        } else if (category == "jewelery"){
            container= contenedor_calamares
        } else if (category == "electronics"){
            container = contenedor_almejas
        }

        //Crear elemento en la categoria
        container.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img 
                            style ="min-height: 300px; max-height: 300px;"
                            class="card-img-top"
                            src="${product.image}" 
                            alt="">
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">${product.title}</h5>
                                    <span>${product.price}</span>
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center d-flex gap-1">
                                <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">Ver mas</a>
                                    <a href="" class="btn btn-outline-success mt-auto">Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                    </div> `
        
        
    })
}

fillProducts()