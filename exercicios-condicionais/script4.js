/* Crie um algoritmo que leia a idade de uma pessoa e informe a sua
classe eleitoral:
 não eleitor (abaixo de 16 anos);
 eleitor obrigatório (entre a faixa de 18 e menor de 65 anos);
 eleitor facultativo (de 16 até 18 anos e maior de 65 anos, inclusive). */
var idade = parseFloat(prompt('Diga sua idade: '));
function classeEleitoral() {
    if (idade < 16) {
        return "Não eleitor"
    } else if (idade >= 18 && idade < 65) {
        return "Eleitor obrigatório"
    } else if (idade >= 16 && idade <= 18 && idade > 65) {
        return "Eleitor facultativo"
    }
}

let resposta = classeEleitoral(idade);
console.log(resposta)