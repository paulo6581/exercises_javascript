/*O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
                      Até 5 Kg           Acima de 5 Kg
File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/
const input = require('prompt-sync') ({sigint: true});
function carne(typeCarne, quantidade) {
    let price, price_total, desconto;
    const cartao = (price) => {
        desconto = (price*5)/100;
        price_total = price - desconto;
        return `Preço total com desconto do cartão Tabajara:\nvalor: R$${price_total}`;
    }
    if(typeCarne == 'FD') {
        if (quantidade >= 0 && quantidade <= 5) {
            price = quantidade*4.90;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
        else if (quantidade > 5) {
            price = quantidade*5.80;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
    }
    else if(typeCarne == 'A') {
        if (quantidade >= 0 && quantidade <= 5) {
            price = quantidade*5.90;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
        else if (quantidade > 5) {
            price = quantidade*6.80;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
    }
    else if(typeCarne == 'P') {
        if (quantidade >= 0 && quantidade <= 5) {
            price = quantidade*6.90;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
        else if (quantidade > 5) {
            price = quantidade*7.80;
            return `Valor: R$${price}\n${cartao(price)}`;
        }
    }

}

let typeCarne = input("Digite o tipo de carne: File Duplo[FD], Alcatra[A] ou Picanha[P]: ");
let quantidade = input("quantidade de carne: ");
if(typeCarne == 'FD' || typeCarne == 'A' || typeCarne == 'P' && Number(quantidade) == quantidade) {
    quantidade = parseFloat(quantidade);
    let result = carne(typeCarne, quantidade);
    console.log(result);
}