/*Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
- comprar apenas latas de 18 litros;
- comprar apenas galões de 3,6 litros;
- misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

1 l = 6 m² 
1 lata = 18 l = R$80,00
galoes = 3,6 l = R$25,00

=> Cálculo:
    -> 1 lata rende:
        1 l ---- 6 m²
        18 l --- x 
        x = 18*6 = 108 m²
    
    -> 1 galão rende: 
        1 l ---- 6 m²
        3,6 l --- y
        y = 3,6 * 6 = 21,6 m²
    
    -> litros - área usando Lata:
        18 l ----------- 108 m²
        x_litros ------- area m²
        x_litros = (area * 18)/108

    -> Número de latas:
        1 lata ----- 18 l 
        x_latas ---- x_litros
        x_latas = x_litros/18
    
    -> Preço Latas:
        1 lata ----- R$80
        x_latas --- valor 
        valor = x_latas * 80

    -> Litros - área usando Galão: 
        3,6 l ----------- 21,6 m²
        x_litros -------- area m²
        x_litros = (3,6 * area)/21,6

    -> Número de galões: 
        1 galão ------- 3,6 l 
        x_galoes ------ x_litros
        x_galoes = x_litros/3,6

    -> Preço galões: 
        1 galão ------- R$25
        x_galoes ------ valor
        valor = x_galoes * 25 

    -> litros - área:
        1 l ---------- 6 m²
        x_litros ----- area m²
        x_litros = area/6

    -> mistura: 
        mistura -------- 21,6 l 
        x_mistura ------ x
    
*/
const input = require("prompt-sync") ({sigint: true});
let area = input("Digite a área: ");
let x_litros = area/6;
x_litros = parseInt(x_litros);
let arredondando = ((x_litros*10)/100) + x_litros;
console.log(`Área: ${area}m²\nTinta: ${x_litros} litros`);

// latas
if (x_litros >= 18) {
    let latas =  x_litros/18;
    latas = parseInt(latas);
    let valor = latas * 80;
    console.log(`Compre: ${latas} latas e Preço Total: R$${valor}`);
    
    // mistura
    if (arredondando >= 21.6) {
        let mistura = x_litros/21.6;
        mistura = parseInt(mistura);
        let valor_mist = mistura * 105;
        console.log(`Compre: ${mistura} de latas e galões e o Preço Total: R$${valor_mist}`);
    }
}
// galões
else if (x_litros >= 3.6 && x_litros < 18) {
    let galoes = x_litros/3.6
    galoes = parseInt(galoes);
    let valor = galoes * 25;
    console.log(`Compre: ${galoes} e Preço Total: R$${valor}`);
}

// não finalizado!