// Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
const input = require('prompt-sync') ({sigint: true});
let numeros = [];
for (let i = 0; i<2; i++) {
    let num = input(`Digite o ${i}º número: `);
    if (Number(num) == num) {
        num = Number(num);
        numeros.push(num)
    } else {
        console.log("Digite novamente");
        i -= 1;
    }
}

let out, numMenor, numMaior;
if(numeros[0] < numeros[1]) {
    numMenor = numeros[0];
    numMaior = numeros[1];
} else {
    numMenor = numeros[1];
    numMaior = numeros[0];
}
numeros.shift();
numeros.shift();
for (out = numMenor +1; out < numMaior; out++) {
    
    numeros.splice(0, 2, out);
    console.log(numeros);
}
