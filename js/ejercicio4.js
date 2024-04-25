/*Crear un html con 3 botones de distinto color. 
Agregar la funcionalidad para que se muestre en un párrafo un
 mensaje que avise cuál de los botones fue el último cliqueado.
 */


 let btnRojo = document.getElementById("rojo");
 let btnAmarillo = document.getElementById("amarillo");
 let btnNegro = document.getElementById("negro");

 let ultimoClick = document.getElementById("ultimo");

 btnRojo.addEventListener("click", mostrarRojo);
 btnAmarillo.addEventListener("click", mostrarAmarillo);
 btnNegro.addEventListener("click", mostrarNegro );

 function mostrarRojo () {
    ultimoClick.innerHTML = "FUE APRETADO EL ROJO";
 }

 function mostrarAmarillo () {
    ultimoClick.innerHTML = "FUE APRETADO EL AMARILLO";
 }

 function mostrarNegro () {
    ultimoClick.innerHTML = "FUE APRETADO EL NEGRO";
 }


