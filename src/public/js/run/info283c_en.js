//Capa
nomeCarga = `Manual Software -  OBD0283<br />`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdution`;
introSubtitle = `This software performs the following functions:`;
lstFunc = [
`Test a compatibilidade do sistema`,
`Apaga falhas passadas do calculador`,
`Leitura de senha (É necessario ter uma chave válida)`,
`Apaga chaves antigas`,
`Realiza cópia de chaves`,
`Programação de telecomando automatico`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplication`;
applicationTable = `<th>Manufacturer</th><th>Model</th><th>Year</th>`;
models = [
{
manufacturer: `Renault`,
model: `Kwid 1.0`,
years: `2017 a 2020`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chave kwid edit.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Connect universal cable`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `All accessories are connected to perform the procedure via diagnosis.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/I4.jpg`},
];
lblStep = "Step";
lblCause = "Probable causes:";
lblSolution = "Solutions:";
lblSummary = "Summary";
lblErrorMessage = "Error Messages";

obdmap = false;
services = 
[
{title: `Realizando o teste de compatibilidade`,
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
`Testing&nbsp;compatibily...`,
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
`Compatible&nbsp;vehicle!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `After all connected accessories, follow the following steps on the OBDMap display:`,
screens: [
{lines: [
`Attention!`,
`The&nbsp;battery&nbsp;must&nbsp;be&nbsp;charged.`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Caution, if the battery is low it can cause
damage in the dashboard. Press OK!`
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
`Testing&nbsp;compatibily...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Reading&nbsp;PIN`,
`Wait...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Reading&nbsp;BC.`,
`Wait...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Writing&nbsp;BC.`,
`Wait&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`The&nbsp;Service&nbsp;lasts&nbsp;approximately&nbsp;**&nbsp;`,
`minutes`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Attention!
The battery must be charged.`
},
{lines: [
`All&nbsp;keys&nbsp;will&nbsp;be&nbsp;erased!`,
`&lt;OK&gt;&nbsp;Continue`,
`&lt;VOLTA&gt;&nbsp;Exit`,
`<br />`,
],
help: `The keys already programmed will be
    erased.`
},
{lines: [
`&nbsp;`,
`Switch&nbsp;ignition&nbsp;ON!`,
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
`OFF!`,
`<br />`,
],
help: ``
},
{lines: [
`Keys&nbsp;number:&nbsp;*`,
`Program&nbsp;more?`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)YES`,
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
`End&nbsp;Procedure!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
help: `Press OK!`
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
`Alert!&nbsp;`,
`Do&nbsp;not&nbsp;give&nbsp;ignition&nbsp;with&nbsp;the&nbsp;OBDMAP&nbsp;`,
`Connected!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Other messages`;
othersMessage = [
{ label: `Communication ERROR! `,
screens: [
`&nbsp;`,
`Communication&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`Vehicle fault, electrical part,`,`OBDMap software has expired,`,`Accessories bad connection.`,],
solutions: [
`Check if the battery is connected,`,`Check the electrical part of the vehicle, fuses, etc,`,`Check if the universal cable and A1 adapter are being used,`,`Check the OBDMap connection in the diagnostic socket and other connections,`,`Disconnect all the cables, wait for 10 seconds and connect it again,`,`Check the more recent update with the technical support, maybe this function has been altered.`,]
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
{ label: `Invalid PIN! `,
screens: [
`Invalid`,
`PIN!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`·	The PIN code inserted is wrong,`,`·	Vehicle under waiting time due to consecutive attempts with wrong PIN codes. (depending on the system)`,],
solutions: [
`·	Check the PIN code that was typed,`,`·	Wait x secons with ignition switched on and try again with the correct PIN. (depending on the system)`,]
},
{ label: `Chip ERROR! `,
screens: [
`&nbsp;`,
`Transponder&nbsp;ERROR!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
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
{ label: `Contact technical support [A.K.A.**]`,
screens: [
`Contact&nbsp;technical&nbsp;support`,
`[A.K.A.**]`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Comunication ERROR or imcompatible vehicle!`,
screens: [
`Comunication&nbsp;ERROR&nbsp;or&nbsp;imcompatible&nbsp;`,
`vehicle!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Unknown error (**) `,
screens: [
`&nbsp;`,
`Unknown&nbsp;error&nbsp;(**)`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Internal ERROR code: ** `,
screens: [
`&nbsp;`,
`Internal&nbsp;ERROR&nbsp;code:&nbsp;**`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Error Bluetooth Module!`,
screens: [
`&nbsp;`,
`Error&nbsp;Bluetooth&nbsp;module!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
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
{ label: `PIN not Found! `,
screens: [
`&nbsp;`,
`PIN&nbsp;not&nbsp;Found!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
`<br />`,
],
causes: [
`ECU file is corrupted,`,`ECU invalide file,`,`ECU PIN code might be reset.`,],
solutions: [
` `,]
},
{ label: `Alert! Do not give ignition with the OBDMAP Connected <OK>`,
screens: [
`Alert!&nbsp;`,
`Do&nbsp;not&nbsp;give&nbsp;ignition&nbsp;with&nbsp;the&nbsp;OBDMAP&nbsp;`,
`Connected!`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
],
causes: [
],
solutions: [
]
},
{ label: `Error Internal PP-PG 0* `,
screens: [
`Error&nbsp;Internal&nbsp;PP-PG&nbsp;`,
`0*&nbsp;`,
`Press&nbsp;&lt;OK&gt;&nbsp;to&nbsp;continue`,
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
