/*Crear un formulario con Nombre, Apellido y un botón Enviar.
 Al presionar Enviar debe mostrar el nombre y apellido como un título dentro de la página. */


 let btnEnviar = document.getElementById("enviar");
 btnEnviar.addEventListener("click", MostrarDatos);

 function MostrarDatos () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

  

    let MostrarNombre = document.getElementById("titulo");

    MostrarNombre.innerHTML = nombre + " " + apellido;

    console.log("ok");

    alert(nombre + " " + apellido)




 }