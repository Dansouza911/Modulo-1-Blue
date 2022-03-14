//Qual o valor do troco?
//Defina uma variável para o valor de uma compra que custou R$100,98;
//Defina uma variável para o valor que o cliente pagou R$150,00;
//Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.
 
let compra = 100.98
let cliente = 150
let troco = (cliente - compra)

console.log (`O troco é de: ${troco.toFixed(2)}`)
