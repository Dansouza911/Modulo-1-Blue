const prompt = require('prompt-sync')();

function tabuada (numero1, numero2){
console.log (`a soma é: ${numero1 + numero2}
    Subtração é: ${numero1 - numero2}
    multiplicação é:  ${numero1 * numero2}
    Divisão é: ${numero1 / numero2}
`)
}

numero1 = +prompt ('Digite o 1º numero: ')
numero2 = +prompt ('Digite o 2º numero: ')
tabuada (numero1, numero2)