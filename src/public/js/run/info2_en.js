//Capa
nomeCarga = `Manual Software -  OBD0002<br />PIN Code Reading and VIN Writing - Corsa Flex 1.0`;
revCarga = `Rev. 5`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`4-digit PIN code reading by OBDII.`,
`VIN writing by OBDII.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `GM`,
model: `Corsa 1.0 Flex`,
years: `2005 a 2008`
},
{
manufacturer: `GM`,
model: `Corsa 1.4 Flex`,
years: `2005 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Accessories used:`, 
description: ``, 
ballon: `Connect the universal cable to the A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket is located at position F5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/F5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `PIN code reading by OBDII`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Me799 V1 Corsa`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Me799 V1 Corsa`, `>Read?`, `<br /><br />`], help: `Press OK`, menu: 1000},
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
`PIN:`,
`çççç`,
`<br />`,
],
help: `Write down the PIN. It will be used to key programming.`
},
{lines: [
`&nbsp;`,
`VIN:`,
`<br />`,
`<br />`,
],
help: `VIN read of the ECU.`
},
]
}, {title: `VIN writing`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnostico`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Me799 V1 Corsa`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Me799 V1 Corsa`, `>VIN writing`, `<br /><br />`], help: `Press OK`, menu: 1000},
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
`Enter:**********`,
`*******`,
`<br />`,
],
help: `Use the buttons to up and to down to insert the VIN that will be written in the vehicle.`
},
{lines: [
`Confirm?`,
`****************`,
`*`,
`<br />`,
],
help: `Press OK to confirm or VOLTA to correct.`
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
`&nbsp;&nbsp;VIN`,
`&nbsp;&nbsp;&nbsp;Programmed!`,
`<br />`,
],
help: ``
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
{ label: `PIN not Found!`,
screens: [
`&nbsp;`,
`PIN&nbsp;not`,
`&nbsp;&nbsp;&nbsp;&nbsp;Found!`,
`<br />`,
],
causes: [
`ECU file is corrupted,`,`ECU invalide file,`,`ECU PIN code might be reset.`,],
solutions: [
` `,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
