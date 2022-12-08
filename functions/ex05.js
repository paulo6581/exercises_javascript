/*Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.*/ 
const input = require('prompt-sync')({sigint: true});

const  somaImposto = (taxa, custo) => (taxa * custo / 100) + custo;

let taxa = input("Digite a taxa de imposto: ");
let custo = input("Digite o custo do produto: ");

if (Number(taxa) == taxa && Number(custo) == custo) {
    taxa = Number(taxa);
    custo = Number(custo);
    console.log(somaImposto(taxa, custo));
} else console.log("números inválidos");
