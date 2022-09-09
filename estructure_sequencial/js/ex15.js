/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
*/
const input = require("prompt-sync") ({sigint: true});
let salary = input("Digite o seu salário bruto?");
salary = parseFloat(salary);

let hours_work = input("Quantas horas trabalhadas por dia? ");
hours_work = parseInt(hours_work);

let days_work = input("Quantos dias trabalhados no mês? ");
days_work = parseInt(days_work);
days_hours = days_work*24;

// salário por hora
console.log(`\n\nO seu salario por hora: R$${(salary/days_hours/hours_work).toFixed(2)}`);

salary_liquid = salary - ((salary*(11+8+5))/100);
console.log(`Salario Bruto: R$${salary}\nIMPOSTO E ROUBO!!!\nSalario liquido: R$${salary_liquid.toFixed(2)}`);
