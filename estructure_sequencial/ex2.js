// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
const input = require('prompt-sync') ({sigint: true});
let num = input("Digite um número: ");
console.log(`Número: ${num}`);  