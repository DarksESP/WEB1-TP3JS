/*Crear un botón que al hacer click cambie el color de fondo de un div 
y agregue borde de 3px rojo.
 */

let btnCambiarColor = document.getElementById("cambiar");
btnCambiarColor.addEventListener("click", colorRojo);

function colorRojo() {
    let caja1 = document.getElementById("caja1");
    caja1.classList.toggle("rojo");
}