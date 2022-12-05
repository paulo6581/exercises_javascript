// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
const input = require('prompt-sync')({sigint: true});
let vetor  = [];
for (let i = 0; i < 5; i += 1) {
    let num = input(`Digite o ${i}º número: `);
    if(Number(num) == num) {
        num = parseInt(num);
        vetor.push(num);
    } else {
        console.log("Inválido, digite novamente.");
        i -= 1
    }
}
console.log(`Números: ${vetor}`);