/*Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos)

=> Equação:
v = s/t  =>  t = s/v
*/
const input = require("prompt-sync") ({sigint: true}); 
let file_tam = input("Digite o tamanho o arquivo? ");
file_tam = parseFloat(file_tam).toFixed(2);
let veloc = input("Digite a velocidade de um link de Internet? ");
veloc = parseFloat(veloc).toFixed(2);
veloc = veloc/8;
let time = file_tam/veloc;
console.log(`Tempo estimado: ${time} segundos`);
