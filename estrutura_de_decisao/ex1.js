// Faça um Programa que peça dois números e imprima o maior deles.
const input = require("prompt-sync") ({sigint: true});
let num1 = input("Digite um número: ");
let num2 = input("Digite outro número: ");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if (num1 > num2) {
    console.log(`O número e ${num1}`);
}
else if (num1 < num2) {
    console.log(`O número e ${num2}`);
}