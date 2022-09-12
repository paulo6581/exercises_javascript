// Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.
const input = require('prompt-sync') ({sigint: true});
function typeNum(num) {
    if (parseInt(num) == num) {
        return "O número é inteiro!";
    }
    else if (parseFloat(num) == num) {
        return "O número é decimal!";
    }
}
let num = input("Digite um número: ");
if(Number(num) == num) {
    let result = typeNum(num);
    console.log(result);
}