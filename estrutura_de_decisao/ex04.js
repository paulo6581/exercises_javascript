// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
const input = require("prompt-sync") ({sigint: true});
let letra = input("Digite uma vogal ou consoante: ");
let vogal = ["a", "e", "i", "o", "u"];
if(letra === vogal[0] || letra === vogal[1] || letra === vogal[2] || letra === vogal[3] || letra === vogal[4]) 
{
    console.log(`A letra é uma vogal!`);
}
else 
{
    console.log("A letra é uma consoante!");
}