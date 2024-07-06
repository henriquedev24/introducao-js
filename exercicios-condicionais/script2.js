/* 2. Construa um algoritmo para determinar se o indivíduo esta com um peso
favorável. Essa situação é determinada através do IMC (Índice de Massa Corpórea), que é
definida como sendo a relação entre o peso (PESO) e o quadrado da Altura (ALTURA) do
indivíduo */

function calcularIMC(imc) {
    if (imc < 20) {
        console.log(imc, " Está abaixo do peso")
    } else if (imc >= 20 && imc <= 25) {
        console.log(imc," Peso Normal")
    } else if (imc >= 25 && imc <= 30) {
        console.log(imc, " Sobre Peso")
    } else if (imc >= 30 && imc <= 40) {
        console.log(imc, " Obeso")
    } else if (imc >= 40) {
        console.log(imc, " Obeso Mórbido")
    }
}

let altura = parseFloat(prompt("Altura: "))
let peso = parseFloat(prompt("Peso: "))
let imc = peso / (altura^2)
let resultado = calcularIMC(imc)
console.log(resultado)