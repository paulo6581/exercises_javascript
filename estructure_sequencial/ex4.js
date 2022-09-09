// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const input = require('prompt-sync') ({sigint: true});
let num1 =  input("Digite a nota 1: ");
let num2 =  input("Digite a nota 2: ");
let num3 =  input("Digite a nota 3: ");
let num4 =  input("Digite a nota 4: ");
num1 = parsFloat(num1);
num2 = parsFloat(num2);
num3 = parseFloat(num3);
num4 = parseFloat(num4);
let media = (num1 + num2 + num3 + num4)/4; 
alert(`media: ${media}`);