import * as bootstrap from 'bootstrap'; // Los script de bootstrap
import "./style.css";


function getLocalStorage() {
    console.log(localStorage)
}




function getSessionStorage(){
    console.log(SessionStorage)
}


function getLocalStorageItem(clave){
    const valor = localStorage.getItem(clave)
    console.log(valor)
 } 

 /* GET ITEM */

//console.log(LocalStorage.getItem('nombre')) 

//getLocalStorage('nombre')
//getLocalStorage('edad')
//getLocalStorage('isTeacher')

/* setItem */

//localStorage(<key>, <value>)
localStorage.setItem('numero', 2) // dsnajfanao
localStorage.setItem('booleano', true) // El true lo va a convertir en un string

/* localStorage.setItem('array',[2, 4, 5, 6, 7]) */

localStorage.setItem('array',[2, 4, 5, 6, 7])





