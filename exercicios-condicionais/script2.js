/* 2. Construa um algoritmo para determinar se o indivíduo esta com um peso
favorável. Essa situação é determinada através do IMC (Índice de Massa Corpórea), que é
definida como sendo a relação entre o peso (PESO) e o quadrado da Altura (ALTURA) do
indivíduo */
function calcularIMC(altura, peso) {
    return peso / (altura ** 2); 
}

function classifIMC(altura, peso) {
    var imc = calcularIMC(altura, peso);
    if (imc < 20) {
        return "IMC: " + imc.toFixed(1) + " - Está abaixo do peso";
    } else if (imc >= 20 && imc <= 25) {
        return "IMC: " + imc.toFixed(1) + " - Peso Normal";
    } else if (imc > 25 && imc <= 30) {
        return "IMC: " + imc.toFixed(1) + " - Sobrepeso";
    } else if (imc > 30 && imc <= 40) {
        return "IMC: " + imc.toFixed(1) + " - Obeso";
    } else if (imc > 40) {
        return "IMC: " + imc.toFixed(1) + " - Obeso Mórbido";
    }
}

var altura = parseFloat(prompt("Altura: "));
var peso = parseFloat(prompt("Peso: "));

 
var resultado = classifIMC(altura, peso); 

console.log(resultado);