// Faça um programa que leia 5 números e informe o maior número.
const input = require("prompt-sync")({ sigint: true });
do {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
    let num = input(`Digite o ${i}ª número: `);
    if (Number(num) == num) {
        num[i] = Number(num);
        numeros.push(num);
    } else {
        console.log("Digite novamente");
        i -= 1;
    }
    }
    let numMaior = numeros[0];
    let out;
    for ( out in numeros) {
        if (numeros[out] > numMaior) {
            numMaior = numeros[out];
        }
    }
    console.log(`Número Maior: ${numMaior}`);
    out = input("Deseja Sair?\n[s] ou [n]: ");
    if (out == 's') {
        console.log("Hasta La Vista Baby!");
        break;
    } else {
        continue;
    }
} while(true);