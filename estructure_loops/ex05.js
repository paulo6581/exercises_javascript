/*Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
*/
const input = require('prompt-sync') ({sigint: true});
let i;
while (true) {
    let A = input("Digite a população de A: ");
    let B = input("Digite a população de B: ");
    let ca = input("Digite a taxa de A: ");
    let cb = input("Digite a taxa de B: ");
    let ano = 1;
    if(Number(A) == A && Number(B) == B && Number(ca) == ca && Number(cb) == cb) {
        A = parseFloat(A);
        B = parseFloat(B);
        ca = parseInt(ca);
        cb = parseInt(cb);
        if( A < B) {
            while(A < B) {
                let taxaA = (A*3)/100; 
                let taxaB = (B*1.5)/100; 
                A += parseInt(taxaA); 
                B += parseInt(taxaB);
                ano++;
                if (A >= B) {
                    console.log(`A população de A ultrapassou a de B em ${ano} anos.\n País A: ${A} habitantes`);
                }
            }
            i = input("Deseja continuar? sim[s] ou não[n]: ");
            if (i == 's') {
                continue;
            } else {
                console.log("The End!");
                break;
            }
        } else {
            console.log("ERRO, o país A tem que ser menor que B!\ndigite novamente...");
            continue;
        }
    }
}
