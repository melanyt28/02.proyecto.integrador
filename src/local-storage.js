// Módulo JS

// Privada
const keyCarrito = 'productos'

function leerProductosLocalStorage(contenedorItemsCarrito) {
    console.log('leyendo el localstorage...', contenedorItemsCarrito)

    let productosLocal

    productosLocal = obtenerProductosLocalStorage()

    productosLocal.forEach(producto => {
        const row = document.createElement('tr')

        // TODO: Refactorizar y convertir esto en una plantilla
        row.innerHTML = `
            <td scope="col">
                <img src="${producto.imagen}" alt="${producto.titulo}" width="100">
            </td>
            <td scope="col">${producto.titulo}</td>
            <td scope="col">${producto.precio}</td>
            <td scope="col">
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}" style="text-decoration: none;"></a>
            </td>
        `
        console.log(row)
        contenedorItemsCarrito.appendChild(row)
    });


}

// Público
function obtenerProductosLocalStorage() {
    let productosLocal
    //debugger
    if ( localStorage.getItem(keyCarrito) === null ) { // Compruebo si no hay productos
        productosLocal = []
    } else {
        productosLocal = JSON.parse(localStorage.getItem(keyCarrito))
    }

    return productosLocal
}

// Pública
function guardarProductoLocalStorage(producto) {
    console.log('Recibido el producto para guardar dentro del storage...')
    console.log('Guardando....', producto)

    let productos 

    // 1. Obtengo el storage y lo guardo dentro de productos -> array
    productos = obtenerProductosLocalStorage()
    console.log(productos)
    // Guardo en el array el producto que recibo
    productos.push(producto)
    // Guardo en el storage
    window.localStorage.setItem(keyCarrito, JSON.stringify(productos))

}

function eliminarProductoLocalStoragePorId(id) {
    console.log('Eliminando el producto...', id)
    let productosLocal 
    // Obtenemos del localStorage los productos
    productosLocal = obtenerProductosLocalStorage()
    // Comparamos el ID del producto a ser borrado con los id del array que tengo en el localStorage
    //console.log(productosLocal)
    productosLocal.forEach(function(producto, index) {
        if ( producto.id ===  id ) {
            productosLocal.splice(index, 1) // Eliminar un producto basado en su posición dentro del array
        }
    })
    //console.log(productosLocal) // <---- Array no va a tener el producto con el id que le pasamos a la función
    // Volvemos a agregar al localStorage los productos sin el producto ELiminado
    window.localStorage.setItem(keyCarrito, JSON.stringify(productosLocal))
}

// Pública
function vaciarLocalStorage() {
    window.localStorage.clear()
}

export default {
    guardarProductoLocalStorage,
    vaciarLocalStorage,
    leerProductosLocalStorage,
    eliminarProductoLocalStoragePorId,
    obtenerProductosLocalStorage
}