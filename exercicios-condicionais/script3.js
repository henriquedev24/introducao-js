/* A CEF concederá um crédito especial com juros de 2% aos seus clientes de acordo com
o saldo médio no último ano. Fazer um algoritmo que leia o saldo
médio de um cliente e calcule o valor do crédito de acordo com a tabela a seguir.
Imprimir uma mensagem informando o saldo médio e o valor de crédito. */
var saldomedio = 1500
function calcularValordoCredito(saldomedio) {
    if (saldomedio >= 0 && saldomedio <= 500) {
        return "Nenhum crédito";
    } else if (saldomedio >= 501 && saldomedio <= 1000) {
        return saldomedio * 0.03;
    } else if (saldomedio >= 1001 && saldomedio <= 3000) {
        return saldomedio * 0.04;
    } else if (saldomedio > 3001) {
        return saldomedio * 0.05;
    }
}

let valorCredito = calcularValordoCredito(saldomedio);
console.log(saldomedio);
console.log(valorCredito);