const prompt = require('prompt-sync')();
// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.

let meses = ['janeiro', 
'fevereiro',
'março',
'abril',
'maio',
'junho',
'julho',
'agosto',
'setembro',
'outubro',
'novembro',
'dezembro'
];
//console.log(meses);
function data (dd, mm, aaaa){
    let data = prompt("Digite uma data no modelo 01/01/1999:");
    let a = data.split('/');
    let mes = parseInt(a[1]);
    let dia = parseInt(a[0]);

if (dia > 31) {
    console.log('dia errado!');
    return null;
} 
if (mes > 12) {
    console.log('NULL');
    return null;
} 
if (a[2].length > 4) {
    console.log('NULL');
    return null;
} 

    console.log(`${dia} de ${meses[mes - 1]} de ${a[2]}`);

}
data();