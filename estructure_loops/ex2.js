// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
const input = require('prompt-sync') ({sigint: true});
while (true) {
    let name  = input("Digite o nome de usuário: ");
    let password = input("Digite a sua senha: ");

    if(name == password) {
        console.log("ERRO, digite novamente.");
        continue;
    } else {
        console.log("Você logou no sistema corretamente!");
        break;
    }   
}