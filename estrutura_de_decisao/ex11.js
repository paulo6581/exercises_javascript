/* As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */
const input = require('prompt-sync') ({sigint: true});
function calcSalary(valor) {
    let aumento, reajuste;
    if (valor >= 0 && valor <= 280) {
        aumento = (valor * 20)/100;
        reajuste = valor + aumento;
        return `Salário: R$${valor}\nPercentual: 20%\nAumento: R$${aumento}\nReajuste: R$${reajuste}`;
    }
    else if (valor >= 280 && valor <= 700) {
        aumento = (valor*15)/100;
        reajuste = valor + aumento
        return `Salário: R$${valor}\nPercentual: 15%\nAumento: R$${aumento}\nReajuste: R$${reajuste}`;
    }
    else if (valor >= 700 && valor <= 1500) {
        aumento = (valor*10)/100;
        reajuste = valor + aumento
        return `Salário: R$${valor}\nPercentual: 10%\nAumento: R$${aumento}\nReajuste: R$${reajuste}`;
    }
    else if (valor >= 1500) {
        aumento = (valor*5)/100;
        reajuste = valor + aumento
        return `Salário: R$${valor}\nPercentual: 5%\nAumento: R$${aumento}\nReajuste: R$${reajuste}`;
    }
}
let salary = input("Digite o valor do seu salário: ");
if(Number(salary) == salary) {
    salary = parseFloat(salary);
    let result = calcSalary(salary);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}