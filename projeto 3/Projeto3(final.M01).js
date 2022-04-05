console.clear();
const prompt = require("prompt-sync")();

console.log(`Seja Bem Vindo ao 'UFN - Ultimate Figth Nordeste'
Aqui o seu objetivo é conquistar o prêmio 'Chapéu de Couro'.
Para isso você precisará treinar o seu personagem e vencer 3 lutas.
Vencendo as 3 Lutas você enfrentará o Atual campeão: Lampião "O Rei do Canguaço"!
`);

let prox = prompt("Enter para continuar");

//Escolha do Personagem
console.clear();
console.log("Escolha seu personagem: ");
let personagens = ["Froxo Arretado", "Cabra Raçudo ", "Matuto Invocado"];
for (let i in personagens) {
  console.log(`${Number(i) + 1} - ${personagens[i]}`);
}
let escolhaPersonagem = +prompt(">");
console.log();
console.log(
  `Boa escolha o ${personagens[escolhaPersonagem - 1]} é um bom lutador`
);

let vitorias = 0;

let charEscolhido = {
  vida: 100,
  forca: 10,
  esquiva: 10,
  final: false,

  alteraesquiva: function () {
    this.esquiva += 5;
  },

  alteraVida: function (parametro, status) {
    if (status === "+") {
      this.vida = this.vida + parametro;
    } else if (status === "-") {
      this.vida = this.vida - parametro;
    }
  },
  alteraForca: function (parametro) {
    this.forca = this.forca + parametro;
  },
};

let luta = 0;

