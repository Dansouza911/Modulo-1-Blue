const prompt = require("prompt-sync")();
let nome = prompt("Digite o nome do Personagem: ");
console.log();
console.log("Regra do jogo: Só responda com Sim ou Não");
console.log();
console.log(
  `Olá ${nome}, após uma longa jornada derrotando monstros e aperfeiçoando técnicas e equipamentos, chegou o grande momento de enfrentar uma montanha... o grande Zorah Magdaros, um monstro ancião que segue na direção da vila destruindo tudo que vem pela sua frente e é a sua vez de subir até a cabeça do monstro e instalar o sinalizador para que a tropa terrestre consiga atirar vários misseis e desviar a rota dele e salvar os moradores da vila assim se tornando grande caçador de monstros...`
);
console.log();
console.log("O destino da vila está em suas mãos!");
console.log();

//Parte 1 ****************************************
console.log(
  "Você acaba de subir na cauda do Zorah e vai verificar suas porções de cura."
);
let somasim = 0;
let somanao = 0;
console.log();
let resposta = prompt("Você lembrou de comprar as porções?").toLowerCase;
console.log();
if (resposta == "sim") {
   somasim = somasim++;
   
  console.log('Ao verificar suas porções você acha uma porção na bolsa que te da +10 de poder')
  console.log();
  } else if (resposta == "nao") {
    somanao = somanao++;
  }
  console.log();
//Parte 2 ****************************************
console.log(
  "Você consegue subir com uma certa facilidade até as costas do zora, porém aparece um monstro inesperado o Nergigante."
);
console.log();
let resposta2 = prompt("Você consegue derrotá-lo?");
console.log();
if (resposta2.toLowerCase() == "sim") {
  somasim = somasim++;
  console.log(
    `Parabéns ${nome}, você conseguir derrotá-lo e graças ao seu ultimo golpe o monstro cai sobre varias rochas amontoadas onde lá estava guardada a pedra da luz que equipada a sua arma te da +10 de poder`
  );
  console.log();
} else if (resposta2.toLowerCase() == 'nao') {
  somanao = somanao++;
  console.log(
    "Para sua sorte, aparece o lendário Guerreiro, que consegue conter o monstro e faz com que ele fuja."
  );
  console.log();
}

//Parte 3 ****************************************
console.log(
  "Você terá que enfraquecer o Zorah Magdaros antes de enfrentá-lo, para isso você devera quebra quebrar os 3 cristais em suas costas"
);
console.log();
let num = 1;
let tent = 1;
let resposta3;
console.log();
resposta3 = prompt(
    `Você encontrou o ${num}º cristal conseguiu destrui-lo?`
  ).toLowerCase();
  console.log();

while (resposta3 === "sim") {
  num = num + 1;
  tent = tent + 1;

  resposta3 = prompt(
    `Você encontrou o ${num}º cristal conseguiu destrui-lo?`
  ).toLowerCase();
  console.log();
if (tent == 3) {
    break;
}
  }

  if (tent < 3) {
    somanao = somanao++;
    console.log(
      "É parece que você não conseguiu enfrequece-lo o suficiente, mas calma, ainda temos chance de vence-lo."
    );
    console.log();
    
  } else if ((tent = 3)) {
    somasim = somasim++;
    console.log(
      `É isso ai ${nome}, o Zorah está mais fraco e você conseguiu +10 de poder, a população está feliz por ter você lutando por eles, continue assim e logo salvará a todos!`
    );
    console.log();
    
  }


//Parte 4 ****************************************
console.log(
    "Você acaba de chegar na cabeça do Zorah e precisa instalar o sinalizador, porém você só tem 5 minutos até chegar ao ponto exato para o disparo dos misseis, so te resta esse tempo para quebrar toda a crosta que está absorvendo todo o dano"
  );
  console.log();
 
  let resposta4 = prompt(`${nome}, você conseguiu quebrar a crosta no tempo correto?`);
  console.log();

  if (resposta4 == "sim") {
     somasim = somasim + 1;
    console.log(`${nome}, você venceu novamente, com isso você ganha um bonus de +10 de poder`);
    console.log();
  } else if (resposta == "nao") {
     somanao = somanao + 1;
    console.log(somanao);
  }



//Parte 5 ****************************************
console.log(`${nome}, você planou até os misseis e está na hora de ativa-los, porem aparecem morcegos para te atrapalhar...`);

let resposta5 = prompt ('Você conseguiu passar dos morcegos e ativar os misseís?')
if (resposta5.toLowerCase == "sim"){
console.log(`Parabéns ${nome}, você conseguiu fazer o missel atingir o Zorah e assim ele mudou a sua rota para o oceano. Com isso cai um bau com uma armadura lendária de Ouro, que te dar +10 de poder`);
console.log();

} else if (resposta5.toLowerCase == "nao")
console.log("nossa que vacilo seu, o missel foi ativado por um aldeão porém atingiu o pescoço do monstro");
console.log();

//Parte 6 pontuação ****************************************

console.log("Chegou a hora de ver o seu desempenho!");
console.log();
if (somasim == 5){
console.log(`${nome}, Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. Com +50 de poder, Se tornou o guerreiro DEUS`);

} else if (somasim == 4) {
    console.log(`${nome}, Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita, conseguiu +40 de poder se tornando um gurreiro lendário.`)
} else if (somasim == 3) {
    console.log(`${nome},Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco. Conseguiu +30 de poder se tornando um gurreiro Bom.`)
} else if (somasim == 2) {
    console.log(`${nome},Você falha, mas ainda consegue fugir da situação. Conseguiu +20 de poder se tornando um gurreiro aprendiz.`)
} else if (somasim == 1) {
    console.log(`${nome},Você falha, mas ainda consegue fugir da situação. Conseguiu +10 de poder talvez seja melhor usar esse poder para ser um lenhador o q acha?.`)

} else if (somasim == 0) {
    console.log(`${nome},Você falha miseravelmente. melhor se ver outra coisa pra fazer... O ferreiro tava precisando de alguém pra limpar a loja`)
} ;
