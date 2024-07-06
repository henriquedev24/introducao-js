/* 6. Criar um algoritmo que leia o um número inteiro entre 1 e 7 e escreva o
dia da semana correspondente. Caso o usuário digite um número fora desse intervalo,
deverá aparecer uma mensagem informando que não existe dia da semana com esse
número. */
var num = 7

switch (num) {
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log("sexta")
        break;
    case 6:
        console.log('sexta')
        break;
    case 7:
        console.log('Sabado')
        break;


    default:
        console.log('ERRO')
        break;
}
