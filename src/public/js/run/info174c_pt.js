//Capa
nomeCarga = "Dedicação ID48 para TP23 (ID 48CAN ou T44)";
revCarga = "Rev. 1";
dataManual = "Março 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder Megamos Crypto ID48 (Magic 2) como TP23 (ID48 CAN), para ser programado nos veículos da linha VW.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Amarok 2.0",
years: "2010 a 2012"
},
{
manufacturer: "VW",
model: "Fox 1.0 e 1.6",
years: "2012 a 2014"
},
{
manufacturer: "VW",
model: "Gol G4 1.0 e 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol G5 1.0 e 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Gol G6 1.0 e 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Jetta 2.0",
years: "2010 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro G5 1.6",
years: "2009 a 2012"
},
{
manufacturer: "VW",
model: "Saveiro G6 1.6",
years: "2013 a 2014"
},
{
manufacturer: "VW",
model: "Tiguan 2.0",
years: "2010 a 2012"
},
{
manufacturer: "VW",
model: "Voyage G5 1.0 e 1.6",
years: "2010 a 2012"
},
{
manufacturer: "VW",
model: "Voyage G6 1.0 e 1.6",
years: "2013 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize transponder ID48 virgem.", 
image: "/images/Transponders/ID48 Magic 2 Virgem.jpg"},

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
{title: `Realizando a dedicação do transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID48 - TP23`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder não é um Megamos Crypto ID48-Magic 2.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize o transponder Megamos Crypto ID48-Magic 2 virgem,`,`Para verificar a condição de lock (bloqueio) do transponder, utilize a carga básica do módulo de transponder na função IDENTIFICAR.`,]
},

{ label: `Falha! Transp. Magic 1`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Falha!`,
`Transp.&nbsp;Magic&nbsp;1`,
`<br />`,
],
causes: [
`O transponder não é do tipo Magic 2 como solicitado pela função.`,],
solutions: [
`Utilize transponder Megamos Crypto ID48-Magic 2 virgem,`,`Para verificar o tipo de transponder, utilize a carga básica no módulo de transponder na função IDENTIFICAR.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
