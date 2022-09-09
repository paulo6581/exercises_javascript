// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
const input = require('prompt-sync') ({sigint: true});
function days(days) {
    switch (days) {
        case 1: console.log("Hoje é Domingo!"); break;        
        case 2: console.log("Hoje é Segunda-feira"); break; 
        case 3: console.log("Hoje é Terça-feira!"); break; 
        case 4: console.log("Hoje é Quarta-feira!"); break; 
        case 5: console.log("Hoje é Quinta-feira!"); break; 
        case 6: console.log("Hoje é Sexta-feira!"); break; 
        case 7: console.log("Hoje é Sábado-feira!"); break;
        default: console.log("Valor inválido");
    }
    return `O número ${days} é o dia da semana!`;

}
let day = input("Digite um número de 1 a 7: ");
if (Number(day) == day) {
    day = parseInt(day);
    let result = days(day);
    console.log(result);
}
else {
    console.log("ERRO, Inválido!");
}