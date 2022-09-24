/*Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de  1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

País A = 80000 h
País  B = 200.000 h
*/
const input = require('prompt-sync') ({sigint: true});
let A = 80000;
let B = 200000;
let ano = 1;
while(A < B) {
    let taxaA = (A*3)/100; 
    let taxaB = (B*1.5)/100; 
    A += parseInt(taxaA); 
    B += parseInt(taxaB);
    ano++;
    if (A >= B) {
        console.log(`A população de A ultrapassou a de B em ${ano}.\n País A: ${A} habitantes`);
    }
}

