/*Crear una html que tenga un contenedor (div) con información y un botón. 
Cree una función Javascript que oculte o muestre el div que contiene la información.
 */

let btnCambio = document.getElementById("esconder");
btnCambio.addEventListener("click", noMostrar);

function noMostrar () {
    let caja1 = document.getElementById("caja1");
    caja1.classList.toggle("esconder");
}