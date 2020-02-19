//Capa
nomeCarga = "Dedicação do Transponder PCF7937EA para GM Immo 5";
revCarga = "Rev. 1";
dataManual = "Agosto 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedicação do transponder PCF7937EA virgem para o sistema GM Immo 5.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Cobalt 1.4",
years: "2011 a 2015"
},
{
manufacturer: "GM",
model: "Cobalt 1.8",
years: "2011 a 2013"
},
{
manufacturer: "GM",
model: "Cruze 1.8",
years: "2011 a 2013"
},
{
manufacturer: "GM",
model: "Onix 1.0",
years: "2012 a 2015"
},
{
manufacturer: "GM",
model: "Onix 1.4",
years: "2012 a 2015"
},
{
manufacturer: "GM",
model: "Prisma 1.0",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2013 a 2016"
},
{
manufacturer: "GM",
model: "Sonic 1.6",
years: "2012 a 2013"
},
{
manufacturer: "GM",
model: "Spin 1.8",
years: "2012 a 2013"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2012 a 2013"
},
{
manufacturer: "GM",
model: "S10 2.8 Diesel",
years: "2012 a 2013"
},
{
manufacturer: "GM",
model: "Tracker 1.8",
years: "2014 a 2014"
},
{
manufacturer: "GM",
model: "TrailBlazer 2.8 Diesel",
years: "2013 a 2013"
},
{
manufacturer: "GM",
model: "TrailBlazer 3.6 Gasolina",
years: "2013 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder PCF7937EA virgem.", 
image: "/images/Transponders/PCF7937A Virgem.jpg"},

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
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a dedicação do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>PCF7937EA`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Insira&nbsp;o&nbsp;transp.`,
`PCF7937EA&nbsp;Virgem`,
`&nbsp;&nbsp;no&nbsp;Modulo&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;OK!`,
],
help: `Insira o transponder PCF7937EA virgem no módulo e tecle OK!
`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `


`
},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Tecle OK para gravar outro transponder ou tecle VOLTA para finalizar.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7937EA.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7937EA. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7937EA.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7937EA. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7937EA.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7937EA. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
`O transponder já se encontra programado e travado.`,``,``,``,``,``,``,],
solutions: [
`Utilize um transponder PCF7937EA virgem.`,``,``,]
},

{ label: `Use transponder PCF7937 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`PCF7937&nbsp;virgem!`,
`<br />`,
],
causes: [
``,``,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
