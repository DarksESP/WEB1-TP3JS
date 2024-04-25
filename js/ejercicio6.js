/*Cree una “Lista de Tareas” donde cada tarea se agrega desde un input de texto.
 */

let btnAGregarTarea = document.getElementById("agregarTarea");
btnAGregarTarea.addEventListener("click", Agregar);

function Agregar () {
    let tarea = document.getElementById("tarea").value;

    let ul= document.getElementById("ul");
    let crearItem = document.createElement("li");

    crearItem.innerHTML = tarea;

    ul.appendChild(crearItem);
    console.log("ok")
}