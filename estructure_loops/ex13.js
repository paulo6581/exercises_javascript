//Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.
const input = require('prompt-sync') ({sigint: true});
let numeros = [];
while(true) {
    for(let i = 0; i<2; i++) {
        let num = input(`Digite o ${i}º numero: `);
        if (Number(num) == num) {
            num = parseInt(num);
        numeros.push(num);
        }
        else {
            console.log("ERRO, Digite novamente.");
            i -= 1;
        }
    }
    let potencia = 1;
    let out;
    for (let out = 0; out < numeros[1]; out += 1) {
        let base = numeros[0]; 
        potencia *= base;
    }
    console.log(potencia);
    out = input("Deseja Sair? [s] ou [n]: ");
    if (out == 's') {
        console.log("The End Programming");
        break;
    } else {
        continue;
    }
}