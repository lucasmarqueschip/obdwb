//Capa
nomeCarga = `Manual Software -  OBD0009<br />Key Programming Tracker T19`;
revCarga = `Rev. 1`;
dataManual = `January 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Programming utmost 4 keys to the vehicle.`,
``,
`Observation:`,
`The keys programmed will work only in this vehicle. This software only perform the key programming, it do not erase old keys and do not check the keys number programmed in the vehicle. If add a 5th key, a previous key do not will work more.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `GM`,
model: `Tracker 2.0`,
years: `2002 a 2007`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Use a blue key, locked T19 (ID 46), with image generator to Suzuki.`, 
image: `/images/Chaves e Telecomandos/Chave azul t19 GM.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Use the Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBD.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: `The vehicle diagnostic socket is located in the area D6.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D6.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `Performing the key programming`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`&nbsp;`,
`Use`,
`A2&nbsp;Adapter!`,
`<br />`,
],
help: `Used in the Type 1 system.`
},
{lines: [
`&nbsp;`,
`Use`,
`A2&nbsp;Adapter!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`Use&nbsp;the&nbsp;T19&nbsp;chip&nbsp;&nbsp;&nbsp;&nbsp;`,
`with&nbsp;image&nbsp;&nbsp;&nbsp;`,
`generator&nbsp;to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Suzuki`,
],
help: `Press OK!`
},
{lines: [
`Use&nbsp;the&nbsp;T19&nbsp;chip&nbsp;&nbsp;&nbsp;&nbsp;`,
`with&nbsp;image&nbsp;&nbsp;&nbsp;`,
`generator&nbsp;to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Suzuki`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;&nbsp;ignition`,
`ON&nbsp;and&nbsp;press&nbsp;OK`,
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
`Wait...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programmed&nbsp;`,
`Key!`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`Programmed&nbsp;`,
`Key!`,
`<br />`,
],
help: `Press OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Communication ERROR!`,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the most recent update with the technical support, maybe this function has been altered.`,]
},
{ label: `Programming ERROR!`,
screens: [
`Programming`,
`ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`The battery of the remote control is low,`,`The antennas of the remote control might not be in perfect functioning,`,`The remote control is not inside the vehicle,`,`The key is not in ignition,`,`The programming is note complete,`,`The transponder is not programmed for the car,`,`Defective car, electrical part, proximity sensors.`,],
solutions: [
`Check the battery of the remote control,`,`Check the antennas of the proximity system in the roof of the vehicle,`,`Put the remote control inside the vehicle,`,`Put the key into the ignition,`,`Check if the transponder is programmed to the vehicle,`,`Perform the procedure again,`,`Check the electrical part of the vehicle, fuses, proximity sensors, etc.`,]
},
{ label: `Chip ERROR!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Generation procedure is necessary for this transponder, or it needs to be validated in the vehicle before the presentation. `,],
solutions: [
]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
