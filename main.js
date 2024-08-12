import * as bootstrap from 'bootstrap'; // Los script de bootstrap
import "./style.css";
import Handlebars from "handlebars";
import "./style.css";

const urlPlantilla = 'template/listadoProductos.hbs';
const urlBlackProductos = 'http://localhost:8080/productos/';

const obtenerProductosYMostrarlos = async () => {
    try {
        const res = await fetch(urlPlantilla);

        if (!res.ok) {
            throw new Error('No se pudo obtener la plantilla');
        }

        const plantilla = await res.text();
        console.log(plantilla);

        const productosRes = await fetch(urlBlackProductos);
        if (!productosRes.ok) {
            throw new Error('No se pudieron obtener los productos');
        }

        const productos = await productosRes.json();
        console.log(productos);

        const template = Handlebars.compile(plantilla);

        const htmlListo = template({ productos });
        console.log(htmlListo);
        
        // Aquí podrías insertar el HTML generado en el DOM
        document.getElementById('contenedor-productos').innerHTML = htmlListo;
    } catch (error) {
        console.error('Error:', error);
    }
}

function star() {
    const ruta = String(location.href)
    console.log(star)
    if ( !ruta.includes('carrito.html') ) {
        console.log('Estpy en carrito.html')
    }else if ( ruta.includes('nosotros.html')){
        console.log('Estoy en nosotros.html')
    } else if ( ruta.includes('contacto.html')){
        console.log('Estoy en contacto.html')
    } else {
        console.log('Estoy en un index.html')
        obtenerProductosYMostrarlos()
    }

    }

window.addEventListener('DOMContentLoaded', star)

