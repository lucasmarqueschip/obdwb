//Capa
nomeCarga = `Manual Software -  OBD0210<br />Hyundai Keyless1 Proximity Keys Programming`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Reading of the programmed proximity  keys number in the vehicle.`,
`Programming until 4 proximity keys for vehicles contained in the application.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Hyundai`,
model: `Ix35`,
years: `2010 a 2017`
},
{
manufacturer: `Hyundai`,
model: `Veloster`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Sonata`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Elantra`,
years: `2012 a 2013`
},
{
manufacturer: `KIA`,
model: `Sportage 2.0`,
years: `2012 a `
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/keyless kia hyundai.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Use the universal cable + A1 adapter.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `All accessories are connected to perform the procedure by OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

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
[{title: `Reading of the proximity keys number`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Hyundai`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Hyundai`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Keyless 1`, `>Num. of Key`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`Let&nbsp;ignition&nbsp;in`,
`&nbsp;&nbsp;OFF&nbsp;position`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Open&nbsp;driver's`,
`&nbsp;&nbsp;door!&nbsp;&nbsp;&lt;OK&gt;`,
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
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of keys currently programmed in the vehicle. Press OK!`
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
`Finished`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]
}, {title: `Proximity key programming Type 1 (Vehicles ix35 and Sonata)`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Hyundai`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Hyundai`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Keyless 1`, `>Type 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Type 1`, `>Prog Proximity`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`ATTENTION:Do&nbsp;not`,
`insert&nbsp;the&nbsp;`,
`incorrect&nbsp;PIN&nbsp;`,
`more&nbsp;than&nbsp;3x&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;The&nbsp;vehicle`,
`&nbsp;might&nbsp;locked!`,
`<br />`,
],
help: ``
},
{lines: [
`Let&nbsp;ignition&nbsp;in`,
`&nbsp;&nbsp;OFF&nbsp;position`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;All&nbsp;keys&nbsp;will`,
`&nbsp;&nbsp;be&nbsp;erased!`,
`&nbsp;&lt;OK&gt;&nbsp;Continue`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Exit`,
],
help: `The proximity keys already programmed will be erased. Press OK!`
},
{lines: [
`&nbsp;`,
`Number&nbsp;of`,
`Keys:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Choose the number of keys to be programmed. Press OK!`
},
{lines: [
`&nbsp;`,
`PIN..:000000`,
`<br />`,
`<br />`,
],
help: `Enter the vehicle PIN code (Obtained with the dealership). Press OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Insert&nbsp;the&nbsp;key`,
`in&nbsp;the&nbsp;slot&nbsp;&lt;OK&gt;`,
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
`&nbsp;Remove&nbsp;the&nbsp;key`,
`of&nbsp;the&nbsp;slot&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `If you have chosen to programm more than one key, follow step 16, otherwise follow step 17. Press OK!`
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
`Insert&nbsp;next&nbsp;key`,
`in&nbsp;the&nbsp;slot&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insert the next key to be programmed in the slot. Press OK!`
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
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of keys currently programmed in the vehicle. Press OK!`
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
`Finished`,
`&nbsp;&nbsp;Procedure!`,
`<br />`,
],
help: ``
},
]
}, {title: `Proximity key programming Type 2 (Vehicles Elantra and Veloster)`,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [`Select:`, `>Diagnosis`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Diagnosis`, `>Hyundai`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Hyundai`, `>Keyless 1`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Keyless 1`, `>Type 2`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`Type 2`, `>Prog Proximity`, `<br /><br />`], help: `Press OK`, menu: 1000},
{lines: [`<br />Loading...<br />Please<br /><br />`], help: ``},
{lines: [
`Let&nbsp;ignition&nbsp;in`,
`&nbsp;&nbsp;OFF&nbsp;position`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Press OK!`
},
{lines: [
`&nbsp;All&nbsp;keys&nbsp;will`,
`&nbsp;&nbsp;be&nbsp;erased!`,
`&nbsp;&lt;OK&gt;&nbsp;Continue`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Exit`,
],
help: `The proximity keys already programmed will be erased. Press OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Open&nbsp;driver's`,
`&nbsp;&nbsp;door!&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `During the procedure, keep opened the driver's door. Press OK!`
},
{lines: [
`&nbsp;`,
`Number&nbsp;of`,
`Keys:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Choose the number of keys to be programmed. Press OK!`
},
{lines: [
`&nbsp;`,
`PIN..:000000`,
`<br />`,
`<br />`,
],
help: `Enter the vehicle PIN code (Obtained with the dealership). Press OK!`
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
`Press&nbsp;the&nbsp;START`,
`button&nbsp;with&nbsp;the&nbsp;&nbsp;`,
`own&nbsp;key&nbsp;by&nbsp;2s.`,
`<br />`,
],
help: `Press the Start button with the key to be programmed during 2 seconds. Press OK! If you have chosen to programm more than one key, follow step 16, otherwise follow step 17.`
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
`with&nbsp;the&nbsp;next`,
`key!!!`,
`<br />`,
],
help: `Using the next key to be programmed, go back to step 14.`
},
{lines: [
`&nbsp;`,
`Number&nbsp;of&nbsp;Keys`,
`Pro.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Number of keys currently programmed in the vehicle. Press OK!`
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
`Finished`,
`&nbsp;&nbsp;Procedure!`,
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
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnosis connector and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the most recent update with the technical support.`,]
},
{ label: `Programming ERROR!`,
screens: [
`&nbsp;`,
`Programming`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERROR!`,
`<br />`,
],
causes: [
`The remote control battery is low,`,`The antennas of the remote control might not be in perfect functioning,`,`The remote control is not inside the vehicle,`,`The key is not in ignition,`,`The programming is not complete,`,`The chip is not programmed for the car,`,`Defective car, electrical part, proximity sensors.`,``,],
solutions: [
`Check the battery of the remote control,`,`Check the antennas of the proximity system in the roof of the vehicle,`,`Put the remote control inside the vehicle,`,`Put the key into the ignition,`,`Check if the chip is programmed to the vehicle,`,`Perform the procedure again,`,`Check the electrical part of the vehicle, fuses, proximity sensors, etc.`,]
},
{ label: `Invalid PIN!`,
screens: [
`&nbsp;`,
`Invalid`,
`&nbsp;&nbsp;&nbsp;PIN!`,
`<br />`,
],
causes: [
`The PIN code inserted is wrong,`,`Vehicle is under waiting time due to consecutive attempts with wrong PIN codes. `,``,],
solutions: [
`Check the PIN code that was entered,`,`Wait 1 hour with ignition switched on and try again with the correct PIN.`,``,``,]
},

];
//Last Message
lastMsg = `If the above errors persist, or for other messages consult technical support`;
