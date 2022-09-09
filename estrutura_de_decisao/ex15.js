/*Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;
*/
const input = require('prompt-sync') ({sigint: true});
function triangulo(x, y, z) {
    if (x + y > z || x + z > y || y + z > x) {
        console.log("É um triângulo");
        if (x === y && x === z && y === z) {
            return "Triângulo Equilátero, tem 3 lados iguais!";
        }
        else if (x === y || x === z || y === z) {
            return "Triângulo Isósceles, tem 2 quaisquer lados iguais";
        }
        else if (x !== y && x !== z && y !== z) {
            return "Triângulo Escaleno, tem 3 lados diferentes";
        }
    }
}

let l1 = input("Digite o lado 1: ");
let l2 = input("Digite o lado 2: ");
let l3 = input("Digite o lado 3: ");
if (Number(l1) == l1 && Number(l2) == l2 && Number(l3) == l3) {
    l1 = parseFloat(l1);
    l2 = parseFloat(l2);
    l3 = parseFloat(l3);
    let result = triangulo(l1, l2, l3);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}