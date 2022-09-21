/*Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
*/
const input = require('prompt-sync') ({sigint: true});
let num;
for (let i = 0; i<20; i++) {
    num = input("Digite ai mano: ");
    console.log(num);
}
