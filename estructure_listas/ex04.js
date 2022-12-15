// Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
const input = require('prompt-sync')({sigint: true});
let vetor = [];
for (let i = 0; i < 10; i += 1) {
    let caracter = input("Digite um caractere: ");
    if(caracter.length === 1) {
        vetor.push(caracter);
    } else {
        console.log("Digite somente um CARACTERE por vez!");
        i -= 1;
    }
}
const consoante = vetor.filter(valor => (valor != 'a' && valor != 'e' && valor != 'i' && valor != 'o' && valor != 'u'));
console.log(consoante);