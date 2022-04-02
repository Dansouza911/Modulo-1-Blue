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

let lampiao = {
  nome: 'Lampião "O Rei do Canguaço"',
  vida: charEscolhido.vida,
  forca: charEscolhido.forca,
  esquiva: charEscolhido.esquiva,
};

while (vitorias < 3) {
  for (let i = 0; i < 9; i++) {
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
    charEscolhido.vida = 100;
    charEscolhido.forca = Math.round((charEscolhido.forca - 10) / 2 + 10);
    charEscolhido.esquiva = Math.round((charEscolhido.esquiva - 10) / 2 + 10);
    let frase = Math.floor(Math.random() * 3);
    console.log();
    if (frase == 0) {
      console.log(
        `Vish... Tu vai trocar soco com ${inimigos[escolhaInimigo]}... já pode ir rezando `
      );
    } else if (frase == 1) {
      console.log(`Haha deu azar cara... vai enfrentar o ${inimigos[escolhaInimigo]}, já se despediu de mainha?
      `);
    } else if (frase == 2) {
      console.log(`Já chamei o padre pra te benzer, você vai enfrentar o ${inimigos[escolhaInimigo]}... Pensando bem vou chamar mais 2 padres...
    `);
    }
    console.log();

    inimigos.splice(escolhaInimigo, 1);

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
      forca: charEscolhido.forca,
      esquiva: charEscolhido.esquiva,

      alteraForca: function () {
        let sorte = Math.floor(Math.random() * 2);
        if (sorte == 0) {
          this.forca += 3;
        } else if (sorte == 1) {
          this.forca -= 3;
        }
      },

      alteraesquiva: function () {
        let sorte = Math.floor(Math.random() * 2);
        if (sorte == 0) {
          this.esquiva += 3;
        } else if (sorte == 1) {
          this.esquiva -= 3;
        }
      },
    };

    charEscolhido.nome = personagens[escolhaPersonagem - 1];
    adversario.nome = inimigos[escolhaInimigo];

    function combate(
      vidaChar,
      forcaChar,
      esquivaChar,
      vidaAdv,
      forcaAdv,
      esquivaAdv,
      final
    ) {
      let dado1 = Math.floor(Math.random() * 5 + 1);
      let dado2 = Math.floor(Math.random() * 5 + 1);
      console.log(dado1, dado2);

      while (vidaChar > 0 && vidaAdv > 0) {
        console.clear();
        console.log(vidaChar,
          forcaChar,
          esquivaChar,
          vidaAdv,
          forcaAdv,
          esquivaAdv);
        
        console.log(`***********
        ${charEscolhido.nome} - Vida ${vidaChar} 

        ------
        ${adversario.nome} - ${vidaAdv}
        ***********
        `);

        vidaAdv = vidaAdv - (forcaChar + dado1 + dado2 - esquivaAdv);
        console.log(`Você tirou ${dado1 + dado2} nos dados e somou ao seu ataque
        
        ${adversario.nome} sofreu ${
          forcaChar + dado1 + dado2 - esquivaAdv
        } de dano.
        `);

        dado1 = Math.floor(Math.random() * 5 + 1);
        dado2 = Math.floor(Math.random() * 5 + 1);
        vidaChar = vidaChar - (forcaAdv + dado1 + dado2 - esquivaChar);
        console.log(`${adversario.nome} tirou ${
          dado1 + dado2
        } nos dados e somou ao seu ataque.
        
       Você sofreu ${forcaChar + dado1 + dado2 - esquivaAdv} de dano.
      `);
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
          console.log(
            `Nossa você tomou uma peia ... recupera os ferimentos ai e vamos pra próxima luta.`
          );
        } else {
          console.log(
            "Ave Maria... que loucura foi essa? vocês empataram. Simbora pra próxima luta."
          );
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
          pausecomp(3000);
        } else if (vidaChar < 0) {
          console.log(
            `Você foi Obliterado pelo Lampião!
                  GAME OVER
            `
          );
        } else {
          console.log(`
            O empate é uma derrota... Você continua sem o Chápeu.
                   GAME OVER`);
        }
      }
    }

    

    console.log(` Você tem 3 semanas para se prepara para a luta, cada semana terá 100 pontos para usar em: treinos de força, Treino de esquiva e comer.

    Vamos começar? `);
    prox = prompt("Enter para continuar");

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

        if (escolhaMenu == 1) {
          //treinar força
          console.clear();
          if (semana < 50) {
            console.log("Você não tem pontos suficientes");
            pausecomp(1500);
          } else if (semana >= 50) {
            console.clear();
            let listaTreino = [
              "Treino de MMA (+2 de força e - 10 de vida)",
              "Saco de pancadas (+1 de força)",
              "Sparring (+5 de força, - 15 de vida)",
              "voltar",
            ];
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
              console.log(`Você não tem pontos suficientes`);
              pausecomp(1500);
            } else if (semana >= 50) {
              console.clear();
              charEscolhido.alteraesquiva();
              console.log(`Você recebeu + 5 pts de esquiva`);
              pausecomp(1500);
              semana -= 50;
            }
          } else if (escolhaMenu == 3) {
            // comer
            if (semana < 15) {
              console.clear();
              console.log("Você não tem pontos suficientes");
              pausecomp(1500);
            } else if (semana >= 15) {
              console.clear();
              let listaComida = [
                "Cuscuz",
                "Baião de dois",
                "acarajé",
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
            pausecomp(3000);
          }
        }
      }
       // combate aqui
    combate(
      charEscolhido.vida,
      charEscolhido.forca,
      charEscolhido.esquiva,
      adversario.vida,
      adversario.forca,
      adversario.esquiva,
      charEscolhido.final
    );
    }
   
  }

// Batalha Final
if (vitorias == 3) {
  charEscolhido.final = true;
  console.log(`Chegou a hora de enfrentar Lampião "O rei do cangaço"!

Simbora!!!
`);
  combate(
    charEscolhido.vida,
    charEscolhido.forca,
    charEscolhido.esquiva,
    lampiao.vida,
    lampiao.forca,
    lampiao.esquiva,
    final
  );
}
