/*Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
. Salário Bruto até 900 (inclusive) - isento
. Salário Bruto até 1500 (inclusive) - desconto de 5%
. Salário Bruto até 2500 (inclusive) - desconto de 10%
. Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
        Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00  
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                 : R$  935,00
*/
const input = require('prompt-sync') ({sigint: true});
function calcIr(valor) {
    let salaryLiquid, descontos;
    if(valor >= 0 && valor <= 900) {
        descontos =  (valor*10)/100;
        salaryLiquid = valor - descontos;
        return `Salário Bruto: R$${valor}\n(-) IR: ISento\n(-) INSS (10%): R$${descontos}\nSalário Líquido: R$${salaryLiquid}`;
    }
    else if (valor >= 0 && valor <= 1500) {
        descontos =  ((valor*10)+(valor*5))/100;
        salaryLiquid = valor - descontos;
        return `Salário Bruto: R$${valor}\n(-) IR (5%)\n(-) INSS (10%)\nSalário Líquido: R$${salaryLiquid}`;
    }
    else if (valor >= 0 && valor <= 2500) {
        descontos =  ((valor*10)+(valor*10))/100;
        salaryLiquid = valor - descontos;
        return `Salário Bruto: R$${valor}\n(-) IR (10%)\n(-) INSS (10%)\nSalário Líquido: R$${salaryLiquid}`;
    }
    else if (valor >= 2500) {
        descontos =  ((valor*10)+(valor*20))/100;
        salaryLiquid = valor - descontos;
        return `Salário Bruto: R$${valor}\n(-) IR (20%)\n(-) INSS (10%)\nSalário Líquido: R$${salaryLiquid}`;
    }
}
let hour = input("Digite o valor da sua hora trabalhada: ");
let hourMonth = input("Digite a quantidade de horas trabalhadas no mês: ");
if (Number(hour) == hour && Number(hourMonth) == hourMonth) {
    hour = parseFloat(hour);
    hourMonth = parseInt(hourMonth);
    let salaryBruto = hour*hourMonth;
    let result = calcIr(salaryBruto);
    console.log(result);
}
else {
    console.log("ERRO, Inválido!");
}

