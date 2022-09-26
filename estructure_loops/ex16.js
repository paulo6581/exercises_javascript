//A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.
const input = require('prompt-sync') ({sigint: true});
do {
    let num = input("Digite um número para gerar a sequência fibonacci: ");
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    const serieFibonacci = (num) => {
        for(let out = 2; out < num; out++) {
            fibonacci[out] = fibonacci[out - 2] + fibonacci[out -1];
        }
        return fibonacci;
    }

    if(Number(num) == num) {
        num = parseInt(num);
        if(num >= 16) {
            console.log(serieFibonacci(num));
        } else {
            console.log("Dado inválido, digite novamente.");
            continue;
        }
    } else {
        console.log("ERRO, inválido!");
        continue;
    }
} while(true);