//Capa
nomeCarga = "Dedicação de transponder ID48 para TP22 (Seat)";
revCarga = "Rev. 1";
dataManual = "Janeiro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder ID48 para TP22 (Seat)`,
`<obs>`,
`Observação:`,
`Para realizar essa função é necessário utilizar o Módulo de Transponder conectado ao OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Seat",
model: "Alhambra",
years: "06 a 15"
},
{
manufacturer: "Seat",
model: "Altea",
years: "04 a 15"
},
{
manufacturer: "Seat",
model: "Exeo",
years: "08 a 13"
},
{
manufacturer: "Seat",
model: "Feetrack",
years: "08 a 15"
},
{
manufacturer: "Seat",
model: "Ibiza",
years: "04 a 08"
},
{
manufacturer: "Seat",
model: "Leon",
years: "05 a 12"
},
{
manufacturer: "Seat",
model: "Mii",
years: "12 a 12"
},
{
manufacturer: "Seat",
model: "Toledo",
years: "04 a 09"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID48-CAN (TP23).jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o teste de compatibilidade do transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Seat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`TP22`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a dedicação do transponder ID48:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Seat`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`TP22`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder;`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação;`,`Mau contato no Módulo de Transponder com o OBDMap;`,`O transponder utilizado não é o Megamos ID48 Crypto2 Virgem.`,``,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder;`,`Conferir o transponder Megamos ID48 Crypto2 Virgem. Pode-se utilizar a compatibilidade para identificar o transponder;`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder Bloqueado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`Bloqueado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder Megamos ID48 Crypto2 Virgem. Pode-se utilizar a compatibilidade para identificar o transponder.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder;`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação;`,`Mau contato no Módulo de Transponder com o OBDMap;`,`O transponder utilizado não é o Megamos ID48 Crypto2 Virgem.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder;`,`Conferir o transponder Megamos ID48 Crypto2 Virgem. Pode-se utilizar a compatibilidade para identificar o transponder;`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},

{ label: `Falha! Transp. Magic 1`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falha!`,
`Transp.&nbsp;Magic&nbsp;1`,
`<br />`,
],
causes: [
`O transpoder utilizado é um ID48 mais antigo.`,``,``,],
solutions: [
`Conferir o transponder Megamos ID48 Crypto2 Virgem. Pode-se utilizar a compatibilidade para identificar o transponder;`,``,]
},

{ label: `Erro na gravacao do transponder! <OK>`,
screens: [
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder;`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação;`,`Mau contato no Módulo de Transponder com o OBDMap,;`,`O transponder utilizado não é o Megamos ID48 Crypto2 Virgem.`,``,``,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder;`,`Conferir o transponder Megamos ID48 Crypto2 Virgem. Pode-se utilizar a carga de compatibilidade para identificar o transponder;`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
