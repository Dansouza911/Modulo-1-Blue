//Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome? ');
console.log(`Olá ${nome}`)
console.log("Qual o seu pedido? digite o numero correspondente")

let c1 = "x-tudo"
let c2 = "Eggs"
let c3 = "Açai"
console.log (`1- ${c1}`)
console.log(`2- ${c2}`)
console.log(`3- ${c3}`)

let cx = prompt('Qual o seu peido? ');

if (cx == 1) {
    console.log(`Obrigado por escolher o ${c1}`)
} else if (cx == 2) {
    console.log(`Obrigado por escolher o ${c2}`)
} else if (cx == 3) {
    console.log(`Obrigado por escolher o ${c3}`)
}


