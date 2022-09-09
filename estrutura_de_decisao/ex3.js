// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
const input = require("prompt-sync") ({sigint: true});
let letra = input("Digite o sexo: Masculino = [M] ou Feminino = [F]");
if (letra == 'M') {
    console.log(`Você digitou ${letra}.`);
}
else if (letra == 'F') {
    console.log(`Você digitou ${letra}.`);
}
else {
    console.log("Sexo Inválido!");
}