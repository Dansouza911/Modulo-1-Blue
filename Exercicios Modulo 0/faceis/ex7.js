const prompt = require(`prompt-sync`)();

const months = [
  //LISTA COM OS MESES EM EXTENSO
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function date() {
  const date = prompt(`Type your bith date. Ex 13/07/1992:  `); //interagindo com o usuário pedindo a data
  const split = date.split("/"); //Criando a lista da string através do split
  const month = parseInt(split[1]); //Criando uma variável que transforma o valor(estava em string) da lista em number
  const day = parseInt(split[0]);
  if (day > 31) {
    console.log(`null`);
    return null;
  }
  if (month > 12) {
    console.log(`null`);
    return null;
  }
  if (date.length > 10) {
    console.log(`null`);
    return null;
  }
  console.log(`${split[0]} of ${months[month - 1]} of ${split[2]}`);
}
date();