//Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
//Crie uma variável para receber o valor, com conversão para inteiro


//Para um número ser par, a divisão dele por 2 tem que dar resto 0

const prompt = require('prompt-sync')();
let n = prompt('Digite um número: ')

let re = n % 2


if (re == 0) {
  console.log (`O numero ${n}`, 'é par')

} else if (re == 1) {
 console.log (`O numero ${n}`, 'é impar')

};

