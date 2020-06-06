/*1.	Crear una funcién que retorne la suma de dos ndmeros.*/

function sumaNum(a, b){
    let resultado = a + b;
    return resultado;

}

console.log ("La suma de los 2 numeros es igual a: " + sumaNum(10,20));

/*2.	Crear una funcién que retorne la potencia de un ndmero dado, esta funcién debero recibir la potencia y el ndmero a potenciar.*/


function resuPotencia(num, pot){
    let elevado = Math.pow(num, pot);
    return elevado;
}

console.log("La potencia del numero ingresado es igual a: "+ resuPotencia(2,3));

/*3.	Cree una funcién que tome ndmeros y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
 Since 1^3 + 5^3 + 9^3 = 1+ 125 + 729 = 855*/

 function sumOfCubes(num1, num2 , num3){
     let cubo1 = Math.pow(num1, 3);
     let cubo2 = Math.pow(num2, 3);
     let cubo3 = Math.pow(num3, 3);
     let suma = cubo1 + cubo2 + cubo3;
     return suma;
 }

 console.log("La suma de los cubos de los numeros ingresados son: " + sumOfCubes(1, 5, 9));
/*4.	Escribe una funcién que tome la base y la altura de un triongulo y devuelva su orea.
triArea(3, 2) ➞ 3*/

function triArea(b, h){
   let  area = (b * h) / 2;
   return area;
}

console.log(triArea(3, 2));
/*5.	Crear una funcién Ilamada calculator que recibe 3 parometros, dos ndmeros y una operacion matemotica (+,—,/,x,%),
 y si la operacién no es corrects que envié un mensaje “El parometro no es reconocido” calculator(2,"+", 2) ➞ 4*/

 function calculator(n1, operador, n2){
     let resultado = 0;
     if( operador === "+" & operador === "-" & operador === "*" & operador === "/" ){
        switch (operador) {
            case "+":
              resultado = n1 + n2;
              break;
            case "-":
              resultado = n1 - n2;
              break;
            case "*":
              resultado = n1 * n2;
              break;
            case "/":
              resultado = n1 / n2;
              break;
            default:
              break;
          }
        }

          else{
              console.log("El parometro no es reconocido");
          }     
     return resultado;
 }
 console.log(calculator(2, + 2));