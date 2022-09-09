// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
let raio = prompt("Digite o Raio do círculo: ");
raio = parseFloat(raio);
const pi = 3.14;
let area = pi*(raio**2);
console.log(`Area = ${area}`);