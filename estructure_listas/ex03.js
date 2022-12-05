// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
const input = require('prompt-sync')({sigint: true});
let notas = [];
for (let i = 0; i< 4; i += 1) {
    let nota = input(`Digite a sua ${i}ª nota: `);
    if(Number(nota) == nota) {
        nota = parseFloat(nota);
        notas.push(nota);
    } else {
        console.log("inválido, digite novamente.");
        i -= 1;
    }
}
let media, soma = 0;
for (let i in notas) {
    soma += notas[i];
    media = (soma)/notas.length;
}
console.log(`Média: ${media}`);