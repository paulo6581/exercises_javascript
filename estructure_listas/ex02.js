// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
const input = require('prompt-sync')({sigint: true});
let vetor = [];
for (let i = 0; i < 10; i += 1) {
    let num = input(`Digite o ${i}º número: `);
    if(Number(num) == num) {
        num = parseFloat(num);
        vetor.push(num);
    } else {
        console.log("inválido, digite novamente.");
        i -= 1;
    }
} 
console.log(vetor.reverse());