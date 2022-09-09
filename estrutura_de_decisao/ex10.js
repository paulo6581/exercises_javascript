// Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
const input = require("prompt-sync") ({sigint: true});
function mensagem(horario) {
    if (horario === 'M') {
        return "Bom Dia!";
    }
    else if (horario === 'V') {
        return "Boa Tarde!";
    }
    else if(horario === 'N') {
        return "Boa Noite!";
    }
    else {
        return "Valor Inválido!";
    }
}
let turno = input("Digite o seu turno: [M] = Matutino, [V] = Vespertino ou [N] = Noturno: ");
result = mensagem(turno);
console.log(result);