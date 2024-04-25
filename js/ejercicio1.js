/* 1 .¿Cómo se integra JS a un proyecto Web? ¿Qué función tiene?
   2 .¿Qué es el DOM? ¿Para qué nos sirve en JS?
   3 .¿Qué es un evento en JS?
 */

   // 1. JS es un lenguaje orientado a interacciones con el usuario, por lo cual su principal funcion es generar acciones cuando el usuario hace ciertas acciones
   // Se integra usando el tag:  <script type="text/javascript" src="js/script.js"></script>

   // 2. DOM: DOCUMENT OBJECT MODEL, es una forma de representar nuestro codigo HTML en un diagrama de arbol, lo cual nos permite comprender la estructura y de esa manera manipular elementos desde JS

   //3. Un evento, basicamente, es una accion provocada por el usuario. Por ejemplo, un click en un boton, el cual llama a una funcion de JS, 
   //el programa lo procesa; y luego lleva a cabo una accion que se puede visualizar por pantalla


   // NIVEL BASICO

    // EJERCICIO 1
   //Muestre una alerta al cargar una página
   //Que sea un texto fijo
   //Que sean dos variables nombre y apellido concatenadas, mostrando en el mensaje: Nombre: (valor_nombre)  Apellido: (valor_apellido)

   let nombre = "Darks";
   let apellido ="ESP";

   alert("Nombre: " + nombre + "  Apellido: " + apellido);
