// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato
const input = require("prompt-sync") ({sigint: true});
let prod1 = input("Preço produto 1: ");
let prod2 = input("Preço produto 2: ");
let prod3 = input("Preço produto 3: ");
prod1 = parseInt(prod1);
prod2 = parseInt(prod2);
prod3 = parseInt(prod3);
if (prod1 < prod2 && prod1 < prod3) {
    console.log("Produto 1 é mais barato!");
}
else if (prod2 < prod2 && prod2 < prod3) {
    console.log("Produto 2 é mais barato!");
}
else if (prod3 < prod1 && prod3 < prod2) {
    console.log("Produto 3 é mais barato!");
}