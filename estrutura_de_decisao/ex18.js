// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
const input = require('prompt-sync') ({sigint: true});
function date(d, m, y) {
    if ((d >= 0 && d <= 31) && (m >= 1 && m <= 12) && (y >= 1000 && y <= 9000)) {
        return `Data Válida: ${d}/${m}/${y}`;
    }
    else {
        return "Data inválida!";
    }
}

let day = input("Digite o dia: ");
let month = input("Digite o mês: ");
let year = input("Digite o ano: ");
if (Number(day) == day && Number(month) == month && Number(year) == year) {
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);
    let result = date(day, month, year);
    console.log(result); 
}