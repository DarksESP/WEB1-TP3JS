/*Implementar una calculadora que permita ingresar dos operandos mediante dos inputs y permita realizar
 las operaciones básicas (suma, resta, división, multiplicación) elegidas desde una lista desplegable (select).
 */
 let btnCalcular = document.getElementById("calcular");
 btnCalcular.addEventListener("click", calculo);

 function calculo () {
     let numero1 = parseFloat(document.getElementById("numero1").value);
     let numero2 = parseFloat(document.getElementById("numero2").value);

     let btnOpciones = document.getElementById("opciones").value;
     let resultado = document.getElementById("resultado");

     if(btnOpciones == "suma") {
         let sumar = numero1 + numero2;
         resultado.innerHTML = sumar;

     }

     else if (btnOpciones == "resta") {

         let resta = numero1 - numero2;
         resultado.innerHTML = resta;
     }

     else if (btnOpciones == "multiplicar") {

         let multiplicar = numero1 * numero2;
         resultado.innerHTML = multiplicar
     }

     else if (btnOpciones == "dividir") {

         let dividir = numero1/numero2;
         resultado.innerHTML = dividir;
     }

     else {
        alert("SELECCIONE UNA OPCION")
     }


    }

 
 


 



 