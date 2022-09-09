/*Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.
*/
const input = require("prompt-sync") ({sigint: true});
let num1  = input("Digite número inteiro: ");
let num2  = input("Digite número inteiro: ");
let num3  = input("Digite número real: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseFloat(num2);
let result_1 = (2*num1)*(num2/2); 
let result_2 = 3*(num1 + num3);
let result_3 =  num3**3;
console.log(`Resultados: \n${result_1}\n${result_2}\n${result_3}`);