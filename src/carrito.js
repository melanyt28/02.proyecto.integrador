import lstorage from './local-storage'

// Público
const vaciarCarrito = (contenedorItemsCarrito) => {
    console.log('Vaciando carrito...')

    //console.log(contenedorItemsCarrito)   
    //console.dir(contenedorItemsCarrito)   
    
    while ( contenedorItemsCarrito.firstChild ) { // true o false
        contenedorItemsCarrito.removeChild(contenedorItemsCarrito.firstChild)
    }

    lstorage.vaciarLocalStorage()
}

const eliminarProductoCarrito = (e) => {
    e.preventDefault()
    let producto, productoId
    if ( e.target.classList.contains('borrar-producto') ) {
        //console.dir(e.target)
        console.log('Eliminando producto carrito...')
        //console.log(e.target.parentElement.parentElement)
        // Borra el producto del DOM
        producto = e.target.parentElement.parentElement
        producto.remove()

        // Borra el producto del LocalStorage
        //productoId = producto.querySelector('a').getAttribute('data-id')
        productoId = e.target.dataset.id
        lstorage.eliminarProductoLocalStoragePorId(productoId)

    }
}

export default {
    vaciarCarrito,
    eliminarProductoCarrito
}