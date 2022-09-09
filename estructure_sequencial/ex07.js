// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const input = require('prompt-sync') ({sigint: true});
let side = input("Digite a medida do lado do quadrado: ");
side = parseFloat(side);
let area = 2*(side**2);
console.log(`Area = ${area}`);  