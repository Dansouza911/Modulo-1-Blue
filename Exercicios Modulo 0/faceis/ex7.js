//Você está na flor da idade?
//Defina uma variável para o valor do ano do nascimento;
//Defina uma variável para o valor do ano atual;
//Defina uma variável que calcula o valor final da idade da pessoa;
//Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
//const prompt = require('prompt-sync')();
//const nome = prompt('Qual o seu nome? ');

const prompt = require('prompt-sync')();
let ano = prompt('Qual o seu ano de nascimento?')
let idade = (2022 - ano)
console.log(`Você tem ${idade}`, 'anos, você esta na flor da idade')


