//Capa
nomeCarga = "Dedicação do ID4D para ID60, ID61, ID62, ID65, ID66, ID67, ID68, ID70";
revCarga = "Rev. 2";
dataManual = "Março 2013";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicação do transponder Texas Crypto - 4D - ID60 como ID61, ID62, ID65, ID66, ID67, ID68 ou ID70.`,
`Volta o transponder no estado virgem - ID60, caso o transponder não esteja bloqueado (Lock).`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Toyota",
model: "Rav4 (ID67)",
years: "2005 a 2009"
},
{
manufacturer: "Toyota",
model: "Hilux (ID67)",
years: "2005 a 2008"
},
{
manufacturer: "Toyota",
model: "Corolla (ID70)",
years: "2009 a 2013"
},
{
manufacturer: "Mitsubishi",
model: "Diamante (ID61)",
years: "2002 a 2003"
},
{
manufacturer: "Mitsubishi",
model: "Eclipse (ID61)",
years: "2002 a 2003"
},
{
manufacturer: "Mitsubishi",
model: "Galant (ID61)",
years: "2002 a 2003"
},
{
manufacturer: "Mitsubishi",
model: "Lancer (ID61)",
years: "2005 a 2006"
},
{
manufacturer: "Mitsubishi",
model: "Pajero (ID61)",
years: "2002 a 2005"
},
{
manufacturer: "Mitsubishi",
model: "Pajero Sport (ID61)",
years: "1999 a "
},
{
manufacturer: "Subaru",
model: "B9 Tribeca (ID62)",
years: "2005 a "
},
{
manufacturer: "Subaru",
model: "Forest (ID62)",
years: "2004 a "
},
{
manufacturer: "Subaru",
model: "Impreza (ID62)",
years: "2004 a "
},
{
manufacturer: "Subaru",
model: "Legacy Outback (ID62)",
years: "2005 a "
},
{
manufacturer: "Suzuki",
model: "Alto (ID65)",
years: "2002 a "
},
{
manufacturer: "Suzuki",
model: "Jimny (ID65)",
years: "2002 a "
},
{
manufacturer: "Suzuki",
model: "Liana (ID65)",
years: "2001 a 2005"
},
{
manufacturer: "Suzuki",
model: "Liana (ID66)",
years: "2006 a "
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize um transponder ID 4D63 especial.", 
image: "/images/Transponders/Texas Crypto 4D.jpg"},

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
{title: `Realizando a dedicação de transponder ID 46`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Toyota`], help: `Tecle OK`, menu: 1000},
{lines: [`Corolla`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
