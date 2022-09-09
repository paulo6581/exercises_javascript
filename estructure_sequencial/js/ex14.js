/*João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.*/
const input = require("prompt-sync") ({sigint: true});
let peso = input("Digite o peso dos peixes: ");
peso = parseFloat(peso);
if (peso > 50) {
    let limit_peso =  (peso - 50)*4;
    console.log(`multa: R$${limit_peso.toFixed(2)}`);

}
else {
    console.log(`falta ${(50 - peso).toFixed(2)}Kg para completar 50Kg e levar uma multa!`);
}