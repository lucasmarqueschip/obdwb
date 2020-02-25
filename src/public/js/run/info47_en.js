//Capa
nomeCarga = `Manual Software -  OBD0047<br />Ignition Switch Emergency Reading and Master Key Reading - 4AFB/59FB/4SF and Reset 4AFB`;
revCarga = `Rev. 1`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`PIN code reading of the ECUs 4AFB.P1, 4AFB.PF,  4AFB.PK, 4AFB.UB2, 4AFB.UF1, 4AFB.UG, 4AFB.UN, 4SF and 59FB and ERA code reading.`,
`Ignition switch emergency reading and master key reading.`,
`Reset 4AFB ECU.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Brava 1.6`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Doblo 1.8`,
years: `2003 a 2006`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Fiorino 1.5`,
years: `1997 a 2000`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0`,
years: `2001 a 2009`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 8V`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0`,
years: `2000 a 2005`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Strada Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Fire 1.3`,
years: `2003 a 2009`
},
{
manufacturer: `Fiat`,
model: `Uno Mille Fire`,
years: `2001 a 2009`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Use the universal cable + A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Use Fiat cable to power the transponder module.<br />Note: The battery is located behind the plastic cover of the driver's side of the step.`, 
image: `/images/Acessórios/Cabo Fiat.jpg`},

{title: ``, 
description: ``, 
ballon: `8 soic clip. It connects the memory of the module to the OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/ECU 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0047 - Fiat - Leit. Part. Emerg. Ch. Mestra - 4AFB59FB4SF e Reset 4AFB/Reset da ECU IAW 4AFB Fiat/Pinça conectada.jpg`},
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
help: `Press OK!`
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
`Key&nbsp;Code&nbsp;ERA:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`<br />`,
`Electronic&nbsp;CODE:`,
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
`<br />`,
`Electronic&nbsp;CODE:`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`&nbsp;ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
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
`Try&nbsp;to&nbsp;ignite`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for&nbsp;10s`,
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
`&nbsp;End&nbsp;Operation!`,
`<br />`,
`<br />`,
],
help: `Reseted ECU.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `ERROR in reading!`,
screens: [
`&nbsp;`,
`ERROR&nbsp;in`,
`&nbsp;&nbsp;reading!`,
`<br />`,
],
causes: [
`ppppp `,],
solutions: [
`ppp `,]
},
{ label: `Programing ERROR!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Programing`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`·	Bad contact of the clip to the memory,`,`·	Bad contact of the clip to the OBDMap,`,`·	Defective memory or module,`,`·	The clip was connected in other component, (If there's another SOIC8 component in the board)`,`·	The terminals of the memory or of the clip itself might have resin or be dirty.`,],
solutions: [
`·	Check the correct position of the clip to the memory, all terminals of the clip must attach the corresponding terminals of the memory,`,`·	Check if the screws that fix the clip to the OBDMap are well attached,`,`·	Check the module status,`,`·	Check if the terminals of the memory and clip are clean, without resin or dirt.`,]
},
{ label: `Inverted clip!`,
screens: [
`&nbsp;`,
`Inverted&nbsp;clip!`,
`<br />`,
`<br />`,
],
causes: [
`The clip was connected inverted to the memory, in other words, the pin 1 of the clip does not match to the pin 1 of the memory ( The pin 1 is on red side of the cable).`,],
solutions: [
`Check the correct position of the clip to the memory.`,]
},
{ label: `Short circuit!`,
screens: [
`&nbsp;`,
`Short&nbsp;circuit!`,
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
