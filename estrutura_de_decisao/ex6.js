// Faça um Programa que leia três números e mostre o maior deles.
const input = require("prompt-sync") ({sigint: true});
let num1 = input("Digite o número 1: ");
let num2 = input("Digite o número 2: ");
let num3 = input("Digite o número 3: ");
num1  = parseFloat(num1).toFixed(2);
num2  = parseFloat(num2).toFixed(2);
num3  = parseFloat(num3).toFixed(2);
if(num1 > num2 && num1 > num3)
{
    console.log(`Maior: ${num1}`);
}
else if(num2 > num1 && num2 > num3)
{
    console.log(`Maior: ${num2}`)
}
else if(num3 > num1 && num3 > num2)
{
    console.log(`Maior: ${num3}`);
}

