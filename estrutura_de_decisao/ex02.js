// Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
const input = require("prompt-sync") ({sigint: true});
let num = input("Digite um número: ");
num = parseFloat(num);
if (num < 0) {
    console.log(`O ${num} e um número negativo!`);
}
else if (num > 0) {
    console.log(`O ${num} e um número positivo!`);
}
