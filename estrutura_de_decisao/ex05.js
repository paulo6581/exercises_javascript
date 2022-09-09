/*Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
const input = require("prompt-sync") ({sigint: true});
let nota1 = input("Digite a sua nota 1: ");
let nota2 = input("Digite a sua nota 2: ");
nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
let media = (nota1 + nota2)/2;
media = media.toFixed(1);
if(media >= 7) 
{
    if(media >= 7 && media < 10) 
    {
        console.log("Aprovado!");
    }
    else if(media == 10) 
    {
        console.log("Aprovado com Distinção!");
    }
}
else if (media < 7)
{
    console.log("Reprovado!");
}