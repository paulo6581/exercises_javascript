/*Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.*/
const input = require('prompt-sync')({sigint: true});
const soma = (n1, n2, n3) => n1 + n2 + n3;

n1 = input("Digite um número: ");
n2 = input("Digite um número: ");
n3 = input("Digite um número: ");

if (Number(n1) == n1 && Number(n2) == n2 && Number(n3) == n3) {
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    console.log(soma(n1, n2, n3));
} else console.log("número inválido!");