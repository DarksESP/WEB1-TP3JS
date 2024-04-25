/*Escribir un HTML con tres divs vacíos (sin contenido) y
 llenarlo con un texto desde Javascript al cargar la pagina. 
 Reflexione entre las diferencias en hacerlo en HTML o en Javascript. 
 */

 let Divcaja1 = document.getElementById("caja1");
 let Divcaja2 = document.getElementById("caja2");
 let Divcaja3 = document.getElementById("caja3");


 Divcaja1.innerHTML = "CAJA 1";
 Divcaja2.innerHTML = "CAJA 2";
 Divcaja3.innerHTML = "CAJA 3";

 /*¿Es posible desde JS insertar diferentes párrafos adentro del div?
 */

 //CREAMOS EL ELEMENTO PARRAFO
 let parrafo1 = document.createElement("p");
 let parrafo2 = document.createElement("p");
 let parrafo3 = document.createElement("p");


 //CREAMOS LOS TEXTOS
 let texto1 = document.createTextNode("PARRAFO 1");
 let texto2 = document.createTextNode("PARRAFO 2");
 let texto3 = document.createTextNode("PARRAFO 3");

 //
 parrafo1.appendChild(texto1);
 parrafo2.appendChild(texto2);
 parrafo3.appendChild(texto3);

 // TOMAMOS LOS DIV DE NUESTRO HTML
 let div1 = document.getElementById("caja1");
 let div2 = document.getElementById("caja2");
 let div3 = document.getElementById("caja3");

 div1.appendChild(parrafo1);
 div2.appendChild(parrafo2);
 div3.appendChild(parrafo3);