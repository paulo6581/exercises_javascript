/*Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.*/
const input = require('prompt-sync')({sigint: true});
const validation = (num) => (num > 0) ? 'Positivo' : 'Negativo';

let numero = input("Digite um número: ");
if (Number(numero) == numero) {
    numero = Number(numero);
    console.log(validation(numero));
} else console.log("Número inválido");