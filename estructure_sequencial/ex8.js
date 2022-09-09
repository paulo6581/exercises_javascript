// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const input = require("prompt-sync")({sigint: true});
let hour = input("Quanto você ganha por hora?\n");
let hoursMouth = input("Quantas horas trabalhadas no mês?\n");
hour = parseFloat(hour);
hoursMouth = parseInt(hoursMouth);
let salary = hour*hoursMouth;
console.log(`Salário: R$${salary}`);