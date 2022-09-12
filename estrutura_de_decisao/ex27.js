/*Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                      Até 5 Kg           Acima de 5 Kg
Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/
const input = require('prompt-sync') ({sigint: true});
function calcFrutas(morango, apple) {
    let price_total, price1, price2, desconto;
    const total_desconto = (price_total) => {
        if (price_total > 25) {
            desconto = (price_total*10)/100;
            price_total = price_total - desconto;
            return `Morango: R$${price1}\nMaçã: R$${price2}\nTotal: R$${price_total}`;
        }
        else {
            return `Morango: R$${price1}\nMaçã: R$${price2}\nTotal: R$${price_total}`;
        }
    }
    if ((morango >= 0 && morango <= 5) && (apple >= 0 && apple <= 5)) {
        price1 = morango*2.50;
        price2 = apple*1.80;
        price_total = price1 + price2;
        return total_desconto(price_total);

    }
    else if (morango > 5 && apple > 5)  {
        price1 = morango*2.20;
        price2 = apple*1.50;
        price_total = price1 + price2;
        return total_desconto(price_total);
    }
}
let morango = input("Digite a quantidade de Kg de morango: ");
let apple = input("Digite a quantidade de Kg de maçã: ");
if (Number(morango) == morango && Number(apple) == apple) {
    morango = parseFloat(morango);
    apple = parseFloat(apple);
    let result = calcFrutas(morango, apple);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}