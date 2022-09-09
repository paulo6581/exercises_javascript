// Faça um Programa que converta metros para centímetros.
const input = require('prompt-sync') ({sigint: true});
let metro = input("Digite a medidade em metro: ");
metro = parseFloat(metro);
let centi = metro*100;
console.log(`Centimetros: ${centi}cm`);