//Capa
nomeCarga = `Manual Carga -  OBD0254<br />Dedicação de Transponder ID48 para TP25 (Audi)`;
revCarga = `Rev. 1`;
dataManual = `Janeiro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Dedica o transponder ID48 para TP25 (Audi)`,
`Para realizar essa função é necessário utilizar o Módulo de Transponder conectado ao OBDMap.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Audi`,
model: `A1`,
years: `2010 a 2015`
},
{
manufacturer: `Audi`,
model: `A3`,
years: `2003 a 2012`
},
{
manufacturer: `Audi`,
model: `A4 / S4`,
years: `2004 a 2012`
},
{
manufacturer: `Audi`,
model: `A5 / S5`,
years: `2008 a 2013`
},
{
manufacturer: `Audi`,
model: `A6 / S6`,
years: `2006 a 2013`
},
{
manufacturer: `Audi`,
model: `A7 / S7`,
years: `2011 a 2013`
},
{
manufacturer: `Audi`,
model: `A8 / S8`,
years: `2001 a 2013`
},
{
manufacturer: `Audi`,
model: `Q3`,
years: `2011 a 2014`
},
{
manufacturer: `Audi`,
model: `Q5`,
years: `2007 a 2013`
},
{
manufacturer: `Audi`,
model: `Q7`,
years: `2007 a 2013`
},
{
manufacturer: `Audi`,
model: `TT`,
years: `2005 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: ``, 
image: `/images/Transponders/ID48 Crypto2 virgem.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando o teste de compatibilidade do transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Audi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Audi`, `>ID 48`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ID 48`, `>Compativel?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;ID48&nbsp;virgem&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;compativel!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a dedicação do transponder ID48:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Audi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Audi`, `>ID48`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`ID48`, `>Dedicar`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;ID48&nbsp;virgem&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Transp.&nbsp;Gravado!`,
`&lt;OK&gt;&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Programação Concluída!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder Bloqueado! <OK>`,
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
{ label: `Transponder nao Encontrado!`,
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
