/* 1. Escreva um algoritmo que leia um número e informe se ele é divisível por
10, por 5 ou por 2 ou se não é divisível por nenhum deles. */
function numDivisivel(num) {
  if (num % 10 == 0) {
    console.log("Divisível por 10");
} else if(num % 5 == 0){
    console.log("Divisível por 5");
} else if(num % 2 == 0){
    console.log("Divisível por 2");
}   else {
    console.log("Não é divisível por eles");
}
}

let num = parseInt(prompt("Digite o número: "));
let resultado = numDivisivel(num)
console.log(resultado);