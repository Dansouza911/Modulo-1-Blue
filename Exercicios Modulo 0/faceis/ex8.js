//Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:   DOLAR   EURO    LIBRA ESTERLINA DÓLAR CANADENSE PESO ARGENTINO  PESO CHILENO    Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real. Mostrar o resultado no formato U$9999.99
const prompt = require('prompt-sync')();
let real = prompt('Qual o seu valor em R$?')

let dolar = 0.20
let euro = 0.17
let libra = 0.15
let dcan = 0.25
let pesoa = 20.96
let pesoc = 159.41

console.log(`Você tem em: `)
console.log(`Euro ${(euro * real).toFixed(2)}`)
console.log(`Libra ${(libra * real).toFixed(2)}`)
console.log(`Dolar Canadense ${(dcan * real).toFixed(2)}`)
console.log(`Dolar ${(dolar * real).toFixed(2)}`)
console.log(`Peso Argentino ${(pesoa * real).toFixed(2)}`)
console.log(`Peso Chileno ${(pesoc * real).toFixed(2)}`)