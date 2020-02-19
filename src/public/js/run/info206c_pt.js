//Capa
nomeCarga = "Dedicação do transponder ID4D-63 e ID4D DST+ para FORD";
revCarga = "Rev. 4";
dataManual = "Novembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicação dos transponders:`,
`ID4D-63 especial,`,
`ID4D-DST+ (80 Bits) Ford,`,
``,
`O transponder dedicado deverá ser programado nos veículos via diagnose.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "EcoSport 1.6",
years: "2013 a 2015"
},
{
manufacturer: "Ford",
model: "EcoSport 2.0",
years: "2013 a 2015"
},
{
manufacturer: "Ford",
model: "New Fiesta 1.6",
years: "2013 a 2014"
},
{
manufacturer: "Ford",
model: "Ranger 3.2",
years: "2013 a 2015"
},
{
manufacturer: "Ford",
model: "Transit 2.2",
years: "2009 a 2013"
},
];
applicationObs = createObs("Observações:", "Veja abaixo quais transponders os veículos citados utilizam.", undefined)



resources = [
{title: "Observações", 
description: "Certifique, utilizando a carga básica do módulo de transponder, na função Identificar, se o transponder já está preparado com os valores selecionados, mostrados nas telas abaixo. <br /><br />Caso o transponder não esteja com os valores 03, 80 e R: 000000 conforme mostrados abaixo, prossiga com a dedicação conforme os passos mostrados na página 6 ou página 7. <br />Se o transponder já estiver preparado, continue a programação via diagnose.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0206 - Dedicar TPD 4D FORD/Observação TPD.jpg"},

{title: "Transponder utilizado:", 
description: "", 
ballon: "Para os carros Ecosport e New Fiesta, poderá ser usado os transponders: ID4D-63 especial ou ID4D DST + (80 Bits) Ford. <br />Para a Transit e Ranger, utilize o transponder: ID4D DST + (80 Bits) Ford.", 
image: "/images/Transponders/ID4D63 especial_ID4D DST Ford.jpg"},

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
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando dedicação do transponder ID4D-63 especial para Ford:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D 63`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando dedicação do transponder ID4D DST+ (80 Bits) para Ford:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Ecosport`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID4D 63`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID4D-63 especial ou um ID4D DST+ (80 Bits) Ford virgem. `,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder, `,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação, `,`Mau contato no Módulo de Transponder com o OBDMap, `,`O transponder utilizado não é o ID4D-63 especial ou um ID4D DST+ (80 Bit) Ford. `,``,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder, `,`Não retirar o transponder durante o processo de dedicação, `,`Conferir se o transponder é ID4D-63 especial ou um ID4D DST+ (80 Bit) Ford. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder, `,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos. `,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
