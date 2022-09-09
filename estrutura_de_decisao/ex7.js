// Faça um Programa que leia três números e mostre o maior e o menor deles.
const input = require("prompt-sync") ({sigint: true});

let num1 = input("Digite um numero: ");
let num2  = input("Digite outro numero: "); 
let num3  = input("Digite outro numero de novo: "); 

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

function deMenor() {
    if ( num1 < num2 && num1 < num3) {
        console.log(`Número ${num1} é menor`);
    }
    else if(num2 < num1 && num2 < num3) {
        console.log(`Número ${num2} é menor`)
    }
    else if(num3 < num1 && num3 < num2) {
        console.log(`Número ${num3} é menor`)
    }
}

if(num1 > num2 && num1 > num3) {
    outMaior(num1);
    deMenor();
}
else if(num2 > num1 && num2 > num3) {
    outMaior(num2);
    deMenor();
}
else if(num3 > num1 && num3 > num2)
{
    outMaior(num3);
    deMenor();
}

function outMaior(num) {
    console.log(`Número ${num} é maior`);
}

