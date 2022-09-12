/*Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
const input = require('prompt-sync') ({sigint: true});
function notasFornecidas(numero) {
    if (numero >= 10 && numero <= 600) {
        let cem, cinquenta, dez, cinco, um;
        // notas 100
        cem = parseInt(numero / 100);
        numero = numero % 100;
        // notas 50
        cinquenta = parseInt(numero / 50);
        numero = numero % 50;
        // notas 10
        dez = parseInt(numero / 10);
        numero = numero % 10;
        // notas 5
        cinco = parseInt(numero / 5);
        numero = numero % 5;
        // notas 1
        um = numero;
        return `${cem} nota(s) de 100, ${cinquenta} nota(s) de 50, ${dez} nota(s) de 10, ${cinco} nota(s) de cinco, ${um} nota(s) de 1`;
    }
    else {
        console.log("Valor inválido!");
    }
}

let valor = input("Digite o valor do saque: ");
if (Number(valor) == valor) {
    valor = parseInt(valor);
    let result = notasFornecidas(valor);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}