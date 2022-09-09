/*Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
  Média de Aproveitamento  Conceito
  Entre 9.0 e 10.0        A
  Entre 7.5 e 9.0         B
  Entre 6.0 e 7.5         C
  Entre 4.0 e 6.0         D
  Entre 4.0 e zero        E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/
const input = require('prompt-sync') ({sigint: true});
function calcMedia(x, y) {
    let media = (x + y)/2;
    let conceito, situacao;
    let out = (x, y, media) => `Nota 1: ${x}, Nota 2: ${y}, Média: ${media}\nConceito: ${conceito} ${situacao}`;
    if (media >= 6 && media <= 10) {
        situacao = "(Aprovado)";
        if (media >= 9 && media <= 10) {
            conceito = "A";
            return out(x, y, media, conceito, situacao);
        }
        else if (media >= 7.5 && media <= 9) {
            conceito = "B";
            return out(x, y, media, conceito, situacao);
        }
        else if (media >= 6 && media <= 7.5) {
            conceito = "A";
            return out(x, y, media, conceito, situacao);
        }
    }
    else if (media >= 0 && media < 6) {
        situacao = "(Reprovado)";
        if (media >= 4 && media < 6) {
            conceito = "D";
            return out(x, y, media, conceito, situacao);
        }
        else if (media >= 0 && media <= 4) {
            conceito = "E";
            return out(x, y, media, conceito, situacao);
        }
    }
}
let n1 = input("Digite a sua nota 1: ");
let n2 = input("Digite a sua nota 2: ");
if (Number(n1) == n1 && Number(n2) == n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    let result = calcMedia(n1, n2);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}
