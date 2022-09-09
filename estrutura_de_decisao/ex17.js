// Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
const input = require('prompt-sync') ({sigint: true});
function bissexto(ano) {
    if(ano % 4 == 0 || ano % 400 == 0 ) {
        return `O ano ${ano} é bissexto!`;
    }
    else if (ano % 100 != 0 ) {
        return `O ano ${ano} NÃO é bissexto!`;
    }
}

let num = input("Digite o ano: ");
if(Number(num) == num) {
    num = parseInt(num);
    let result = bissexto(num); 
    console.log(result);
}