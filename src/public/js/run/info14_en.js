//Capa
nomeCarga = `Manual Software -  OBD0014<br />Corolla TOYOTA - Key Programming and Remote Control`;
revCarga = `Rev. 4`;
dataManual = `January 2016`;
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
manufacturer: `Toyota`,
model: `Corolla 1.6 (Chaves)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Chaves)`,
years: `2009 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Chaves)`,
years: `2011 a 2012`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.6 (Telecomando)`,
years: `2009 a 2010`
},
{
manufacturer: `Toyota`,
model: `Corolla 1.8 (Telecomando)`,
years: `2009 a 2016`
},
{
manufacturer: `Toyota`,
model: `Corolla 2.0 (Telecomando)`,
years: `2011 a 2016`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Use the ID 4D70 chip.`, 
image: `/images/Transponders/4D-70.jpg`},

{title: ``, 
description: ``, 
ballon: `Vehicles with this key, this function performs key programming and remote control.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando.jpg`},

{title: ``, 
description: ``, 
ballon: `Vehicles with this key, this function performs only remote control programming. Use the function OBD0083 to perform the key programming.`, 
image: `/images/Chaves e Telecomandos/Programação Telecomando 2.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Connect the universal cable to the A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Connect the universal cable to the A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The diagnostic socket of the Corolla vehicle is located in the area A5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = true;
services = 
[{title: `Erasing keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Toyota`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Erase Keys?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`At&nbsp;first&nbsp;use`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;valid&nbsp;Key`,
`<br />`,
],
help: `You need to have a programmed key to perform the procedure.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
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
`Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Insert, switch ignition ON and Press OK in 10 seconds.`
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
`Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: `Press OK!`
},
]
}, {title: `Adding Keys`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Toyota`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. Key?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`At&nbsp;first&nbsp;use`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;valid&nbsp;Key`,
`<br />`,
],
help: `You need to have a programmed key to perform the procedure.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
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
`Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK!`,
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
`Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;and&nbsp;press&nbsp;OK!`,
`<br />`,
],
help: `Switch ignition OFF, remove the key and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Insert&nbsp;new&nbsp;key`,
`&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Insert, switch ignition ON and Press OK in 10 seconds.`
},
{lines: [
`&nbsp;`,
`Wait&nbsp;around`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01&nbsp;minute!`,
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
help: `Press OK!`
},
]
}, {title: `Erasing the Remote Control`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Toyota`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Erase Control`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`NOTICE!&nbsp;Close`,
`&nbsp;&nbsp;all&nbsp;the&nbsp;doors!`,
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
`Press&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;<img class="imgCarac" src="images/padlockClose.png" />&nbsp;&nbsp;&nbsp;&nbsp;`,
`both&nbsp;4x&nbsp;e&nbsp;`,
`press&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;1x`,
`<br />`,
],
help: `Press Open/Close together 4x and Open 1x (Open and Close are represented by locks open and closed on OBDMap display)`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: `Press OK!`
},
]
}, {title: `Programming the Remote Control`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Toyota`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Toyota`, `>Corolla 2009`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Corolla 2009`, `>Prog. control?`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`NOTICE!&nbsp;Close`,
`&nbsp;&nbsp;all&nbsp;the&nbsp;doors!`,
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
`Press&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;<img class="imgCarac" src="images/padlockClose.png" />&nbsp;&nbsp;&nbsp;&nbsp;`,
`both&nbsp;4x&nbsp;e&nbsp;`,
`press&nbsp;<img class="imgCarac" src="images/padlockOpen.png" />&nbsp;1x`,
`<br />`,
],
help: `Press Open/Close together 4x and Open 1x (Open and Close are represented by locks open and closed on OBDMap display)`
},
{lines: [
`&nbsp;`,
`End`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: `Press OK!`
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
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,``,]
},
{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;`,
`adapter!`,
`<br />`,
],
causes: [
`The cables used are not universal cable + A3 adapter,`,`Bad contact in the universal cable + A3 adapter in the OBDMap.`,],
solutions: [
`Check if the cables used are universal cable + A3 adapter,`,`Check connection of the cables in the OBDMap,`,`Check connection of the universal cable with the A3 adapter.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
