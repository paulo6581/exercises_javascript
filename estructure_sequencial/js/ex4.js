// Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let num1 =  prompt("Digite a nota 1: ");
let num2 =  prompt("Digite a nota 2: ");
let num3 =  prompt("Digite a nota 3: ");
let num4 =  prompt("Digite a nota 4: ");
num1 = parsFloat(num1);
num2 = parsFloat(num2);
num3 = parseFloat(num3);
num4 = parseFloat(num4);
let media = (num1 + num2 + num3 + num4)/4; 
alert(`media: ${media}`);