/* Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
1 l = 3 m²
lata = 18 l = R$80,00

=> cálculo:
    -> Rendimento de 1 lata:

        1l ----- 3 m²
        18 l ---- x
        x = 18*3 = 54 m²

    -> Quantidade de latas:

        1 lata ----- 54 m²
        x_latas ---- area m²
        x_latas =  area/54

    -> Preço total x_latas:

        1 lata  ----- R$80
        x_latas ----- preco_total

        preco_total = x_latas * 80
*/
const input = require("prompt-sync") ({sigint: true});
let area = input("Digite a área: ");
area = parseFloat(area);
let x_latas = area/54;
x_latas = parseInt(x_latas);
let preco_total = x_latas * 80;
console.log(`Quantidade: ${x_latas} latas\nPreço Total: R$${preco_total.toFixed(2)}`);
