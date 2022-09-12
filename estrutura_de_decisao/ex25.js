/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/
const input = require("prompt-sync") ({sigint: true});
function classification(somando) {
    if (somando == 2) {
        return "Suspeito";
    }
    else if (somando >= 3 && somando <= 4) {
        return "Cúmplice";
    }
    else if (somando == 5) {
        return "Assassino";
    }
    else {
        return "inocente!";
    }
}
console.log("Digite sim[1] ou não[0]")
let tel = input("Telefonou para a vítima? ");
let local = input("Esteve no local do crime? ");
let morar = input("Mora perto da vítima? ");
let divida = input("Devia para a vítima? ");
let trabalho = input("Já trabalhou com a vítima? ");

if (Number(tel) == tel && Number(local) == local && Number(morar) == morar && Number(divida) == divida && Number(trabalho) == trabalho) {
    tel = parseInt(tel);
    local = parseInt(local);
    morar = parseInt(morar);
    divida = parseInt(divida);
    trabalho = parseInt(trabalho);
    somando = tel + local + morar + divida + trabalho;
    let result = classification(somando);
    console.log(result);
}
else {
    console.log("ERRO, inválido!");
}



