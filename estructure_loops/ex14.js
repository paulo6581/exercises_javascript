//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.
const input = require("prompt-sync") ({sigint: true});

let numeros = [];
for (let i = 0; i<10; i++) {
    let num = input(`Digite o ${i}º número: `);
    if (Number(num) == num) {
        num = Number(num);
        numeros.push(num);
    } else {
        console.log("ERRO, digite novamente.");
        i -= 1;
    }
}

for (let out = 0; out < numeros.length; out++) {
    if (numeros[out] % 2 == 0) {
        console.log(`PAR: ${numeros[out]}`);
    } else {
        console.log(`ÍMPAR: ${numeros[out]}`);
    }
}

