/*Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/
const input = require('prompt-sync') ({sigint: true});
function calcMedia(n1, n2, n3) {
    let media = (n1 + n2 + n3)/3;
    if (media >= 7) {
        if (media <=9.9) {
            return "Aprovado!";
        }
        else if (media == 10) {
            return "Aprovado com Distinção!";
        }
    }
    else {
        return "Reprovado!";
    }
}
let n1 = input("Digite a nota 1:");
let n2 = input("Digite a nota 2:");
let n3 = input("Digite a nota 3:");
if (Number(n1) == n1 && Number(n2) == n2 && Number(n3) == n3) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    let result = calcMedia(n1, n2, n3);
    console.log(result);
}