// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
const input = require('prompt-sync') ({sigint: true});
let num = [];
while(true) {
    for (let i = 0; i<50; i++) {
        num.push(input(`Digite o ${i}º número: `));
        if(Number(num[i] == num[i])) {
            num[i] = parseInt(num[i]);
            continue;
        } else {
            console.log("ERRO, inválido!");
            break;
        }
    }
    let out;
    for(out = 0; out < num.length; out++) {
        if(num[out] % 2 == 0) {
            continue;
        } 
        else {
            console.log(`Número: ${num[out]}`);
        }
    }
    out = input("Deseja Continuar? sim[s] ou não[n]: ");
    if (out == s) {
        continue;
    } else {
        console.log("Fim do programa!");
        break;
    }
}