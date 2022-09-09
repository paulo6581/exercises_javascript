//  Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58 
const input = require("prompt-sync") ({sigint: true});
let height = input("Digite a sua altura: ");
height = parseFloat(height);
let weight = (72.7 * height) - 58;
console.log(`${weight.toFixed(3)}Kg`);