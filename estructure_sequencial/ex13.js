/*Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7 */
const input = require("prompt-sync") ({sigint: true});
let sex = input("Digite o seu sexo:\nMasculino[m] ou Feminino[f]: ");
let height = input("Digite a sua altura: ");
height = parseFloat(height);
if (sex === 'm') {
    let result = (72.7 * height) - 58;
    console.log(`O seu peso ideal e: ${result}`);
}
else {
    let result = (62.1 * height) - 44.7;
    console.log(`O seu peso ideal e: ${result}`);   
}
