const prompt = require('prompt-sync')();
// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de c matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo c usando os dois número passados.

function calculadora (a, b, c){
   // console.log(a c b)
    if (c == '+'){
    console.log(a + b);
        } else if (c == '-') {
            console.log(a - b);
        } else if (c == '*') {
            console.log(a * b);
        } else if (c == '-') {
            console.log(a / b);
}
}
num1 = +prompt('Digite o 1º numero:');
num2 = +prompt('Digite o 1º numero:');
operador = prompt('Digite a operação (+ ou - ou * ou /): ');
calculadora(num1, num2, operador);