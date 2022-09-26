//Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
const input = require('prompt-sync') ({sigint: true});
let num = input("Digite um número inteiro: ");
let result = 1;
const calcFatorial = (num) => {
    for(let out = 1 ; out <= num; out++) {
        result *= out;
    }
    return `${num}! = ${result}`;
}

if(Number(num) == num) {
        num = parseInt(num);
        console.log(calcFatorial(num));
} else {
    console.log("ERRO, inválido!");
}