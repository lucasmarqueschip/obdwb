//Capa
nomeCarga = `Manual Software -  OBD0285<br />`;
revCarga = `Rev. 2`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
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
ballon: `Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = false;
services = 
[
{title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Erasing&nbsp;past&nbsp;failures...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;OFF&nbsp;`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;failures&nbsp;BSI:&nbsp;**`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Testing&nbsp;compatibily...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;keys&nbsp;programmed:&nbsp;*`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: ``
},
{lines: [
`Program&nbsp;Keys`,
`Erase&nbsp;Keys&nbsp;`,
`Exit`,
`<br />`,
],
help: ``
},
{lines: [
`All&nbsp;keys&nbsp;will&nbsp;be&nbsp;erased!`,
`&nbsp;&lt;OK&gt;&nbsp;Continue`,
`&lt;VOLTA&gt;&nbsp;Exit&nbsp;&nbsp;`,
`<br />`,
],
help: ``
},
{lines: [
`ATTENTION!`,
`Keep&nbsp;in&nbsp;hands&nbsp;02&nbsp;keys!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;the&nbsp;ID4D-63&nbsp;special&nbsp;chip`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;OFF&nbsp;`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
`Number&nbsp;of&nbsp;keys&nbsp;programmed:&nbsp;*`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;OFF&nbsp;`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`Remove&nbsp;the&nbsp;key`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;OFF&nbsp;`,
`Press&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Use CAN cable or CAN A3 adapter!`,
screens: [
`&nbsp;`,
`Use&nbsp;CAN&nbsp;cable`,
`or&nbsp;CAN&nbsp;A3&nbsp;adapter!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Programming ERROR! `,
screens: [
`Programming`,
`ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`The battery of the remote control is low,`,`The antennas of the remote control might not be in perfect functioning,`,`The remote control is not inside the vehicle,`,`The key is not in ignition,`,`The programming is not complete,`,`The chip is not programmed for the car,`,`Defective car, electrical part, proximity sensors.`,],
solutions: [
`Check the battery of the remote control,`,`Check the antennas of the proximity system in the roof of the vehicle,`,`Put the remote control inside the vehicle,`,`Put the key into the ignition,`,`Check if the chip is programmed to the vehicle,`,`Perform the procedure again,`,`Check the electrical part of the vehicle, fuses, proximity sensors, etc.`,]
},
{ label: `Comunication ERROR or imcompatible vehicle! <OK>`,
screens: [
`Comunication&nbsp;Error!&nbsp;Verify`,
`1.&nbsp;Error&nbsp;in&nbsp;CAN&nbsp;Network&nbsp;-&nbsp;Remove&nbsp;all&nbsp;`,
`DTCs`,
`2.&nbsp;Incompatible&nbsp;vehicle&nbsp;with&nbsp;this&nbsp;`,
`service`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Access Denied! ** Pulsa <OK>`,
screens: [
`Access&nbsp;Denied!`,
`**`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
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
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `ERROR in the CAN network!!! `,
screens: [
`&nbsp;`,
`ERROR&nbsp;in&nbsp;the&nbsp;CAN&nbsp;network!!!`,
`Press&nbsp;&lt;OK&gt;&nbsp;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
