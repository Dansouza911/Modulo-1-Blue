//E os 10% do garçom?
//Defina uma variável para o valor de uma refeição que custou R$ 42,54;
//Defina uma variável para o valor da taxa de serviço que é de 10%;
//Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.
const prompt = require('prompt-sync')();

let nf = 42.54
let tx = 0.1
let conta = nf * tx + nf 

console.log(`O valor total é de ${conta.toFixed(2)}` )


//const nome = prompt('Qual o seu nome? ');


