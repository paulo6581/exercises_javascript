/* Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
C = 5 * ((F-32) / 9).
*/
    const input = require("prompt-sync") ({sigint: true});
    let fah = input("Digite a temperatura em Fahrenheit: ");
    fah  = parseFloat(fah);
    let celsius = 5*((fah - 32)/ 9);
    celsius = parseFloat(celsius).toFixed(2);
    console.log(`Temperatura: ${celsius}°C`);
    