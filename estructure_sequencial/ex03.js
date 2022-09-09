// Faça um Programa que peça dois números e imprima a soma.
const input = require('prompt-sync') ({sigint: true});
let num1 = input("Digite um número: ");
let num2 = input("Digite outro número número: ");
num1  = parseFloat(num1);
num2 = parseFloat(num2);
let result = num1 + num2;
console.log(`Resultado: ${result}`);