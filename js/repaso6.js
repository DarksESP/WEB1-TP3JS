/*Cree una “Lista de Tareas” donde cada tarea se agrega desde un input de texto.
 */

let btnAgregarTarea = document.getElementById("agregar");
btnAgregarTarea.addEventListener("click", agregarTarea);

function agregarTarea (){
    let tarea = document.getElementById("tarea").value;

    let ul = document.getElementById("ul");
    let crearItem = document.createElement("li");

    crearItem.innerHTML = tarea;

    ul.appendChild(crearItem);


}