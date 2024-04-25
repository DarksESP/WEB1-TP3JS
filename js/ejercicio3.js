/* Mostrar el mismo mensaje del punto uno, pero haciendo click desde un botón

Muestre una alerta al cargar una página
Que sea un texto fijo
Que sean dos variables nombre y apellido concatenadas, mostrando en el mensaje: Nombre: (valor_nombre)  Apellido: (valor_apellido)

*/

let btnSaludo = document.getElementById("saludo");
btnSaludo.addEventListener("click", saludar);

function saludar () {
    let nombre = "DarksESP";
    let apellido = "Jueguitos";

    alert ("NOMBRE: " + nombre + "  APELLIDO: " + apellido);

}