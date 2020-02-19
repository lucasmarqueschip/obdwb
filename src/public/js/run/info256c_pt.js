//Capa
nomeCarga = "Dedicação de Transponder ID48 para TP24 (Skoda)";
revCarga = "Rev. 1";
dataManual = "Janeiro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder ID48 para TP24 (Skoda)`,
`Para realizar essa função é necessário utilizar o Módulo de Transponder conectado ao OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Skoda",
model: "Citigo",
years: "2012 a 2012"
},
{
manufacturer: "Skoda",
model: "Fabia",
years: "2007 a 2014"
},
{
manufacturer: "Skoda",
model: "Laura",
years: "2007 a 2012"
},
{
manufacturer: "Skoda",
model: "Octavia",
years: "2004 a 2012"
},
{
manufacturer: "Skoda",
model: "Rapid",
years: "2013 a 2013"
},
{
manufacturer: "Skoda",
model: "Roomster",
years: "2006 a 2015"
},
{
manufacturer: "Skoda",
model: "Scout",
years: "2007 a 2012"
},
{
manufacturer: "Skoda",
model: "Superb",
years: "2008 a 2015"
},
{
manufacturer: "Skoda",
model: "Yeti",
years: "2009 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "", 
image: "/images/Transponders/ID48 Crypto2 virgem.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

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
{lines: [`Skoda`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`TP24`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a dedicação do transponder ID48`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Skoda`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`TP24`], help: `Tecle OK`, menu: 1000},
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
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
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
`Utilize um transponder ID46 virgem.`,]
},

{ label: `Falha! Transp. Magic 1`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falha!`,
`Transp.&nbsp;Magic&nbsp;1`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
