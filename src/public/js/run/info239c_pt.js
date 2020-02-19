//Capa
nomeCarga = "Dedicação do transponder ID33 para GM,VW";
revCarga = "Rev. 1";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicação do transponder T5 para ID33 GM e VW.`,
`<obs>`,
`Observação:`,
`Realizado através do módulo de transponder.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "1997 a 2003"
},
{
manufacturer: "GM",
model: "Corsa 1.0 16V",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Corsa 1.6",
years: "1997 a 2003"
},
{
manufacturer: "GM",
model: "Corsa 1.6 16V",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Corsa Pickup 1.6",
years: "1997 a 1999"
},
{
manufacturer: "GM",
model: "Omega 2.2 E020",
years: "1995 a 1999"
},
{
manufacturer: "GM",
model: "Omega 2.2 IMMO",
years: "1995 a 1999"
},
{
manufacturer: "GM",
model: "Omega 4.1",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Golf",
years: "1995 a 1999"
},
{
manufacturer: "VW",
model: "Passat",
years: "1995 a 1999"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "", 
image: "/images/Transponders/TPD_OK/Transponder T5 como ID20.jpg"},

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
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Preparando o transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ERRO GRAV. T5! (OK) P/ REPETIR.`,
screens: [
`&nbsp;`,
`&nbsp;ERRO&nbsp;GRAV.&nbsp;T5!`,
`(OK)&nbsp;P/&nbsp;REPETIR.`,
`<br />`,
],
causes: [
` O transponder não está posicionado corretamente no módulo de transponder.`,`O transponder utilizado não é o T5 Virgem`,``,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder.`,`Verifique o transponder que está sendo utilizado.`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponderou para deixá-lo virgem (ID20).`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
