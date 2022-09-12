/*Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidades
12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
*/
const input = require('prompt-sync') ({sigint: true});
function numImp(num) {
    if (num < 1000) {
        let unidade = num % 10;
         let numero = (num - unidade)/10;
        let dezena = numero % 10;
        let centena = (numero - dezena)/10;
        if (num >= 100 && num < 1000) {
            return `${centena} centena(s), ${dezena} dezenas e ${unidade} unidadades`;
        }
        else if (num >= 10 && num <= 99) {
            return `${dezena} dezena(s) e ${unidade} unidades`;
        }
        else if (num >= 0 && num <= 9) {
            return `${unidade} unidade(s)`;
        }
    }
    else {
        console.log("Inválido, o um número menor 1000.");
    }
}
let num = input("Digite um número menor 1000: ");
if (Number(num) == num ) {
    num = parseInt(num);
    let result = numImp(num);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}