for (let i = 0; i < 9; i++) {
  while (vitorias < 3) {
    
    luta++;
    // laço principal das lutas
    let inimigos = [
      'Zeca "Cabeça de nois todos"',
      'Chicó "O Galo de raça"',
      'João "Grilo"',
      'Severino "Marretada"',
      'José "Cambito de sabiá"',
      'Matias "Dente de preá"',
      'Tião "Punho de rapadura"',
      'Tiziu "O Aranha"',
      'Bastião "Calango do cerrado"',
    ];
    let escolhaInimigo = Math.floor(Math.random() * inimigos.length);
    let removido = [];
    removido = inimigos.splice(escolhaInimigo, 1);

    charEscolhido.vida = 100;
    charEscolhido.forca = Math.round((charEscolhido.forca - 10) / 2 + 10); //Recebe metade do que aprendeu na semana anterior
    charEscolhido.esquiva = Math.round((charEscolhido.esquiva - 10) / 2 + 10); //Recebe metade do que aprendeu na semana anterior
    let frase = Math.floor(Math.random() * 3);
    console.log();
    if (frase == 0) {
      console.log(
        `Vish... Tu vai trocar soco com ${removido}... já pode ir rezando `
      );
      pausecomp(3000);
    } else if (frase == 1) {
      console.log(`Haha deu azar cara... vai enfrentar o ${removido}, já se despediu de mainha?
      `);
      pausecomp(3000);
    } else if (frase == 2) {
      console.log(`Já chamei o padre pra te benzer, você vai enfrentar o ${removido}... Pensando bem vou chamar mais 2 padres...
    `);
      pausecomp(3000);
    }
    console.log();

    function pausecomp(millis) {
      var date = new Date();
      var curDate = null;
      do {
        curDate = new Date();
      } while (curDate - date < millis);
    }

    console.log();

    let adversario = {
      vida: 100,
      forca: 0,
      esquiva: 0,

      alteraForca: function () {
        this.forca = charEscolhido.forca;
        let sorte = Math.floor(Math.random() * 3);
        if (sorte == 0) {
          this.forca += 3;
        } else if (sorte >= 1) {
          this.forca -= 3;
        }
      },

      alteraesquiva: function () {
        this.esquiva = charEscolhido.esquiva;
        let sorte = Math.floor(Math.random() * 3);
        if (sorte == 0) {
          this.esquiva += 3;
        } else if (sorte >= 1) {
          this.esquiva -= 3;
        }
      },
    };

    charEscolhido.nome = personagens[escolhaPersonagem - 1];
    adversario.nome = removido;

    function combate(
      vidaChar,
      forcaChar,
      esquivaChar,
      vidaAdv,
      forcaAdv,
      esquivaAdv,
      final
    ) {
      console.clear();
            console.log(`
      
              ...

      Tá na hora da TRETA!!!

              ...`);

      pausecomp(1500);
      
      while (vidaChar > 0 && vidaAdv > 0) {
        console.clear();

        console.log(`***********
        ${charEscolhido.nome} - Vida: ${vidaChar}/${charEscolhido.vida} 
        Força ${forcaChar}
        Esquiva ${esquivaChar}
        ------
        ${adversario.nome} - Vida ${vidaAdv}/100
        Força ${forcaAdv}
        Esquiva ${esquivaAdv}
        ***********
        `);
        let dado1 = Math.floor(Math.random() * 5 + 1);
        let dado2 = Math.floor(Math.random() * 5 + 1);
        let danochar = forcaChar + dado1 + dado2 - esquivaAdv;
        if (danochar < 0) {
          danochar = 0;
        }
        vidaAdv = vidaAdv - danochar;

        console.log(`Você tirou ${dado1 + dado2} nos dados e somou ao seu ataque
        
        ${adversario.nome} sofreu ${danochar} de dano.
        `);
        pausecomp(1000);
        console.log("**************************");
        dado1 = Math.floor(Math.random() * 5 + 1);
        dado2 = Math.floor(Math.random() * 5 + 1);
        let danoadv = forcaAdv + dado1 + dado2 - esquivaChar;
        if (danoadv < 0) {
          danoadv = 0;
        }
        vidaChar = vidaChar - danoadv;
        console.log(`${adversario.nome} tirou ${
          dado1 + dado2
        } nos dados e somou ao seu ataque.
        
       Você sofreu ${danoadv} de dano.
       
      `);
        pausecomp(1000);
        prox = prompt(`\n Enter para próxima rodada`);
      }
      if (final == false) {
        if (vidaAdv < 0) {
          console.clear();
          console.log(`
              ...
        Tu é brabo mesmo venceu a luta!
          Agora vamos se preparar para a próxima luta...
              ...
         `);
          pausecomp(2000);
          vitorias++;
        } else if (vidaChar < 0) {
          console.clear();
          console.log(
            `Nossa você tomou uma peia ... recupera os ferimentos ai e vamos pra próxima luta.`
          );
          pausecomp(1500);
        } else {
          console.clear();
          console.log(
            "Ave Maria... que loucura foi essa? vocês empataram. Simbora pra próxima luta."
          );
          pausecomp(1500);
        }
      } else if (final == true) {
        console.clear();
        if (vidaAdv < 0) {
          console.clear();
          console.log(`
                    ...
              É CAMPEÃOOOOO!!!
        PARABÉNS VOCÊ GANHOU O CHAPÉU DE COURO
                    ...
         `);
          pausecomp(5000);
        } else if (vidaChar < 0) {
          console.log(
            `Você foi Obliterado pelo Lampião!
                  GAME OVER
            `
          );
          pausecomp(5000);
        } else {
          console.log(`
            O empate é uma derrota... Você continua sem o Chápeu.
                   GAME OVER`);
          pausecomp(5000);
        }
      }
    }
    if ((luta == 1)) {
      console.log(` Você tem 3 semanas para se prepara para a luta, cada semana terá 100 pontos para usar em: treinos de força, Treino de esquiva e comer.

    Vamos começar? `);
      prox = prompt("Enter para continuar");
    } else {
      console.log(`
        ***
Vamos para a ${luta}ª luta

        ***
`);
      pausecomp(2000);
    }
    console.clear();

    let semana = 100;

    for (let cont = 0; cont < 3; cont++) {
      //for para as semanas
      semana = 100;
      contSemana: while (semana > 0) {
        function menuPrincpal() {
          console.clear();
          console.log(` 
     ***********************************
           ~~~ ${personagens[escolhaPersonagem - 1]} ~~~
     * Vitórias: ${vitorias}/3                   
     * Pontos da ${cont + 1}ª Semana  : ${semana}/100  
     * Vida: ${charEscolhido.vida}                       
     * Força: ${charEscolhido.forca}                       
     * Esquiva: ${charEscolhido.esquiva}   
     *            
     * Próximo adversário: ${removido}   
     ***********************************
     `);
          console.log(`
      Escolha uma das opções abaixo:
      1 - Treinar Força (-50 pts)
      2 - Treinar Esquiva (-50 pts)
      3 - Comer (-15 pts)
  
      9 - Encerrar Semana
      `);

          return prompt(">");
        }
        let escolhaMenu = menuPrincpal();
        if (charEscolhido.vida > 0) {
          if (escolhaMenu == 1) {
            //treinar força
            console.clear();
            if (semana < 50) {
              console.log(`
                        ***

              Você não tem pontos suficientes

                        ***
                        `);
              pausecomp(1500);
            } else if (semana >= 50) {
              console.clear();
              let listaTreino = [
                "Treino de MMA (+2 de força e - 10 de vida)",
                "Saco de pancadas (+1 de força)",
                "Sparring (+5 de força, - 15 de vida)",
                "voltar",
              ];
              console.log(`
              
              
              
              
              
              `);
              for (let i in listaTreino) {
                console.log(`${Number(i) + 1} - ${listaTreino[i]}`);
              }
              console.log();
              let escolhaTreino = prompt(`O que você deseja treinar?`);
              if (escolhaTreino == 1) {
                charEscolhido.alteraForca(2);
                charEscolhido.alteraVida(10, "-");
                semana -= 50;
              } else if (escolhaTreino == 2) {
                charEscolhido.alteraForca(1);
                semana -= 50;
              } else if (escolhaTreino == 3) {
                charEscolhido.alteraForca(5);
                charEscolhido.alteraVida(15, "-");
                semana -= 50;
              } else if (escolhaTreino == 4) {
                menuPrincpal();
              }
            }
          } else if (escolhaMenu == 2) {
            // Treinar esquiva
            if (semana < 50) {
              console.clear();
              console.log(`
                        ***

              Você não tem pontos suficientes
              
                        ***
                        `);
              pausecomp(1500);
            } else if (semana >= 50) {
              console.clear();
              console.log(`
              
              
              
              
              
              `);
              charEscolhido.alteraesquiva();
              console.log(`Você recebeu + 5 pts de esquiva`);
              pausecomp(1500);
              semana -= 50;
            }
          } else if (escolhaMenu == 3) {
            // comer
            if (semana < 15) {
              console.clear();
              console.log(`
              ***

    Você não tem pontos suficientes
    
              ***
              `);
              pausecomp(1500);
            } else if (semana >= 15) {
              console.clear();
              console.log(`
              
              
              
              
              
              `);
              let listaComida = [
                "Cuscuz (+10)",
                "Baião de dois (+10)",
                "acarajé (+10)",
                "Voltar",
              ];
              for (let i in listaComida) {
                console.log(`${Number(i) + 1} - ${listaComida[i]}`);
              }
              console.log();
              let escolhaComida = prompt(`O que você deseja comer?`);
              if (escolhaComida != 4) {
                console.log(`Você restaurou 10 pontos de vida!`);
                charEscolhido.alteraVida(10, "+");
                semana -= 15;
                pausecomp(1500);
              }
            }
          } else if (escolhaMenu == 9) {
            //reseta pontos da semana
            console.clear();
            semana = 0;
            console.log(`
          
                  ...

          Encerrando a semana. 
              Aguarde!

                  ...`);
            pausecomp(2000);
          }
        } else {
          //Feito por garantia, mas usuario não conseguirá diminuir a 0 durante os treinos.
          console.log(`
                  ***
          Você precisa restaurar sua vida!
                  ***
                  `);
          pausecomp(1500);
        }
      }
    }
    // combate aqui
    if ((luta == 1)) {
      console.log(`Como funciona o combate:
      #1 O combate será por turnos, sendo utilizado 2 dados em cada turno, perde aquele que tiver a vida zerada.

      #2 FORÇA - é o poder de ataque.

      #3 ESQUIVA - é a defesa. 

      #4 Cada jogador irá rolar 2 dados e somar o resultado deles. A soma dos dados será adicionado a sua FORÇA naquele turno.
      
      #5 A força de quem ataca será subtraida da esquiva de quem defende, assim gerando um DANO a VIDA de quem defende.
      
      #6 Caso a ESQUIVA seja maior que a FORÇA o dano será igual a zero.
      
      `);
      prox = prompt("Enter para continuar");
    }

    adversario.alteraForca();
    adversario.alteraesquiva();
    combate(
      charEscolhido.vida,
      charEscolhido.forca,
      charEscolhido.esquiva,
      adversario.vida,
      adversario.forca,
      adversario.esquiva,
      charEscolhido.final,
      
    );
  }
}

let lampiao = {
  nome: 'Lampião "O Rei do Canguaço"',
  vida: charEscolhido.vida,
  forca: charEscolhido.forca+1,
  esquiva: charEscolhido.esquiva,
};
// Batalha Final
if (vitorias == 3) {
  charEscolhido.final = true;
  adversario.nome = lampiao.nome;
  console.log(`Chegou a hora de enfrentar Lampião "O rei do cangaço"!

Simbora!!!


`);

  pausecomp(5000);
  combate(
    charEscolhido.vida,
    charEscolhido.forca,
    charEscolhido.esquiva,
    lampiao.vida,
    lampiao.forca,
    lampiao.esquiva,
    charEscolhido.final
  );
}
