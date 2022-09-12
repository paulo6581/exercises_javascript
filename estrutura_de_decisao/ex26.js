/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
a) Álcool:
b) até 20 litros, desconto de 3% por litro
c) acima de 20 litros, desconto de 5% por litro
d) Gasolina:
e) até 20 litros, desconto de 4% por litro
F) acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/
const input = require("prompt-sync") ({sigint: true});
function calcCombustivel() {
    let price, desconto, price_final;
    if (typeCombus == 'A') {
        if(litros >= 0 && litros <= 20) {
            price = litros*1.90;
            desconto = (price*3)/100;
            price_final = price - desconto;
            return `\nTipo: álcool\nPreço R$${price}\nPreço com desconto: R$${price_final}`;
        }
        else if (litros > 20) {
            price = litros*1.90;
            desconto = (price*5)/100;
            price_final = price - desconto;
            return `\nTipo: álcool\nPreço R$${price}\nPreço com desconto: R$${price_final}`;
        }
    }
    else if (typeCombus == 'G') {
        if(litros >= 0 && litros <= 20) {
            price = litros*2.50;
            desconto = (price*4)/100;
            price_final = price - desconto;
            return `\nTipo: Gasolina\nPreço R$${price}\nPreço com desconto: R$${price_final}`;
        }
        else if (litros > 20) {
            price = litros*2.50;
            desconto = (price*6)/100;
            price_final = price - desconto;
            return `\nTipo: Gasolina\nPreço R$${price}\nPreço com desconto: R$${price_final}`;
        }
    }
}

let litros = input("Digite o número de litros vendidos: ");
let typeCombus = input("Digite o tipo de combustível: álcool[A] ou gasolina[G]: ");
if (Number(litros) == litros && (typeCombus == 'A' || typeCombus == 'G')) {
    litros = parseFloat(litros);
    let result = calcCombustivel(litros, typeCombus);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}