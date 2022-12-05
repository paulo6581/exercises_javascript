/*Faça um programa para imprimir:
1
2   2
3   3   3
.....
n   n   n   n   n   n  ... n
para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.*/ 
const input = require('prompt-sync')({sigint: true});

const output = (n) => {

    for (let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j ++) {
            console.log(i);
        }
    }
}

let numero = input('Digite um número: ');
if (Number(numero) == numero) {
    numero = parseInt(numero);
    console.log(output(numero));
} else console.log("Valor inválido!");