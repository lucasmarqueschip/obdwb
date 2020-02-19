//Capa
nomeCarga = "Dedicação de Transponder ID40 e ID46 Chery";
revCarga = "Rev. 1";
dataManual = "Outubro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder PCF7935(ID40) e o PCF7936 (ID46) para Chery.`,
`Para realizar esta função é necessário utilizar o Módulo de Transponder conectado ao OBDMap.`,
`<obs>`,
`Observação: Caso o veículo possua uma chave válida, deve-se realizar a identificação da mesma, através da carga básica do Módulo de Transponder, para saber se o veículo utiliza o ID40 ou o ID46.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Chery",
model: "Face 1.3",
years: "2009 a 2012"
},
{
manufacturer: "Chery",
model: "Tiggo 2.0",
years: "2009 a 2012"
},
{
manufacturer: "Chery",
model: "S18 1.3",
years: "2010 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize o transponder ID 40 (T16).", 
image: "/images/Transponders/ID 40.jpg"},

{title: "", 
description: "", 
ballon: "Para os veículos Agile e Montana (Imob4) até 2012, utilize o transponder PCF7936 (ID46) (Virgem).", 
image: "/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg"},

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
{title: `Realizando a dedicação de transponder ID 40`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Chery`], help: `Tecle OK`, menu: 1000},
{lines: [`Tiggo`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID40/ID46`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a dedicação de transponder ID 46`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Chery`], help: `Tecle OK`, menu: 1000},
{lines: [`Tiggo`], help: `Tecle OK`, menu: 1000},
{lines: [`Transponders`], help: `Tecle OK`, menu: 1000},
{lines: [`ID40/ID46`], help: `Tecle OK`, menu: 1000},
{lines: [`Dedicação de transponder`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na gravacao do transponder! <OK>`,
screens: [
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7935 para ID40.`,`O transponder utilizado não é o PCF7936 para ID46.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7935 para ID40. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir o transponder PCF7936 para ID46. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos`,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder PCF7936 (ID46) virgem para.`,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
],
solutions: [
]
},

{ label: `Transponder nao Encontrado! <OK>`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7935. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
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
`Utilize um transponder PCF7935 (ID40) virgem.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
