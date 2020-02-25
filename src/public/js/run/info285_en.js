//Capa
nomeCarga = `Manual Software -  OBD0285<br />`;
revCarga = `Rev. 2`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Ford`,
model: `EcoSport 1.6`,
years: `2015 a 2017`
},
{
manufacturer: `Ford`,
model: `EcoSport 2.0`,
years: `2015 a 2017`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: ``, 
image: `/images/Transponders/ID-4D.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Universal cable + A3 adapter.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
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
[{title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Erasing&nbsp;Past`,
`&nbsp;&nbsp;&nbsp;&nbsp;Failures`,
`<br />`,
],
help: ``
},
{lines: [
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `If it is the last key that will be programmed
 go to the step`
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
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Number&nbsp;of`,
`&nbsp;&nbsp;&nbsp;&nbsp;failures`,
`&nbsp;&nbsp;&nbsp;&nbsp;BSI:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Testing`,
`&nbsp;Compatibility`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Number&nbsp;of&nbsp;keys`,
`&nbsp;programmed:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Select:`,
`Add&nbsp;Key`,
`Erase&nbsp;Key`,
`Exit`,
],
help: ``
},
{lines: [
`&nbsp;All&nbsp;keys&nbsp;will`,
`&nbsp;&nbsp;be&nbsp;erased!`,
`&lt;OK&gt;&nbsp;Continue`,
`&lt;VOLTA&gt;&nbsp;Exit`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;ATTENTION!`,
`&nbsp;Keep&nbsp;in&nbsp;hands`,
`&nbsp;&nbsp;&nbsp;&nbsp;02&nbsp;keys!`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Use&nbsp;the`,
`ID4D-63&nbsp;special`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chip`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `If it is the last key that will be programmed
 go to the step`
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
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
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
`&nbsp;Number&nbsp;of&nbsp;keys`,
`&nbsp;programmed:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `If it is the last key that will be programmed
 go to the step`
},
{lines: [
`&nbsp;&nbsp;Turn&nbsp;on&nbsp;the`,
`first&nbsp;key&nbsp;to&nbsp;be`,
`&nbsp;programmed&nbsp;and`,
`&nbsp;&nbsp;&nbsp;press&nbsp;&lt;OK&gt;`,
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
`&nbsp;Remove&nbsp;the&nbsp;key`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;&nbsp;Turn&nbsp;on&nbsp;the`,
`second&nbsp;key&nbsp;to&nbsp;be`,
`&nbsp;programmed&nbsp;and`,
`&nbsp;&nbsp;&nbsp;press&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Switch&nbsp;ignition`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OFF`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `If it is the last key that will be programmed
 go to the step`
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End`,
`&nbsp;&nbsp;&nbsp;Procedure!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
help: `Press OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;`,
`adapter!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Programming ERROR! `,
screens: [
`&nbsp;&nbsp;Programming`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
`The battery of the remote control is low,`,`The antennas of the remote control might not be in perfect functioning,`,`The remote control is not inside the vehicle,`,`The key is not in ignition,`,`The programming is not complete,`,`The chip is not programmed for the car,`,`Defective car, electrical part, proximity sensors.`,],
solutions: [
`Check the battery of the remote control,`,`Check the antennas of the proximity system in the roof of the vehicle,`,`Put the remote control inside the vehicle,`,`Put the key into the ignition,`,`Check if the chip is programmed to the vehicle,`,`Perform the procedure again,`,`Check the electrical part of the vehicle, fuses, proximity sensors, etc.`,]
},
{ label: `Comunication ERROR or imcompatible vehicle! <OK>`,
screens: [
`&nbsp;&nbsp;Comunication`,
`&nbsp;&nbsp;&nbsp;&nbsp;ERROR&nbsp;or`,
`&nbsp;&nbsp;imcompatible`,
`&nbsp;vehicle!&nbsp;&lt;OK&gt;`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Access Denied! ** Pulsa <OK>`,
screens: [
`&nbsp;Access&nbsp;Denied!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`The dashboard is not compatible to this application.`,],
solutions: [
`Check the application.`,]
},
{ label: `Incompatible vehicle! `,
screens: [
`&nbsp;&nbsp;Incompatible`,
`&nbsp;&nbsp;&nbsp;&nbsp;vehicle!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `ERROR in the CAN network!!! `,
screens: [
`&nbsp;&nbsp;ERROR&nbsp;in&nbsp;the`,
`&nbsp;CAN&nbsp;network!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Press&nbsp;&lt;OK&gt;`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
