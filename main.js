import Handlebars from "handlebars";
import * as bootstrap from 'bootstrap'; // Los script de bootstrap

import "./style.css";

const urlPlantilla = 'templates/listadoProductos.hbs'
const urlBackProductos = 'http://localhost:8080/productos/'

const obtenerProductosYMostrarlos = async () => {

    try {
        // 1. Obtener la plantilla
        const res = await fetch(urlPlantilla)

        if ( !res.ok ) {
            throw new Error('No se pudo obtener la plantilla')
        }

        const plantilla = await res.text()

        // console.log(plantilla)

        // 2. Hago la petición al back
        const resBack = await fetch(urlBackProductos)

        if ( !resBack.ok ) {
            throw new Error('No se pudieron obtener los productos')
        }

        const productos = await resBack.json()

        // console.log(productos)

        // 3. Genero el html a partir de la plantilla y la data (back)

        const template = Handlebars.compile(plantilla) // una referencia de una función

        const htmlListo = template({productos})

        // console.log(htmlListo)

        document.querySelector('#lista-productos').innerHTML = htmlListo
        
    } catch (error) {
        
    }

}

function leerDataProducto(productoALeer) {
    console.log('Leyendo data...')
    console.log(productoALeer)

    const infoProducto = {
        imagen: productoALeer.querySelector('img').src,
        titulo: productoALeer.querySelector('h5').textContent,
        precio: productoALeer.querySelector('.precio').textContent,
        color: productoALeer.querySelector('.color').textContent,
        id: productoALeer.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoProducto)

    const contenedorItemsCarrito = document.querySelector('#lista-carrito tbody')


}

function comprarProducto(e) {
    //console.log('Compré...', e)
    if ( e.target.classList.contains('agregar-carrito') ) {
        e.preventDefault() // Detener el comportamiento por defecto del anchor tag (a)
        console.log('Hicieron click sobre el comprar producto...')
        //console.log(e.target.parentElement.parentElement)
        const producto = e.target.parentElement.parentElement
        leerDataProducto(producto)
    }
}


// ! Se ejecuta cuando la página es index.html
function esIndex() {
    obtenerProductosYMostrarlos()

    const listadoProductos = document.querySelector('#lista-productos')
    console.log(listadoProductos)

    listadoProductos.addEventListener('click', e => comprarProducto(e))

}

// ! Se ejecuta cuando la página es carrito.html
function esCarrito() {

}

// ! Se ejecuta cuando la página es nosotros.html
function esNosotros() {

}

// ! Se ejecuta cuando la página es contacto.html
function esContacto() {

}


// ! Se ejecuta cuando la páginas se cargan
function start() {

    const ruta = String(location.href)
    console.log(ruta)

    // TODO: Refactorizar en el futuro. Usar la estructura SWITCH
    if ( ruta.includes('carrito.html') ) {
        console.log('Estoy en carrito.html')
        esCarrito()
    } else if ( ruta.includes('nosotros.html' ) ) {
        console.log('Estoy en nosotros.html')
        esNosotros()
    } else if ( ruta.includes('contacto.html') ) {
        console.log('Estoy en contacto.html')
        esContacto()
    } else {
        console.log('Estoy en index.html')
        esIndex()
    }

}

// ! Se va a ejecutar cuando el documento (todas las etiquetas) esten completamente cargadas en el Browser
window.addEventListener('DOMContentLoaded', start)
