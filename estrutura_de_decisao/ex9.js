// Faça um Programa que leia três números e mostre-os em ordem decrescente.
const input = require("prompt-sync") ({sigint: true});
let n1 = input("Digite o 1º número: ");
let n2 = input("Digite o 2º número: ");
let n3 = input("Digite o 3º número: ");
n1 = ParInt(n1);
n2 = ParInt(n2);
n3 = ParInt(n3);
if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(`${n1}, ${n2}, ${n3}`);
    } else {
        console.log(`${n1}, ${n3}, ${n2}`);
    }
}
else if (n2 > n1 && n2 > n3) {
    if(n1 > n3) {
        console.log(`${n2}, ${n1}, ${n3}`)
    } else {
        console.log(`${n2}, ${n3}, ${n1}`);
    }
}
else if (n3 > n1 && n3 > n2) {
    if(n1 > n2) {
        console.log(`${n3}, ${n1}, ${n2}`);
    } else {
        console.log(`${n3}, ${n2}, ${n1}`);
    }
}
