// Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).
const input = require('prompt-sync') ({sigint: true});
function parImpar(num) {
    if (num % 2 == 0) {
        return `O número ${num} é PAR!`;
    }
    else {
        return `O número ${num} é ÍMPAR!`;
    }
}
let num = input("Digite um número: ");
if (Number(num) == num) {
    num = parseInt(num);
    let result = parImpar(num);
    console.log(result);
}