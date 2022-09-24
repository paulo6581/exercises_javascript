/*Faça um programa que leia e valide as seguintes informações:
a) Nome: maior que 3 caracteres;
b) Idade: entre 0 e 150;
c) Salário: maior que zero;
d) Sexo: 'f' ou 'm';
e) Estado Civil: 's', 'c', 'v', 'd';
*/
const input = require('prompt-sync') ({sigint: true});

while (true) {
    let name = input("Digite o seu nome: ");
    let idade = input("Digite a sua idade: ");
    let salary = input("Digite o seu salário: ");
    let sexo = input("Digite o seu sexo feminino[f] ou masculino[m]: ");
    let civil = input("Digite o seu Estado Civil - 's', 'c', 'v', 'd': ");
    if (Number(idade) == idade && Number(salary) == salary) {
        idade = parseInt(idade);
        salary = parseFloat(salary);
        if ((name.length > 3) && (idade >= 0 && idade <= 150) && (salary > 0) && (sexo == 'f' || sexo == 'm') && (civil  == 's' || civil == 'c' || civil == 'v' || civil == 'd')) {
            console.log("Informações válidas!");
            break;
        }
        else {
            console.log("ERRO, digite novamente.'");
            continue;
        }
    }
}