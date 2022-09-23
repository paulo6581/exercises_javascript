//Faça um programa que leia 5 números e informe a soma e a média dos números.
const input = require('prompt-sync') ({sigint: true});
let num = [];
while(true) {
    for (let i = 0; i<5; i++) {
        num.push(input(`Digite o ${i}º número: `));
        if (Number(num[i] == num[i])) {
            num[i] = parseFloat(num[i]);
            continue;
        } else {
            console.log("ERRO, inválido");
            break;
        }
    }
    let media, out;
    let soma = 0;
    for (out = 0; out < num.length; out++) {
        soma += num[out]; 
        media = soma/num.length;
    }   
    console.log(`Média: ${Math.round(media)}`);
    out = input("Deseja Continuar?\nDigite sim[s] ou não[n]: ");
    if(out == 's') {
        continue;
    } else {
        console.log("Fim do programa!");
        break;
    }
}