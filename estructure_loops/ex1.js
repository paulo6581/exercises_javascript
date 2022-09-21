// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
const input = require('prompt-sync') ({sigint: true});

let nota = input("Digite ai mano de 0 a 10: ");

if (Number(nota) == nota) {
    nota = parseInt(nota);
    if (nota >= 0 && nota <= 10) {
        console.log(`Número: ${nota} e você digitou corretamente!`);
    } else {
        while (true) {
            console.log("\n\ninválido, digitou errado!");
            nota = input("Digite de novo de 0 a 10: ");
            if(nota < 0 || nota > 10) {
                continue;
            } else {
                console.log(`Você digitou corretamente!\nNúmero: ${nota}`);
                break;
            }
        }
    }
} else {
    console.log("ERRO, inválido!");
}