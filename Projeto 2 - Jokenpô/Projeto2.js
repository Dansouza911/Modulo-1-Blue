// Inicio e Regras;
console.clear();
const prompt = require("prompt-sync")();
console.log("Bem vindo ao Jokenpô \n");
console.log("Regras do jogo: ");
console.log(`
Tesoura corta papel
Papel cobre pedra
Pedra amassa tesoura
`);
//variavéis
let nome = prompt("Qual o seu nome?");
let com = ["Chucky Norris ", "Sheldon ", "Goku "]; //escolher adversário para jogar contra
let continuar = "sim"; //Condição do while

while (continuar.toLowerCase() == "sim") {
  let vit = 0; //vitorias
  let der = 0; //derrotas
  let jog = 0; //escolha do jogador nas opções
  let advescolha = 0; //escolha do pc
  let joken = ["pedra", "papel", "tesoura"]; //lista de opções
  let rodganhas = [];
  let rodperdas = [];
  let rodempate = [];
  let rodadas = prompt("Quantas rodadas você deseja jogar?");
  console.log();
  console.log(
    "Seus Adversários são: " + "1-" + com[0] + "2-" + com[1] + "3-" + com[2]
  );
  console.log();
  console.log(`${nome}, digite o número de quem você quer enfrentar?`);
  let adv = prompt() - 1; //adversário
  console.clear();
  for (let i = 1; i <= rodadas; i++) {
    let aleatorio = Math.floor(Math.random() * 3);

    //console.clear();
    console.log(`       PLACAR ATUAL
    ${nome} ${vit} X ${der} ${com[adv]}
    ***************************
   
    `);

    //
    console.log(` ${i}ª RODADA
    1-${joken[0]} 2-${joken[1]} 3-${joken[2]}`);
    // console.log(`${nome}, escolha sua opção.\n`);
    console.log((jog = +prompt(`${nome}, escolha sua opção.`)));
    jog--;
    console.log(`${com[adv]} escolheu ${joken[aleatorio]}
    ${nome} escolheu ${joken[jog]}`);

    let escjog = joken[jog];
    let escadv = joken[aleatorio];

    if (
      (escjog == joken[2] && escadv == joken[1]) ||
      (escjog == joken[1] && escadv == joken[0]) ||
      (escjog == joken[0] && escadv == joken[2])
    ) {
      // console.clear();
      console.log(`Você ganhou a ${i}ª rodada. \n`);
      vit++;
      rodganhas.push(i);
    } else if (
      (escjog == joken[1] && escadv == joken[1]) ||
      (escjog == joken[0] && escadv == joken[0]) ||
      (escjog == joken[2] && escadv == joken[2])
    ) {
      //console.clear();
      console.log(`Empate\n`);
      rodempate.push(i);
    } else {
      //console.clear();
      console.log(` ${com[adv]} ganhou a ${i}ª rodada. \n`);
      der++;
      rodperdas.push(i);
    }
    }
    if (vit > der) {
    console.clear();
    console.log(`       ${nome} FOI O CAMPEÃO!! 
    Você ganhou a(s) rodada(s) (${rodganhas}) 
    empatou a(s) rodada(s) (${rodempate})
    e fez ${vit} pontos!`);
    } else if (vit == der) {
    console.clear();
    console.log(
      `${nome} e ${com[adv]} empataram na(s) rodada(s) (${rodempate})`
    );
    } else if (vit < der) {
    console.clear();
    console.log(`    ${com[adv]} FOI O CAMPEÃO!! 
      ele ganhou a(s) rodada(s) (${rodperdas}) 
      empatou a(s) rodada(s) (${rodempate})
      e fez ${der} ponto(s)`);
  }

  continuar = prompt("Deseja continuar a jogar? (sim ou não)");
}
