/*Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
Tc/5 = (Tf - 32)/9
Tf - 32 = (9 * Tc)/5
Tf = ((9 * Tc)/5) + 32
*/
const input = require("prompt-sync") ({sigint: true});
let celsius = input("Digite a temperatura em celsius: ");
celsius = parseFloat(celsius);
let fah = ((9 * celsius )/5) + 32;
fah = parseFloat(fah).toFixed(2);

console.log(`Temperatura: ${fah}°F`); // template string `${}`
console.log("Temperatura: "+fah); //string