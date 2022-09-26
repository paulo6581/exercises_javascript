//A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.
const input = require('prompt-sync') ({sigint: true});
let numero = input("Digite um número que deseja gerar: ");
let numFibonacci = [];
numFibonacci[0] = 0;
numFibonacci[1] = 1;
const serieFibonacci = () => {
    for(let out = 2; out < numero; out++) {
        numFibonacci[out] = numFibonacci[out - 2] + numFibonacci[out - 1];
    }
    return numFibonacci;
}
if (Number(numero) == numero) {
    numero = parseInt(numero);
    console.log(serieFibonacci());
} else {
    console.log("ERRO, inválido!");
}