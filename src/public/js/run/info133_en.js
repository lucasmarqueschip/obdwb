//Capa
nomeCarga = `Manual Software -  OBD0133<br />`;
revCarga = `Rev. 6`;
dataManual = `January 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Frontier 2.5`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `Versa 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8`,
years: `2006 a 2013`
},
{
manufacturer: `Nissan`,
model: `March 1.0`,
years: `2016 a 2017`
},
{
manufacturer: `Nissan`,
model: `March 1.6`,
years: `2012 a 2017`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8`,
years: `2009 a 2013`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0`,
years: `2005 a 2013`
},
{
manufacturer: `Nissan`,
model: `Gran Livina`,
years: `2009 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: `Use the ID46 - blank chip.`, 
image: `/images/Transponders/Transponder PCF7936 Carvão.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Universal cable + A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Use the universal cable + A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-D6.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0133 Leitura de Senha e Programação de Chaves NATS 6 e NATS 6 CAN via OBD/OUTRAS MENSAGENS - ERRO DE COMUNICAÇÃO.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;BCM:&nbsp;*****`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Use&nbsp;Blank&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;Transp&nbsp;PCF7936`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Num.&nbsp;of&nbsp;Keys:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`OFF&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insert&nbsp;key&nbsp;n`,
`switch&nbsp;ignit.ON!`,
`<br />`,
],
help: ``
},
{lines: [
`Insert&nbsp;and&nbsp;turn`,
`&nbsp;&nbsp;ON&nbsp;the&nbsp;key&nbsp;*`,
`&nbsp;for&nbsp;5&nbsp;seconds`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insert&nbsp;key&nbsp;n`,
`switch&nbsp;ignit.ON!`,
`<br />`,
],
help: ``
},
{lines: [
`Turn&nbsp;on&nbsp;the&nbsp;key`,
`for&nbsp;5&nbsp;secs,&nbsp;turn`,
`&nbsp;off&nbsp;for&nbsp;5secs`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Turn&nbsp;on&nbsp;the`,
`&nbsp;engine&nbsp;for&nbsp;30`,
`secs.&nbsp;to&nbsp;finish`,
`&nbsp;the&nbsp;prog.&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Use&nbsp;Blank&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;Transp&nbsp;PCF7936`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`All&nbsp;keys`,
`will&nbsp;be&nbsp;deleted!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`OFF&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: ``
},
{lines: [
`Insert&nbsp;and&nbsp;turn`,
`&nbsp;&nbsp;ON&nbsp;the&nbsp;key&nbsp;*`,
`&nbsp;for&nbsp;5&nbsp;seconds`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Key&nbsp;number:&nbsp;*`,
`Program&nbsp;more?`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)YES`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Turn&nbsp;off&nbsp;and&nbsp;`,
`turn&nbsp;on&nbsp;the&nbsp;key!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Use CAN cable!`,
screens: [
`<br />`,
`Use&nbsp;CAN&nbsp;cable!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has epired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Incorrect PIN!`,
screens: [
`<br />`,
`&nbsp;Incorrect&nbsp;PIN!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
