/* Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
a) Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
b) Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
c) Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;
*/
const input = require('prompt-sync') ({sigint: true});
function calcRaiz(a, b, c) {
    if (a == 0 ) {
        return "A equação não é do 2º grau";
    }
    else if (a != 0 ) {
        let delta = (b**2) - (4*a*c);
        if( delta < 0) {
            return "Delta Negativo, não existe raíz quadrada negativa";
        }
        else if( delta == 0) {
            return "Possui apenas uma raíz real";
        }
        else if(delta > 0) {
            return "A equação possui duas raízes reais";    
        }
    }
}
let n1 = input("Digite o valor de 'A': ");
let n2 = input("Digite o valor de 'B': ");
let n3 = input("Digite o valor de 'C': ");
if (Number(n1) == n1 && Number(n2) == n2 && Number(n3) == n3) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    let result = calcRaiz(n1, n2, n3);
    console.log(result);
}