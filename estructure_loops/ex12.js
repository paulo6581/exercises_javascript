/*Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
*/
const input = require('prompt-sync') ({sigint: true});
const calcTab = (numero, acumulator) => {
    let result;
    result = numero * acumulator;
    return`${numero} X ${acumulator} = ${result}`;
} 
const output = () => "Valor inválido, digite novamente.";
while (true) {
    let num = input("Digite um número inteiro de 1 a 10: ");
    if (Number(num) == num) {
        num = parseInt(num);
        if (num >= 1 && num <= 10) {
            for(let i = 1; i<11; i++) {
                console.log(calcTab(num, i));
            }
        }
        else {
            console.log(output());
            continue;
        }
    } else {
        console.log(output());
        continue;
    }
    let out = input("Deseja Sair? [s] ou [n]: ");
    if (out == 's') {
        console.log("The End Programming!");
        break;
    } else {
        continue;
    }
} 