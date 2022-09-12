/* Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
par ou ímpar;
positivo ou negativo;
inteiro ou decimal.
*/
const input = require('prompt-sync') ({sigint: true});
function operationsType(n1, n2, operacao) {
    let operaResult;
    switch(operacao) {
        case '+': operaResult = n1 + n2; break;
        case '-': operaResult = n1 - n2; break;
        case '*': operaResult = n1 * n2; break;
        case '/': operaResult = n1 / n2; break;
        case '**': operaResult = n1 ** n2; break;
        default: console.log("inválido, digite novamente!");
    }
    const checkFloat = (operaResult) => {
        if(operaResult % 1 === 0) {
            return "O numero é inteiro!";
        }
        else {
            return "O número é decimal";
        }
    }
    let negPos = Math.sign(operaResult);
    if(operaResult % 2 == 0) {
        return `O número ${operaResult} é PAR\nNegativo ou Positivo: ${negPos}\n${checkFloat(operaResult)}`;
    }
    else {
        return `O número ${operaResult} é IMPAR\nNegativo ou Positivo: ${negPos}\n${checkFloat(operaResult)}`;
    }
}

let n1 = input("Digite um número: ");
let n2 = input("Digite outro número: ");
if (Number(n1) == n1 && Number(n2) == n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    console.log("Digite qual operação deseja realizar: somar[+]\nsubtração[-]\nmultiplicação[*]\ndivisão[/]\npotenciação[**]");
    let operacao = input("Digite: ");
    let result = operationsType(n1, n2, operacao);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}