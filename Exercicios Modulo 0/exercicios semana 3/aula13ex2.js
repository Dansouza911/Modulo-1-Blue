// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista


const prompt = require('prompt-sync')();


let listafunc = [];
let qtdAdd = prompt('Quantos funcionários você quer adicionar?');

for (let i = 0; i < qtdAdd; i++) {
    let funcionario = {};
    funcionario.nome = prompt('nome?');
    funcionario.cargo = prompt('cargo?');
    funcionario.salario = prompt('salario?');
    
listafunc.push(funcionario);

}
console.log(listafunc);