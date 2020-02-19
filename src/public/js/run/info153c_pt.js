//Capa
nomeCarga = "Clonar Transponder 4C";
revCarga = "Rev. 4";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Clonar chaves dos veículos que utilizam o transponder ID4C (T30/31), ou TPX1 utilizando transponder TPX1.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "F-250 Diesel",
years: "1999 a 2003"
},
{
manufacturer: "Ford",
model: "F-350 Diesel",
years: "1999 a 2003"
},
{
manufacturer: "Ford",
model: "Fiesta 1.0",
years: "1996 a 2002"
},
{
manufacturer: "Ford",
model: "KA 1.0",
years: "1997 a 2002"
},
{
manufacturer: "Ford",
model: "Courier 1.3 e 1.4",
years: "1998 a 1999"
},
{
manufacturer: "Ford",
model: "Escort 1.6",
years: "1997 a 1999"
},
{
manufacturer: "Ford",
model: "Mondeo 2.0",
years: "1997 a 1998"
},
{
manufacturer: "Ford",
model: "Taurus 3.0",
years: "1997 a 1998"
},
{
manufacturer: "Toyota",
model: "Corolla 1.6 e 1.8",
years: "1996 a 2004"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Transponder TPX1 Virgem.", 
image: "/images/Transponders/TPX1.jpg"},

{title: "", 
description: "", 
ballon: "Chave Ford e Toyota já montada com o transponder.", 
image: "/images/Chaves e Telecomandos/Ford e Toyota.jpg"},

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

{title: "", 
description: "", 
ballon: "Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.", 
image: "/images/Instrucao Modulo de Transponder/MT - Chave Toyota CERTO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a clonagem de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4C`], help: `Tecle OK`, menu: 1000},
{lines: [`Clonagem do transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ERRO DE CRC!`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;DE&nbsp;CRC!`,
`<br />`,
`<br />`,
],
causes: [
`Houve falha ou interferência na comunicação com o transponder.`,],
solutions: [
`Verificar correta posição do transponder no módulo de transponder.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o TPX1.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder TPX1. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o correto.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder se é o correto. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
